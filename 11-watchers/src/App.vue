<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
const x = ref(0);
const y = ref(0);

const user = reactive({
  age: 18,
  class: {
    students: 0,
    name: "A",
  },
});

watchEffect(() => {
  console.log(`Giá trị x: ${x.value}, y: ${y.value}`);
});

watchEffect(() => {
  console.log(`User: ${JSON.stringify(user)}`);
});
const increment = () => {
  x.value++;
  y.value++;
};

const changeAge = () => {
  user.class.students++;
};
</script>

<template>
  <div>
    <h1>Watchers</h1>
    <button @click="increment">Increment</button>
    <p>{{ x }}, {{ y }}</p>

    <button @click="changeAge">Change age</button>
    <p>{{ user.age }}</p>
  </div>
</template>
