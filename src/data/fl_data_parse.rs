use std::{collections::{BTreeMap, HashMap}, rc::Rc};

use serde::{Deserialize, Serialize};

use crate::data::model::{Data, DataParser, Factory, FactoryGroup, Item, Process, Stack};




#[derive(Debug)]
pub enum DataParserFLabFiles {
    Data,
}

impl DataParserFLabFiles {
    pub fn to_key(&self) -> String {
        match &self {
            Self::Data => "Data".to_string(),
        }
    }
}

pub struct DataParserFLab {}
impl DataParserFLab {
}


impl DataParser for DataParserFLab {
    fn files_to_fetch_list(&self, conf: &super::dataset::DataSetConf) -> std::collections::BTreeMap<String, String> {
        let mut result = BTreeMap::new();
        result.insert(DataParserFLabFiles::Data.to_key(), format!("data/vendor/{}/data.json", conf.id));
        result
    }

    fn parse(&self, jsons: &mut std::collections::BTreeMap<String, String>) -> Result<super::model::Data, String> {
        let parsed: FLabData = serde_json::from_str(jsons.get(&DataParserFLabFiles::Data.to_key()).unwrap()).unwrap();
        let items: HashMap<_, _> = parsed.items.iter()
            .map(|i| -> Item { i.new_item_from() })
            .map(|i| (i.id.clone(), Rc::new(i)) )
            .collect();

        let mut factory_groups = HashMap::new();
        let mut processes = HashMap::new();
        let mut fg_sets: Vec<String> = Vec::new();

        for recipe in parsed.recipes {
            let fg_set_proxy = recipe.producers.join(",");
            let position = fg_sets.iter().position(|v| v.eq(&fg_set_proxy));
            let fg_id = match position {
                Some(p) => p,
                None => {
                    let p = fg_sets.len();
                    fg_sets.push(fg_set_proxy);
                    factory_groups.insert(format!("fg-{p}"), Rc::new(FactoryGroup { id: format!("fg-{p}") }));
                    p
                },
            };
            let fg = factory_groups.get(&format!("fg-{fg_id}")).unwrap().clone();
            let proc = recipe.new_from(&items, fg)?;
            processes.insert(proc.id.clone(), Rc::new(proc));
        }
        let factories = parsed.items.iter()
            .filter(|i| i.machine.is_some())
            .map(|i| -> Result<(String, Rc<Factory>), String> {
                let f = i.new_factory_from(&fg_sets, &factory_groups)?;
                Ok((f.id.clone(), Rc::new(f)))
            })
            .collect::<Result<HashMap<String, Rc<Factory>>, String>>()?;


        Ok(Data{
            items,
            factory_groups,
            factories,
            processes,
        })

    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FLabData {
    // values are either strings or integers
    // version: BTreeMap<String, String>,
    items: Vec<FLabDataItem>,
    recipes: Vec<FLabRecipe>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FLabDataItem {
    id: String,
    name: String,
    machine: Option<FLabDataItemMachine>,
}
impl FLabDataItem {
    fn new_item_from(&self) -> Item {
        Item {
            id: self.id.clone(),
            classification: super::model::Classification::Solid,
            display: self.name.clone(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FLabDataItemMachine {
    speed: f64,
    #[serde(rename="type")]
    ftype: Option<String>,
    usage: Option<f64>,
}
impl FLabDataItem {
    fn new_factory_from(&self, fg_sets: &Vec<String>, fgs: &HashMap<String, Rc<FactoryGroup>>) -> Result<Factory, String> {
        Ok(Factory {
            id: self.id.clone(),
            display: self.name.clone(),
            groups: fg_sets.iter().enumerate()
                .filter(|v| v.1.contains(&self.id))
                .map(|v| -> Result<Rc<FactoryGroup>, String> {
                    Ok(fgs.get(&format!("fg-{}", v.0)).cloned().ok_or_else(|| format!("unable for find a factory group containing {}", self.id))?)
                })
                .collect::<Result<Vec<Rc<FactoryGroup>>, String>>()?,
            duration_multiplier: 1.0/self.machine.as_ref().unwrap().speed.clone(),
            inputs_multiplier: 1.0,
            outputs_multiplier: 1.0, // XXX factorio has machine.baseEffect.productivity
        })
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FLabRecipe {
    id: String,
    name: String,
    time: f64,
    #[serde(rename="in")]
    input: BTreeMap<String, f64>,
    out: BTreeMap<String, f64>,
    producers: Vec<String>,
}
impl FLabRecipe {
    fn new_from(&self, items: &HashMap<String, Rc<Item>>, group: Rc<FactoryGroup>) -> Result<Process, String> {
        Ok(Process {
            id: self.id.clone(),
            display: self.name.clone(),
            duration: self.time,
            group,
            inputs: self.input.iter().map(|v| -> Result<Stack, String> {
                Ok(Stack{
                    item: items.get(v.0).cloned().ok_or_else(|| format!("can't find item {}", v.0))?,
                    quantity: v.1.clone()
                })
            }).collect::<Result<Vec<Stack>, String>>()?,
            inputs_unmod: Vec::new(),
            outputs: self.out.iter().map(|v| -> Result<Stack, String> {
                Ok(Stack{
                    item: items.get(v.0).cloned().ok_or_else(|| format!("can't find item {}", v.0))?,
                    quantity: v.1.clone()
                })
            }).collect::<Result<Vec<Stack>, String>>()?,
            outputs_unmod: Vec::new(),
        })
    }
}


#[cfg(test)]
mod test {
    use itertools::Itertools;
    use crate::data::{fixtures::load_fixture};
    use super::*;

    fn create_input_fixture() -> BTreeMap<String, String> {
        let mut jsons = BTreeMap::new();
        jsons.insert(DataParserFLabFiles::Data.to_key().to_string(), load_fixture("fixtures/fl_data.json").to_string());
        jsons
    }

    #[test]
    fn it_discovers_factory_groups() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.factory_groups.values().map(|fg| fg.id.clone()).sorted().collect::<Vec<String>>(), &[
            "fg-0",
            "fg-1",
        ])
    }

    #[test]
    fn it_parses_item_ids() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.items.values().map(|i| i.id.clone()).sorted().collect::<Vec<String>>(), &[
            "assembler-1", "building-block", "cement", "mineral-rocks",
            "stairs", "technum-rod", "xenoferrite-ore-rubble", "xenoferrite-plates",
        ])
    }

    #[test]
    fn it_parses_item_names() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.items.values().map(|i| i.display.clone()).sorted().collect::<Vec<String>>(), &[
            "Assembler 1", "Building Block", "Cement", "Mineral Rocks",
            "Stairs", "Technum Rod", "Xenoferrite Ore Rubble", "Xenoferrite Plates",
        ])
    }

    #[test]
    fn it_parses_factory_ids() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.factories.values().map(|f| f.id.clone()).sorted().collect::<Vec<String>>(), &[
            "assembler-1",
        ])
    }

    #[test]
    fn it_parses_factory_names() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.factories.values().map(|f| f.display.clone()).sorted().collect::<Vec<String>>(), &[
            "Assembler 1",
        ])
    }

    #[test]
    fn it_parses_factories() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        let factory = r.factories.get("assembler-1").unwrap();
        assert_eq!(factory.id, "assembler-1");
        assert_eq!(factory.display, "Assembler 1");
        assert_eq!(factory.duration_multiplier, 0.5);
        assert_eq!(factory.inputs_multiplier, 1.0);
        assert_eq!(factory.outputs_multiplier, 1.0);
    }

    #[test]
    fn it_parses_process_names() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(r.processes.values().map(|p| p.display.clone()).sorted().collect::<Vec<String>>(), &[
            "Building Block", "Cement", "Stairs",
        ])
    }

    #[test]
    fn it_understands_processes() {
        let mut jsons = create_input_fixture();
        let res = DataParserFLab{}.parse(&mut jsons);
        let r = res.unwrap();
        let process = r.processes.get("building-block").unwrap();
        assert_eq!(process.id, "building-block");
        assert_eq!(process.display, "Building Block");
        assert_eq!(process.duration, 5.0);
        assert_eq!(process.group.id, "fg-0");
        assert_eq!(process.inputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["technum-rod", "xenoferrite-plates"]);
        assert_eq!(process.inputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[4.0, 6.0]);
        assert_eq!(process.outputs.iter().map(|s| s.item.id.clone()).sorted().collect::<Vec<String>>(), &["building-block"]);
        assert_eq!(process.outputs.iter().sorted_by(|a, b| a.item.id.cmp(&b.item.id)).map(|s| s.quantity).collect::<Vec<f64>>(), &[20.0]);
        assert_eq!(process.inputs_unmod.len(), 0);
        assert_eq!(process.outputs_unmod.len(), 0);
    }

}
