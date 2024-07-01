<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<template>
  <div>
    <h1>Transition</h1>
    <button @click="isShow = !isShow">Toggle fade</button>
    <Transition>
      <p v-show="isShow">Hello</p>
    </Transition>
  </div>
</template>

<style lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
