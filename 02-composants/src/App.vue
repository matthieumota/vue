<script setup>
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

  <Footer :title="title" @update-title="title = $event" />
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
