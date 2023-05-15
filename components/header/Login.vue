<script setup lang="ts">
import { ref } from 'vue';

const loginInfo = {
    email: ref(''),
    password: ref(''),
};
</script>
<template>
    <div style="background: #0072ff 90%">
        <div class="grid grid-cols-2 p-6">
            <div class="p-1">
                <q-img
                    style="max-width: 221px"
                    src="@/assets/imgs/man_right.png"
                    alt="man"
                />
            </div>
            <div class="p-1 text-center">
                <p class="font-black text-3xl text-shadow-lg">Europe #1</p>
                <p class="font-medium text-base text-shadow-lg">
                    Online Casino
                </p>
                <span
                    class="p-1 text-shadow-lg"
                    style="
                        font-size: 8px;
                        font-family: Montserrat-Italic;
                        border-bottom: 1px solid rgba(95, 83, 106, 0.5);
                    "
                >
                    Enjoy 3500+ games, fast payouts and 24/7 live support.
                </span>
                <div>
                    <P
                        class="font-bold text-xl text-shadow-lg text-center py-2"
                    >
                        Log in user
                    </P>
                    <div class="flex items-center justify-start">
                        <q-icon class="opacity-50" size="sm" name="person" />
                        <q-input
                            class="text-shadow-lg w-full"
                            type="email"
                            placeholder="Email address"
                            standout
                            v-model="loginInfo.email.value"
                            :dense="true"
                        />
                    </div>
                    <div class="flex items-center justify-start">
                        <q-icon class="opacity-50" size="sm" name="lock" />
                        <q-input
                            class="pt-2 text-shadow-lg w-full"
                            type="password"
                            placeholder="Password"
                            standout
                            v-model="loginInfo.password.value"
                            :dense="true"
                        />
                    </div>
                    <div class="flex justify-between items-center pt-2 pl-6">
                        <span style="font-size: 8px">Remember me</span>
                        <span style="font-size: 8px"
                            >Forgot your password?</span
                        >
                    </div>
                    <q-btn
                        class="mt-4 font-bold"
                        style="
                            background-color: #fff004;
                            color: black;
                            font-size: 20px;
                        "
                        label="LOG IN"
                    />
                    <p style="font-size: 8px" class="pt-4">
                        Don’t have an account yet?
                    </p>
                    <q-btn
                        style="font-size: 10px"
                        class="mt-4 font-medium p-4"
                        label="Create account"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
