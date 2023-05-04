<script setup lang="ts">
import { useQuasar } from 'quasar';

const { dark } = useQuasar();
dark.set(true)
</script>
<template>
    <q-page class="q-pl-lg">
        <p class="text-h6 q-pt-md">Plugin Showcase</p>
        <q-list>
            <q-item>
            </q-item>
        </q-list>
        <p class="text-h6 q-pt-md">Directive Showcase</p>
    </q-page>
</template>
