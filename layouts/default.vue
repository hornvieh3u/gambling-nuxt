<script setup lang="ts">
import { onBeforeMount , inject } from 'vue';
import { useStore } from 'vuex';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import LeftSideBarComponent from '@/components/sidebar/SideBarComponent.vue';
import RightSideBarComponent from '@/components/sideNotification/NotificationComponent.vue';
import PageFooter from '@/components/footer/PageFooter.vue';
import Login from '~~/components/header/Login.vue';
import SignUp from '~~/components/header/SignUp.vue';
import VerifyEmail from '~~/components/header/VerifyEmail.vue';
import Welcome from '~~/components/header/Welcome.vue';
import MobileFooter from '~~/components/footer/MobileFooter.vue';
import MobilePageFooter from '~~/components/footer/MobilePageFooter.vue';
import { useQuasar } from 'quasar'
import { getProfile } from '~~/action/profile';
import { getProviders , getFavoriteGameSlugs } from '~~/action/game';
import { getBalances } from '~~/action/wallet';
import {useRoute , useRouter} from 'vue-router';
import { FpjsClient } from '@fingerprintjs/fingerprintjs-pro-spa';
import Cookies from 'js-cookie';
import { tran } from "~~/utils/translation";

const config = useRuntimeConfig();
const not = useQuasar();
const store = useStore();
const route = useRoute();
const router = useRouter();

// watch store.state.notification, when value changed, show notification
watch(
    ()=>store.state.notification,
    ()=>{not.notify({
            message: store.state.notification.type,
            caption: store.state.notification.message,
            icon: store.state.notification.type == 'Success'?'done':'info',
            iconColor: store.state.notification.type == 'Success'?'green':'red',
            color: 'white',
            textColor: 'dark',
            position: 'top-right',
            progress:true,
            multiLine: true,
            timeout: 1500,}) 
});

watch(()=>route.path, ()=>{
    if(Cookies.get("token")){      
        getBalances(store);
        getFavoriteGameSlugs(store, store.state.pageNumber);
    }                                  
});

//fingerprintClient Init
const fpjsClient = new FpjsClient({
    loadOptions: {
        apiKey: config.public.API_KEY
    }
});

// fetch fingerprint data and store in fpData
//init website(domain.com)
onBeforeMount(() => {        
    getProviders(store);   
    if(Cookies.get("token")){                               //if Cookie contains token
        store.commit('handleLogin', true);                  //store.state.isLogin value set true
        getProfile(store, router);                                  // get player profile
        getBalances(store);
        getFavoriteGameSlugs(store, store.state.pageNumber);
    }
    if(Cookies.get("lang")){
        store.commit('handleSetLanguage', Cookies.get("lang"));
    }
});
onMounted(() => {
    fpjsClient.init()
    .then(() => {
        fpjsClient.getVisitorData({ extendedResult: true })
        .then(visitorData=>{
            let fpData = visitorData;
            store.commit('handleVisitorID',fpData.visitorId);
        })
        .catch(err=>{
            store.commit('handleNotification',{type:'Error',message:`Can't fetch FingerPrint Data!\n Contact To Support Team!`});
        });
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:"FingerPrint initialize Error!\n Contact To Support Team!"});
    });  
});
</script>

<template>
    <q-layout view="hHh Lpp lff">
        <!-- Header -->
        <HeaderComponent />
        <!-- SideBar -->
        <LeftSideBarComponent />
        <RightSideBarComponent />
        
        <!-- Container -->
        <q-page-container class="bg-gray-900">
                <NuxtPage />
                <PageFooter v-if="!route.path.toString().includes('play')"/> 
                <MobilePageFooter />
                <MobileFooter />
                <!-- Footer -->
                <div
                    class="text-sm font-normal text-center p-3"
                    :class="store.state.isLogin&&'sm:pb-3 pb-[120px]'"
                    style="background-color: #151515; color: #7d8396;"
                    >Copyright 2023 {{tran('Europa777 All Right Reserved.', store.state.lang)}}
                </div>
        </q-page-container> 

        <Login />
        <SignUp />
        <SearchDialog />
        <AvatarDialog />
        <VerifyEmail />
        <Welcome />
    </q-layout>
</template>
