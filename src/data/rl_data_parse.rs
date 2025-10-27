use std::{collections::{BTreeMap, HashMap}, rc::Rc};

use serde_json::Value;

use crate::data::dataset::DataSetConf;

use super::model::{Classification, Data, DataParser, Factory, FactoryGroup, Item, Process, Stack};



#[derive(Debug)]
pub enum DataParserRecipeListerFiles {
    AssemblingMachines,
    Furnace,
    RocketSilo,
    MiningDrill,
}
impl DataParserRecipeListerFiles {
    pub fn to_key(&self) -> &str {
        match &self {
            Self::AssemblingMachines => "AssemblingMachines",
            Self::Furnace => "Furnace",
            Self::RocketSilo => "RocketSilo",
            Self::MiningDrill => "MiningDrill",
        }
    }
}

pub struct DataParserRecipeLister {}
impl DataParser for DataParserRecipeLister {
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<&str, String> {
        let mut result = BTreeMap::new();
        result.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key(), format!("{}/assembling-machine.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::Furnace.to_key(), format!("{}/furnace.json", conf.id()));
        result.insert(DataParserRecipeListerFiles::RocketSilo.to_key(), format!("{}/rocket-silo.json", conf.id()));
        result
    }

    fn parse(&self, jsons: &mut BTreeMap<&str, String>) -> Result<Data, String> {
        let mut parsed: BTreeMap<&str, Value> = BTreeMap::new();
        for (k, v) in jsons.iter() {
            parsed.insert(k, serde_json::from_str(&v).map_err(|e| format!("{e}"))?);
        }

        let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();
        let mut processes: HashMap<String, Rc<Process>> = HashMap::new();
        let mut items: HashMap<String, Rc<Item>> = HashMap::new();

        for k in &[
            DataParserRecipeListerFiles::AssemblingMachines,
            DataParserRecipeListerFiles::Furnace,
            DataParserRecipeListerFiles::RocketSilo,
            ] {
            for (_, am) in parsed.get(k.to_key())
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

        for (_, am) in parsed.get(DataParserRecipeListerFiles::MiningDrill.to_key())
            .ok_or(format!("missing json {:?}", DataParserRecipeListerFiles::MiningDrill.to_key()))?
            .as_object()
            .ok_or(format!("missing root object in {:?}", DataParserRecipeListerFiles::MiningDrill.to_key()))? {
            factory_groups.extend(
                am.as_object()
                    .ok_or(format!("missing root object in {:?}", DataParserRecipeListerFiles::MiningDrill.to_key()))?
                    ["resource_categories"]
                    .as_object()
                    .ok_or(format!("missing resource_categories in {:?}", DataParserRecipeListerFiles::MiningDrill.to_key()))?
                    .keys()
                    .map(|id| format!("resource-{id}"))
                    .map(|id| (id.clone(), Rc::new(FactoryGroup{id: id})) ));
        }
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
    use std::any::{Any, TypeId};

    use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

    use itertools::Itertools;

    use crate::data::{fixtures::load_fixture, model::Classification};

    use super::*;

    // fn simple_item_fixture() -> &'static str {
    //     r#"
    //         {
    //             "items": [
    //                 {
    //                     "id": "part_a",
    //                     "group": "thing",
    //                     "i18n": {
    //                         "en": "Part A"
    //                     }
    //                 }
    //             ],
    //             "factories": [ ],
    //             "processes": [ ]
    //         }
    //     "#
    // }

    // fn missing_item_id_fixture() -> &'static str {
    //     r#"
    //         {
    //             "items": [
    //                 {
    //                     "group": "thing",
    //                     "i18n": {
    //                         "en": "Part A"
    //                     }
    //                 }
    //             ],
    //             "factories": [ ],
    //             "processes": [ ]
    //         }
    //     "#
    // }

    // fn simple_factory_fixture() -> &'static str {
    //     r#"
    //         {
    //             "items": [ ],
    //             "processes": [ ],
    //             "factories": [
    //                 {
    //                     "id": "main",
    //                     "i18n": {
    //                         "en": "Main"
    //                     },
    //                     "factory_groups": [
    //                         "default"
    //                     ],
    //                     "duration_modifier": 1,
    //                     "output_modifier": 1
    //                 }
    //             ]
    //         }
    //     "#
    // }

    // fn simple_process_fixture() -> &'static str {
    //     r#"
    //         {
    //             "items": [
    //                 {
    //                     "id": "part_a",
    //                     "group": "thing",
    //                     "i18n": {
    //                         "en": "Part A"
    //                     }
    //                 },
    //                 {
    //                     "id": "part_b",
    //                     "group": "thing",
    //                     "i18n": {
    //                         "en": "Part B"
    //                     }
    //                 }
    //             ],
    //             "factories": [
    //                 {
    //                     "id": "main",
    //                     "i18n": {
    //                         "en": "Main"
    //                     },
    //                     "factory_groups": [
    //                         "default"
    //                     ],
    //                     "duration_modifier": 1,
    //                     "output_modifier": 1
    //                 }
    //             ],
    //             "processes": [
    //                 {
    //                     "id": "make_b",
    //                     "i18n": {
    //                         "en": "Make B"
    //                     },
    //                     "duration": 5,
    //                     "group": "default",
    //                     "inputs": {
    //                         "part_a": 1
    //                     },
    //                     "outputs": {
    //                         "part_b": 2
    //                     }
    //                 }
    //             ]
    //         }
    //     "#
    // }

    // #[test]
    // fn simple_item_get_by_id() {
    //     todo!()
    //     // assert_eq!(i.display, "Part A");
    //     // assert_eq!(i.classification, Classification::Solid);
    // }

    #[test]
    fn it_loads_factory_groups() {
        tracing_subscriber::registry()
            .with(tracing_subscriber::fmt::Layer::default()
            .with_ansi(true)
            .with_writer(std::io::stdout)
            .compact())
            .try_init().map_err(|e| e.to_string())
            .unwrap();

        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key(), load_fixture("fixtures/assembling-machine.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::Furnace.to_key(), load_fixture("fixtures/furnace.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::RocketSilo.to_key(), load_fixture("fixtures/rocket-silo.json").to_string());
        jsons.insert(DataParserRecipeListerFiles::MiningDrill.to_key(), load_fixture("fixtures/mining-drill.json").to_string());
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
}
