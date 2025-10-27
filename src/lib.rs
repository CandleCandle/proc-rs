use std::collections::HashMap;

#[allow(dead_code)]


// use std::collections::HashMap;
// use std::fmt::{Display, Write};

use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen::prelude::JsValue;
use serde_wasm_bindgen;

mod dataset;
use dataset::{DataSet, DataSetConf};
mod data;
use data::Data;

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


#[allow(dead_code)]
#[wasm_bindgen]
pub struct GraphConfiguration {
    // everything needed in order to make a graph, mutable so that the UI can make changes.
    // It should only allow graph generation when it has enough information to do something.
    current_data_set: Option<DataSetConf>,
    current_data: Option<Data>,
}

#[wasm_bindgen]
impl GraphConfiguration {
    #[wasm_bindgen(constructor)]
    pub fn new() -> GraphConfiguration {
        GraphConfiguration {
            current_data_set: None,
            current_data: None,
        }
    }

    pub fn update_data_set(&mut self, id: String) {
        self.current_data_set = DataSet::all().iter().find(|d| d.id() == id).map(|d| d.clone());
        // XXX fetch and parse data.
    }
}
