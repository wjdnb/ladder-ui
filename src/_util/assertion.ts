export const isArray = Array.isArray
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isObject = (val: unknown) =>
  toString.call(val) === '[object Object]'
export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean'
