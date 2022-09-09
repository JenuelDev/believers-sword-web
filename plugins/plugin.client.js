import { setup } from "@css-render/vue3-ssr";

export default defineNuxtPlugin((nuxtApp) => {
    const provider = {
        provide: {
            session: useSession(),
            getYoutubeVideoDetails: useGetYoutubeVideoDetails(),
            sermonLanguageOptions: useSermonLanguages(),
            denominations: getDenominations(),
            sermonFormRules: useSermonFormRule(),
        },
    };
    if (process.server) {
        const { collect } = setup(nuxtApp.vueApp);

        const originalRenderMeta = nuxtApp.ssrContext?.renderMeta;

        nuxtApp.ssrContext = nuxtApp.ssrContext || {};

        nuxtApp.ssrContext.renderMeta = () => {
            if (!originalRenderMeta) {
                return {
                    ...provider,
                    headTags: collect(),
                };
            }

            const originalMeta = originalRenderMeta();

            if ("then" in originalMeta) {
                return originalMeta.then((resolvedOriginalMeta) => {
                    return {
                        ...provider,
                        ...resolvedOriginalMeta,
                        headTags: resolvedOriginalMeta["headTags"] + collect(),
                    };
                });
            } else {
                return {
                    ...provider,
                    ...originalMeta,
                    headTags: originalMeta["headTags"] + collect(),
                };
            }
        };
    }
});
