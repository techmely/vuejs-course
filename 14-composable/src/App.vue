<script setup>
import { useCounter } from "./composables/useCounter";
import { useMouse } from "./composables/useMouse";
const { count, increment, decrement } = useCounter();
const { x, y } = useMouse();
</script>

<template>
  <div>
    <h1>Composable</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <p>X: {{ x }}, Y: {{ y }}</p>
  </div>
</template>
