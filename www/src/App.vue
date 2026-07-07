<script setup>
import Main from './components/Main.vue';
</script>

<template>
  <header>
    <h1><a href="#" onclick="window.location.assign('#'); window.location.reload()">Process Calculator</a></h1>
  </header>
  <br />
  <main>
    <Suspense>
      <Main />
    </Suspense>
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
