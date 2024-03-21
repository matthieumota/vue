<script setup>
    import { computed } from 'vue';

    const props = defineProps(['data']);

    const user = computed(() => props.data.user);
    const loading = computed(() => props.data.loading);
</script>

<template>
    <span v-if="loading">Chargement...</span>
    <div v-else-if="user">
        <h2>{{ user.name }}</h2>
        <address>
            <p>{{ user.address.street }}</p>
            <p>{{ user.address.suite }}</p>
            <p>{{ user.address.zipcode }} {{ user.address.city }}</p>
        </address>
    </div>
</template>

<style scoped>
    address p {
        margin: 0;
    }
</style>
