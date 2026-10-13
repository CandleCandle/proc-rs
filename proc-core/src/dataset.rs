use std::collections::BTreeMap;

use enum_id::EnumId;
use enum_id_derive::EnumId;
use serde::{Deserialize, Serialize};
use serde_with::{serde_as, KeyValueMap};

use crate::{
    basic_data_parse::DataParserBasic, fl_data_parse::DataParserFLab, frd_data_parse::DataParserFrd, graph_configuration::{FetchDataSet, Units}, hydration::{Dehydrate, Rehydrate}, model::{Data, DataParser}, rl_data_parse::DataParserRecipeLister,
};

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, EnumId)]
pub enum ModifierStyle {
    Multiplier,      // same: 1; faster: 0.3; slower: 1.4; more output: 1.5, less output: 0.4
    PercentAddition, // same: 0; faster: 20%; slower: -30%; more output: 10%, less output: -5%
    Percent,         // same: 100%; faster: 110%; slower: 90%; more output: 150%, less output: 80%
}
impl ModifierStyle {
    pub fn to_multiplier(&self, val: f64) -> f64 {
        match self {
            Self::Multiplier => val,
            Self::Percent => val / 100.0,
            Self::PercentAddition => (val / 100.0) + 1.0,
        }
    }
    pub fn from_multiplier(&self, val: f64) -> f64 {
        match self {
            Self::Multiplier => val,
            Self::Percent => val * 100.0,
            Self::PercentAddition => (val - 1.0) * 100.0,
        }
    }
}
impl TryFrom<String> for ModifierStyle {
    // derive this
    type Error = String;
    fn try_from(value: String) -> Result<Self, Self::Error> {
        for v in [
            ModifierStyle::Multiplier,
            ModifierStyle::Percent,
            ModifierStyle::PercentAddition,
        ] {
            if v.name().to_lowercase() == value.to_lowercase() {
                return Ok(v);
            }
        }
        Err(format!("failed to find modifier style {value}, expecting one of {:?}", ModifierStyle::values()))
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DataSetConf {
    pub main: NameVer,
    #[serde(rename="mod")]
    pub modifications: Option<Vec<NameVer>>,
    pub style: DataSetStyle,
    #[serde(rename = "$key$")]
    pub id: String,
    pub units: Units,
    pub modifier_style: ModifierStyle
}

#[serde_as]
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DataSetConfs {
    #[serde_as(as = "KeyValueMap<_>")]
    pub datasets: Vec<DataSetConf>
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct NameVer {
    pub name: String,
    pub version: String,
}

impl DataSetConf {
    pub async fn into_data<F>(&self, fetcher: F) -> Result<Data, String>
    where
        F: FetchDataSet,
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
        DehydratedDataSetConf {
            id: self.id.clone(),
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize, EnumId)]
pub enum DataSetStyle {
    Basic,
    RecipeLister,
    FLab,
    Frd,
}
impl DataSetStyle {
    pub fn parser(&self) -> Box<dyn DataParser> {
        match self {
            Self::Basic => Box::new(DataParserBasic {}),
            Self::RecipeLister => Box::new(DataParserRecipeLister {}),
            Self::FLab => Box::new(DataParserFLab {}),
            Self::Frd => Box::new(DataParserFrd {}),
        }
    }
    pub fn id(&self) -> String {
        self.name().to_lowercase()
    }
}
impl TryFrom<String> for DataSetStyle {
    // derive this
    type Error = String;
    fn try_from(value: String) -> Result<Self, Self::Error> {
        for v in [
            DataSetStyle::Basic,
            DataSetStyle::FLab,
            DataSetStyle::RecipeLister,
            DataSetStyle::Frd,
        ] {
            if v.id() == value {
                return Ok(v);
            }
        }
        Err(format!("failed to find data set style {value}"))
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn it_deserialises_datasetconf() {
        let sample = r#"{
            "datasets": {
                "namey-1234": {
                    "main": { "name": "namey", "version": "0.1.2" },
                    "mod": [{ "name": "namey2", "version": "1.2.3" }],
                    "style": "Basic",
                    "units": "Minute",
                    "modifier_style": "PercentAddition"
                }
            }
        }"#;
        let result: DataSetConfs = serde_json::from_str(&sample).unwrap();
        assert_eq!(result.datasets.get(0).unwrap().id, "namey-1234");
        assert_eq!(result.datasets.get(0).unwrap().style, DataSetStyle::Basic);
        assert_eq!(result.datasets.get(0).unwrap().units, Units::Minute);
        assert_eq!(result.datasets.get(0).unwrap().main.name, "namey");
        assert_eq!(result.datasets.get(0).unwrap().main.version, "0.1.2");
        assert_eq!(result.datasets.get(0).unwrap().modifications.as_ref().unwrap().get(0).unwrap().name, "namey2");
        assert_eq!(result.datasets.get(0).unwrap().modifications.as_ref().unwrap().get(0).unwrap().version, "1.2.3");
    }

    #[test]
    fn it_deserialises_datasetconf_with_all_varients() {
        let styles = vec!["Basic", "RecipeLister", "FLab", "Frd"];
        let modifier_styles = vec!["Multiplier", "PercentAddition", "Percent"];
        let units = vec!["Second", "Minute"];
        for s in styles {
            for m in &modifier_styles {
                for u in &units {
                    let _ds: DataSetConfs = serde_json::from_str(&format!(
                        r#"{{
                            "datasets": {{
                                "{}-{}-{}": {{
                                    "main": {{ "name": "n", "version": "0" }},
                                    "style": "{}", "units": "{}", "modifier_style": "{}"
                                }}
                            }}
                        }}"#,
                        s, u, m, s, u, m).to_string()).unwrap();
                }
            }
        }
    }

    #[test]
    fn it_serialises_datasetconf() {
        let sample = DataSetConfs{
            datasets: vec![
                DataSetConf{
                    main: NameVer { name: "namey".to_string(), version: "3.4.5".to_string() },
                    modifications: Some(vec![
                        NameVer { name: "namey2".to_string(), version: "5.6.7".to_string() }
                    ]),
                    id: "namey-1234".to_string(),
                    style: DataSetStyle::FLab,
                    units: Units::Minute,
                    modifier_style: ModifierStyle::PercentAddition
                }
            ]
        };
        let result = serde_json::to_string(&sample);
        tracing::info!("{}", result.unwrap());
    }

    #[test]
    fn it_converts_modifier_style_to_multiplier() {
        assert_eq!(ModifierStyle::Multiplier.to_multiplier(1.0), 1.0);
        assert_eq!(ModifierStyle::Percent.to_multiplier(100.0), 1.0);
        assert_eq!(ModifierStyle::PercentAddition.to_multiplier(0.0), 1.0);

        assert_eq!(ModifierStyle::Multiplier.to_multiplier(2.0), 2.0);
        assert_eq!(ModifierStyle::Percent.to_multiplier(200.0), 2.0);
        assert_eq!(ModifierStyle::PercentAddition.to_multiplier(100.0), 2.0);

        assert_eq!(ModifierStyle::Multiplier.to_multiplier(0.5), 0.5);
        assert_eq!(ModifierStyle::Percent.to_multiplier(50.0), 0.5);
        assert_eq!(ModifierStyle::PercentAddition.to_multiplier(-50.0), 0.5);
    }

    #[test]
    fn it_converts_modifier_style_from_multiplier() {
        assert_eq!(ModifierStyle::Multiplier.from_multiplier(1.0), 1.0);
        assert_eq!(ModifierStyle::Percent.from_multiplier(1.0), 100.0);
        assert_eq!(ModifierStyle::PercentAddition.from_multiplier(1.0), 0.0);

        assert_eq!(ModifierStyle::Multiplier.from_multiplier(2.0), 2.0);
        assert_eq!(ModifierStyle::Percent.from_multiplier(2.0), 200.0);
        assert_eq!(ModifierStyle::PercentAddition.from_multiplier(2.0), 100.0);

        assert_eq!(ModifierStyle::Multiplier.from_multiplier(0.5), 0.5);
        assert_eq!(ModifierStyle::Percent.from_multiplier(0.5), 50.0);
        assert_eq!(ModifierStyle::PercentAddition.from_multiplier(0.5), -50.0);
    }
}
