use std::{collections::{BTreeSet, HashMap}, hash::{Hash, Hasher}, ops, rc::Rc};

use serde::{Deserialize, Serialize};

pub trait DataParser {
    fn parse(&self, json: &str) -> Result<Data, String>;
}

#[derive(Debug, Clone, PartialEq)]
pub struct Data {
    pub items: HashMap<String, Rc<Item>>,
    pub factory_groups: HashMap<String, Rc<FactoryGroup>>,
    pub factories: HashMap<String, Rc<Factory>>,
    pub processes: HashMap<String, Rc<Process>>,
}
impl Data {
    pub fn item(&self, id: &str) -> Option<Rc<Item>> {
        self.items.get(id).cloned()
    }
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
impl From<ProcessBuilder> for Process {
    fn from(pb: ProcessBuilder) -> Self {
        Process {
            id: pb.id.unwrap(),
            display: pb.display.unwrap(),
            duration: pb.duration.unwrap(),
            group: pb.group.unwrap(),
            inputs: pb.inputs,
            outputs: pb.outputs,
        }
    }
}

#[derive(Default)]
pub struct ProcessBuilder {
    id: Option<String>,
    display: Option<String>,
    duration: Option<f64>,
    group: Option<Rc<FactoryGroup>>,
    inputs: Vec<Stack>,
    outputs: Vec<Stack>,
}
impl ProcessBuilder {
    pub fn new() -> Self {
        ProcessBuilder { ..Default::default() }
    }
    pub fn id(&mut self, id: String) -> &Self {
        self.id = Some(id); self
    }
    pub fn display(&mut self, display: String) -> &Self {
        self.display = Some(display); self
    }
    pub fn duration(&mut self, duration: f64) -> &Self {
        self.duration = Some(duration); self
    }
    pub fn group(&mut self, group: Rc<FactoryGroup>) -> &Self {
        self.group = Some(group); self
    }
    pub fn with_input(&mut self, input: Stack) -> &Self {
        self.inputs.push(input); self
    }
    pub fn with_output(&mut self, output: Stack) -> &Self {
        self.outputs.push(output); self
    }
    pub fn build(self) -> Process {
        Process {
            id: self.id.unwrap(),
            display: self.display.unwrap(),
            duration: self.duration.unwrap(),
            group: self.group.unwrap(),
            inputs: self.inputs,
            outputs: self.outputs,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ActiveProcess {
    process: Rc<Process>,
    duration_multiplier: f64,
    inputs_multiplier: f64,
    outputs_multiplier: f64,
}
impl ActiveProcess {
    pub fn new(process: Rc<Process>, duration_multiplier: f64, inputs_multiplier: f64, outputs_multiplier: f64) -> Self {
        Self {
            process, duration_multiplier, inputs_multiplier, outputs_multiplier,
        }
    }

    pub fn id(&self) -> &str {
        &self.process.id
    }

    pub fn display(&self) -> &str {
        &self.process.display
    }

    pub fn duration(&self) -> f64 {
        self.process.duration * self.duration_multiplier
    }

    pub fn inputs(&self) -> Vec<Stack> {
        self.process.inputs
            .iter()
            .map(|s| Stack::new(s.item.clone(), self.inputs_multiplier * s.quantity / self.duration()))
            .collect()
    }

    pub fn outputs(&self) -> Vec<Stack> {
        self.process.outputs
            .iter()
            .map(|s| Stack::new(s.item.clone(), self.outputs_multiplier * s.quantity / self.duration()))
            .collect()
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Stack {
    pub item: Rc<Item>,
    pub quantity: f64,
}
impl Stack {
    pub fn new(item: Rc<Item>, quantity: f64) -> Self {
        Stack {
            item, quantity
        }
    }
}

impl <'a> FromIterator<&'a Stack> for Stack {
    fn from_iter<T>(iter: T) -> Self
    where T: IntoIterator<Item = &'a Stack> {
        let mut q = 0.0;
        let mut i: Option<Rc<Item>> = None;
        for s in iter {
            if i.is_none() {
                i = Some(s.item.clone());
            }
            q += s.quantity;
        }
        Stack { item: i.unwrap(), quantity: q }
    }
}

impl ops::Mul<f64> for &Stack {
    type Output = Stack;
    fn mul(self, rhs: f64) -> Stack {
        Stack { item: self.item.clone(), quantity: self.quantity * rhs }
    }
}
impl ops::Mul<f64> for Stack {
    type Output = Stack;
    fn mul(self, rhs: f64) -> Stack {
        Stack { item: self.item.clone(), quantity: self.quantity * rhs }
    }
}

#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize)]
pub struct Item {
    pub id: String,
    pub classification: Classification,
    pub display: String,
}
impl Item {
    pub fn named(id: String, classification: Classification, display: String) -> Self {
        Self { id, classification, display }
    }
    pub fn new(id: String) -> Self {
        Self { id: id.clone(), classification: Classification::Solid, display: id }
    }
}
impl Hash for Item {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.id.hash(state);
    }
}

// // XXX possible to derive a Display using the enum names?
#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize)]
pub enum Classification {
    Energy,
    Gas,
    Liquid,
    Solid,
}

#[derive(Default)]
pub struct StackSet {
    combined: Vec<Stack>,
}

impl StackSet {


    pub fn add(&mut self, stack: Stack) {
        self.combined.push(stack);
    }

    pub fn sum_negative(&self, item: &Rc<Item>) -> Stack {
        vec![Stack{item: item.clone(), quantity: 0.0}].iter()
            .chain(self.combined.iter())
            .filter(|s| s.item.id == item.id)
            .filter(|s| s.quantity <= 0.0)
            .collect()
    }

    pub fn sum_positive(&self, item: &Rc<Item>) -> Stack {
        vec![Stack{item: item.clone(), quantity: 0.0}].iter()
            .chain(self.combined.iter())
            .filter(|s| s.item.id == item.id)
            .filter(|s| s.quantity >= 0.0)
            .collect()
    }

    pub fn sum(&self, item: &Rc<Item>) -> Stack {
        vec![Stack{item: item.clone(), quantity: 0.0}].iter()
            .chain(self.combined.iter())
            .filter(|s| s.item.id == item.id)
            .collect()
    }

    pub fn contained_items(&self) -> BTreeSet<Rc<Item>> {
        self.combined.iter().map(|s| s.item.clone()).collect()
    }
}




#[cfg(test)]
mod test {

    use crate::data::fixtures::{simple_data_fixture};

    use super::*;

    #[test]
    fn stackset_sums() {
        let mut undertest = StackSet::default();
        let i0 = Rc::new(Item::new("id0".to_string()));
        let i1 = Rc::new(Item::new("id1".to_string()));
        undertest.add(Stack::new(i0.clone(), 1.0));
        undertest.add(Stack::new(i0.clone(), -4.0));
        undertest.add(Stack::new(i1.clone(), 7.0));

        assert_eq!(undertest.sum(&i0).quantity, -3.0);
    }

    #[test]
    fn stackset_sums_missing() {
        let mut undertest = StackSet::default();
        let i0 = Rc::new(Item::new("id0".to_string()));
        let i1 = Rc::new(Item::new("id1".to_string()));
        let i2 = Rc::new(Item::new("id2".to_string()));
        undertest.add(Stack::new(i0.clone(), 1.0));
        undertest.add(Stack::new(i1.clone(), 3.0));

        assert_eq!(undertest.sum(&i2).quantity, 0.0);
    }

    #[test]
    fn stackset_sums_negative() {
        let mut undertest = StackSet::default();
        let i0 = Rc::new(Item::new("id0".to_string()));
        let i1 = Rc::new(Item::new("id1".to_string()));
        undertest.add(Stack::new(i0.clone(), -1.0));
        undertest.add(Stack::new(i0.clone(), -7.0));
        undertest.add(Stack::new(i0.clone(), 3.0));
        undertest.add(Stack::new(i1.clone(), 5.0));

        assert_eq!(undertest.sum_negative(&i0).quantity, -8.0);
    }

    #[test]
    fn stackset_sums_positive() {
        let mut undertest = StackSet::default();
        let i0 = Rc::new(Item::new("id0".to_string()));
        let i1 = Rc::new(Item::new("id1".to_string()));
        undertest.add(Stack::new(i0.clone(), 5.0));
        undertest.add(Stack::new(i0.clone(), 3.0));
        undertest.add(Stack::new(i0.clone(), -1.0));
        undertest.add(Stack::new(i1.clone(), 7.0));

        assert_eq!(undertest.sum_positive(&i0).quantity, 8.0);
    }

    #[test]
    fn active_process_inputs_are_scaled_by_duration() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("slow_a_maker").unwrap().clone(), 1.0, 1.0, 1.0);
        let actual = ap.inputs();
        let expected = vec![Stack::new(data.item("part_1").unwrap(), 1.0), Stack::new(data.item("part_2").unwrap(), 0.4)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_outputs_are_scaled_by_duration() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("slow_a_maker").unwrap().clone(), 1.0, 1.0, 1.0);
        let actual = ap.outputs();
        let expected = vec![Stack::new(data.item("part_3").unwrap(), 1.0)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_duration_is_modified() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), 2.0, 1.0, 1.0);
        let actual = ap.duration();
        let expected = 2.0;
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_inputs_are_scaled_by_duration_with_duration_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), 2.0, 1.0, 1.0);
        let actual = ap.inputs();
        let expected = vec![Stack::new(data.item("part_1").unwrap(), 2.5), Stack::new(data.item("part_2").unwrap(), 1.0)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_outputs_are_scaled_by_duration_with_duration_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), 2.0, 1.0, 1.0);
        let actual = ap.outputs();
        let expected = vec![Stack::new(data.item("part_3").unwrap(), 2.5)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_inputs_are_scaled_by_duration_with_input_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), 1.0, 2.0, 1.0);
        let actual = ap.inputs();
        let expected = vec![Stack::new(data.item("part_1").unwrap(), 10.0), Stack::new(data.item("part_2").unwrap(), 4.0)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_outputs_are_scaled_by_duration_with_output_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), 1.0, 1.0, 3.0);
        let actual = ap.outputs();
        let expected = vec![Stack::new(data.item("part_3").unwrap(), 15.0)];
        assert_eq!(expected, actual);
    }
}
