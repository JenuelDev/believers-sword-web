<script setup>
import { onMounted, ref, h, watch } from "vue";
import { NDataTable, NButton, NPagination } from "naive-ui";

const sermons = ref([]);
const editSermonModal = ref(null);
const supabase = useSupabaseClient();
const pageCount = ref(0);
const limit = ref(3);
const loading = ref(false);
const page = ref(1);

useHead({
    title: "Admin - Sermons",
});

const columns = [
    {
        title: "UID",
        key: "id",
        width: 150,
    },
    {
        title: "Title",
        key: "title",
        width: 200,
    },
    {
        title: "Type",
        key: "type",
        width: 100,
    },
    {
        title: "Description",
        key: "description",
        width: 600,
    },
    {
        title: "language",
        key: "language",
        width: 100,
    },
    {
        title: "Source",
        key: "source",
        width: 100,
    },
    {
        title: "Action",
        key: "actions",
        width: 100,
        render(row) {
            return h("div", { class: "flex flex-wrap gap-10px" }, [
                h(
                    NButton,
                    {
                        strong: true,
                        tertiary: true,
                        size: "small",
                        disabled: loading.value,
                        onClick: () => editSermonModal.value.toggleModal(row),
                    },
                    { default: () => "Edit" }
                ),
                h(
                    NButton,
                    {
                        strong: true,
                        tertiary: true,
                        size: "small",
                        disabled: loading.value,
                        onClick: async () => {
                            if (confirm("Are you sure you want to delete this? ") == true) {
                                await deleteSermon(row.id);
                                await getSermonData();
                            }
                        },
                    },
                    { default: () => "delete" }
                ),
            ]);
        },
    },
];

watch(page, (page) => {
    getSermonData();
});

const getPagination = (page = 1, size = 30) => {
    const from = (page - 1) * (size - 1);
    const to = from + (size - 1);

    return { from, to };
};

const getSermonData = async (search = "") => {
    loading.value = true;
    const setPage = getPagination(page.value, limit.value);
    const { data, error } = await supabase
        .from("sermons")
        .select()
        .order("id", { ascending: false })
        .range(setPage.from, setPage.to);

    console.log(data);
    if (error) {
        alert(error.message);
        loading.value = false;
    }

    sermons.value = data;
    loading.value = false;
};

const addSermonToData = (data) => {
    getSermonData();
};

const deleteSermon = async (id) => {
    const { data, error } = await supabase.from("sermons").delete().match({ id });
    if (error) {
        alert(error.message);
    }
};

onMounted(async () => {
    await getSermonData();
});
</script>
<template>
    <div>
        <ClientOnly>
            <NuxtLayout name="admin">
                <NButton class="mb-20px" @click="editSermonModal.toggleModal()">+ Create New Sermon</NButton>
                <EditSermonModal ref="editSermonModal" @saved="addSermonToData" />
                <NDataTable
                    :columns="columns"
                    :data="sermons"
                    :pagination="false"
                    :bordered="false"
                    :loading="loading"
                />
                <div class="flex justify-end gap-2 items-center mt-2">
                    <NButton @click="page = page - 1" :disabled="page == 1">Previous Page</NButton>
                    <span>{{ page }}</span>
                    <NButton @click="page += 1" :disabled="sermons.length < limit">Next Page</NButton>
                </div>
            </NuxtLayout>
        </ClientOnly>
    </div>
</template>
