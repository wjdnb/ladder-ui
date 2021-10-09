const execa = require('execa')
const { copy, remove } = require('fs-extra')
const { readdirSync } = require('fs')
const { join } = require('path')
const ora = require('ora')
const consola = require('consola')
const chalk = require('chalk')

const {
  ES_DIR,
  LIB_DIR,
  SRC_DIR,
  ESM_TSCONFIG,
  CJS_TSCONFIG,
  ESM_TSCONFIG_INFO,
  CJS_TSCONFIG_INFO,
} = require('../ladder.config.js')
const {
  isDir,
  isDemoDir,
  isTestDir,
  isTsFile,
  isTsxFile,
  isScssFile,
  isVueFile,
} = require('./utils.js')

const steps = [
  {
    name: 'Run Tests',
    use: runTest,
  },
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
    use: handleCJSOutput,
  },
]

async function BuildScss() {
  await execa('npx', ['sass', ES_DIR, '--no-source-map'])
  await execa('npx', ['sass', LIB_DIR, '--no-source-map'])
}

async function runTest() {
  await execa('yarn', ['test'])
}

async function handleESMOutput() {
  await removeUselessFile(ES_DIR)
}

async function handleCJSOutput() {
  await removeUselessFile(LIB_DIR)
}

async function runBuildSteps() {
  for (let i = 0; i < steps.length; i++) {
    const { use, name } = steps[i]
    const spinner = ora().start()
    console.log(`${chalk.bgYellow.black('')} ${name}\n`)
    const spinner = ora().start()
    try {
      await use()
      spinner.stop()
      console.log(`${chalk.bgGreen.black(' DONE ')} ${name}\n`)
    } catch (err) {
      spinner.stop()
      consola.error(new Error(err))
      throw err
    }
  }
}

async function copySourceCode() {
  await copy(SRC_DIR, ES_DIR)
  await copy(SRC_DIR, LIB_DIR)
}

async function buildTypescript() {
  await execa('npx', ['tsc', '-b', '--force', ESM_TSCONFIG]).then(() => {
    execa('rimraf', [ESM_TSCONFIG_INFO])
  })

  await execa('npx', ['tsc', '-b', '--force', CJS_TSCONFIG]).then(() => {
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

      if (isScssFile(filePath)) {
        return remove(filePath)
      }

      if (isVueFile(filePath)) {
        return remove(filePath)
      }

      return
    }),
  )
}

;(async function build() {
  await runBuildSteps()
})()
