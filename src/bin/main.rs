use std::{collections::BTreeMap, fs, path::PathBuf};

use clap::{command, Parser};
use proc_rs::data::{
    basic_data_parse::DataParserBasicFiles, calculator::Calculator, dataset::DataSet, graph_configuration::GraphConfiguration, model::StackSet};

use tabled::{builder::Builder, settings::object::Cell, Table};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};


/// Examples:
/// cargo run -- -s 'fac-2.0.0' -f www/data/fac-2.0.0.json -r 5:part_d -p make_d:1:1:1 -g sample.gv
/// or
/// cargo run -- \
///     --style 'fac-2.0.0' \
///     --data-location www/data/fac-2.0.0.json \
///     --requirement 5:part_d \
///     --process make_d:1:1:1 \
///     --graph-out sample.gv
///
#[derive(Parser, Debug, Clone)]
#[command(version, about, verbatim_doc_comment)]
struct Args {
    /// Data Style ID; as produced by DataSetStyle
    #[arg(short='s', long)]
    style: String,

    /// File path to data contents
    #[arg(short='f', long)]
    data_location: PathBuf,

    /// Requirements, in the form F:id
    ///
    /// F is a floating point number
    ///
    /// id is an item id that exists in the data
    #[arg(short='r', long="requirement")]
    requirements: Vec<String>,

    /// Imports/Exports
    ///
    /// item id that exists in the data
    #[arg(short='t', long="io")]
    io: Vec<String>,

    /// Included processes, in the form id:F1:F2:F3
    ///
    /// id is a process id that exists in the data
    ///
    /// F1 is a duration multiplier (0.5 = half speed, 2 = double speed)
    ///
    /// F2 is an input multiplier (0.5 = process uses 1/2 the inputs in each cycle)
    ///
    /// F3 is an output multiplier (2 = process produces double the outputs in each cycle)
    #[arg(short='p', long="process")]
    processes: Vec<String>,

    /// Path to write the graph description
    #[arg(short='g', long="graph-out")]
    graph: Option<PathBuf>,
}

fn main() -> Result<(), String> {
    let args = Args::parse();
    println!("Args: {args:?}");

    tracing_subscriber::registry()
        .with(tracing_subscriber::fmt::Layer::default()
            .with_ansi(true)
            .with_writer(std::io::stdout)
            .compact())
        .try_init().map_err(|e| e.to_string())?;

    let current_data_conf = DataSet::find(&args.style).ok_or(format!("no dataset conf for {}", &args.style))?;


    let json = fs::read(args.data_location)
        .map(|vec| String::from_utf8(vec).map_err(|e| e.to_string())).map_err(|e| e.to_string())??;
    let mut jsons = BTreeMap::new();
    jsons.insert(DataParserBasicFiles::Main.to_key(), json.to_string());
    let current_data = current_data_conf.style.parser().parse(&mut jsons)?;

    let mut gc = GraphConfiguration::new();
    gc.set_data(current_data, current_data_conf);
    for io in args.io {
        gc.add_import_export(&io);
    }
    for req in args.requirements {
        let parts = req.split_once(':').ok_or(format!("requirements must be in the form F:id, found {req}"))?;
        let quantity: f64 = parts.0.parse().map_err(|e: std::num::ParseFloatError| e.to_string())?;
        let id = parts.1;
        gc.add_requirement(id, quantity);
    }
    for proc in args.processes {
        let parts: Vec<&str> = proc.split(':').collect();
        let id = parts[0];
        let dur_mod = parts.get(1)
            .map(|p| p.parse::<f64>().map_err(|e| e.to_string()))
            .transpose()?
            .unwrap_or(1.0);
        let in_mod = parts.get(2)
            .map(|p| p.parse::<f64>().map_err(|e| e.to_string()))
            .transpose()?
            .unwrap_or(1.0);
        let out_mod = parts.get(3)
            .map(|p| p.parse::<f64>().map_err(|e| e.to_string()))
            .transpose()?
            .unwrap_or(1.0);
        tracing::debug!("Found proc {id}, dur {dur_mod}, in {in_mod}, out {out_mod}");
        gc.add_process(id, gc.get_fastest_factory_for_process(id).as_str(), dur_mod, in_mod, out_mod);
    }

    let unknown = gc.get_defaulted_items();
    for i in unknown {
        tracing::warn!("Found unsatisfied item, adding as import/export: {}", i.id);
        gc.add_import_export(&i.id);
    }

    // println!("{:?}", gc);

    let calc = Calculator::generate(&gc);
    // calc.to_gv();
    tracing::info!("initial matrix {}", calc.initial_matrix());
    tracing::info!("reduced matrix {}", calc.reduced_matrix());
    tracing::info!("process counts \n{}", make_process_count_table(&calc.process_counts()));
    tracing::info!("materials\n{}", make_materials_count_table(&calc.materials()));
    tracing::info!("graph\n{}", calc.to_digraph());

    if args.graph.is_some() {
        fs::write(args.graph.unwrap(), calc.to_digraph())
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

fn make_process_count_table(process_counts: &BTreeMap<String, f64>) -> String {
    Table::new(process_counts)
        .modify(Cell::new(0, 0), "id")
        .modify(Cell::new(0, 1), "count")
        .to_string()
}

fn make_materials_count_table(materials: &StackSet) -> String {
    let all_items = materials.contained_items();

    let mut result = Builder::default();
    for item in &all_items {
        let positive = (materials.sum_positive(item).quantity * 100.0).round() / 100.0;
        let negative = (materials.sum_negative(item).quantity * 100.0).round() / 100.0;
        let mut net = (materials.sum(item).quantity * 100.0).round() / 100.0;
        if net.is_sign_negative() && net.abs() < 0.001 { // essentially, display -0 as 0.
            net = -net;
        }
        result.push_record(&[ negative.to_string(), positive.to_string(), net.to_string() ]);
    }
    result.insert_column(0, all_items.iter().map(|i| i.display.clone()).collect::<Vec<String>>());
    result.insert_record(0, &[ "item".to_string(), "consume".to_string(), "produce".to_string(), "net".to_string() ]);

    result.build().to_string()
}
