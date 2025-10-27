<script setup>
import { ref, toRefs, watch } from 'vue';
import CurrentCfgItem from './CurrentCfgItem.vue';

const props = defineProps(['cfg']);
const { cfg } = props;
console.log("cfg from CC", cfg);

class DisplayReq {
    constructor(req) {
        this.req = req;
    }
    is_req() { return true; }
    is_io() { return false; }
    id() { return this.req.item.id; }
    display() { return this.req.item.display; }
    req_quantity() { return this.req.quantity; }
}
class DisplayIO {
    constructor(item) {
        this.item = item;
    }
    is_req() { return false; }
    is_io() { return true; }
    id() { return this.item.id; }
    display() { return this.item.display; }
}

// watch(cfg, (value) => {
//     console.log("cfg in CC", value, value.get_requirements(), value.get_imports_exports(), value.get_processes());
// });

function map_items(cfg) {
    let r = cfg.get_requirements()
        .map(r => new DisplayReq(r));
    let io = cfg.get_imports_exports()
        .map(i => new DisplayIO(i));
    let result = r.concat(io).sort((a, b) => a.display().localeCompare(b.display()));
    console.log("display items", "req", r, "io", io, "result", result);
    return result;
}
</script>


<template>
    <div><h2>Current Configuration</h2></div>
    <h3>Data Set ID</h3>
    <h3>Items</h3>
    <div>
        <CurrentCfgItem v-for="stack in map_items(cfg)" :stack="stack" :cfg="cfg" />
    </div>
    <h3>Processes</h3>
    <div>TODO processes. {{ cfg.get_processes() }}</div>
</template>


<style scoped>

</style>
