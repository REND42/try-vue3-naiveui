import { createApp } from 'vue'
import naiveUI from './ui'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import "./styles/global.css"
import { createRouterGuard } from './router/guard'

const app = createApp(App)
app.use(createPinia())
app.use(naiveUI)
app.use(router)
createRouterGuard(router)

app.mount('#app')
