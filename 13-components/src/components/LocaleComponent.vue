<template>
  <p>Locale: {{ locale }}</p>
</template>

<script setup>
import { inject } from "vue";
const locale = inject("locale");
</script>
