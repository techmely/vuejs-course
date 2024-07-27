<script setup>
import { ref } from "vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

const currentComponent = ref(ComponentA);
</script>

<template>
  <div>
    <h1>Dynamic components</h1>
    <button @click="currentComponent = ComponentA">Show component A</button>
    <button @click="currentComponent = ComponentB">Show component B</button>

    <KeepAlive> <component :is="currentComponent" /></KeepAlive>
  </div>
</template>
