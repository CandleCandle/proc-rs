use std::{collections::HashMap, rc::Rc};

use crate::data::{dataset::DataSet, graph_configuration::GraphConfiguration, model::{Classification, Data, Factory, FactoryGroup, Item, Process, Stack}};




pub fn simple_data_fixture() -> Data {
    let items: HashMap<String, Rc<Item>> = vec![
        Rc::new(Item::named("part_1".into(), Classification::Solid, "Part 1".into())),
        Rc::new(Item::named("part_2".into(), Classification::Solid, "Part 2".into())),
        Rc::new(Item::named("part_3".into(), Classification::Solid, "Part 3".into())),
        Rc::new(Item::named("part_4".into(), Classification::Solid, "Part 4".into())),
    ].iter()
    .map(|i| (i.id.clone(), i.to_owned()))
    .collect();

    let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();
    let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();

    factory_groups.insert("basic".to_string(), Rc::new(FactoryGroup { id: "basic".to_string() }));
    factories.insert("basic".to_string(), Rc::new(Factory {
        id: "basic".to_string(),
        display: "basic".to_string(),
        groups: vec![factory_groups.get(&"basic".to_string()).unwrap().clone()],
    }));
    let p1 = Process {
        id: "make_a".to_string(),
        display: "Make A".to_string(),
        duration: 1.0,
        group: factory_groups.get(&"basic".to_string()).unwrap().clone(),
        inputs: vec![
            Stack::new(items.get("part_1").unwrap().clone(), 5.0),
            Stack::new(items.get("part_2").unwrap().clone(), 2.0),
            ],
        inputs_unmod: Vec::new(),
        outputs: vec![
            Stack::new(items.get("part_3").unwrap().clone(), 5.0),
            ],
        outputs_unmod: Vec::new(),
        };
    let p1_slow = Process {
        id: "slow_a_maker".to_string(),
        display: "Make 1, slowly".to_string(),
        duration: 5.0,
        group: factory_groups.get(&"basic".to_string()).unwrap().clone(),
        inputs: vec![
            Stack::new(items.get("part_1").unwrap().clone(), 5.0),
            Stack::new(items.get("part_2").unwrap().clone(), 2.0),
            ],
        inputs_unmod: Vec::new(),
        outputs: vec![
            Stack::new(items.get("part_3").unwrap().clone(), 5.0),
            ],
        outputs_unmod: Vec::new(),
        };
    let p2 = Process {
        id: "make_b".to_string(),
        display: "Make B".to_string(),
        duration: 1.0,
        group: factory_groups.get(&"basic".to_string()).unwrap().clone(),
        inputs: vec![
            Stack::new(items.get("part_3").unwrap().clone(), 3.0),
            ],
        inputs_unmod: Vec::new(),
        outputs: vec![
            Stack::new(items.get("part_2").unwrap().clone(), 1.0),
            Stack::new(items.get("part_4").unwrap().clone(), 1.0),
            ],
        outputs_unmod: Vec::new(),
        };
    let p3 = Process {
        id: "one_to_one".to_string(),
        display: "one to one".to_string(),
        duration: 1.0,
        group: factory_groups.get(&"basic".to_string()).unwrap().clone(),
        inputs: vec![
            Stack::new(items.get("part_1").unwrap().clone(), 5.0),
        ],
        inputs_unmod: Vec::new(),
        outputs: vec![
            Stack::new(items.get("part_2").unwrap().clone(), 1.0),
        ],
        outputs_unmod: Vec::new(),
    };
    let processes = vec![p1, p1_slow, p2, p3].iter()
        .map(|p| (p.id.clone(), Rc::new(p.to_owned())))
        .collect()
        ;
    Data {
        items,
        factory_groups,
        factories,
        processes,
    }
}

pub fn create_config() -> GraphConfiguration {
    let mut gc = GraphConfiguration::new();
    gc.set_data(simple_data_fixture(), DataSet::Fac200.params());
    gc
}
