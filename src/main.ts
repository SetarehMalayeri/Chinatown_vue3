import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"   // 引入路由器

const app = createApp(App)

app.use(router)
app.mount('#app')
