<script setup>
const emit = defineEmits(['cfg_update', 'active_node']);
const { cfg, cfg_fu } = defineProps(['cfg', 'cfg_fu']);
import { ActiveNodeWrapper } from './active_node_wrapper.js';
import { computed } from 'vue';

console.log('required items list', cfg.get_requirements());
console.log('defaulted items list', cfg.get_defaulted_items());
console.log('intermediate items list', cfg.get_intermediate_items());
console.log('import/exported items list', cfg.get_imports_exports());

const req = computed(() => {
    cfg_fu.value + 1; // mention the thing that changes to force a re-compute
    return cfg.get_requirements().map(r => ActiveNodeWrapper.create(ActiveNodeWrapper.ItemRequirement, r));
});
const io = computed(() => {
    cfg_fu.value + 1; // mention the thing that changes to force a re-compute
    return cfg.get_imports_exports().map(r => ActiveNodeWrapper.create(ActiveNodeWrapper.ItemIo, r));
});
const def = computed(() => {
    cfg_fu.value + 1; // mention the thing that changes to force a re-compute
    return cfg.get_defaulted_items().map(r => ActiveNodeWrapper.create(ActiveNodeWrapper.ItemDefaulted, r))
});
const inter = computed(() => {
    cfg_fu.value + 1; // mention the thing that changes to force a re-compute
    return cfg.get_intermediate_items().map(r => ActiveNodeWrapper.create(ActiveNodeWrapper.ItemIntermediate, r))
});

console.log("req:", req);

</script>

<template>
    <UApp>
        <details v-if="req.length > 0" open class="item_details">
            <summary class="header">Requirements</summary>
            <ul class="item_details">
                <li v-for="r in req" @click="$emit('active_node', r)" class="clickable">{{ r.get_requirement_value() }}x {{ r.display() }}</li>
            </ul>
        </details>
        <details v-if="io.length > 0 || def.length > 0" open class="item_details">
            <summary class="header">Imports &amp; Exports</summary>
            <ul class="item_details">
                <li v-for="i in io" @click="$emit('active_node', i)" class="clickable">{{ i.display() }}</li>
                <li v-for="i in def" @click="$emit('active_node', i)" class="clickable">{{ i.display() }}</li>
            </ul>
        </details>
        <details v-if="inter.length > 0" open class="item_details">
            <summary class="header">Intermediates</summary>
            <ul class="item_details">
                <li v-for="i in inter" @click="$emit('active_node', i)" class="clickable">{{ i.display() }}</li>
            </ul>
        </details>
    </UApp>
</template>

<style scoped>

.item_details {
    padding-left: 1em;
}
.clickable {
    cursor: pointer;
}

.clickable:hover {
    text-decoration: underline;
}

</style>
