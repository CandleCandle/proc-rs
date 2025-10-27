use std::{collections::{BTreeMap, HashMap}, rc::Rc};

use serde_json::Value;

use crate::data::dataset::DataSetConf;

use super::model::{Data, DataParser, Factory, FactoryGroup, Item, Process};



#[derive(Debug)]
pub enum DataParserRecipeListerFiles {
    AssemblingMachines,
    Furnace,
    RocketSilo,
    MiningDrill,
}
impl DataParserRecipeListerFiles {
    pub fn to_key(&self) -> String {
        match &self {
            Self::AssemblingMachines => "AssemblingMachines".to_string(),
            Self::Furnace => "Furnace".to_string(),
            Self::RocketSilo => "RocketSilo".to_string(),
            Self::MiningDrill => "MiningDrill".to_string(),
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
            ] {
            for (_, am) in parsed.get(&k.to_key())
                .ok_or(format!("missing json {k:?}"))?
                .as_object()
                .ok_or(format!("missing root object in {k:?}"))? {
                factory_groups.extend(
                    am.as_object()
                        .ok_or(format!("missing root object in {k:?}"))?
                        ["crafting_categories"]
                        .as_object()
                        .ok_or(format!("missing crafting_categories in {k:?}"))?
                        .keys()
                        .map(|id| (id.clone(), Rc::new(FactoryGroup{id: id.clone()})) ));
            }
        }

        let mining_drill_key = DataParserRecipeListerFiles::MiningDrill.to_key();
        for (_, am) in parsed.get(&mining_drill_key)
            .ok_or(format!("missing json {:?}", mining_drill_key))?
            .as_object()
            .ok_or(format!("missing root object in {:?}", mining_drill_key))? {
            factory_groups.extend(
                am.as_object()
                    .ok_or(format!("missing root object in {:?}", mining_drill_key))?
                    ["resource_categories"]
                    .as_object()
                    .ok_or(format!("missing resource_categories in {:?}", mining_drill_key))?
                    .keys()
                    .map(|id| format!("resource-{id}"))
                    .map(|id| (id.clone(), Rc::new(FactoryGroup{id: id})) ));
        }
        Ok(factory_groups)
    }

    fn extract_factories(parsed: &BTreeMap<String, Value>, factory_groups: &HashMap<String, Rc<FactoryGroup>>) -> Result<HashMap<String, Rc<Factory>>, String> {
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();

        for k in &[
            DataParserRecipeListerFiles::AssemblingMachines,
            DataParserRecipeListerFiles::Furnace,
            DataParserRecipeListerFiles::RocketSilo,
            ] {
            factories.extend(
                parsed.get(&k.to_key())
                    .ok_or(format!("missing json {k:?}"))?
                    .as_object()
                    .ok_or(format!("missing root object in {k:?}"))?
                    .into_iter()
                    .map(|(id, val)| -> Result<(String, Rc<Factory>), String> {
                        let obj = val.as_object().unwrap();
                        Ok((
                            id.clone(),
                            Rc::new(
                                Factory{
                                    id: obj.get("name")
                                        .ok_or(format!("missing name in {:?} at {id}", k))?
                                        .as_str().ok_or(format!("missing name in {:?} from {id} was not a string", k))?
                                        .to_string(),
                                    display: obj["name"].as_str().unwrap().to_string(), // TOOD import i18n
                                    duration_multiplier: 1.0/obj["crafting_speed"].as_f64().unwrap(),
                                    inputs_multiplier: 1.0,
                                    outputs_multiplier: 1.0,
                                    groups: obj["crafting_categories"].as_object().unwrap()
                                        .keys()
                                        .map(|cc_key| factory_groups.get(cc_key).unwrap().clone())
                                        .collect()
                                }
                            )
                        ))
                    })
                    .collect::<Result<Vec<(String, Rc<Factory>)>, String>>()?
            )
        }

        Ok(factories)
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
        // let factories: HashMap<String, Rc<Factory>> = HashMap::new();
        let factories = Self::extract_factories(&parsed, &factory_groups)?;
        let processes: HashMap<String, Rc<Process>> = HashMap::new();
        let items: HashMap<String, Rc<Item>> = HashMap::new();

        // processes
        // recipe.json
        //
        // resource.json --> producers of raw resources inputs can be added

        // factories (and groups)
        // assembling-machine.json
        // furnace.json
        // rocket-silo.json
        //
        // mining-drill.json resource_categories -> factory-group; resource_category -> factory-group
        //
        //
        // lab.json + fake output?
        //
        // "items"
        // fluid.json
        // item.json

        Ok(Data{items, factory_groups, factories, processes})
    }
}



#[cfg(test)]
mod test {
    use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

    use itertools::Itertools;

    use crate::data::{fixtures::load_fixture};

    use super::*;

    fn setup_tracing() {
        tracing_subscriber::registry()
            .with(tracing_subscriber::fmt::Layer::default()
            .with_ansi(true)
            .with_writer(std::io::stdout)
            .compact())
            .try_init().map_err(|e| e.to_string())
            .unwrap();
    }

    fn create_input_fixture() -> BTreeMap<String, String> {
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key().to_string(), load_fixture("fixtures/assembling-machine.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::Furnace.to_key().to_string(), load_fixture("fixtures/furnace.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::RocketSilo.to_key().to_string(), load_fixture("fixtures/rocket-silo.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::MiningDrill.to_key().to_string(), load_fixture("fixtures/mining-drill.json").to_string());
        jsons
    }

    #[test]
    fn it_loads_all_factory_groups() {
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
}
