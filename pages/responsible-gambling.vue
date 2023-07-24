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
          class="bg-gray-300 bg-opacity-5 rounded-xl text-2xl font-extrabold uppercase mb-5 p-4 7"
        >
          {{ tran("RESPONSIBLE GAMBLING", store.state.lang) }}
        </div>
      </div>
      <div class="contentSection p-5">
        <div class="container text-white">
          <h5 class="text-xl font-bold pb-3">
            {{ tran("nrg1", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-5">
            <p class="pb-0">{{ tran("nrg2", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg3", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg4", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg5", store.state.lang) }}</p>
            <p class="pb-4">{{ tran("nrg6", store.state.lang) }}</p>
          </div>
          <p class="pb-4 font-normal text-base">{{ tran("nrg7", store.state.lang) }}</p>
          <p class="pb-0 font-normal text-base">{{ tran("nrg8", store.state.lang) }}</p>
          <p class="pb-4 font-normal text-base">{{ tran("nrg9", store.state.lang) }}</p>
          <p class="pb-0 font-normal text-base">{{ tran("nrg10", store.state.lang) }}</p>
          <p class="pb-4 font-normal text-base">{{ tran("nrg11", store.state.lang) }}</p>
          <p class="pb-0 font-normal text-base">{{ tran("nrg12", store.state.lang) }}</p>
          <p class="pb-4 font-normal text-base">{{ tran("nrg13", store.state.lang) }}</p>
          <p class="pb-0 font-normal text-base">{{ tran("nrg14", store.state.lang) }}</p>
          <p class="pb-4 font-normal text-base">{{ tran("nrg15", store.state.lang) }}</p>
        </div>
        <div class="container text-white">
          <h5 class="text-xl font-bold pb-3">
            {{ tran("nrg16", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-5">
            <p class="pb-0">{{ tran("nrg17", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg18", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg19", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg20", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg21", store.state.lang) }}</p>
            <p class="pb-4">{{ tran("nrg22", store.state.lang) }}</p>
          </div>
          <p class="pb-4 font-normal text-base">{{ tran("nrg23", store.state.lang) }}</p>
          <p class="pb-4 font-normal text-base">{{ tran("nrg24", store.state.lang) }}</p>
          <p class="pb-0 font-normal text-base">{{ tran("nrg25", store.state.lang) }}</p>
          <p class="pb-4 font-normal text-base">{{ tran("nrg26", store.state.lang) }}</p>
        </div>
        <div class="container text-white">
          <h5 class="text-xl font-bold pb-3">
            {{ tran("nrg27", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-5">
            <p class="pb-0">{{ tran("nrg28", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg29", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg30", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg31", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg32", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("nrg33", store.state.lang) }}</p>
            <p class="pb-4">{{ tran("nrg34", store.state.lang) }}</p>
          </div>
          <p class="pb-4 font-normal text-base">{{ tran("nrg35", store.state.lang) }}<span class="pl-2 cursor-pointer text-red font-bold"><a href="https://gameblock.com/" target="_blank">support@Europa777.com</a></span></p>
        </div>
        <div class="container text-white">
          <h5 class="text-xl font-bold pb-3">
            {{ tran("nrg36", store.state.lang) }}
          </h5>
        </div>
      </div>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
