import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/index.scss'
import LadderUI from '@/index'
import DemoBlock from './components/l-demo.vue'

const app = createApp(App)

app.component('DemoBlock', DemoBlock)

app.use(LadderUI)

app.use(router)

app.mount('#app')
