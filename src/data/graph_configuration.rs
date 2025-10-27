use std::{collections::HashSet, rc::Rc};

use regex::Regex;

use super::{dataset::{DataSet, DataSetConf}, model::{ActiveProcess, Data, DataParser, Item, Process, Stack}};

///
/// Provide a way to fetch the blob of json that represents the data contents
pub trait FetchDataSet {
    #[allow(async_fn_in_trait)]
    async fn fetch(&self, dataset_id: &str) ->  Result<String, String>;
    // fn fetch(&self, dataset_id: &String) -> impl Future<Output = Result<String, String>> + Send;
}


#[derive(Debug, Clone, PartialEq, Default)]
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

    pub fn item(&self, id: &str) -> Rc<Item> {
        self.current_data.as_ref().unwrap().item(id).unwrap()
    }

    pub fn can_render(&self) -> bool {
        !self.processes.is_empty()
    }

    pub fn add_requirement(&mut self, id: &str, quantity: f64) {
        self.requirements.push(
            Stack {
                item: self.current_data.as_ref().unwrap().items.get(id).unwrap().clone(),
                quantity
        });
    }

    pub fn remove_requirement(&mut self, id: &str) {
        self.requirements.retain(|s| s.item.id != *id);
    }

    pub fn get_requirements(&self) -> &Vec<Stack> {
        &self.requirements
    }

    pub fn add_import_export(&mut self, id: &str) {
        self.import_export.push(self.current_data.as_ref().unwrap().items.get(id).unwrap().clone());
    }

    pub fn remove_import_export(&mut self, id: &str) {
        self.import_export.retain(|io| io.id != *id);
    }

    pub fn get_imports_exports(&self) -> &Vec<Rc<Item>> {
        &self.import_export
    }

    pub fn add_process(&mut self, id: &str, duration_multiplier: f64, inputs_multiplier: f64, outputs_multiplier: f64) {
        self.processes.push(
            ActiveProcess::new(
                self.current_data.as_ref().unwrap().processes.get(id).unwrap().clone(),
                duration_multiplier,
                inputs_multiplier,
                outputs_multiplier,
            )
        );
    }

    pub fn remove_process(&mut self, id: &str) {
        self.processes.retain(|p| *p.id() != *id);
    }

    pub fn get_processes(&self) -> &Vec<ActiveProcess> {
        &self.processes
    }

    pub async fn update_data_set(&mut self, id: &str, fetcher: impl FetchDataSet) -> Result<(), String> {
        self.current_data_set = DataSet::find(id);

        let bdy = fetcher.fetch(id).await.unwrap();

        self.current_data = Some(self.current_data_set.as_ref().unwrap().style.parser().parse(&bdy)?);
        Ok(())
    }

    pub fn set_data(&mut self, data: Data, data_conf: DataSetConf) {
        self.current_data_set = Some(data_conf);
        self.current_data = Some(data);
    }

    pub fn search_items(&self, search: &str) -> Result<Vec<Rc<Item>>, String> {
        match &self.current_data {
            Some(d) => {
                let matcher = Regex::new(search)
                    .map_err(|e| format!("{e:?}").clone())?;
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

    pub fn search_processes(&self, search: &str) -> Result<Vec<Rc<Process>>, String> {
        match &self.current_data {
            Some(d) => {
                let matcher = Regex::new(search)
                    .map_err(|e| format!("{e:?}").clone())?;
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

    pub fn search_processes_by_output(&self, search: &str) -> Result<Vec<Rc<Process>>, String> {
        match &self.current_data {
            Some(d) => {
                let matcher = Regex::new(search)
                    .map_err(|e| format!("{e:?}").clone())?;
                let mut v = d.processes.iter()
                    .filter(|(_id, proc)| {
                        proc.outputs.iter().any(|output| {
                            matcher.is_match(&output.item.id) || matcher.is_match(&output.item.display)
                        })
                    })
                    .map(|(_id, i)| i.clone())
                    .collect::<Vec<Rc<Process>>>();
                v.sort_by(|a,b| a.display.to_ascii_lowercase().cmp(&b.display.to_ascii_lowercase()) );
                Ok(v)
            },
            None => Ok(vec![]),
        }
    }

    pub fn search_processes_by_input(&self, search: &str) -> Result<Vec<Rc<Process>>, String> {
        match &self.current_data {
            Some(d) => {
                let matcher = Regex::new(search)
                    .map_err(|e| format!("{e:?}").clone())?;
                let mut v = d.processes.iter()
                    .filter(|(_id, proc)| {
                        proc.inputs.iter().any(|input| {
                            matcher.is_match(&input.item.id) || matcher.is_match(&input.item.display)
                        })
                    })
                    .map(|(_id, i)| i.clone())
                    .collect::<Vec<Rc<Process>>>();
                v.sort_by(|a,b| a.display.to_ascii_lowercase().cmp(&b.display.to_ascii_lowercase()) );
                Ok(v)
            },
            None => Ok(vec![]),
        }
    }

    pub fn get_defaulted_items(&self) -> Vec<Rc<Item>> {
        // set of all process input items (I)
        // set of all process output items (O)
        // disjoint of I and O (symmetric_difference)
        // remove anything that is in io or req.
        let inputs: HashSet<Rc<Item>> = self.processes.iter().flat_map(|proc| {
            proc.inputs().iter().map(|s| s.item.clone()).collect::<Vec<Rc<Item>>>()
        }).collect();
        let outputs: HashSet<Rc<Item>> = self.processes.iter().flat_map(|proc| {
            proc.outputs().iter().map(|s| s.item.clone()).collect::<Vec<Rc<Item>>>()
        }).collect();
        let mut diff: HashSet<Rc<Item>> = inputs.symmetric_difference(&outputs).cloned().collect();
        for io in &self.import_export {
            diff.remove(io);
        }
        for req in &self.requirements {
            diff.remove(&req.item);
        }
        diff.iter().cloned().collect()
    }
    pub fn get_intermediate_items(&self) -> Vec<Rc<Item>> {
        // set of all process input items (I)
        // set of all process output items (O)
        // intersection of I and O (symmetric_difference)
        // remove anything that is in io or req.
        let inputs: HashSet<Rc<Item>> = self.processes.iter().flat_map(|proc| {
            proc.inputs().iter().map(|s| s.item.clone()).collect::<Vec<Rc<Item>>>()
        }).collect();
        let outputs: HashSet<Rc<Item>> = self.processes.iter().flat_map(|proc| {
            proc.outputs().iter().map(|s| s.item.clone()).collect::<Vec<Rc<Item>>>()
        }).collect();
        let mut diff: HashSet<Rc<Item>> = inputs.intersection(&outputs).cloned().collect();
        for io in &self.import_export {
            diff.remove(io);
        }
        for req in &self.requirements {
            diff.remove(&req.item);
        }
        diff.iter().cloned().collect()
    }
}

#[cfg(test)]
mod test {

    use crate::data::fixtures;
    use super::*;

    #[test]
    fn it_searches_items_with_no_data() {
        let gc = GraphConfiguration::new();
        let result = gc.search_items("part_1");
        assert_eq!(result.unwrap().len(), 0);
    }

    #[test]
    fn it_searches_items_with_full() {
        let gc = fixtures::create_config();
        let result = gc.search_items("part_1").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "part_1");
    }

    #[test]
    fn it_searches_items_with_partial_input() {
        let gc = fixtures::create_config();
        let result = gc.search_items("t_1").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "part_1");
    }

    #[test]
    fn it_searches_items_display_names() {
        let gc = fixtures::create_config();
        let result = gc.search_items("t 1").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "part_1");
    }

    #[test]
    fn it_searches_items_with_many_results() {
        let gc = fixtures::create_config();
        let result = gc.search_items("par").unwrap();
        assert_eq!(result.len(), 4);
    }

    #[test]
    fn it_searches_processes_with_no_data() {
        let gc = GraphConfiguration::new();
        let result = gc.search_items("make_a");
        assert_eq!(result.unwrap().len(), 0);
    }

    #[test]
    fn it_searches_processes_with_full() {
        let gc = fixtures::create_config();
        let result = gc.search_processes("make_a").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_a");
    }

    #[test]
    fn it_searches_processes_with_partial_input() {
        let gc = fixtures::create_config();
        let result = gc.search_processes("e_a").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_a");
    }

    #[test]
    fn it_searches_processes_display_names() {
        let gc = fixtures::create_config();
        let result = gc.search_processes("e A").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_a");
    }

    #[test]
    fn it_searches_processes_by_input_id() {
        let gc = fixtures::create_config();
        let result = gc.search_processes_by_input("part_3").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_b");
    }

    #[test]
    fn it_searches_processes_by_input_display() {
        let gc = fixtures::create_config();
        let result = gc.search_processes_by_input("Part 3").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_b");
    }

    #[test]
    fn it_searches_processes_by_output_id() {
        let gc = fixtures::create_config();
        let result = gc.search_processes_by_output("part_4").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_b");
    }

    #[test]
    fn it_searches_processes_by_output_display() {
        let gc = fixtures::create_config();
        let result = gc.search_processes_by_output("Part 4").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_b");
    }

    #[test]
    fn it_searches_processes_with_many_results() {
        let gc = fixtures::create_config();
        let result = gc.search_processes("mak").unwrap();
        assert_eq!(result.len(), 3);
    }

    #[test]
    fn it_discovers_unknown_io() {
        let mut gc = fixtures::create_config();
        gc.add_process("make_a", 1.0, 1.0, 1.0);
        let mut result = gc.get_defaulted_items();
        result.sort_by(|a, b| a.id.cmp(&b.id));
        let ids: Vec<String> = result.iter().map(|i| i.id.clone()).collect();
        assert_eq!(ids, vec!["part_1", "part_2", "part_3"]);
    }

    #[test]
    fn it_discovers_unknown_intermediates() {
        let mut gc = fixtures::create_config();
        gc.add_process("make_a", 1.0, 1.0, 1.0);
        gc.add_process("make_b", 1.0, 1.0, 1.0);
        let mut result = gc.get_intermediate_items();
        result.sort_by(|a, b| a.id.cmp(&b.id));
        let ids: Vec<String> = result.iter().map(|i| i.id.clone()).collect();
        assert_eq!(ids, vec!["part_2", "part_3"]);
    }
}
