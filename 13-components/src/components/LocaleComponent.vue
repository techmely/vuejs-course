<template>
  <p>Locale: {{ locale }}</p>
  <button @click="updateLocale">Update locale from locale component</button>
</template>

<script setup>
import { inject } from "vue";
const { locale, updateLocale } = inject("locale");
</script>
