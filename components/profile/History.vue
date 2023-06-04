<template>
    <div
        style="background: #383d47"
        class="inset-0 rounded-md w-full px-7 pt-6 pb-10"
    >
        <div
            style="border-bottom: 1px solid #f5f5f5"
            class="pb-4 grid grid-cols-12"
        >
            <p class="text-base font-medium col-span-4">Time</p>
            <p class="text-base font-medium col-span-4">Game Name</p>
            <p class="text-base font-medium col-span-2">Bet Sum</p>
            <p class="text-base font-medium col-span-2">Win</p>
        </div>
        <div
            style="border-bottom: 1px solid #f5f5f5"
            class="py-3 grid grid-cols-12"
            v-for="history in gameHistory"
            :history="history"
        >
            <p class="text-sm font-medium col-span-4">{{ history?.time }}</p>
            <p class="text-sm font-medium col-span-4">{{ history?.name }}</p>
            <p class="text-sm font-medium col-span-2">{{ history?.betSum }}</p>
            <p class="text-sm font-medium col-span-2">{{ history?.win }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useStore} from 'vuex';
import { onBeforeMount , ref } from 'vue';
import axios from 'axios';

const store = useStore();

onBeforeMount(() => {
    //  if(store.state.gameHistory == {}){
        axios({
                method:'get',
                url: 'https://beta.canada777.com/api/player/getGamePlayHistory',
                headers: {
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                },
            })
        .then(res => {
            gameHistory = res.data.gamePlayHistory.data
        })
        .catch(err => {
        });
    // }
});
interface history {
    time: Date,
    name: string,
    betSum: string,
    win: string,
}
let gameHistory = ref<history[]>([]);
</script>
