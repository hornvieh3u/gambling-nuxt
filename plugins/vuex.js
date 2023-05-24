import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: false,
        };
    },
    mutations: {
        handleDrawer(state) {
            state.isDrawer = !isDrawer.isDrawer;
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
