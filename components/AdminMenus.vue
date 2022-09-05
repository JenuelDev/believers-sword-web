<script setup>
import { h, onMounted, ref } from "vue";
import { NMenu, NIcon } from "naive-ui";
import { DocumentBulletList20Regular, Settings48Regular, Board16Regular } from "@vicons/fluent";

const props = defineProps({
    collapsed: Boolean,
});

const selectedMenu = ref("admin.home");
const menuOptions = [
    {
        label: "Dashboard",
        key: "admin.home",
        icon: renderIcon(Board16Regular),
    },
    {
        label: "Sermons",
        key: "admin.sermon",
        icon: renderIcon(DocumentBulletList20Regular),
    },
    {
        label: "Settings",
        key: "admin.settings",
        icon: renderIcon(Settings48Regular),
    },
    {
        label: "Log Out",
        key: "logout",
        icon: renderIcon(Settings48Regular),
    },
];

function expandIcon() {
    return h(NIcon, null, { default: () => h(CaretRight16Filled) });
}

function selectMenu(data) {
    if (data == "logout") {
        localStorage.removeItem("token");
    } else {
        selectedMenu.value = data;
    }
}

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

onMounted(() => {
    // selectedMenu.value = route().current();
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
