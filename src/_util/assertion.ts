import { JUSTIFY_CONTENT, ALIGN_ITEMS } from './var'

export const isArray = Array.isArray
export const isString = (val: any) => typeof val === 'string'
export const isNumber = (val: any) => typeof val === 'number'
export const isObject = (val: any) => val !== null && typeof val === 'object'

export const isJustifyContent = (value: string) =>
  JUSTIFY_CONTENT.includes(value)

export const isAlignItems = (value: string) => ALIGN_ITEMS.includes(value)
