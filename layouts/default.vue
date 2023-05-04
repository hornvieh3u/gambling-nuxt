<script setup lang="ts">
import { ref } from 'vue';
import { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
    {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
    },
    {
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework',
    },
    {
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev',
    },
    {
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev',
    },
    {
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev',
    },
    {
        title: 'Facebook',
        caption: '@QuasarFramework',
        icon: 'public',
        link: 'https://facebook.quasar.dev',
    },
    {
        title: 'Quasar Awesome',
        caption: 'Community Quasar projects',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev',
    },
];

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = computed(() => {
    return () => {
        leftDrawerOpen.value = !leftDrawerOpen.value;
    };
});
</script>
<template>
    <q-layout>
        <q-header class="q-pl-md q-pt-sm q-pb-sm q-pr-md" style="background-color: #292c35">
            <q-toolbar>
                <img
                    style="max-width: 30px"
                    src="@/assets/img/header/menu.png"
                    alt="My Image"
                    @click="toggleLeftDrawer"
                />
                <img
                    class="q-pl-md"
                    style="max-width: 190px"
                    src="@/assets/img/header/logo_full.png"
                    alt="My Image"
                />
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md"
            style="background-color: #181a25"
        >
            <q-list>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container style="background-color: #1e1e1e">
            <NuxtPage />
        </q-page-container>
    </q-layout>
</template>
