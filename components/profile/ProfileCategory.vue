<script setup lang="ts">
import CategoryBarItem from './ProfileCategoryIterm.vue';

const categories = [
    {
        name: 'General Information',
        icon: 'info',
        active: true,
    },
    {
        name: 'Verification',
        icon: 'check',
        active: false,
    },
    {
        name: 'Game History',
        icon: 'game',
        active: false,
    },
    {
        name: 'Responsible Gambling',
        icon: 'hands',
        active: false,
    },
    // {
    //     name: 'Shadow Chaser',
    //     email: 'shadowchaser.1119',
    //     password: shadowgroup!!!9

    // }


];
</script>

<template>
    <div class="rounded-lg w-full lg:flex items-center justify-start pb-2">
        <CategoryBarItem
            v-for="category in categories"
            :key="category.icon"
            v-bind="category"
        />
    </div>
</template>
