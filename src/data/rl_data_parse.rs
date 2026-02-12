use core::fmt;
use std::{collections::{BTreeMap, HashMap}, rc::Rc};

use serde::{Deserialize, Deserializer, Serialize, de::{self, MapAccess, Visitor, value:: SeqAccessDeserializer}};
use serde_json::Value;

use crate::data::{dataset::DataSetConf, model::{Classification, Stack}};

use super::model::{Data, DataParser, Factory, FactoryGroup, Item, Process};



#[derive(Debug)]
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
        match &self {
            Self::AssemblingMachines => "AssemblingMachines".to_string(),
            Self::Furnace => "Furnace".to_string(),
            Self::RocketSilo => "RocketSilo".to_string(),
            Self::MiningDrill => "MiningDrill".to_string(),
            Self::Items => "Items".to_string(),
            Self::Fluids => "Fluids".to_string(),
            Self::Recipe => "Recipe".to_string(),
            Self::Resource => "Resource".to_string(),
        }
    }
}

pub struct DataParserRecipeLister {}
impl DataParserRecipeLister {

    fn extract_factory_groups(
            assembling_machines: &HashMap<String, AssemblingMachine>,
            furnaces: &HashMap<String, AssemblingMachine>,
            rocket_silo: &HashMap<String, AssemblingMachine>,
            mining_drill: &HashMap<String, MiningMachine>
            ) -> Result<HashMap<String, Rc<FactoryGroup>>, String> {
        let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();

        for m in [assembling_machines, furnaces, rocket_silo] {
            factory_groups.extend(m.iter()
                .flat_map(|m|
                    m.1.crafting_categories.iter()
                        .map(|c| (c.0.clone(), Rc::new(FactoryGroup{id: c.0.clone() })))
                )
            );
        }
        factory_groups.extend(mining_drill.iter()
            .flat_map(|m|
                m.1.resource_categories.iter()
                    .map(|c| {
                        let n = format!("resource-{}", c.0);
                        (n.clone(), Rc::new(FactoryGroup{id: n }))
                    })
            )
        );

        Ok(factory_groups)
    }

    fn extract_factories(
            assembling_machines: &HashMap<String, AssemblingMachine>,
            furnaces: &HashMap<String, AssemblingMachine>,
            rocket_silo: &HashMap<String, AssemblingMachine>,
            mining_drill: &HashMap<String, MiningMachine>,
            factory_groups: &HashMap<String, Rc<FactoryGroup>>
            ) -> Result<HashMap<String, Rc<Factory>>, String> {
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();

        for m in [assembling_machines, furnaces, rocket_silo] {
            factories.extend(
                m.iter()
                    .map(|m|
                        (m.0.clone(), Rc::new(m.1.new_factory_from(factory_groups)))
                    )
            );
        }
        factories.extend(
            mining_drill.iter()
                .map(|m|
                    (m.0.clone(), Rc::new(m.1.new_factory_from(factory_groups)))
                )
        );

        Ok(factories)
    }

    fn extract_items(parsed: &BTreeMap<String, Value>) -> Result<HashMap<String, Rc<Item>>, String> {
        let mut items: HashMap<String, Rc<Item>> = HashMap::new();

        for k in &[
                DataParserRecipeListerFiles::Items,
                DataParserRecipeListerFiles::Fluids,
                ] {
            let classification = match &k {
                DataParserRecipeListerFiles::Items => Some(Classification::Solid),
                DataParserRecipeListerFiles::Fluids => Some(Classification::Fluid),
                _ => None,
            }.ok_or(format!("Unable to classify {k:?} as a solid or fluid"))?;
            items.extend(
                parsed.get(&k.to_key()).ok_or(format!("missing json {k:?}"))?
                    .as_object().ok_or(format!("missing root object in {k:?}"))?
                    .into_iter()
                    .map(|(id, val)| -> Result<(String, Rc<Item>), String> {
                        Ok((
                            id.clone(),
                            Rc::new(Item{
                                id: val.get("name").ok_or(format!("missing name in {id} from {k:?}"))?
                                        .as_str().ok_or(format!("{k:?} {id}.name was not a string"))?
                                        .to_string(),
                                display: id.clone(), // TODO find the i18n files and use.
                                classification: classification.clone(),
                            })
                        ))
                    })
                    .collect::<Result<Vec<(String, Rc<Item>)>, String>>()?
            );
        }

        Ok(items)
    }

    fn extract_processes(
            recipes: &HashMap<String, Recipe>,
            resources: &HashMap<String, Resource>,
            factory_groups: &HashMap<String, Rc<FactoryGroup>>,
            items: &HashMap<String, Rc<Item>>
        ) -> Result<HashMap<String, Rc<Process>>, String> {
        let mut processes: HashMap<String, Rc<Process>> = HashMap::new();

        processes.extend(
            recipes.iter()
                .map(|(k, v)| -> Result<Option<(String, Rc<Process>)>, String> {
                    match v.new_process_from(factory_groups, items)? {
                        None => Ok(None),
                        Some(proc) => Ok(Some((
                            k.clone(),
                            Rc::new(proc)
                        )))
                    }
                }
            )
            .filter(|v| v.as_ref().is_ok_and(|t| t.is_some()))
            .map(|v| v.map(|t| t.unwrap()))
            .collect::<Result<Vec<(String, Rc<Process>)>, String>>()?
        );

        processes.extend(
            resources.iter()
                .map(|(k, v)| -> Result<Option<(String, Rc<Process>)>, String> {
                    match v.new_process_from(factory_groups, items)? {
                        None => Ok(None),
                        Some(proc) => Ok(Some((
                            format!("resource-{}", k.clone()),
                            Rc::new(proc)
                        )))
                    }
                })
                .filter(|v| v.as_ref().is_ok_and(|t| t.is_some()))
                .map(|v| v.map(|t| t.unwrap()))
                .collect::<Result<Vec<(String, Rc<Process>)>, String>>()?
        );

        Ok(processes)
    }

    fn parse_as<'de, T>(&self, f: &DataParserRecipeListerFiles, jsons: &'de mut BTreeMap<String, String>) -> Result<HashMap<String, T>, String>
        where T: Deserialize<'de>
    {
        serde_json::from_str::<HashMap<String, T>>(
            jsons.get(&f.to_key()).unwrap()
        ).map_err(|e| format!("file ref: '{}', {}", f.to_key(), e))
    }
}


impl DataParser for DataParserRecipeLister {
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<String, String> {
        let mut result = BTreeMap::new();
        result.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key(), format!("data/{}/assembling-machine.json", conf.id));
        result.insert(DataParserRecipeListerFiles::Furnace.to_key(), format!("data/{}/furnace.json", conf.id));
        result.insert(DataParserRecipeListerFiles::RocketSilo.to_key(), format!("data/{}/rocket-silo.json", conf.id));
        result.insert(DataParserRecipeListerFiles::MiningDrill.to_key(), format!("data/{}/mining-drill.json", conf.id));
        result.insert(DataParserRecipeListerFiles::Items.to_key(), format!("data/{}/item.json", conf.id));
        result.insert(DataParserRecipeListerFiles::Fluids.to_key(), format!("data/{}/fluid.json", conf.id));
        result.insert(DataParserRecipeListerFiles::Recipe.to_key(), format!("data/{}/recipe.json", conf.id));
        result.insert(DataParserRecipeListerFiles::Resource.to_key(), format!("data/{}/resource.json", conf.id));
        result
    }

    fn parse(&self, jsons: &mut BTreeMap<String, String>) -> Result<Data, String> {
        let assembling_machines = self.parse_as(&DataParserRecipeListerFiles::AssemblingMachines, jsons)?;
        let furnaces = self.parse_as(&DataParserRecipeListerFiles::Furnace, jsons)?;
        let rocket_silo = self.parse_as(&DataParserRecipeListerFiles::RocketSilo, jsons)?;
        let mining_drill = self.parse_as(&DataParserRecipeListerFiles::MiningDrill, jsons)?;
        let recipe = self.parse_as(&DataParserRecipeListerFiles::Recipe, jsons)?;
        let resource = self.parse_as(&DataParserRecipeListerFiles::Resource, jsons)?;

        let mut parsed: BTreeMap<String, Value> = BTreeMap::new();
        for (k, v) in jsons.iter() {
            parsed.insert(k.clone(), serde_json::from_str(v).map_err(|e| format!("{e}"))?);
        }

        let factory_groups = Self::extract_factory_groups(&assembling_machines, &furnaces, &rocket_silo,  &mining_drill)?;
        let factories = Self::extract_factories(&assembling_machines, &furnaces, &rocket_silo,  &mining_drill, &factory_groups)?;
        let items = Self::extract_items(&parsed)?;
        let processes = Self::extract_processes(&recipe, &resource, &factory_groups, &items)?;

        Ok(Data{items, factory_groups, factories, processes})
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
        Factory{
            id: self.name.clone(),
            display: self.name.clone(),
            duration_multiplier: 1.0/self.crafting_speed,
            inputs_multiplier: 1.0,
            outputs_multiplier: 1.0,
            groups: self.crafting_categories.iter().map(|c|
                factory_groups.get(c.0.as_str()).cloned().unwrap()
            ).collect(),
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
        Factory{
            id: self.name.clone(),
            display: self.name.clone(),
            duration_multiplier: 1.0/self.mining_speed,
            inputs_multiplier: 1.0,
            outputs_multiplier: 1.0,
            groups: self.resource_categories.iter().map(|c|
                factory_groups.get(&format!("resource-{}", c.0)).cloned().unwrap()
            ).collect(),
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
    fn new_process_from(&self,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
        items: &HashMap<String, Rc<Item>>
    ) -> Result<Option<Process>, String> {
        let group = factory_groups.get(&self.category).cloned();
        if group.is_none() {
            return Ok(None);
        }
        Ok(Some(Process {
            id: self.name.clone(),
            display: self.name.clone(),
            duration: self.energy,
            group: group.unwrap(),
            inputs: self.ingredients.as_ref().unwrap().iter()
                .map(|i| i.new_input_from(items) )
                .collect::<Result<Vec<Stack>, String>>()?,
            inputs_unmod: self.ingredients.as_ref().unwrap().iter()
                .map(|i| i.new_input_unmod_from(items) )
                .collect::<Result<Vec<Stack>, String>>()?,
            outputs: self.products.as_ref().unwrap().iter()
                .map(|o| o.new_output_from(items))
                .collect::<Result<Vec<Stack>, String>>()?,
            outputs_unmod: self.products.as_ref().unwrap().iter()
                .map(|o| o.new_output_unmod_from(items))
                .collect::<Result<Vec<Stack>, String>>()?,
        }))
    }
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct Ingredient {
    name: String,
    amount: Option<f64>,

}
impl Ingredient {
    fn new_input_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items.get(&self.name).cloned().ok_or_else(|| format!("failed to find item {}", self.name))?,
            quantity: self.amount.unwrap_or(0.0),
        })
    }
    fn new_input_unmod_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items.get(&self.name).cloned().ok_or_else(|| format!("failed to find item {}", self.name))?,
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
    ignored_by_productivity: Option<f64>,
}
impl Product {
    fn new_output_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items.get(&self.name).cloned().ok_or_else(|| format!("failed to find item {}", self.name))?,
            quantity: self.calculate_quantity(),
        })
    }
    fn new_output_unmod_from(&self, items: &HashMap<String, Rc<Item>>) -> Result<Stack, String> {
        Ok(Stack {
            item: items.get(&self.name).cloned().ok_or_else(|| format!("failed to find item {}", self.name))?,
            quantity: self.calculate_unmod_quantity(),
        })
    }
    fn calculate_quantity(&self) -> f64 {
        ((self.amount.unwrap_or(0.0) * self.probability.unwrap_or(1.0))
            + self.extra_count_fraction.unwrap_or(0.0))
        + (self.amount_min.zip(self.amount_max).map(|(i, a)| i + ((a - i) / 2.0))).unwrap_or(0.0)
        - self.ignored_by_productivity.unwrap_or(0.0)
    }
    fn calculate_unmod_quantity(&self) -> f64 {
        self.ignored_by_productivity.unwrap_or(0.0)
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
    fn new_process_from(&self,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
        items: &HashMap<String, Rc<Item>>
    ) -> Result<Option<Process>, String> {
        if self.mineable_properties.products.is_none() {
            return Ok(None);
        }
        Ok(Some(Process {
            id: format!("resource-{}", self.name),
            display: self.name.clone(),
            duration: self.mineable_properties.mining_time,
            group: factory_groups.get(&format!("resource-{}", self.resource_category)).cloned().ok_or_else(|| format!("missing factory group: {}", self.resource_category))?,
            inputs: self.mineable_properties.required_fluid.as_ref().zip(self.mineable_properties.fluid_amount)
                .map(|(f, q)| Stack{
                    item: items.get(f.as_str()).cloned().unwrap(),
                    quantity: q,
                }).into_iter().collect(),
            inputs_unmod: vec![],
            outputs: self.mineable_properties.products.as_ref().unwrap().iter()
                .map(|o| o.new_output_from(items))
                .collect::<Result<Vec<Stack>, String>>()?,
            outputs_unmod: self.mineable_properties.products.as_ref().unwrap().iter()
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
            D: Deserializer<'de> {
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
                    A: de::SeqAccess<'de>, {
                Ok(VecOrEmpty(Deserialize::deserialize(SeqAccessDeserializer::new(seq))?))
            }
            fn visit_map<A>(self, _map: A) -> Result<Self::Value, A::Error>
                where
                    A: MapAccess<'de>, {
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
    Ok(Some(VecOrEmpty::deserialize(deserializer).map(|sov| sov.into_inner())?))
}

#[cfg(test)]
mod test {
    use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

    use itertools::Itertools;

    use crate::data::{fixtures::load_fixture};

    use super::*;
    static INIT: std::sync::Once = std::sync::Once::new();

    fn setup_tracing() {
        INIT.call_once(|| {
            tracing_subscriber::registry()
                .with(tracing_subscriber::fmt::Layer::default()
                .with_ansi(true)
                .with_writer(std::io::stdout)
                .compact())
                .try_init().map_err(|e| e.to_string())
                .unwrap();
        });
    }

    fn create_input_fixture() -> BTreeMap<String, String> {
        setup_tracing();
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key().to_string(), load_fixture("fixtures/assembling-machine.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::Furnace.to_key().to_string(), load_fixture("fixtures/furnace.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::RocketSilo.to_key().to_string(), load_fixture("fixtures/rocket-silo.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::MiningDrill.to_key().to_string(), load_fixture("fixtures/mining-drill.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::Fluids.to_key().to_string(), load_fixture("fixtures/fluid.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::Items.to_key().to_string(), load_fixture("fixtures/item.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::Recipe.to_key().to_string(), load_fixture("fixtures/recipe.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::Resource.to_key().to_string(), load_fixture("fixtures/resource.json").to_string());
        jsons
    }

    #[test]
    fn it_loads_all_factory_groups() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();

        assert_eq!(r.factory_groups.values().map(|fg| fg.id.clone()).sorted().collect::<Vec<String>>(), &[
            "advanced-crafting",
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
        ])
    }

    #[test]
    fn it_loads_all_factories() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.factories.values().map(|fg| fg.id.clone()).sorted().collect::<Vec<String>>(), &[
            "assembling-machine-1",
            "assembling-machine-3",
            "big-mining-drill",
            "centrifuge",
            "electric-furnace",
            "electric-mining-drill",
            "pumpjack",
            "recycler",
            "rocket-silo",
            "steel-furnace",
        ])
    }

    #[test]
    fn it_loads_info_for_factories() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let factory = r.factories.get("assembling-machine-3").unwrap();

        assert_eq!(factory.id, "assembling-machine-3");
        assert_eq!(factory.display, "assembling-machine-3");
        assert_eq!(factory.duration_multiplier, 0.8);
        assert_eq!(factory.inputs_multiplier, 1.0);
        assert_eq!(factory.outputs_multiplier, 1.0);
        assert_eq!(factory.groups.iter().map(|g| g.id.clone()).sorted().collect::<Vec<String>>(), &[
            "advanced-crafting",
            "basic-crafting",
            "crafting",
            "crafting-with-fluid",
            "electronics",
            "parameters",
        ]);
    }

    #[test]
    fn it_loads_info_for_mining_drills_into_factories() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let factory = r.factories.get("big-mining-drill").unwrap();

        assert_eq!(factory.id, "big-mining-drill");
        assert_eq!(factory.display, "big-mining-drill");
        assert_eq!(factory.duration_multiplier, 0.4);
        assert_eq!(factory.inputs_multiplier, 1.0);
        assert_eq!(factory.outputs_multiplier, 1.0);
        assert_eq!(factory.groups.iter().map(|g| g.id.clone()).sorted().collect::<Vec<String>>(), &[
            "resource-basic-solid",
            "resource-hard-solid",
        ]);
    }

    #[test]
    fn it_loads_all_items() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.items.values().map(|fg| fg.id.clone()).sorted().collect::<Vec<String>>(), &[
            "advanced-circuit",
            "big-mining-drill",
            "coal",
            "crude-oil",
            "electric-engine-unit",
            "electric-mining-drill",
            "iron-chest",
            "scrap",
            "steam",
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
        ])
    }

    #[test]
    fn it_loads_all_processes() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.processes.values().map(|fg| fg.id.clone()).sorted().collect::<Vec<String>>(), &[
            "Moss-1-without-sludge",
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
        ])
    }

    #[test]
    fn it_understands_process_with_unmodifiable_io() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("kovarex-enrichment-process").unwrap();
        assert_eq!(process.id, "kovarex-enrichment-process");
        assert_eq!(process.display, "kovarex-enrichment-process");
        assert_eq!(process.duration, 60.0);
        assert_eq!(process.group.id, "centrifuging");
        assert_eq!(process.inputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-235", "uranium-238"]);
        assert_eq!(process.inputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[40.0, 5.0]);
        assert_eq!(process.outputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-235", "uranium-238"]);
        assert_eq!(process.outputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[1.0, 0.0]);
        assert_eq!(process.inputs_unmod.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-235", "uranium-238"]);
        assert_eq!(process.inputs_unmod.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[0.0, 0.0]);
        assert_eq!(process.outputs_unmod.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-235", "uranium-238"]);
        assert_eq!(process.outputs_unmod.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[40.0, 2.0]);
    }

    #[test]
    fn it_understands_process_with_probablistic_io() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("uranium-processing").unwrap();
        assert_eq!(process.id, "uranium-processing");
        assert_eq!(process.display, "uranium-processing");
        assert_eq!(process.duration, 12.0);
        assert_eq!(process.group.id, "centrifuging");
        assert_eq!(process.inputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-ore"]);
        assert_eq!(process.inputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[10.0]);
        assert_eq!(process.outputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-235", "uranium-238"]);
        assert_eq!(process.outputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[0.007, 0.993]);
        assert_eq!(process.inputs_unmod.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-ore"]);
        assert_eq!(process.inputs_unmod.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[0.0]);
        assert_eq!(process.outputs_unmod.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-235", "uranium-238"]);
        assert_eq!(process.outputs_unmod.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[0.0, 0.0]);
    }

    #[test]
    fn it_understands_recycling_processes() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("big-mining-drill-recycling").unwrap();
        assert_eq!(process.id, "big-mining-drill-recycling");
        assert_eq!(process.display, "big-mining-drill-recycling");
        assert_eq!(process.duration, 1.875);
        assert_eq!(process.group.id, "recycling");
        assert_eq!(process.inputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["big-mining-drill"]);
        assert_eq!(process.inputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[1.0]);
        assert_eq!(process.inputs_unmod.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["big-mining-drill"]);
        assert_eq!(process.inputs_unmod.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[0.0]);
        assert_eq!(process.outputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["advanced-circuit", "electric-engine-unit", "electric-mining-drill", "tungsten-carbide"]);
        assert_eq!(process.outputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[2.5, 2.5, 0.25, 5.0]);
        assert_eq!(process.outputs_unmod.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["advanced-circuit", "electric-engine-unit", "electric-mining-drill", "tungsten-carbide"]);
        assert_eq!(process.outputs_unmod.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[0.0, 0.0, 0.0, 0.0]);
    }

    #[test]
    fn it_understands_resource_processes_with_inputs() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("resource-uranium-ore").unwrap();

        assert_eq!(process.id, "resource-uranium-ore");
        assert_eq!(process.display, "uranium-ore");
        assert_eq!(process.duration, 2.0);
        assert_eq!(process.group.id, "resource-basic-solid");
        assert_eq!(process.inputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["sulfuric-acid"]);
        assert_eq!(process.inputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[10.0]);
        assert_eq!(process.outputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["uranium-ore"]);
        assert_eq!(process.outputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[1.0]);
    }

    #[test]
    fn it_understands_resource_processes_without_inputs() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("resource-coal").unwrap();

        assert_eq!(process.id, "resource-coal");
        assert_eq!(process.display, "coal");
        assert_eq!(process.duration, 1.0);
        assert_eq!(process.group.id, "resource-basic-solid");
        assert_eq!(process.inputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>().is_empty(), true);
        assert_eq!(process.inputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>().is_empty(), true);
        assert_eq!(process.outputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["coal"]);
        assert_eq!(process.outputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[1.0]);
    }

    #[test]
    fn it_understands_resource_processes_with_probablistic_range_of_inputs() {
        setup_tracing();
        let mut jsons = create_input_fixture();
        let res = DataParserRecipeLister{}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("Moss-1-without-sludge").unwrap();

        assert_eq!(process.id, "Moss-1-without-sludge");
        assert_eq!(process.display, "Moss-1-without-sludge");
        assert_eq!(process.duration, 100.0);
        assert_eq!(process.group.id, "centrifuging");
        assert_eq!(process.inputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["crude-oil", "steam"]);
        assert_eq!(process.inputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[100.0, 100.0]);
        assert_eq!(process.outputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["scrap", "wood"]);
        assert_eq!(process.outputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[5.5, 8.0]);
    }

    #[test]
    fn calculates_basic_output_count() {
        let p = Product{name: "a".to_string(), amount: Some(1.0), ..Default::default() };
        assert_eq!(1.0, p.calculate_quantity());
    }

    #[test]
    fn calculates_probablistic_output_count() {
        let p = Product{name: "a".to_string(), amount: Some(1.0), probability: Some(0.5), ..Default::default()};
        assert_eq!(0.5, p.calculate_quantity());
    }

    #[test]
    fn calculates_recycling_output_count() {
        let p = Product{name: "a".to_string(), amount: Some(1.0), extra_count_fraction: Some(0.25), ..Default::default() };
        assert_eq!(1.25, p.calculate_quantity());
    }

    #[test]
    fn calculates_probablistic_range_output_count() {
        let p = Product{name: "a".to_string(), amount_min: Some(3.0), amount_max: Some(6.0), ..Default::default() };
        assert_eq!(4.5, p.calculate_quantity());
    }

    #[test]
    fn calculates_output_with_unmod_count() {
        let p = Product{name: "a".to_string(), amount: Some(1.0), ignored_by_productivity: Some(1.0), ..Default::default() };
        assert_eq!(0.0, p.calculate_quantity());
    }

}
