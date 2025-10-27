# proc-rs-app



## Project Setup

```sh
cargo install wasm-pack
cd www
npm install
```

### Compile and Hot-Reload for Development

```sh
cd www
wasm-pack build && npm run dev
```

### Run CLI

```sh
cargo run -- --help
```

### Compile and Minify for Production

```sh
cd www
npm run build
```

# Adding a Data Set

tl;dr:
1. Create the JSON blob manually or by using `./bin/add_process.sh`
   1. naming requirements are
      1. Standard base game: `[game]-[game-version].json`
      2. Modded game: `[game]-[game-version]-[modpack-name]-[modpack-version].json`
2. Add an entry in the `DataSet` enum in `src/data/dataset.rs`
3. Update `DataSet::params`
   1. Use the `DataSetStyle::Basic` style.
   2. IDs must match the naming requirements above.
   3. Versions must match the naming requirements above.
4. Update `DataSet::all`
5. Rebuild & deploy

## Factorio Recipe Lister Data

The "basic data" structure can not cope with the complications that Factorio contains; e.g.
1. Fluids vs Solids
2. Fluid temperatures and requirements of some processes (e.g. some require a fluid to be have a temperature between 15 and 165 C)
3. "Catalysts"; where there is an input and an output from a process that is not modified by output modifiers.

Given these, and that the data is split into several files, we need:
1. a manifest describing which files contain the items, processes, etc. The manifest follows the same naming convetions as the basic data.
2. Use `DataSetStyle::RecipeLister`
3. the various files.

Directory structure should follow:
```
www/data
 |- factorio-[base]-modpack-[mod_version].json
 \- factorio-[base]-modpack-[mod_version]/
    |- item.json
    |- assembling-machine.json
    \- ...

```


# Design

## Separation of JS vs Rust (WASM)

UI bits MUST be JS, only data may flow between JS and Rust
Display (i18n) MAY me done in Rust as Rust holds the internal data state.

State is maintained in a wasm instance, mutated via calls from the UI.


## UX Workflow Ideas

(flowchart)
0. Start
1. Select a game/modpack.
2. Search for a process directly
3. Search for item
3. 1. display items with buttons to search by input or output
3. 2. show process search
4. Decide on behaviour for an unknown (import/export)/process search
5. End

Graph:
0 -> 1
1 -> 2 ; all I/O are added to the list of unknowns; with a default of I/O
1 -> 3
3 -> 3.1
3.1 -> 3.2 ; select a process
3.2 -> 4
2 -> 4 ; any additional unknowns are added; with a default of I/O
4 -> 4 ; loop until unknowns are solved
4 -> 5 ; end

## UX Feedback
Needs better "do this next" pointers
Loop/no-solution: Needs better "convert one of the intermediates to an import/export" hints
When searching for an item: case insesitivity; search for item names as well as IDs.

### Modifications
adjust requirements; can be -ive to be "must consume amount"
"I want exactly X of process Y"
"I want exactly P throughput of intermediate Q" (e.g. Factorio belt limitations, 45/second or 180/second)


### Tables needed
All items
* Name (icon, ID)
* classification: requirement, I/O, intermediate.
* processes:
  * name, icon, id
  * unmodified duration
  * unmodified inputs
  * unmodified outputs

# Ideas

Data set editor - "open" from local filesystem and "download" to create replacement.


# Documentation References

https://rustwasm.github.io/docs/wasm-bindgen/introduction.html

https://rustwasm.github.io/docs/wasm-bindgen/examples/fetch.html

https://github.com/serde-rs/json

https://css-tricks.com/snippets/css/complete-guide-grid/
https://vuejs.org/guide/essentials/forms.html

https://book.micheletti.io/

WASM objects can't really be Vue reactive; force a re-render of certain components with the :key work-around.
https://michaelnthiessen.com/force-re-render/
