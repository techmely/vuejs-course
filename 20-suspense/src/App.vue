<script setup>
import AsyncComponent from "./components/AsyncComponent.vue";
</script>

<template>
  <div>
    <h1>Suspense</h1>
    <Suspense>
      <template #default> <AsyncComponent /></template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>
