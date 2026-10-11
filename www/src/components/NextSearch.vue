<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const emit = defineEmits(['cfg_update']);
const { cfg, cfg_fu, item_id } = defineProps(['cfg', 'cfg_fu', 'item_id']);

console.log("next search", cfg, cfg_fu, item_id);

const make_use = ref(null);
const searchResultsItems = ref([]);
const searchResultsProcesses = computed(
    () => {
        if (route.path.includes('make')) {
            make_use.value = "make";
            return cfg.search_processes_by_output(item_id);
        } else if (route.path.includes('use')) {
            make_use.value = "use";
            return cfg.search_processes_by_input(item_id);
        }
    }
);

</script>

<template>
    <UApp>
        <div class="search-fields">
            <div class="full-width">
                <RouterLink to="/" @click="cfg.reset()">(reset)</RouterLink>
            </div>

            <div class="full-width proc-out" style="text-align: center;">Search within {{ cfg.get_current_data_set() }}</div>

            <div>Searching for processes that {{ make_use }} {{ item_id }}</div>

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

