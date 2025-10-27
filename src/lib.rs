use std::{rc::Rc};


use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen::{prelude::JsValue, JsCast};

use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

use serde_wasm_bindgen;

pub mod data;
use data::model::{Item, Process};
use data::graph_configuration::{FetchDataSet, GraphConfiguration as GraphConfigurationLib};

use crate::data::dataset::{DataSet, DataSetConf};

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// "hello world" function to assert that we have bi-directional function calling
#[wasm_bindgen]
pub fn stuff(input: String) -> Result<JsValue, JsValue> {
    log(format!("received {} from JS", input).as_str());
    Ok(serde_wasm_bindgen::to_value(&input)?)
}

#[wasm_bindgen]
pub fn dataset_all() -> Vec<DataSetConf> {
    DataSet::all()
}

#[wasm_bindgen]
pub struct GraphConfiguration {
    wrapped: GraphConfigurationLib,
}

struct RequestFetcher {}
impl FetchDataSet for RequestFetcher {
    async fn fetch(&self, dataset_id: &str) -> Result<String, String> {
        let opts = RequestInit::new();
        opts.set_method("GET");
        opts.set_mode(RequestMode::Cors);
        let url = format!("data/{}.json", dataset_id);

        let request = Request::new_with_str_and_init(&url, &opts).map_err(|e| e.as_string().unwrap())?;

        let window = web_sys::window().unwrap();
        let resp_value = JsFuture::from(window.fetch_with_request(&request)).await.map_err(|e| e.as_string().unwrap())?;

        let resp: Response = resp_value.dyn_into().unwrap();
        // log(format!("resp: {:?}, {:?}", resp, resp.status()).as_str());
        Ok(JsFuture::from(resp.text().unwrap()).await.unwrap().as_string().unwrap())
    }
}

#[wasm_bindgen]
impl GraphConfiguration {
    #[wasm_bindgen(constructor)]
    pub fn new() -> GraphConfiguration {
        GraphConfiguration {
            wrapped: GraphConfigurationLib::new(),
        }
    }

    pub fn can_render(&self) -> Result<JsValue, JsValue> {
        Ok(JsValue::from_bool(self.wrapped.can_render()))
    }

    pub fn add_requirement(&mut self, id: String, quantity: f64) -> Result<JsValue, JsValue> {
        self.wrapped.add_requirement(&id, quantity);
        Ok(JsValue::null())
    }

    pub fn update_requirement(&mut self, id: String, quantity: f64) -> Result<JsValue, JsValue> {
        self.wrapped.remove_requirement(&id);
        self.wrapped.add_requirement(&id, quantity);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn remove_requirement(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.wrapped.remove_requirement(&id);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn get_requirements(&self) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value(self.wrapped.get_requirements())?)
    }

    pub fn add_import_export(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.wrapped.add_import_export(&id);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn remove_import_export(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.wrapped.remove_import_export(&id);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn get_imports_exports(&self) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value(self.wrapped.get_imports_exports())?)
    }

    pub fn add_process(&mut self, id: String, duration_multiplier: f64, inputs_multiplier: f64, outputs_multiplier: f64) -> Result<JsValue, JsValue> {
        self.wrapped.add_process(&id, duration_multiplier, inputs_multiplier, outputs_multiplier);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn remove_process(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.wrapped.remove_process(&id);
        Ok(JsValue::null()) // XXX err result required.
    }

    pub fn get_processes(&self) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value(&self.wrapped.get_processes())?)
    }

    pub fn get_defaulted_items(&self) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value(&self.wrapped.get_defaulted_items())?)
    }

    pub async fn update_data_set(&mut self, id: String) -> Result<JsValue, JsValue> {
        self.wrapped.update_data_set(&id, RequestFetcher{}).await.map_err(|e| JsValue::from_str(&e))?;
        Ok(JsValue::null())
    }

    pub fn search_items(&self, search: String) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value::<Vec<Rc<Item>>>(
            &self.wrapped.search_items(&search).map_err(|e| JsValue::from_str(&e))?
        )?)
    }

    pub fn search_processes(&self, search: String) -> Result<JsValue, JsValue> {
        Ok(serde_wasm_bindgen::to_value::<Vec<Rc<Process>>>(
            &self.wrapped.search_processes(&search).map_err(|e| JsValue::from_str(&e))?
        )?)
    }
}
