import type { App } from 'vue'

export type Component = {
  name: string
}

export type ComponentWithInstall = Component & {
  install(app: App): void
}

export type Size = 'mini' | 'small' | 'medium' | 'large'

export type AlignItems = 'flex-start' | 'center' | 'flex-end'

export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

export type Type = 'default' | 'primary' | 'danger' | 'link'
