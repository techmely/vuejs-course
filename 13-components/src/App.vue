<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import ButtonCount from "./components/ButtonCount.vue";
import LoadingComponent from "./components/LoadingComponent.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import { defineAsyncComponent, provide, ref, watchEffect } from "vue";
const count = ref(0);
const ComponentVModel = defineAsyncComponent({
  loader: () => import("./components/ComponentVModel.vue"),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
});
const increaseBy = (number1, number2) => {
  count.value = count.value + number1 + number2;
};
const email = ref("");
const username = ref("");

watchEffect(() => {
  console.log(email.value);
});

const changeEmailDefaultFromParent = () => {
  email.value = "techmely.creation@gmail.com";
};
const changeUsernameDefaultFromParent = () => {
  username.value = "techmely";
};
const currentLocale = ref("vietnam");

const updateCurrentLocale = () => {
  currentLocale.value = "english";
};
provide("locale", {
  locale: currentLocale,
  updateLocale: updateCurrentLocale,
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <button @click="currentLocale = 'english'">Change current locale</button>
      <component-v-model v-model:email="email" v-model:username.capitalize="username" />
      <button @click="changeEmailDefaultFromParent">
        Change email default from parent
      </button>
      <button @click="changeUsernameDefaultFromParent">
        Change username default from parent
      </button>
      <HelloWorld :count="count" />
      <button-count
        @increase="count++"
        @increase-by-two-times="count = count + 2"
        @increase-by="increaseBy"
        ><template #increase> <span>Increase</span></template>
        <template #increaseByTwoTimes> <span>Increase By Two Times</span></template>
        <template #increaseBy> <span>Increase By</span></template>
      </button-count>
      <ComponentA />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
