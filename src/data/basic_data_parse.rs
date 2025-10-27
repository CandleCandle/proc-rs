use std::collections::HashMap;

use serde_json::Value;

use super::model::{Classification, Data, DataParser, Factory, FactoryGroup, Item};




pub struct DataParserBasic {}
impl DataParser for DataParserBasic {
    fn from_str(json: &str) -> Result<Data, ()> {
        let outer: Value = serde_json::from_str(json).map_err(|_e| ())?;

        let items: HashMap<String, Item> = outer["items"].as_array().unwrap().iter()
            .map(|i| Item{
                id: i["id"].as_str().unwrap().to_string(),
                display: i["i18n"]["en"].as_str().unwrap().to_string(),
                classification: Classification::Solid,
            })
            .map(|i| (i.id.clone(), i))
            .collect();
        let mut factory_groups: HashMap<String, FactoryGroup> = HashMap::new();
        let mut factories: HashMap<String, Factory> = HashMap::new();

        for fac in outer["factories"].as_array().unwrap() {
            for fac_grp in fac["factory_groups"].as_array().unwrap() {
                let id = fac_grp.as_str().unwrap().to_string();
                if !factory_groups.contains_key(&id) {
                    factory_groups.insert(id.clone(), FactoryGroup { id });
                }
            }
            let id = fac["id"].as_str().unwrap().to_string();
            factories.insert(id.clone(), Factory {
                id,
                display: fac["i18n"]["en"].as_str().unwrap().to_string(),
                groups: fac["factory_groups"].as_array().unwrap()
                        .iter()
                        .map(|g| factory_groups.get(&g.as_str().unwrap().to_string()).unwrap().clone())
                        .collect(),
            });
        }

        Ok(Data{
            items,
            factory_groups,
            factories,
            processes: HashMap::from([]),
        })
    }
}



#[cfg(test)]
mod tests {
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
                "factories": [ ]
            }
        "#
    }

    fn simple_factory_fixture() -> &'static str {
        r#"
            {
                "items": [ ],
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

    #[test]
    fn simple_item_get_by_id() {
        let fixture = simple_item_fixture();
        let res = DataParserBasic::from_str(fixture);
        let r = res.unwrap();
        let i = r.items.get("part_a").unwrap();
        assert_eq!(i.id, "part_a");
        assert_eq!(i.display, "Part A");
        assert_eq!(i.classification, Classification::Solid);
    }

    #[test]
    fn simple_factory_get_by_id() {
        let fixture = simple_factory_fixture();
        let res = DataParserBasic::from_str(fixture);
        let r = res.unwrap();
        let f = r.factories.get("main").unwrap();
        assert_eq!(f.id, "main");
        assert_eq!(f.display, "Main");
        assert_eq!(f.groups.len(), 1);
        assert_eq!(f.groups[0].id, "default");
    }

}
