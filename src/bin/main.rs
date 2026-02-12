use std::fs::File;
use std::io::Read;
use std::str::FromStr;
use std::{collections::BTreeMap, fs, path::PathBuf};

use clap::{command, Parser, Subcommand, ValueEnum};

use proc_rs::data::dataset::DataSetConf;
use proc_rs::data::graph_configuration::{DehydratedGraphConfiguration, FetchDataSet};
use proc_rs::data::{
    calculator::Calculator, graph_configuration::GraphConfiguration, model::StackSet};
use proc_rs::data::hydration::{Dehydrate, Rehydrate};

use tabled::{builder::Builder, settings::object::Cell, Table};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

use serde_json;
use rmp_serde;
use base64::{Engine, prelude::BASE64_STANDARD_NO_PAD};


#[derive(Parser, Debug, Clone)]
#[command(version, about, verbatim_doc_comment)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Debug, Clone, Subcommand)]
enum Commands {
    Generate(GenerateArgs),
    Serial(SerialArgs)
}

#[derive(Parser, Debug, Clone)]
#[command(version, about, verbatim_doc_comment)]
struct SerialArgs {
    /// File path to data contents
    #[arg(short='f', long)]
    data_location: String,
    #[arg(short='v', long)]
    value: String,
    #[arg(short='m', long)]
    mode: SerialMode,
}

#[derive(ValueEnum, Copy, Clone, Debug, PartialEq, Eq)]
enum SerialMode {
    Json,
    MessagePack
}


/// Examples:
/// cargo run -- -s 'fac-2.0.0' -f www/data/fac-2.0.0.json -r 5:part_d -p make_d:1:1:1 -g sample.gv
/// or
/// cargo run -- \
///     --dataset_id 'fac-2.0.0' \
///     --dataset_style 'basic|flab|recipelister' \
///     --data-location www/data/fac-2.0.0.json \
///     --requirement 5:part_d \
///     --process make_d:1:1:1 \
///     --graph-out sample.gv
///
#[derive(Parser, Debug, Clone)]
#[command(version, about, verbatim_doc_comment)]
struct GenerateArgs {
    /// Data ID
    #[arg(short='i', long)]
    dataset_id: String,

    /// Data Style
    #[arg(short='s', long)]
    dataset_style: String,

    /// File path to data contents
    #[arg(short='f', long)]
    // data_location: PathBuf,
    data_location: String,

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

struct FileFetcher {
    base_dir: String,
}
impl FetchDataSet for FileFetcher {
    async fn fetch(&self, relative_path: &str) ->  Result<String, String> {
        tracing::debug!("fetching {}/{relative_path}", self.base_dir);
        let mut file = File::open(PathBuf::from_str(&self.base_dir).unwrap().join(relative_path)).map_err(|e| format!("{} ({})", e, relative_path))?;
        let mut contents = String::new();
        file.read_to_string(&mut contents).map_err(|e| format!("{}, ({})", e, relative_path))?;
        Ok(contents)
    }
}

#[cfg(not(feature = "main"))]
fn main() -> Result<(), String> {
    Err("enabled with the 'main' feature".to_string())
}

#[cfg(feature = "main")]
#[tokio::main]
async fn main() -> Result<(), String> {
    let args = Cli::parse();

    tracing_subscriber::registry()
        .with(tracing_subscriber::fmt::Layer::default()
            .with_ansi(true)
            .with_writer(std::io::stdout)
            .compact())
        .try_init().map_err(|e| e.to_string())?;

    tracing::debug!("args {args:?}");

    match args.command {
        Commands::Generate(args) => generate(args).await,
        Commands::Serial(args) => serial(args).await,
    }
}

async fn serial(args: SerialArgs) -> Result<(), String> {
    let dgc: DehydratedGraphConfiguration = match args.mode {
        SerialMode::Json => serde_json::from_str(&args.value).map_err(|e| e.to_string())?,
        SerialMode::MessagePack => rmp_serde::decode::from_slice(
                BASE64_STANDARD_NO_PAD.decode(args.value).map_err(|e| e.to_string())?.as_slice()
            ).map_err(|e| e.to_string())?
    };

    let ff = FileFetcher{base_dir: args.data_location};
    let gc = dgc.rehydrate(ff).await?;
    report_gc(gc, None)
}

async fn generate(args: GenerateArgs) -> Result<(), String> {
    let current_data_conf = DataSetConf{id: args.dataset_id, style: args.dataset_style.try_into()?};

    let ff = FileFetcher{base_dir: args.data_location};
    let current_data = current_data_conf.into_data(ff).await?;

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
    report_gc(gc, args.graph)
}

fn report_gc(gc: GraphConfiguration, graph: Option<PathBuf>) -> Result<(), String> {

    let calc = Calculator::generate(&gc);
    tracing::info!("serialised configuration {}", serde_json::to_string(&gc.dehydrate()).unwrap());
    tracing::info!("serialised configuration {}", BASE64_STANDARD_NO_PAD.encode(rmp_serde::encode::to_vec(&gc.dehydrate()).unwrap()));
    tracing::info!("initial matrix {}", calc.initial_matrix());
    tracing::info!("reduced matrix {}", calc.reduced_matrix());
    tracing::info!("process counts \n{}", make_process_count_table(&calc.process_counts()));
    tracing::info!("materials\n{}", make_materials_count_table(&calc.materials()));
    tracing::info!("graph\n{}", calc.to_digraph());

    if graph.is_some() {
        fs::write(graph.unwrap(), calc.to_digraph())
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

// #[cfg(feature = "main")]
fn make_process_count_table(process_counts: &BTreeMap<String, f64>) -> String {
    Table::new(process_counts)
        .modify(Cell::new(0, 0), "id")
        .modify(Cell::new(0, 1), "count")
        .to_string()
}

// #[cfg(feature = "main")]
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
