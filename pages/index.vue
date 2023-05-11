<script setup lang="ts">
import { useQuasar } from 'quasar';

const { dark } = useQuasar();
dark.set(true);
</script>
<template>
    <q-page class="q-pl-lg">
        <div class="w-full">
            <section
                class="main h-full px-10 md:px-20 lg:px-32 py-8 max-w-7xl m-auto"
            >
                <landing-page-overview />
                <landing-page-intro-cards />
            </section>
        </div>
    </q-page>
</template>
