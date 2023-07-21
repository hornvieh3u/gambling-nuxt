<script setup lang="ts">
import {useStore} from "vuex";
import {useRouter} from 'vue-router';
import {logOut} from '~~/action/auth';

const store = useStore();
const router = useRouter();
</script>

<template>
    <div class="relative">
        <div style="background: #383d47" class="inset-0 rounded-md w-full">
            <div
                style="background: #3f4655"
                class="!w-1/3 square transform rotate-45 left-1/2 -translate-x-1/2 top-12 sm:top-28 md:top-10 lg:top-8 rounded-lg overflow-hidden text-center"
            >
                <q-img
                    class="w-full transform -rotate-45"
                    alt="avatar"
                    :class="store.state.User.avatar!=null && 'scale-[1.35]'"
                    :src="store.state.User.avatar==null?`/imgs/header/avatar${store.state.User.gender}.png`:store.state.User.avatar"
                />
            </div>
            <div class="w-full text-center mt-24 sm:mt-40 md:mt-16 lg:mt-16">
                <div class="flex justify-center pb-2">
                    <q-btn size="sm" color="primary" no-caps :label="tran('Update Profile Image', store.state.lang)" @click="store.commit('handleOnAvatarDialog', true);"></q-btn>
                </div>
                <p class="font-bold text-xl pb-3">{{store.state.User.username}}</p>
                <p style="color: #ffffff8c" class="text-sm pb-1">
                    {{store.state.User.email}}
                </p>
                <q-img class="w-7 mb-4 cursor-pointer" src="/imgs/logout.png" @click="logOut(store,router)"/>
            </div>
        </div>
    </div>
</template>
