use std::{collections::{BTreeMap, BTreeSet}, rc::Rc};

use nalgebra::{DMatrix, DVector};

use crate::data::{graph_configuration::GraphConfiguration, model::{ActiveProcess, Item}};


pub struct Calculator {
    materials: Option<i32>,
    initial: DMatrix<f64>,
}

// trait MulRow<T, R: Dim, C: Dim, S> {
//     fn mul_row(&mut self, scalar: T);
// }

// impl<T, R: Dim, C: Dim, S> MulRow for nalgebra::Matrix<T, R, C, S>
// where
//     T: Scalar,
//     S: RawStorage<T, R, C>,
// {
//     fn mul_row(&mut self, scalar: T) {}
// }

impl Calculator {
    pub fn generate(gc: &GraphConfiguration) -> Self {
        let initial = Self::create_initial(&gc);
        let mut reduced = initial.clone();
        reduced.swap_rows(1, 2);

        Calculator {
            materials: None,
            initial,
        }
    }

    fn create_initial(gc: &GraphConfiguration) -> DMatrix<f64> {
        let all_proc_io: BTreeSet<&Rc<Item>> = gc.get_processes().iter().flat_map(|proc| {
            proc.process.inputs.iter().map(|s| &s.item).chain(
                proc.process.outputs.iter().map(|s| &s.item))
        }).collect();
        let num_rows = all_proc_io.len(); // size of the set of all items that are inputs or outputs to the processes
        let num_cols = gc.get_processes().len() + gc.get_imports_exports().len() + 1; // one column for each process, I/O, and an extra for the requirements

        let mut result = DMatrix::from_element(num_rows, num_cols, 0.0);

        // one column per process. Inputs are -ive, outputs are +ive
        // When a item appears in both the inputs and outputs, the net input or output is used.
        let processes: BTreeMap<String, &ActiveProcess> = gc.get_processes().iter().map(|p| (p.process.id.clone(), p)).collect();
        for (proc_idx, proc) in processes.values().enumerate() {
            let mut col = DVector::from_element(num_rows, 0.0);
            for (row_idx, row_item) in all_proc_io.iter().enumerate() {
                let is = proc.process.inputs.iter().filter(|s| s.item.id == row_item.id).next();
                let os = proc.process.outputs.iter().filter(|s| s.item.id == row_item.id).next();
                col[row_idx] = is.map(|s| s.quantity * -1.0).unwrap_or(0.0)
                        + os.map(|s| s.quantity).unwrap_or(0.0);
            }
            result.set_column(proc_idx, &col);
        }

        // one column per input/output, set the value to 1.
        // net inputs will end up with -ive values in the reduced matrix.
        // net outputs will end up with +ive values in the reduced matrix.
        for (io_idx, item) in gc.get_imports_exports().iter().enumerate() {
            let mut col = DVector::from_element(num_rows, 0.0);
            for (row_idx, row_item) in all_proc_io.iter().enumerate() {
                if item.id == row_item.id {
                    col[row_idx] = 1.0;
                }
            }
            result.set_column(processes.len() + io_idx, &col);
        }

        // one column for the requirements. Requirements can be either +ive or -ive.
        let mut col = DVector::from_element(num_rows, 0.0);
        for req in gc.get_requirements().iter() {
            for (row_idx, row_item) in all_proc_io.iter().enumerate() {
                if req.item.id == row_item.id {
                    col[row_idx] = req.quantity;
                }
            }
        }
        result.set_column(num_cols - 1, &col);

        result
    }

    pub fn initial_matrix(&self) -> &DMatrix<f64> {
        &self.initial
    }
}

#[cfg(test)]
mod test {
    use std::f64::EPSILON;

    use crate::data::fixtures;
    use super::*;

    #[test]
    fn it_calculates_initial_matrix() {
        let mut gc = fixtures::create_config();
        gc.add_requirement("part_3", 7.0);
        gc.add_import_export("part_1");
        gc.add_import_export("part_2");
        gc.add_process("make_a", 1.0, 1.0, 1.0);
        let calc = Calculator::generate(&gc);
        let actual = calc.initial_matrix();
        let expected = DMatrix::from_vec(3, 4, vec![
            // p1  p2    p3
            -5.0, -2.0,  5.0, // proc
             1.0,  0.0,  0.0, // io
             0.0,  1.0,  0.0, // io
             0.0,  0.0,  7.0, // req
        ]);
        let equality = actual.relative_eq(&expected, EPSILON, 1e-10);
        assert!(equality, "{:?} is not equal to {:?} (epsilon: {})", actual, expected, 1e-10);
    }
}

/*

-5 1 0 0
-2 0 1 0
 5 0 0 7

+ 1, 3

 0 1 0 7
-2 0 1 0
 5 0 0 7

s 1, 2

-2 0 1 0
 0 1 0 7
 5 0 0 7

* 1, -2

 1 0 -2 0
 0 1  0 7
 5 0  0 7

+ 5 (-5)x1

 1 0 -2 0
 0 1  0 7
 0 0  10 7

* 3, 0.1

 1 0 -2 0
 0 1  0 7
 0 0  1 0.7

+ 1, (2)x3

 1 0 0 1.4
 0 1 0 7
 0 0 1 0.7


*/
