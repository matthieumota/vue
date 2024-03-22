<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/todos">Todos</RouterLink>
      <RouterLink to="/todo/create">Créer une todo</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
