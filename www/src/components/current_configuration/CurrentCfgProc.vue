<script setup>
import { ref } from 'vue';
defineProps(['proc', 'cfg']);
const requirement_value = ref(null);

</script>



<template>
  <div class="proc">
    <div id="name">
      Part D (part_d)
    </div>
    <div>
      5
    </div>
    <div id="in">
      <div id="in0" class="proc_io">
        <div>Part A</div>
        <div>5</div>
      </div>
      <div id="in1" class="proc_io">
        <div>Part B</div>
        <div>3</div>
      </div>
    </div>
    <div id="out">
      <div id="out0" class="proc_io">
        <div>Part D</div>
        <div>2</div>
      </div>
    </div>
    <div>modifiers for Part D</div>
    <div>d mod</div>
    <div>i mod</div>
    <div>o mod</div>
  </div>
  <div><button @click="add_process(cfg, proc.id, duration_multiplier, inputs_multiplier, outputs_multiplier)">Add</button></div>
</template>


<style scoped>

.proc {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center stretch;
    gap: 10px;
}
.proc_io {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center stretch;
    gap: 10px;
}
</style>
