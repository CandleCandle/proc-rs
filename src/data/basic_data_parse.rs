use std::collections::HashMap;

use serde_json::Value;

use super::model::{Classification, Data, DataParser, Item};




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

        Ok(Data{
            items,
            factory_groups: HashMap::from([]),
            factory_types: HashMap::from([]),
            processes: HashMap::from([]),
        })
    }
}



#[cfg(test)]
mod tests {
    use crate::data::model::{Classification, Item};

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
        assert_eq!(i.classification, Classification::Solid);
    }
}
