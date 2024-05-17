<template>
  <div class="about">
    <h1>Timer: {{ time }}</h1>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";

const time = ref(0);
let intervalId = null;
onBeforeMount(() => {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("onMounted");
  intervalId = setInterval(() => {
    time.value++;
  }, 1000);
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
  clearInterval(intervalId);
});

onUnmounted(() => {
  console.log("onUnmounted");
});
</script>
