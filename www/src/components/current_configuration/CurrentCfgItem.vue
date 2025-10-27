<script setup>
import { ref, watch } from 'vue';
import { DisplayItem } from './display_item';

const emit = defineEmits(['cfg_update']);
const { cfg, stack } = defineProps(['cfg', 'stack']);

const requirement_value = ref(stack.req_quantity());
const type = ref(stack.type);

if (stack.is_req()) {
    console.log("stack quantity", stack);
    // requirement_value.value = ;
}
console.log("stack", stack, stack.is_req(), stack.is_io(), stack.is_intermediate());

watch(type, (value) => {
    // TODO add debounce
    console.log('change in type', type, stack.id(), 'req val', requirement_value.value);
    switch (value) {
        case DisplayItem.REQUIREMENT:
            cfg.add_requirement(stack.id(), requirement_value.value);
            cfg.remove_import_export(stack.id());
            emit('cfg_update');
            break;
        case DisplayItem.IMPORT_EXPORT:
            cfg.add_import_export(stack.id());
            cfg.remove_requirement(stack.id());
            emit('cfg_update');
            break;
        case DisplayItem.INTERMEDIATE:
            cfg.remove_requirement(stack.id());
            cfg.remove_import_export(stack.id());
            emit('cfg_update');
        default:
            break;
    }
});

watch(requirement_value, (value) => {
    // TODO add debounce
    console.log("requirement value updated", stack.id(), type.value, value);
    if (type.value == 'requirement') {
        cfg.update_requirement(stack.id(), value);
        emit('cfg_update');
    }
});

</script>


<template>
    <div>
        icon {{ stack.display() }} ({{ stack.id() }})
    </div>
    <div>
        <input type="text" size="5" v-model="requirement_value" :disabled="type != DisplayItem.REQUIREMENT" />&nbsp;
        <input type="radio" id="requirement" value="requirement" v-model="type" />
        <label for="requirement"> Requirement</label>&nbsp;
        <input type="radio" id="import_export" value="import_export" v-model="type" />
        <label for="import_export"> Import/Export</label>&nbsp;
        <input type="radio" id="intermediate" value="intermediate" v-model="type" />
        <label for="intermediate"> Intermediate</label>&nbsp;
    </div>
</template>


<style scoped>

</style>
