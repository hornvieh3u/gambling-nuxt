<script setup lang="ts">
import { ref } from 'vue';
import CasinoSportToogleButton from '~~/components/header/CasinoSportToogleButton.vue';
import SelectLanguageBox from '~~/components/header/SelectLanguageBox.vue';
import SearchInput from '~~/components/header/SearchInput.vue';
import LoginRegisterButton from '~~/components/header/LoginRegisterButton.vue';

const props = defineProps({
    toggleLeftDrawer: {
        type: Function,
        required: true,
    },
});

function handleMenu() {
    props.toggleLeftDrawer();
}
</script>
<template>
    <q-header
        class="q-pl-md q-pt-sm q-pb-sm q-pr-md"
        style="background-color: #292c35"
    >
        <q-toolbar>
            <img
                class="cursor-pointer"
                style="max-width: 30px"
                src="@/assets/imgs/header/menu.png"
                alt="menu"
                @click="handleMenu"
            />
            <img
                class="q-pl-md hidden sm:!block"
                style="max-width: 190px"
                src="@/assets/imgs/header/logo_full.png"
                alt="logo-full"
            />
            <q-toolbar class="q-pl-lg q-pr-lg">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <div class="hidden lg:!block">
                            <CasinoSportToogleButton />
                        </div>
                        <div class="hidden md:!block pl-5">
                            <SearchInput />
                        </div>
                    </div>
                </div>
            </q-toolbar>
            <div class="hidden sm:!block pr-5">
                <LoginRegisterButton />
            </div>
            <div>
                <SelectLanguageBox />
            </div>
        </q-toolbar>
    </q-header>
</template>
