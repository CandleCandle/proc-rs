<script setup>
import { ref, toRefs } from 'vue';
const emit = defineEmits(['cfg_update']);
const props = defineProps(['cfg', 'proc']);
const { cfg, proc } = toRefs(props);

console.log("props", props);
console.log("cfg SRP", cfg, proc);


function add_process(cfg, proc_id, duration_multiplier = 1, inputs_multiplier = 1, outputs_multiplier = 1) {
    console.log("adding process", proc_id, duration_multiplier, inputs_multiplier, outputs_multiplier, cfg);
    let result = cfg.add_process(proc_id, duration_multiplier, inputs_multiplier, outputs_multiplier);
    console.log("add process result", result, cfg, cfg.get_processes());
    emit('cfg_update');
    // somehow trigger vue to clear the search box and therefore the search results
}

</script>


<template>
  <div class="proc">
    <div id="name">
      {{ proc.display }} ({{ proc.id }})
    </div>
    <div>
      {{ proc.duration }}s
    </div>
    <div id="in">
      <div v-for="input in proc.inputs" class="proc_io">
        <div>{{ input.item.display }} ({{ input.item.id }})</div>
        <div>{{ input.quantity }}</div>
      </div>
    </div>
    <div id="out">
      <div v-for="output in proc.outputs" class="proc_io">
        <div>{{ output.item.display }} ({{ output.item.id }})</div>
        <div>{{ output.quantity }}</div>
      </div>
    </div>
    <div class="proc_buttons"><button @click="add_process(cfg, proc.id, duration_multiplier, inputs_multiplier, outputs_multiplier)">Add</button></div>
    <div>modifiers for {{ proc.display }}</div>
    <div>d mod</div>
    <div>i mod</div>
    <div>o mod</div>
  </div>
  <hr />
</template>


<style scoped>

.proc {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr 3fr 0fr;
    place-items: center stretch;
    gap: 10px;
}
.proc_buttons {
    grid-column-start: 5;
    grid-row-end: span 2;
    place-items: center stretch;
}
.proc_io {
    display: grid;
    grid-template-columns: 1fr 0fr;
    place-items: center stretch;
    gap: 10px;
}

</style>
