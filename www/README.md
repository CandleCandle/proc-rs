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
