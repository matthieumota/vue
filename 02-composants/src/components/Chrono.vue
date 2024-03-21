<script setup>
  import { nextTick, onMounted, onUnmounted, onUpdated, ref } from 'vue';

  const stopwatch = ref(0);

  // Quand le composant est crée (avant le montage donc pas accès au DOM)
  let interval;
  const div = ref(null)

  // Ici, on est dans le onCreate
  interval = setInterval(() => {
    console.log('un à la fois');
    stopwatch.value++;
    // Le nextTick permet de s'assurer que le DOM est bien à jour par rapport au dernier render
    nextTick(() => console.log(document.getElementById('div').innerText));
  }, 1000);

  console.log(div.value);

  // On démarre un setInterval à chaque apparition du composant (montage)
  onMounted(() => {
    console.log(div.value);
  });

  onUpdated(() => {
    console.log(stopwatch.value);
  });

  // On arrête le setInterval à chaque disparition du composant (démontage)
  onUnmounted(() => clearInterval(interval));
</script>

<template>
  <div ref="div" id="div">
    Chrono: {{ stopwatch }}
  </div>
</template>
