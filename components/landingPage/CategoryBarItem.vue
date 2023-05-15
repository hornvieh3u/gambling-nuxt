<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  active: {
    type: Boolean,
    required: true, // Fix typo: replace "require" with "required"
  },
});
</script>

<template>
  <div
    class="flex items-center justify-center w-26 p-2 cursor-pointer rounded-2xl"
    :class="{ 'bg-slate-400': active }"
    :style="{ color: active ? 'white' : '#7B8193', backgroundColor: active ? '#3F4655' : '' }"
  >
    <q-img class="w-4" :src="`/_nuxt/assets/imgs/sidebar/${icon}.png`" alt="icon" />
    <p class="pl-1 text-xs">{{ name }}</p> <!-- Use a utility class for font size -->
  </div>
</template>
