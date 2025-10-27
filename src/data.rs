use std::collections::HashMap;

use wasm_bindgen::prelude::wasm_bindgen;

use serde_json::{Value};

pub trait DataParser {
    fn from_str(json: &str) -> Data;
}


pub struct Data {
    items: HashMap<String, Item>,
    factoru_groups: HashMap<String, FactoryGroup>,
    factory_types: HashMap<String, Factory>,
    processes: HashMap<String, Process>,
}

#[derive(Debug, Clone, PartialEq)]
pub struct Factory {
    id: String,
    display: String,
    groups: Vec<FactoryGroup>,
}

#[derive(Debug, Clone, PartialEq)]
pub struct FactoryGroup {
    id: String,
}

// #[derive(Debug, Clone, PartialEq)]
// struct ProcessGroup {
//     processes: Vec<ProcessCount>,
// }

// #[derive(Debug, Clone, PartialEq)]
// struct ProcessCount {
//     process: ActiveProcess,
//     count: f64,
// }

#[derive(Debug, Clone, PartialEq)]
pub struct Process {
    id: String,
    display: String,
    duration: f64,
    group: FactoryGroup,
    inputs: Vec<Stack>,
    outputs: Vec<Stack>,
}

// #[derive(Debug, Clone, PartialEq)]
// struct ActiveProcess {
//     process: Process,
//     duration: f64,
//     inputs: Vec<Stack>,
//     outputs: Vec<Stack>,
// }

#[derive(Debug, Clone, PartialEq)]
pub struct Stack {
    item: Item,
    quantity: f64,
}

// impl Display for Stack {
//     fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
//         write!(f, "{} {:?}, ({})", self.item.display, self.item.classification, self.quantity)
//     }
// }

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Item {
    id: String,
    classification: Classification,
    display: String,
}

// // XXX possible to derive a Display using the enum names?
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Classification {
    Energy,
    Gas,
    Liquid,
    Solid,
}
