import { onMounted, ref, toValue, watchEffect } from 'vue';

export function useFetch(url) {
    const data = ref(null);
    const loading = ref(true);

    const loadData = () => {
        data.value = null;
        loading.value = true;

        fetch(toValue(url)).then((response) => response.json())
            .then((response) => {
                setTimeout(() => {
                    data.value = response;
                    loading.value = false;
                }, 1000);
            });
    }

    watchEffect(() => {
        console.log('WATCH');
        loadData();
    });

    onMounted(() => {
        loadData();
    });

    return { data, loading, loadData };
}
