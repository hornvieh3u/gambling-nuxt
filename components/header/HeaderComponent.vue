<script setup lang="ts">
import { useQuasar } from 'quasar';
import CasinoSportToogleButton from '~~/components/header/CasinoSportToogleButton.vue';
import LoginRegisterButton from '~~/components/header/LoginRegisterButton.vue';
import SearchInput from '~~/components/header/SearchInput.vue';
import SelectLanguageBox from '~~/components/header/SelectLanguageBox.vue';
import ProfileButton from './ProfileButton.vue';

const props = defineProps({
    toggleState: {
        type: Function,
        required: true,
    },
    leftDrawerOpen: {
        type: Boolean,
        required: true,
    },
    isLogin: {
        type: Boolean,
        required: true,
    },
});

const { dark } = useQuasar();
dark.set(true);
</script>
<template>
    <QHeader
        class="q-pl-md q-pt-sm q-pb-sm q-pr-md"
        style="background-color: #292c35"
    >
        <QToolbar>
            <QImg
                class="cursor-pointer"
                style="max-width: 30px"
                src="/imgs/header/menu.png"
                alt="menu"
                @click="
                    () => props.toggleState('leftDrawerOpen', !leftDrawerOpen)
                "
            />
            <QImg
                @click="$router.push('/')"
                class="q-pl-md hidden sm:!block cursor-pointer"
                style="max-width: 190px"
                src="/imgs/header/logo_full.png"
                alt="logo-full"
            />
            <QToolbar class="q-pl-lg q-pr-lg">
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
            </QToolbar>
            <div class="hidden sm:!block pr-5">
                <LoginRegisterButton
                    v-if="isLogin === false"
                    :toggleState="
                        (name:string, val:boolean) =>
                            props.toggleState(name, val)
                    "
                />
            </div>
            <template v-if="isLogin">
                <div class="pr-5">
                    <ProfileButton />
                </div>
                <div class="pr-5 text-center">
                    <div
                        class="relative bg-gray-600 rounded-lg before:top-0 rotate-45 w-8 h-8 text-center overflow-hidden"
                    >
                        <img
                            style="margin-left: 1px"
                            class="absolute -rotate-45 w-full h-auto"
                            src="/tmp/avatar.png"
                            alt="user"
                        />
                    </div>
                </div>
                <div>
                    <QBtn dense round flat icon="notifications">
                        <QBadge rounded color="red" floating transparent>
                            4
                        </QBadge>
                    </QBtn>
                </div>
            </template>

            <div>
                <SelectLanguageBox />
            </div>
        </QToolbar>
    </QHeader>
</template>
