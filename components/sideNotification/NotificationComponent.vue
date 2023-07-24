<template>
    <q-drawer
        v-model="store.state.isSideNotification"
        side="right"
        show-if-above
        overlay
        elevated
        :width="270"
        class="pt-3 overflow-x-hidden bg-gray-800"
        @before-hide="store.commit('handleSideNotification', false)"
    >
        <div class="flex items-center px-3">
            <q-btn dense flat icon="close" size="md" round @click="()=>store.commit('handleSideNotification', false)"></q-btn>
            <p class="text-lg font-bold text-white pl-5">Notifications</p>
        </div>
        <p class="text-md text-center p-5 border-b-2">You have notifications!</p>
        <NotificationItem v-for="i in 3"/>
    </q-drawer>
</template>
<script setup lang="ts">
import {useStore} from 'vuex';
import NotificationItem from './NotificationItem.vue';

const store = useStore();
</script>