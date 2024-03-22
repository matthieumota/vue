import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isLogged = computed(() => user.value);

  const login = (firstname) => {
    user.value = { firstname };
  };
  const logout = () => {
    user.value = null;
  };

  return { user, isLogged, login, logout };
});
