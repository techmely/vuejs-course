<script setup>
import LocaleComponent from './LocaleComponent.vue';
const props = defineProps({
  count: Number,
});
console.log(props.count);
</script>

<template>
  <h1 class="green">{{ count }}</h1>
  <LocaleComponent/>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  display: block;
}

h3 {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
