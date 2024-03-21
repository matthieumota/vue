<script setup>
    import { ref, useSlots } from 'vue';

    const slots = useSlots();

    const test = ref('Toto');
</script>

<template>
    <button>
        <slot v-if="slots.default" :test="test" />
        <span v-else>Par défaut</span>

        <slot name="right" />
    </button>
</template>
