<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/cart';

const cart = useCartStore();
</script>

<template>
  <header>
    <nav>
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/hello/toto">Hello Toto</RouterLink>
    </nav>
    <p>Panier: {{ cart.length }}</p>
  </header>

  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>

<style scoped>
  .router-link-active {
    color: red;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter-from, .fade-leave-to {
    transform: translateX(-50%);
  }
</style>
