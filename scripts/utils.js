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

module.exports = {
  isDir,
  isDemoDir,
  isTestDir,
  isTsxFile,
  isTsFile,
  isScssFile,
  isVueFile,
}
