import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: false,
        };
    },
    mutations: {
        handleDrawer(state, payload) {
            state.isDrawer = payload;
        },
    },
    actions: {
        handleDrawer({ commit }, payload) {
            commit('handleDrawer', payload);
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
