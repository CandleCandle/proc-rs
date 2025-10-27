use crate::data::graph_configuration::GraphConfiguration;





pub struct Calculator {
    pub materials: Option<i32>
}

impl Calculator {
    pub fn generate(_gc: GraphConfiguration) -> Self {
        Calculator { materials: None }
    }
    pub fn initial_matrix(&self) -> Option<i32> {
        None
    }
}

#[cfg(test)]
mod test {
    use crate::data::fixtures;
    use super::*;

    #[test]
    fn it_calculates_initial_matrix() {
        let mut gc = fixtures::create_config();
        gc.add_requirement("part_4", 1.0);
        gc.add_process("make_b", 1.0, 1.0, 1.0);
        let calc = Calculator::generate(gc);
        assert_eq!(calc.initial_matrix(), Option::None);
    }
}
