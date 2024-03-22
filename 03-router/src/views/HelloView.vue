<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    // const { name } = route.params; // attention au refresh du composant

    const props = defineProps(['name', 'query']);
    console.log(props);

    onMounted(() => {
        console.log(`call api sur ${route.params.name}`);
    });

    watch(() => route.params.name, (newName) => {
        console.log(`call api sur ${newName}`);
    }); // On peut aussi définie le immediate à true

    const search = ref('');
    const router = useRouter();

    const sayHello = () => router.push(`/hello/${search.value}`)
</script>

<template>
    <div>
        <h1>Bonjour {{ route.params.name }}</h1>

        <p>{{ query }} ou {{ route.query.a }}</p>

        <RouterLink to="/hello/titi" custom v-slot="{ isActive, href, navigate }">
            <a :href="href" @click="navigate" :class="{ active: isActive }">
                Hello Titi
            </a>
        </RouterLink>

        <input type="text" v-model="search">
        <button @click="sayHello">Dire bonjour</button>
    </div>
</template>
