<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script setup>
import { ref } from "vue";
const text = ref("hello");
const multilineText = ref("");

const checkedNames = ref([]);
const radioChecked = ref();
const selected = ref("");
</script>

<template>
  <div>
    <h1>Form Input Bindings</h1>
    <p>Text: {{ text }}</p>

    <input v-model="text" />
    <p>Multiline Text: {{ multilineText }}</p>
    <textarea v-model="multilineText" placeholder="Input your message" />

    <p>Checkbox: {{ checkedNames }}</p>
    <input type="checkbox" id="a" v-model="checkedNames" value="A" />
    <label for="a">A</label>
    <input type="checkbox" id="b" v-model="checkedNames" value="B" />
    <label for="b">B</label>
    <input type="checkbox" id="c" v-model="checkedNames" value="C" />
    <label for="c">C</label>

    <p>Radio: {{ radioChecked }}</p>
    <input type="radio" id="a" v-model="radioChecked" value="A" />
    <label for="a">A</label>
    <input type="radio" id="b" v-model="radioChecked" value="B" />
    <label for="b">B</label>

    <p>Select: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>
