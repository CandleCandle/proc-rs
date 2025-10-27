use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::wasm_bindgen;

use crate::data::{
    basic_data_parse::DataParserBasic,
    model::DataParser,
    rl_data_parse::DataParserRecipeLister,
};


/// Known list of data set configurations
#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub enum DataSet {
    Starbirds012,
    Factorio2066Sa2066,
}

pub enum ModifierStyle {
    Multiplier, // same: 1; faster: 0.3; slower: 1.4; more output: 1.5, less output: 0.4
    PercentAddition, // same: 0; faster: 20%; slower: -30%; more output: 10%, less output: -5%
    Percent, // same: 100%; faster: 110%; slower: 90%; more output: 150%, less output: 80%
}

impl DataSet {
    pub fn params(self) -> DataSetConf {
        match self {
            DataSet::Starbirds012 => DataSetConf::new(DataSetStyle::Basic, "starbirds".into(), "0.1.2".into()),
            DataSet::Factorio2066Sa2066 => DataSetConf::modded(DataSetStyle::RecipeLister, Versioned::new("factorio".into(), "2.0.66".into()), Versioned::new("sa".into(), "2.0.66".into())),
        }
    }

    pub fn all() -> Vec<DataSetConf> {
        vec!(
            DataSet::params(DataSet::Starbirds012),
            DataSet::params(DataSet::Factorio2066Sa2066),
        )
    }

    pub fn find(id: &str) -> Option<DataSetConf> {
        DataSet::all().iter().find(|d| d.id() == id).cloned()
    }
}

#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DataSetConf {
    pub style: DataSetStyle,
    base: Versioned,
    mods: Option<Versioned>,
    // modifier_style
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
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum DataSetStyle {
    Basic,
    RecipeLister,
}
impl DataSetStyle {
    pub fn parser(&self) -> Box<dyn DataParser> {
        match self {
            Self::Basic => Box::new(DataParserBasic{}),
            Self::RecipeLister => Box::new(DataParserRecipeLister{}),
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



#[cfg(test)]
mod test {

    use super::*;

    #[test]
    fn it_finds_no_data_set_conf() {
        let result = DataSet::find("nothing matches");
        assert_eq!(result, Option::None);
    }

    #[test]
    fn it_finds_data_set_conf_by_id() {
        let result = DataSet::find("starbirds-0.1.2");
        assert_eq!(result, Some(DataSet::Starbirds012.params()));
    }
}
