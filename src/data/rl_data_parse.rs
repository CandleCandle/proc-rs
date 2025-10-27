use std::{collections::{BTreeMap, HashMap}, rc::Rc};

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
        }
    }
}

pub struct DataParserRecipeLister {}
impl DataParserRecipeLister {

    fn extract_factory_groups(parsed: &BTreeMap<String, Value>) -> Result<HashMap<String, Rc<FactoryGroup>>, String> {
        let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();

        for k in &[
            DataParserRecipeListerFiles::AssemblingMachines,
            DataParserRecipeListerFiles::Furnace,
            DataParserRecipeListerFiles::RocketSilo,
            DataParserRecipeListerFiles::MiningDrill,
            ] {
            let groups_key = match &k {
                DataParserRecipeListerFiles::MiningDrill => "resource_categories",
                _ => "crafting_categories"
            };
            let group_mapper = match &k {
                DataParserRecipeListerFiles::MiningDrill => |g_key: &String| format!("resource-{g_key}"),
                _ => |g_key: &String| g_key.to_owned(),
            };
            for (_, am) in parsed.get(&k.to_key())
                .ok_or(format!("missing json {k:?}"))?
                .as_object()
                .ok_or(format!("missing root object in {k:?}"))? {
                factory_groups.extend(
                    am.as_object()
                        .ok_or(format!("missing root object in {k:?}"))?
                        [groups_key]
                        .as_object()
                        .ok_or(format!("missing crafting_categories in {k:?}"))?
                        .keys()
                        .map(group_mapper)
                        .map(|id| (id.clone(), Rc::new(FactoryGroup{id: id}))
                ));
            }
        }

        Ok(factory_groups)
    }

    fn extract_factories(parsed: &BTreeMap<String, Value>, factory_groups: &HashMap<String, Rc<FactoryGroup>>) -> Result<HashMap<String, Rc<Factory>>, String> {
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();

        for k in &[
            DataParserRecipeListerFiles::AssemblingMachines,
            DataParserRecipeListerFiles::Furnace,
            DataParserRecipeListerFiles::RocketSilo,
            DataParserRecipeListerFiles::MiningDrill,
            ] {
            let duration_key = match &k {
                DataParserRecipeListerFiles::MiningDrill => "mining_speed",
                _ => "crafting_speed"
            };
            let groups_key = match &k {
                DataParserRecipeListerFiles::MiningDrill => "resource_categories",
                _ => "crafting_categories"
            };
            let group_mapper = match &k {
                DataParserRecipeListerFiles::MiningDrill => |g_key: &String| format!("resource-{g_key}"),
                _ => |g_key: &String| g_key.to_owned(),
            };
            factories.extend(
                parsed.get(&k.to_key()).ok_or(format!("missing json {k:?}"))?
                    .as_object().ok_or(format!("missing root object in {k:?}"))?
                    .into_iter()
                    .map(|(id, val)| -> Result<(String, Rc<Factory>), String> {
                        let obj = val.as_object().unwrap();
                        Ok((
                            id.clone(),
                            Rc::new(
                                Factory{
                                    id: obj.get("name").ok_or(format!("missing name in {k:?} at {id}"))?
                                        .as_str().ok_or(format!("name in {k:?} from {id} was not a string"))?
                                        .to_string(),
                                    display: obj["name"].as_str().unwrap().to_string(), // TOOD import i18n
                                    duration_multiplier: 1.0/obj[duration_key].as_f64().unwrap(),
                                    inputs_multiplier: 1.0,
                                    outputs_multiplier: 1.0,
                                    groups: obj[groups_key].as_object().unwrap()
                                        .keys()
                                        .map(group_mapper)
                                        .map(
                                            |cc_key| -> Result<Rc<FactoryGroup>, String> {
                                                Ok(factory_groups.get(&cc_key)
                                                    .ok_or(format!("unable to find a factory group {cc_key} in {k:?} at {id}"))?
                                                    .clone())
                                        })
                                        .collect::<Result<Vec<Rc<FactoryGroup>>, String>>()?
                                }
                            )
                        ))
                    })
                    .collect::<Result<Vec<(String, Rc<Factory>)>, String>>()?
            )
        }

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
            parsed: &BTreeMap<String, Value>,
            factory_groups: &HashMap<String, Rc<FactoryGroup>>,
            items: &HashMap<String, Rc<Item>>
        ) -> Result<HashMap<String, Rc<Process>>, String> {
        let mut processes: HashMap<String, Rc<Process>> = HashMap::new();

        for k in &[
            DataParserRecipeListerFiles::Recipe,
        ] {
            processes.extend(
                parsed.get(&k.to_key()).ok_or(format!("missing json {k:?}"))?
                    .as_object().ok_or(format!("missing root object in {k:?}"))?
                    .into_iter()
                    .map(|(id, val)| -> Result<(String, Rc<Process>), String> {
                        let map = val.as_object().ok_or(format!("item at {id} in {k:?} was not an object"))?;
                        Ok((id.clone(), Rc::new(
                            Process{
                                id: id.clone(),
                                display: map.get("name").unwrap().as_str().unwrap().to_string(),
                                duration: map.get("energy").ok_or(format!("missing [{id}.\"energy\"] in {k:?}"))?.as_f64().unwrap(),
                                group: factory_groups.get(map.get("category").unwrap().as_str().unwrap()).unwrap().clone(),
                                inputs: Self::extract_mod(
                                    map.get("ingredients").ok_or(format!("missing [{id}].\"ingredients\" from {k:?}"))?,
                                    items, &id, &k)?,
                                outputs: Self::extract_mod(
                                    map.get("products").ok_or(format!("missing [{id}].\"products\" from {k:?}"))?,
                                    items, &id, &k)?,
                                inputs_unmod: Self::extract_unmod(
                                    map.get("ingredients").ok_or(format!("missing [{id}].\"products\" from {k:?}"))?,
                                    items, &id, &k)?,
                                outputs_unmod: Self::extract_unmod(
                                    map.get("products").ok_or(format!("missing [{id}].\"products\" from {k:?}"))?,
                                    items, &id, &k)?,
                            }
                        )))
                    })
                    .collect::<Result<Vec<(String, Rc<Process>)>, String>>()?
            )
        }
        Ok(processes)
    }

    fn extract_io<F>(
        stacks: &Value,
        items: &HashMap<String, Rc<Item>>,
        id: &String,
        k: &DataParserRecipeListerFiles,
        mut quantity_calc: F,
    ) -> Result<Vec<Stack>, String>
    where
        F: FnMut(f64, f64, f64) -> f64,
    {
        if stacks.as_object().is_some() {
            return Ok(Vec::new())
        }

        stacks.as_array().ok_or(format!("[{id}].\"ingredients|products\" from {k:?} was not an array or empty object"))?
            .iter().enumerate()
            .map(|(idx, stack)| {
                // XXX work out how "extra_count_fraction" impacts this calculation.
                // XXX add an example where the probability is not 1.
                // XXX handle amount_(min|max)
                let obj = stack.as_object().ok_or(format!("[{id}].\"ingredients|products\"[{idx}] from {k:?} was not an object"))?;
                tracing::info!("{:?}", obj);
                let item = items.get(
                    obj.get("name").ok_or("todo!1")?
                        .as_str().ok_or("todo!2")?
                    ).ok_or(format!("unable to find item at [{id}].\"ingredients|products\"[{idx}] from {k:?}"))?
                    .clone();
                let quantity = obj.get("amount").ok_or("todo!4")?.as_f64().ok_or("todo!5")?;
                let ignored = obj.get("ignored_by_productivity")
                    .map(|v| -> Result<f64, &str> { v.as_f64().ok_or("todo!6") })
                    .unwrap_or(Ok(0.0))?;
                let probability = obj.get("probability")
                    .map(|v| -> Result<f64, &str> { v.as_f64().ok_or("todo!7") })
                    .unwrap_or(Ok(1.0))?;
                Ok(Stack{
                    item,
                    quantity: quantity_calc(quantity, ignored, probability),
                })
            })
            .collect::<Result<Vec<Stack>, String>>()
    }

    fn extract_unmod(stacks: &Value, items: &HashMap<String, Rc<Item>>, id: &String, k: &DataParserRecipeListerFiles) -> Result<Vec<Stack>, String> {
        Self::extract_io(stacks, items, id, k, |q, i, p| i.min(q) * p)
    }

    fn extract_mod(stacks: &Value, items: &HashMap<String, Rc<Item>>, id: &String, k: &DataParserRecipeListerFiles) -> Result<Vec<Stack>, String> {
        Self::extract_io(stacks, items, id, k, |q, i, p| (q-i).max(0.0) * p)
    }
}


impl DataParser for DataParserRecipeLister {
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<String, String> {
        let mut result = BTreeMap::new();
        result.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key(), format!("{}/assembling-machine.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::Furnace.to_key(), format!("{}/furnace.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::RocketSilo.to_key(), format!("{}/rocket-silo.json", conf.id()));
        result
    }

    fn parse(&self, jsons: &mut BTreeMap<String, String>) -> Result<Data, String> {
        let mut parsed: BTreeMap<String, Value> = BTreeMap::new();
        for (k, v) in jsons.iter() {
            parsed.insert(k.clone(), serde_json::from_str(&v).map_err(|e| format!("{e}"))?);
        }

        let factory_groups = Self::extract_factory_groups(&parsed)?;
        let factories = Self::extract_factories(&parsed, &factory_groups)?;
        let items = Self::extract_items(&parsed)?;
        let processes = Self::extract_processes(&parsed, &factory_groups, &items)?;

        Ok(Data{items, factory_groups, factories, processes})
    }
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
        assert_eq!(factory.groups.iter().map(|g| g.id.clone()).collect::<Vec<String>>(), &[
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
        assert_eq!(factory.groups.iter().map(|g| g.id.clone()).collect::<Vec<String>>(), &[
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
            "electric-engine-unit",
            "electric-mining-drill",
            "iron-chest",
            "steam",
            "steel-chest",
            "tungsten-carbide",
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
            "big-mining-drill-recycling",
            "kovarex-enrichment-process",
            "parameter-0",
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
}
