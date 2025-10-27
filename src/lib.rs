#[allow(dead_code)]


use std::collections::HashMap;
// use std::fmt::{Display, Write};

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

#[wasm_bindgen]
pub fn list_data_sets() -> Result<JsValue, JsValue> {
    let data_sets: HashMap<String, DataSet> = vec!(
        DataSet {style: DataSetStyle::Basic, base: "fac".into(), base_version: "2.0.0".into(), set_identifier: "vanilla".into(), set_version: "2.0.0".into()},
        DataSet {style: DataSetStyle::Basic, base: "fac".into(), base_version: "1.5.0".into(), set_identifier: "vanilla".into(), set_version: "1.5.0".into()},
        DataSet {style: DataSetStyle::Basic, base: "fac".into(), base_version: "2.0.0".into(), set_identifier: "se".into(), set_version: "4.0.0".into()},
        DataSet {style: DataSetStyle::Basic, base: "dsp".into(), base_version: "1.0.0".into(), set_identifier: "vanilla".into(), set_version: "1.0.0".into()},
    ).iter().map(|s| (s.id(), s.clone())).collect()
    ;
    Ok(serde_wasm_bindgen::to_value(&data_sets)?)
}
// #[wasm_bindgen]
// pub fn list_data_sets2() -> Vec<DataSet> {
//     vec!(
//         DataSet {base: "fac".into(), base_version: "2.0.0".into(), set_identifier: "vanilla".into(), set_version: "2.0.0".into()},
//         DataSet {base: "fac".into(), base_version: "1.5.0".into(), set_identifier: "vanilla".into(), set_version: "1.5.0".into()},
//         DataSet {base: "fac".into(), base_version: "2.0.0".into(), set_identifier: "se".into(), set_version: "4.0.0".into()},
//         DataSet {base: "dsp".into(), base_version: "1.0.0".into(), set_identifier: "vanilla".into(), set_version: "1.0.0".into()},
//     )
// }

#[allow(dead_code)]
#[wasm_bindgen]
pub struct GraphConfiguration {
    // everything needed in order to make a graph, mutable so that the UI can make changes.
    // It should only allow graph generation when it has enough information to do something.
    available_data: Vec<DataSet>,
    // current_data: Option<DataSet>
}

#[wasm_bindgen]
impl GraphConfiguration {
    #[wasm_bindgen(constructor)]
    pub fn new() -> GraphConfiguration {
        GraphConfiguration {
            available_data: vec!(
                DataSet {style: DataSetStyle::Basic, base: "fac".into(), base_version: "2.0.0".into(), set_identifier: "vanilla".into(), set_version: "2.0.0".into()},
                DataSet {style: DataSetStyle::Basic, base: "fac".into(), base_version: "1.5.0".into(), set_identifier: "vanilla".into(), set_version: "1.5.0".into()},
                DataSet {style: DataSetStyle::Basic, base: "fac".into(), base_version: "2.0.0".into(), set_identifier: "se".into(), set_version: "4.0.0".into()},
                DataSet {style: DataSetStyle::Basic, base: "dsp".into(), base_version: "1.0.0".into(), set_identifier: "vanilla".into(), set_version: "1.0.0".into()},
            )
        }
    }
}

#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum DataSetStyle {
    Basic,
}

#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DataSet {
    style: DataSetStyle,
    base: String,
    base_version: String, // possible semver
    set_identifier: String, // modpack/etc
    set_version: String,
}

#[wasm_bindgen]
impl DataSet {
    pub fn id(&self) -> String {
        format!("{}-{}-{}-{}", self.base, self.base_version, self.set_identifier, self.set_version)
    }
}


// #[derive(Debug, Clone, PartialEq)]
// struct Factory {
//     id: String,
//     display: String,
//     groups: Vec<FactoryGroup>,
// }

// #[derive(Debug, Clone, PartialEq)]
// struct FactoryGroup {
//     id: String,
// }

// #[derive(Debug, Clone, PartialEq)]
// struct ProcessGroup {
//     processes: Vec<ProcessCount>,
// }

// #[derive(Debug, Clone, PartialEq)]
// struct ProcessCount {
//     process: ActiveProcess,
//     count: f64,
// }

// #[derive(Debug, Clone, PartialEq)]
// struct Process {
//     id: String,
//     display: String,
//     duration: f64,
//     group: FactoryGroup,
//     inputs: Vec<Stack>,
//     outputs: Vec<Stack>,
// }

// #[derive(Debug, Clone, PartialEq)]
// struct ActiveProcess {
//     process: Process,
//     duration: f64,
//     inputs: Vec<Stack>,
//     outputs: Vec<Stack>,
// }

// #[derive(Debug, Clone, PartialEq)]
// struct Stack {
//     item: Item,
//     quantity: f64,
// }

// impl Display for Stack {
//     fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
//         write!(f, "{} {:?}, ({})", self.item.display, self.item.classification, self.quantity)
//     }
// }

// #[derive(Debug, Clone, PartialEq, Eq)]
// struct Item {
//     id: String,
//     classification: Classification,
//     display: String,
// }

// // XXX possible to derive a Display using the enum names?
// #[derive(Debug, Clone, PartialEq, Eq)]
// enum Classification {
//     Energy,
//     Gas,
//     Liquid,
//     Solid,
// }
