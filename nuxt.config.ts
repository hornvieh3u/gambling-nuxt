import * as path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr: false,
    // add tailwindcss to the modules
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-quasar-ui',
    ],
    plugins: [
        { src: '~/plugins/ant-design-vue.js' }
    ],
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
    resolve: {
        '@assets': '~/assets',
    },
});
