<script setup>
const emit = defineEmits(['cfg_update']);
const { cfg, cfg_fu } = defineProps(['cfg', 'cfg_fu']);
import { computed } from 'vue';
import { ActiveNodeWrapper } from './active_node_wrapper.js';

console.log('process list', cfg.get_processes());

function remove_process(id) {
    console.log('removing process', id);
    cfg.remove_process(id);
    emit('cfg_update');
}

let processes = computed(() => {
    cfg_fu.value + 1; // mention the thing that changes to force a re-compute
    return cfg.get_processes();
});

function update_active_node(proc) {
    let ap = ActiveNodeWrapper.create(ActiveNodeWrapper.Process, proc);
    emit('active_node', ap);
}

</script>

<template>
    <UApp>
        <ul class="process_details">
            <li v-for="p in processes" class="hover-underline">
                <UTooltip :text="'Remove Process' + (processes.length <= 1 ? ' (disallowed, reset to remove the last process)' : '')">
                    <UButton
                        :disabled="processes.length <= 1"
                        icon="i-lucide-trash"
                        color="neutral"
                        variant="ghost"
                        aria-label="Remove Process"
                        @click="remove_process(p.process.id)"
                    />
                </UTooltip>
                <UTooltip text="Show process details">
                    <span class="clickable", @click="update_active_node(p)">{{ p.process.display }}</span>
                </UTooltip>
            </li>
        </ul>
        <div style="display: none">{{ cfg_fu }}</div>
    </UApp>
</template>

<style scoped>

.clickable {
    cursor: pointer;
}

.clickable:hover {
    text-decoration: underline;
}

.process_details {
    padding-left: 1em;
}

</style>
