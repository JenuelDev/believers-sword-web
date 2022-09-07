<script setup>
import { NModal, NCard, NButton, NInput, NForm, NFormItem, useMessage, NSelect, NDatePicker } from "naive-ui";
import { ref } from "vue";
import EditSermonModal from "./FormRules";
import { getYoutubeVideoDetails } from "./YoutubeApi";
import denomination from "./denomination.js";
import axios from "axios";
import languageOptions from "./languageOptions.js";
import TiptapEditor from "./../Tiptap/Editor.vue";

const supabase = useSupabaseClient();
const showModal = ref(false);
const selectedSermon = ref(null);
const formRef = ref(null);
const formValue = ref({
    title: null,
    type: "youtube",
    description: null,
    youtubeVideoId: null,
    scripture: null,
    created_at: null,
    author: null,
    denomination: null,
    language: null,
    source: null,
});
const message = useMessage();
const emit = defineEmits(["saved"]);
const submitLoading = ref(false);
const tiptapContent = ref("Edit This Text");
const isForUpdate = ref(false);

const resetForm = () => {
    selectedSermon.value = null;
    formValue.value.title = null;
    formValue.value.type = "youtube";
    formValue.value.description = null;
    formValue.value.youtubeVideoId = null;
    formValue.value.scripture = null;
    formValue.value.created_at = null;
    formValue.value.author = null;
    formValue.value.denomination = null;
    formValue.value.language = null;
    formValue.value.source = null;
};

const toggleModal = (data = null) => {
    isForUpdate.value = false;
    resetForm();

    if (data) {
        selectedSermon.value = data;
        formValue.value.type = data.type;
        isForUpdate.value = true;
        formValue.value.source = data.source;

        if (formValue.value.type == "youtube") {
            formValue.value.youtubeVideoId = data.youtube_video_id;
            formValue.value.language = data.language;
        }

        if (formValue.value.type == "text") {
            formValue.value.title = data.title;
            formValue.value.description = data.description;
            formValue.value.scripture = data.scripture;
            formValue.value.created_at = new Date(data.created_at).getTime();
            formValue.value.author = data.author;
            formValue.value.denomination = data.denomination;
            formValue.value.language = data.language;
            tiptapContent.value = data.content;
        }
    }

    showModal.value = !showModal.value;
};

const submitSermon = () => {
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            submitLoading.value = true;
            message.success("Valid");

            if (formValue.value.type === "youtube") {
                const youtubeDetails = await getYoutubeVideoDetails(formValue.value.youtubeVideoId)
                    .then(({ data }) => {
                        if (data.items.length > 0) return data.items[0];
                        return false;
                    })
                    .catch((e) => {
                        return false;
                    });

                if (!youtubeDetails) {
                    alert("Failed To Get Youtube Details!");
                    submitLoading.value = true;
                    return;
                }

                let data = {
                    type: "youtube",
                    thumbnail: youtubeDetails.snippet.thumbnails.medium.url,
                    // date_time: new Date(),
                    description: youtubeDetails.snippet.description,
                    title: youtubeDetails.snippet.title,
                    youtube_embed: `https://www.youtube.com/embed/${youtubeDetails.id}`,
                    youtube_video_id: youtubeDetails.id,
                    language: formValue.value.language,
                    source: formValue.value.source,
                };

                if (isForUpdate.value) data.id = selectedSermon.value.id;

                try {
                    // save sermon
                    submitLoading.value = true;
                    console.log(data);

                    // create record
                    const newSermon = isForUpdate.value
                        ? await supabase.from("sermons").insert([data])
                        : await supabase.from("sermons").upsert(data);

                    if (newSermon.error) {
                        alert(newSermon.error.message);
                        submitLoading.value = false;
                        return false;
                    }

                    submitLoading.value = false;
                    emit("saved");
                } catch (e) {
                    console.log(e);
                }
            }

            if (formValue.value.type === "text") {
                let data = {
                    type: "text",
                    // date_time: new Date(),
                    description: formValue.value.description,
                    title: formValue.value.title,
                    content: tiptapContent.value,
                    scripture: formValue.value.scripture,
                    created_at: new Date(formValue.value.created_at).toDateString(),
                    author: formValue.value.author,
                    denomination: formValue.value.denomination,
                    language: formValue.value.language,
                    source: formValue.value.source,
                };

                if (isForUpdate.value) {
                    data.id = selectedSermon.value.id;
                }

                console.log(data);

                try {
                    // save sermon
                    submitLoading.value = true;
                    console.log(data);

                    // create record
                    const newSermon = isForUpdate.value
                        ? await supabase.from("sermons").insert([data])
                        : await supabase.from("sermons").upsert(data);

                    if (newSermon.error) {
                        alert(newSermon.error.message);
                        submitLoading.value = false;
                        return false;
                    }

                    console.log(newSermon.data);

                    submitLoading.value = false;

                    emit("saved");
                } catch (e) {
                    console.log(e);
                }
            }

            showModal.value = false;
            submitLoading.value = false;
            resetForm();
        } else {
            console.log(errors);
            message.error("Invalid");
        }
    });
};

defineExpose({
    toggleModal,
});
</script>
<template>
    <NModal v-model:show="showModal">
        <NCard style="width: 1000px" title="Sermon" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>{{ selectedSermon ? "Update" : "Create New" }} Sermon</template>
            <NForm ref="formRef" :label-width="80" :model="formValue" :rules="EditSermonModal" :size="'medium'">
                <NFormItem label="Select Type" path="type">
                    <NSelect
                        v-model:value="formValue.type"
                        :options="[
                            {
                                label: 'Youtube',
                                value: 'youtube',
                            },
                            {
                                label: 'Article',
                                value: 'text',
                            },
                        ]"
                        placeholder="Please Select Type"
                        :disabled="submitLoading"
                    />
                </NFormItem>
                <NFormItem label="Title" path="title" v-if="formValue.type === 'text'">
                    <NInput
                        v-model:value="formValue.title"
                        :disabled="submitLoading"
                        type="text"
                        placeholder="Enter Title"
                    />
                </NFormItem>

                <NFormItem label="Scripture" path="scripture" v-if="formValue.type === 'text'">
                    <NInput
                        v-model:value="formValue.scripture"
                        :disabled="submitLoading"
                        type="text"
                        placeholder="Enter Title"
                    />
                </NFormItem>

                <NFormItem label="Created At" path="created_at" v-if="formValue.type === 'text'">
                    <!-- <NInput v-model:value="formValue.created_at" :disabled="submitLoading" type="text" placeholder="Enter Title" /> -->
                    <NDatePicker
                        v-model:value="formValue.created_at"
                        type="date"
                        clearable
                        :disabled="submitLoading"
                        class="w-[100%]"
                    />
                </NFormItem>

                <NFormItem label="Author" path="author" v-if="formValue.type === 'text'">
                    <NInput
                        v-model:value="formValue.author"
                        :disabled="submitLoading"
                        type="text"
                        placeholder="Enter Title"
                    />
                </NFormItem>
                <NFormItem label="Denomination" path="denomination" v-if="formValue.type === 'text'">
                    <!-- <NInput v-model:value="formValue.denomination" :disabled="submitLoading" type="text" placeholder="Enter Title" /> -->
                    <NSelect
                        v-model:value="formValue.denomination"
                        :options="denomination"
                        placeholder="Please Select Type"
                        :disabled="submitLoading"
                    />
                </NFormItem>

                <NFormItem label="Description" path="description" v-if="formValue.type === 'text'">
                    <NInput
                        v-model:value="formValue.description"
                        :disabled="submitLoading"
                        type="textarea"
                        placeholder="Enter The Sermon Description"
                    />
                </NFormItem>

                <NFormItem v-if="formValue.type === 'youtube'" label="Youtube Video ID" path="youtubeVideoId">
                    <NInput
                        v-model:value="formValue.youtubeVideoId"
                        :disabled="submitLoading"
                        type="text"
                        placeholder="Enter Youtube Video ID"
                    />
                </NFormItem>
                <NFormItem label="Language" path="language">
                    <NSelect
                        v-model:value="formValue.language"
                        :options="languageOptions"
                        placeholder="Please Select Type"
                        :disabled="submitLoading"
                    />
                </NFormItem>
                <NFormItem label="Please Enter Source (LINK). ex. example.com/article/title" path="source">
                    <NInput
                        v-model:value="formValue.source"
                        :disabled="submitLoading"
                        type="text"
                        placeholder="Enter Source"
                    />
                </NFormItem>
                <div v-if="formValue.type === 'text'">
                    <TiptapEditor v-model="tiptapContent" />
                </div>
            </NForm>
            <template #footer>
                <div class="flex gap-2">
                    <NButton @click="submitSermon" :loading="submitLoading" :disabled="submitLoading">
                        {{ selectedSermon ? "Update" : "Create New" }}
                        Sermon
                    </NButton>
                    <NButton
                        @click="
                            resetForm();
                            showModal = false;
                        "
                    >
                        Cancel
                    </NButton>
                </div>
            </template>
        </NCard>
    </NModal>
</template>
