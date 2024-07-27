<template>
  <p>User data</p>
  <p>{{ user }}</p>
</template>

<script setup>
import { ref } from "vue";
const user = ref();

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
user.value = await response.json();
</script>
