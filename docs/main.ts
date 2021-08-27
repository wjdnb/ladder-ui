import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/index.scss'
import LadderUI from '@/index'
import LDemo from './components/l-demo.vue'
import LCode from './components/l-code'

const app = createApp(App)

app.component('LDemo', LDemo)
app.component('LCode', LCode)

app.use(LadderUI)

app.use(router)

app.mount('#app')



