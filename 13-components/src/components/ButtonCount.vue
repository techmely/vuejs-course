<template>
  <div>
    <button @click="callFunctionIncrease">
      <slot name="increase">Button content</slot>
    </button>
    <button @click="callFunctionIncreaseByTwoTimes">
      <slot name="increaseByTwoTimes">Button content</slot>
    </button>
    <button @click="callFunctionIncreaseBy">
      <slot name="increaseBy">Button content</slot>
    </button>
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
