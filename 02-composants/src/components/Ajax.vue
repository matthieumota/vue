<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';

    const users = ref([]);
    const loading = ref(true);
    const hasError = ref(false);

    onMounted(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            users.value = response.data;
        }).catch(error => {
            hasError.value = true;
        }).finally(() => setTimeout(() => loading.value = false, 500));
    });

    onMounted(async () => {
        try {
            users.value = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
        } catch (error) {
            hasError.value = true;
        }

        setTimeout(() => loading.value = false, 500);
    });
</script>

<template>
    <p v-if="hasError && !loading">Désolé, l'API n'est pas disponible</p>

    <ul v-if="!loading && !hasError">
        <li v-for="user in users" :key="user.id">
            {{ user.name }} ({{ user.email }})
        </li>
    </ul>

    <span v-if="loading">Chargement...</span>
</template>
