import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  onMounted(() => {
    axios.get('http://localhost:3000/todos').then(response => {
      todos.value = response.data;
    });
  });

  const allTodos = computed(() => (type) => todos.value.filter(t => type === null || t.done === type))

  const addTodo = async (name) => {
    return axios.post('http://localhost:3000/todos', { name, done: false }).then(response => {
      todos.value.push(response.data);
    });
  }

  return { todos, allTodos, addTodo }
})
