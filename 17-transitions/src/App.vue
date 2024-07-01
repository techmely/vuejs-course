<script setup>
import { reactive, ref } from "vue";

const isShow = ref(true);

const items = reactive([1, 2, 3, 4, 5, 6, 7]);

const addRandom = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  items.push(randomNumber);
};

const removeRandom = () => {
  const randomIndex = Math.floor(Math.random() * items.length);
  items.value = items.splice(randomIndex, 1);
};
</script>

<template>
  <div>
    <h1>Transition</h1>
    <button @click="isShow = !isShow">Toggle fade</button>
    <Transition name="fade">
      <p v-show="isShow">Hello</p>
    </Transition>
    <button @click="addRandom">Add random number</button>
    <button @click="removeRandom">Remove random number</button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </TransitionGroup>
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
