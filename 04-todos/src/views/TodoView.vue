<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';

  const route = useRoute();
  const router = useRouter();
  const todo = ref(null);

  const fetchTodo = () => {
    axios.get(`http://localhost:3000/todos/${route.params.id}`).then(
      response => todo.value = response.data
    ).catch((error) => router.push(`/todo/1`))
  }

  onMounted(() => {
    fetchTodo()
  })

  watch(() => route.params.id, () => {
    fetchTodo()
  })
</script>

<template>
  <div v-if="todo">
    <h1>{{ todo.name }}</h1>
    <p>{{ todo.done ? 'Fait' : 'Pas fait' }}</p>

    <RouterLink :to="`/todo/${parseInt(todo.id) - 1}`">
      Todo précédente
    </RouterLink>

    <RouterLink :to="`/todo/${parseInt(todo.id) + 1}`">
      Todo suivante
    </RouterLink>
  </div>
</template>
