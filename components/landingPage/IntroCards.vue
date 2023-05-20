<script setup lang="ts"></script>
<template>
    <div>
        <div class="relative mt-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p class="font-bold text-xl text-shadow-lg">
                            BONUS WHEEL
                        </p>
                        <p class="text-xs">Get free spin every 2 hours!</p>
                        <q-btn class="mt-4" size="xs" label="Free Spin" />
                    </div>
                    <q-img
                        src="/imgs/back_bonus.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="/imgs/wheel.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div class="flex items-center justify-between relative">
                    <div
                        class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p class="font-bold text-xl text-shadow-lg">
                            DAILY CASHBACK
                        </p>
                        <div class="flex items-center justify-start">
                            <p class="text-xs">UP TO</p>
                            <p
                                style="color: #ffd62f"
                                class="text-5xl font-black pl-1"
                            >
                                20%
                            </p>
                        </div>
                    </div>
                    <q-img
                        src="/imgs/back_daily.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="/imgs/cash_back.png"
                        spinner-color="primary"
                        alt="title"
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 pt-6">
                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p
                            style="line-height: 19px"
                            class="font-bold text-base text-shadow-lg"
                        >
                            2nd/3rd
                        </p>
                        <p
                            style="line-height: 19px"
                            class="font-bold text-base text-shadow-lg"
                        >
                            deposit
                        </p>
                        <p class="gradiant text-2xl font-black">100%</p>
                        <p class="gradiant text-2xl font-black">bonus</p>
                    </div>
                    <q-img
                        src="/imgs/back_dark.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0"
                        src="/imgs/promotion.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div class="flex items-center justify-around relative">
                    <div
                        class="w-full absolute left-8 top-8 lg:left-3 lg:top-3 z-10"
                    >
                        <p class="gradiant font-black text-2xl text-shadow-lg">
                            WELCOME BONUS
                        </p>
                    </div>
                    <div class="absolute z-10 right-8">
                        <p
                            class="gradiant font-black text-3xl text-shadow-lg"
                        >
                            200%
                        </p>
                        <div class="flex items-center">
                            <p
                                style="line-height: 19px"
                                class="gradiant font-bold text-base text-shadow-lg"
                            >
                                +100
                            </p>
                            <p>Free spins</p>
                        </div>
                    </div>
                    <q-img
                        src="/imgs/back_dark.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute left-0 bottom-0"
                        src="/imgs/pack.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p class="text-xs">Get a special</p>
                        <p class="font-bold text-base text-shadow-lg">
                            bonus on
                        </p>
                        <p class="gradiant text-lg font-black">SPORTBOOK</p>
                    </div>
                    <q-img
                        src="/imgs/back_dark.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0"
                        src="/imgs/sportbook.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>
