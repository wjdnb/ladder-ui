import execa from 'execa'
import { copy, remove } from 'fs-extra'
import { readdirSync } from 'fs'
import { join } from 'path'
import { ES_DIR, LIB_DIR, SRC_DIR, ESM_TSCONFIG, CJS_TSCONFIG, ESM_TSCONFIG_INFO, CJS_TSCONFIG_INFO } from '../ladder.config.js'
import { isDir, isDemoDir, isTestDir, isTsFile, isTsxFile, isScssFile, isVueFile } from './utils.js'

const steps = [
  {
    name: 'Copy Source Code',
    use: copySourceCode,
  },
  {
    name: 'Build Typescript',
    use: buildTypescript,
  },
  {
    name: 'Build Scss',
    use: BuildScss,
  },
  {
    name: 'Remove ESModule Useless Output',
    use: handleESMOutput,
  },
  {
    name: 'Remove CommonJS Useless Output',
    use: handleCJSOutput
  }
]

async function BuildScss() {
  await execa('npx', ['sass', ES_DIR, '--no-source-map'])
  await execa('npx', ['sass', LIB_DIR, '--no-source-map'])
}

async function handleESMOutput() {
  await removeUselessFile(ES_DIR)
}

async function handleCJSOutput() {
  await removeUselessFile(LIB_DIR)
}

async function runBuildSteps() {
  for (let i = 0; i < steps.length; i++) {
    const { use } = steps[i]
    try {
      await use()
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

async function copySourceCode() {
  await copy(SRC_DIR, ES_DIR)
  await copy(SRC_DIR, LIB_DIR)
}

async function buildTypescript() {
  await execa('tsc', ['-b','--force', ESM_TSCONFIG]).then(() => {
    execa('rimraf', [ESM_TSCONFIG_INFO])
  })

  await execa('tsc', ['-b','--force', CJS_TSCONFIG]).then(() => {
    execa('rimraf', [CJS_TSCONFIG_INFO])
  })
}

async function removeUselessFile(dir) {
  const files = readdirSync(dir)

  await Promise.all(
    files.map(filename => {
      const filePath = join(dir, filename)
      if (isDemoDir(filePath) || isTestDir(filePath)) {
        return remove(filePath)
      }

      if (isDir(filePath)) {
        return removeUselessFile(filePath)
      }
      
      if (isTsxFile(filePath)) {
        return remove(filePath)
      }

      if (isTsFile(filePath)) {
        return remove(filePath)
      }

      if(isScssFile(filePath)) {
        return remove(filePath)
      }

      if(isVueFile(filePath)) {
        return remove(filePath)
      }

      return 
    }),
  )
}

;(async function build() {
  await runBuildSteps()
})()
