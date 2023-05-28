<script setup lang="ts">
import { ref } from 'vue';
import CasinoSportToogleButton from '~~/components/header/CasinoSportToogleButton.vue';
// import LoginRegisterButton from '~~/components/header/LoginRegisterButton.vue';
import SearchInput from '~~/components/header/SearchInput.vue';
import SideBarItem from '~~/components/sidebar/SideBarItem.vue';
import SideBarMenu from '~~/components/sidebar/SideBarMenu.vue';

const props = defineProps({
    leftDrawerOpen: {
        type: Boolean,
        required: true,
    },
    toggleState: {
        type: Function,
        required: true,
    },
});

const isOpen = ref(props.leftDrawerOpen);

watch(props, (newValue) => {
    isOpen.value = newValue.leftDrawerOpen;
});

function handleMenu() {}

interface SideBarItemInterFace {
    title: string;
    backUrl: string;
    iconUrl: string;
    link: string;
}

const sideBarLinks: SideBarItemInterFace[] = [
    {
        title: 'Daily Cash Back',
        backUrl: 'side_1.png',
        iconUrl: 'cash_back.gif',
        link: '/wallet',
    },
    {
        title: 'BONUS WHEEl',
        backUrl: 'side_2.png',
        iconUrl: 'wheel.png',
        link: '/wheel',
    },
    {
        title: 'BONUS PROMOTIONS',
        backUrl: 'side_3.png',
        iconUrl: 'promotion.gif',
        link: '/bonus',
    },
    {
        title: 'TOURNAMENTS',
        backUrl: 'side_4.png',
        iconUrl: 'tournament.gif',
        link: '/tournament',
    },
];
</script>
<template>
    <!-- SideBar -->
    <q-drawer
        v-model="isOpen"
        show-if-above
        class="px-6 py-3"
        style="background-color: #181a25"
        @before-hide="props.toggleState('leftDrawerOpen', false)"
    >
        <div>
            <div class="md:!hidden mt-5">
                <SearchInput />
            </div>
            <div class="lg:!hidden text-center mt-5">
                <CasinoSportToogleButton />
            </div>
            <div class="sm:!hidden mt-5 text-center">
                <!-- <LoginRegisterButton /> -->
            </div>
        </div>
        <q-list>
            <SideBarItem
                v-for="item in sideBarLinks"
                :key="item.title"
                v-bind="item"
            />
            <SideBarMenu />
        </q-list>
    </q-drawer>
</template>
