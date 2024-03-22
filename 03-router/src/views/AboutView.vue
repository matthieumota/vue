<script setup>
  import { useCartStore } from '@/stores/cart';

  const cart = useCartStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ul>
      <li v-for="product in cart.cheaps">
        {{ product.name }} ({{ product.price }})
      </li>
    </ul>

    <ul>
      <li v-for="product in cart.products">
        {{ product.name }} ({{ product.price }})
      </li>
    </ul>
  </div>
</template>

<style>
</style>
