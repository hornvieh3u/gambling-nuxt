<template>
<p v-for="item in ddd">
    {{ item }}
</p>
</template>
<script setup lang="ts">
import tran from '~~/utils/translation.json';
const ddd=Object.keys(tran.en).map(item=>tran.en[item]);
</script>