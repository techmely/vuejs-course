<template>
  <p>Component B</p>
  <div class="flex">
    <label>Message</label>
    <input placeholder="enter your message" v-model="message" />
  </div>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from "vue";
const message = ref("");
</script>
