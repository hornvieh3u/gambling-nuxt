<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    toggleState: {
        type: Function,
        required: true,
    },
});
let open = ref(props.open);
watch(props, (newValue) => {
    open.value = newValue.open;
});
</script>
<template>
    <q-dialog
        class="welcome"
        v-model="open"
        @hide="props.toggleState('isWelcome', false)"
    >
        <q-card style="width: ; max-width: 60vw">
            <div class="relative" style="background: #0072ff 90%">
                <div class="grid grid-cols-10 p-6">
                    <div class="p-1 col-span-4">
                        <q-img
                            class="absolute bottom-0 left-0"
                            style="max-width: 221px"
                            src="/imgs/man_thumb.png"
                            alt="man"
                        />
                    </div>
                    <div class="p-1 col-span-6">
                        <p class="font-medium text-base text-shadow-lg">
                            Welcome to
                        </p>
                        <p class="font-black text-3xl text-shadow-lg">
                            EUROPE #1
                        </p>
                        <p class="font-medium text-base text-shadow-lg">
                            Online Casino
                        </p>
                        <span
                            class="p-1 text-shadow-lg"
                            style="
                                font-size: 8px;
                                font-family: Montserrat-Italic;
                                border-bottom: 1px solid rgba(95, 83, 106, 0.5);
                            "
                        >
                            Enjoy 3500+ games, fast payouts and 24/7 live
                            support.
                        </span>
                        <div class="flex items-center justify-center pt-2">
                            <div>
                                <span
                                    class="font-bold text-3xl"
                                    style="color: #fff004"
                                    >200%</span
                                >
                                <span class="text-xs">bonus</span>
                            </div>
                            <div
                                style="
                                    background-color: rgba(95, 83, 106, 0.5);
                                    width: 1px;
                                    height: 20px;
                                "
                                class="bg-gray-700 mx-1"
                            ></div>
                            <div>
                                <span
                                    class="font-bold text-3xl"
                                    style="color: #fff004"
                                    >+100</span
                                >
                                <span class="text-xs">free spins</span>
                            </div>
                        </div>
                        <div class="w-full text-center">
                            <q-btn
                                class="mt-4 font-bold"
                                style="
                                    background-color: #fff004;
                                    color: black;
                                    font-size: 20px;
                                "
                                label="DEPOSIT NOW"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>
