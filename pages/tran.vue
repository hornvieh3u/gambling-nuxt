<template>
    <p v-for="item in tran">{{ item }}</p>
</template>
<script setup lang="ts">
    import translation from "~~/utils/translation.json";
    const tran = Object.keys(translation.en).map(item=>translation.en[item]); 
</script>