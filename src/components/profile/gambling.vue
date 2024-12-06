<template>
    <div class="contentSection p-5">
      <div class="container text-white">
        <div class="text-base font-normal pl-5">
          <p class="pb-3">{{tran('rg1', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg2', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg3', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg4', store.state.lang)}}</p>
        </div>
        <h5 class="mt-4 text-3xl font-bold pb-3">{{tran('rg5', store.state.lang)}}</h5>
        <div class="text-base font-normal pl-5">
          <p class="pb-3">{{tran('rg6', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg7', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg8', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg9', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg10', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg11', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg12', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg13', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg14', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg15', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg16', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg17', store.state.lang)}}</p>
          <p class="pb-3">{{tran('rg18', store.state.lang)}}</p>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
import { tran } from '~~/utils/translation';

const store = useStore();
</script>