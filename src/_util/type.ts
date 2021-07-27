import type { App } from 'vue'

export const tuple = <T extends string[]>(...args: T) => args

export declare type SFCWithInstall<T> = T & {
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
