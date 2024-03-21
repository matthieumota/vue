<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['saved']);

    const showTermForm = ref(false);
    const newTerm = ref({
        name: '',
        definition: '',
    });

    const save = () => {
        // On envoie une copie de l'objet pour éviter une référence
        emit('saved', { ...newTerm.value });
        newTerm.value = {
            name: '',
            definition: '',
        };

        showTermForm.value = false;
    }
</script>

<template>
    <button @click="showTermForm = !showTermForm">Nouveau terme</button>
    <form v-if="showTermForm" @submit.prevent="save">
        <div>
            <label for="name">Terme:</label>
            <input type="text" id="name" v-model="newTerm.name">
        </div>
        <div>
            <label for="definition">Définition:</label>
            <input type="text" id="definition" v-model="newTerm.definition">
        </div>
        <button :disabled="!newTerm.name.trim() || !newTerm.definition.trim()">Ok</button>
    </form>
</template>
