<script setup>
import { ref, watch, toRefs } from 'vue'

const emit = defineEmits(['cfg_update']);
const { cfg, stack } = defineProps(['cfg', 'stack']);

const requirement_value = ref(null);
const type = ref(null);

if (stack.is_req()) {
    requirement_value.value = stack.req_quantity();
    type.value = 'requirement';
} else {
    type.value = 'import_export';
}

watch(type, (value) => {
    console.log('change in type', type, stack.id(), 'req val', requirement_value.value);
    switch (value) {
        case 'requirement':
            cfg.add_requirement(stack.id(), requirement_value.value);
            cfg.remove_import_export(stack.id());
            emit('cfg_update');
            break;
        case 'import_export':
            cfg.add_import_export(stack.id());
            cfg.remove_requirement(stack.id());
            emit('cfg_update');
            break;
        default:
            break;
    }
});

watch(requirement_value, (value) => {
    console.log("requirement value updated", type.value, value);
    if (type.value == 'requirement') {
        cfg.update_requirement(stack.id(), value);
        emit('cfg_update');
    }
});

</script>


<template>
    <div class="items_list">
        <div>
            icon {{ stack.display() }} ({{ stack.id() }})
        </div>
        <div>
            <input type="text" size="5" v-model="requirement_value" :disabled="type != 'requirement'" />&nbsp;
            <input type="radio" id="requirement" value="requirement" v-model="type" />
            <label for="requirement"> Requirement</label>&nbsp;
            <input type="radio" id="import_export" value="import_export" v-model="type" />
            <label for="import_export"> Import/Export</label>&nbsp;
        </div>
    </div>
</template>


<style scoped>
.items_list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
</style>
