<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['cfg_update']);
const { cfg, cfg_fu } = defineProps(['cfg', 'cfg_fu']);
const router = useRouter();

const data_set_id = ref('');
class DataSet {
    constructor(id, description) {
        this._id = id;
        this._description = description;
    }
    id() { return this._id; }
    description() { return this._description; }
}
const datasets = await cfg.get_data_sets()
    .then(r => {
        console.log("data sets fetched", r);
        return r.datasets.entries()
            .map(([k, v]) => new DataSet(k, k))
    })
    .then(r => {
        return r.map(d => {
            return {
                value: d.id(),
                label: d.description(),
                type: 'item',
            }
            //]
        })
    })
    .then(r => [...r])
    .catch(reason => console.log("failed data set fetch", reason));

const loading = ref(false);

console.log("data sets", datasets);

watch(data_set_id, (v) => {
    console.log("selected data set id", v);
    configure_data_set(v);
});

async function configure_data_set(id) {
    console.log("configuring data set", data_set_id);
    loading.value = true;
    await cfg.update_data_set(id)//'factorio-2.0.73-angelbob-2.0.6')
        .then(() => {
            return cfg.dehydrate();
        })
        .then((serialised) => {
            loading.value = false;
            return serialised;
        })
        .then((serialised) => router.push('/search#s0=' + encodeURIComponent(serialised)));
        }

</script>

<template>
    <UApp>
        <UTooltip text="Start here, find the game and version that you need">
            <UForm class="outer">
                <UFormField label="Select a data set" size="xl">
                    <USelect class="field" v-model="data_set_id" :items="datasets" :content="{'align': 'center'}" />
                </UFormField>
            </UForm>
            <span>{{ loading ? "... loading ..." : ""  }}</span>
        </UTooltip>
    </UApp>
</template>

<style>

.outer {
    display: grid;
    place-items: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 20em;
}
.field {
    min-width: 20em;
}

</style>

