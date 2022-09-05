<script setup>
import { NInput, NButton } from "naive-ui";
import { onBeforeMount, reactive, ref } from "vue";

const router = useRouter();
const form = reactive({
    email: "",
    password: "",
    isLoading: false,
});

onBeforeMount(async () => {
    console.log("before mount");
});

const submit = () => {
    console.log("submit");
    router.push("/admin/home");
};
</script>

<template>
    <div>
        <Head title="Login" />
        <div class="flex justify-center p-10">
            <div class="flex flex-col">
                <h1 class="font-bold text-2xl">Believers Sword Admin</h1>
                <h3>Login Page</h3>
                <div class="flex flex-col gap-1 mt-4">
                    <NInput v-model:value="form.email" placeholder="Enter Your Email" size="small" />
                    <NInput v-model:value="form.password" type="password" placeholder="Enter Your Password" size="small" />
                </div>
                <div class="mt-3">
                    <NButton @click="submit" :loading="form.isLoading" :disabled="form.isLoading">Login</NButton>
                </div>
            </div>
        </div>
    </div>
</template>
