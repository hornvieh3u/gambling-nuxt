<script setup lang="ts">
import { useStore } from "vuex";
import { tran } from "~~/utils/translation";
const store = useStore();
import Activity from "~~/components/landingPage/Activity.vue";
</script>
<template>
  <q-page>
    <div
      style="max-width: 1450px"
      class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto font-sans font-medium"
    >
      <div class="flex items-center justify-center">
        <div
          class="bg-gray-300 bg-opacity-5 rounded-xl text-2xl font-extrabold uppercase mb-10 p-4 7"
        >
          {{ tran("wp0", store.state.lang) }}
        </div>
      </div>
      <div class="contentSection p-5">
        <div class="container text-white">
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("wp1", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp2", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp3", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp4", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp5", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp6", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp7", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp8", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp9", store.state.lang) }}</p>
            <p class="pb-3 text-lg">{{ tran("wp10", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp11", store.state.lang) }}<span class="pl-2 cursor-pointer text-red font-bold">support@Europa777.com</span></p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("wp12", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-7">
            <p class="pb-0">{{ tran("wp13", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp14", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp15", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp16", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp17", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp18", store.state.lang) }}</p>
          </div>
          <div class="text-base font-bold pl-2">
            <p class="pb-3">{{ tran("wp19", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-0">{{ tran("wp20", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp21", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp22", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp23", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("wp24", store.state.lang) }}<span class="px-2 text-red font-bold">https://Europa777.com/casino/profile/verification</span>{{ tran("wp25", store.state.lang) }}<span class="pl-2 text-red font-bold">support@Europa777.com</span>.</p>
            <p class="pb-3">{{ tran("wp26", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp27", store.state.lang) }}</p>
          </div>
          <div class="text-base font-bold pl-2">
            <p class="pb-3">{{ tran("wp28", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-0">{{ tran("wp29", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp30", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp31", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp32", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp33", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("wp34", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("wp35", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp36", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp37", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp38", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp39", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("wp40", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-0">{{ tran("wp41", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp42", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp43", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp44", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp45", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp46", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp47", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp48", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp49", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp50", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("wp51", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp52", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("wp53", store.state.lang) }}</p>
          </div>
        </div>
      </div>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
