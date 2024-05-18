<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script setup>
import { ref, watch } from "vue";
const question = ref("");
const isLoading = ref(false);
const answer = ref("");

watch(question, async (newQuestion) => {
  if (newQuestion.includes("?")) {
    isLoading.value = true;
    answer.value = "Đang suy nghĩ...";
    try {
      const response = await fetch("https://yesno.wtf/api");
      answer.value = (await response.json()).answer;
    } catch (error) {
      answer.value = "Error! Không thể call api";
    } finally {
      isLoading.value = false;
    }
  }
});
</script>

<template>
  <div>
    <h1>Watchers</h1>
    <p>Hỏi một câu hỏi có thể trả lời bằng "yes" hoặc "no"</p>
    <input v-model="question" :disabled="isLoading" />
    <p>{{ answer }}</p>
  </div>
</template>
