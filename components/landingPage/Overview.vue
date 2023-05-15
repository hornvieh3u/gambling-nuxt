<script setup lang="ts"></script>
<template>
    <div class="relative pb-11 w-full">
        <div>
            <p class="font-bold text-3xl pl-3">Welcome Back Jeff on</p>
            <img
                class="md:max-w-sm sm:max-w-xs w-auto"
                src="@/assets/imgs/logo_full.png"
                alt="logo"
            />
            <p class="font-bold text-3xl pl-3"># 1 Online casino</p>
            <p
                style="font-family: Montserrat-Italic"
                class="font-medium text-lg pl-3 pt-1"
            >
                Enjoy 3500+ games, fast payouts and 24/7 live support.
            </p>
            <div class="pt-3 pl-3">
                <q-btn
                    class="font-bold text-lg md:text-xl lg:text-2xl lg:px-6"
                    outline
                    color="white"
                    label="play slots"
                />
                <q-btn
                    class="font-bold text-lg md:text-xl lg:text-2xl lg:px-6 ml-4"
                    unelevated
                    color="primary"
                    label="Deposit"
                />
            </div>
            <div class="flex items-center justify-start pt-3 pl-3">
                <q-img
                    class="w-9 md:w-10 lg:w-12"
                    src="@/assets/imgs/visa.png"
                    alt="visa"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="@/assets/imgs/master_card.png"
                    alt="master_card"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="@/assets/imgs/interac.png"
                    alt="interac"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="@/assets/imgs/bitcoin.png"
                    alt="bitcoin"
                />
                <q-img
                    class="w-9 md:w-10 lg:w-12 ml-1"
                    src="@/assets/imgs/etirum.png"
                    alt="etirum"
                />
            </div>
        </div>

        <img
            class="absolute right-0 -bottom-24 z-0 hidden lg:!block sm:max-w-sm md:max-w-md lg:max-w-lg"
            src="@/assets/imgs/new.png"
            alt="new"
        />
    </div>
</template>
