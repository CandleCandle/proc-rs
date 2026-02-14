<script setup>
import SearchResultsItem from './SearchResultsItem.vue';
import CurrentConfiguration from './current_configuration/CurrentConfiguration.vue';
import { ref, watch, toRefs } from 'vue';
import ProcDisplay from './ProcDisplay.vue';


const emit = defineEmits(['cfg_update', 'fold_update']);
const props = defineProps(['cfg', 'cfg_fu', 'folds']);
const { _0, cfg_fu } = toRefs(props);
const { cfg, _1, folds } = props;

class DataSetConf {
    constructor(dataset) {
        this._raw = dataset
    }
    id() {
        return this._raw['main']['name']
                + '-'
                + this._raw['main']['version']
                + (this._raw['mod'] ?
                    '-'
                        + this._raw['mod'][0]['name']
                        + '-'
                        + this._raw['mod'][0]['version']
                 : "");
    }
    description() {
        return this._raw['main']['name']
                + ' (' + this._raw['main']['version'] + ')'
                + (this._raw['mod'] ?
                    ' [' + this._raw['mod'][0]['name']
                        + ' (' + this._raw['mod'][0]['version'] + ')'
                        + ']'
                 : "");
    }
    style() {
        return this._raw['style'];
    }
}

let datasets = await fetch('data/datasets.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error("failed to fetch the list of data sets")
        }
        return response.json()
    })
    .then((json) => {
        console.log(json);
        return json.datasets.map(set => new DataSetConf(set))
    });
console.log('fetched datasets', datasets.map(v => {
    return {
        style: v.style(),
        id: v.id(),
        description: v.description(),
    };
}));

const dataSetId = ref('');
const dataset = ref(null);
watch(dataSetId, (id) => {
    let found_dataset = datasets.find(e => e.id() == id);
    dataset.value = found_dataset;
    console.log("Updating config with", id, found_dataset);
    cfg.update_data_set(id, found_dataset.style());
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
    console.log("item results changed", value);
    if (searchResultsProcesses.value.length > 0 || value.length > 0) {
        emit('fold_update', 'search-results', true);
    }
});
watch(searchResultsProcesses, (value) => {
    console.log("proc results changed", value);
    if (searchResultsItems.value.length > 0 || value.length > 0) {
        emit('fold_update', 'search-results', true);
    }
});

function handle_cfg_update() {
    console.log("C handle_cfg_update");
    searchProcess.value = '';
    searchResultsProcesses.value = [];
    searchItem.value = '';
    searchResultsItems.value = [];
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
    searchProcess.value = '';
    searchResultsProcesses.value = [];
    let result = cfg.add_process(proc_id, factory_id, modifiers.duration, modifiers.input, modifiers.output);
    console.log("add process result", result, cfg, cfg.get_processes());
    emit('fold_update', 'search-results', false);
    emit('cfg_update');
}

function handle_fold_update(event_or_id, forced) {
    emit("fold_update", event_or_id, forced);
}

</script>

<template>
    <details id="get-started" v-bind:open="folds['get-started']" @toggle="emit('fold_update', $event, null)">
        <summary class="header">Get Started</summary>
        <div class="input_options">
            <div v-tooltip="'Start here, find the game and version that you need'"><label for="selectDataSet">Data Set:</label></div>
            <div v-tooltip="'Start here, find the game and version that you need'">
                <select v-model="dataSetId">
                    <option disabled value="">Select a data set</option>
                    <option v-for="v in datasets" :value="v.id()" >{{ v.description() }}</option>
                </select>
            </div>
            <div v-tooltip="'Start by looking for an output item that you need'"><label for="item_search"> Item Search:</label></div>
            <div v-tooltip="'Start by looking for an output item that you need'"><input id="item_search" type="text" :disabled="dataSetId == ''" v-model="searchItem" /></div>
            <div v-tooltip="'Start by looking for a process that you want to use'"><label for="process_search"> Process Search:</label></div>
            <div v-tooltip="'Start by looking for a process that you want to use'"><input id="process_search" type="text" :disabled="dataSetId == ''" v-model="searchProcess" /></div>
        </div>
    </details>

    <details v-bind:open="folds['search-results']" @toggle="emit('fold_update', 'search-results')">
        <summary class="header">Search Results</summary>
        <div class="input_options">
            <SearchResultsItem @cfg_update="handle_cfg_update" v-for="item in searchResultsItems" :item="item" :cfg="cfg" />
            <div class="search_results">
                <div class="proc">
                    <hr class="proc_fw" v-if="searchResultsProcesses.length > 0" />
                    <div class="proc_header_d" v-if="searchResultsProcesses.length > 0">Duration</div>
                    <div class="proc_header_i" v-if="searchResultsProcesses.length > 0">Inputs</div>
                    <div class="proc_header_o" v-if="searchResultsProcesses.length > 0">Outputs</div>
                    <hr class="proc_fw" v-if="searchResultsProcesses.length > 0" />
                    <ProcDisplay v-for="proc in searchResultsProcesses" :proc="proc" :cfg="cfg" :folds="folds" @fold_update="handle_fold_update" :id_prefix="'search'">
                        <template #action_button="{ factory_id, modifiers }">
                            <button @click="add_process(cfg, proc.id, factory_id, modifiers)">Add</button>
                        </template>
                    </ProcDisplay>
                </div>
            </div>
        </div>
    </details>
    <CurrentConfiguration @cfg_update="handle_cfg_update" @use_item="handle_use_item" @make_item="handle_make_item" @fold_update="handle_fold_update" :dataset="dataset" :key="cfg_fu" :cfg="cfg" :folds="folds"/>
</template>

<style>
details > summary.header {
    font-size: 150%;
}
</style>

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
