import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  // State
  let nextId = 3;
  const products = ref([]);

  onMounted(() => {
    initProducts();
    console.log('WORKS');
  });

  // Actions
  const addProduct = async (name, price) => {
    fetch('https://jsonplaceholder.typicode.com/products')
      .then(response => {
        products.value.push({ id: nextId++, name, price, quantity: 1 });
      })
  }

  const initProducts = async () => {
    fetch('https://jsonplaceholder.typicode.com/products')
      .then(response => {
        products.value = [
          { id: 1, name: 'iPhone X', price: 1000, quantity: 1 },
          { id: 2, name: 'iPhone XI', price: 950, quantity: 2 },
        ];
      })
  }

  // Getters
  const length = computed(() => products.value.reduce(
    (previous, current) => previous + current.quantity, 0
  ));
  const cheaps = computed(() => [ ...products.value ].sort((a, b) => a.price - b.price));

  return { products, length, cheaps, addProduct };
})
