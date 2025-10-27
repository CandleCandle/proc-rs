use std::fmt::{Display, Write};

use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen::prelude::JsValue;
use serde_wasm_bindgen;

#[macro_use]
extern crate serde_derive;


#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}


#[wasm_bindgen]
pub fn stuff(input: String) -> Result<JsValue, JsValue> {
    log(format!("received {} from JS", input).as_str());
    Ok(serde_wasm_bindgen::to_value(&input)?)
}

#[derive(Debug, Clone, PartialEq)]
struct Factory {
    id: String,
    display: String,
    groups: Vec<FactoryGroup>,
}

#[derive(Debug, Clone, PartialEq)]
struct FactoryGroup {
    id: String,
}

#[derive(Debug, Clone, PartialEq)]
struct ProcessGroup {
    processes: Vec<ProcessCount>,
}

#[derive(Debug, Clone, PartialEq)]
struct ProcessCount {
    process: ActiveProcess,
    count: f64,
}

#[derive(Debug, Clone, PartialEq)]
struct Process {
    id: String,
    display: String,
    duration: f64,
    group: FactoryGroup,
    inputs: Vec<Stack>,
    outputs: Vec<Stack>,
}

#[derive(Debug, Clone, PartialEq)]
struct ActiveProcess {
    process: Process,
    duration: f64,
    inputs: Vec<Stack>,
    outputs: Vec<Stack>,
}

#[derive(Debug, Clone, PartialEq)]
struct Stack {
    item: Item,
    quantity: f64,
}

impl Display for Stack {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{} {:?}, ({})", self.item.display, self.item.classification, self.quantity)
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
struct Item {
    id: String,
    classification: Classification,
    display: String,
}

// XXX possible to derive a Display using the enum names?
#[derive(Debug, Clone, PartialEq, Eq)]
enum Classification {
    Energy,
    Gas,
    Liquid,
    Solid,
}
