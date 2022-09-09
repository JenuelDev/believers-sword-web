const STORAGE = localStorage;
const VueSession = {
    key: "believers-bible-session",
    setAll: function (all) {
        STORAGE.setItem(VueSession.key, JSON.stringify(all));
    },
};

const sessionFunctions = {
    getAll: function () {
        const all = JSON.parse(STORAGE.getItem(VueSession.key));
        return all || {};
    },
    set: function (key, value) {
        if (key == "session-id") return false;
        let all = this.getAll();

        if (!("session-id" in all)) {
            this.start();
            all = this.getAll();
        }

        all[key] = value;

        VueSession.setAll(all);
    },
    get: function (key) {
        const all = this.getAll();
        return all[key];
    },
    start: function () {
        const all = this.getAll();
        all["session-id"] = "sess:" + Date.now();

        VueSession.setAll(all);
    },
    renew: function (sessionId) {
        const all = this.getAll();
        all["session-id"] = "sess:" + sessionId;
        VueSession.setAll(all);
    },
    exists: function () {
        const all = this.getAll();
        return "session-id" in all;
    },
    has: function (key) {
        const all = this.getAll();
        return key in all;
    },
    remove: function (key) {
        const all = this.getAll();
        delete all[key];

        VueSession.setAll(all);
    },
    clear: function () {
        const all = this.getAll();

        VueSession.setAll({ "session-id": all["session-id"] });
    },
    destroy: function () {
        VueSession.setAll({});
    },
    id: function () {
        return this.get("session-id");
    },
};

export default defineNuxtPlugin(() => {
    return {
        provide: {
            session: () => sessionFunctions,
        },
    };
});
