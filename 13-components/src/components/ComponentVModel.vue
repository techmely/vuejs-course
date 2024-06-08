<template>
  <div>
    <label for="Email">Email</label>
    <input type="text" v-model="email" />
    <p>{{ email }}</p>
    <button @click="setEmailDefault">Set email default</button>
  </div>
  <div>
    <label for="Username">Username</label>
    <input type="text" v-model="username" />
    <p>{{ username }}</p>
    <button @click="setUsernameDefault">Set username default</button>
  </div>
</template>

<script setup>
const email = defineModel("email");
const [username, modifiers] = defineModel("username", {
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  },
});
const setEmailDefault = () => {
  email.value = "thaycacac.official@gmail.com";
};
const setUsernameDefault = () => {
  username.value = "thaycacac";
};
</script>
