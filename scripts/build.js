import execa from 'execa'
import { copy, remove } from 'fs-extra'
import { readdirSync } from 'fs'
import { join } from 'path'
import { ES_DIR, LIB_DIR, SOURCE_DIR } from '../ladder.config.js'
import { isDir, isDemoDir, isTestDir, isTsFile, isTsxFile } from './utils.js'
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
    name: 'Remove Useless File And Compile Css',
    use: removeUselessFileAndCompileCss,
  },
]

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
  await copy(SOURCE_DIR, ES_DIR)
  await copy(SOURCE_DIR, LIB_DIR)
}

async function buildTypescript() {
  await execa('tsc')
}

async function handleFile(filePath) {
  if (isTsxFile(filePath)) {
    return remove(filePath)
  }

  if (isTsFile(filePath)) {
    return remove(filePath)
  }

  return 
}

// async function compileCss() {}

async function removeUselessFileAndCompileCss() {
  const files = readdirSync(ES_DIR)

  await Promise.all(
    files.map(filename => {
      const filePath = join(ES_DIR, filename)

      if (isDemoDir(filePath) || isTestDir(filePath)) {
        return remove(filePath)
      }

      if (isDir(filePath)) {
        return removeUselessFileAndCompileCss(filePath)
      }

      if (isTsxFile(filePath) || isTsFile(filePath)) {
        return remove(filePath)
      }

      return handleFile(filePath)
    }),
  )
}

;(async function build() {
  await runBuildSteps()
})()
