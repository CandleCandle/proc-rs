use std::collections::HashMap;

pub trait DataParser {
    fn from_str(json: &str) -> Result<Data, ()>;
}

pub struct Data {
    pub items: HashMap<String, Item>,
    pub factory_groups: HashMap<String, FactoryGroup>,
    pub factories: HashMap<String, Factory>,
    pub processes: HashMap<String, Process>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Factory {
    pub id: String,
    pub display: String,
    pub groups: Vec<FactoryGroup>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
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

#[derive(Debug, Clone, PartialEq)]
pub struct Process {
    pub id: String,
    pub display: String,
    pub duration: f64,
    pub group: FactoryGroup,
    pub inputs: Vec<Stack>,
    pub outputs: Vec<Stack>,
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
    pub item: Item,
    pub quantity: f64,
}

// impl Display for Stack {
//     fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
//         write!(f, "{} {:?}, ({})", self.item.display, self.item.classification, self.quantity)
//     }
// }

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Item {
    pub id: String,
    pub classification: Classification,
    pub display: String,
}

// // XXX possible to derive a Display using the enum names?
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Classification {
    Energy,
    Gas,
    Liquid,
    Solid,
}
