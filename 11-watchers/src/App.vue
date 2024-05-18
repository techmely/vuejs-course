<script setup>
import { reactive, ref, watch } from "vue";
const x = ref(0);
const y = ref(0);

const user = reactive({
  age: 18,
  class: {
    students: 0,
    name: "A",
  },
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

watch(user, (newUser, oldUser) => {
  console.log(`User: ${JSON.stringify(newUser)}, ${JSON.stringify(oldUser)}}`);
}, {deep: true, immediate: true});

const increment = () => {
  x.value++;
  y.value++;
};

const changeAge = () => {
  user.class.students++
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
