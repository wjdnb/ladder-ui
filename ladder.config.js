import { cwd } from 'process'
import { join } from 'path'
export const ROOT = cwd()
export const ES_DIR = join(ROOT, 'es')
export const LIB_DIR = join(ROOT, 'lib')
export const SOURCE_DIR = join(ROOT, 'src')
export const TS_CONFIG = join(ROOT, 'tsconfig.json')
