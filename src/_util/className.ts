import { isString, isObject, isArray } from './assertion'

export default function className(...args: any[]): string {
  const classNames = []
  for (let i = 0; i < args.length; i++) {
    const value = args[i]
    if (!value) continue

    if (isString(value)) {
      classNames.push(value)
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const inner: string = className(value[i])
        if (inner) {
          classNames.push(inner)
        }
      }
    } else if (isObject(value)) {
      for (const item in value) {
        if (value[item]) {
          classNames.push(value[item])
        }
      }
    }
  }
  return classNames.join(' ')
}
