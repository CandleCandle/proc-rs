<script setup>
const emit = defineEmits(['cfg_update', 'active_node']);
const { cfg, cfg_fu, node } = defineProps(['cfg', 'cfg_fu', 'node']);

function bubble_active_node(n) {
    emit('active_node', n);
}
function bubble_cfg_update() {
    emit('cfg_update');
}

/*
 * 'key' triggers the ActiveNode(Item|Process) to re-render when the
 * underling node changes. This feels weird as the change of
 * the node should be triggering the re-render.
 */
let key = 0;

</script>

<template>
    <UApp>
        <div style="display: none">{{ cfg_fu }}</div>
        <ActiveNodeItem v-if="node.is_item()" :cfg="cfg" :cfg_fu="cfg_fu" :node="node" @active_node="bubble_active_node" @cfg_update="bubble_cfg_update" />
        <ActiveNodeProcess v-if="node.is_process()" :key="key += 1" :cfg="cfg" :cfg_fu="cfg_fu" :node="node" @active_node="bubble_active_node" @cfg_update="bubble_cfg_update" />
    </UApp>
</template>

<style scoped>

.proc {
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.proc_io {
    display: grid;
    grid-template-columns: 0fr 1fr;
    gap: 5px;
}

.grid_fw {
    grid-column-start: 1;
    grid-column-end: span 2;
}

.grid_fr_centre {
    justify-self: center;
}

</style>
