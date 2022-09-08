export default defineNuxtPlugin(() => {
    return {
        provide: {
            session: useSession(),
            getYoutubeVideoDetails: useGetYoutubeVideoDetails(),
            sermonLanguageOptions: useSermonLanguages(),
            denominations: getDenominations(),
            sermonFormRules: useSermonFormRule(),
        },
    };
});
