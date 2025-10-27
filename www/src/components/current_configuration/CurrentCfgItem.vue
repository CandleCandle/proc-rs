<script setup>
import { ref, watch, toRefs } from 'vue'
const props = defineProps(['cfg', 'stack']);

console.log("props", props);
const { cfg, stack } = toRefs(props);
console.log('cfg', cfg, 'stack', stack);

const requirement_value = ref(null);
const type = ref(null);

if (stack.value.is_req()) {
    requirement_value.value = stack.value.req_quantity();
    type.value = 'requirement';
} else {
    type.value = 'import_export';
}

watch(type, (value) => {
    console.log('change in type', type, stack.value.id(), 'req val', requirement_value.value);
    switch (value) {
        case 'requirement':
            cfg.value.cfg.add_requirement(stack.value.id(), requirement_value.value);
            cfg.value.cfg.remove_import_export(stack.value.id());
            cfg.value.cfg.update_counter += 1;
            break;
        case 'import_export':
            cfg.value.cfg.add_import_export(stack.value.id());
            cfg.value.cfg.remove_requirement(stack.value.id());
            cfg.value.cfg.update_counter += 1;
            break;
        default:
            break;
    }
});

watch(requirement_value, (value) => {
    console.log("requirement value updated", type.value, value);
    if (type.value == 'requirement') {
        cfg.value.cfg.update_requirement(stack.value.id(), value);
        cfg.value.cfg.update_counter += 1;
        console.log("done.", );
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
