<script setup lang="ts">
import Activity from '~~/components/landingPage/Activity.vue';
import PersonalInfo from '~~/components/profile/PersonalInfo.vue';

// !Get TmpData
</script>
<template>
    <q-page class="q-pl-lg">
        <div
            style="max-width: 1450px"
            class="w-full px-6 md:px-10 lg:px-14 py-8 m-auto"
        >
            <section class="main h-full px-4">
                
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-3">
                        <p class="text-base font-bold py-3 text-center">Profile</p>
                        <ProfileUser />
                    </div>
                    <div class="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-9">
                        <ProfileCategory />
                        <PersonalInfo />
                    </div>
                </div>
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
