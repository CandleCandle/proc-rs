use std::{fs, path::PathBuf};

use clap::{command, Parser};
use proc_rs::data::{
    dataset::DataSet,
    calculator::Calculator,
    graph_configuration::GraphConfiguration, model::DataParser};

use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

// use data::{dataset::DataSet, graph_configuration::GraphConfiguration, model::DataParser};

// use dataset::{DataSet, DataSetConf};
// use data::model::{ActiveProcess, Data, DataParser, Item, Process, Stack};

#[derive(Parser, Debug, Clone)]
#[command(version, about, long_about = None)]
struct Args {
    /// Data Style ID; as produced by DataSetStyle
    #[arg(short='s', long)]
    style: String,
    /// File path to data contents
    #[arg(short='f', long)]
    data_location: PathBuf,

    /// Requirements, in the form F:id
    /// F is a floating point number
    /// id is an item id that exists in the data
    #[arg(short='r', long="requirement")]
    requirements: Vec<String>,

    /// Imports/Exports
    /// item id that exists in the data
    #[arg(short='t', long="io")]
    io: Vec<String>,

    /// Included processes
    /// process id that exists in the data
    #[arg(short='p', long="process")]
    processes: Vec<String>,

}

fn main() -> Result<(), String> {
    let args = Args::parse();
    println!("Args: {:?}", args);

    tracing_subscriber::registry()
        .with(tracing_subscriber::fmt::Layer::default()
            .with_ansi(true)
            .with_writer(std::io::stdout)
            .compact())
        .try_init().map_err(|e| e.to_string())?;

    let current_data_conf = DataSet::find(&args.style).ok_or(format!("no dataset conf for {}", &args.style))?;

    let json = fs::read(args.data_location)
        .map(|vec| String::from_utf8(vec).map_err(|e| e.to_string())).map_err(|e| e.to_string())??;
    let current_data = Some(current_data_conf.style.parser().from_str(&json)?).unwrap();

    let mut gc = GraphConfiguration::new();
    gc.set_data(current_data, current_data_conf);
    for io in args.io {
        gc.add_import_export(&io);
    }
    for req in args.requirements {
        let parts = req.split_once(':').ok_or(format!("requirements must be in the form F:id, found {}", req))?;
        let quantity: f64 = parts.0.parse().map_err(|e: std::num::ParseFloatError| e.to_string())?;
        let id = parts.1;
        gc.add_requirement(id, quantity);
    }
    for proc in args.processes {
        // let parts = proc.split(':');
        // for part in parts {
        //     // id
        //     // id:duration
        //     // id:duration:output
        //     // id:duration:output:inpput
        // }
        gc.add_process(&proc, 1.0, 1.0, 1.0);
    }

    let unknown = gc.get_defaulted_items();
    for i in unknown {
        tracing::warn!("Found unsatisfied item, adding as import/export: {}", i.id);
        gc.add_import_export(&i.id);
    }

    // println!("{:?}", gc);

    let calc = Calculator::generate(&gc);
    // calc.to_gv();
    calc.initial_matrix();
    // calc.get_reduced_matrix();

    Ok(())
}
