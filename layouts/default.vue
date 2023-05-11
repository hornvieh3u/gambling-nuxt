<script setup lang="ts">
import { ref, computed } from 'vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import SideBarComponent from '@/components/sidebar/SideBarComponent.vue';
import PageFooter from '@/components/PageFooter.vue';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = computed(() => {
    return () => {
        leftDrawerOpen.value = !leftDrawerOpen.value;
    };
});
</script>

<template>
    <q-layout>
        <!-- Header -->
        <HeaderComponent :toggleLeftDrawer="toggleLeftDrawer" />

        <!-- SideBar -->
        <SideBarComponent
            :leftDrawerOpen.sync="leftDrawerOpen"
            :toggleLeftDrawer="toggleLeftDrawer"
        />

        <!-- Container -->
        <q-page-container style="background-color: #151515">
            <NuxtPage />
            <PageFooter />
        </q-page-container>

        <!-- Footer -->
        <q-footer
            class="text-sm font-normal text-center"
            style="background-color: #151515; color: #7d8396; padding: 10px"
            >Copyright 2023 Europa777 All Right Reserved.</q-footer
        >
    </q-layout>
</template>
