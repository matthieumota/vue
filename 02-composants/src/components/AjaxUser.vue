<script setup>
    import axios from 'axios';
    import { onMounted, ref, watch } from 'vue';

    const props = defineProps(['id']);

    const user = ref(null);
    const loading = ref(true);

    const fetchUser = () => {
        loading.value = true;

        axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}`).then(response => {
            user.value = response.data;
        }).finally(() => setTimeout(() => loading.value = false, 500));
    }

    onMounted(fetchUser);

    watch(() => props.id, () => {
        fetchUser();
    });
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
