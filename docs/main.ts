import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/index.scss'
import LadderUI from '@/index'

const app = createApp(App)

app.use(LadderUI)

app.use(router)

app.mount('#app')
