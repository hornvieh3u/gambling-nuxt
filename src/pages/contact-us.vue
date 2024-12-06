<template>
    <div class="w-5/6 mx-auto p-10">
        <div class="flex justify-center">
            <p class="text-xl lg:text-2xl font-bold py-3 mt-3 px-7 lg:px-12 bg-gray-800 rounded-xl">{{ tran('CONTACT US', store.state.lang) }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3 ">
            <div>
                <p class="text-lg py-2 lg:py-4 font-semibold">{{ tran('Name', store.state.lang) }}</p>
                <q-input outlined v-model="content.name.value" class="w-full text-lg"/>
                <p class="text-red-400 text-md pt-1 pl-2" v-if="validation.name.value!=''">{{  tran(validation.name.value, store.state.lang)  }}</p>
            </div>
            <div>
                <p class="text-lg py-2 lg:py-4 font-semibold">{{ tran('Email', store.state.lang) }}</p>
                <q-input outlined v-model="content.email.value" class="w-full text-lg"/>
                <p class="text-red-400 text-md pt-1 pl-2" v-if="validation.email.value!=''">{{ tran(validation.email.value, store.state.lang) }}</p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3 ">
            <div>
                <p class="text-lg py-2 lg:py-4 font-semibold">{{ tran('Phone', store.state.lang) }}</p>
                <q-input outlined v-model="content.phone.value" class="w-full text-lg"/>
                <p class="text-red-400 text-md pt-1 pl-2" v-if="validation.phone.value!=''">{{ tran(validation.phone.value, store.state.lang) }}</p>
            </div>
            <div>
                <p class="text-lg py-2 lg:py-4 font-semibold">{{ tran('Department', store.state.lang) }}</p>
                <q-input outlined v-model="content.department.value" class="w-full text-lg" :placeholder="tran('Deposit, Withdraw, kyc, Technical, Others', store.state.lang)"/>
                <p class="text-red-400 text-md pt-1 pl-2" v-if="validation.department.value!=''">{{ tran(validation.department.value, store.state.lang) }}</p>
            </div>
        </div>
        <div>
            <p class="text-lg py-2 lg:py-4 font-semibold">{{ tran('Message', store.state.lang) }}</p>
            <q-input outlined class=" text-lg" v-model="content.message.value" type="textarea"/>
            <p class="text-red-400 text-md pt-1 pl-2" v-if="validation.message.value!=''">{{ tran(validation.message.value, store.state.lang) }}</p>
        </div>
        <div>
            <q-btn @click="valid" :label="tran('SEND MESSAGE', store.state.lang)" color="gray-800" class="font-bold text-lg px-5 mt-4"></q-btn>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useStore} from "vuex";
import {tran} from "~~/utils/translation";
import {changeTitle} from "~~/utils/string";
import {contactus} from "~~/action/others";

const store = useStore();
const content = {
    name:ref(''),
    email:ref(''),
    phone:ref(''),
    department:ref(''),
    message:ref('')
};
const validation = {
    name:ref(''),
    email:ref(''),
    phone:ref(''),
    department:ref(''),
    message:ref('')
};
const valid = () => {
    let sendFlag=true;
    Object.keys(validation).map(item=>validation[item].value='');
    Object.keys(content).map(item=>{
        if(item=='email'){
            if(!validateEmail(content[item].value)) {
                validation.email.value='Invalid Mail Address';
                sendFlag=false;
            }
        }
        if(item!='phone' && content[item].value=='') {
            validation[item].value=`Input ${changeTitle(item)}`;
            sendFlag=false;
        }
    });
    if(sendFlag) {
        sendMessage();
        Object.keys(validation).map(item=>validation[item].value='');
    }
}
const validateEmail = (email) => {
    let regex = new RegExp('[a-z0-9]+@+[a-z0-9]+.com');
    return regex.test(email)
};
const sendMessage = () => {
    let data = {};
    Object.keys(content).map(item => {
        data = {...data, [item] : content[item].value};
    });
    contactus(data, store);
}
</script>