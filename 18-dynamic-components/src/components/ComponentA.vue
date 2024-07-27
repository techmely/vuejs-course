<template>
  <p>Component A</p>
  <div class="flex">
    <button @click="count--">-</button>
    <p>{{ count }}</p>
    <button @click="count++">+</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
