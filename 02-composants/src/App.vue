<script setup>
import Button from '@/components/Button.vue'
import Counter from '@/components/Counter.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import TermForm from '@/components/TermForm.vue'
import Term from '@/components/Term.vue'
import Title from '@/components/Title.vue'
import UserForm from '@/components/UserForm.vue'
import { computed, ref } from 'vue'

const title = ref('Mon Application')
const author = ref({
  name: 'Mota',
  firstname: 'Fiorella'
})
const total = ref(5)
const terms = ref([
  { name: 'Terme 1', definition: 'Définition terme 1' },
  { name: 'Terme 2', definition: 'Définition terme 2' },
]);
const totalTerms = computed(() => `${terms.value.length} terme${terms.value.length > 1 ? 's' : ''}`);
</script>

<template>
  <Title :value="title" />
  <input type="text" v-model="title">
  <Navbar :title="title" color="blue" />
  <Navbar />

  <div>
    <hr>
    <UserForm v-model="author" />
    {{ JSON.stringify(author) }}
    <hr>
  </div>

  <div>
    <hr>
    <Button v-slot="{ test }">
      Envoyer {{ test }}
    </Button>
    <Button>
      <template #right>🤖</template>
      Valider
    </Button>
    <Button />
    <hr>
  </div>

  <div>
    <hr>
      <h2>Composant compteur (Total {{ total }})</h2>
      <!-- Le compteur va de 0 à l'infini. -->
      <Counter @increment="total += $event" />
      <!-- Le compteur va de 0 à 10 mais affiche 5 au départ. -->
      <Counter :start="5" :max="10" @increment="total += $event" />
    <hr>
  </div>

  <div>
    <hr>
      <h2>Composant d'affichage I ({{ totalTerms }})</h2>
      <TermForm @saved="terms.push($event)" />
      <Term v-for="(term, index) in terms" :term="term" @deleted="terms.splice(index, 1)" />
    <hr>
  </div>

  <Footer :title="title" @update-title="title = $event" id="footer" />
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
