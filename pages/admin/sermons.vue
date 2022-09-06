<script setup>
import { onMounted, ref, h, watch } from "vue";
import { NDataTable, NButton, NPagination } from "naive-ui";

const sermons = ref([]);
const editSermonModal = ref(null);

useHead({
    title: "Admin - Sermons",
});

const columns = [
    {
        title: "UID",
        key: "_id",
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
                        onClick: async () => {
                            if (confirm("Are you sure you want to delete this? ") == true) {
                                await deleteSermon(row._id);
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

const page = ref(1);
watch(page, (page) => {
    getSermonData();
});
const pageCount = ref(0);
const limit = ref(50);
const loading = ref(false);

const getSermonData = (search = "") => {
    loading.value = true;
    console.log("get sermon data");
    loading.value = false;
};

const addSermonToData = (data) => {
    getSermonData();
};

const deleteSermon = (id) => {
    console.log("delete sermon");
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
                <NDataTable :columns="columns" :data="sermons" :pagination="false" :bordered="false" :loading="loading" />
                <div class="flex justify-end">
                    <NPagination class="mt-10px" v-model:page="page" :page-count="pageCount" :disabled="loading" />
                </div>
            </NuxtLayout>
        </ClientOnly>
    </div>
</template>
