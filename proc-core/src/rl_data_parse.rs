use core::fmt;
use std::{
    collections::{BTreeMap, HashMap}, rc::Rc
};

use enum_id_derive::EnumId;
use serde::{
    Deserialize, Deserializer, Serialize,
    de::{self, MapAccess, Visitor, value::SeqAccessDeserializer},
};

use crate::{
    dataset::DataSetConf,
    model::{Classification, Stack},
};

use super::model::{Data, DataParser, Factory, FactoryGroup, Item, Process};

#[derive(Debug, EnumId)]
pub enum DataParserRecipeListerFiles {
    AssemblingMachines,
    Furnace,
    RocketSilo,
    MiningDrill,
    Items,
    Fluids,
    Recipe,
    Resource,
}
impl DataParserRecipeListerFiles {
    pub fn to_key(&self) -> String {
        self.name()
    }
}

pub struct DataParserRecipeLister {}
impl DataParserRecipeLister {
    fn extract_factory_groups(
        assembling_machines: &HashMap<String, AssemblingMachine>,
        furnaces: &HashMap<String, AssemblingMachine>,
        rocket_silo: &HashMap<String, AssemblingMachine>,
        mining_drill: &HashMap<String, MiningMachine>,
    ) -> Result<HashMap<String, Rc<FactoryGroup>>, String> {
        let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();

        for m in [assembling_machines, furnaces, rocket_silo] {
            factory_groups.extend(m.iter().flat_map(|m| {
                m.1.crafting_categories
                    .iter()
                    .map(|c| (c.0.clone(), Rc::new(FactoryGroup { id: c.0.clone() })))
            }));
        }
        factory_groups.extend(mining_drill.iter().flat_map(|m| {
            m.1.resource_categories.iter().map(|c| {
                let n = format!("resource-{}", c.0);
                (n.clone(), Rc::new(FactoryGroup { id: n }))
            })
        }));

        Ok(factory_groups)
    }

    fn extract_factories(
        assembling_machines: &HashMap<String, AssemblingMachine>,
        furnaces: &HashMap<String, AssemblingMachine>,
        rocket_silo: &HashMap<String, AssemblingMachine>,
        mining_drill: &HashMap<String, MiningMachine>,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
    ) -> Result<HashMap<String, Rc<Factory>>, String> {
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();

        for m in [assembling_machines, furnaces, rocket_silo] {
            factories.extend(
                m.iter()
                    .map(|m| (m.0.clone(), Rc::new(m.1.new_factory_from(factory_groups)))),
            );
        }
        factories.extend(
            mining_drill
                .iter()
                .map(|m| (m.0.clone(), Rc::new(m.1.new_factory_from(factory_groups)))),
        );

        Ok(factories)
    }

    fn extract_items(
        items: &HashMap<String, ItemJ>,
        fluids: &HashMap<String, Fluid>,
        recipes: &HashMap<String, Recipe>,
    ) -> Result<(HashMap<String, Rc<Item>>, HashMap<String, Vec<(f64, Rc<Item>)>>), String> {

        let mut result: HashMap<String, Rc<Item>> = items.iter().map(
            |(k, v)| (k.clone(), Rc::new(v.new_item_from()))
        ).collect();

        result.extend(fluids.iter().map(
            |(k, v)| (k.clone(), Rc::new(v.new_item_from()))
        ));

        // for each recipe, find products that have a temperature.
        // remove the corresponding basic Item and add a replacement with an appropriate id/name
        // add first then remove at the end so that the correct classification is copied.
        let mut items_with_temperatures = HashMap::new();
        for (_k, recipe) in recipes.iter() {
            if recipe.products.is_some() {
                for product in recipe.products.as_ref().unwrap() {
                    if product.temperature.is_some() {
                        let new_id = product.create_id();
                        if ! result.contains_key(&new_id) {
                            let existing = result.get(&product.name).cloned();
                            let new_item = Rc::new(Item {
                                id: new_id.clone(),
                                display: format!("{} ({}°C)", product.name, product.temperature.unwrap() as i64),
                                classification: match &existing {
                                    None => Classification::Fluid,
                                    Some(i) => i.classification.clone()
                                }
                            });
                            result.insert(new_id.clone(), new_item.clone());
                            if ! items_with_temperatures.contains_key(&product.name) {
                                items_with_temperatures.insert(product.name.clone(), Vec::new());
                            }
                            items_with_temperatures.get_mut(&product.name).unwrap().push( (product.temperature.unwrap(), new_item.clone()) );
                        }
                    }
                }
            }
        }

        Ok((result, items_with_temperatures))
    }

    fn extract_processes(
        recipes: &HashMap<String, Recipe>,
        resources: &HashMap<String, Resource>,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
        items: &HashMap<String, Rc<Item>>,
        items_with_temperatures: &HashMap<String, Vec<(f64, Rc<Item>)>>,
    ) -> Result<HashMap<String, Rc<Process>>, String> {
        let mut processes: HashMap<String, Rc<Process>> = HashMap::new();

        for (_id, recipe) in recipes {
            // let procs = recipe.new_processes_from(factory_groups, items, &HashMap::new())?; // XXX should fail here
            let procs = recipe.new_processes_from(factory_groups, items, items_with_temperatures)?;
            for proc in procs {
                processes.insert(proc.id.clone(), Rc::new(proc));
            }
        }

        processes.extend(
            resources
                .iter()
                .map(|(k, v)| -> Result<Option<(String, Rc<Process>)>, String> {
                    match v.new_process_from(factory_groups, items)? {
                        None => Ok(None),
                        Some(proc) => Ok(Some((format!("resource-{}", k.clone()), Rc::new(proc)))),
                    }
                })
                .filter(|v| v.as_ref().is_ok_and(|t| t.is_some()))
                .map(|v| v.map(|t| t.unwrap()))
                .collect::<Result<Vec<(String, Rc<Process>)>, String>>()?,
        );

        Ok(processes)
    }

    fn parse_as<'de, T>(
        &self,
        f: &DataParserRecipeListerFiles,
        jsons: &'de mut BTreeMap<String, String>,
    ) -> Result<HashMap<String, T>, String>
    where
        T: Deserialize<'de>,
    {
        serde_json::from_str::<HashMap<String, T>>(jsons.get(&f.to_key()).unwrap())
            .map_err(|e| format!("file ref: '{}', {}", f.to_key(), e))
    }
}

impl DataParser for DataParserRecipeLister {
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<String, String> {
        let mut result = BTreeMap::new();
        result.insert(
            DataParserRecipeListerFiles::AssemblingMachines.to_key(),
            format!("data/{}/assembling-machine.json", conf.id),
        );
        result.insert(
            DataParserRecipeListerFiles::Furnace.to_key(),
            format!("data/{}/furnace.json", conf.id),
        );
        result.insert(
            DataParserRecipeListerFiles::RocketSilo.to_key(),
            format!("data/{}/rocket-silo.json", conf.id),
        );
        result.insert(
            DataParserRecipeListerFiles::MiningDrill.to_key(),
            format!("data/{}/mining-drill.json", conf.id),
        );
        result.insert(
            DataParserRecipeListerFiles::Items.to_key(),
            format!("data/{}/item.json", conf.id),
        );
        result.insert(
            DataParserRecipeListerFiles::Fluids.to_key(),
            format!("data/{}/fluid.json", conf.id),
        );
        result.insert(
            DataParserRecipeListerFiles::Recipe.to_key(),
            format!("data/{}/recipe.json", conf.id),
        );
        result.insert(
            DataParserRecipeListerFiles::Resource.to_key(),
            format!("data/{}/resource.json", conf.id),
        );
        result
    }

    fn parse(&self, jsons: &mut BTreeMap<String, String>) -> Result<Data, String> {
        let assembling_machines =
            self.parse_as(&DataParserRecipeListerFiles::AssemblingMachines, jsons)?;
        let furnaces = self.parse_as(&DataParserRecipeListerFiles::Furnace, jsons)?;
        let rocket_silo = self.parse_as(&DataParserRecipeListerFiles::RocketSilo, jsons)?;
        let mining_drill = self.parse_as(&DataParserRecipeListerFiles::MiningDrill, jsons)?;
        let recipe = self.parse_as(&DataParserRecipeListerFiles::Recipe, jsons)?;
        let resource = self.parse_as(&DataParserRecipeListerFiles::Resource, jsons)?;
        let items = self.parse_as(&DataParserRecipeListerFiles::Items, jsons)?;
        let fluids = self.parse_as(&DataParserRecipeListerFiles::Fluids, jsons)?;

        // let mut parsed: BTreeMap<String, Value> = BTreeMap::new();
        // for (k, v) in jsons.iter() {
        //     parsed.insert(
        //         k.clone(),
        //         serde_json::from_str(v).map_err(|e| format!("{e}"))?,
        //     );
        // }

        let factory_groups = Self::extract_factory_groups(
            &assembling_machines,
            &furnaces,
            &rocket_silo,
            &mining_drill,
        )?;
        let factories = Self::extract_factories(
            &assembling_machines,
            &furnaces,
            &rocket_silo,
            &mining_drill,
            &factory_groups,
        )?;
        let (items, items_with_temperatures) = Self::extract_items(&items, &fluids, &recipe)?;
        let processes = Self::extract_processes(&recipe, &resource, &factory_groups, &items, &items_with_temperatures)?;

        Ok(Data {
            items,
            factory_groups,
            factories,
            processes,
        })
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct ItemJ {
    name: String,
}
impl ItemJ {
    fn new_item_from(&self) -> Item {
        Item {
            id: self.name.clone(),
            display: self.name.clone(),
            classification: Classification::Solid,
        }
    }
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct Fluid {
    name: String,
}
impl Fluid {
    fn new_item_from(&self) -> Item {
        Item {
            id: self.name.clone(),
            display: self.name.clone(),
            classification: Classification::Fluid,
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct AssemblingMachine {
    name: String,
    crafting_categories: HashMap<String, bool>,
    crafting_speed: f64,
}
impl AssemblingMachine {
    fn new_factory_from(&self, factory_groups: &HashMap<String, Rc<FactoryGroup>>) -> Factory {
        Factory {
            id: self.name.clone(),
            display: self.name.clone(),
            duration_multiplier: 1.0 / self.crafting_speed,
            inputs_multiplier: 1.0,
            outputs_multiplier: 1.0,
            groups: self
                .crafting_categories
                .iter()
                .map(|c| factory_groups.get(c.0.as_str()).cloned().unwrap())
                .collect(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct MiningMachine {
    name: String,
    resource_categories: HashMap<String, bool>,
    mining_speed: f64,
}
impl MiningMachine {
    fn new_factory_from(&self, factory_groups: &HashMap<String, Rc<FactoryGroup>>) -> Factory {
        Factory {
            id: self.name.clone(),
            display: self.name.clone(),
            duration_multiplier: 1.0 / self.mining_speed,
            inputs_multiplier: 1.0,
            outputs_multiplier: 1.0,
            groups: self
                .resource_categories
                .iter()
                .map(|c| {
                    factory_groups
                        .get(&format!("resource-{}", c.0))
                        .cloned()
                        .unwrap()
                })
                .collect(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct Recipe {
    name: String,
    category: String,
    energy: f64,
    #[serde(default, deserialize_with = "vec_or_empty")]
    ingredients: Option<Vec<Ingredient>>,
    #[serde(default, deserialize_with = "vec_or_empty")]
    products: Option<Vec<Product>>,
}
impl Recipe {
    fn new_processes_from(
        &self,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
        items: &HashMap<String, Rc<Item>>,
        items_with_temperatures: &HashMap<String, Vec<(f64, Rc<Item>)>>
    ) -> Result<Vec<Process>, String> {
        eprintln!("recipe: processing {}", self.name);
        if ! factory_groups.contains_key(&self.category) {
            eprintln!("recipe: skipping {} due to a missing factory group ({})", self.name, self.category);
            return Ok(Vec::new());
        }
        if self.has_temperature_input() {
            self.permute_temperature_inputs(factory_groups.get(&self.category).unwrap().clone(), items, items_with_temperatures)
        } else {
            self.new_basic_process(factory_groups.get(&self.category).unwrap().clone(), items)
        }
    }

    fn permute_temperature_inputs(
        &self,
        factory_group: Rc<FactoryGroup>,
        items: &HashMap<String, Rc<Item>>,
        items_with_temperatures: &HashMap<String, Vec<(f64, Rc<Item>)>>
    ) -> Result<Vec<Process>, String> {
        println!("new temperature process: {}", self.name);
        let mut input_options: Vec<Vec<Stack>> = Vec::new();
        for ingredient in self.ingredients.as_ref().unwrap_or(&Vec::new()) {
            input_options.push(ingredient.new_inputs_from(items, items_with_temperatures).inspect_err(|e| eprintln!("recipe: skipping {}: {}", self.name, e))?);
        }
        let permutations = permute(&input_options);
        eprintln!("permuted: {:?}", permutations);
        let mut result = Vec::new();

        for (perm_idx, permutation) in permutations.iter().enumerate() {
            let process = Process {
                id: format!("{}--{}", self.name, perm_idx),
                display: self.name.clone(),
                duration: self.energy,
                group: factory_group.clone(),
                inputs: permutation.iter().enumerate()
                    .map(|(idx, pos)| input_options.get(idx).unwrap().get(*pos).unwrap())
                    .cloned()
                    .collect(),
                inputs_unmod: permutation.iter().enumerate()
                    .map(|(idx, pos)| input_options.get(idx).unwrap().get(*pos).unwrap())
                    .cloned()
                    .collect(),
                outputs: self.products.as_ref().unwrap().iter()
                    .map(|o| o.new_output_from(items).inspect_err(|e| eprintln!("recipe: skipping {}: {}", self.name, e)))
                    .collect::<Result<Vec<Stack>, String>>()?,
                outputs_unmod: self.products.as_ref().unwrap().iter()
                    .map(|o| o.new_output_unmod_from(items).inspect_err(|e| eprintln!("recipe: skipping {}: {}", self.name, e)))
                    .collect::<Result<Vec<Stack>, String>>()?,
            };
            eprintln!("resulting process: {:?}", process);
            result.push(process);
        }

        Ok(result)
    }

    fn has_temperature_input(&self) -> bool {
        if self.ingredients.is_none() {
            return false
        }
        self.ingredients.as_ref().unwrap().iter()
                .any(|input| input.has_temperature_range())
    }

    fn new_basic_process(
        &self,
        factory_group: Rc<FactoryGroup>,
        items: &HashMap<String, Rc<Item>>,
    ) -> Result<Vec<Process>, String> {
        println!("new basic process: {}", self.name);
        Ok(vec![Process {
            id: self.name.clone(),
            display: self.name.clone(),
            duration: self.energy,
            group: factory_group,
            inputs: self.ingredients.as_ref().unwrap().iter()
                .map(|i| i.new_input_from(items).inspect_err(|e| eprintln!("recipe: skipping {}: {}", self.name, e)))
                .collect::<Result<Vec<Stack>, String>>()?,
            inputs_unmod: self.ingredients.as_ref().unwrap().iter()
                .map(|i| i.new_input_unmod_from(items).inspect_err(|e| eprintln!("recipe: skipping {}: {}", self.name, e)))
                .collect::<Result<Vec<Stack>, String>>()?,
            outputs: self.products.as_ref().unwrap().iter()
                .map(|o| o.new_output_from(items).inspect_err(|e| eprintln!("recipe: skipping {}: {}", self.name, e)))
                .collect::<Result<Vec<Stack>, String>>()?,
            outputs_unmod: self.products.as_ref().unwrap().iter()
                .map(|o| o.new_output_unmod_from(items).inspect_err(|e| eprintln!("recipe: skipping {}: {}", self.name, e)))
                .collect::<Result<Vec<Stack>, String>>()?,
        }])
    }
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct Ingredient {
    name: String,
    amount: Option<f64>,
    minimum_temperature: Option<f64>,
    maximum_temperature: Option<f64>,
}
impl Ingredient {
    fn has_temperature_range(&self) -> bool {
        self.minimum_temperature.is_some() || self.maximum_temperature.is_some()
    }
    fn within_temperature_range(&self, value: &f64) -> bool {
        self.minimum_temperature.unwrap_or(f64::MIN) <= *value && *value <= self.maximum_temperature.unwrap_or(f64::MAX)
    }
    fn new_input_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items
                .get(&self.name)
                .cloned()
                .ok_or_else(|| format!("failed to find item {}", self.name))?,
            quantity: self.amount.unwrap_or(0.0),
        })
    }
    fn new_inputs_from(&self,
        items: &HashMap<String, Rc<Item>>,
        items_with_temperatures: &HashMap<String, Vec<(f64, Rc<Item>)>>
    ) -> Result<Vec<Stack>, String> {
        if self.has_temperature_range() {
            eprintln!("  current ingredient {}, between {} and {}", self.name, self.minimum_temperature.unwrap_or(f64::MIN), self.maximum_temperature.unwrap_or(f64::MAX));
            for (k, v) in items_with_temperatures {
                for (t, i) in v {
                    eprintln!("  k: {} t: {}, name: {}", k, t, i.id);
                }
            }

            let mut result = items_with_temperatures.get(&self.name).unwrap().iter()
                .filter(|(n, item)| {
                    let r = self.within_temperature_range(n);
                    eprintln!("temp range filter {} {} <= {} <= {} === {}", item.id, self.minimum_temperature.unwrap_or(f64::MIN), n, self.maximum_temperature.unwrap_or(f64::MAX), r);
                    r
                })
                .map(|(_n, item)| {
                    Ok(Stack {
                        item: item.clone(),
                        quantity: self.amount.unwrap_or(0.0)
                    })

                }).peekable();
            if result.peek().is_none() {
                return Err(format!("failed to find a temperature based item for {} between {} and {}", self.name, self.minimum_temperature.unwrap_or(f64::MIN), self.maximum_temperature.unwrap_or(f64::MAX)));
            }
            result.collect()
        } else {
            Ok(vec![self.new_input_from(items)?])
        }
    }

    fn new_input_unmod_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items
                .get(&self.name)
                .cloned()
                .ok_or_else(|| format!("failed to find item {}", self.name))?,
            quantity: 0.0,
        })
    }
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct Product {
    name: String,
    amount: Option<f64>,
    probability: Option<f64>,
    extra_count_fraction: Option<f64>,
    amount_min: Option<f64>,
    amount_max: Option<f64>,
    temperature: Option<f64>,
    ignored_by_productivity: Option<f64>,
}
impl Product {
    fn new_output_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items
                .get(&self.create_id())
                .cloned()
                .ok_or_else(|| format!("failed to find item {}", self.name))?,
            quantity: self.calculate_quantity(),
        })
    }
    fn new_output_unmod_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items
                .get(&self.create_id())
                .cloned()
                .ok_or_else(|| format!("failed to find item {}", self.name))?,
            quantity: self.calculate_unmod_quantity(),
        })
    }
    fn calculate_quantity(&self) -> f64 {
        ((self.amount.unwrap_or(0.0) * self.probability.unwrap_or(1.0))
            + self.extra_count_fraction.unwrap_or(0.0))
            + (self
                .amount_min
                .zip(self.amount_max)
                .map(|(i, a)| i + ((a - i) / 2.0)))
            .unwrap_or(0.0)
            - self.ignored_by_productivity.unwrap_or(0.0)
    }
    fn calculate_unmod_quantity(&self) -> f64 {
        self.ignored_by_productivity.unwrap_or(0.0)
    }
    fn create_id(&self) -> String {
        if self.temperature.is_some() {
            println!("  creating output id for {}, {}--{}", self.name, self.name, self.temperature.unwrap());
            format!("{}--{}", self.name, self.temperature.unwrap() as i64)
        } else {
            self.name.clone()
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct Resource {
    name: String,
    resource_category: String,
    mineable_properties: MineableProps,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct MineableProps {
    mining_time: f64,
    #[serde(default, deserialize_with = "vec_or_empty")]
    products: Option<Vec<Product>>,
    fluid_amount: Option<f64>,
    required_fluid: Option<String>,
}
impl Resource {
    fn new_process_from(
        &self,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
        items: &HashMap<String, Rc<Item>>,
    ) -> Result<Option<Process>, String> {
        if self.mineable_properties.products.is_none() {
            return Ok(None);
        }
        Ok(Some(Process {
            id: format!("resource-{}", self.name),
            display: self.name.clone(),
            duration: self.mineable_properties.mining_time,
            group: factory_groups
                .get(&format!("resource-{}", self.resource_category))
                .cloned()
                .ok_or_else(|| format!("missing factory group: {}", self.resource_category))?,
            inputs: self
                .mineable_properties
                .required_fluid
                .as_ref()
                .zip(self.mineable_properties.fluid_amount)
                .map(|(f, q)| Stack {
                    item: items.get(f.as_str()).cloned().unwrap(),
                    quantity: q,
                })
                .into_iter()
                .collect(),
            inputs_unmod: vec![],
            outputs: self
                .mineable_properties
                .products
                .as_ref()
                .unwrap()
                .iter()
                .map(|o| o.new_output_from(items))
                .collect::<Result<Vec<Stack>, String>>()?,
            outputs_unmod: self
                .mineable_properties
                .products
                .as_ref()
                .unwrap()
                .iter()
                .map(|o| o.new_output_unmod_from(items))
                .collect::<Result<Vec<Stack>, String>>()?,
        }))
    }
}

struct VecOrEmpty<T>(Vec<T>);
impl<T> VecOrEmpty<T> {
    fn into_inner(self) -> Vec<T> {
        self.0
    }
}
impl<'de, T> Deserialize<'de> for VecOrEmpty<T>
where
    T: Deserialize<'de>,
{
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        struct VecOrEmptyVisitor<T>(std::marker::PhantomData<T>);
        impl<'de, T> Visitor<'de> for VecOrEmptyVisitor<T>
        where
            T: Deserialize<'de>,
        {
            type Value = VecOrEmpty<T>;
            fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
                formatter.write_str("list or (empty)map")
            }
            fn visit_seq<A>(self, seq: A) -> Result<Self::Value, A::Error>
            where
                A: de::SeqAccess<'de>,
            {
                Ok(VecOrEmpty(Deserialize::deserialize(
                    SeqAccessDeserializer::new(seq),
                )?))
            }
            fn visit_map<A>(self, _map: A) -> Result<Self::Value, A::Error>
            where
                A: MapAccess<'de>,
            {
                Ok(VecOrEmpty(Vec::new()))
            }
        }
        deserializer.deserialize_any(VecOrEmptyVisitor(std::marker::PhantomData))
    }
}
fn vec_or_empty<'de, T, D>(deserializer: D) -> Result<Option<Vec<T>>, D::Error>
where
    T: Deserialize<'de>,
    D: Deserializer<'de>,
{
    Ok(Some(
        VecOrEmpty::deserialize(deserializer).map(|sov| sov.into_inner())?,
    ))
}

fn permute<T>(input: &Vec<Vec<T>>) -> Vec<Vec<usize>> {
    let mut mutable: Vec<Vec<usize>> = Vec::new();
    for r in input {
        mutable.push(r.iter().enumerate().map(|(i, _)| i).collect());
    }
    eprintln!("permuting: {:?}", mutable);
    _permute(&mut mutable, vec![])
}

fn _permute(input: &mut Vec<Vec<usize>>, out: Vec<Vec<usize>>) -> Vec<Vec<usize>> {
    if input.len() == 0 {
        return out;
    }
    let entry = input.remove(0);
    if out.len() > 0 {
        let mut r = Vec::new();
        for o in out {
            for e in &entry {
                let mut o2 = o.clone();
                o2.push(*e);
                r.push(o2);
            }
        }
        return _permute(input, r);
    } else {
        let mut r = Vec::new();
        for v in entry {
            r.push(vec![v]);
        }
        return _permute(input, r);
    }
}

#[cfg(test)]
mod test {
    use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

    use itertools::Itertools;

    use crate::fixtures::load_fixture;

    use super::*;
    static INIT: std::sync::Once = std::sync::Once::new();

    fn setup_tracing() {
        INIT.call_once(|| {
            tracing_subscriber::registry()
                .with(
                    tracing_subscriber::fmt::Layer::default()
                        .with_ansi(true)
                        .with_writer(std::io::stdout)
                        .compact(),
                )
                .try_init()
                .map_err(|e| e.to_string())
                .unwrap();
        });
    }

    fn create_input_fixture() -> BTreeMap<String, String> {
        setup_tracing();
        let mut jsons = BTreeMap::new();
        jsons.insert(
            DataParserRecipeListerFiles::AssemblingMachines
                .to_key()
                .to_string(),
            load_fixture("fixtures/assembling-machine.json").to_string(),
        );
        jsons.insert(
            DataParserRecipeListerFiles::Furnace.to_key().to_string(),
            load_fixture("fixtures/furnace.json").to_string(),
        );
        jsons.insert(
            DataParserRecipeListerFiles::RocketSilo.to_key().to_string(),
            load_fixture("fixtures/rocket-silo.json").to_string(),
        );
        jsons.insert(
            DataParserRecipeListerFiles::MiningDrill
                .to_key()
                .to_string(),
            load_fixture("fixtures/mining-drill.json").to_string(),
        );
        jsons.insert(
            DataParserRecipeListerFiles::Fluids.to_key().to_string(),
            load_fixture("fixtures/fluid.json").to_string(),
        );
        jsons.insert(
            DataParserRecipeListerFiles::Items.to_key().to_string(),
            load_fixture("fixtures/item.json").to_string(),
        );
        jsons.insert(
            DataParserRecipeListerFiles::Recipe.to_key().to_string(),
            load_fixture("fixtures/recipe.json").to_string(),
        );
        jsons.insert(
            DataParserRecipeListerFiles::Resource.to_key().to_string(),
            load_fixture("fixtures/resource.json").to_string(),
        );
        jsons
    }

    #[test]
    fn it_loads_all_factory_groups() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();

        assert_eq!(
            r.factory_groups
                .values()
                .map(|fg| fg.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "advanced-crafting",
                "angels-advanced-chemistry",
                "angels-cooling",
                "angels-petrochem-boiler",
                "angels-water-enrichment",
                "angels-water-treatment",
                "basic-crafting",
                "centrifuging",
                "crafting",
                "crafting-with-fluid",
                "electronics",
                "parameters",
                "pressing",
                "recycling",
                "recycling-or-hand-crafting",
                "resource-basic-fluid",
                "resource-basic-solid",
                "resource-hard-solid",
                "rocket-building",
                "smelting",
            ]
        )
    }

    #[test]
    fn it_loads_all_factories() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(
            r.factories
                .values()
                .map(|fg| fg.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "assembling-machine-1",
                "assembling-machine-3",
                "big-mining-drill",
                "centrifuge",
                "electric-furnace",
                "electric-mining-drill",
                "everything",
                "pumpjack",
                "recycler",
                "rocket-silo",
                "steel-furnace",
            ]
        )
    }

    #[test]
    fn it_loads_info_for_factories() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let factory = r.factories.get("assembling-machine-3").unwrap();

        assert_eq!(factory.id, "assembling-machine-3");
        assert_eq!(factory.display, "assembling-machine-3");
        assert_eq!(factory.duration_multiplier, 0.8);
        assert_eq!(factory.inputs_multiplier, 1.0);
        assert_eq!(factory.outputs_multiplier, 1.0);
        assert_eq!(
            factory
                .groups
                .iter()
                .map(|g| g.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "advanced-crafting",
                "basic-crafting",
                "crafting",
                "crafting-with-fluid",
                "electronics",
                "parameters",
            ]
        );
    }

    #[test]
    fn it_loads_info_for_mining_drills_into_factories() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let factory = r.factories.get("big-mining-drill").unwrap();

        assert_eq!(factory.id, "big-mining-drill");
        assert_eq!(factory.display, "big-mining-drill");
        assert_eq!(factory.duration_multiplier, 0.4);
        assert_eq!(factory.inputs_multiplier, 1.0);
        assert_eq!(factory.outputs_multiplier, 1.0);
        assert_eq!(
            factory
                .groups
                .iter()
                .map(|g| g.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["resource-basic-solid", "resource-hard-solid",]
        );
    }

    #[test]
    fn it_loads_all_items() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(
            r.items
                .values()
                .map(|fg| fg.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "advanced-circuit",
                "angels-gas-enriched-hydrogen-sulfide",
                "angels-gas-hydrogen-sulfide",
                "angels-liquid-water-heavy",
                "angels-liquid-water-heavy--100",
                "angels-liquid-water-heavy--25",
                "angels-liquid-water-semiheavy-2",
                "angels-liquid-water-semiheavy-3",
                "angels-liquid-water-semiheavy-3--100",
                "angels-water-green-waste",
                "angels-water-purified",
                "angels-water-saline",
                "big-mining-drill",
                "coal",
                "crude-oil",
                "electric-engine-unit",
                "electric-mining-drill",
                "iron-chest",
                "scrap",
                "steam",
                "steam--125",
                "steel-chest",
                "sulfuric-acid",
                "tungsten-carbide",
                "tungsten-ore",
                "uranium-235",
                "uranium-238",
                "uranium-ore",
                "water",
                "wood",
                "wooden-chest",
            ]
        )
    }

    #[test]
    fn it_loads_all_processes() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(
            r.processes
                .values()
                .map(|fg| fg.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "Moss-1-without-sludge",
                "angels-heavy-water-cooling--0", // input between 26C and MAX_INT; output at 25C
                "angels-liquid-water-heavy--0", // input between MIN_INT and 25C; output at 100C
                "angels-liquid-water-semiheavy-3", // outputs at 100C
                "big-mining-drill-recycling",
                "kovarex-enrichment-process",
                "parameter-0",
                "resource-coal",
                "resource-crude-oil",
                "resource-scrap",
                "resource-tungsten-ore",
                "resource-uranium-ore",
                "uranium-processing",
                "wooden-chest",
            ]
        )
    }

    #[test]
    fn it_understands_process_with_unmodifiable_io() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("kovarex-enrichment-process").unwrap();
        assert_eq!(process.id, "kovarex-enrichment-process");
        assert_eq!(process.display, "kovarex-enrichment-process");
        assert_eq!(process.duration, 60.0);
        assert_eq!(process.group.id, "centrifuging");
        assert_eq!(
            process
                .inputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-235", "uranium-238"]
        );
        assert_eq!(
            process
                .inputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[40.0, 5.0]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-235", "uranium-238"]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[1.0, 0.0]
        );
        assert_eq!(
            process
                .inputs_unmod
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-235", "uranium-238"]
        );
        assert_eq!(
            process
                .inputs_unmod
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[0.0, 0.0]
        );
        assert_eq!(
            process
                .outputs_unmod
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-235", "uranium-238"]
        );
        assert_eq!(
            process
                .outputs_unmod
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[40.0, 2.0]
        );
    }

    #[test]
    fn it_understands_process_with_temperature_restricted_io() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("angels-heavy-water-cooling--0").unwrap();
        assert_eq!(
            process
                .inputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| (s.item.id.as_str(), s.quantity))
                .collect::<Vec<(&str, f64)>>(),
            &[
                ("angels-liquid-water-heavy--100", 100.0),
                ("angels-water-purified", 25.0),
            ]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| (s.item.id.as_str(), s.quantity))
                .collect::<Vec<(&str, f64)>>(),
            &[
                ("angels-liquid-water-heavy--25", 0.0),
                ("steam--125", 25.0),
            ]
        );
        assert_eq!(
            process
                .outputs_unmod
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| (s.item.id.as_str(), s.quantity))
                .collect::<Vec<(&str, f64)>>(),
            &[
                ("angels-liquid-water-heavy--25", 100.0),
                ("steam--125", 0.0),
            ]
        );
    }

    #[test]
    fn it_understands_process_with_probablistic_io() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("uranium-processing").unwrap();
        assert_eq!(process.id, "uranium-processing");
        assert_eq!(process.display, "uranium-processing");
        assert_eq!(process.duration, 12.0);
        assert_eq!(process.group.id, "centrifuging");
        assert_eq!(
            process
                .inputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-ore"]
        );
        assert_eq!(
            process
                .inputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[10.0]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-235", "uranium-238"]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[0.007, 0.993]
        );
        assert_eq!(
            process
                .inputs_unmod
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-ore"]
        );
        assert_eq!(
            process
                .inputs_unmod
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[0.0]
        );
        assert_eq!(
            process
                .outputs_unmod
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-235", "uranium-238"]
        );
        assert_eq!(
            process
                .outputs_unmod
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[0.0, 0.0]
        );
    }

    #[test]
    fn it_understands_recycling_processes() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("big-mining-drill-recycling").unwrap();
        assert_eq!(process.id, "big-mining-drill-recycling");
        assert_eq!(process.display, "big-mining-drill-recycling");
        assert_eq!(process.duration, 1.875);
        assert_eq!(process.group.id, "recycling");
        assert_eq!(
            process
                .inputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["big-mining-drill"]
        );
        assert_eq!(
            process
                .inputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[1.0]
        );
        assert_eq!(
            process
                .inputs_unmod
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["big-mining-drill"]
        );
        assert_eq!(
            process
                .inputs_unmod
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[0.0]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "advanced-circuit",
                "electric-engine-unit",
                "electric-mining-drill",
                "tungsten-carbide"
            ]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[2.5, 2.5, 0.25, 5.0]
        );
        assert_eq!(
            process
                .outputs_unmod
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "advanced-circuit",
                "electric-engine-unit",
                "electric-mining-drill",
                "tungsten-carbide"
            ]
        );
        assert_eq!(
            process
                .outputs_unmod
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[0.0, 0.0, 0.0, 0.0]
        );
    }

    #[test]
    fn it_understands_resource_processes_with_inputs() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("resource-uranium-ore").unwrap();

        assert_eq!(process.id, "resource-uranium-ore");
        assert_eq!(process.display, "uranium-ore");
        assert_eq!(process.duration, 2.0);
        assert_eq!(process.group.id, "resource-basic-solid");
        assert_eq!(
            process
                .inputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["sulfuric-acid"]
        );
        assert_eq!(
            process
                .inputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[10.0]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["uranium-ore"]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[1.0]
        );
    }

    #[test]
    fn it_understands_resource_processes_without_inputs() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("resource-coal").unwrap();

        assert_eq!(process.id, "resource-coal");
        assert_eq!(process.display, "coal");
        assert_eq!(process.duration, 1.0);
        assert_eq!(process.group.id, "resource-basic-solid");
        assert_eq!(
            process
                .inputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>()
                .is_empty(),
            true
        );
        assert_eq!(
            process
                .inputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>()
                .is_empty(),
            true
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["coal"]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[1.0]
        );
    }

    #[test]
    fn it_understands_resource_processes_with_probablistic_range_of_inputs() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister {}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("Moss-1-without-sludge").unwrap();

        assert_eq!(process.id, "Moss-1-without-sludge");
        assert_eq!(process.display, "Moss-1-without-sludge");
        assert_eq!(process.duration, 100.0);
        assert_eq!(process.group.id, "centrifuging");
        assert_eq!(
            process
                .inputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["crude-oil", "steam"]
        );
        assert_eq!(
            process
                .inputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[100.0, 100.0]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .map(|s| s.item.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["scrap", "wood"]
        );
        assert_eq!(
            process
                .outputs
                .iter()
                .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
                .map(|s| s.quantity)
                .collect::<Vec<f64>>(),
            &[5.5, 8.0]
        );
    }

    #[test]
    fn calculates_basic_output_count() {
        let p = Product {
            name: "a".to_string(),
            amount: Some(1.0),
            ..Default::default()
        };
        assert_eq!(1.0, p.calculate_quantity());
    }

    #[test]
    fn calculates_probablistic_output_count() {
        let p = Product {
            name: "a".to_string(),
            amount: Some(1.0),
            probability: Some(0.5),
            ..Default::default()
        };
        assert_eq!(0.5, p.calculate_quantity());
    }

    #[test]
    fn calculates_recycling_output_count() {
        let p = Product {
            name: "a".to_string(),
            amount: Some(1.0),
            extra_count_fraction: Some(0.25),
            ..Default::default()
        };
        assert_eq!(1.25, p.calculate_quantity());
    }

    #[test]
    fn calculates_probablistic_range_output_count() {
        let p = Product {
            name: "a".to_string(),
            amount_min: Some(3.0),
            amount_max: Some(6.0),
            ..Default::default()
        };
        assert_eq!(4.5, p.calculate_quantity());
    }

    #[test]
    fn calculates_output_with_unmod_count() {
        let p = Product {
            name: "a".to_string(),
            amount: Some(1.0),
            ignored_by_productivity: Some(1.0),
            ..Default::default()
        };
        assert_eq!(0.0, p.calculate_quantity());
    }

    #[test]
    fn calculates_permutations() {
        let input = vec![
            vec!["first0", "first1", "first2"],
            vec!["second0"],
            vec!["third0", "third1"]
        ];
        let result = permute(&input);
        assert_eq!(
            vec![
                vec![0, 0, 0],
                vec![0, 0, 1],
                vec![1, 0, 0],
                vec![1, 0, 1],
                vec![2, 0, 0],
                vec![2, 0, 1],
            ],
            result
        )
    }

}
