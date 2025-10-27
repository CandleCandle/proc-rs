<script setup>
import { ref } from 'vue';
defineProps(['item', 'cfg']);
const requirement_value = ref(null);

function add_requirement(cfg, item_id, value) {
    console.log("adding requirement", item_id, value, cfg);
    cfg.cfg.add_requirement(item_id, value);
    cfg.update_counter += 1
    // somehow trigger vue to clear the search box and therefore the search results
}

function add_import_export(cfg, item_id) {
    console.log("adding import/export", item_id, cfg);
    cfg.cfg.add_import_export(item_id);
    cfg.update_counter += 1
    // somehow trigger vue to clear the search box and therefore the search results
}

</script>


<template>
    <div>{{ item.display }} ({{ item.id }})</div>
    <div>
        <input type="text" size="4" @keyup.enter="add_requirement(cfg, item.id, requirement_value)" v-model="requirement_value"/>
        <button @click="add_requirement(cfg, item.id, requirement_value)">Requirement</button>
        <button @click="add_import_export(cfg, item.id)">Import/Export</button>
    </div>
</template>


<style scoped>

</style>
