<script setup>
  import { useFetch } from '@/composables/fetch';
  import { computed, ref } from 'vue';

  const page = ref(1);
  const url = computed(() => `https://jsonplaceholder.typicode.com/users?_limit=2&_page=${page.value}`);
  const { data, loading, loadData } = useFetch(url);
</script>

<template>
  <main>
    <h1>Accueil</h1>
    {{ JSON.stringify(data) }}
    <button @click="page++">
      {{ loading ? 'Chargement...' : 'Ok' }}
    </button>
  </main>
</template>
