<script setup>
import { toRefs, reactive } from 'vue';
import { ModifierValues } from './proc_modifiers';
const emit = defineEmits(['cfg_update']);
const props = defineProps(['cfg', 'proc']);
const { cfg, proc } = toRefs(props);

const modifiers = reactive(new ModifierValues(1, 1, 1));

function add_process(cfg, proc_id, modifiers) {
    console.log("adding process", proc_id, modifiers, cfg);
    let result = cfg.add_process(proc_id, modifiers.duration, modifiers.input, modifiers.output);
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
  <div class="proc_buttons"><button @click="add_process(cfg, proc.id, modifiers)">Add</button></div>
  <div>modifiers</div>
  <input type="text" size="4" v-model.lazy.number="modifiers.duration"/>
  <input type="text" size="4" v-model.lazy.number="modifiers.input"/>
  <input type="text" size="4" v-model.lazy.number="modifiers.output"/>
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
