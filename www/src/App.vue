<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import VueSplitter from '@rmp135/vue-splitter';
import { stuff } from 'proc-rs';

</script>

<template>
  <header>
    <h1>Some form of title</h1>
    <br />
    Rusty api call {{ stuff("thing 2") }}
  </header>
  <br />
  <main>
    <vue-splitter>
      <template #left-pane>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium risus quis mattis cursus. Etiam justo tortor, rutrum at tristique eget, laoreet et ex. Praesent varius metus a risus elementum, a feugiat urna finibus. Vivamus vulputate lacinia risus nec vulputate. Mauris bibendum consequat quam, nec consectetur turpis.  Aenean hendrerit turpis id nisi porttitor euismod. Vivamus ante nibh, lacinia eget imperdiet non, fermentum sed enim. Etiam vel risus ut felis venenatis tristique eu eget mauris. Suspendisse feugiat ligula at turpis efficitur auctor. Nulla lobortis nisi at quam gravida dignissim. Sed sit amet aliquam erat. Quisque dictum pellentesque sodales. Nam nec vestibulum lectus, ac mattis ligula.
          <br /><br />
          Praesent quam est, vehicula bibendum fringilla id, ultrices vel velit. Vivamus vel orci sapien. Proin orci urna, malesuada at nulla in, feugiat commodo quam. Proin eget laoreet dolor, id eleifend dolor. Nam eget vestibulum ex, ut rhoncus diam. Nulla porta posuere ultrices. Nunc dictum venenatis commodo. Cras metus enim, ultrices eget felis vel, venenatis malesuada eros.
          <br /><br />
          Vestibulum rhoncus arcu finibus leo maximus congue. Praesent at accumsan diam, eget dignissim enim. Fusce aliquet nisl vel ligula sagittis pulvinar in eu augue. Praesent ac mi tincidunt, lobortis libero a, lacinia mauris. Nulla id ligula at justo porta ultrices. Suspendisse maximus metus eros, sed ornare sem fermentum et.  Mauris et mi nec purus interdum accumsan. Pellentesque semper ipsum ut lorem aliquet scelerisque. Vivamus blandit et nibh at varius. Aenean vitae congue risus, et pretium ipsum. Etiam ac condimentum neque. Mauris mi purus, feugiat id condimentum sit amet, faucibus sed neque. Nullam faucibus fermentum suscipit. Duis ut dolor rutrum, molestie augue et, venenatis orci. Etiam non odio eleifend, auctor enim vitae, consectetur mi. In consectetur aliquam blandit.
          <br /><br />
          Donec accumsan lectus ac enim pretium cursus. Nullam elementum iaculis tortor in accumsan. Pellentesque scelerisque rutrum nisl, non eleifend erat. Proin fermentum consectetur lacus a facilisis. Curabitur sed sodales urna. Pellentesque fermentum arcu metus, vitae faucibus lacus commodo ac. Ut et fermentum est, at venenatis dolor. Proin dapibus odio magna, ut rutrum diam fringilla sit amet.
          <br /><br />
          Morbi pharetra vitae est vitae pretium. Curabitur blandit sagittis ante. Duis mollis volutpat ipsum vel mollis.  Nullam tortor nisl, efficitur a vestibulum at, volutpat euismod nisi. Aliquam bibendum luctus turpis sed placerat. Pellentesque quis lacus ut orci sodales pulvinar. Nullam elementum id purus sit amet molestie.  Maecenas cursus, ipsum id viverra congue, turpis nisi elementum arcu, sed rhoncus mauris velit a nisi. Nam pellentesque, magna vehicula facilisis vulputate, elit ligula elementum orci, sit amet consectetur velit odio a mi.
        </div>
      </template>
      <template #right-pane>
        <div>
          Fusce dapibus egestas neque, vel ultrices sem scelerisque non. Proin finibus massa ligula, ut laoreet justo elementum et. Curabitur lacinia malesuada ipsum at dictum. Suspendisse eu faucibus elit, eu ullamcorper diam.  Nam arcu justo, fermentum id nibh nec, pellentesque consectetur libero. Maecenas et urna quis quam vehicula ornare. Quisque nec magna non ante consequat iaculis non vitae ante. Nullam congue quam nunc, quis suscipit dolor tempor vel.
          <br /><br />
          Maecenas finibus porta nulla vel dictum. Pellentesque luctus ullamcorper felis ac posuere. Vestibulum a pharetra neque, ornare scelerisque nibh. Sed volutpat nisl ligula, ac ullamcorper arcu varius id. Donec tempus quam ut ex finibus, eu dictum nunc placerat. Aenean tincidunt lacinia volutpat. Fusce neque quam, tincidunt eget erat vitae, molestie ornare lectus. Duis ac turpis libero. Aliquam libero erat, semper vel dui in, sodales luctus elit.
          <br /><br />
          Donec sapien ipsum, bibendum ut nibh quis, pretium iaculis mauris. Sed hendrerit id augue vel ullamcorper.  Integer ac sapien sapien. Quisque eu elit nec enim commodo eleifend. Donec finibus ornare rutrum. Etiam sed nulla luctus, ornare felis vitae, elementum sem. Cras pretium lacus nec magna sodales, non imperdiet justo euismod. Praesent auctor lacus et dui bibendum blandit. Nunc consequat, ligula sit amet ullamcorper dignissim, diam diam convallis turpis, et consequat diam erat in mauris.
          <br /><br />
          Suspendisse interdum risus nec sem maximus convallis id vel dui. Nullam tincidunt, nisi in pulvinar volutpat, risus lorem suscipit ipsum, gravida blandit ex erat tincidunt arcu. Duis nec tempor sem. Sed pulvinar eros ut enim condimentum hendrerit. Phasellus lectus mi, consectetur sed tellus a, placerat maximus elit. Pellentesque neque ante, dignissim et purus eget, aliquet accumsan arcu. Aliquam sed lectus enim.
        </div>
      </template>
    </vue-splitter>
  </main>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

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
    display: flex;
    place-items: center stretch;
    /* padding-right: calc(var(--section-gap) / 2); */
  }
  main {
    display: flex;
    place-items: center stretch;
    /* padding-right: calc(var(--section-gap) / 2); */
  }
  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
