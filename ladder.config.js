import { cwd } from 'process'
import { join } from 'path'
export const ROOT = cwd()
export const ES_DIR = join(ROOT, 'es')
export const LIB_DIR = join(ROOT, 'lib')
export const SRC_DIR = join(ROOT, 'src')
export const TSCONFIG = join(ROOT, 'tsconfig.json')
export const ESM_TSCONFIG = join(ROOT, 'tsconfig.cjs.json')
export const CJS_TSCONFIG = join(ROOT, 'tsconfig.esm.json')
export const ESM_TSCONFIG_INFO = join(ROOT, 'tsconfig.cjs.tsbuildinfo')
export const CJS_TSCONFIG_INFO = join(ROOT, 'tsconfig.esm.tsbuildinfo')
