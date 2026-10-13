<script setup>

// import { ref, shallowRef } from 'vue';
// import { GraphConfiguration } from 'proc-web';
import Main from './components/Main.vue'


// const cfg = shallowRef(new GraphConfiguration());
// // The GraphConfiguration is a WASM object. There is no property
// // in it that can be "watched" to trigger render changes
// // this Forces an Update as it is the :key
// const cfg_fu = ref(0);

// function handle_cfg_update() {
//     console.log('Main handle_cfg_update');
//     let seialised = cfg.value.dehydrate();
//     console.log('serialised', seialised);
//     if (seialised) {
//         window.location.replace('#s0=' + seialised);
//     }
//     triggerRef(cfg); // XXX still needed? does it replace the cfg_fu mess?
//     cfg_fu.value++;
// }

</script>

<template>
    <main>
        <Suspense>
            <Main />
        </Suspense>
    </main>
</template>

<style>

</style>
