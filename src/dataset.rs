use wasm_bindgen::prelude::wasm_bindgen;

use crate::data::{basic_data_parse::DataParserBasic, model::DataParser};


#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub enum DataSet {
    Fac200,
    Fac150,
    Fac200Se200,
    Dsp100,
}

#[wasm_bindgen]
impl DataSet {
    fn params(self) -> DataSetConf {
        match self {
            DataSet::Fac200 => DataSetConf::new(DataSetStyle::Basic, "fac".into(), "2.0.0".into()),
            DataSet::Fac150 => DataSetConf::new(DataSetStyle::Basic, "fac".into(), "1.5.0".into()),
            DataSet::Fac200Se200 => DataSetConf::modded(DataSetStyle::Basic, Versioned::new("fac".into(), "2.0.0".into()), Versioned::new("se".into(), "4.0.0".into())),
            DataSet::Dsp100 => DataSetConf::new(DataSetStyle::Basic, "dsp".into(), "1.0.0".into()),
        }
    }

    pub fn all() -> Vec<DataSetConf> {
        vec!(
            DataSet::params(DataSet::Fac200),
            DataSet::params(DataSet::Fac150),
            DataSet::params(DataSet::Fac200Se200),
            DataSet::params(DataSet::Dsp100),
        )
    }
}

#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DataSetConf {
    style: DataSetStyle,
    base: Versioned,
    mods: Option<Versioned>,
}

#[wasm_bindgen]
impl DataSetConf {
    fn new(style: DataSetStyle, id: String, version: String) -> Self {
        DataSetConf { style, base: Versioned::new(id, version), mods: None }
    }
    fn modded(style: DataSetStyle, base: Versioned, mods: Versioned ) -> Self {
        DataSetConf { style, base, mods: Some(mods) }
    }
    // pub fn id(&self) -> String {
    pub fn id(&self) -> String {
        match &self.mods {
            Some(m) => format!("{}-{}-{}-{}", self.base.id, self.base.version, m.id, m.version),
            None => format!("{}-{}", self.base.id, self.base.version),
        }
    }
    pub fn description(&self) -> String {
        match &self.mods {
            Some(m) => format!("{} ({}) [{} ({})]", self.base.id, self.base.version, m.id, m.version),
            None => format!("{} ({})", self.base.id, self.base.version),
        }
    }
}

#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum DataSetStyle {
    Basic,
}
impl DataSetStyle {
    pub fn parser(&self) -> Box<impl DataParser> {
        match self {
            Self::Basic => Box::new(DataParserBasic{})
        }
    }
}

#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Versioned {
    id: String,
    version: String,
}
impl Versioned {
    fn new(id: String, version: String) -> Self {
        Versioned{id, version}
    }
}
