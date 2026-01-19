use std::{collections::{BTreeMap, HashMap}, rc::Rc};

use serde::{Deserialize, Serialize};
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

        let k = DataParserRecipeListerFiles::Recipe;
        processes.extend(
            parsed.get(&k.to_key()).ok_or(format!("missing json {k:?}"))?
                .as_object().ok_or(format!("missing root object in {k:?}"))?
                .into_iter()
                .map(|(id, val)| -> Result<Option<(String, Rc<Process>)>, String> {
                    let map = val.as_object().ok_or(format!("item at {id} in {k:?} was not an object"))?;
                    let fg_key = map.get("category").ok_or_else(|| format!("missing category in {id}"))?
                        .as_str().ok_or_else(|| format!("can't convert category in {id}"))?;
                    let group = factory_groups.get(fg_key);
                    if group.is_none() {
                        return Ok(None);
                    }
                    Ok(Some((id.clone(), Rc::new(
                        Process{
                            id: id.clone(),
                            display: map.get("name").unwrap().as_str().unwrap().to_string(),
                            duration: map.get("energy").ok_or(format!("missing [{id}.\"energy\"] in {k:?}"))?.as_f64().unwrap(),
                            group: group.unwrap().clone(),
                            inputs: Self::extract_mod(
                                map.get("ingredients").ok_or(format!("missing [{id}].\"ingredients\" from {k:?}"))?,
                                items, id, &k)?,
                            outputs: Self::extract_mod(
                                map.get("products").ok_or(format!("missing [{id}].\"products\" from {k:?}"))?,
                                items, id, &k)?,
                            inputs_unmod: Self::extract_unmod(
                                map.get("ingredients").ok_or(format!("missing [{id}].\"products\" from {k:?}"))?,
                                items, id, &k)?,
                            outputs_unmod: Self::extract_unmod(
                                map.get("products").ok_or(format!("missing [{id}].\"products\" from {k:?}"))?,
                                items, id, &k)?,
                        }
                    ))))
                })
                .filter(|r| {
                    r.as_ref().is_ok_and(|o| o.is_some())
                })
                .map(|r| {
                    r.map(|o| o.unwrap())
                })
                .collect::<Result<Vec<(String, Rc<Process>)>, String>>()?
            );

        let k = DataParserRecipeListerFiles::Resource;

        processes.extend(
            parsed.get(&k.to_key()).ok_or(format!("missing json {k:?}"))?
                .as_object().ok_or(format!("missing root object in {k:?}"))?
                .into_iter()
                .map(|(id, val)| -> Result<(String, Rc<Process>), String> {
                    tracing::info!("{:?} --> ", id);
                    Ok((
                        format!("resource-{id}"),
                        Rc::new(Process{
                            id: format!("resource-{id}"),
                            display: val.get("name").unwrap().as_str().unwrap().to_string(),
                            duration: val.get("mineable_properties").unwrap()
                                .as_object().unwrap()
                                .get("mining_time").unwrap().as_f64().unwrap(),
                            group: factory_groups.get(
                                &format!("resource-{}", val.get("resource_category").unwrap().as_str().unwrap())
                            ).unwrap().clone(),
                            inputs: val.get("mineable_properties")
                                .map(|mp| -> Result<Vec<Stack>, String> {
                                    let mp = mp.as_object().unwrap();
                                    if let Some(rf) = mp.get("required_fluid")
                                        && let Some(fa) = mp.get("fluid_amount") {
                                        let rfs = rf.as_str().unwrap();
                                        Ok(vec![
                                            Stack::new(
                                                items.get(rfs).ok_or(format!("unable to find mineable requirement {rfs}"))?.clone(),
                                                fa.as_f64().unwrap()
                                            )
                                        ])
                                    } else {
                                        Ok(Vec::new())
                                    }
                                }).unwrap()?,
                            inputs_unmod: Vec::new(),
                            outputs: Self::extract_mod(
                                val
                                    .get("mineable_properties").unwrap().as_object().unwrap()
                                    .get("products").unwrap(),
                                items, id, &k)?,
                            outputs_unmod: Vec::new(),
                        })
                    ))
                })
                .collect::<Result<Vec<(String, Rc<Process>)>, String>>()?
            );
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
        // quantity / ignored_by_productivity / probability / amount_min / amount_max
        F: FnMut(Option<f64>, Option<f64>, Option<f64>, Option<f64>, Option<f64>, Option<f64>) -> Result<f64, String>,
    {
        if stacks.as_object().is_some() {
            return Ok(Vec::new())
        }

        stacks.as_array().ok_or(format!("[{id}].\"ingredients|products\" from {k:?} was not an array or empty object"))?
            .iter().enumerate()
            .map(|(idx, stack)| {
                // XXX add an example where the probability is not 1.
                // XXX handle amount_(min|max)
                let obj = stack.as_object().ok_or(format!("[{id}].\"ingredients|products\"[{idx}] from {k:?} was not an object"))?;
                tracing::info!("{:?}", obj);
                let item = items.get(
                    obj.get("name").ok_or("todo!1")?
                        .as_str().ok_or("todo!2")?
                    ).ok_or(format!("unable to find item at [{id}].\"ingredients|products\"[{idx}] from {k:?}"))?
                    .clone();
                let quantity = obj.get("amount")
                    .map(|v| v.as_f64()).flatten();
                let probability = obj.get("probability")
                    .map(|v| v.as_f64()).flatten();
                let ignored = obj.get("ignored_by_productivity")
                    .map(|v| v.as_f64()).flatten();
                let extra_count_fraction = obj.get("extra_count_fraction")
                    .map(|v| v.as_f64()).flatten();
                let min = obj.get("amount_min")
                    .map(|v| v.as_f64()).flatten();
                let max = obj.get("amount_max")
                    .map(|v| v.as_f64()).flatten();

                Ok(Stack{
                    item,
                    quantity: quantity_calc(quantity, extra_count_fraction, ignored, probability, min, max)?,
                })
            })
            .collect::<Result<Vec<Stack>, String>>()
    }

    fn extract_unmod(stacks: &Value, items: &HashMap<String, Rc<Item>>, id: &String, k: &DataParserRecipeListerFiles) -> Result<Vec<Stack>, String> {
        Self::extract_io(stacks, items, id, k, |q, e, i, p, min, max| {
            match q {
                Some(q) => {
                    let e = e.unwrap_or(0.0);
                    let i = i.unwrap_or(0.0);
                    let p = p.unwrap_or(1.0);
                    Ok(i.min(q + e) * p)
                },
                None => {
                    Ok(min.zip(max)
                        .map(|(min, max)| min + ( (max-min)/2.0 ))
                        .ok_or_else(|| format!("unable to calculate a quantity for {id}"))?)
                }
            }
        })
    }

    fn extract_mod(stacks: &Value, items: &HashMap<String, Rc<Item>>, id: &String, k: &DataParserRecipeListerFiles) -> Result<Vec<Stack>, String> {
        Self::extract_io(stacks, items, id, k, |q, e, i, p, min, max| {
            match q {
                Some(q) => {
                    let e = e.unwrap_or(0.0);
                    let i = i.unwrap_or(0.0);
                    let p = p.unwrap_or(1.0);
                    Ok((q+e-i).max(0.0) * p)
                },
                None => {
                    Ok(min.zip(max)
                        .map(|(min, max)| min + ( (max-min)/2.0 ))
                        .ok_or_else(|| format!("unable to calculate a quantity for {id}"))?)
                }
            }
        })
    }
}


impl DataParser for DataParserRecipeLister {
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<String, String> {
        let mut result = BTreeMap::new();
        result.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key(), format!("data/{}/assembling-machine.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::Furnace.to_key(), format!("data/{}/furnace.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::RocketSilo.to_key(), format!("data/{}/rocket-silo.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::MiningDrill.to_key(), format!("data/{}/mining-drill.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::Items.to_key(), format!("data/{}/item.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::Fluids.to_key(), format!("data/{}/fluid.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::Recipe.to_key(), format!("data/{}/recipe.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::Resource.to_key(), format!("data/{}/resource.json", conf.id()));
        result
    }

    fn parse(&self, jsons: &mut BTreeMap<String, String>) -> Result<Data, String> {
        let assembling_machines = serde_json::from_str::<HashMap<String, AssemblingMachine>>(
            jsons.get(&DataParserRecipeListerFiles::AssemblingMachines.to_key()).unwrap()
        ).map_err(|e| e.to_string())?;
        let furnaces = serde_json::from_str::<HashMap<String, AssemblingMachine>>(
            jsons.get(&DataParserRecipeListerFiles::Furnace.to_key()).unwrap()
        ).map_err(|e| e.to_string())?;
        let rocket_silo = serde_json::from_str::<HashMap<String, AssemblingMachine>>(
            jsons.get(&DataParserRecipeListerFiles::RocketSilo.to_key()).unwrap()
        ).map_err(|e| e.to_string())?;
        let mining_drill = serde_json::from_str::<HashMap<String, MiningMachine>>(
            jsons.get(&DataParserRecipeListerFiles::MiningDrill.to_key()).unwrap()
        ).map_err(|e| e.to_string())?;

        let mut parsed: BTreeMap<String, Value> = BTreeMap::new();
        for (k, v) in jsons.iter() {
            parsed.insert(k.clone(), serde_json::from_str(v).map_err(|e| format!("{e}"))?);
        }

        let factory_groups = Self::extract_factory_groups(&assembling_machines, &furnaces, &rocket_silo,  &mining_drill)?;
        let factories = Self::extract_factories(&parsed, &factory_groups)?;
        let items = Self::extract_items(&parsed)?;
        let processes = Self::extract_processes(&parsed, &factory_groups, &items)?;

        Ok(Data{items, factory_groups, factories, processes})
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct AssemblingMachine {
    name: String,
    crafting_categories: HashMap<String, bool>,
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct MiningMachine {
    name: String,
    resource_categories: HashMap<String, bool>,
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

}
