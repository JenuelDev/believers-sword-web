<script setup>
import { onMounted } from "vue";

onMounted(() => {
    console.log("This is home page");
});
</script>
<template>
    <NuxtLayout name="admin">
        <div>This is home page.</div>
    </NuxtLayout>
</template>
