<script setup>
// import { ref } from 'vue';
const { active_proc, cfg } = defineProps(['active_proc', 'cfg']);
const proc = active_proc.process;
// const requirement_value = ref(null);
console.log("active_proc from CCP", active_proc);
</script>


<template>
    <div id="name">
      {{ proc.display }} ({{ proc.id }})
    </div>
    <div>
      {{ proc.duration }}s
    </div>
    <div id="in">
      <div v-for="input in proc.inputs" class="proc_io">
        <div>{{ input.quantity }}</div>
        <div>{{ input.item.display }} ({{ input.item.id }})</div>
      </div>
    </div>
    <div id="out">
      <div v-for="output in proc.outputs" class="proc_io">
        <div>{{ output.quantity }}</div>
        <div>{{ output.item.display }} ({{ output.item.id }})</div>
      </div>
    </div>
    <div class="proc_buttons"><button @click="remove_process(cfg, proc.id)">Remove</button></div>
    <div>modifiers</div>
    <div>{{ active_proc.duration_multiplier }}</div>
    <div>{{ active_proc.inputs_multiplier }}</div>
    <div>{{ active_proc.outputs_multiplier }}</div>
  <hr class="proc_fw"/>
</template>


<style scoped>


</style>
