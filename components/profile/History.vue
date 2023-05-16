<template>
    <div
        style="background: #383d47"
        class="inset-0 rounded-md w-full px-7 pt-6 pb-10"
    >
        <div
            style="border-bottom: 1px solid #f5f5f5"
            class="pb-4 grid grid-cols-12"
        >
            <p class="text-base font-medium col-span-4">Time</p>
            <p class="text-base font-medium col-span-4">Game Name</p>
            <p class="text-base font-medium col-span-2">Bet Sum</p>
            <p class="text-base font-medium col-span-2">Win</p>
        </div>
        <div
            style="border-bottom: 1px solid #f5f5f5"
            class="py-3 grid grid-cols-12"
            v-for="history in gameHistory"
            :history="history"
        >
            <p class="text-sm font-medium col-span-4">{{ history?.time }}</p>
            <p class="text-sm font-medium col-span-4">{{ history?.name }}</p>
            <p class="text-sm font-medium col-span-2">{{ history?.betSum }}</p>
            <p class="text-sm font-medium col-span-2">{{ history?.win }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// Define any other variables or functions needed for this component
const gameHistory = [
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },
    {
        time: '19-02-2023 - 07:16 PM',
        name: 'Fruit Zen',
        betSum: '0.54 CAD',
        win: '0 CAD',
    },

];
</script>
