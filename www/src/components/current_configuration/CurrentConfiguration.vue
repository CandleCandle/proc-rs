<script setup>
import { ref, toRefs, watch } from 'vue';
import CurrentCfgItem from './CurrentCfgItem.vue';
import CurrentCfgProc from './CurrentCfgProc.vue';

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
    let def = cfg.get_defaulted_items()
        .map(d => new DisplayIO(d));
    let result = r.concat(io).concat(def).sort((a, b) => a.display().localeCompare(b.display()));
    console.log("display items", "req", r, "io", io, "result", result);
    return result;
}
</script>


<template>
    <div><h2>Current Configuration</h2></div>
    <h3>Data Set ID</h3>
    <h3>Items</h3>
    <div>
        <hr v-if="map_items(cfg).length > 0" />
        <CurrentCfgItem v-for="stack in map_items(cfg)" :stack="stack" :cfg="cfg" />
    </div>
    <h3>Processes</h3>
    <div class="proc">
        <hr class="proc_fw" v-if="cfg.get_processes().length > 0" />
        <div class="proc_header_d">Duration</div>
        <div class="proc_header_i">Inputs</div>
        <div class="proc_header_o">Outputs</div>
        <hr class="proc_fw" v-if="cfg.get_processes().length > 0" />
        <CurrentCfgProc v-for="proc in cfg.get_processes()" :active_proc="proc" :cfg="cfg" />
    </div>
</template>

<style scoped>

.proc_header_d {
    grid-column: 2;
}
.proc_header_i {
    grid-column: 3;
}
.proc_header_o {
    grid-column: 4;
}
.proc, :deep(.proc) {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr 3fr 0fr;
    place-items: center stretch;
    gap: 10px;
}
.proc_fw, :deep(.proc_fw)  {
    grid-column-start: 1;
    grid-column-end: span 5;
    place-items: center stretch;
}
.proc_buttons, :deep(.proc_buttons)  {
    grid-column-start: 5;
    grid-row-end: span 2;
    place-items: center stretch;
}
.proc_io, :deep(.proc_io)  {
    display: grid;
    grid-template-columns: 0fr 1fr;
    place-items: center stretch;
    gap: 10px;
}

</style>
