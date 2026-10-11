<script setup>
import { ref, watch, toRefs } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const { cfg, item } = defineProps(['cfg', 'item']);
const emit = defineEmits(['cfg_update']);

const requirement_value = ref("1");

function add_requirement(cfg, item_id, value) {
    console.log("adding requirement", item_id, value, cfg);
    if (value != null && value.length > 0) {
        cfg.add_requirement(item_id, value);
        emit('cfg_update');
        router.push('/graph#s0=' + encodeURIComponent(cfg.dehydrate()));
    } else {
        console.log("attempt to add a requirement without a value, was: ", value);
    }
}

function add_import_export(cfg, item_id) {
    console.log("adding import/export", item_id, cfg);
    cfg.add_import_export(item_id);
    emit('cfg_update');
    router.push('/graph#s0=' + encodeURIComponent(cfg.dehydrate()));
}

</script>


<template>
    <UTooltip :text="'id: ' + item.id">
    <div>{{ item.display }}</div>
    </UTooltip>

    <div class="grid grid-cols-2">
        <UFormField name="requirement_value">
            <UInput v-model="requirement_value" />
        </UFormField>
        <UFormField>
            <UButton @click="add_requirement(cfg, item.id, requirement_value)">Requirement</UButton>
        </UFormField>
    </div>
    <UFormField>
        <UButton @click="add_import_export(cfg, item.id)">Import/Export</UButton>
    </UFormField>
</template>


<style scoped>

</style>
