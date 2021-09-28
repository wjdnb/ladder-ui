import execa from 'execa'
import { copy } from 'fs-extra'
import { ES_DIR, LIB_DIR, SOURCE_DIR, TS_CONFIG } from '../ladder.config.js'

const steps = [
  {
    name: 'Copy Source Code',
    use: copySourceCode,
  },
  {
    name: 'Build Typescript',
    use: buildTypescript,
  },
  // {
  //   name: 'Build Css',
  //   use: buildCss,
  // },

  // {
  //   name: 'Remove Useless File',
  //   use: removeUselessFile,
  // },
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
async function buildCss() {}
async function buildTypescript() {
  await execa('tsc')
}
async function removeUselessFile() {}

;(async function build() {
  await runBuildSteps()
})()
