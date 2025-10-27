<script setup>
import { watch, toRefs } from 'vue';

const props = defineProps(['cfg', 'cfg_fu']);
const { _0, cfg_fu } = toRefs(props);
const { cfg, _1 } = props;


watch(cfg_fu, (value) => {
    if (cfg.can_render()) {
        console.log("rendering");
        cfg.calculate();
        console.log("processes", cfg.get_processes());
        console.log("requirements", cfg.get_requirements());
        console.log("import/export", cfg.get_imports_exports());
        console.log("intermediates", cfg.get_intermediate_items());
        console.log("defaulted", cfg.get_defaulted_items());
        console.log("initial", cfg.get_initial_matrix());
        console.log("reduced", cfg.get_reduced_matrix());
        let content = cfg.to_digraph();
        console.log("graph", content);
        let inner = Viz(
            content,
            {
                format: 'svg',
                engine: 'dot'
            });

        document.getElementById('vis').innerHTML = inner.replaceAll(/(fill|stroke)="[^"]+" ?/g, '');
    }
});

</script>


<template>
    <div id="vis"></div>
    <div>{{ cfg_fu }}</div>
</template>


<style>
:root {
    --item-net-producer-fg: light-dark(#fff, #fff);
    --item-net-producer-bg: light-dark(#f00, #f00);
    --item-net-consumer-fg: light-dark(#333, #333);
    --item-net-consumer-bg: light-dark(#0f0, #0f0);
    --item-net-equal-fg: light-dark(#333, #fff);
    --item-net-equal-bg: light-dark(#fff, #333);
}

.node {
    stroke: var(--fg);
    fill: var(--bg);
}
.node.net-producer {
    stroke: var(--item-net-producer-fg);
    fill: var(--item-net-producer-bg);
}
.node.net-consumer {
    stroke: var(--item-net-consumer-fg);
    fill: var(--item-net-consumer-bg);
}
.node.net-equal {
    stroke: var(--item-net-equal-fg);
    fill: var(--item-net-equal-bg);
}

.edge {
    fill-opacity: 0.0;
    stroke: var(--fg);
}

g text {
    /* fill: inherit;
    stroke: inherit; */
    font-family: inherit;
    font-size: 70%;
}

</style>
