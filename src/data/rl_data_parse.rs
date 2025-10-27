use std::{collections::{BTreeMap, HashMap}, rc::Rc};

use serde_json::Value;

use crate::data::dataset::DataSetConf;

use super::model::{Classification, Data, DataParser, Factory, FactoryGroup, Item, Process, Stack};



#[derive(Debug)]
pub enum DataParserRecipeListerFiles {
    AssemblingMachines,
}
impl DataParserRecipeListerFiles {
    pub fn to_key(&self) -> &str {
        match &self {
            Self::AssemblingMachines => "AssemblingMachines",
        }
    }
}

pub struct DataParserRecipeLister {}
impl DataParser for DataParserRecipeLister {
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<&str, String> {
        let mut result = BTreeMap::new();
        result.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key(), format!("{}/assembling-machine.json", conf.id()));
        result
    }

    fn parse(&self, jsons: &mut BTreeMap<&str, String>) -> Result<Data, String> {
        let json = jsons.remove(DataParserRecipeListerFiles::AssemblingMachines.to_key()).unwrap();
        let outer: Value = serde_json::from_str(&json).map_err(|e| format!("{e}"))?;

        let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();
        let mut processes: HashMap<String, Rc<Process>> = HashMap::new();
        let mut items: HashMap<String, Rc<Item>> = HashMap::new();

        for (_, am) in outer.as_object().unwrap() {
            factory_groups.extend(
                am.as_object().unwrap()["crafting_categories"].as_object().unwrap().keys()
                    .map(
                        |id| (id.clone(), Rc::new(FactoryGroup{id: id.clone()}))
                    )
            );
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
        let fixture = load_fixture("fixtures/assembling-machine.json");
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserRecipeListerFiles::AssemblingMachines.to_key(), fixture.to_string());
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
        ])
    }
}
