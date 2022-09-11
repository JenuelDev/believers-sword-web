<script setup lang="ts">
const { $session } = useNuxtApp();
onMounted(() => {
    const theme = $session().get("theme");
    const newTheme = theme && theme == "dark" ? "dark" : "light";
    document.body.className = newTheme;
});
</script>
<template>
    <div>
        <HomeNav />
        <div class="pt-10">
            <slot />
        </div>
    </div>
</template>
