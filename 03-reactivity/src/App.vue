<script setup>
import { reactive } from 'vue'

const object = reactive({
  count: 2,
  user: {
    age: 18
  },
  array: [1, 2, 3]
})

const change = () => {
  object.count++
  object.user.age++
  object.array.push(4)
}
</script>

<template>
  <div>
    <p>Count: {{ object.count }}</p>
    <p>Age: {{ object.user.age }}</p>
    <p>Array: {{ object.array }}</p>
    <button @click="change">Increase</button>
  </div>
</template>
