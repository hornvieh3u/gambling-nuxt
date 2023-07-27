<script setup lang="ts">
    import { ref , watch} from 'vue';
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router';
    import { forgotPassword , logIn , setNewPassword } from '~~/action/auth';
    import { tran } from "~~/utils/translation";    

    const store = useStore();
    const router = useRouter();
    //watch login state
    watch(
        ()=>store.state.User,
        ()=>{
            if(Object.keys(store.state.User).length === 0){             //once user logout, store.state.User become {}, then show login dialog
                store.commit('handleOnLogin',true);
            }
            else{                                                       //once user login, store.state.User become {...}, then hide login dialog
                store.commit('handleOnLogin',false);                     //then set store.state.login value to true.
                store.commit('handleLogin',true);
            }
    });

    const loginInfo = {
        email: ref(''),
        password: ref(''),
    };
    const isForgot=ref(false);
    const forgot = (value) =>{
        isForgot.value=value;
    }
    const login = () => {
        let data = {};
        Object.keys(loginInfo).map(item => {
            data = {...data, [item] : loginInfo[item].value};
        });
        data={...data, visitorId: store.state.visitorID};
        logIn(data, store, router);
    }
    const resetInfo = {
        code:ref(''),
        newPass:ref(''),
        newPassconfirm:ref('')
    };
    const setNewPass = () => {
        let data = {};
        Object.keys(resetInfo).map(item => {
            data = {...data, [item] : resetInfo[item].value};
        });
        data = {...data, email : loginInfo.email.value};
        setNewPassword(data, store, router);
    }
</script>
<template>
    <q-dialog v-model="store.state.onLogin" @hide="()=>{store.commit('handleOnLogin', false); isForgot=false; loginInfo.email.value=''; loginInfo.password.value='';}">
        <q-card class="w-full sm:w-4/5 md:w-3/5" style="width: 700px">
            <div style="background: rgb(0 90 201)">
                <div class="sm:grid sm:grid-cols-2 p-6">
                    <div class="p-1 hidden sm:!block">
                        <q-img
                            style="max-width: 221px"
                            src="/imgs/man_right.png"
                            alt="man"
                        />
                    </div>
                    <div class="p-1 text-center">
                        <p class="font-black text-3xl text-shadow-lg">
                            {{tran('Europe #1', store.state.lang)}}
                        </p>
                        <p class="font-medium text-base text-shadow-lg">
                            {{tran('Online Casino', store.state.lang)}}
                        </p>
                        <span
                            class="p-1 text-shadow-lg"
                            style="
                                font-size: 8px;
                                font-family: Montserrat-Italic;
                                border-bottom: 1px solid rgba(95, 83, 106, 0.5);
                            "
                        >
                            {{tran('enjoy', store.state.lang)}}
                        </span>
                        <div v-if="!store.state.haveResetCode" :class="isForgot&&'mt-8'">
                            <p
                                class="font-bold text-xl text-shadow-lg text-center py-2"
                            >
                                {{isForgot?tran('Reset Password', store.state.lang):tran('Log in user', store.state.lang)}}
                            </p>
                            <div class="flex flex-nowrap items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="mail"
                                />
                                <q-input
                                    class="text-shadow-lg w-full"
                                    type="email"
                                    :placeholder="tran('Email address', store.state.lang)"
                                    standout
                                    v-model="loginInfo.email.value"
                                    :dense="true"
                                />
                            </div>
                            <div v-if="isForgot==false" class="flex flex-nowrap items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    :placeholder="tran('Password', store.state.lang)"
                                    standout
                                    v-model="loginInfo.password.value"
                                    :dense="true"
                                />
                            </div>
                            <div
                                v-if="isForgot==false"
                                class="flex flex-nowrap justify-between items-center pt-2 pl-6"
                            >
                                <span class="cursor-pointer" style="font-size: 10px">{{tran('Remember me', store.state.lang)}}</span>
                                <span 
                                    @click="forgot(true)"
                                    class="cursor-pointer" 
                                    style="font-size: 10px"
                                >
                                    {{tran('Forgot your password?', store.state.lang)}}</span
                                >
                            </div>
                            <q-btn
                                class="mt-4 font-bold w-full"
                                no-caps
                                style="
                                    background-color: #fff004;
                                    color: black;
                                    font-size: 20px;
                                "
                                :style="isForgot && 'font-size:15px'"
                                @click="isForgot?forgotPassword(loginInfo.email.value, store):login()"
                                :label="isForgot?tran('Reset Password', store.state.lang):tran('LOG IN', store.state.lang)"
                            />
                            <p v-if="isForgot==false" class="pt-4 text-xs">
                                {{tran('Don’t have an account yet?', store.state.lang)}}
                            </p>
                            <p 
                            v-if="isForgot" 
                            class="pt-4 text-xs cursor-pointer"
                            @click="forgot(false)"
                            >
                                {{tran('Remembered? Login', store.state.lang)}}
                            </p>
                            <q-btn
                                v-if="isForgot==false" 
                                class="mt-4 font-medium p-2 text-xs w-full"
                                @click="
                                    () => {
                                        store.commit('handleOnLogin', false);
                                        store.commit('handleOnRegister', true);
                                    }
                                "
                                :label="tran('Create account', store.state.lang)"
                            />
                        </div>
                        <div v-if="store.state.haveResetCode">
                            <p
                                class="font-bold text-xl text-shadow-lg text-center py-2"
                            >
                                {{tran('Reset Password', store.state.lang)}}
                            </p>
                            <div class="flex flex-nowrap items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="code"
                                />
                                <q-input
                                    class="text-shadow-lg w-full"
                                    type="email"
                                    :placeholder="tran('Verification Code', store.state.lang)"
                                    standout
                                    v-model="resetInfo.code.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex flex-nowrap items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    :placeholder="tran('New Password', store.state.lang)"
                                    standout
                                    v-model="resetInfo.newPass.value"
                                    :dense="true"
                                />
                            </div>
                            <div class="flex flex-nowrap items-center justify-start">
                                <q-icon
                                    class="opacity-50"
                                    size="sm"
                                    name="lock"
                                />
                                <q-input
                                    class="pt-2 text-shadow-lg w-full"
                                    type="password"
                                    :placeholder="tran('Confirm Password', store.state.lang)"
                                    standout
                                    v-model="resetInfo.newPassconfirm.value"
                                    :dense="true"
                                />
                            </div>
                            <q-btn
                                class="mt-4 font-bold w-full"
                                no-caps
                                style="
                                    background-color: #fff004;
                                    color: black;
                                    font-size: 20px;
                                "
                                :style="isForgot && 'font-size:15px'"
                                @click="setNewPass()"
                                :label="tran('Set New Password', store.state.lang)"
                            />
                            <p
                                class="pt-4 text-xs cursor-pointer"
                                @click="store.commit('handleResetCode', false)"
                            >
                                {{tran("Didn't Receive Code? Resend!", store.state.lang)}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
