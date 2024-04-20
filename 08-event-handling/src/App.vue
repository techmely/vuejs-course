<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script setup>
import { ref } from "vue";
const count = ref(0);

const sayHi1 = () => {
  alert(`Xin chào 1`);
};

const sayHi2 = () => {
  alert(`Xin chào 2`);
};

const submit = () => {
  alert("Form submitted");
};
</script>

<template>
  <div>
    <h1>Event handling</h1>
    <button @click.self="sayHi1">
      <button @click.self="sayHi2">say hi 2</button>
      say hi 1
    </button>
    <form @submit.prevent="submit">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
