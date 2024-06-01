<template>
  <button @click="count++">{{ count }}</button>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
</script>
