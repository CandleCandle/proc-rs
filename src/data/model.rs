use std::{collections::HashMap, hash::{Hash, Hasher}, rc::Rc};

use serde::{Deserialize, Serialize};

pub trait DataParser {
    fn from_str(&self, json: &str) -> Result<Data, String>;
}

#[derive(Debug, Clone, PartialEq)]
pub struct Data {
    pub items: HashMap<String, Rc<Item>>,
    pub factory_groups: HashMap<String, Rc<FactoryGroup>>,
    pub factories: HashMap<String, Rc<Factory>>,
    pub processes: HashMap<String, Rc<Process>>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Factory {
    pub id: String,
    pub display: String,
    pub groups: Vec<Rc<FactoryGroup>>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct FactoryGroup {
    pub id: String,
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

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Process {
    pub id: String,
    pub display: String,
    pub duration: f64,
    pub group: Rc<FactoryGroup>,
    pub inputs: Vec<Stack>,
    pub outputs: Vec<Stack>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ActiveProcess {
    pub process: Rc<Process>,
    pub duration_multiplier: f64,
    pub inputs_multiplier: f64,
    pub outputs_multiplier: f64,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Stack {
    pub item: Rc<Item>,
    pub quantity: f64,
}

// impl Display for Stack {
//     fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
//         write!(f, "{} {:?}, ({})", self.item.display, self.item.classification, self.quantity)
//     }
// }

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Item {
    pub id: String,
    pub classification: Classification,
    pub display: String,
}
impl Hash for Item {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.id.hash(state);
    }
}

// // XXX possible to derive a Display using the enum names?
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum Classification {
    Energy,
    Gas,
    Liquid,
    Solid,
}
