<script setup>
const vColor = {
  mounted: (el, binding) => {
    el.style.color = binding.value;
  },
};

const vDemo = {
  mounted: (el, binding) => {
    el.style.color = binding.value.color;
    el.style.background = binding.value.background;
  },
};
</script>

<template>
  <div>
    <h1
      v-demo="{
        color: 'red',
        background: 'blue',
      }"
    >
      Custom Directives
    </h1>
    <input v-focus placeholder="Input your name" />
  </div>
</template>
