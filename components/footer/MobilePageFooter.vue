<script setup lang="ts">
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import { tran } from "~~/utils/translation";
const store = useStore();
const router = useRouter();

const list = [
    {
        title: 'iGaming',
        content: [
            {
                name: 'All Games',
                link: '/casino',
            },
            {
                name: 'Slots',
                link: '/casino?tab=slots',
            },
            {
                name: 'Live Casino',
                link: '/casino?tab=live',
            },
            {
                name: 'Table',
                link: '/casino?tab=table',
            },
            {
                name: 'Roulette',
                link: '/casino?tab=roulette',
            },
        ],
    },
    {
        title: 'Quick Links',
        content: [
            {
                name: 'Registration',
                link: 'register'
            },
            {
                name: 'Deposit',
                link: "/wallet/deposit",
            },
            {
                name: 'Bonus',
                link: "/bonus/available-bonus",
            },
            {
                name: 'Withdraw',
                link: "/wallet/withdraw",
            },
            {
                name: 'Banking',
                link: "/wallet/deposit",
            },
        ],
    },
    {
        title: 'About Us',
        content: [
            // {
            //     name: 'About Europa777',
            //     link: '',
            // },
            // {
            //     name: 'Provably Fair',
            //     link: '',
            // },
            {
                name: 'Contact Us',
                link: '/contact-us',
            },
            {
                name: 'FAQ’s',
                link: '/faq',
            },
            {
                name: 'Affiliates',
                link: 'Affiliates',
            },
        ],
    },
    {
        title: 'Help',
        content: [
            {
                name: 'Terms & Conditions',
                link: "/terms-and-conditions",
            },
            {
                name: 'Bonus Terms',
                link: "/bonus-terms-and-conditions",
            },
            {
                name: 'Privacy & Security Policy',
                link: "/privacy-and-security-policy",
            },
            {
                name: 'Fairness & RNG Testing',
                link: '/Fairness-RNG-Testing',
            },
            {
                name: 'Responsible Gambling',
                link: "/responsible-gambling",
            },
            {
                name: 'Self-exclusion',
                link: '/Self-exclusion',
            },
            {
                name: 'KYC + AML Policy',
                link: '/KYC-AML-Policy',
            },
            {
                name: 'Deposit Policy',
                link: '/Deposit-Policy',
            },
            {
                name: 'Withdrawal Policy',
                link: '/Withdrawal-Policy',
            },
            {
                name: 'Privacy Policy',
                link: '/Privacy-Policy',
            },
            {
                name: 'Payment Details Policy',
                link: '/Payment-Details-Policy',
            },
        ],
    },
];

const itemClick = (link) => {
    if(link == "register")
        store.commit('handleOnRegister',true);
    else
        router.push(linkTo(link));
}
</script>

<template>
    <div
        class="sm:hidden"
        style="
            background: radial-gradient(
                94.97% 94.97% at 50% 5.03%,
                #202531 0%,
                #202531 50.48%,
                #1f252e 100%,
            );
        "
    >
        <div
            style="border-bottom: 1px solid rgba(123, 129, 147, 0.3)"
            class="p-5 grid grid-cols-1"
        >
            <button
                style="border-bottom: 1px solid rgba(123, 129, 147, 0.3)"
                v-for="item in list"
                class="group focus:outline-none p-1 rounded-sm relative"
            >
                <div
                    class="flex items-center justify-between h-12 font-semibold relative px-2"
                >
                    <div
                        class="w-full h-full absolute left-0 top-0 opacity-80 rounded-sm"
                    ></div>
                    <div class="relative flex justify-start items-center">
                        <p style="font-size: 13px" class="font-medium p-3">
                            {{ tran(item?.title, store.state.lang) }}
                        </p>
                    </div>
                    <q-img
                        class="w-2 relative"
                        src="/imgs/sidebar/accordion_icon.svg"
                    />
                </div>
                <div
                    class="relative max-h-0 overflow-hidden duration-300 group-focus:max-h-80"
                >
                <div
                    v-for="topic in item?.content"
                >
                    <a 
                        href="https://affiliateslots.com/" 
                        target="_blank"
                    >    
                        <p
                            v-if=" topic?.link == 'Affiliates' "
                            class="pb-1 py-2 px-6 text-xs text-left"
                        >
                        {{ tran(topic?.name, store.state.lang) }}
                        </p>
                    </a>
                    <p
                        v-if=" topic?.link != 'Affiliates' "
                        class="pb-1 py-2 px-6 text-xs text-left"
                        @click="itemClick(topic?.link)"
                    >
                    {{ tran(topic?.name, store.state.lang) }}
                    </p>
                </div>
                </div>
            </button>

            <div class="m-auto pt-4 text-center">
                <q-img
                    style="max-width: 163px"
                    src="/imgs/logo_full.png"
                    alt="logo"
                    class="cursor-pointer"
                    @click="$router.push(linkTo('/'))"
                />
                <p class="pt-4" style="font-size: 9px; font-weight: 500">
                    {{ tran(`footerDescription`, store.state.lang) }}
                </p>
            </div>

            <div class="flex flex-row flex-wrap justify-around pt-4">
                <div>
                    <p class="text-base font-semibold pb-2">{{ tran(`Payment Methods`, store.state.lang) }}</p>
                    <q-img
                        class="w-full"
                        src="/imgs/footer/payment.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <p class="text-center text-base font-semibold pb-2">{{ tran(`Follow Us`, store.state.lang) }}</p>
                    <div class="flex justify-between items-center">
                        <q-img
                            style="width: 17px;margin: 5px;"
                            src="/imgs/footer/telegram.png"
                            alt="logo"
                        />
                        <q-img
                            style="width: 17px;margin: 5px;"
                            src="/imgs/footer/youtube.png"
                            alt="logo"
                        />
                        <q-img
                            style="width: 17px;margin: 5px;"
                            src="/imgs/footer/twitter.png"
                            alt="logo"
                        />
                        <q-img
                            style="width: 17px;margin: 5px;"
                            src="/imgs/footer/instagram.png"
                            alt="logo"
                        />
                        <q-img
                            style="width: 17px;margin: 5px;"
                            src="/imgs/footer/linkdin.png"
                            alt="logo"
                        />
                        <img
                            style="height: 17px;margin: 5px;"
                            src="/imgs/footer/facebook.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
