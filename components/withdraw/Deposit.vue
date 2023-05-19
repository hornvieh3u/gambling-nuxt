.
<template>
    <div class="inset-0 rounded-md w-full px-6 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <div class="grid grid-cols-10 gap-4">
                <div class="col-span-4">
                    <div class="flex items-center justify-between w-full">
                        <p class="font-bold text-base">Balance</p>
                        <div class="flex items-center justify-around">
                            <span class="font-bold text-base pr-2">0.00</span>
                            <q-select
                                style="color: rgba(255, 255, 255, 0.35)"
                                class="text-xs"
                                v-model="currency"
                                :options="options"
                                borderless
                                :dense="true"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div
                            v-for="payment in paymentList"
                            class="rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col"
                        >
                            <img
                                style="max-height: 50%"
                                :src="`/_nuxt/assets/imgs/payment/${payment?.icon}.png`"
                                spinner-color="primary"
                            />
                            <p class="text-xs" style="color: #535559">
                                Min C$30
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-span-6">
                    <p class="font-bold text-base py-2">Interac</p>
                    <p class="font-bold text-base">Deposit Sum</p>

                    <div class="flex justify-start items-center py-4">
                        <q-btn class="w-28 h-10" color="primary" label="50" />
                        <div class="p-1"></div>
                        <q-btn
                            style="background: #120f0f 95%"
                            class="w-28 h-10"
                            label="100"
                        />
                    </div>

                    <q-input
                        class="w-full pr-2"
                        filled
                        v-model="number"
                        type="number"
                        suffix="CAD"
                        :dense="true"
                    />

                    <div class="flex items-center justify-between py-4">
                        <p class="text-base font-bold">Available Bonuses</p>
                        <q-toggle
                            size="xs"
                            v-model="shape"
                            val="xs"
                            leftLabel
                            label="Use Bonuses"
                        />
                    </div>

                    <div class="flex items-center justify-start">
                        <q-input
                            class="w-full pr-2"
                            filled
                            v-model="number"
                            type="number"
                            :dense="true"
                        />
                        <q-btn color="primary" label="SET" />
                    </div>

                    <p style="color: #949497;" class="text-xs py-4">
                        No Bonuses Available
                    </p>

                    <q-btn class="px-10 h-10" color="primary" label="Deposit 30 CAD" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const shape = ref(['']);
const number = 0;
const currency = 'CAD';
const options = ['CAD', 'USD'];
const paymentList = [
    {
        icon: 'visa',
        balance: '',
    },
    {
        icon: 'mastercard',
        balance: '',
    },
    {
        icon: 'bitcoin',
        balance: '',
    },
    {
        icon: 'skrill',
        balance: '',
    },
    {
        icon: 'tron',
        balance: '',
    },
    {
        icon: 'ethereum',
        balance: '',
    },
    {
        icon: 'usdt',
        balance: '',
    },
    {
        icon: 'ripple',
        balance: '',
    },
    {
        icon: 'interac',
        balance: '',
    },
    {
        icon: 'jeton',
        balance: '',
    },
    {
        icon: 'binance',
        balance: '',
    },
    {
        icon: 'astropay',
        balance: '',
    },
    {
        icon: 'neosurf',
        balance: '',
    },
    {
        icon: 'neteuer',
        balance: '',
    },
    {
        icon: 'much',
        balance: '',
    },
    {
        icon: 'ecopayz',
        balance: '',
    },
    {
        icon: 'cardano',
        balance: '',
    },
    {
        icon: 'litecoin',
        balance: '',
    },
    {
        icon: 'sticpay',
        balance: '',
    },
    {
        icon: 'cashtocode',
        balance: '',
    },
    {
        icon: 'mifinity',
        balance: '',
    },
    {
        icon: 'bitcoin_cash',
        balance: '',
    },
];
</script>
