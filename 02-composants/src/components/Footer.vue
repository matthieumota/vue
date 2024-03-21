<script setup>
    import { computed } from 'vue';

    const props = defineProps(['title']);
    // Déclaration événement qui peut être emis par le composant
    const emit = defineEmits(['updateTitle']);

    const year = computed(() => new Date().getFullYear());
</script>

<template>
    <p @click="emit('updateTitle', 'Un nom')">
        {{ title }} - {{ year }}
    </p>
</template>
