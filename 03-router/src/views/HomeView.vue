<script setup>
  import { useFetch } from '@/composables/fetch';
  import { computed, ref } from 'vue';
  import { useCartStore } from '@/stores/cart';

  const page = ref(1);
  const url = computed(() => `https://jsonplaceholder.typicode.com/users?_limit=2&_page=${page.value}`);
  const { data, loading, loadData } = useFetch(url);

  const cart = useCartStore();

  const add = () => {
    // Mise à jour "manuelle" du store
    // cart.$patch({
    //   products: [ ...cart.products, { id: 3, name: 'Test', price: 10 } ]
    // })
    cart.addProduct('Test', 10);
  }
</script>

<template>
  <main>
    <h1>Accueil</h1>
    {{ JSON.stringify(data) }}
    <button @click="page++">
      {{ loading ? 'Chargement...' : 'Ok' }}
    </button>

    <button @click="add">Ajouter un produit</button>
  </main>
</template>
