<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const auth = useAuthStore();
const firstname = ref('');
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/todos">Todos</RouterLink>
      <RouterLink to="/todo/create">Créer une todo</RouterLink>

      <span v-if="auth.isLogged">
        {{ auth.user.firstname }}
        <button @click="auth.logout">Logout</button>
      </span>

      <form v-else style="display: inline" @submit.prevent="auth.login(firstname)">
        <input type="text" v-model="firstname">
        <button>Login</button>
      </form>
    </nav>
  </header>

  <RouterView />
</template>
