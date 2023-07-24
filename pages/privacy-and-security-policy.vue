<script setup lang="ts">
import Activity from "~~/components/landingPage/Activity.vue";
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();
useHead({
      title: 'Canada777',
      meta: [
        {
          hid: 'Privacy Policy',
          name: 'Privacy Policy',
          content: 'Your privacy and security are of utmost importance to us. Our privacy policy outlines how we collect, use, and protect your personal information. Rest assured that your data is handled responsibly, in compliance with industry standards and regulations. Read our privacy policy to understand how we prioritize your privacy.'
        }
      ]
})
</script>
<template>
  <q-page>
    <div
      style="max-width: 1450px"
      class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto font-sans font-medium"
    >
      <section>
          <div class="flex items-center justify-center">
              <div
                class="bg-gray-300 bg-opacity-5 rounded-xl text-2xl font-extrabold uppercase mb-10 p-4 7"
              >
              {{tran('PRIVACY AND SECURITY POLICY', store.state.lang)}}
              </div>
          </div>
      </section>
      <section>
        <div class="contentSection pt-5 pb-5">
          <div class="container text-white">
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('psp1', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp2', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('psp3', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('psp4', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp5', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('psp6', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('psp7', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp8', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp9', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp10', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp11', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('psp12', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('psp13', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp14', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('psp15', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('psp16', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('psp17', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('psp18', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp19', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp20', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp21', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp22', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp23', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp24', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp25', store.state.lang)}}</p>
            </div>
            
            <h5 class="mt-4 font-weight-bold text-base font-medium pb-3">{{tran('psp26', store.state.lang)}}</h5>
            <div class="text-base font-normal pl-2">
              <p class="pb-3">{{tran('psp27', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp28', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp29', store.state.lang)}}</p>
              <p class="pb-3">{{tran('psp30', store.state.lang)}}</p>
            </div>

          </div>
        </div>
      </section>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
