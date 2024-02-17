<script setup>
import { ref } from 'vue'

const count = ref(2)
count.value++

const increase = () => count.value++
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increase">Increase</button>
  </div>
</template>
