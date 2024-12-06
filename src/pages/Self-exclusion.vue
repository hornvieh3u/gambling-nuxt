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
          {{ tran("se0", store.state.lang) }}
        </div>
      </div>
      <div class="contentSection p-5">
        <div class="container text-white">
          <div class="text-base font-normal">
            <p class="pb-3">{{ tran("se1", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se2", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se3", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se4", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se5", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se6", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se7", store.state.lang) }}</p>
            <p class="pb-6">{{ tran("se8", store.state.lang) }}<span class="text-lg font-bold m-2">{{ tran("se9", store.state.lang) }}</span><span>{{ tran("se10", store.state.lang) }}</span></p>
            <p class="pb-5 text-lg font-bold">{{ tran("se11", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se12", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se13", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se14", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se15", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se16", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se17", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se18", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se19", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se20", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se21", store.state.lang) }}</p>
            <p class="pb-0 pl-7">{{ tran("se22", store.state.lang) }}</p>
            <p class="pb-3 pl-7">{{ tran("se23", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se24", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se25", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se26", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("se27", store.state.lang) }}<span class="pl-2 cursor-pointer text-red font-bold"><a href="https://gameblock.com/" target="_blank">gamblock.com</a></span></p>
            <p class="pb-3">{{ tran("se28", store.state.lang) }}<span class="pl-2 cursor-pointer text-red font-bold"><a href="https://betblocker.org/" target="_blank">betblocker.org</a></span></p>
          </div>
        </div>
      </div>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
