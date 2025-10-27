<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import VueSplitter from '@rmp135/vue-splitter';
import Configure from './components/Configure.vue';
import GraphRender from './components/GraphRender.vue';
import { ref, shallowRef, triggerRef, watch, toRefs } from 'vue';
import { GraphConfiguration } from 'proc-rs';

const cfg = shallowRef(new GraphConfiguration());
// The GraphConfiguration is a WASM object. There is no property
// in it that can be "watched" to trigger render changes
// this Forces an Update as it is the :key on the CurrentConfiguration.
const cfg_fu = ref(0);

function handle_cfg_update() {
    console.log("A handle_cfg_update");
    triggerRef(cfg);
    cfg_fu.value++;
}

</script>

<template>
  <header>
    <h1>Process Calculator</h1>
  </header>
  <br />
  <main>
    <vue-splitter>
      <template #left-pane>
        <Configure :cfg="cfg" :cfg_fu="cfg_fu" @cfg_update="handle_cfg_update()" />
      </template>
      <template #right-pane>
        <GraphRender :cfg="cfg" :cfg_fu="cfg_fu"/>
      </template>
    </vue-splitter>
  </main>

</template>

<style>
body {
  display: block;
}

:root {
    color-scheme: light dark;
    --fg: light-dark(#333, #ccc);
    --bg: light-dark(#fff, #333);
}
</style>

<style scoped>



/* header {
  line-height: 1.5;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }
  main {
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
