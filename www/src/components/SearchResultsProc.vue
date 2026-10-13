<script setup>
import { ref, computed, watch } from 'vue';
import { ModifierValues } from './proc_modifiers';
const emit = defineEmits(['modifier_update']);
/**
 * We can be passed either a `process` or an `active_process`. This means that
 * we need to compute the `active_process` so that all the rest of the logic
 * can be unified. The result of this is that almost all of the rest of the
 * data needs to also be `computed` otherwise no UI updates happen and issues
 * like the first row saying that it is process Y but after an update, the internal
 * data is process X; and then the wrong process is added to the cfg.
 *
 * various fields need to trigger a cfg update. some use-cases don't want to continually
 * trigger updates. if the use case requires auto-updating, then perform the action
 * on the 'modifier_update' event
 *
 * cfg: wasm interface object
 * proc: bare process
 * active_proc: active process; contains factory selection and extra modifiers
 */
const { cfg, proc, active_proc, id_prefix } = defineProps(['cfg', 'proc', 'active_proc', 'id_prefix']);
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

const current_data_config = cfg.get_current_data_set_config();
const modifiers_stash = ref(null);
const modifiers = computed({
    get() {
        console.log("modifiers get 1", active_process.value.process.id, modifiers_stash.value);
        if (modifiers_stash.value == null) {
            modifiers_stash.value = ModifierValues.create(current_data_config.modifier_style);
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
const modifier_lead = computed(() => {
  switch (current_data_config.modifier_style) {
    case ModifierValues.Percent:
    case ModifierValues.Multiplier:
      return '';
    case ModifierValues.PercentAddition:
      return '+';

  }
})
const modifier_trail = computed(() => {
  switch (current_data_config.modifier_style) {
    case ModifierValues.Percent:
    case ModifierValues.PercentAddition:
      return '%';
    case ModifierValues.Multiplier:
      return '';

  }
})

</script>

<template>
  <USeparator color="primary" class="grid_fw" :label="process.display" />
  <div id="in" class="proc_io rejustify-end proc-in"">
    <template v-for="input in active_process.process.inputs">
      <div>{{ input.quantity }}</div>
      <div>{{ input.item.display }}</div>
    </template>
  </div>
  <div id="duration" class="rejustify-centre proc-duration">
    {{ process.duration }}s
  </div>
  <div id="out">
  <div id="out" class="proc_io rejustify-start proc-out"">
    <template v-for="output in active_process.process.outputs">
      <div>{{ output.quantity }}</div>
      <div>{{ output.item.display }}</div>
    </template>
  </div>
  </div>
  <div class="proc_buttons">
    <slot name="action_button" :factory_id="factory_id_stash" :modifiers="modifiers"></slot>
  </div>
  <div class="input_options">
    <UFormField class="rejustify-end proc-in" label="input&nbsp;modifier" orientation="horizontal">
      {{ modifier_lead }}<UInput style="width:4em" placeholder="modifier (x1)" v-model="modifiers.input" max="5"/>{{ modifier_trail }}
    </UFormField>
  </div>
  <div class="input_options">
    <UFormField class="rejustify-centre proc-duration" label="duration&nbsp;modifier" orientation="horizontal">
      <span>
        {{ modifier_lead }}<UInput style="width:4em" pplaceholder="modifier (x1)" v-model="modifiers.duration" max="5"/>{{ modifier_trail }}
      </span>
    </UFormField>
  </div>
  <div class="input_options">
    <UFormField class="rejustify-start proc-out" label="output&nbsp;modifier" orientation="horizontal">
      {{ modifier_lead }}<UInput style="width:4em" pplaceholder="modifier (x1)" v-model="modifiers.output" max="5"/>{{ modifier_trail }}
    </UFormField>
  </div>
  <div class="factory_select">
    <UFormField class="rejustify-centre" orientation="horizontal" label="Factory" name="process">
      <USelect v-model.lazy="factory_id" :items="factories_for_proc" value-key="id" label-key="display" />
    </UFormField>
  </div>

</template>

<style scoped>

.proc_io {
  display: grid;
  grid-template-columns: 0fr 1fr;
  /* grid-template-rows: 1fr 1fr; row count calculated and inserted into the in-line style. */
  place-items: center stretch;
  gap: 10px;
}

.proc-in {
  justify-self: end;
}

.proc-duration {
  justify-self: center;
}

.proc-out {
  justify-self: start;
}

.rejustify-start {
  justify-content: start;
}

.rejustify-centre {
  justify-content: center;
}

.rejustify-end {
  justify-content: end;
}

.grid_fw {
    grid-column-start: 1;
    grid-column-end: span 4;
}

.proc_buttons {
    grid-row-end: span 3;
    place-items: center stretch;
}
.factory_select {
    grid-column-start: 1;
    grid-column-end: span 3;
    place-items: center stretch;
}


</style>
