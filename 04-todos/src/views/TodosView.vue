<script setup>
  import { useTodoStore } from '@/stores/todo';
  import { ref } from 'vue';

  const store = useTodoStore();
  const filter = ref(null);
</script>

<template>
  <h1>Voir les todos</h1>

  <select v-model="filter">
    <option :value="null">Tout</option>
    <option :value="true">Fait</option>
    <option :value="false">Pas fait</option>
  </select>

  <ul>
    <li v-for="todo in store.allTodos(filter)">
      <RouterLink :to="`/todo/${todo.id}`">
        {{ todo.name }} ({{ todo.id }})
      </RouterLink>
      {{ todo.done ? 'Fait' : 'Pas fait' }}
    </li>
  </ul>

  <RouterLink to="/todo/1/edit">Modifier</RouterLink>
</template>
