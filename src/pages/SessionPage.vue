<template>

    <main>
        <h1>SessionPage</h1>
        <h2></h2>
    </main>
</template>


<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
    onMounted(()=> {
        const route = useRoute();
        console.log(route.params);
    })
</script>