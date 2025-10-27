use std::rc::Rc;

use regex::Regex;

use super::{dataset::{DataSet, DataSetConf}, model::{ActiveProcess, Data, DataParser, Item, Process, Stack}};

///
/// Provide a way to fetch the blob of
pub trait FetchDataSet {
    async fn fetch(&self, dataset_id: &String) -> Result<String, String>;
}


pub struct GraphConfiguration {
    // everything needed in order to make a graph, mutable so that the UI can make changes.
    // It should only allow graph generation when it has enough information to do something.
    current_data_set: Option<DataSetConf>,
    current_data: Option<Data>,

    requirements: Vec<Stack>,
    import_export: Vec<Rc<Item>>,
    processes: Vec<ActiveProcess>,
}

impl GraphConfiguration {
    pub fn new() -> GraphConfiguration {
        GraphConfiguration {
            current_data_set: None,
            current_data: None,
            requirements: vec![],
            import_export: vec![],
            processes: vec![],
        }
    }

    pub fn can_render(&self) -> bool {
        self.processes.len() > 0
    }

    pub fn add_requirement(&mut self, id: &String, quantity: f64) {
        self.requirements.push(
            Stack {
                item: self.current_data.as_ref().unwrap().items.get(id).unwrap().clone(),
                quantity
        });
    }

    pub fn remove_requirement(&mut self, id: &String) {
        self.requirements.retain(|s| s.item.id != *id);
    }

    pub fn get_requirements(&self) -> &Vec<Stack> {
        &self.requirements
    }

    pub fn add_import_export(&mut self, id: &String) {
        self.import_export.push(self.current_data.as_ref().unwrap().items.get(id).unwrap().clone());
    }

    pub fn remove_import_export(&mut self, id: &String) {
        self.import_export.retain(|io| io.id != *id);
    }

    pub fn get_imports_exports(&self) -> &Vec<Rc<Item>> {
        &self.import_export
    }

    pub fn add_process(&mut self, id: &String, duration_multiplier: f64, inputs_multiplier: f64, outputs_multiplier: f64) {
        self.processes.push(
            ActiveProcess {
                process: self.current_data.as_ref().unwrap().processes.get(id).unwrap().clone(),
                duration_multiplier,
                inputs_multiplier,
                outputs_multiplier,
            }
        );
    }

    pub fn remove_process(&mut self, id: &String) {
        self.processes.retain(|p| p.process.id != *id);
    }

    pub fn get_processes(&self) -> &Vec<ActiveProcess> {
        &self.processes
    }

    pub async fn update_data_set(&mut self, id: String, fetcher: impl FetchDataSet) -> Result<(), String> {
        self.current_data_set = DataSet::all().iter().find(|d| d.id() == id).map(|d| d.clone());

        let bdy = fetcher.fetch(&id).await.unwrap();

        self.current_data = Some(self.current_data_set.as_ref().unwrap().style.parser().from_str(&bdy)?);
        Ok(())
    }

    pub fn search_items(&self, search: String) -> Result<Vec<Rc<Item>>, String> {
        match &self.current_data {
            Some(d) => {
                let matcher = Regex::new(&search)
                    .map_err(|e| format!("{:?}", e).clone())?;
                let mut v = d.items.iter()
                    .filter(|(_id, item)| matcher.is_match(&item.id) || matcher.is_match(&item.display))
                    .map(|(_id, i)| i.clone())
                    .collect::<Vec<Rc<Item>>>();
                v.sort_by(|a,b| a.display.to_ascii_lowercase().cmp(&b.display.to_ascii_lowercase()) );
                Ok(v)
            },
            None => Ok(vec![]),
        }
    }

    pub fn search_processes(&self, search: String) -> Result<Vec<Rc<Process>>, String> {
        match &self.current_data {
            Some(d) => {
                let matcher = Regex::new(&search)
                    .map_err(|e| format!("{:?}", e).clone())?;
                let mut v = d.processes.iter()
                    .filter(|(_id, proc)| matcher.is_match(&proc.id) || matcher.is_match(&proc.display))
                    .map(|(_id, i)| i.clone())
                    .collect::<Vec<Rc<Process>>>();
                v.sort_by(|a,b| a.display.to_ascii_lowercase().cmp(&b.display.to_ascii_lowercase()) );
                Ok(v)
            },
            None => Ok(vec![]),
        }
    }

}
