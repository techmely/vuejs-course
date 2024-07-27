<template>
  <p>Component A</p>
  <div class="flex">
    <button @click="count--">-</button>
    <p>{{ count }}</p>
    <button @click="count++">+</button>
  </div>
</template>
<script setup>
import { ref, onActivated, onDeactivated } from "vue";
const count = ref(0);

onActivated(() => {
  console.log("onActivated component A");
});

onDeactivated(() => {
  console.log("onDeactivated component A");
});
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
