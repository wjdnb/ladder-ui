import { cwd } from 'process'
import { join } from 'path'
const ROOT = cwd()
const ES_DIR = join(ROOT, 'es')
const LIB_DIR = join(ROOT, 'lib')
const SOURCE_DIR = join(ROOT, 'src')
const TS_CONFIG = join(ROOT, 'tsconfig.json')

export { ROOT, ES_DIR, LIB_DIR, SOURCE_DIR, TS_CONFIG }
