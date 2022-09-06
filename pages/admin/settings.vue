<script setup>
useHead({
    title: "Admin - Settings",
});
</script>
<template>
    <div>
        <ClientOnly>
            <NuxtLayout name="admin"> admin settings page </NuxtLayout>
        </ClientOnly>
    </div>
</template>
