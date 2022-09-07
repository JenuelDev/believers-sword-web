<script setup>
import { h, ref } from "vue";
import { NMenu, NIcon } from "naive-ui";

const router = useRouter();
const route = useRoute();
const props = defineProps({
    collapsed: Boolean,
});
const { $session } = useNuxtApp();
const supabase = useSupabaseClient();
const selectedMenu = ref("/admin/home");
const menuOptions = [
    {
        label: "Dashboard",
        key: "/admin/home",
    },
    {
        label: "Sermons",
        key: "/admin/sermons",
    },
    {
        label: "Settings",
        key: "/admin/settings",
    },
    {
        label: "Log Out",
        key: "logout",
    },
];

function expandIcon() {
    return h(NIcon, null, { default: () => h(CaretRight16Filled) });
}

async function selectMenu(data) {
    if (data == "logout") {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert(error.message);
            return;
        }

        $session.remove("session");
        router.push({ path: "/" });
    } else {
        selectedMenu.value = data;
        router.push({ path: data });
    }
}

onBeforeMount(() => {
    const routePath = route.path;
    selectedMenu.value = routePath;
});
</script>

<template>
    <NMenu
        :collapsed="props.collapsed"
        :value="selectedMenu"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :expand-icon="expandIcon"
        :on-update:value="selectMenu"
    />
</template>
