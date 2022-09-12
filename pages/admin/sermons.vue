<script setup lang="ts">
useHead({
    title: "sermons - admin",
});
</script>
<template>
    <NuxtLayout name="admin">
        <div>
            <div class="flex justify-between">
                <h2 class="text-size-20px">Sermon Page</h2>
                <div>
                    <NuxtLink to="/admin/sermon/add" class="hover:underline">+ Add Sermon</NuxtLink>
                </div>
            </div>
            <div class="mt-10">
                <SermonTable />
            </div>
        </div>
    </NuxtLayout>
</template>
