<script setup></script>

<template>
  <div>
    <h1
      v-demo="{
        color: 'red',
        background: 'blue',
      }"
    >
      Plugins
    </h1>
    <p>{{ $translate('greetings.hello') }}</p>
    <p>{{ $translate('greetings.message') }}</p>
  </div>
</template>
