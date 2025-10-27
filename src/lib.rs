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
use data::model::{Data, DataParser};

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
        log(format!("resp: {:?}, {:?}", resp, resp.status()).as_str());
        let bdy = JsFuture::from(resp.text()?).await?.as_string().unwrap();
        log(format!("body: {:?}", bdy).as_str());


        let rd = self.current_data_set.as_ref().unwrap().style.parser().from_str(&bdy);
        // let rd = self.current_data_set.as_ref().unwrap().style.parser().from_str("{}");
        self.current_data = match rd {
            Ok(d) => Some(d),
            Err(s) => {
                log(format!("Err: {}", s).as_str());
                None
            }
        };

        // XXX Start loading spinner? do in UI
        // XXX fetch and parse data.

        log(format!("data: {:?}", self.current_data).as_str());
        // XXX Remove loading spinner? do in UI
        Ok(JsValue::null())
    }
}
