<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<template>
  <div>
    <h1>Transition</h1>
    <button @click="isShow = !isShow">Toggle fade</button>
    <Transition name="fade">
      <p v-show="isShow">Hello</p>
    </Transition>
  </div>
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
