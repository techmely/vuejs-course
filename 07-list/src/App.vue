<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script setup>
import { ref, reactive } from "vue";
const users = ref([
  {
    name: "John",
    age: 30,
    isActive: true,
  },
  {
    name: "Bob",
    age: 30,
    isActive: false,
  },
  {
    name: "Carol",
    age: 30,
    isActive: true,
  },
]);
</script>

<template>
  <div>
    <ul>
      <template v-for="(user, index) in users">
        <li v-if="!user.isActive" :key="user.name">
          {{ user.name }}: {{ user.isActive ? "Active" : "Deactive" }}({{ index }})
        </li>
      </template>
    </ul>
  </div>
</template>
