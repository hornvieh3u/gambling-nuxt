<script setup lang="ts">
import { ref } from 'vue';

const loginInfo = {
    email: ref(''),
    password: ref(''),
};
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    toggleState: {
        type: Function,
        required: true,
    },
});
let open = ref(props.open);
watch(props, (newValue) => {
    console.log(newValue.open);

    open.value = newValue.open;
});
</script>
<template>
    <q-dialog v-model="open" @hide="props.toggleState('onSignUp', false)">
        <q-card style="width: 700px; max-width: 60vw">
            <div style="background: #0072ff 90%">
                <div class="grid grid-cols-2 p-6">
                    <div class="p-1">
                        <q-img
                            class="-mb-16"
                            style="max-width: 221px"
                            src="/imgs/new.png"
                            alt="man"
                        />
                        <q-img
                            style="max-width: 221px"
                            src="/imgs/casino_offers.png"
                            alt="man"
                        />
                    </div>
                    <div class="p-1 text-center">
                        <div>
                            <P
                                class="font-bold text-xl text-shadow-lg text-center py-2"
                            >
                                Sign up
                            </P>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="person"
                                />
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
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    placeholder="Password"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    placeholder="Password"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full pr-2"
                                    type="password"
                                    placeholder="Password"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    placeholder="Password"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full pr-2"
                                    type="password"
                                    placeholder="Password"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    placeholder="Password"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div
                                class="flex justify-between items-center pt-2 pl-6"
                            >
                                <span style="font-size: 8px"
                                    >I confirm that I am at least 18 years old
                                    and I have read and accept the General Terms
                                    of Conditions</span
                                >
                            </div>
                            <q-btn
                                @click="
                                    () => {
                                        props.toggleState(
                                            'isVerifyEmail',
                                            true
                                        );
                                        props.toggleState('onSignUp', false);
                                    }
                                "
                                class="mt-4 font-bold"
                                style="
                                    background-color: #fff004;
                                    color: black;
                                    font-size: 20px;
                                "
                                label="Register"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
