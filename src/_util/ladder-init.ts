import { App } from 'vue'
import type { Component, VuePlugin } from './type'

export function ladderInit(components = {}): VuePlugin {
  const installTarget: App[] = []

  function install(app: App): void {
    if (installTarget.includes(app)) return
    installTarget.push(app)

    Object.values(components).forEach(comp => {
      console.log('comp', comp)
      const component = comp as Component
      app.component(component.name, component)
    })
  }

  return { install }
}
