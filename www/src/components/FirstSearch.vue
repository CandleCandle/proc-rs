<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const emit = defineEmits(['cfg_update']);
const { cfg, cfg_fu } = defineProps(['cfg', 'cfg_fu']);


const searchResultsItems = ref([]);
const searchItem = ref('');
const searchResultsProcesses = ref([]);
const searchProcess = ref('');


watch(searchItem, (value) => {
    console.log("Item search for", value);
    // TODO add debounce
    if (value.length >= 3) {
        searchResultsItems.value = cfg.search_items(value);
        console.log("search results items", searchResultsItems);
    } else if (value.length == 0) {
        searchResultsItems.value = [];
    }
});

watch(searchProcess, (value) => {
    console.log("Process search for", value);
    // TODO add debounce
    if (value.length >= 3) {
        searchResultsProcesses.value = cfg.search_processes(value);
        console.log("search results processes", searchResultsProcesses);
    } else if (value.length == 0) {
        searchResultsProcesses.value = [];
    }
});

function handle_cfg_update() {
    emit('cfg_update');
}

function add_process(cfg, proc_id, factory_id, modifiers) {
    cfg.add_process(proc_id, factory_id, modifiers.duration, modifiers.input, modifiers.output);
    router.push('/graph#s0=' + encodeURIComponent(cfg.dehydrate()));
}

</script>

<template>
    <UApp>
        <div class="search-fields">
            <div class="full-width">
                <RouterLink to="/" @click="cfg.reset()">(reset)</RouterLink>
            </div>

            <div class="full-width proc-out" style="text-align: center;">Search within {{ cfg.get_current_data_set() }}</div>

            <UForm :state="searchItem" class="space-y-4 proc-in">
                <UFormField label="Item Search" name="item">
                    <UInput placeholder="item name or id" v-model="searchItem" />
                </UFormField>
            </UForm>

            <UForm :state="searchProcess" class="space-y-4 proc-out">
                <UFormField label="Process Search" name="process">
                    <UInput placeholder="process name or id" v-model="searchProcess" />
                </UFormField>
            </UForm>

        </div>

        <USeparator color="primary" v-if="searchResultsItems.length > 0 || searchResultsProcesses.length > 0" label="Results" />

        <SearchResults :cfg="cfg" :cfg_fu="cfg_fu" :search_results_processes="searchResultsProcesses" :search_results_items="searchResultsItems" />

    </UApp>
</template>

<style>


.proc {
    display: grid;
    grid-template-columns: auto auto auto 0fr;
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

.grid_fw {
    grid-column-start: 1;
    grid-column-end: span 4;
    /* place-items: center stretch; */
}

.search-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}


</style>

