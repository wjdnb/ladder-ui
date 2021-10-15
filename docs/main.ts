import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/index.scss'
import { LButton, LDivider, ladderInit } from '@/index'
import LDemo from './components/l-demo.vue'
import LCode from './components/l-code'

const app = createApp(App)

app.component('LDemo', LDemo)
app.component('LCode', LCode)

const ladder = ladderInit({ LButton, LDivider })

app.use(ladder)

app.use(router)

app.mount('#app')
