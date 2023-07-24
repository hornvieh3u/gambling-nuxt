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
          {{ tran("pdp0", store.state.lang) }}
        </div>
      </div>
      <div class="contentSection p-5">
        <div class="container text-white">
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pdp1", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp2", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp3", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp4", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp5", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-2xl font-bold pb-3">
            {{ tran("pdp6", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pdp7", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp8", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp9", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp10", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp11", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp12", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp13", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp14", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp15", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp16", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-0">{{ tran("pdp17", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp18", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp19", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp20", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp21", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp22", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp23", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp24", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp25", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp26", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-2xl font-bold pb-3">{{ tran("pdp27", store.state.lang) }}</h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pdp28", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp29", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp30", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp31", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp32", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-0">{{ tran("pdp33", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp34", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pdp35", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp36", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pdp37", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp38", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp39", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pdp40", store.state.lang) }}</p>
          </div>
        </div>
      </div>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
