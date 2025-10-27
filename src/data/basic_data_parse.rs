use std::{collections::{BTreeMap, HashMap}, rc::Rc};

use serde_json::Value;

use crate::data::dataset::DataSetConf;

use super::model::{Classification, Data, DataParser, Factory, FactoryGroup, Item, Process, Stack};

#[derive(Debug)]
pub enum DataParserBasicFiles {
    Main,
}
impl DataParserBasicFiles {
    pub fn to_key(&self) -> String {
        match &self {
            Self::Main => "main".to_string(),
        }
    }
}

pub struct DataParserBasic {}
impl DataParser for DataParserBasic {
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<String, String> {
        let mut result = BTreeMap::new();
        result.insert(DataParserBasicFiles::Main.to_key(), format!("{}.json", conf.id()));
        result
    }

    fn parse(&self, jsons: &mut BTreeMap<String, String>) -> Result<Data, String> {
        let json = jsons.remove(&DataParserBasicFiles::Main.to_key()).unwrap();
        let outer: Value = serde_json::from_str(&json).map_err(|e| format!("{e}"))?;

        let items_res: Result<Vec<Rc<Item>>, String> = outer["items"].as_array().ok_or("missing '.items'")?.iter()
            .enumerate()
            .map(|(idx, i)| {
                let id = i["id"].as_str().ok_or(format!("missing '.items[{idx}].id'"))?.to_string();
                Ok(Rc::new(Item{
                    id: id.clone(),
                    display: i["i18n"]["en"].as_str().ok_or(format!("missing '.items[{idx}].i18n.en' (id: {id})"))?.to_string(),
                    classification: Classification::Solid,
                    }))
                }
            )
            .collect();
        let items: HashMap<String, Rc<Item>> = items_res?.into_iter().map(|i| (i.id.clone(), i)).collect();

        let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();

        for (idx, fac) in outer["factories"].as_array().ok_or("missing '.factories'")?.iter().enumerate() {
            let id = fac["id"].as_str().ok_or(format!("missing '.factories[{idx}].id''"))?.to_string();
            for (fg_id, fac_grp) in fac["factory_groups"].as_array().ok_or(format!("missing '.factories[{idx}].factory_groups' (id: {id})"))?.iter().enumerate() {
                let id = fac_grp.as_str().ok_or(format!("unparsable '.factories[{idx}].factory_groups[{fg_id}]' (id: {id})"))?.to_string();
                if !factory_groups.contains_key(&id) {
                    factory_groups.insert(id.clone(), Rc::new(FactoryGroup { id }));
                }
            }
            factories.insert(id.clone(), Rc::new(Factory {
                id: id.clone(),
                display: fac["i18n"]["en"].as_str().ok_or(format!("missing '.factories[{idx}].i18n.en' (id: {id})"))?.to_string(),
                groups: fac["factory_groups"].as_array().ok_or(format!("missing '.items[{idx}].factory_groups' (id: {id})"))?
                        .iter()
                        .map(|g| factory_groups.get(g.as_str().unwrap()).unwrap().clone())
                        .collect(),
                duration_multiplier: 1.0,
                inputs_multiplier: 1.0,
                outputs_multiplier: 1.0,
            }));
        }

        let mut processes: HashMap<String, Rc<Process>> = HashMap::new();
        for (idx, proc) in outer["processes"].as_array().ok_or("missing '.processes'")?.iter().enumerate() {
            let id = proc["id"].as_str().ok_or(format!("missing '.processes[{idx}].id'"))?.to_string();
            processes.insert(id.clone(), Rc::new(Process {
                id: id.clone(),
                display: proc["i18n"]["en"].as_str().ok_or(format!("missing '.processes[{idx}].i18n.en' (process id: {id})"))?.to_string(),
                group: factory_groups
                    .get(proc["group"].as_str().ok_or(format!("missing '.processes[{idx}].group' (process id: {id})"))?)
                    .ok_or(format!("unknown factory group for .processes[{idx}].group (process id: {id})"))?
                    .clone(),
                duration: proc["duration"].as_f64().ok_or(format!("missing '.processes[{idx}].duration' (process id: {id})"))?,
                inputs: proc["inputs"].as_object().ok_or(format!("missing '.processes[{idx}].inputs' (process id: {id})"))?.iter().map(|(k, v)| -> Result<Stack, String> { Ok(Stack{
                    item: items.get(k).ok_or(format!("unknown item ({k}) at .processes[{idx}].inputs (process id: {id})"))?.clone(),
                    quantity: v.as_f64().ok_or(format!("bad number ({v}) at .processes[{idx}].inputs (process id: {id})"))?,
                })})
                .collect::<Result<Vec<Stack>, String>>()?,
                inputs_unmod: Vec::new(),
                outputs: proc["outputs"].as_object().ok_or(format!("missing '.processes[{idx}].outputs' (process id: {id})"))?.iter().map(|(k, v)| -> Result<Stack, String> { Ok(Stack{
                    item: items.get(k).ok_or(format!("unknown item ({k}) at .processes[{idx}].outputs (process id: {id})"))?.clone(),
                    quantity: v.as_f64().ok_or(format!("bad number ({v}) at .processes[{idx}].outputs (process id: {id})"))?,
                })})
                .collect::<Result<Vec<Stack>, String>>()?,
                outputs_unmod: Vec::new(),
            }));
        }

        Ok(Data{
            items,
            factory_groups,
            factories,
            processes,
        })
    }

}



#[cfg(test)]
mod test {
    use std::any::{Any, TypeId};

    use crate::data::model::{Classification};

    use super::*;

    fn simple_item_fixture() -> &'static str {
        r#"
            {
                "items": [
                    {
                        "id": "part_a",
                        "group": "thing",
                        "i18n": {
                            "en": "Part A"
                        }
                    }
                ],
                "factories": [ ],
                "processes": [ ]
            }
        "#
    }

    fn missing_item_id_fixture() -> &'static str {
        r#"
            {
                "items": [
                    {
                        "group": "thing",
                        "i18n": {
                            "en": "Part A"
                        }
                    }
                ],
                "factories": [ ],
                "processes": [ ]
            }
        "#
    }

    fn simple_factory_fixture() -> &'static str {
        r#"
            {
                "items": [ ],
                "processes": [ ],
                "factories": [
                    {
                        "id": "main",
                        "i18n": {
                            "en": "Main"
                        },
                        "factory_groups": [
                            "default"
                        ],
                        "duration_modifier": 1,
                        "output_modifier": 1
                    }
                ]
            }
        "#
    }

    fn simple_process_fixture() -> &'static str {
        r#"
            {
                "items": [
                    {
                        "id": "part_a",
                        "group": "thing",
                        "i18n": {
                            "en": "Part A"
                        }
                    },
                    {
                        "id": "part_b",
                        "group": "thing",
                        "i18n": {
                            "en": "Part B"
                        }
                    }
                ],
                "factories": [
                    {
                        "id": "main",
                        "i18n": {
                            "en": "Main"
                        },
                        "factory_groups": [
                            "default"
                        ],
                        "duration_modifier": 1,
                        "output_modifier": 1
                    }
                ],
                "processes": [
                    {
                        "id": "make_b",
                        "i18n": {
                            "en": "Make B"
                        },
                        "duration": 5,
                        "group": "default",
                        "inputs": {
                            "part_a": 1
                        },
                        "outputs": {
                            "part_b": 2
                        }
                    }
                ]
            }
        "#
    }

    #[test]
    fn simple_item_get_by_id() {
        let fixture = simple_item_fixture();
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserBasicFiles::Main.to_key(), fixture.to_string());
        let res = DataParserBasic{}.parse(&mut jsons);
        let r = res.unwrap();
        let i = r.items.get("part_a").unwrap();
        assert_eq!(i.id, "part_a");
        assert_eq!(i.display, "Part A");
        assert_eq!(i.classification, Classification::Solid);
    }

    #[test]
    fn missing_item_id_get_by_id() {
        let fixture = missing_item_id_fixture();
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserBasicFiles::Main.to_key(), fixture.to_string());
        let res = DataParserBasic{}.parse(&mut jsons);
        let result = res.map_err(|e| e.type_id());
        assert_eq!(result, Err(TypeId::of::<String>()));
    }

    #[test]
    fn simple_factory_get_by_id() {
        let fixture = simple_factory_fixture();
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserBasicFiles::Main.to_key(), fixture.to_string());
        let res = DataParserBasic{}.parse(&mut jsons);
        let r = res.unwrap();
        let f = r.factories.get("main").unwrap();
        assert_eq!(f.id, "main");
        assert_eq!(f.display, "Main");
        assert_eq!(f.groups.len(), 1);
        assert_eq!(f.groups[0].id, "default");
    }

    #[test]
    fn simple_process_get_by_id() {
        let fixture = simple_process_fixture();
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserBasicFiles::Main.to_key(), fixture.to_string());
        let res = DataParserBasic{}.parse(&mut jsons);
        let r = res.unwrap();
        println!("{:?}", r);
        let f = r.processes.get("make_b").unwrap();
        assert_eq!(f.id, "make_b");
        assert_eq!(f.display, "Make B");
        assert_eq!(f.inputs.len(), 1);
        assert_eq!(f.inputs[0].item.id, "part_a");
        assert_eq!(f.inputs[0].quantity, 1f64);
        assert_eq!(f.outputs.len(), 1);
        assert_eq!(f.outputs[0].item.id, "part_b");
        assert_eq!(f.outputs[0].quantity, 2f64);
    }
}
