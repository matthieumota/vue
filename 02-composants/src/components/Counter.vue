<script setup>
    import { computed, ref } from 'vue';

    const props = defineProps(['start', 'max']);
    const emit = defineEmits(['increment']);

    const start = computed(() => parseInt(props.start || 0));
    const hasMax = computed(() => props.max && count.value >= parseInt(props.max));

    const count = ref(start.value);

    const increment = (step) => {
        count.value += step;
        emit('increment', step);
    }
</script>

<template>
    <div :class="{ max: hasMax }">
        <button @click="increment(-1)" v-if="count > 0">-</button>
        <span>{{ count }}</span>
        <button @click="increment(1)" v-if="!hasMax">+</button>
    </div>
</template>

<style scoped>
    .max {
        background-color: red;
    }
</style>
