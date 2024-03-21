<script setup>
    import AjaxUser from './AjaxUser.vue';
    import axios from 'axios';
    import { onMounted, ref, watch } from 'vue';

    const users = ref([]);
    const loading = ref(true);
    const hasError = ref(false);

    const selected = ref(null);

    const loadUser = (id) => {
        if (selected.value === id) {
            return selected.value = null;
        }

        selected.value = id;
    }

    const search = ref('');

    const debounce = (func, timeout = 500, ref) => {
        let timer;
        let lastSearch = ref.value;

        return () => {
            clearTimeout(timer)
            if (lastSearch !== ref.value) {
                timer = setTimeout(() => {
                    lastSearch = ref.value;
                    func();
                }, timeout)
            }
        }
    }

    watch(search, debounce(() => fetchUsers(), 500, search));

    const fetchUsers = () => {
        loading.value = true;

        axios.get(`https://jsonplaceholder.typicode.com/users?q=${search.value}`).then(response => {
            users.value = response.data;
        }).catch(error => {
            hasError.value = true;
        }).finally(() => setTimeout(() => loading.value = false, 500));
    }

    onMounted(() => {
        fetchUsers();
    });

    onMounted(() => {
        /* axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            users.value = response.data;
        }).catch(error => {
            hasError.value = true;
        }).finally(() => setTimeout(() => loading.value = false, 500)); */
    });

    onMounted(async () => {
        /* try {
            users.value = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
        } catch (error) {
            hasError.value = true;
        }

        setTimeout(() => loading.value = false, 500); */
    });
</script>

<template>
    <p v-if="hasError && !loading">Désolé, l'API n'est pas disponible</p>

    <div>
        <input type="text" placeholder="Filtrer..." v-model="search">
        <ul v-if="!loading && !hasError">
            <li v-for="user in users" :key="user.id" @click="loadUser(user.id)">
                {{ user.name }} ({{ user.email }})
            </li>
        </ul>
    </div>

    <span v-if="loading">Chargement...</span>

    <AjaxUser :id="selected" v-if="selected" />
</template>

<style scoped>
    li {
        cursor: pointer;
    }
</style>
