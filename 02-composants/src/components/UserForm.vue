<script setup>
    import { computed } from 'vue';

    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

    const createObject = (field) => ({
        get() {
            return props.modelValue[field]
        },
        set(value) {
            emit('update:modelValue', { ...props.modelValue, [field]: value })
        }
    })

    const name = computed(createObject('name'))
    const firstname = computed(createObject('firstname'))
</script>

<template>
    <input type="text" v-model="name">
    <input type="text" v-model="firstname">
</template>
