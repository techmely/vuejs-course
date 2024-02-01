<script setup>
const message = 'hello world!!'
const rawHtml = '<div><h1>Title</h1><span style="color: red">This should be red.</span></div>'
const buttonId = 'button-id'
const buttonClass = 'btn btn-rounded'
const isButtonDisabled = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: {
    color: 'blue'
  }
}
</script>

<template>
  <h1>Syntax</h1>
  <p>Message: {{ message }}</p>
  <span v-html="rawHtml"></span>
  <button :id="buttonId" :class="buttonClass" :disabled="isButtonDisabled">Click here</button>
  <button v-bind="objectOfAttrs">Click here!!!</button>
</template>
