<script setup lang="ts">
import { ref } from 'vue';

const casinoOrSport = ref('casino');
function toggleCasinoSport(val: string) {
    casinoOrSport.value = val;
}
</script>

<template>
    <q-btn-group rounded>
        <div
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md hover:!rounded-3xl flex justify-start items-center cursor-pointer"
            :class="{
                'bg-primary text-white !rounded-3xl':
                    casinoOrSport === 'casino',
            }"
            style="{background-color: casinoOrSport !== 'casino' ? '#3E4455' : '' }"
            @click="toggleCasinoSport('casino')"
        >
            <img
                class="q-mr-sm"
                style="max-width: 22px"
                src="@/assets/imgs/header/casino-icon.png"
                alt="casino"
            />
            Casino
        </div>
        <div
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md hover:!rounded-3xl flex justify-start items-center cursor-pointer"
            :class="{
                'bg-primary text-white !rounded-3xl': casinoOrSport === 'sport',
            }"
            @click="toggleCasinoSport('sport')"
        >
            <img
                class="q-mr-sm"
                style="max-width: 22px"
                src="@/assets/imgs/header/sports-icon.png"
                alt="sports"
            />
            Sport
        </div>
    </q-btn-group>
</template>
