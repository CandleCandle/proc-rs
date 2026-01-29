<script setup>
import VueSplitter from '@rmp135/vue-splitter';
import Configure from './components/Configure.vue';
import GraphRender from './components/GraphRender.vue';
import { ref, shallowRef, triggerRef, watch, toRefs, computed } from 'vue';
import { GraphConfiguration } from 'proc-rs';

const cfg = shallowRef(new GraphConfiguration());
// The GraphConfiguration is a WASM object. There is no property
// in it that can be "watched" to trigger render changes
// this Forces an Update as it is the :key on the CurrentConfiguration.
const cfg_fu = ref(0);

// XXX This behaviour needs to run when location.hash is changed
// by something that isn't the contents of the graph config changing?
// at the moment, it's only run on actual page load. There's a forced
// reload in the main "reset" link.
if (window.location.hash) {
  let params = new URLSearchParams(window.location.hash.substring(1));
  console.log('params', params);
  // Scripts are loaded after this runs, if viz has not been
  // loaded then it errors when trying to render the graph.
  var script = document.querySelector('#viz');
  script.addEventListener('load', function() {
    if (params.has('s0')) {
      cfg.value.rehydrate(params.get('s0')).then((r) => {
        console.log('rehydrate result', r);
        handle_fold_update('get-started', !cfg.value.can_render()),
        handle_fold_update('current-configuration', cfg.value.can_render()),
        cfg_fu.value++;
      });
    } else {
      console.log("reset: no parameter");
      cfg.value.reset();
      cfg_fu.value++;
    }
  });
} else {
  console.log("reset: no fragment");
  cfg.value.reset();
  cfg_fu.value++;
}

function handle_cfg_update() {
    console.log("A handle_cfg_update");
    handle_fold_update('get-started', !cfg.value.can_render());
    handle_fold_update('current-configuration', cfg.value.can_render());
    let seialised = cfg.value.dehydrate();
    console.log('serialised', seialised);
    if (seialised) {
      window.location.replace("#s0=" + seialised);
    }
    triggerRef(cfg);
    cfg_fu.value++;
}

const folds = ref({
  'get-started': !cfg.value.can_render(),
  'current-configuration': cfg.value.can_render(),
});

function handle_fold_update(event_or_id, forced) {
  console.log("fold update 1", event_or_id, forced, folds.value, event_or_id);
  let name = null;
  if (event_or_id.target) {
    name = event_or_id.target.id;
  } else {
    name = event_or_id;
  }
  if ((typeof forced) != 'undefined' && forced != null) {
    folds.value[name] = forced;
  } else {
    folds[name] = !folds[name];
  }
  console.log("fold update 2", name, forced, folds.value, event_or_id);
}

</script>

<template>
  <header>
    <h1><a href="#" onclick="window.location.assign('#'); window.location.reload()">Process Calculator</a></h1>
  </header>
  <br />
  <main>
    <vue-splitter>
      <template #left-pane>
        <Configure :cfg="cfg" :cfg_fu="cfg_fu" :folds="folds" @cfg_update="handle_cfg_update" @fold_update="handle_fold_update" />
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
