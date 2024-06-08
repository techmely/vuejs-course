<template>
  <div>
    <label for="Email">Email</label>
    <input type="text" v-model="email" />
    <p>{{ email }}</p>
    <button @click="setEmailDefault">Set email default</button>
  </div>
</template>

<script setup>
const email = defineModel();

const setEmailDefault = () => {
  email.value = "thaycacac.official@gmail.com";
};
</script>
