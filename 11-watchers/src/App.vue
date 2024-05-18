<script setup>
import { reactive, ref, watch } from "vue";
const x = ref(0);
const y = ref(0);

const user = reactive({
  age: 18,
});

watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`Tổng của x và y là: ${sum}`);
  }
);

watch([x, () => y.value + 1], ([newX, newY]) => {
  console.log(`Giá trị cập nhật: ${newX}, ${newY}`);
});

watch(() => user.age, (newAge) => {
  console.log(`Tuổi: ${newAge}`);
});

const increment = () => {
  x.value++;
  y.value++;
};

const changeAge = () => {
  user.age = 20;
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
