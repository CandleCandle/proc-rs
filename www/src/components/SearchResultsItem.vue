<script setup>
import { ref, watch, toRefs } from 'vue';

const { cfg, item } = defineProps(['cfg', 'item']);
const emit = defineEmits(['cfg_update']);

const requirement_value = ref(null);

function add_requirement(cfg, item_id, value) {
    console.log("adding requirement", item_id, value, cfg);
    if (value != null && value.length > 0) {
        cfg.add_requirement(item_id, value);
        emit('cfg_update');
    } else {
        console.log("attempt to add a requirement without a value, was: ", value);
    }
}

function add_import_export(cfg, item_id) {
    console.log("adding import/export", item_id, cfg);
    cfg.add_import_export(item_id);
    emit('cfg_update');
}

</script>


<template>
    <div v-tooltip="'id: ' + item.id">{{ item.display }}</div>
    <div>
        <input type="text" size="4" @keyup.enter="add_requirement(cfg, item.id, requirement_value)" v-model="requirement_value"/>
        <button @click="add_requirement(cfg, item.id, requirement_value)" v-tooltip="'Add ' + item.display + ' as a requirement, you must specify a non-empty value'">Requirement</button>
        <button @click="add_import_export(cfg, item.id)" v-tooltip="'Add ' + item.display + ' as an import or export'">Import/Export</button>
    </div>
</template>


<style scoped>

</style>
