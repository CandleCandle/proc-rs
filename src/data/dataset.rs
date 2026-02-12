use std::collections::BTreeMap;

use serde::{Deserialize, Serialize};

use crate::data::{
    basic_data_parse::DataParserBasic,
    graph_configuration::FetchDataSet,
    hydration::Dehydrate,
    model::{Data, DataParser},
    rl_data_parse::DataParserRecipeLister,
    fl_data_parse::DataParserFLab,
};

pub enum ModifierStyle {
    Multiplier, // same: 1; faster: 0.3; slower: 1.4; more output: 1.5, less output: 0.4
    PercentAddition, // same: 0; faster: 20%; slower: -30%; more output: 10%, less output: -5%
    Percent, // same: 100%; faster: 110%; slower: 90%; more output: 150%, less output: 80%
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DataSetConf {
    pub style: DataSetStyle,
    pub id: String,
    // modifier_style
}

impl DataSetConf {
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
    pub style: String,
}
impl Dehydrate<DehydratedDataSetConf> for DataSetConf {
    fn dehydrate(&self) -> DehydratedDataSetConf {
        DehydratedDataSetConf { id: self.id.clone(), style: self.style.id() }
    }
}

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
    pub fn id(&self) -> String {
        match self {
            Self::Basic => "basic".to_string(),
            Self::FLab => "flab".to_string(),
            Self::RecipeLister => "recipelister".to_string(),
        }
    }
}
impl TryFrom<String> for DataSetStyle {
    type Error = String;
    fn try_from(value: String) -> Result<Self, Self::Error> {
        for v in [DataSetStyle::Basic, DataSetStyle::FLab, DataSetStyle::RecipeLister] {
            if v.id() == value {
                return Ok(v);
            }
        }
        Err(format!("failed to find data set style {value}"))
    }
}

#[cfg(test)]
mod test {

    // use super::*;

    // #[test]
    // fn it_finds_no_data_set_conf() {
    //     let result = DataSet::find("nothing matches");
    //     assert_eq!(result, Option::None);
    // }

    // #[test]
    // fn it_finds_data_set_conf_by_id() {
    //     let result = DataSet::find("starbirds-0.1.2");
    //     assert_eq!(result, Some(DataSet::Starbirds012.params()));
    // }
}
