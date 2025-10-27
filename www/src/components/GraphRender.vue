<script setup>
import { ref, shallowRef, triggerRef, watch, defineProps, toRefs } from 'vue';

const props = defineProps(['cfg', 'cfg_fu']);
const { _0, cfg_fu } = toRefs(props);
const { cfg, _1 } = props;



const sample = `digraph sample {
  bgcolor = transparent

  A [
    class="net-producer"
  ]

  A -> B
  B -> C
  B -> D
  D -> E
}`

watch(cfg_fu, (value) => {
    if (cfg.can_render()) {
        console.log("rendering");
        let inner = Viz(
            sample,
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
    color-scheme: light dark;
    --fg: light-dark(#333, #ccc);
    --bg: light-dark(#fff, #333);
    --item-net-producer-bg: light-dark(#f00, #f00);
    --item-net-consumer-bg: light-dark(#0f0, #0f0);
    --item-net-equal-bg: light-dark(#333, #333);
}

/* body {
    background-color: var(--bg);
    color: var(--fg);
    font-family: "Helvetica Neue";
} */

.node {
    stroke: var(--fg);
    fill: var(--bg);
}

.edge {
    fill: var(--bg);
    stroke: var(--fg);
}

g text {
    fill: var(--fg);
    stroke: var(--fg);
    font-family: inherit;
    font-size: 70%;
}

</style>
