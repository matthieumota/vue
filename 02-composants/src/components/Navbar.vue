<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'color'])

const active = ref('Accueil')
// Si jamais, on veut modifier une props
const refColor = ref(props.color)
</script>

<template>
  <h1 v-if="title">{{ title }}</h1>
  <nav :style="{ backgroundColor: refColor }">
    <a href="#" @click.prevent="active = 'Accueil'" :class="{ active: active === 'Accueil' }">
        Accueil
    </a>
    <a href="#" @click.prevent="active = 'A propos'" :class="{ active: active === 'A propos' }">
        A propos
    </a>
  </nav>
</template>

<style scoped>
.active {
  background-color: lightblue;
}
</style>
