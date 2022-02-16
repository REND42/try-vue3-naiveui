import { createApp } from 'vue'
import naiveUI from './ui'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(naiveUI)
app.use(router)

app.mount('#app')
