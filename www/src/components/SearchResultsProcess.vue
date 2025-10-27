<script setup>
import { reactive, ref, computed } from 'vue';
import { ModifierValues } from './proc_modifiers';
import { Collapse } from 'vue-collapsed';
const emit = defineEmits(['cfg_update']);
const { cfg, proc } = defineProps(['cfg', 'proc']);

const modifiers = reactive(new ModifierValues(1, 1, 1));

function add_process(cfg, proc_id, factory_id, modifiers) {
    console.log("adding process", proc_id, modifiers, cfg);
    let result = cfg.add_process(proc_id, factory_id, modifiers.duration, modifiers.input, modifiers.output);
    console.log("add process result", result, cfg, cfg.get_processes());
    emit('cfg_update');
}

const factories_for_proc = computed(() => cfg.factories_for_process(proc.id));
const factory_id_w = ref(null);
const factory_id = computed({
  get() {
    if (factory_id_w.value != null) return factory_id_w.value;
    if (factories_for_proc.value.length > 0) {
      return factories_for_proc.value[0].id;
    }
  },
  set(value) { // fills the role of the "watch" function for "factory_id"
    factory_id_w.value = value;
    console.log(value, proc.id, factories_for_proc.value, cfg.factories_for_process(proc.id));
  }
});
console.log("found factories for process", proc.id, factory_id.value, factories_for_proc.value);

const modifiersAreExpanded = ref(false);

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
  <div class="proc_buttons"><button @click="add_process(cfg, proc.id, factory_id, modifiers)">Add</button></div>
  <div>modifiers <button @click="modifiersAreExpanded = !modifiersAreExpanded">{{ modifiersAreExpanded ? '\\/' : '>' }}</button></div>
  <Collapse class="input_options" :when="modifiersAreExpanded">
    <input type="text" size="4" v-model.lazy.number="modifiers.duration"/>
  </Collapse>
  <Collapse class="input_options" :when="modifiersAreExpanded">
    <input type="text" size="4" v-model.lazy.number="modifiers.input"/>
  </Collapse>
  <Collapse class="input_options" :when="modifiersAreExpanded">
    <input type="text" size="4" v-model.lazy.number="modifiers.output"/>
  </Collapse>
  <Collapse class="input_options" :when="modifiersAreExpanded">
    <span>factory</span>
  </Collapse>
  <Collapse class="factory_select" :when="modifiersAreExpanded">
    <select v-model="factory_id">
      <option disabled value="">Select a factory type</option>
      <option v-for="v in factories_for_proc" :key="v.id" :value="v.id" >{{ v.display }}</option>
    </select>
  </Collapse>
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
    grid-row-end: span 3;
    place-items: center stretch;
}
.factory_select {
    grid-column-start: 2;
    grid-column-end: span 3;
    place-items: center stretch;
}
.proc_io {
    display: grid;
    grid-template-columns: 0fr 1fr;
    place-items: center stretch;
    gap: 10px;
}

</style>
