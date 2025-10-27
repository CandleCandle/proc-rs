use std::{collections::{BTreeMap, BTreeSet}, rc::Rc};

use nalgebra::{DMatrix, DVector};

use crate::data::{graph_configuration::GraphConfiguration, model::{ActiveProcess, Item}};


pub struct Calculator {
    materials: Option<i32>,
    initial: DMatrix<f64>,
    reduced: DMatrix<f64>,
}

impl Calculator {
    pub fn generate(gc: &GraphConfiguration) -> Self {
        let initial = Self::create_initial(&gc);
        let reduced = Self::reduce(&initial);

        Calculator {
            materials: None,
            initial,
            reduced,
        }
    }

    fn create_initial(gc: &GraphConfiguration) -> DMatrix<f64> {
        let all_proc_io: BTreeSet<Rc<Item>> = gc.get_processes().iter().flat_map(|proc| {
            let i = proc.inputs();
            let o = proc.outputs();
            let ii = i.iter().map(|s| s.item.clone());
            let oo = o.iter().map(|s| s.item.clone());
            ii.chain(oo).collect::<Vec<Rc<Item>>>()
        }).collect();
        let num_rows = all_proc_io.len(); // size of the set of all items that are inputs or outputs to the processes
        let num_cols = gc.get_processes().len() + gc.get_imports_exports().len() + 1; // one column for each process, I/O, and an extra for the requirements

        let mut result = DMatrix::from_element(num_rows, num_cols, 0.0);

        // one column per process. Inputs are -ive, outputs are +ive
        // When a item appears in both the inputs and outputs, the net input or output is used.
        let processes: BTreeMap<&str, &ActiveProcess> = gc.get_processes().iter().map(|p| (p.id(), p)).collect();
        for (proc_idx, proc) in processes.values().enumerate() {
            let mut col = DVector::from_element(num_rows, 0.0);
            for (row_idx, row_item) in all_proc_io.iter().enumerate() {
                let is = proc.inputs().iter()
                    .filter(|s| s.item.id == row_item.id)
                    .next()
                    .map(|s| s.quantity * -1.0)
                    .unwrap_or(0.0);
                let os = proc.outputs().iter()
                    .filter(|s| s.item.id == row_item.id)
                    .next()
                    .map(|s| s.quantity)
                    .unwrap_or(0.0);
                col[row_idx] = is + os;
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

    fn reduce(input: &DMatrix<f64>) -> DMatrix<f64> {
        let mut matrix = input.clone();
        let mut pivot_row = 0usize;
        let mut pivot_col = 0usize;

        while pivot_row < matrix.nrows() && pivot_col < matrix.ncols() {
            let row_with_max = Self::find_row_with_max_magnitude(&matrix, pivot_row, pivot_col);
            if matrix[(row_with_max, pivot_col)].abs() < 1e-10 { // "effectively zero"
                pivot_col += 1;
            } else {
                matrix.swap_rows(pivot_row, row_with_max);
                for i in 0..matrix.nrows() {
                    if i == pivot_row { continue; }
                    let multiplier = matrix[(i, pivot_col)] / matrix[(pivot_row, pivot_col)];
                    matrix[(i, pivot_col)] = 0.0;
                    for j in 0..matrix.ncols() {
                        if j == pivot_col { continue; }
                        matrix[(i, j)] = matrix[(i, j)] - (matrix[(pivot_row, j)] * multiplier)
                    }
                }
                let scale = 1.0/matrix[(pivot_row, pivot_col)];
                matrix.row_mut(pivot_row).scale_mut(scale);
                pivot_col += 1;
                pivot_row += 1;
            }
        }
        matrix
    }

    fn find_row_with_max_magnitude(mtx: &DMatrix<f64>, start_row: usize, col: usize) -> usize {
        mtx.column(col).iter()
            .enumerate() // enumerate first to ensure that row indicies are correct
            .skip(start_row) // lucky-ish: if the start_row is zero, we want to skip zero items.
            .max_by(|a, b| a.1.abs().total_cmp(&b.1.abs()))
            .unwrap().0
    }

    pub fn initial_matrix(&self) -> &DMatrix<f64> {
        &self.initial
    }
    pub fn reduced_matrix(&self) -> &DMatrix<f64> {
        &self.reduced
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
        let expected = DMatrix::from_row_slice(3, 4, &[
            // proc io  io  req
            -5.0, 1.0, 0.0, 0.0, // p1
            -2.0, 0.0, 1.0, 0.0, // p2
             5.0, 0.0, 0.0, 7.0, // p3
        ]);
        assert_eq!((actual.nrows(), actual.ncols()), (expected.nrows(), expected.ncols()), "Row/Column mismatch: {} is not equal to {}", actual, expected);
        let equality = actual.relative_eq(&expected, EPSILON, 1e-10);
        assert!(equality, "{} is not equal to {} (epsilon: {})", actual, expected, 1e-10);
    }

    #[test]
    fn it_creates_initial_for_1_to_1() {
        let mut gc = fixtures::create_config();
        gc.add_requirement("part_2", 10.0);
        gc.add_import_export("part_1");
        gc.add_process("one_to_one", 1.0, 1.0, 1.0);
        let calc = Calculator::generate(&gc);
        let actual = calc.initial_matrix();
        let expected = DMatrix::from_row_slice(2, 3, &[
            // proc io  req
            -5.0, 1.0,  0.0, // p1
             1.0, 0.0, 10.0, // p2
        ]);
        assert_eq!((actual.nrows(), actual.ncols()), (expected.nrows(), expected.ncols()), "Row/Column mismatch: {} is not equal to {}", actual, expected);
        let equality = actual.relative_eq(&expected, EPSILON, 1e-10);
        assert!(equality, "{} is not equal to {} (epsilon: {})", actual, expected, 1e-10);
    }

    #[test]
    fn it_reduces_for_1_to_1() {
        let mut gc = fixtures::create_config();
        gc.add_requirement("part_2", 10.0);
        gc.add_import_export("part_1");
        gc.add_process("one_to_one", 1.0, 1.0, 1.0);
        let calc = Calculator::generate(&gc);
        let actual = calc.reduced_matrix();
            //  proc io  req
            // -5.0, 1.0,  0.0, // p1
            //  1.0, 0.0, 10.0, // p2
        let expected = DMatrix::from_row_slice(2, 3, &[
            // proc io  req
             1.0,  0.0, 10.0, // p1
             0.0,  1.0, 50.0, // p2
        ]);
        assert_eq!((actual.nrows(), actual.ncols()), (expected.nrows(), expected.ncols()), "Row/Column mismatch: {} is not equal to {}", actual, expected);
        let equality = actual.relative_eq(&expected, EPSILON, 1e-10);
        assert!(equality, "{} is not equal to {} (epsilon: {})", actual, expected, 1e-10);
    }

    #[test]
    fn it_reduces_for_slightly_more_complex_form() {
        let mut gc = fixtures::create_config();
        gc.add_requirement("part_3", 7.0);
        gc.add_import_export("part_1");
        gc.add_import_export("part_2");
        gc.add_process("make_a", 1.0, 1.0, 1.0);
        let calc = Calculator::generate(&gc);
        let actual = calc.reduced_matrix();
        //  proc io   io   req
        // -5.0, 1.0, 0.0, 0.0, // p1
        // -2.0, 0.0, 1.0, 0.0, // p2
        //  5.0, 0.0, 0.0, 7.0, // p3
        let expected = DMatrix::from_row_slice(3, 4, &[
        //  proc io   io   req
            1.0, 0.0, 0.0, 1.4, // p1
            0.0, 1.0, 0.0, 7.0, // p2
            0.0, 0.0, 1.0, 2.8, // p3
        ]);
        assert_eq!((actual.nrows(), actual.ncols()), (expected.nrows(), expected.ncols()), "Row/Column mismatch: {} is not equal to {}", actual, expected);
        let equality = actual.relative_eq(&expected, EPSILON, 1e-10);
        assert!(equality, "{} is not equal to {} (epsilon: {})", actual, expected, 1e-10);
    }

    #[test]
    fn it_reduces_for_all_fixture_data() {
        let mut gc = fixtures::create_config();
        gc.add_requirement("part_4", 13.0);
        gc.add_import_export("part_1");
        gc.add_import_export("part_2");
        gc.add_process("make_a", 1.0, 1.0, 1.0);
        gc.add_process("make_b", 1.0, 1.0, 1.0);
        let calc = Calculator::generate(&gc);
        let actual = calc.reduced_matrix();
        //  a     b    io    io    req
        // -5.0,  0.0, 1.0,  0.0,  0.0, // p1
        // -2.0,  1.0, 0.0,  1.0,  0.0, // p2
        //  5.0, -3.0, 0.0,  0.0,  0.0, // p3
        //  0.0,  1.0, 0.0,  0.0, 13.0, // p4
        let expected = DMatrix::from_row_slice(4, 5, &[
        //  a     b    io   io    req
            1.0,  0.0, 0.0, 0.0,  7.8,
            0.0,  1.0, 0.0, 0.0, 13.0,
            0.0,  0.0, 1.0, 0.0, 39.0,
            0.0,  0.0, 0.0, 1.0,  2.6,
        ]);
        assert_eq!((actual.nrows(), actual.ncols()), (expected.nrows(), expected.ncols()), "Row/Column mismatch: {} is not equal to {}", actual, expected);
        let equality = actual.relative_eq(&expected, EPSILON, 1e-10);
        assert!(equality, "{} is not equal to {} (epsilon: {})", actual, expected, 1e-10);
    }

    #[test]
    fn it_finds_the_max_row() {
        let input = DMatrix::from_row_slice(2, 3, &[
            -5.0,  1.0,  0.0,
             1.0,  0.0, 10.0,
        ]);
        assert_eq!(Calculator::find_row_with_max_magnitude(&input, 0, 0), 0);
        assert_eq!(Calculator::find_row_with_max_magnitude(&input, 0, 1), 0);
        assert_eq!(Calculator::find_row_with_max_magnitude(&input, 0, 2), 1);
        assert_eq!(Calculator::find_row_with_max_magnitude(&input, 1, 1), 1);
    }
}

