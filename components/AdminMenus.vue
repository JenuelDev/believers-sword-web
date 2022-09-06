<script setup>
import { h, ref } from "vue";
import { NMenu, NIcon } from "naive-ui";

const props = defineProps({
    collapsed: Boolean,
});

const selectedMenu = ref("admin.home");
const menuOptions = [
    {
        label: "Dashboard",
        key: "/admin/home",
    },
    {
        label: "Sermons",
        key: "admin.sermon",
    },
    {
        label: "Settings",
        key: "admin.settings",
    },
    {
        label: "Log Out",
        key: "logout",
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
