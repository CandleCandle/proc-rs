<script setup>
import SearchResultsItem from './SearchResultsItem.vue';
import CurrentConfiguration from './current_configuration/CurrentConfiguration.vue';
import { Collapse } from 'vue-collapsed';
import { ref, watch, toRefs } from 'vue';
import { dataset_all } from 'proc-rs';
import ProcDisplay from './ProcDisplay.vue';


const emit = defineEmits(['cfg_update']);
const props = defineProps(['cfg', 'cfg_fu']);
const { _0, cfg_fu } = toRefs(props);
const { cfg, _1 } = props;

const getStartedIsExpanded = ref(!cfg.can_render());
const searchResultsIsExpanded = ref(false);

let available = dataset_all();
console.log("available data", available);

const dataSetId = ref("");
watch(dataSetId, (id) => {
    console.log("Updating config with", id);
    cfg.update_data_set(id);
});

const searchItem = ref('');
const searchResultsItems = ref([]);
watch(searchItem, (value) => {
    console.log("Item search for", value);
    // TODO add debounce
    if (value.length >= 3) {
        searchResultsItems.value = cfg.search_items(value);
        console.log("search results items", searchResultsItems);
    }
});
const searchProcess = ref('');
const searchResultsProcesses = ref([]);
watch(searchProcess, (value) => {
    console.log("Process search for", value);
    // TODO add debounce
    if (value.length >= 3) {
        searchResultsProcesses.value = cfg.search_processes(value);
        console.log("search results processes", searchResultsProcesses);
    }
});
watch(searchResultsItems, (value) => {
    searchResultsIsExpanded.value = searchResultsProcesses.value.length > 0 || value.length > 0
});
watch(searchResultsProcesses, (value) => {
    console.log("proc results changed", value);
    searchResultsIsExpanded.value = searchResultsItems.value.length > 0 || value.length > 0
});

function handle_cfg_update() {
    console.log("C handle_cfg_update");
    searchProcess.value = '';
    searchResultsProcesses.value = [];
    searchItem.value = '';
    searchResultsItems.value = [];
    getStartedIsExpanded.value = false;
    emit('cfg_update');
}

function handle_make_item(item_id) {
    console.log("C handle make item", item_id);
    searchResultsProcesses.value = cfg.search_processes_by_output(item_id);
}

function handle_use_item(item_id) {
    console.log("C handle use item", item_id)
    searchResultsProcesses.value = cfg.search_processes_by_input(item_id);
}

function add_process(cfg, proc_id, factory_id, modifiers) {
    console.log("adding process", proc_id, modifiers, cfg);
    searchResultsProcesses.value = [];
    let result = cfg.add_process(proc_id, factory_id, modifiers.duration, modifiers.input, modifiers.output);
    console.log("add process result", result, cfg, cfg.get_processes());
    emit('cfg_update');
}

</script>

<template>
    <div><h2>Get Started <button @click="getStartedIsExpanded = !getStartedIsExpanded">{{ getStartedIsExpanded ? '\\/' : '>' }}</button></h2></div>
    <Collapse class="input_options" :when="getStartedIsExpanded">
        <div v-tooltip="'Start here, find the game and version that you need'"><label for="selectDataSet">Data Set:</label></div>
        <div v-tooltip="'Start here, find the game and version that you need'">
            <select v-model="dataSetId">
                <option disabled value="">Select a data set</option>
                <option v-for="v in available" :value="v.id()" >{{ v.description() }}</option>
            </select>
        </div>
        <div v-tooltip="'Start by looking for an output item that you need'"><label for="item_search"> Item Search:</label></div>
        <div v-tooltip="'Start by looking for an output item that you need'"><input id="item_search" type="text" :disabled="dataSetId == ''" v-model="searchItem" /></div>
        <div v-tooltip="'Start by looking for a process that you want to use'"><label for="process_search"> Process Search:</label></div>
        <div v-tooltip="'Start by looking for a process that you want to use'"><input id="process_search" type="text" :disabled="dataSetId == ''" v-model="searchProcess" /></div>
    </Collapse>

    <Collapse class="input_options" :when="searchResultsIsExpanded">
        <h2 class="input_options_fw">Search Results</h2>
        <SearchResultsItem @cfg_update="handle_cfg_update" v-for="item in searchResultsItems" :item="item" :cfg="cfg" />
        <div class="search_results">
            <div class="proc">
                <hr class="proc_fw" v-if="searchResultsProcesses.length > 0" />
                <div class="proc_header_d" v-if="searchResultsProcesses.length > 0">Duration</div>
                <div class="proc_header_i" v-if="searchResultsProcesses.length > 0">Inputs</div>
                <div class="proc_header_o" v-if="searchResultsProcesses.length > 0">Outputs</div>
                <hr class="proc_fw" v-if="searchResultsProcesses.length > 0" />
                <ProcDisplay @cfg_update="handle_cfg_update" v-for="proc in searchResultsProcesses" :proc="proc" :cfg="cfg" :emit_on_change="false" >
                    <template #action_button="{ factory_id, modifiers }">
                        <button @click="add_process(cfg, proc.id, factory_id, modifiers)">Add</button>
                    </template>
                </ProcDisplay>
            </div>
        </div>
    </Collapse>
    <CurrentConfiguration @cfg_update="handle_cfg_update" @use_item="handle_use_item" @make_item="handle_make_item" :key="cfg_fu" :cfg="cfg" />
</template>


<style scoped>
.input_options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.input_options_fw {
    grid-column-start: 1;
    grid-column-end: span 2;
}
.search_results {
    grid-column-start: 1;
    grid-column-end: span 2;
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
