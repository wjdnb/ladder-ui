const { cwd } = require('process')
const { join } = require('path')
const ROOT = cwd()
const ES_DIR = join(ROOT, 'es')
const LIB_DIR = join(ROOT, 'lib')
const SRC_DIR = join(ROOT, 'src')
const TSCONFIG = join(ROOT, 'tsconfig.json')
const ESM_TSCONFIG = join(ROOT, 'tsconfig.esm.json')
const TSCONFIG_INFO = join(ROOT, 'tsconfig.tsbuildinfo')
const CJS_TSCONFIG = join(ROOT, 'tsconfig.cjs.json')
const CJS_TSCONFIG_INFO = join(ROOT, 'tsconfig.cjs.tsbuildinfo')
const ESM_TSCONFIG_INFO = join(ROOT, 'tsconfig.esm.tsbuildinfo')

module.exports = {
  ROOT,
  ES_DIR,
  LIB_DIR,
  SRC_DIR,
  TSCONFIG,
  ESM_TSCONFIG,
  CJS_TSCONFIG,
  TSCONFIG_INFO,
  ESM_TSCONFIG_INFO,
  CJS_TSCONFIG_INFO,
}
