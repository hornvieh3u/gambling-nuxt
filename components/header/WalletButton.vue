<script setup lang="ts">
import { ref } from 'vue';

function toggleCasinoSport(val: string) {
    console.log(val);
}
</script>

<template>
    <q-btn-group rounded>
        <q-btn
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md text-white !rounded-3xl bg-primary"
            @click="toggleCasinoSport('casino')"
        >
            Log In
        </q-btn>
        <div
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md !rounded-3xl flex items-center justify-start"
            @click="toggleCasinoSport('sport')"
        >
            <img
                class="q-mr-sm"
                style="max-width: 22px"
                src="@/assets/imgs/header/wallet-icon.png"
                alt="sports"
            />
            Wallet
    </div>
    </q-btn-group>
</template>
