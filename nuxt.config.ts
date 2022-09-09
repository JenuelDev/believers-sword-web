import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/supabase", "nuxt-windicss"],
    build: {
        transpile: ["naive-ui", "vueuc", "@css-render/vue3-ssr"],
    },
});
