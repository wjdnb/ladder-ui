import { App } from 'vue'
import * as component from './component'

export default function install(app: App) {
  const components: Record<string, any> = component
  Object.keys(components as any).forEach(item => {
    app.component(item, components[item])
  })
}






