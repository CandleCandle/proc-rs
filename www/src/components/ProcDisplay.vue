<script setup>
import { reactive, ref, computed, watch } from 'vue';
import { ModifierValues } from './proc_modifiers';
const emit = defineEmits(['modifier_update', 'fold_update']);
/**
 * We can be passed either a `process` or an `active_process`. This means that
 * we need to compute the `active_process` so that all the rest of the logic
 * can be unified. The result of this is that almost all of the rest of the
 * data needs to also be `computed` otherwise no UI updates happen and issues
 * like the first row saying that it is process Y but after an update, the internal
 * data is process X; and then the wrong process is added to the cfg.
 *
 * various fields need to trigger a cfg update. some use-cases don't want to continually trigger updates. Either
 *
 * cfg: wasm interface object
 * proc: bare process
 * active_proc: active process; contains factory selection and extra modifiers
 */
const { cfg, proc, active_proc, folds, id_prefix } = defineProps(['cfg', 'proc', 'active_proc', 'folds', 'id_prefix']);
const active_process = computed(() => {
    if ((typeof active_proc) == 'undefined') {
        return {
            process: proc,
            duration_multiplier: 1,
            inputs_multiplier: 1,
            outputs_multiplier: 1,
            factory: {
                id: null,
            }
        };
    } else {
        return active_proc;
    }
});
const process = computed(() => {
    return active_process.value.process;
});

const modifiers_fold_id = computed(() => {
  return id_prefix + '-' + process.value.id + '-modifiers';
});

const modifiers_stash = ref(null);
const modifiers = computed({
    get() {
        console.log("modifiers get 1", active_process.value.process.id, modifiers_stash.value);
        if (modifiers_stash.value == null) {
            modifiers_stash.value = new ModifierValues(
                active_process.value.duration_multiplier,
                active_process.value.inputs_multiplier,
                active_process.value.outputs_multiplier,
            );
        }
        console.log("modifiers get 2", active_process.value.process.id, modifiers_stash.value);
        return modifiers_stash.value;
    },
});
function update_modifier(evt, field) {
  console.log('update modifier', evt, field);
  modifiers_stash.value[field] = evt.target.value;
}
watch(
  modifiers_stash,
  (value, oldvalue) => {
    if (oldvalue == null) return; // don't trigger updates on the initial render
    console.log("modifiers_stash update 1", value, modifiers_stash.value);
    modifiers_stash.value = value;
    emit('modifier_update', process.value.id, factory_id_stash.value, Number(value.duration), Number(value.input), Number(value.output));
    console.log("modifiers_stash update 2", value, modifiers_stash.value);
  },
  { deep: true }
);


const factories_for_proc = computed(() => cfg.factories_for_process(active_process.value.process.id));
// The elements are re-used when search results change
// and therefore the factory_id_stash is preserved; this
// means that if the set of potential factories change, the
// previously visible set is no longer valid.
// by checking that the proc_id is the same, it can
// detect this change and act accordingly.
// (I don't think I've quite understood the state management, I
// probably need to clone enough state, then modify the cloned state
// then finally udate using the cloned.)
const factory_id_stash = ref(null);
const proc_id_stash = ref(null);
const factory_id = computed({
  get() {
    console.log('factory_id 1', factory_id_stash.value, proc_id_stash.value, active_process.value.process.display, active_process.value.factory.id, factories_for_proc.value);
    if (factory_id_stash.value == null || active_process.value.process.id != proc_id_stash.value) {
        if (active_process.value.factory.id != null) {
            factory_id_stash.value = active_process.value.factory.id;
        } else if (factories_for_proc.value.length > 0) {
            factory_id_stash.value = factories_for_proc.value[0].id;
        }
    }
    proc_id_stash.value = active_process.value.process.id;
    console.log('factory_id 2', factory_id_stash.value, proc_id_stash.value, active_process.value.factory.id, factories_for_proc.value);
    return factory_id_stash.value;
  },
  set(value) { // fills the role of the "watch" function for "factory_id"
    console.log('factory_id change 1', value, factory_id_stash.value, process.value.id, factories_for_proc.value, cfg.factories_for_process(process.value.id));
    factory_id_stash.value = value;
    emit('modifier_update', active_process.value.process.id, value, Number(modifiers_stash.value.duration), Number(modifiers_stash.value.input), Number(modifiers_stash.value.output));
    console.log('factory_id change 2', value, factory_id_stash.value, process.value.id, factories_for_proc.value, cfg.factories_for_process(process.value.id));
  }
});

// const modifiersAreExpanded = computed({
//   get() {
//     return folds[modifiers_fold_id];
//   },
// });
const modifiersAreExpanded = ref(false);

function toggle_modifiers(evt) {
  // console.log(evt);
  modifiersAreExpanded.value = evt.newState == 'open';
  // emit('fold_update', evt);
}

</script>

<template>
  <div id="name" v-tooltip="'id: ' + active_process.process.id">
    {{ process.display }}
  </div>
  <div>
    {{ process.duration }}s
  </div>
  <div id="in">
    <div v-for="input in active_process.process.inputs" class="proc_io">
      <div>{{ input.quantity }}</div>
      <div v-tooltip="'id: ' + input.item.id">{{ input.item.display }}</div>
    </div>
  </div>
  <div id="out">
    <div v-for="output in active_process.process.outputs" class="proc_io">
      <div>{{ output.quantity }}</div>
      <div v-tooltip="'id: ' + output.item.id">{{ output.item.display }}</div>
    </div>
  </div>
  <div class="proc_buttons">
    <slot name="action_button" :factory_id="factory_id_stash" :modifiers="modifiers"></slot>
</div>
  <details :id="modifiers_fold_id" v-bind:open="modifiersAreExpanded" @toggle="toggle_modifiers($event)">
    <summary>modifiers</summary>
  </details>
  <div class="input_options" v-show="modifiersAreExpanded">
    <input type="text" size="4" @blur="update_modifier($event, 'duration')" :value="modifiers.duration"/>
  </div>
  <div class="input_options" v-show="modifiersAreExpanded">
    <input type="text" size="4" @blur="update_modifier($event, 'input')" :value="modifiers.input"/>
  </div>
  <div class="input_options" v-show="modifiersAreExpanded">
    <input type="text" size="4" @blur="update_modifier($event, 'output')" :value="modifiers.output"/>
  </div>
  <div class="input_options" v-show="modifiersAreExpanded">
    <span>factory</span>
  </div>
  <div class="factory_select" v-show="modifiersAreExpanded">
    <select v-model.lazy="factory_id">
      <option disabled value="">Select a factory type</option>
      <option v-for="v in factories_for_proc" :key="v.id" :value="v.id" >{{ v.display }}</option>
    </select>
  </div>
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
