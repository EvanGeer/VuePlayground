import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'
import router from './router'
import createBootstrap from 'bootstrap-vue-next'


const app = createApp(App)

app.use(createPinia())
app.use(createBootstrap()) // Important
app.use(router)

app.mount('#app')

