<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script setup>
import { ref, reactive } from "vue";
const newTodo = ref("");
const todos = reactive([
  {
    id: 1,
    text: "Learn vuejs",
  },
  {
    id: 2,
    text: "Build a todo app",
  },
]);

const addTodo = () => {
  if (newTodo.value.trim() === "") return;
  const todo = {
    id: todos.length + 1,
    text: newTodo.value,
  };
  todos.push(todo);
  newTodo.value = "";
};
</script>

<template>
  <div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">Add todo</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>
