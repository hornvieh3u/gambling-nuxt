<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { tran } from "~~/utils/translation";
import { linkTo } from "~~/utils/link";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const deposit = () => {
  if (store.state.isLogin) {
    router.push(linkTo("wallet/deposit"));
  } else {
    store.commit("handleWelcome", false);
    store.commit("handleOnLogin", true);
    store.commit("handleDepositeNow", true);
  }
};
</script>
<template>
  <q-dialog
    class="welcome"
    v-model="store.state.isWelcome"
    @hide="store.commit('handleWelcome', false)"
  >
    <q-card class="w-full sm:w-3/5 md:w-1/2" style="width: 700px">
      <div class="relative" style="background: rgb(0 90 201)">
        <div class="sm:grid sm:grid-cols-10 p-6">
          <div class="p-1 col-span-4 hidden sm:!block">
            <q-img
              class="absolute bottom-7 -left-1 z-[1]"
              style="max-width: 270px"
              src="/imgs/man_thumb.png"
              alt="man"
            />
          </div>
          <div class="p-1 col-span-6 grid grid-cols-10 sm:block z-[100]">
            <div class="col-span-10">
              <p class="font-medium text-xl text-shadow-lg">
                {{ tran("Welcome to", store.state.lang) }}
              </p>
              <p class="font-black text-4xl sm:text-3xl text-shadow-lg">
                {{ tran("EUROPE #1", store.state.lang) }}
              </p>
              <p class="font-medium text-xl text-shadow-lg mb-[-5px]">
                {{ tran("Online Casino", store.state.lang) }}
              </p>
              <span
                class="pt-0 pb-2 text-shadow-lg hidden sm:!block"
                style="
                  font-size: 12px;
                  font-family: 'Roboto Condensed', sans-serif;
                "
              >
                {{ tran("enjoy", store.state.lang) }}
              </span>
            </div>
            <img
              class="w-48 z-[1000] sm:hidden absolute bottom-3 left-0"
              src="/imgs/man_thumb_t.png"
              alt="man_thumb_t"
            />
            <div class="col-span-4 relative"></div>
            <div class="col-span-6 z-[2000]">
              <p class="text-xl font-bold mb-[-7px]">
                {{ tran("welcome bonus", store.state.lang) }}
              </p>
              <div class="flex felx-row">
                <q-icon
                  name="euro"
                  size="48px"
                  class="text-bold"
                  style="color: #fff004"
                />
                <span
                  class="font-black font-bold text-5xl"
                  style="color: #fff004"
                  >1800</span
                >
              </div>
              <div class="flex items-center justify-start sm:ml-3">
                <div>
                  <span
                    class="font-black font-bold text-3xl md:text-3xl"
                    style="color: #fff004"
                    >200%</span
                  >
                  <span class="text-xs pl-1">{{
                    tran("bonus", store.state.lang)
                  }}</span>
                </div>
                <div>
                  <span
                    class="font-bold text-3xl sm:text-2xl md:text-3xl"
                    style="color: #fff004"
                    >+100</span
                  >
                  <span class="text-xs pl-1">{{
                    tran("free spins", store.state.lang)
                  }}</span>
                </div>
              </div>
              <div class="w-full text-left sm:!text-center">
                <q-btn
                  class="mt-4 font-bold text-lg sm:text-xl"
                  style="background-color: #fff004; color: black"
                  :label="tran('DEPOSIT NOW', store.state.lang)"
                  @click="deposit"
                />
              </div>
              <div class="w-full text-right">
                <img
                  class="w-48 sm:hidden"
                  src="/imgs/casino_offers.png"
                  alt="casino_offers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
