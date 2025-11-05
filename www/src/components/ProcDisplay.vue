<script setup>
import { reactive, ref, computed, watch } from 'vue';
import { ModifierValues } from './proc_modifiers';
import { Collapse } from 'vue-collapsed';
const emit = defineEmits(['cfg_update']);
/**
 * cfg: wasm interface object
 * proc: bare process
 * active_proc: active process; contains factory selection and extra modifiers
 * emit_on_change: various fields need to trigger a cfg updatesome use-cases don't want to continually trugger updates.
 */
let { cfg, proc, active_proc, emit_on_change } = defineProps(['cfg', 'proc', 'active_proc', 'emit_on_change']);
let active_process = active_proc;
if ((typeof active_proc) == 'undefined') {
    active_process = {
        process: proc,
        duration_multiplier: 1,
        inputs_multiplier: 1,
        outputs_multiplier: 1,
        factory: {
            id: null,
        }
    }
}
let process = active_process.process
console.log('fac for proc', process, active_proc);
if ((typeof active_proc) != 'undefined') {
    process = active_proc.process;
}
console.log('fac for proc 2', process, active_proc);





const modifiers = reactive(new ModifierValues(
    active_process.duration_multiplier,
    active_process.inputs_multiplier,
    active_process.outputs_multiplier,
));
const modifiersAreExpanded = ref(false);

console.log('fac for proc', process.id);

const factories_for_proc = computed(() => cfg.factories_for_process(process.id));
const factory_id = computed({
  get() {
    if (active_process.factory.id != null) return active_process.factory.id;
    if (factories_for_proc.value.length > 0) {
      return factories_for_proc.value[0].id;
    }
  },
  set(value) { // fills the role of the "watch" function for "factory_id"
    factory_id_w.value = value;
    console.log(value, process.id, factories_for_proc.value, cfg.factories_for_process(process.id));
    if (emit_on_change) emit('cfg_update');
  }
});

watch(modifiers, (value) => {
  console.log("modifiers changed", process.id, value, Number(value.duration), Number(value.input), Number(value.output));
  if (emit_on_change) {
    cfg.update_modifiers(process.id, factory_id.value, Number(value.duration), Number(value.input), Number(value.output));
    emit('cfg_update');
  }
});

</script>

<template>
  <div id="name" v-tooltip="'id: ' + process.id">
    {{ process.display }}
  </div>
  <div>
    {{ process.duration }}s
  </div>
  <div id="in">
    <div v-for="input in process.inputs" class="proc_io">
      <div>{{ input.quantity }}</div>
      <div v-tooltip="'id: ' + input.item.id">{{ input.item.display }}</div>
    </div>
  </div>
  <div id="out">
    <div v-for="output in process.outputs" class="proc_io">
      <div>{{ output.quantity }}</div>
      <div v-tooltip="'id: ' + output.item.id">{{ output.item.display }}</div>
    </div>
  </div>
  <div class="proc_buttons">
    <slot name="action_button" :factory_id="factory_id" :modifiers="modifiers"></slot>
</div>
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
