<script setup>
  import { useTodoStore } from '@/stores/todo';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter();
  const store = useTodoStore();
  const newTodo = ref('');

  const save = () => {
    store.addTodo(newTodo.value).then(() => {
      newTodo.value = '';

      router.push('/todos');
    }).catch(error => {
      console.log(error);
    });
  }
</script>

<template>
  <h1>Créer une todo</h1>

  <form @submit.prevent="save">
    <input type="text" v-model="newTodo">

    <button>Créer</button>
  </form>
</template>
