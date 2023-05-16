<script setup lang="ts">
import { ref, computed } from 'vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import SideBarComponent from '@/components/sidebar/SideBarComponent.vue';
import PageFooter from '@/components/PageFooter.vue';
import Login from '~~/components/header/Login.vue';

interface State {
    [name: string]: Ref<boolean>;
}

const state: State = {
    isLogin: ref(false),
    isSignUp: ref(false),
    leftDrawerOpen: ref(false),
};

function toggleState(name: string, val: boolean) {
    console.log(name, val);
    state[name].value = val;
}
</script>

<template>
    <q-layout>
        <!-- Header -->
        <HeaderComponent
            :leftDrawerOpen="state?.leftDrawerOpen.value"
            :toggleState="(name: string, val: boolean)=>toggleState(name, val)"
        />

        <!-- SideBar -->
        <SideBarComponent
            :leftDrawerOpen.sync="state?.leftDrawerOpen.value"
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
        <Login :open.sync="state?.isLogin.value" :toggleState="toggleState" />
    </q-layout>
</template>
