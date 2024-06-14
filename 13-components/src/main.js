import './assets/main.css'

import { createApp, readonly } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './components/GlobalComponents.vue'

const app = createApp(App)

app.component('ComponentA', GlobalComponent).component('ComponentB', GlobalComponent)

app.provide('message', readonly('Hello!'))

app.use(router)

app.mount('#app')
