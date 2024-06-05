<template>
  <div>
    <button @click="callFunctionIncrease">Increase</button>
    <button @click="callFunctionIncreaseByTwoTimes">Increase by two times</button>
    <button @click="callFunctionIncreaseBy">Increase by</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["increase", "increase-by-two-times", "increase-by"]);

const callFunctionIncrease = () => {
  emit("increase");
};
const callFunctionIncreaseByTwoTimes = () => {
  emit("increaseByTwoTimes");
};

const callFunctionIncreaseBy = () => {
  emit("increaseBy", 10, 10);
};
</script>
