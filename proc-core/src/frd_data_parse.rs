use std::{
    collections::{BTreeMap, HashMap},
    rc::Rc,
};

use enum_id_derive::EnumId;
use serde::{Deserialize, Serialize};

use crate::model::{Data, DataParser, Factory, FactoryGroup, Item, Process, Stack};

#[derive(Debug, EnumId)]
pub enum DataParserFrdFiles {
    RecipesClean,
    Tags,
    Machines,
}

impl DataParserFrdFiles {
    pub fn to_key(&self) -> String {
        self.name()
    }
}

pub struct DataParserFrd {}
impl DataParserFrd {}

impl DataParser for DataParserFrd {
    fn files_to_fetch_list(
        &self,
        conf: &super::dataset::DataSetConf,
    ) -> std::collections::BTreeMap<String, String> {
        let mut result = BTreeMap::new();
        result.insert(
            DataParserFrdFiles::RecipesClean.to_key(),
            format!("data/vendor/{}/recipes_clean.json", conf.id),
        );
        result.insert(
            DataParserFrdFiles::Tags.to_key(),
            format!("data/vendor/{}/tags.json", conf.id),
        );
        result.insert(
            DataParserFrdFiles::Machines.to_key(),
            format!("data/vendor/{}/machines.json", conf.id),
        );
        result
    }

    fn parse(
        &self,
        jsons: &mut std::collections::BTreeMap<String, String>,
    ) -> Result<super::model::Data, String> {
        let tags: FrdTags =
            serde_json::from_str(jsons.get(&DataParserFrdFiles::Tags.to_key()).unwrap()).unwrap();
        let machines: FrdMachines =
            serde_json::from_str(jsons.get(&DataParserFrdFiles::Machines.to_key()).unwrap())
                .unwrap();

        let factory_groups0: HashMap<_, _> = tags
            .tags
            .iter()
            .map(|f| Ok((f.identifier.clone(), Rc::new(f.new_factory_group_from()?))))
            .collect::<Result<HashMap<String, Rc<FactoryGroup>>, String>>()?;
        let factory_groups1: HashMap<_, _> = machines
            .machines
            .iter()
            .flat_map(|(_id, m)| m.new_factory_groups_from())
            .map(|g| Ok((g.id.clone(), Rc::new(g))))
            .collect::<Result<HashMap<String, Rc<FactoryGroup>>, String>>()?;
        let mut factory_groups = HashMap::new();
        for (k, v) in factory_groups0 {
            factory_groups.insert(k, v);
        }
        for (k, v) in factory_groups1 {
            factory_groups.insert(k, v);
        }

        let recipes: FrdRecipes = serde_json::from_str(
            jsons
                .get(&DataParserFrdFiles::RecipesClean.to_key())
                .unwrap(),
        )
        .unwrap();
        let items: HashMap<_, _> = recipes
            .recipes
            .iter()
            .flat_map(|r| r.all_io())
            .map(|f| {
                (
                    f.identifier.clone(),
                    Rc::new(Item {
                        classification: super::model::Classification::Solid,
                        id: f.identifier.clone(),
                        display: f.identifier.clone(),
                    }),
                )
            })
            .collect();

        let factories: HashMap<_, _> = machines
            .machines
            .iter()
            .map(|(k, m)| Ok((k.clone(), Rc::new(m.new_factory_for(k, &factory_groups)?))))
            .collect::<Result<HashMap<String, Rc<Factory>>, String>>()?;

        let processes: HashMap<String, Rc<Process>> = recipes
            .recipes
            .iter()
            .map(|r| r.new_process_from(&factory_groups, &items))
            .map(|p| p.map(|pp| (pp.id.clone(), Rc::new(pp))))
            .collect::<Result<HashMap<String, Rc<Process>>, String>>()?;

        Ok(Data {
            items,
            factory_groups,
            factories,
            processes,
        })
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FrdTags {
    count: u32,
    tags: Vec<FrdTag>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FrdTag {
    identifier: String,
    name: String,
}
impl FrdTag {
    fn new_factory_group_from(&self) -> Result<FactoryGroup, String> {
        Ok(FactoryGroup {
            id: self.identifier.clone(),
        })
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FrdRecipes {
    count: u32,
    recipes: Vec<FrdRecipe>,
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FrdRecipe {
    identifier: String,
    name: String,
    #[serde(rename = "timeMs")]
    time_ms: f64,
    inputs: Vec<FrdRecipeIo>,
    outputs: Vec<FrdRecipeIo>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FrdRecipeIo {
    identifier: String,
    amount: f64,
}
impl FrdRecipe {
    fn all_io(
        &self,
    ) -> std::iter::Chain<std::slice::Iter<'_, FrdRecipeIo>, std::slice::Iter<'_, FrdRecipeIo>> // should return "impl Iterator"
    {
        self.inputs.iter().chain(self.outputs.iter())
    }

    fn new_process_from(
        &self,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
        items: &HashMap<String, Rc<Item>>,
    ) -> Result<Process, String> {
        Ok(Process {
            id: self.identifier.clone(),
            display: self.name.clone(),
            group: factory_groups.get("assembler").unwrap().clone(), // XXX Convert many-to-many to one-to-many?
            duration: self.time_ms / 1000.0,
            inputs_unmod: Vec::new(),
            outputs_unmod: Vec::new(),
            inputs: self
                .inputs
                .iter()
                .map(|i| {
                    Ok(Stack {
                        item: items
                            .get(&i.identifier)
                            .cloned()
                            .ok_or(format!("failed to find an item for {}", i.identifier))?,
                        quantity: i.amount,
                    })
                })
                .collect::<Result<Vec<Stack>, String>>()?,
            outputs: self
                .outputs
                .iter()
                .map(|i| {
                    Ok(Stack {
                        item: items
                            .get(&i.identifier)
                            .cloned()
                            .ok_or(format!("failed to find an item for {}", i.identifier))?,
                        quantity: i.amount,
                    })
                })
                .collect::<Result<Vec<Stack>, String>>()?,
        })
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FrdMachines {
    machines: HashMap<String, FrdMachine>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
struct FrdMachine {
    name: String,
    #[serde(rename = "craftingTags")]
    crafting_tags: Vec<String>,
    #[serde(rename = "craftingSpeedMultiplier")]
    crafting_speed_multiplier: f64,
}
impl FrdMachine {
    fn new_factory_groups_from(&self) -> Vec<FactoryGroup> {
        self.crafting_tags
            .iter()
            .map(|m| FactoryGroup { id: m.clone() })
            .collect()
    }
    fn new_factory_for(
        &self,
        id: &String,
        factory_groups: &HashMap<String, Rc<FactoryGroup>>,
    ) -> Result<Factory, String> {
        Ok(Factory {
            id: id.clone(),
            display: self.name.clone(),
            groups: self
                .crafting_tags
                .iter()
                .map(|t| {
                    factory_groups.get(t).cloned().ok_or(format!(
                        "failed to find a factory group for {t} when creating {}",
                        id
                    ))
                })
                .collect::<Result<Vec<Rc<FactoryGroup>>, String>>()?,
            duration_multiplier: 1.0 / self.crafting_speed_multiplier,
            inputs_multiplier: 1.0,
            outputs_multiplier: 1.0,
        })
    }
}

#[cfg(test)]
mod test {
    use itertools::Itertools;

    use super::*;
    use crate::fixtures::load_fixture;

    fn create_input_fixture() -> BTreeMap<String, String> {
        let mut jsons = BTreeMap::new();
        jsons.insert(
            DataParserFrdFiles::RecipesClean.to_key().to_string(),
            load_fixture("fixtures/frd/recipes_clean.json").to_string(),
        );
        jsons.insert(
            DataParserFrdFiles::Tags.to_key().to_string(),
            load_fixture("fixtures/frd/tags.json").to_string(),
        );
        jsons.insert(
            DataParserFrdFiles::Machines.to_key().to_string(),
            load_fixture("fixtures/frd/machines.json").to_string(),
        );
        jsons
    }

    #[test]
    fn it_discovers_factory_groups() {
        let mut jsons = create_input_fixture();
        let res = DataParserFrd {}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(
            r.factory_groups
                .values()
                .map(|fg| fg.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "advanced_smelter",
                "assembler",
                "assembler_fluid",
                "base_station",
                "character",
                "crusher",
            ]
        )
    }

    #[test]
    fn it_discovers_items() {
        let mut jsons = create_input_fixture();
        let res = DataParserFrd {}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(
            r.items
                .values()
                .map(|i| i.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "_base_ore_xenoferrite",
                "_base_power_line_i",
                "_base_rubble_xenoferrite",
                "_base_wire_coil",
                "_base_xenoferrite_plates",
            ]
        )
    }

    #[test]
    fn it_discovers_factories() {
        let mut jsons = create_input_fixture();
        let res = DataParserFrd {}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(
            r.factories
                .values()
                .map(|i| i.id.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &[
                "advanced_smelter@1",
                "advanced_smelter@1.5",
                "advanced_smelter@2",
                "assembler@1",
                "assembler@1.5",
                "assembler@2",
                "assembler_fluid@1",
                "base_station@1.5",
            ]
        )
    }

    #[test]
    fn it_discovers_processes() {
        let mut jsons = create_input_fixture();
        let res = DataParserFrd {}.parse(&mut jsons);
        let r = res.unwrap();
        assert_eq!(
            r.processes
                .values()
                .map(|i| i.display.clone())
                .sorted()
                .collect::<Vec<String>>(),
            &["Power Line", "Xenoferrite Ore", "Xenoferrite Plates",]
        )
    }
}
