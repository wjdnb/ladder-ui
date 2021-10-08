import { sep } from 'path'
import { lstatSync } from 'fs';

export const TS_REGEXP= /[^d]\.ts$/
export const TSX_REGEXP = /\.tsx$/
export const SCSS_REGEXP = /\.scss$/
export const VUE_REGEXP = /\.vue$/
export const DEMO_REGEXP = new RegExp('\\' + sep + 'demo$');
export const TEST_REGEXP = new RegExp('\\' + sep + 'test$');

export function isDir(dir) {
  return lstatSync(dir).isDirectory();
}

export function isDemoDir(dir) {
  return DEMO_REGEXP.test(dir);
}

export function isTestDir(dir) {
  return TEST_REGEXP.test(dir);
}

export function isTsxFile(dir) {
  return TSX_REGEXP.test(dir) 
}

export function isTsFile(dir) {
  return TS_REGEXP.test(dir)
}

export function isScssFile(dir) {
  return SCSS_REGEXP.test(dir)
}

export function isVueFile(dir) {
  return VUE_REGEXP.test(dir)
}