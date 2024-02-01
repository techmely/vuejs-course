<script setup>
const message = 'hello world!!'
const rawHtml = '<div><h1>Title</h1><span style="color: red">This should be red.</span></div>'
const buttonId = 'button-id'
const buttonClass = 'btn btn-rounded'
const isButtonDisabled = false
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: {
    color: 'blue'
  }
}
const number = 2
const listString = 'a,b,c,d,e,f,g,h,i,j'
const convertToId = (data) => data.split(',').reverse().join('-')

const attributeName = 'href'
const url = 'http://kungfutech.edu.vn'
</script>

<template>
  <h1>Syntax</h1>
  <p>Message: {{ message }}</p>
  <span v-html="rawHtml"></span>
  <button :id="buttonId" :class="buttonClass" :disabled="isButtonDisabled">
    {{ isButtonDisabled ? 'Disabled' : 'Click here' }}
  </button>
  <button v-bind="objectOfAttrs">Click here!!!</button>
  <button :id="convertToId(listString)">Number: {{ number * 2 }}</button>
  <a v-bind:[attributeName]="url">Click here</a>
</template>
