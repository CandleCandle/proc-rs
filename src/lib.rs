use std::{ops::Deref, rc::Rc};

use regex::Regex;
#[allow(dead_code)]

// use std::collections::HashMap;
// use std::fmt::{Display, Write};

use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen::{prelude::JsValue, JsCast};

use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

use serde_wasm_bindgen;

mod dataset;
use dataset::{DataSet, DataSetConf};
mod data;
use data::model::{Data, DataParser, Item, Stack};

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

    requirements: Vec<Stack>,
    import_export: Vec<Rc<Item>>,
}

#[wasm_bindgen]
impl GraphConfiguration {
    #[wasm_bindgen(constructor)]
    pub fn new() -> GraphConfiguration {
        GraphConfiguration {
            current_data_set: None,
            current_data: None,
            requirements: vec![],
            import_export: vec![],
        }
    }

    pub fn add_requirement(&mut self, id: String, quantity: f64) -> Result<JsValue, JsValue> {
        self.requirements.push(
            Stack {
                item: self.current_data.as_ref().unwrap().items.get(&id).unwrap().clone(),
                quantity
        });
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn update_requirement(&mut self, id: String, quantity: f64) -> Result<JsValue, JsValue> {
        self.remove_requirement(id.clone())?;
        self.add_requirement(id, quantity)?;
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn remove_requirement(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.requirements.retain(|s| s.item.id != id);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn get_requirements(&self) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value(&self.requirements)?) // XXX err result required.
    }

    pub fn add_import_export(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.import_export.push(self.current_data.as_ref().unwrap().items.get(&id).unwrap().clone());
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn remove_import_export(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.import_export.retain(|io| io.id != id);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn get_imports_exports(&self) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value(&self.import_export)?) // XXX err result required.
    }

    pub async fn update_data_set(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.current_data_set = DataSet::all().iter().find(|d| d.id() == id).map(|d| d.clone());
        let opts = RequestInit::new();
        opts.set_method("GET");
        opts.set_mode(RequestMode::Cors);
        let url = format!("data/{}.json", self.current_data_set.as_ref().unwrap().id());

        let request = Request::new_with_str_and_init(&url, &opts)?;

        let window = web_sys::window().unwrap();
        let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;

        let resp: Response = resp_value.dyn_into().unwrap();
        // log(format!("resp: {:?}, {:?}", resp, resp.status()).as_str());
        let bdy = JsFuture::from(resp.text()?).await?.as_string().unwrap();
        // log(format!("body: {:?}", bdy).as_str());

        let rd = self.current_data_set.as_ref().unwrap().style.parser().from_str(&bdy);
        self.current_data = match rd {
            Ok(d) => Some(d),
            Err(s) => {
                log(format!("Err: {}", s).as_str());
                None
            }
        };

        log(format!("data: {:?}", self.current_data).as_str());
        Ok(JsValue::null())
    }

    pub fn search_items(&self, search: String) -> Result<JsValue, JsValue> {
        match &self.current_data {
            Some(d) => {
                let matcher = Regex::new(&search)
                    .map_err(|e| JsValue::from_str(format!("{:?}", e).as_str()))?;
                let mut v = d.items.iter()
                    .filter(|(_id, item)| matcher.is_match(&item.id) || matcher.is_match(&item.display))
                    .map(|(_id, i)| i.deref().clone())
                    .collect::<Vec<Item>>();
                v.sort_by(|a,b| a.display.to_ascii_lowercase().cmp(&b.display.to_ascii_lowercase()) );
                Ok(serde_wasm_bindgen::to_value(&v)?)
            },
            None => Ok(serde_wasm_bindgen::to_value::<Vec<Item>>(&vec![])?),
        }
    }
}
