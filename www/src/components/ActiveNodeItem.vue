<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { ActiveNodeWrapper } from './active_node_wrapper.js';

const emit = defineEmits(['cfg_update', 'active_node']);
const { cfg, cfg_fu, node } = defineProps(['cfg', 'cfg_fu', 'node']);
const router = useRouter();

const item_mode = computed({
    get() {
        return node.mode();
    },
    set(value) {
        console.log("item switched to", value, node.id(), requirement_value.value);
        let updated = null;
        switch (value) {
            case 'requirement':
                cfg.remove_import_export(node.id());
                updated = cfg.update_requirement(node.id(), requirement_value.value);
                emit('active_node', ActiveNodeWrapper.create(ActiveNodeWrapper.ItemRequirement, updated));
                break;
            case 'io':
                cfg.remove_requirement(node.id());
                updated = cfg.add_import_export(node.id());
                emit('active_node', ActiveNodeWrapper.create(ActiveNodeWrapper.ItemIo, updated));
                break;
            case 'intermediate':
                cfg.remove_requirement(node.id());
                cfg.remove_import_export(node.id());
                emit('active_node', node.into_defaulted());
                break;
        }
        emit('cfg_update');
    }
});

const options = [
    {
        'label': 'Import/Export',
        'value': 'io',
        // 'class': 'w-20',
    },
    {
        'label': 'Intermediate',
        'value': 'intermediate',
        // 'class': 'w-20',
    },
    {
        'label': 'Requirement',
        'value': 'requirement',
        // 'class': 'w-20',
    },
];
const requirement_value = computed({
    get() {
        return node.get_requirement_value();
    },
    set(val) {
        if (val.length > 0) {
            let n = Number(val);
            console.log("requirement value updated", val);
            if (Number.isFinite(n)) {
                cfg.update_requirement(node.id(), val);
                emit('cfg_update');
            }
        }
    }
});

function search_item_makes(item_id) {
    router.push('/make/' + encodeURIComponent(item_id) + '#s0=' + encodeURIComponent(cfg.dehydrate()));
}

function search_item_uses(item_id) {
    router.push('/use/' + encodeURIComponent(item_id) + '#s0=' + encodeURIComponent(cfg.dehydrate()));
}

</script>

<template>
    <UApp>
        <div style="display: none">{{ cfg_fu }}</div>
        <div class="layout">
            <div>{{ node.display() }}</div>
            <UFormField>
                <URadioGroup
                    indicator="hidden"
                    orientation="horizontal"
                    variant="table"
                    default-value="intermediate"
                    :items="options"
                    v-model="item_mode"
                    size="xs"
                />
            </UFormField>
            <UTooltip text="How many per (units) do you require?">
                <UFormField v-if="item_mode == 'requirement'">
                    <UInput v-model="requirement_value"/>
                </UFormField>
            </UTooltip>
            <div>
                <UTooltip text="Search for processes that make this item">
                    <UButton size="xs" @click="search_item_makes(node.id())">What makes this?</UButton>
                </UTooltip>&nbsp;
                <UTooltip text="Search for processes that use this item">
                    <UButton size="xs" @click="search_item_uses(node.id())">What uses this?</UButton>
                </UTooltip>
            </div>
        </div>
    </UApp>
</template>

<style scoped>

.layout {
    display: grid;
    place-items: center
}

</style>
