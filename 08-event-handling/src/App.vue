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
    <input @keyup.enter.alt="submit" placeholder="Nhập tên của bạn" />
    <button @click.shift="submit">Submit</button>
  </div>
</template>
