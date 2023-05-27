<script setup lang="ts">
function onItemClick() {
    console.log('Clicked on an Item');
}
const prifileList = [
    {
        name: 'Profile',
        icon: 'user',
        link: '/profile',
    },
    {
        name: 'Deposit',
        icon: 'deposit',
        link: '/profile',
    },
    {
        name: 'Bonus',
        icon: 'bonus',
        link: '/bonus',
    },
    {
        name: 'Promotions',
        icon: 'promotion',
        link: '/profile',
    },
    {
        name: 'Wallet',
        icon: 'wallet-icon',
        link: '/wallet',
    },
    {
        name: 'Game History',
        icon: 'game',
        link: '/profile',
    },
    {
        name: 'Log Out',
        icon: 'logout',
        link: '/profile',
    },
];
</script>

<template>
    <q-btn-dropdown class="btn-none hidden md:!block" label="Jeff O.">
        <q-list>
            <q-item
                v-for="profile in prifileList"
                clickable
                v-close-popup
                @click="onItemClick"
            >
                <q-item-section>
                    <nuxt-link :to="profile?.link" class="my-button">
                        <q-item-label>
                            <div class="flex items-center justify-start">
                                <img
                                    style="width: 12px"
                                    :src="`/imgs/header/${profile.icon}.png`"
                                    alt="profile"
                                />
                                <p class="text-xs pl-1">{{ profile.name }}</p>
                            </div>
                        </q-item-label>
                    </nuxt-link>
                </q-item-section>
            </q-item>
        </q-list>
    </q-btn-dropdown>
</template>
