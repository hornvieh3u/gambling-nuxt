<script setup lang="ts">
const props = defineProps({
    toggleState: {
        type: Function,
        required: true,
    },
});
</script>

<template>
    <q-btn-group rounded class="bg-primary">
        <div
            class="sm:py-2 sm:px-3 px-3 py-2 text-xs sm:text-sm text-white !rounded-3xl cursor-pointer whitespace-nowrap"
            @click="props.toggleState('onLogin', true)"
        >
            Log In
        </div>
        <div
            style="background-color: #3f4655"
            class="sm:py-2 sm:px-3 px-3 py-2 text-xs sm:text-sm !rounded-3xl flex items-center justify-start cursor-pointer"
            @click="props.toggleState('onSignUp', true)"
        >
            Registration
        </div>
    </q-btn-group>
</template>
