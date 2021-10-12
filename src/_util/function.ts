import type { App } from 'vue'
import type { Component, ComponentWithInstall } from './type'

export function componentInstall<T extends Component[]>(...args: T) {
  if (!args.length) return

  if (args.length === 1) {
    const currentComponent = args[0] as ComponentWithInstall
    currentComponent.install = function (app: App) {
      app.component(currentComponent.name, currentComponent)
    }

    return currentComponent
  }

  if (args.length > 1) {
    const componentGroup = args
    const unionComponent = args[0] as ComponentWithInstall
    // 传入多个组件统一注册到首个组件下
    unionComponent.install = function (app: App) {
      componentGroup.forEach(subComponent => {
        app.component(subComponent.name, subComponent)
      })
    }

    return unionComponent
  }
}
