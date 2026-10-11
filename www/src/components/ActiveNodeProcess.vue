<script setup>
import { computed, ref, watch } from 'vue';
import { ModifierValues } from './proc_modifiers';

const emit = defineEmits(['cfg_update', 'active_node']);
const { cfg, cfg_fu, node } = defineProps(['cfg', 'cfg_fu', 'node']);

const current_data_config = cfg.get_current_data_set_config();
console.log('cdc', current_data_config);

class ModifiedProcessWrapper {
    constructor(mod_proc) {
        this.mod_proc = mod_proc;
    }
    input_quantity_for(id) {
        return this.mod_proc.inputs.find(n => n.item.id === id).quantity;
    }
    output_quantity_for(id) {
        return this.mod_proc.outputs.find(n => n.item.id === id).quantity;
    }
    duration() {
        return this.mod_proc.duration;
    }
}

function rebuild_modifiers(cdc, nde) {
    return ModifierValues.create(
        cdc.modifier_style,
        nde.active_process.duration_modifier,
        nde.active_process.inputs_modifier,
        nde.active_process.outputs_modifier
    )
}

function rebuild_modified_process(cf, nde, mod) {
    return new ModifiedProcessWrapper(cf.create_modified_process(
        nde.active_process.process.id,
        nde.active_process.factory.id,
        ...mod.to_a()
    ))
}

let modifiers = ref(rebuild_modifiers(current_data_config, node));
let modified_process = ref(rebuild_modified_process(cfg, node, modifiers.value))

const factories_for_proc = computed(() => {
    modifiers.value = rebuild_modifiers(current_data_config, node);
    modified_process.value = rebuild_modified_process(cfg, node, modifiers.value);
    return cfg.factories_for_process(node.active_process.process.id);
});

function remove_process(id) {
    console.log('removing process (from active node)', id);
    cfg.remove_process(id);
    emit('cfg_update');
}

function update_process() {
    console.log('updating process', node.active_process.process.id, node);
    let mod = modifiers.value;
    cfg.update_modifiers(
        node.active_process.process.id,
        node.active_process.factory.id,
        ...mod.to_a()
    );
    emit('cfg_update');
}

function update_input_modifier(v) {
    node.active_process.inputs_modifier = Number(v);
    modifiers.value.input = Number(v);
    modified_process.value = rebuild_modified_process(cfg, node, modifiers.value);
}

function update_duration_modifier(v) {
    node.active_process.duration_modifier = Number(v);
    modifiers.value.duration = Number(v);
    modified_process.value = rebuild_modified_process(cfg, node, modifiers.value);
}

function update_output_modifier(v) {
    node.active_process.outputs_modifier = Number(v);
    modifiers.value.output = Number(v);
    modified_process.value = rebuild_modified_process(cfg, node, modifiers.value);
}

watch(() => node.active_process.factory.id, (v) => {
    modified_process.value = rebuild_modified_process(cfg, node, modifiers.value);
});

</script>

<template>
    <UApp>
        <div style="display: none">{{ cfg_fu }}</div>
        <div>{{ node.display() }}</div>
        <div class="proc">
            <!-- inputs -->
            <div class="grid_fw">
                <USeparator color="primary" label="Inputs"/>
            </div>

            <ModifierInput
                :current="modifiers.input"
                :modifier_style="current_data_config.modifier_style"
                @update_value="update_input_modifier"/>

            <div class="proc_io">
                <template v-for="input in node.active_process.process.inputs">
                    <UTooltip :text="'Modified by all modifiers, original is ' + input.quantity + ' every ' + node.active_process.process.duration + 's'">
                        <div>{{ modified_process.input_quantity_for(input.item.id).toFixed(2) }}/s</div>
                    </UTooltip>
                    <div>{{ input.item.display }}</div>
                </template>
            </div>
            <!-- duration -->
            <div class="grid_fw">
                <USeparator color="primary" label="Duration" />
            </div>

            <ModifierInput
                :current="modifiers.duration"
                :modifier_style="current_data_config.modifier_style"
                @update_value="update_duration_modifier"/>

            <div class="proc_io">
                <UTooltip :text="'Modified by all modifiers, original is ' + node.active_process.process.duration">
                    <div>{{ modified_process.duration().toFixed(2) }}s</div>
                </UTooltip>
            </div>
            <!-- outputs -->
            <div class="grid_fw">
                <USeparator color="primary" label="Outputs" />
            </div>

            <ModifierInput
                :current="modifiers.output"
                :modifier_style="current_data_config.modifier_style"
                @update_value="update_output_modifier"/>

            <div class="proc_io">
                <template v-for="output in node.active_process.process.outputs">
                    <UTooltip :text="'Modified by all modifiers, original is ' + output.quantity + ' every ' + node.active_process.process.duration + 's'">
                        <div>{{ modified_process.output_quantity_for(output.item.id).toFixed(2) }}/s</div>
                    </UTooltip>
                    <div>{{ output.item.display }}</div>
                </template>
            </div>
            <div class="grid_fw">
                <USeparator color="primary" label="Factory" />
            </div>
            <!-- factory -->
            <div class="grid_fw grid_fw_centre">
                <USelect v-model="node.active_process.factory.id" :items="factories_for_proc" value-key="id" label-key="display" />
            </div>
            <!-- actions -->
            <div class="grid_fw">
                <USeparator color="primary"/>
            </div>
            <div class="grid_fw grid_fw_centre">
                <UButton
                        icon="i-lucide-refresh-cw"
                        color="neutral"
                        variant="ghost"
                        aria-label="Remove Process"
                        @click="update_process()"
                >Update</UButton>
                <UButton
                        icon="i-lucide-trash"
                        color="neutral"
                        variant="ghost"
                        aria-label="Remove Process"
                        @click="remove_process(node.active_process.process.id)"
                >Remove</UButton>
            </div>
            <div class="grid_fw">
                <USeparator color="primary" />
            </div>
        </div>
    </UApp>
</template>

<style scoped>

.proc {
    display: grid;
    grid-template-columns: max-content 4fr;
}

.proc_io {
    display: grid;
    grid-template-columns: auto auto;
    gap: 5px;
}

.grid_fw {
    grid-column-start: 1;
    grid-column-end: span 2;
}

.grid_fw_centre {
    justify-self: center;
}

</style>
