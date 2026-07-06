<script setup>
import { ref, watch } from 'vue';
import { DisplayItem } from './display_item';

const emit = defineEmits(['cfg_update', 'make_item', 'use_item']);
const { cfg, stack, dataset } = defineProps(['cfg', 'stack', 'dataset']);

const requirement_value = ref(stack.req_quantity());
const type = ref(stack.type);

if (stack.is_req()) {
    console.log("stack quantity", stack);
}
console.log("stack", stack, stack.is_req(), stack.is_io(), stack.is_intermediate());

watch(type, (value, oldValue) => {
    console.log('change in type', type, stack.id(), 'req val', requirement_value.value);
    switch (value) {
        case DisplayItem.REQUIREMENT:
            if (oldValue !== DisplayItem.REQUIREMENT) {
                requirement_value.value = 1;
                console.log("something");
            }
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
    <div v-tooltip="'id: ' + stack.id()">
        [icon] {{ stack.display() }}
    </div>
    <div>
        <button @click="emit('make_item', stack.id())" v-tooltip="'Search for processes that have ' + stack.display() + ' as an output.'">Make</button>
        <button @click="emit('use_item', stack.id())" v-tooltip="'Search for processes that have ' + stack.display() + ' as an input.'">Use</button>
    </div>
    <div>
        <div>
            <input type="radio" :id="'requirement-' + stack.id()" value="requirement" v-model="type"/>
            <label :for="'requirement-' + stack.id()" v-tooltip="'Set ' + stack.display() + ' as a requirement'" > Requirement</label>
            <span v-if="stack.is_req()">
                &nbsp;
                <input type="text" size="5" v-model.lazy.number="requirement_value" :disabled="type != DisplayItem.REQUIREMENT"
                    v-tooltip="'Set a requirement of X per ' + (dataset ? dataset.units() : '(no units yet)') + ' for ' + stack.display() + (type == DisplayItem.REQUIREMENT ? '' : ' (disabled because ' + stack.display() + ' is not marked as a requirement)')"
                />
                per {{ dataset ? dataset.units() : '(no units yet)' }}
            </span>
        </div>
        <div>
            <input type="radio" :id="'import_export-' + stack.id()" value="import_export" v-model="type" />
            <label :for="'import_export-' + stack.id()" v-tooltip="'Use an infinite source or sink for ' + stack.display()" > Import/Export</label>
        </div>
        <div>
            <input type="radio" :id="'intermediate-' + stack.id()" value="intermediate" v-model="type" />
            <label :for="'intermediate-' + stack.id()" v-tooltip="stack.display() + ' should have a net zero produce & consume'"> Intermediate</label>
        </div>
    </div>
    <div class="items_fw"><hr /></div>
</template>


<style scoped>

</style>
