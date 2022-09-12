<script setup lang="ts">
const supabase = useSupabaseClient();
const sermons = ref([]);
const getPagination = (p, size) => {
    const page = p - 1;
    const limit = size ? +size : 3;
    const from = page ? page * limit : 0;
    const to = page ? from + size : size;

    return { from, to };
};
async function getSermons(page = 1, limit = 10) {
    const { from, to } = getPagination(page, limit);
    console.log(from, to);
    const { data, error } = await supabase.from("sermons").select().order("id", { ascending: false }).range(from, to);
    if (error) {
        alert(error.message);
        return;
    }
    sermons.value = data;
}

onMounted(() => {
    getSermons();
});

defineExpose({
    getSermons,
});
</script>
<template>
    <div>
        <table class="w-full">
            <thead>
                <tr class="text-left">
                    <th>Title</th>
                    <th>Content</th>
                    <th>Created At</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sermon in sermons" :key="sermon.id">
                    <td>{{ sermon.title }}</td>
                    <td>{{ sermon.description }}</td>
                    <td>{{ sermon.created_at }}</td>
                    <td>
                        <Button label="Edit" class="p-button-text" />
                        <Button label="Delete" class="p-button-danger p-button-text" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
