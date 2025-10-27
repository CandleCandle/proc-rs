<script setup>
import SearchResultsItem from './SearchResultsItem.vue';
import CurrentConfiguration from './current_configuration/CurrentConfiguration.vue';
import SearchResultsProcess from './SearchResultsProcess.vue';
import { ref, watch } from 'vue'
import { GraphConfiguration, DataSet } from 'proc-rs';

let available = DataSet.all();

const configuration = new GraphConfiguration();
const cfg = ref({
    cfg: configuration,
    update_counter: 0
})
console.log("available data", available);
console.log(configuration);

const dataSetId = ref("");
watch(dataSetId, (id) => {
    console.log("Updating config with", id);
    configuration.update_data_set(id);
});

const searchItem = ref('');
const searchResultsItems = ref([]);
watch(searchItem, (value) => {
    console.log("Item search for", value);
    if (value.length >= 3) {
        searchResultsItems.value = configuration.search_items(value);
        console.log(searchResultsItems);
    }
});
const searchProcess = ref('');
const searchResultsProcesses = ref(null);
watch(searchProcess, (value) => {
    console.log("Process search for", value);
    if (value != "") {
        // search, update results
    }
});
watch(cfg, (value) => {
    console.log("Cfg", cfg);
});

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
        <div><label for="_1"> Item Search:</label></div>
        <div><input id="_1" type="text" :disabled="dataSetId == ''" v-model="searchItem" /></div>
        <div><label for="_2"> Process Search:</label></div>
        <div><input id="_2" type="text" :disabled="dataSetId == ''" v-model="searchProcess" /></div>
        <SearchResultsItem v-for="item in searchResultsItems" :item="item" :cfg="cfg" />
        <SearchResultsProcess class="input_search_results" :cfg="cfg" />
    </div>
    <CurrentConfiguration :cfg="cfg" />
</template>


<style scoped>
.input_options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
/* .input_search_results {
    grid-column-end: span 2;
} */
</style>
