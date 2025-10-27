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


# Documentation References

https://rustwasm.github.io/docs/wasm-bindgen/introduction.html

https://rustwasm.github.io/docs/wasm-bindgen/examples/fetch.html

https://github.com/serde-rs/json

https://css-tricks.com/snippets/css/complete-guide-grid/
https://vuejs.org/guide/essentials/forms.html

https://book.micheletti.io/

WASM objects can't really be Vue reactive; force a re-render of certain components with the :key work-around.
https://michaelnthiessen.com/force-re-render/
