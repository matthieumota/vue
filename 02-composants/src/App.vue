<script setup>
import Button from '@/components/Button.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import UserForm from '@/components/UserForm.vue'
import { ref } from 'vue'

const title = ref('Mon Application')
const author = ref({
  name: 'Mota',
  firstname: 'Fiorella'
})
</script>

<template>
  <h1>{{ title }}</h1>
  <Navbar :title="title" color="blue" />
  <Navbar />

  <UserForm v-model="author" />
  {{ JSON.stringify(author) }}

  <Button v-slot="{ test }">
    Envoyer {{ test }}
  </Button>
  <Button>
    <template #right>🤖</template>
    Valider
  </Button>
  <Button />

  <Footer :title="title" @update-title="title = $event" id="footer" />
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
