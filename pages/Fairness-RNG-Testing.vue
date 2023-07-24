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
          {{ tran("frtm0", store.state.lang) }}
        </div>
      </div>
      <div class="contentSection p-5">
        <div class="container text-white">
          <div class="text-base font-normal">
            <p class="pb-3">{{ tran("frtm1", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm2", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm3", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm4", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm5", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm6", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm7", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm8", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm9", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("frtm10", store.state.lang) }}</p>
          </div>
        </div>
      </div>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
