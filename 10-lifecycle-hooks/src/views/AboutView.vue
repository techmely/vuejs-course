<template>
  <div class="about">
    <h1 id="count">Count: {{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated, ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

onBeforeUpdate(() => {
  console.log("onBeforeUpdate", document.getElementById("count").textContent);
});

onUpdated(() => {
  console.log("onUpdated", document.getElementById("count").textContent);
});
</script>
