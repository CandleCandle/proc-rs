<script setup>
import { ref, toRefs } from 'vue';
const emit = defineEmits(['cfg_update']);
const props = defineProps(['cfg', 'proc']);
const { cfg, proc } = toRefs(props);


function add_process(cfg, proc_id, duration_multiplier = 1, inputs_multiplier = 1, outputs_multiplier = 1) {
    console.log("adding process", proc_id, duration_multiplier, inputs_multiplier, outputs_multiplier, cfg);
    let result = cfg.add_process(proc_id, duration_multiplier, inputs_multiplier, outputs_multiplier);
    console.log("add process result", result, cfg, cfg.get_processes());
    emit('cfg_update');
}

</script>


<template>
  <div id="name" v-tooltip="'id: ' + proc.id">
    {{ proc.display }}
  </div>
  <div>
    {{ proc.duration }}s
  </div>
  <div id="in">
    <div v-for="input in proc.inputs" class="proc_io">
      <div>{{ input.quantity }}</div>
      <div v-tooltip="'id: ' + input.item.id">{{ input.item.display }}</div>
    </div>
  </div>
  <div id="out">
    <div v-for="output in proc.outputs" class="proc_io">
      <div>{{ output.quantity }}</div>
      <div v-tooltip="'id: ' + output.item.id">{{ output.item.display }}</div>
    </div>
  </div>
  <div class="proc_buttons"><button @click="add_process(cfg, proc.id, duration_multiplier, inputs_multiplier, outputs_multiplier)">Add</button></div>
  <div>modifiers</div>
  <div>d mod</div>
  <div>i mod</div>
  <div>o mod</div>
  <hr class="proc_fw" />
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
    grid-template-columns: 0fr 1fr;
    place-items: center stretch;
    gap: 10px;
}

</style>
