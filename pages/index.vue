<script setup lang="ts">
import Conclusion from '~~/components/landingPage/Conclusion.vue';
import GameList from '~~/components/landingPage/GameList.vue';
import ProviderList from '~~/components/landingPage/ProviderList.vue';
// !Get TmpData
import games from './games.tmp.json';
import providers from './providers.tmp.json';
</script>
<template>
    <q-page class="q-pl-lg">
        <div
            style="max-width: 1450px"
            class="w-full px-6 md:px-10 lg:px-14 py-8 m-auto"
        >
            <section class="main h-full px-4">
                <landing-page-overview />
                <landing-page-intro-cards />
            </section>
            <section class="pt-4">
                <landing-page-category-bar />
                <game-list v-for="game in games" :game="game" />
                <provider-list :providers="providers" />
            </section>
            <section>
                <Conclusion />
            </section>
        </div>
    </q-page>
</template>
