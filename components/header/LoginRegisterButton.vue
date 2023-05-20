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
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md text-white !rounded-3xl cursor-pointer whitespace-nowrap"
            @click="props.toggleState('onLogin', true )"
        >
            Log In
        </div>
        <div
            style="background-color: #3f4655"
            class="q-pl-md q-pt-sm q-pb-sm q-pr-md !rounded-3xl flex items-center justify-start cursor-pointer"
            @click="props.toggleState('onSignUp', true)"
        >
            Registeration
        </div>
    </q-btn-group>
</template>
