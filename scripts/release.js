const args = require('minimist')(process.argv.slice(2))
const { prompt } = require('enquirer')
const currentVersion = require('../package.json').version
const semver = require('semver')
// const chalk = require('chalk')
// const fs = require('fs')
// const path = require('path')
// const ora = require('ora')

const preId =
  args.preid ||
  (semver.prerelease(currentVersion) && semver.prerelease(currentVersion)[0])

const skipTests = args.skipTests

const versionIncrements = [
  'patch',
  'minor',
  'major',
  ...(preId ? ['prepatch', 'preminor', 'premajor', 'prerelease'] : []),
]

const inc = i => semver.inc(currentVersion, i, preId)

const steps = [
  {
    name: 'Enter The Version',
    use: enterVersion,
  },
  {
    name: 'Generate Changelog',
    use: generateChangelog,
  },
]

async function enterVersion() {
  let targetVersion = args._[0]

  if (!targetVersion) {
    const { release } = await prompt({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: versionIncrements
        .map(i => `${i} (${inc(i)})`)
        .concat(['custom']),
    })

    if (release === 'custom') {
      targetVersion = (
        await prompt({
          type: 'input',
          name: 'version',
          message: 'Input custom version',
          initial: currentVersion,
        })
      ).version

      if (!semver.valid(targetVersion)) {
        throw new Error(`invalid target version: ${targetVersion}`)
      }
    }
  }

  const { yes } = await prompt({
    type: 'confirm',
    name: 'yes',
    message: `Releasing v${targetVersion} Confirm ?`,
  })

  if (!yes) {
    return
  }
}

async function runReleaseSteps() {
  for (let i = 0; i < steps.length; i++) {
    const { use, name } = steps[i]
    try {
      // const spinner = ora(text).start()
      await use()
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

async function generateChangelog() {
  await run(`yarn`, ['changelog'])
}

;(async function release() {
  await runReleaseSteps()
})()
