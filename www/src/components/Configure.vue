<script setup>
import SearchResultsItem from './SearchResultsItem.vue';
import CurrentConfiguration from './current_configuration/CurrentConfiguration.vue';
import SearchResultsProcess from './SearchResultsProcess.vue';
import { ref, shallowRef, triggerRef, watch, defineProps, toRefs } from 'vue';
import { GraphConfiguration, DataSet } from 'proc-rs';


const emit = defineEmits(['cfg_update']);
const props = defineProps(['cfg', 'cfg_fu']);
const { _0, cfg_fu } = toRefs(props);
const { cfg, _1 } = props;

let available = DataSet.all();
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
// watch(cfg, (value) => {
//     console.log("cfg", value, value.get_requirements(), value.get_imports_exports(), value.get_processes());
// });

function handle_cfg_update() {
    console.log("C handle_cfg_update");
    searchProcess.value = '';
    searchResultsProcesses.value = [];
    searchItem.value = '';
    searchResultsItems.value = [];
    emit('cfg_update');
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
            <div class="proc">
                <hr class="proc_fw" v-if="searchResultsProcesses.length > 0" />
                <div class="proc_header_d" v-if="searchResultsProcesses.length > 0">Duration</div>
                <div class="proc_header_i" v-if="searchResultsProcesses.length > 0">Inputs</div>
                <div class="proc_header_o" v-if="searchResultsProcesses.length > 0">Outputs</div>
                <hr class="proc_fw" v-if="searchResultsProcesses.length > 0" />
                <SearchResultsProcess @cfg_update="handle_cfg_update()" v-for="proc in searchResultsProcesses" :proc="proc" :cfg="cfg" />
            </div>
        </div>
    </div>
    <CurrentConfiguration @cfg_update="handle_cfg_update()" :key="cfg_fu" :cfg="cfg" />
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
