export default defineNuxtPlugin(() => {
    return {
        provide: {
            session: useSession(),
        },
    };
});
