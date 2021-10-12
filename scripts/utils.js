const { sep } = require('path')
const { lstatSync } = require('fs')

const TS_REGEXP = /[^d]\.ts$/
const TSX_REGEXP = /\.tsx$/
const SCSS_REGEXP = /\.scss$/
const VUE_REGEXP = /\.vue$/
const DEMO_REGEXP = new RegExp('\\' + sep + 'demo$')
const TEST_REGEXP = new RegExp('\\' + sep + 'test$')

function isDir(dir) {
  return lstatSync(dir).isDirectory()
}

function isDemoDir(dir) {
  return DEMO_REGEXP.test(dir)
}

function isTestDir(dir) {
  return TEST_REGEXP.test(dir)
}

function isTsxFile(dir) {
  return TSX_REGEXP.test(dir)
}

function isTsFile(dir) {
  return TS_REGEXP.test(dir)
}

function isScssFile(dir) {
  return SCSS_REGEXP.test(dir)
}

function isVueFile(dir) {
  return VUE_REGEXP.test(dir)
}

function toUpperCase(word) {
  return word
    .split('')
    .map((item, index) => (index === 0 ? item.toLocaleUpperCase() : item))
    .join('')
}

function tsxTemplate(name) {
  const template = `
import { defineComponent, h } from 'vue'
import type { ExtractPropTypes } from 'vue'

const ${name}Props = {

}

export type ${name}Props = Partial<ExtractPropTypes<typeof ${name}Props>>

export default defineComponent({
  props: ${name}Props,
  setup() {
    return () => ()
  }
})`
  return template.trim()
}

function indexTemplate(name) {
  const uppername = toUpperCase(name)
  const suffix = 'L'
  const template = `
import ${suffix}${uppername} from './${name}'
export type { ${uppername}Props } from './${name}'
import { componentInstall } from '../_util/function
export default componentInstall(${suffix}${uppername})`

  return template.trim()
}

function scssTemplate(name) {
  const template = `
@import '../../_style/var.scss';
@import '../../_style/mixin.scss';

@include b(${name}) {

}`
  return template.trim()
}

module.exports = {
  isDir,
  isDemoDir,
  isTestDir,
  isTsxFile,
  isTsFile,
  isScssFile,
  isVueFile,
  tsxTemplate,
  scssTemplate,
  indexTemplate,
}
