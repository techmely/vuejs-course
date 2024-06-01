<script setup>
import { onMounted, ref } from "vue";
const inputRef = ref(null);
const list = ref(["Item 1", "Item 2", "Item 3"]);
const itemRefs = ref([]);
onMounted(() => {
  // inputRef.value.focus();
  console.log(itemRefs.value)
  itemRefs.value.forEach((item) => {
    item.style.transition = "opacity 5s";
    item.style.opacity = 1;
  });
});

const initializeThirdPartyLibrary = (el) => {
  console.log(el);
};
</script>

<template>
  <div>
    <h1>Template refs</h1>
    <input
      :ref="
        (el) => {
          initializeThirdPartyLibrary(el);
        }
      "
    />

    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :ref="(el) => (itemRefs[index] = el)"
        style="opacity: 0"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
