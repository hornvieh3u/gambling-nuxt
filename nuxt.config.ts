
import { NuxtConfig } from '@nuxt/types';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr: false,
    // add tailwindcss to the modules
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-quasar-ui',
    ],
    // i18n: {
    //     locales: [
    //         {
    //           code: 'en',
    //           file: '/lang/en.json'
    //         },
    //         {
    //           code: 'fr',
    //           file: '/lang/fr.json'
    //         }
    //     ],
    //     defaultLocale: 'en',
    //     vueI18n: {
    //       fallbackLocale: 'en'
    //     },
    //     detectBrowserLanguage: {
    //       useCookie: true
    //     }
    // },
    runtimeConfig: {
        public: {
          API_KEY: 'Sy5WMUIbIV6m3IBk1PSL',
        },
    },
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
            fontIcons: [  
                'material-icons'
            ],
        },
    },
    css: ['@/assets/app.css'],
    resolve: {
        '@assets': '~/assets',
    },
});
