use std::{collections::{BTreeMap, BTreeSet, HashMap}, hash::{Hash, Hasher}, ops, rc::Rc};

use itertools::Itertools;
use serde::{Deserialize, Serialize};

use crate::data::dataset::DataSetConf;

pub trait DataParser {
    fn parse(&self, jsons: &mut BTreeMap<&str, String>) -> Result<Data, String>;
    fn files_to_fetch_list(&self, conf: &DataSetConf) -> BTreeMap<&str, String>;
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

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Factory {
    pub id: String,
    pub display: String,
    pub groups: Vec<Rc<FactoryGroup>>,
    pub duration_multiplier: f64,
    pub inputs_multiplier: f64,
    pub outputs_multiplier: f64,
}
impl Default for Factory {
    fn default() -> Self {
        Self {
            id: "default".to_string(),
            display: "Default".to_string(),
            groups: vec![Rc::new(FactoryGroup::default())],
            duration_multiplier: 1.0,
            inputs_multiplier: 1.0,
            outputs_multiplier: 1.0,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct FactoryGroup {
    pub id: String,
}
impl Default for FactoryGroup {
    fn default() -> Self {
        Self { id: "default".to_string() }
    }
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
    pub inputs_unmod: Vec<Stack>,
    pub outputs: Vec<Stack>,
    pub outputs_unmod: Vec<Stack>,
}
impl From<ProcessBuilder> for Process {
    fn from(pb: ProcessBuilder) -> Self {
        Process {
            id: pb.id.unwrap(),
            display: pb.display.unwrap(),
            duration: pb.duration.unwrap(),
            group: pb.group.unwrap(),
            inputs: pb.inputs,
            inputs_unmod: pb.inputs_unmod,
            outputs: pb.outputs,
            outputs_unmod: pb.outputs_unmod,
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
    inputs_unmod: Vec<Stack>,
    outputs: Vec<Stack>,
    outputs_unmod: Vec<Stack>,
}
impl ProcessBuilder {
    pub fn new() -> Self {
        ProcessBuilder { ..Default::default() }
    }
    pub fn id(mut self, id: String) -> Self {
        self.id = Some(id); self
    }
    pub fn display(mut self, display: String) -> Self {
        self.display = Some(display); self
    }
    pub fn duration(mut self, duration: f64) -> Self {
        self.duration = Some(duration); self
    }
    pub fn group(mut self, group: Rc<FactoryGroup>) -> Self {
        self.group = Some(group); self
    }
    pub fn with_input(mut self, input: Stack) -> Self {
        self.inputs.push(input); self
    }
    pub fn with_input_unmod(mut self, input: Stack) -> Self {
        self.inputs_unmod.push(input); self
    }
    pub fn with_output(mut self, output: Stack) -> Self {
        self.outputs.push(output); self
    }
    pub fn with_output_unmod(mut self, output: Stack) -> Self {
        self.outputs_unmod.push(output); self
    }
    pub fn build(self) -> Process {
        Process {
            id: self.id.unwrap(),
            display: self.display.unwrap(),
            duration: self.duration.unwrap(),
            group: self.group.unwrap(),
            inputs: self.inputs,
            inputs_unmod: self.inputs_unmod,
            outputs: self.outputs,
            outputs_unmod: self.outputs_unmod,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ActiveProcess {
    process: Rc<Process>,
    factory: Rc<Factory>,
    duration_multiplier: f64,
    inputs_multiplier: f64,
    outputs_multiplier: f64,
}
impl ActiveProcess {
    pub fn new(
        process: Rc<Process>,
        factory: Rc<Factory>,
        duration_multiplier: f64,
        inputs_multiplier: f64,
        outputs_multiplier: f64,
    ) -> Self {
        Self {
            process, duration_multiplier, inputs_multiplier, outputs_multiplier, factory
        }
    }

    pub fn id(&self) -> &str {
        &self.process.id
    }

    pub fn display(&self) -> &str {
        &self.process.display
    }

    pub fn factory(&self) -> Rc<Factory> {
        self.factory.clone()
    }

    pub fn factory_group(&self) -> Rc<FactoryGroup> {
        self.process.group.clone()
    }

    pub fn duration(&self) -> f64 {
        self.process.duration * self.duration_multiplier
    }

    fn io_calc(modifiable: &[Stack], unmodifiable: &[Stack], multiplier: &f64, duration: &f64) -> Vec<Stack> {
      let unmodified = unmodifiable
            .iter()
            .map(|s| Stack::new(s.item.clone(), s.quantity / duration));

        let modified = modifiable
            .iter()
            .map(|s| Stack::new(s.item.clone(), multiplier * s.quantity / duration));

        let all = unmodified.chain(modified)
            .sorted_by(|a, b| a.item.id.cmp(&b.item.id))
            ;

        let mut result: Vec<Stack> = Vec::new();
        for stack in all {
            let last = result.pop();
            match last {
                Some(stk) => {
                    if stk.item.id == stack.item.id {
                        result.push(stack + stk.quantity);
                    } else {
                        result.push(stk);
                        result.push(stack);
                    }
                },
                None => result.push(stack),
            }
        }
        result
    }

    pub fn inputs(&self) -> Vec<Stack> {
        Self::io_calc(
            &self.process.inputs,
            &self.process.inputs_unmod,
            &self.inputs_multiplier,
            &self.duration())
    }

    pub fn outputs(&self) -> Vec<Stack> {
        Self::io_calc(
            &self.process.outputs,
            &self.process.outputs_unmod,
            &self.outputs_multiplier,
            &self.duration())
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
impl ops::Add<f64> for Stack {
    type Output = Stack;
    fn add(self, rhs: f64) -> Self::Output {
        Stack { item: self.item.clone(), quantity: self.quantity + rhs }
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
        [Stack{item: item.clone(), quantity: 0.0}].iter()
            .chain(self.combined.iter())
            .filter(|s| s.item.id == item.id)
            .filter(|s| s.quantity <= 0.0)
            .collect()
    }

    pub fn sum_positive(&self, item: &Rc<Item>) -> Stack {
        [Stack{item: item.clone(), quantity: 0.0}].iter()
            .chain(self.combined.iter())
            .filter(|s| s.item.id == item.id)
            .filter(|s| s.quantity >= 0.0)
            .collect()
    }

    pub fn sum(&self, item: &Rc<Item>) -> Stack {
        [Stack{item: item.clone(), quantity: 0.0}].iter()
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
        let ap = ActiveProcess::new(data.processes.get("slow_a_maker").unwrap().clone(), Rc::new(Factory::default()), 1.0, 1.0, 1.0);
        let actual = ap.inputs();
        let expected = vec![Stack::new(data.item("part_1").unwrap(), 1.0), Stack::new(data.item("part_2").unwrap(), 0.4)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_outputs_are_scaled_by_duration() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("slow_a_maker").unwrap().clone(), data.factories.get("basic").unwrap().clone(), 1.0, 1.0, 1.0);
        let actual = ap.outputs();
        let expected = vec![Stack::new(data.item("part_3").unwrap(), 1.0)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_duration_is_modified() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), data.factories.get("basic").unwrap().clone(), 2.0, 1.0, 1.0);
        let actual = ap.duration();
        let expected = 2.0;
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_inputs_are_scaled_by_duration_with_duration_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), data.factories.get("basic").unwrap().clone(), 2.0, 1.0, 1.0);
        let actual = ap.inputs();
        let expected = vec![Stack::new(data.item("part_1").unwrap(), 2.5), Stack::new(data.item("part_2").unwrap(), 1.0)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_outputs_are_scaled_by_duration_with_duration_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), data.factories.get("basic").unwrap().clone(), 2.0, 1.0, 1.0);
        let actual = ap.outputs();
        let expected = vec![Stack::new(data.item("part_3").unwrap(), 2.5)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_inputs_are_scaled_by_duration_with_input_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), data.factories.get("basic").unwrap().clone(), 1.0, 2.0, 1.0);
        let actual = ap.inputs();
        let expected = vec![Stack::new(data.item("part_1").unwrap(), 10.0), Stack::new(data.item("part_2").unwrap(), 4.0)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_outputs_are_scaled_by_duration_with_output_modifier() {
        let data = simple_data_fixture();
        let ap = ActiveProcess::new(data.processes.get("make_a").unwrap().clone(), data.factories.get("basic").unwrap().clone(), 1.0, 1.0, 3.0);
        let actual = ap.outputs();
        let expected = vec![Stack::new(data.item("part_3").unwrap(), 15.0)];
        assert_eq!(expected, actual);
    }

    #[test]
    fn active_process_with_unmodifiable_inputs() {
        let items = [
            Rc::new(Item::new("id_0".to_string())),
            Rc::new(Item::new("id_1".to_string())),
            Rc::new(Item::new("id_2".to_string())),
        ];
        let proc = Rc::new(ProcessBuilder::new()
            .id("proc".to_string())
            .display("proc".to_string())
            .group(Rc::new(FactoryGroup{id: "none".to_string()}))
            .duration(1.0)
            .with_input(Stack { item: items[0].clone(), quantity: 5.0 })
            .with_input_unmod(Stack { item: items[0].clone(), quantity: 5.0 })
            .with_input(Stack { item: items[1].clone(), quantity: 1.0 })
            .with_output_unmod(Stack { item: items[0].clone(), quantity: 4.0 })
            .with_output(Stack { item: items[2].clone(), quantity: 2.0 })
            .build());

        let ap = ActiveProcess::new(proc.clone(), Rc::new(Factory::default()), 1.0, 2.0, 3.0);

        assert_eq!(15.0, ap.inputs().iter().filter(|s| s.item.id == "id_0").next().unwrap().quantity);
        assert_eq!(2.0, ap.inputs().iter().filter(|s| s.item.id == "id_1").next().unwrap().quantity);
        assert_eq!(4.0, ap.outputs().iter().filter(|s| s.item.id == "id_0").next().unwrap().quantity);
        assert_eq!(6.0, ap.outputs().iter().filter(|s| s.item.id == "id_2").next().unwrap().quantity);
    }
}
