const { SRC_DIR } = require('../ladder.config.js')
const { join } = require('path')
const { mkdirSync, existsSync, writeFileSync } = require('fs')

function toUpperCase(word) {
  return word
    .split('')
    .map((item, index) => (index === 0 ? item.toLocaleUpperCase() : item))
    .join('')
}

function createComponent(dir) {
  const componentPath = join(SRC_DIR, dir)
  const componentStylePath = join(componentPath, 'style')
  const componentDemoPath = join(componentPath, 'demo')
  const componentTestPath = join(componentPath, 'test')

  const styleFilePath = join(componentStylePath, `${dir}.scss`)
  const tsxFilePath = join(componentPath, `${dir}.tsx`)
  const indexFilePath = join(componentPath, `index.ts`)

  const componentUnionPath = join(SRC_DIR, 'component.ts')
  const componentStyleUnionPath = join(SRC_DIR, 'index.scss')

  const tsxFileTemplate = `
import { defineComponent, h } from 'vue'
import type { ExtractPropTypes } from 'vue'

const ${dir}Props = {

}

export type ${dir}Props = Partial<ExtractPropTypes<typeof ${dir}Props>>

export default defineComponent({
  props: ${dir}Props,
  setup() {
    return () => ()
  }
})`

  const indexFileTemplate = `
import L${toUpperCase(dir)} from './${dir}'
export type { ${dir}Props } from './${dir}Props'
export { L${toUpperCase(dir)} }
`

  if (existsSync(componentPath)) return

  mkdirSync(componentPath)
  mkdirSync(componentStylePath)
  mkdirSync(componentDemoPath)
  mkdirSync(componentTestPath)

  writeFileSync(styleFilePath, ``)
  writeFileSync(tsxFilePath, tsxFileTemplate.trim())
  writeFileSync(indexFilePath, indexFileTemplate.trim())

  // TODO
  // Add the to component.ts & index.scss
}

createComponent('test')
