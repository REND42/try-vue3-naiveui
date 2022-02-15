import { createApp } from 'vue'
import naiveUI from './ui'
import App from './App.vue'

const app = createApp(App)
app.use(naiveUI)

app.mount('#app')
