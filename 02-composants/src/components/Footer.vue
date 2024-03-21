<script setup>
    import { computed } from 'vue';

    const props = defineProps(['title']);
    // Déclaration événement qui peut être emis par le composant
    const emit = defineEmits(['updateTitle']);

    const year = computed(() => new Date().getFullYear());
</script>

<template>
    <div>
        <p v-bind="$attrs" @click="emit('updateTitle', 'Un nom')">
            {{ title }} - {{ year }}
        </p>
    </div>
</template>
