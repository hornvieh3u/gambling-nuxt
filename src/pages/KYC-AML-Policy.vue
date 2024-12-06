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
          {{ tran("kap0", store.state.lang) }}
        </div>
      </div>
      <div class="contentSection p-5">
        <div class="container text-white">
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap1", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap2", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap3", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap4", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("kap5", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap6", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-3">{{ tran("kap7", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap8", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap9", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap10", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap11", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap12", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap13", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap14", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap15", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap16", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap17", store.state.lang) }}</p>
          </div>
          <!-- 2 -->
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap18", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap19", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap20", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap21", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap22", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap23", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap24", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap25", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap26", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap27", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap28", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap29", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap30", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap31", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap32", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap33", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap34", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap35", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap36", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap37", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap38", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap39", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap40", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap41", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap42", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap43", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap44", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap45", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap46", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap47", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap48", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap49", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap50", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap51", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap52", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap53", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap54", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap55", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap56", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap57", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap58", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap59", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap60", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap61", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap62", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap63", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap64", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap65", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap66", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap67", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap68", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap69", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap70", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap71", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap72", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap73", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap74", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap75", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap76", store.state.lang) }}</p>
            <p class="pb-3 font-bold">{{ tran("kap77", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap78", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-3">{{ tran("kap79", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap80", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap81", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap82", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap83", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap84", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap85", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("kap86", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap87", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap88", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap89", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap90", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap91", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap92", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap93", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap94", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap95", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap96", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap97", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap98", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap99", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap100", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap101", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap102", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap103", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap104", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap105", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap106", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap107", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap108", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap109", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap110", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap111", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold">{{ tran("kap112", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap113", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap114", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap115", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap116", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap117", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap118", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap119", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap120", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap121", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap122", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap123", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold">{{ tran("kap124", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap125", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap126", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap127", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap128", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap129", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap130", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap131", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap132", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap133", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap134", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap135", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap136", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap137", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap138", store.state.lang) }}</p>
            <p class="pb-3 pl-5">{{ tran("kap139", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap140", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap141", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap142", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap143", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap144", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap145", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap146", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap147", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap148", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap149", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap150", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap151", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-2 font-bold">{{ tran("kap152", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap153", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap154", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap155", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap156", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap157", store.state.lang) }}</p>
            <p class="pb-2 font-bold">{{ tran("kap158", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap159", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap160", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap161", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap162", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap163", store.state.lang) }}</p>
            <p class="pb-2 font-bold">{{ tran("kap164", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap165", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap166", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap167", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-2 pl-5">{{ tran("kap168", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap169", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap170", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap171", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap172", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap173", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap174", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap175", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap176", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap177", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap178", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap179", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap180", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap181", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap182", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap183", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap184", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap185", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap186", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap187", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap188", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap189", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap190", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap191", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap192", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap193", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap194", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap195", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap196", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap197", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap198", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap199", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap200", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap201", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap202", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap203", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap204", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap205", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap206", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap207", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap208", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap209", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap210", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold text-lg">{{ tran("kap211", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap212", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap213", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap214", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3 font-bold ">{{ tran("kap215", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap216", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap217", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap218", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap219", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap220", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap221", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap222", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap223", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap224", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap225", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap226", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap227", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap228", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap229", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3 font-bold ">{{ tran("kap230", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap231", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap232", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap233", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap234", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap235", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap236", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap237", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap238", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap239", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3 font-bold ">{{ tran("kap240", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap241", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap242", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap243", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap244", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3 font-bold ">{{ tran("kap245", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap246", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap247", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap248", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap249", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap250", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3 font-bold ">{{ tran("kap251", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap252", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap253", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap254", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap255", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap256", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap257", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap258", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap259", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap260", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap261", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-2">{{ tran("kap262", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap263", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap264", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap265", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-2">{{ tran("kap266", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap267", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap268", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap269", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap270", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap271", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap272", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("kap273", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap274", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("kap275", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap276", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap277", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-2">{{ tran("kap278", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap279", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap280", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap281", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap282", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap283", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap284", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap285", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap286", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap287", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-2">{{ tran("kap288", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap289", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap290", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap291", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap292", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("kap293", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap294", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap295", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-2">{{ tran("kap296", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap297", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("kap298", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-0">{{ tran("kap299", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("kap300", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap301", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("kap302", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap303", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap304", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-2">{{ tran("kap305", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap306", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap307", store.state.lang) }}</p>
            <p class="pb-2 pl-5">{{ tran("kap308", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap309", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap310", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap311", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap312", store.state.lang) }}<span class="pl-2 cursor-pointer text-red font-bold">support@Europa777.com</span>.</p>
            <p class="pb-2">{{ tran("kap313", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap314", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap315", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-3xl font-bold pb-3">
            {{ tran("kap316", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-2">{{ tran("kap317", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap318", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap319", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap320", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap321", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap322", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap323", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap324", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap325", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap326", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap327", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap328", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-2">{{ tran("kap329", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap330", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap331", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("kap332", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap333", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-2">{{ tran("kap334", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("kap335", store.state.lang) }}</p>
          </div>
        </div>
      </div>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
