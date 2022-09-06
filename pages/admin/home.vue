<script setup>
import { onMounted } from "vue";

onMounted(() => {
    console.log("This is home page");
});
</script>
<template>
    <div>
        <ClientOnly>
            <NuxtLayout name="admin">
                <div>This is home page.</div>
            </NuxtLayout>
        </ClientOnly>
    </div>
</template>
