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
          {{ tran("pp0", store.state.lang) }}
        </div>
      </div>
      <div class="contentSection p-5">
        <div class="container text-white">
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("pp1", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp2", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp3", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp4", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp5", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-0">{{ tran("pp6", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp7", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp8", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp9", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp10", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp11", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp12", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp13", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp14", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp15", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp16", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp17", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp18", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp19", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-1">{{ tran("pp20", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("pp21", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp22", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp23", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("pp24", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold">{{ tran("pp25", store.state.lang) }}</p>
          </div>
          <div class="text-lg font-normal pl-7">
            <p class="pb-3">{{ tran("pp26", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-1">{{ tran("pp27", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp28", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp29", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp30", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp31", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp32", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp33", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp34", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp35", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp36", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp37", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp38", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp39", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp40", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp41", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp42", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp43", store.state.lang) }}</p>
          </div>
          <div class="text-lg font-normal pl-7">
            <p class="pb-3">{{ tran("pp44", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-2">{{ tran("pp45", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp46", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp47", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-2 font-bold">{{ tran("pp48", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp49", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp50", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp51", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp52", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp53", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp54", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp55", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp56", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("pp57", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp58", store.state.lang) }}</p>
            <p class="pb-3 font-bold">{{ tran("pp59", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp60", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp61", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp62", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold">{{ tran("pp63", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp64", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-2">
            <p class="pb-3 font-bold">{{ tran("pp65", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-1">{{ tran("pp66", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp67", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp68", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp69", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp70", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp71", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp72", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp73", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("pp74", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp75", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp76", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp77", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp78", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("pp79", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-1">{{ tran("pp81", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp82", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp83", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp84", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp85", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-1">{{ tran("pp86", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp87", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp88", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp89", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp90", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp91", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp92", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp93", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp94", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp95", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp96", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp97", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp98", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp99", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp100", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-1">{{ tran("pp101", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp102", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp103", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp104", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp105", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp106", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp107", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp108", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp109", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-3">{{ tran("pp110", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp111", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">
            {{ tran("pp112", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp113", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp114", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp115", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp116", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp117", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp118", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp119", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">        
            {{ tran("pp120", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-0">{{ tran("pp121", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp122", store.state.lang) }}</p>
            <p class="pb-0">{{ tran("pp123", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp124", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">        
            {{ tran("pp125", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp126", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp127", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp128", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp129", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp130", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp131", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp132", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp133", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp134", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp135", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">        
            {{ tran("pp136", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp137", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp138", store.state.lang) }}<span class="px-2 cursor-pointer text-red font-bold"><a href="http://www.networkadvertising.org/optout_nonppii.asp/" target="_blank">http://www.networkadvertising.org/optout_nonppii.asp</a></span>&<span class="px-2 cursor-pointer text-red font-bold"><a href="http://www.aboutads.info/choices/" target="_blank">http://www.aboutads.info/choices</a></span>.</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">        
            {{ tran("pp139", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp140", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp141", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp142", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-2">{{ tran("pp143", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp144", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp145", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp146", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp147", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp148", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp149", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-1">{{ tran("pp150", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp151", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp152", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp153", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp154", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp155", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp156", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-2">{{ tran("pp157", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp158", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-1">{{ tran("pp159", store.state.lang) }}<span class="px-2 cursor-pointer text-red font-bold"><a href="https://www.transunion.co.uk/crain/" target="_blank">https://www.transunion.co.uk/crain</a></span></p>
            <p class="pb-1">{{ tran("pp160", store.state.lang) }}<span class="px-2 cursor-pointer text-red font-bold"><a href="https://www.equifax.co.uk/crain/" target="_blank">https://www.equifax.co.uk/crain</a></span></p>
            <p class="pb-1">{{ tran("pp161", store.state.lang) }}<span class="px-2 cursor-pointer text-red font-bold"><a href="https://www.experian.co.uk/crain/" target="_blank">https://www.experian.co.uk/crain</a></span></p>
            <p class="pb-1">{{ tran("pp162", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp163", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp164", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp165", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp166", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp167", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp168", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp169", store.state.lang) }}</p>
            <p class="pb-1">{{ tran("pp170", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp171", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-7">
            <p class="pb-3">{{ tran("pp172", store.state.lang) }}</p>
          </div>
          <div class="text-base font-normal pl-12">
            <p class="pb-2">{{ tran("pp173", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp174", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp175", store.state.lang) }}</p>
            <p class="pb-2">{{ tran("pp176", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp177", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">        
            {{ tran("pp178", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp179", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp180", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp181", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp182", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp183", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp184", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp185", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp186", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp187", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp188", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp189", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp190", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp191", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp192", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp193", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp194", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">        
            {{ tran("pp195", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp196", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp197", store.state.lang) }}<span class="pl-2 cursor-pointer text-red font-bold">support@Europa777.com</span></p>
            <p class="pb-3">{{ tran("pp198", store.state.lang) }}<span class="pl-2 cursor-pointer text-red font-bold"><a href="https://www.Europa777.com/contact/" target="_blank">https://www.Europa777.com/contact</a></span></p>
            <p class="pb-3">{{ tran("pp199", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp200", store.state.lang) }}</p>
          </div>
          <h5 class="mt-4 text-xl font-bold pb-3">        
            {{ tran("pp201", store.state.lang) }}
          </h5>
          <div class="text-base font-normal pl-2">
            <p class="pb-3">{{ tran("pp202", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp203", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp204", store.state.lang) }}<span class="p-2 cursor-pointer text-red font-bold"><a href="https://www.allaboutcookies.org/" target="_blank">https://www.allaboutcookies.org</a></span>{{ tran("pp205", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp206", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp207", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp208", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp209", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp210", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp211", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp212", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp213", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp214", store.state.lang) }}</p>
            <p class="pb-3">{{ tran("pp215", store.state.lang) }}</p>
          </div>
        </div>
      </div>
      <section class="pt-8">
        <Activity />
      </section>
    </div>
  </q-page>
</template>
