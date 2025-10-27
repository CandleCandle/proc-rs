use std::{error::Error, fs, path::{Path, PathBuf}};

use clap::{command, Parser};

mod dataset;
use dataset::{DataSet, DataSetConf};
mod data;
use data::model::{ActiveProcess, Data, DataParser, Item, Process, Stack};
mod lib;
use lib::GraphConfiguration;

#[derive(Parser, Debug, Clone)]
#[command(version, about, long_about = None)]
struct Args {
    #[arg(short, long)]
    data: String,
    #[arg(short, long)]
    data_location: PathBuf,
}

fn main() -> Result<(), String> {
    let args = Args::parse();

    let current_data_set = DataSet::all().iter().find(|d| d.id() == args.data).map(|d| d.clone()).unwrap();
    let json = fs::read(args.data_location)
        .map(|vec| String::from_utf8(vec).map_err(|e| e.to_string())).map_err(|e| e.to_string())??;
    let current_data = Some(current_data_set.style.parser().from_str(&json)?).unwrap();

    let gc = GraphConfiguration::from_provided(
        current_data_set,
        current_data,
        vec![],
        vec![],
        vec![],
    );
    println!("{:?}", gc);
    Ok(())
}
