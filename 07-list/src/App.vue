<script setup>
import { ref, reactive } from "vue";
const shoppingItems = ref([
  {
    name: "apple",
    price: 7,
  },
  {
    name: "orange",
    price: 12,
  },
  {
    name: "banana",
    price: 10,
  },
]);
</script>

<template>
  <div>
    <ul>
      <li v-for="item in shoppingItems" :key="item.name">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>
</template>
