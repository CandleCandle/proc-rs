<script setup>

import { ref, shallowRef, triggerRef } from 'vue';
import { GraphConfiguration } from 'proc-web';
import { useRouter } from 'vue-router';

const emit = defineEmits(['cfg_update']);
const router = useRouter();

const cfg = shallowRef(new GraphConfiguration());
// The GraphConfiguration is a WASM object. There is no property
// in it that can be "watched" to trigger render changes
// this Forces an Update as it is the :key
const cfg_fu = ref(0);

function handle_cfg_update() {
    console.log('Main handle_cfg_update');
    let dehydrated = cfg.value.dehydrate();
    console.log("dehydrated", dehydrated);
    router.push('#s0=' + encodeURIComponent(dehydrated));
    triggerRef(cfg); // XXX still needed? does it replace the cfg_fu mess?
    cfg_fu.value++;
}

const first_load = ref(true);

console.log(cfg, cfg_fu, first_load);

async function redirect_first_load() {
    let params = new URLSearchParams(window.location.hash.substring(1));
    console.log('params', params, 'cfg', cfg, 'first load', first_load);
    if (params.has('s0')) {
        await cfg.value.rehydrate(params.get('s0'))
        .then((r) => {
            console.log('rehydrate result', r, cfg);
        })
        .then(() => first_load.value = true)
        .then(() => {
            console.log('cfg can render', cfg.value.can_render(), 'cfg current data set', cfg.value.get_current_data_set);
            if (cfg.value.can_render()) {
                router.replace({'path': '/graph', 'hash': '#s0=' + encodeURIComponent(params.get('s0'))});
            } else if (cfg.value.get_current_data_set()) {
                router.replace({'path': '/search', 'hash': '#s0=' + encodeURIComponent(params.get('s0'))});
            } else {
                router.push('/')
            }
        })
        .catch(e => {
            router.replace('/');
        }
        );
    } else {
        console.log("resetting");
        cfg.value.reset();
    }
}

await redirect_first_load();

</script>

<template>
    <Suspense>
        <RouterView @cfg_update="handle_cfg_update()" :cfg="cfg" :cfg_fu="cfg_fu" />
    </Suspense>
</template>

<style>

</style>
