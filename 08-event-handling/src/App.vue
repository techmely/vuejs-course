<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script setup>
import { ref } from "vue";
const count = ref(0);

const greet = (event) => {
  console.log(event.target);
  alert(`Xin chào ${event.type}`);
};

const sayHi = (name) => {
  alert(`Xin chào ${name}`);
};
</script>

<template>
  <div>
    <h1>Event handling</h1>
    <button @click="count++">Thêm 1</button>
    <p>{{ count }}</p>
    <button @click="greet">Chào</button>
    <button @click="sayHi('A')">Chào A</button>
    <button @click="sayHi('B')">Chào B</button>
  </div>
</template>
