use std::{collections::HashMap, fs, path::PathBuf, rc::Rc};

use crate::data::{dataset::DataSetConf, graph_configuration::GraphConfiguration, model::{Classification, Data, Factory, FactoryGroup, Item, Process, Stack}};


pub fn load_fixture(path: &str) -> String {
    println!("fixtures location: {:?}", PathBuf::from(file!()).parent().unwrap().join(PathBuf::from(path)));
    fs::read_to_string(PathBuf::from(file!()).parent().unwrap().join(PathBuf::from(path))).unwrap()
}

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
    factory_groups.insert("basic2".to_string(), Rc::new(FactoryGroup { id: "basic2".to_string() }));
    factory_groups.insert("basic3".to_string(), Rc::new(FactoryGroup { id: "basic3".to_string() }));
    factories.insert("basic".to_string(), Rc::new(Factory {
        id: "basic".to_string(),
        display: "basic".to_string(),
        groups: vec![factory_groups.get(&"basic".to_string()).unwrap().clone()],
        duration_multiplier: 1.0,
        inputs_multiplier: 1.0,
        outputs_multiplier: 1.0
    }));
    factories.insert("all_basics".to_string(), Rc::new(Factory {
        id: "all_basics".to_string(),
        display: "all_basics".to_string(),
        groups: vec![
            factory_groups.get(&"basic".to_string()).unwrap().clone(),
            factory_groups.get(&"basic2".to_string()).unwrap().clone()
        ],
        duration_multiplier: 1.0,
        inputs_multiplier: 1.0,
        outputs_multiplier: 1.0
    }));
    factories.insert("just_basic2".to_string(), Rc::new(Factory {
        id: "just_basic2".to_string(),
        display: "just_basic2".to_string(),
        groups: vec![
            factory_groups.get(&"basic2".to_string()).unwrap().clone()
        ],
        duration_multiplier: 0.5,
        inputs_multiplier: 1.0,
        outputs_multiplier: 1.0
    }));
    factories.insert("output_modifier".to_string(), Rc::new(Factory {
        id: "output_modifier".to_string(),
        display: "output_modifier".to_string(),
        groups: vec![
            factory_groups.get(&"basic".to_string()).unwrap().clone()
        ],
        duration_multiplier: 1.0,
        inputs_multiplier: 1.0,
        outputs_multiplier: 2.0
    }));
    factories.insert("input_modifier".to_string(), Rc::new(Factory {
        id: "input_modifier".to_string(),
        display: "input_modifier".to_string(),
        groups: vec![
            factory_groups.get(&"basic".to_string()).unwrap().clone()
        ],
        duration_multiplier: 1.0,
        inputs_multiplier: 2.0,
        outputs_multiplier: 1.0
    }));
    let p1 = Process {
        id: "make_a".to_string(),
        display: "Make A".to_string(),
        duration: 1.0,
        group: factory_groups.get(&"basic2".to_string()).unwrap().clone(),
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
    let p4 = Process {
        id: "zero_output_input".to_string(),
        display: "zero output or zero input".to_string(),
        duration: 1.0,
        group: factory_groups.get(&"basic".to_string()).unwrap().clone(),
        inputs: vec![
            Stack::new(items.get("part_1").unwrap().clone(), 5.0),
            Stack::new(items.get("part_4").unwrap().clone(), 0.0),
        ],
        inputs_unmod: Vec::new(),
        outputs: vec![
            Stack::new(items.get("part_2").unwrap().clone(), 1.0),
            Stack::new(items.get("part_3").unwrap().clone(), 0.0),
        ],
        outputs_unmod: Vec::new(),
    };
    let processes = vec![p1, p1_slow, p2, p3, p4].iter()
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
    gc.set_data(simple_data_fixture(), DataSetConf{id: "".to_string(), style: "basic".to_string().try_into().unwrap()});
    gc
}
