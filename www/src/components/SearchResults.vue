<script setup>
import SearchResultsItem from './SearchResultsItem.vue';
import SearchResultsProc from './SearchResultsProc.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const emit = defineEmits(['cfg_update']);
const { cfg, cfg_fu } = defineProps(['cfg', 'cfg_fu', 'search_results_items', 'search_results_processes']);

function handle_cfg_update() {
    emit('cfg_update');
}

function add_process(cfg, proc_id, factory_id, modifiers) {
    cfg.add_process(proc_id, factory_id, modifiers.duration, modifiers.input, modifiers.output);
    router.push('/graph#s0=' + encodeURIComponent(cfg.dehydrate()))
}

</script>

<template>
    <UApp>
        <div class="grid grid-cols-3 justify-start">
            <SearchResultsItem @cfg_update="handle_cfg_update" v-for="item in search_results_items" :item="item" :cfg="cfg" />
        </div>

        <div class="proc">
            <div v-if="search_results_processes.length > 0" class="proc-in">Inputs</div>
            <div v-if="search_results_processes.length > 0" class="proc-duration">Duration</div>
            <div v-if="search_results_processes.length > 0" class="proc-out">Outputs</div>
            <div />
            <SearchResultsProc v-for="proc in search_results_processes" :proc="proc" :cfg="cfg" :id_prefix="'search'">
                <template #action_button="{ factory_id, modifiers }">
                    <UButton @click="add_process(cfg, proc.id, factory_id, modifiers)">Add</UButton>
                </template>
            </SearchResultsProc>
        </div>
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

