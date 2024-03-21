<script setup>
    defineProps(['term']);
    const emit = defineEmits(['deleted']);
</script>

<template>
    <p @dblclick="emit('deleted')">
        <strong>{{ term.name }} :</strong>
        {{ term.definition }}
    </p>
</template>
