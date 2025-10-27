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


#[derive(Debug, Clone, PartialEq)]
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
            ActiveProcess {
                process: self.current_data.as_ref().unwrap().processes.get(id).unwrap().clone(),
                duration_multiplier,
                inputs_multiplier,
                outputs_multiplier,
            }
        );
    }

    pub fn remove_process(&mut self, id: &str) {
        self.processes.retain(|p| p.process.id != *id);
    }

    pub fn get_processes(&self) -> &Vec<ActiveProcess> {
        &self.processes
    }

    pub async fn update_data_set(&mut self, id: &str, fetcher: impl FetchDataSet) -> Result<(), String> {
        self.current_data_set = DataSet::find(&id);

        let bdy = fetcher.fetch(&id).await.unwrap();

        self.current_data = Some(self.current_data_set.as_ref().unwrap().style.parser().from_str(&bdy)?);
        Ok(())
    }

    pub fn set_data(&mut self, data: Data, data_conf: DataSetConf) {
        self.current_data_set = Some(data_conf);
        self.current_data = Some(data);
    }

    pub fn search_items(&self, search: &str) -> Result<Vec<Rc<Item>>, String> {
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

    pub fn search_processes(&self, search: &str) -> Result<Vec<Rc<Process>>, String> {
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

    pub fn get_defaulted_items(&self) -> Vec<Rc<Item>> {
        // set of all process input items (I)
        // set of all process output items (O)
        // disjoint of I and O (symmetric_difference)
        // remove anything that is in io or req.
        let inputs: HashSet<Rc<Item>> = self.processes.iter().flat_map(|proc| {
            proc.process.inputs.iter().map(|s| s.item.clone())
        }).collect();
        let outputs: HashSet<Rc<Item>> = self.processes.iter().flat_map(|proc| {
            proc.process.outputs.iter().map(|s| s.item.clone())
        }).collect();
        let mut diff: HashSet<Rc<Item>> = inputs.symmetric_difference(&outputs).map(|i| i.clone()).collect();
        for io in &self.import_export {
            diff.remove(io);
        }
        for req in &self.requirements {
            diff.remove(&req.item);
        }
        diff.iter().map(|i| i.clone()).collect()
    }
}

#[cfg(test)]
mod test {

    use std::collections::HashMap;

    use crate::data::model::{Classification, Factory, FactoryGroup};

    use super::*;

    fn simple_data_fixture() -> Data {
        let items: HashMap<String, Rc<Item>> = vec![
            Rc::new(Item::named("part_1".into(), Classification::Solid, "Part 1".into())),
            Rc::new(Item::named("part_2".into(), Classification::Solid, "Part 2".into())),
            Rc::new(Item::named("part_3".into(), Classification::Solid, "Part 3".into())),
            Rc::new(Item::named("part_4".into(), Classification::Solid, "Part 4".into())),
        ].iter()
        .map(|i| (i.id.clone(), i.to_owned()))
        .collect();

        let mut factory_groups: HashMap<String, Rc<FactoryGroup>> = HashMap::new();
        let mut factories: HashMap<String, Rc<Factory>> = HashMap::new();

        factory_groups.insert("basic".to_string(), Rc::new(FactoryGroup { id: "basic".to_string() }));
        factories.insert("basic".to_string(), Rc::new(Factory {
            id: "basic".to_string(),
            display: "basic".to_string(),
            groups: vec![factory_groups.get(&"basic".to_string()).unwrap().clone()],
        }));
        let p1 = Process {
            id: "make_a".to_string(),
            display: "Make A".to_string(),
            duration: 5.0,
            group: factory_groups.get(&"basic".to_string()).unwrap().clone(),
            inputs: vec![
                Stack::new(items.get("part_1").unwrap().clone(), 5.0),
                Stack::new(items.get("part_2").unwrap().clone(), 2.0),
                ],
            outputs: vec![
                Stack::new(items.get("part_3").unwrap().clone(), 5.0),
                ],
            };
        let p2 = Process {
            id: "make_b".to_string(),
            display: "Make B".to_string(),
            duration: 5.0,
            group: factory_groups.get(&"basic".to_string()).unwrap().clone(),
            inputs: vec![
                Stack::new(items.get("part_2").unwrap().clone(), 3.0),
                ],
            outputs: vec![
                Stack::new(items.get("part_2").unwrap().clone(), 1.0),
                Stack::new(items.get("part_4").unwrap().clone(), 1.0),
                ],
            };
        let processes = vec![p1, p2].iter()
            .map(|p| (p.id.clone(), Rc::new(p.to_owned())))
            .collect()
            ;
        Data {
            items,
            factory_groups,
            factories,
            processes,
        }
    }

    fn create_config() -> GraphConfiguration {
        let mut gc = GraphConfiguration::new();
        gc.set_data(simple_data_fixture(), DataSet::Fac200.params());
        gc
    }

    #[test]
    fn it_searches_items_with_no_data() {
        let gc = GraphConfiguration::new();
        let result = gc.search_items("part_1");
        assert_eq!(result.unwrap().len(), 0);
    }

    #[test]
    fn it_searches_items_with_full() {
        let gc = create_config();
        let result = gc.search_items("part_1").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "part_1");
    }

    #[test]
    fn it_searches_items_with_partial_input() {
        let gc = create_config();
        let result = gc.search_items("t_1").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "part_1");
    }

    #[test]
    fn it_searches_items_display_names() {
        let gc = create_config();
        let result = gc.search_items("t 1").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "part_1");
    }

    #[test]
    fn it_searches_items_with_many_results() {
        let gc = create_config();
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
        let gc = create_config();
        let result = gc.search_processes("make_a").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_a");
    }

    #[test]
    fn it_searches_processes_with_partial_input() {
        let gc = create_config();
        let result = gc.search_processes("e_a").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_a");
    }

    #[test]
    fn it_searches_processes_display_names() {
        let gc = create_config();
        let result = gc.search_processes("e A").unwrap();
        assert_eq!(result.len(), 1);
        assert_eq!(result.get(0).unwrap().id, "make_a");
    }

    #[test]
    fn it_searches_processes_with_many_results() {
        let gc = create_config();
        let result = gc.search_processes("mak").unwrap();
        assert_eq!(result.len(), 2);
    }

    #[test]
    fn it_discovers_unknown_io() {
        let mut gc = create_config();
        gc.add_process("make_a", 1.0, 1.0, 1.0);
        let mut result = gc.get_defaulted_items();
        result.sort_by(|a, b| a.id.cmp(&b.id));
        let ids: Vec<String> = result.iter().map(|i| i.id.clone()).collect();
        assert_eq!(ids, vec!["part_1", "part_2", "part_3"]);
    }
}
