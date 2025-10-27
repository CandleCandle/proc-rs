<script setup>
import { ref, toRefs, watch } from 'vue';
import { Collapse } from 'vue-collapsed';
import CurrentCfgItem from './CurrentCfgItem.vue';
import CurrentCfgProc from './CurrentCfgProc.vue';
import { DisplayReq, DisplayIO, DisplayIntermediate } from './display_item';

const emit = defineEmits(['cfg_update', 'make_item', 'use_item']);
const { cfg } = defineProps(['cfg']);

const currentConfigurationIsExpanded = ref(cfg.can_render())

function handle_cfg_update() {
    console.log("CC handle_cfg_update");
    emit('cfg_update');
}

function handle_make_item(item_id) {
    console.log("CC handle make item", item_id);
    emit("make_item", item_id);
}

function handle_use_item(item_id) {
    console.log("CC handle use item", item_id)
    emit("use_item", item_id);
}

function map_items(cfg) {
    let req = cfg.get_requirements()
        .map(r => { console.log("requirement", r.item.id, r.quantity); return r; })
        .map(r => new DisplayReq(r))
        .map(r => { console.log("  ", r); return r; })
        ;
    let io = cfg.get_imports_exports()
        .map(r => { console.log("io", r.id); return r; })
        .map(i => new DisplayIO(i))
        .map(r => { console.log("  ", r); return r; })
        ;
    let inter = cfg.get_intermediate_items()
        .map(r => { console.log("intermediate", r.id); return r; })
        .map(i => new DisplayIntermediate(i))
        .map(r => { console.log("  ", r); return r; })
        ;
    let def = cfg.get_defaulted_items()
        .map(r => { console.log("defaulted", r.id); return r; })
        .map(d => new DisplayIO(d))
        .map(r => { console.log("  ", r); return r; })
        ;
    let result = req
        .concat(io)
        .concat(inter)
        .concat(def)
        .sort((a, b) => a.display().localeCompare(b.display()));
    return result;
}
</script>


<template>
    <div><h2>Current Configuration <button @click="currentConfigurationIsExpanded = !currentConfigurationIsExpanded">{{ currentConfigurationIsExpanded ? '\\/' : '>' }}</button></h2></div>

    <Collapse class="input_options" :when="currentConfigurationIsExpanded">
        <h3>Data Set</h3>
        <hr />

        <h3>Items</h3>
        <div class="items">
            <hr class="items_fw" v-if="map_items(cfg).length > 0" />
            <CurrentCfgItem @cfg_update="handle_cfg_update" @use_item="handle_use_item" @make_item="handle_make_item" v-for="stack in map_items(cfg)" :stack="stack" :cfg="cfg" />
        </div>
        <h3>Processes</h3>
        <div class="proc" v-if="cfg.get_processes().length > 0">
            <hr class="proc_fw" />
            <div class="proc_header_d">Duration</div>
            <div class="proc_header_i">Inputs</div>
            <div class="proc_header_o">Outputs</div>
            <hr class="proc_fw" />
            <CurrentCfgProc @cfg_update="handle_cfg_update()" v-for="proc in cfg.get_processes()" :active_proc="proc" :cfg="cfg" />
        </div>
    </Collapse>
</template>

<style scoped>

.items, :deep(.items) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
}
.items_fw, :deep(.items_fw) {
    grid-column-start: 1;
    grid-column-end: span 2;
    place-items: center stretch;
}


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
