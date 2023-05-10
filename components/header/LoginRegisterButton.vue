<script setup lang="ts">
import { ref } from 'vue';

function handleLogin() {
    console.log("Login");
}
function handleRegister() {
    console.log("Register");

}
</script>

<template>
    <q-btn-group rounded class="bg-primary">
        <div class="q-pl-md q-pt-sm q-pb-sm q-pr-md text-white !rounded-3xl cursor-pointer whitespace-nowrap" @click="handleLogin()">
            Log In
        </div>
        <div style="background-color: #3F4655;" class="q-pl-md q-pt-sm q-pb-sm q-pr-md !rounded-3xl flex items-center justify-start cursor-pointer" @click="handleRegister()">
            Registeration
        </div>
    </q-btn-group>
</template>
