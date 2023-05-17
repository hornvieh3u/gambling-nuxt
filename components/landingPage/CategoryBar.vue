<script setup lang="ts">
import CategoryBarItem from './CategoryBarItem.vue';

const categories = [
    {
        name: 'All Games',
        icon: 'games',
        active: true,
    },
    {
        name: 'Slots',
        icon: 'slot',
        active: false,
    },
    {
        name: 'Live Casino',
        icon: 'live_casino',
        active: false,
    },
    {
        name: 'Table',
        icon: 'table',
        active: false,
    },
    {
        name: 'Roulette',
        icon: 'roulette',
        active: false,
    },
    {
        name: 'Favorites',
        icon: 'fav',
        active: false,
    },
    {
        name: 'Recently Played',
        icon: 'recent',
        active: false,
    },
];

const provider = {
    name: 'Providers',
    icon: 'provider',
    active: false,
};
</script>

<template>
    <div
        class="rounded-lg w-full py-2 px-3 md:flex items-center justify-start"
        style="background: #282b34"
    >
        <CategoryBarItem
            v-for="category in categories"
            :key="category.icon"
            v-bind="category"
        />
        <HeaderSearchInput />
        <CategoryBarItem v-bind="provider" />
    </div>
</template>
