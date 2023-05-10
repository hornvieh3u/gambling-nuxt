<template>
    <div style="border-bottom: 1px solid rgba(125, 131, 150, 0.5);" class="flex justify-start items-center">
        <img
            class="w-5"
            src="@/assets/imgs/sidebar/deposit.png"
            alt="deposit"
        />
        <p class="font-semibold text-sm p-3">Deposit</p>
    </div>

    <!-- Component Start -->
    <div class="flex flex-col">
        <button class="group focus:outline-none">
            <div
                class="flex items-center justify-between h-12 font-semibold"
            >
                <div class="flex justify-start items-center">
                    <img
                        class="w-5"
                        src="@/assets/imgs/sidebar/games.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Games</p>
                </div>
                <img src="/_nuxt/assets/imgs/sidebar/accordion_icon.svg" />
            </div>
            <SideBarGameCategory />
        </button>
        <button class="group focus:outline-none">
            <div
                class="flex items-center justify-between h-12 font-semibold"
            >
                <div class="flex justify-start items-center">
                    <img
                        class="w-5"
                        src="@/assets/imgs/sidebar/sports.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Sportbook</p>
                </div>
                <img src="/_nuxt/assets/imgs/sidebar/accordion_icon.svg" />
            </div>
            <SideBarGameCategory />
        </button>
        <button class="group focus:outline-none">
            <div
                class="flex items-center justify-between h-12 font-semibold"
            >
                <div class="flex justify-start items-center">
                    <img
                        class="w-5"
                        src="@/assets/imgs/sidebar/promotions.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Promotions</p>
                </div>
                <img src="/_nuxt/assets/imgs/sidebar/accordion_icon.svg" />
            </div>
            <SideBarGameCategory />
        </button>
        <button class="group focus:outline-none">
            <div
                class="flex items-center justify-between h-12 font-semibold"
            >
                <div class="flex justify-start items-center">
                    <img
                        class="w-5"
                        src="@/assets/imgs/sidebar/referral.png"
                        alt="deposit"
                    />
                    <p class="font-semibold text-sm p-3">Referral</p>
                </div>
                <img src="/_nuxt/assets/imgs/sidebar/accordion_icon.svg" />
            </div>
            <SideBarGameCategory />
        </button>
    </div>
    <!-- Component End  -->

    <div style="border-bottom: 1px solid rgba(125, 131, 150, 0.5);" class="flex justify-start items-center">
        <img class="w-5" src="@/assets/imgs/sidebar/vip.png" alt="deposit" />
        <p class="font-semibold text-sm p-3">VIP</p>
    </div>
    
    <div style="color: #7B8193;" class="flex justify-start items-center">
        <img class="w-5" src="@/assets/imgs/sidebar/fav.png" alt="deposit" />
        <p style="font-size: 11px" class="font-medium p-3">Favorites</p>
    </div>

    <div style="color: #7B8193; border-bottom: 1px solid rgba(125, 131, 150, 0.5);" class="flex justify-start items-center">
        <img class="w-5" src="@/assets/imgs/sidebar/recent.png" alt="deposit" />
        <p style="font-size: 11px" class="font-medium p-3">Recently Played</p>
    </div>
    <p style="font-size: 11px; color: #7B8193" class="font-medium pt-2">Europa777 Docs</p>
    <p style="font-size: 11px; color: #7B8193" class="font-medium pt-2">Contact Us</p>
</template>

<script setup lang="ts">
import SideBarGameCategory from './SideBarGameCategory.vue';
</script>
