<script setup>
import { ref, watch } from 'vue';
const emit = defineEmits(['update_value']);
const { current, modifier_style } = defineProps(['current', 'modifier_style']);

const cur = ref(current);
watch(cur, v => {
    emit('update_value', v)
});

let lead = null;
let trail = null;
switch(modifier_style) {
    case 'Multiplier':
        lead = '';
        trail = '';
        break;
    case 'Percent':
        lead = '';
        trail = '%';
        break;
    case 'PercentAddition':
        lead = '+';
        trail = '%';
        break;
};

</script>

<template>
    <UApp>
        <UTooltip :text="'modifier: ' + cur">
            <span>
                {{ lead }}<UInput style="width: 4em" placeholder="modifier" v-model="cur" min="3" max="5"/>{{ trail }}
            </span>
        </UTooltip>
    </UApp>
</template>

<style scoped>

</style>
