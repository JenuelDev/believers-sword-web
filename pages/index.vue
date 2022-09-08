<script setup>
import { NInput, NButton } from "naive-ui";

const supabase = useSupabaseClient();
const { $session } = useNuxtApp();
const router = useRouter();
const form = reactive({
    email: "",
    password: "",
    isLoading: false,
});

onBeforeMount(async () => {
    const session = $session.get("session");
    if (session) {
        router.push({ path: "/admin/home" });
    }
});

const submit = async () => {
    form.isLoading = true;
    const { user, session, error } = await supabase.auth.signIn({
        email: form.email,
        password: form.password,
    });

    if (error) {
        alert(error.message);
        form.isLoading = false;
        return;
    }

    $session.set("session", session);
    form.isLoading = false;
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
                    <NInput
                        v-model:value="form.password"
                        type="password"
                        placeholder="Enter Your Password"
                        size="small"
                    />
                </div>
                <div class="mt-3">
                    <NButton @click="submit" :loading="form.isLoading" :disabled="form.isLoading">Login</NButton>
                </div>
            </div>
        </div>
    </div>
</template>
