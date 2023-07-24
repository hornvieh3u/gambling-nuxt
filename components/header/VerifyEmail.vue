<script setup lang="ts">
import { ref , onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
const model = ref();

onBeforeMount(()=>{
    model.value = store.state.isVerifyEmail > 0;
})
const resend = () => {
    store.commit('handleVerifyEmail', 0);
        store.commit('handleResetCode', false);
}
</script>
<template>
    <q-dialog v-model="model" @hide="store.commit('handleVerifyEmail', 0)">
        <q-card style="width: 420px; max-width: 60vw">
            <div class="py-6 px-8 text-center" style="background: rgb(0 90 201)">
                <p class="font-bold text-xl text-shadow-lg">{{tran('verify your email address', store.state.lang)}}</p>
                <p class="font-normal text-xs pt-5">
                    {{tran('In the next few minutes, You will receive an email from us with a Verification Link.', store.state.lang)}}
                </p>
                <p class="font-normal text-xs pt-5">{{tran('Please check your email Inbox / Spam Box / Junk Box', store.state.lang)}}</p>
                <p v-if="store.state.isVerifyEmail==1" class="font-normal text-xs pt-5">{{tran('If you did not receive the email', store.state.lang)}}</p>
                <div v-if="store.state.isVerifyEmail==1" class="flex justify-center pt-4">
                    <p @click="resend" class="w-fit font-bold text-xs py-2 px-8 rounded-lg cursor-pointer hover:bg-blue-900 hover:bg-opacity-40">{{tran('CLICK HERE TO REQUEST ANOTHER', store.state.lang)}}</p>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
