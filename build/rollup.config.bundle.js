import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import jsx from 'acorn-jsx'
import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      file: 'lib/es/index.js',
    },
    plugins: [
      nodeResolve(),
      typescript({
        tsconfigOverride: {
          include: ['src/**/*.ts', 'src/**/*.tsx'],
        },
      }),
      vue({
        target: 'browser',
        css: false,
      }),
    ],
    acornInjectPlugins: [jsx()],
    external(id) {
      return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
    },
  },
]
