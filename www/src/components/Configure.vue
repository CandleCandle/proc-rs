<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// })

// import { reecho, Foo } from 'proc-rs';
import { ref, watch } from 'vue'
import { stuff, GraphConfiguration, DataSet } from 'proc-rs';
// stuff("something from js");
// const available = list_data_sets();
// const available = {};

// import * as wasmjs from 'proc-rs';
// console.log(Object.entries(wasmjs));

let available = DataSet.all();

const configuration = new GraphConfiguration();
console.log("available data", available);
console.log(configuration);

// window.fetch("something/else")
//     .then(r => {
//         console.log("response", r);
//         return r.blob();
//     })
//     .then(b => b.text())
//     .then(r => {
//         console.log("response & blob", r);
//     })
//     .catch(err => {
//         console.error("error", err);
//     })

const dataSetId = ref(null);
watch(dataSetId, (id) => {
    console.log("Updating config with", id);
});

</script>

<template>
    <select v-model="dataSetId">
        <option v-for="v in available" :value="v.id()" >{{ v.description() }}</option>
    </select>
</template>


<style scoped>

</style>
