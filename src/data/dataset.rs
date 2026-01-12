use std::collections::BTreeMap;

use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::wasm_bindgen;

use crate::data::{
    basic_data_parse::DataParserBasic,
    graph_configuration::FetchDataSet,
    hydration::Dehydrate,
    model::{Data, DataParser},
    rl_data_parse::DataParserRecipeLister,
    fl_data_parse::DataParserFLab,
};


/// Known list of data set configurations
#[wasm_bindgen]
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub enum DataSet {
    Starbirds012,
    Factorio2066Sa2066,
    Foundry200,
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
            DataSet::Foundry200 => DataSetConf::new(DataSetStyle::FLab, "foundry".into(), "2.0.0".into()),
        }
    }

    pub fn all() -> Vec<DataSetConf> {
        vec!(
            DataSet::params(DataSet::Starbirds012),
            DataSet::params(DataSet::Factorio2066Sa2066),
            DataSet::params(DataSet::Foundry200),
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

impl DataSetConf {
    // XXX moce to DataSetConf
    pub async fn into_data<F>(&self, fetcher: F) -> Result<Data, String>
        where F: FetchDataSet
    {
        let parser = self.style.parser();
        let files = parser.files_to_fetch_list(self);
        let mut jsons = BTreeMap::new();
        for (key, path) in files {
            jsons.insert(key, fetcher.fetch(&path).await.unwrap());
        }
        parser.parse(&mut jsons)
    }
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
pub struct DehydratedDataSetConf {
    pub id: String,
}
impl Dehydrate<DehydratedDataSetConf> for DataSetConf {
    fn dehydrate(&self) -> DehydratedDataSetConf {
        DehydratedDataSetConf { id: self.id() }
    }
}

#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum DataSetStyle {
    Basic,
    RecipeLister,
    FLab,
}
impl DataSetStyle {
    pub fn parser(&self) -> Box<dyn DataParser> {
        match self {
            Self::Basic => Box::new(DataParserBasic{}),
            Self::RecipeLister => Box::new(DataParserRecipeLister{}),
            Self::FLab => Box::new(DataParserFLab{}),
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
