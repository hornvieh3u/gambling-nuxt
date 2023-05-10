import * as path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // add tailwindcss to the modules
    modules: ['@nuxtjs/tailwindcss', 'nuxt-quasar-ui'],

    quasar: {
        plugins: [
            'BottomSheet',
            'Dialog',
            'Loading',
            'LoadingBar',
            'Notify',
            'Dark',
        ],
        extras: {
            font: 'roboto-font',
            fontIcons: ['material-icons'],
        },
    },
    css: ['@/assets/app.css'],
});
