<script setup>
import { watch, reactive, ref, computed } from 'vue';
import { ModifierValues } from '../proc_modifiers';
import { Collapse } from 'vue-collapsed';

const emit = defineEmits(['cfg_update']);
const { active_proc, cfg } = defineProps(['active_proc', 'cfg']);
const proc = active_proc.process;


const modifiers = reactive(new ModifierValues(active_proc.duration_multiplier, active_proc.inputs_multiplier, active_proc.outputs_multiplier));
const modifiersAreExpanded = ref(false);

const factories_for_proc = computed(() => cfg.factories_for_process(proc.id));
const factory_id_w = ref(null);
const factory_id = computed({
  get() {
    if (factory_id_w.value == null) return active_proc.factory.id;
    if (factory_id_w.value != null) return factory_id_w.value;
  },  set(value) { // fills the role of the "watch" function for "factory_id"
    factory_id_w.value = value;
    cfg.update_modifiers(proc.id, factory_id.value, Number(modifiers.duration), Number(modifiers.input), Number(modifiers.output));
    console.log(value, proc.id, factories_for_proc.value, cfg.factories_for_process(proc.id));
    emit('cfg_update');
  }
});

function remove_process(cfg, id) {
  console.log("removing", id);
  cfg.remove_process(id);
  emit('cfg_update');
}

watch(modifiers, (value) => {
  console.log("modifiers changed", proc.id, value, Number(value.duration), Number(value.input), Number(value.output));
  cfg.update_modifiers(proc.id, factory_id.value, Number(value.duration), Number(value.input), Number(value.output));
  emit('cfg_update');
});


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
  <div class="proc_buttons"><button @click="remove_process(cfg, proc.id)">Remove</button></div>
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
  <hr class="proc_fw"/>
</template>


<style scoped>

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

</style>
