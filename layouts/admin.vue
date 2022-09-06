<script setup>
import { ref, onBeforeMount } from "vue";
import { NLayout, NLayoutSider, NLayoutContent, NMessageProvider } from "naive-ui";

const collapsed = ref(false);
const supabase = useSupabaseClient();
const router = useRouter();
const { $session } = useNuxtApp();

onBeforeMount(async () => {
    const session = $session.get("session");
    if (!session) {
        router.push({ path: "/" });
    }
});
</script>
<template>
    <div>
        <NMessageProvider>
            <NLayout has-sider class="h-[100vh]">
                <NLayoutSider collapse-mode="width" :collapsed-width="64" :width="240" show-trigger="bar" bordered @collapse="collapsed = true" @expand="collapsed = false">
                    <AdminMenus :collapsed="collapsed" />
                </NLayoutSider>
                <NLayoutContent content-style="padding: 24px;">
                    <slot />
                </NLayoutContent>
            </NLayout>
        </NMessageProvider>
    </div>
</template>
