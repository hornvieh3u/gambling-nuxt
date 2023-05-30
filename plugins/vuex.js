import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: false,
            isLogin: false,
        };
    },
    mutations: {
        handleDrawer(state, payload) {
            state.isDrawer = payload;
        },
        handleLogin(state, payload) {
            state.isLogin = payload;
        },
    },
    actions: {
        handleDrawer({ commit }, payload) {
            commit('handleDrawer', payload);
        },
        handleLogin({ commit }, payload) {
            commit('handleLogin', payload);
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
