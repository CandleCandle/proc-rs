<script setup>
const emit = defineEmits(['cfg_update']);
const { cfg, cfg_fu } = defineProps(['cfg', 'cfg_fu']);


console.log('factory list', cfg.get_processes()
    .map(p => p.factory)
    .map(f => f.display)
);
let factory_counts = cfg.get_processes()
    .map(p => p.factory)
    .reduce((acc, f) => {
        if (!!!acc[f.display]) {
            acc[f.display] = {
                count: 0,
                factory: f
            }
            acc[f.display].count++
        }
        return acc;
    }, {})
    ;
console.log('factory counts', factory_counts);


</script>

<template>
    <UApp>
        <div class="factory-table">
            <template v-for="f in factory_counts">
                <div>{{ f.count }}</div>
                <div>{{ f.factory.display }}</div>
            </template>
        </div>
    </UApp>
</template>

<style scoped>

.factory-table {
    display: grid;
    grid-template-columns: 0fr 1fr;
    gap: 10px;
}

</style>
