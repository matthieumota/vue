<script setup>
    import { ref } from 'vue';

    const props = defineProps(['start', 'max']);
    const emit = defineEmits(['increment']);

    const count = ref(parseInt(props.start || 0));

    const increment = (step) => {
        count.value += step;
        emit('increment', step);
    }
</script>

<template>
    <div :class="{ max: count >= max }">
        <button @click="increment(-1)" v-if="count > 0">-</button>
        <span>{{ count }}</span>
        <button @click="increment(1)" v-if="!max || count < max">+</button>
    </div>
</template>

<style scoped>
    .max {
        background-color: red;
    }
</style>
