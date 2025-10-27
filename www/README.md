# proc-rs-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Design

## Separation of JS vs Rust (WASM)

What goes where?
UI bits MUST be JS.

Matrix bit will be Rust
How do I maintain state? - see game-of-life?

Where does the data.json live?
How do I get that data to load async?


Do I build a json blob in JS with all the inputs, then pass it to Rust?


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

