<script setup>
import SearchResultsItem from './SearchResultsItem.vue';
import CurrentConfiguration from './current_configuration/CurrentConfiguration.vue';
import SearchResultsProcess from './SearchResultsProcess.vue';
import { ref, shallowRef, triggerRef, watch, getCurrentInstance } from 'vue'
import { GraphConfiguration, DataSet } from 'proc-rs';

let available = DataSet.all();

const cfg = shallowRef(new GraphConfiguration());
// The GraphConfiguration is a WASM object. There is no property
// in it that can be "watched" to trigger render changes
// this Forces an Update as it is the :key on the CurrentConfiguration.
const cfg_fu = ref(0);

console.log("available data", available);
console.log("cfg", cfg);

const dataSetId = ref("");
watch(dataSetId, (id) => {
    console.log("Updating config with", id);
    cfg.value.update_data_set(id);
});

const searchItem = ref('');
const searchResultsItems = ref([]);
watch(searchItem, (value) => {
    console.log("Item search for", value);
    if (value.length >= 3) {
        searchResultsItems.value = cfg.value.search_items(value);
        console.log("search results items", searchResultsItems);
    }
});
const searchProcess = ref('');
const searchResultsProcesses = ref([]);
watch(searchProcess, (value) => {
    console.log("Process search for", value);
    if (value.length >= 3) {
        searchResultsProcesses.value = cfg.value.search_processes(value);
        console.log("search results processes", searchResultsProcesses);
    }
});
watch(cfg, (value) => {
    console.log("cfg", value, value.get_requirements(), value.get_imports_exports(), value.get_processes());
});

function handle_cfg_update() {
    console.log("do update thing", cfg);
    triggerRef(cfg);
    searchProcess.value = '';
    searchResultsProcesses.value = [];
    searchItem.value = '';
    searchResultsItems.value = [];
    cfg_fu.value++;
}

</script>

<template>
    <div><h2>Get Started</h2></div>
    <div class="input_options">
        <div><label for="selectDataSet">Data Set:</label></div>
        <div>
            <select v-model="dataSetId">
                <option disabled value="">Select a data set</option>
                <option v-for="v in available" :value="v.id()" >{{ v.description() }}</option>
            </select>
        </div>
        <div><label for="item_search"> Item Search:</label></div>
        <div><input id="item_search" type="text" :disabled="dataSetId == ''" v-model="searchItem" /></div>
        <div><label for="process_search"> Process Search:</label></div>
        <div><input id="process_search" type="text" :disabled="dataSetId == ''" v-model="searchProcess" /></div>

        <SearchResultsItem @cfg_update="handle_cfg_update()" v-for="item in searchResultsItems" :item="item" :cfg="cfg" />
        <div class="search_results">
            <hr v-if="searchResultsProcesses.length > 0" />
            <SearchResultsProcess @cfg_update="handle_cfg_update()" v-for="proc in searchResultsProcesses" :proc="proc" :cfg="cfg" />
        </div>
    </div>
    <CurrentConfiguration :key="cfg_fu" :cfg="cfg" />
</template>


<style scoped>
.input_options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.search_results {
    grid-column-start: 1;
    grid-column-end: span 2;
}

</style>
