const args = require('minimist')(process.argv.slice(2))
const { prompt } = require('enquirer')
const currentVersion = require('../package.json').version
const semver = require('semver')
const execa = require('execa')
const fs = require('fs')
const { ROOT } = require('../ladder.config')
const { join } = require('path')
const ora = require('ora')
const chalk = require('chalk')

const greenText = text => chalk.black.bgGreen(` ${text} `)

const preId =
  args.preid ||
  (semver.prerelease(currentVersion) && semver.prerelease(currentVersion)[0])

const versionIncrements = [
  'patch',
  'minor',
  'major',
  ...(preId ? ['prepatch', 'preminor', 'premajor', 'prerelease'] : []),
]

const inc = i => semver.inc(currentVersion, i, preId)

let targetVersion = null

const steps = [
  {
    name: 'Determine the release version',
    use: determineReleaseVersion,
  },
  {
    name: 'Generate Changelog',
    use: generateChangelog,
  },
  {
    name: 'Push To Remote',
    use: pushToGithub,
  },
  {
    name: 'Publish To Npm',
    use: publishToNpm,
  },
]

async function determineReleaseVersion() {
  const { release } = await prompt({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements.map(i => `${i} (${inc(i)})`).concat(['custom']),
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
  } else {
    targetVersion = release.match(/\((.*)\)/)[1]
  }

  const { yes } = await prompt({
    type: 'confirm',
    name: 'yes',
    message: `Releasing v${targetVersion} Confirm ?`,
  })

  if (!yes) {
    return
  }

  await updateVersion(targetVersion)
}

async function updateVersion(targetVersion) {
  const pkgPath = join(ROOT, 'package.json')
  const pkgFile = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkgFile.version = targetVersion
  fs.writeFileSync(pkgPath, JSON.stringify(pkgFile, null, 2) + '\n')
}

async function runReleaseSteps() {
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

async function generateChangelog() {
  await execa(`yarn`, ['changelog'])
}

async function pushToGithub() {
  await execa('git', ['add', '--all'])
  await execa('git', ['commit', '-m', `release: v${targetVersion}`])
  await execa('git', ['tag', `v${targetVersion}`])
  await execa('git', ['push', 'origin', `refs/tags/v${targetVersion}`])
  await execa('git', ['push'])
}

async function publishToNpm() {
  const spinner = ora('publishing to npm').start()

  await execa('yarn', [
    'publish',
    '--new-version',
    targetVersion,
    '--tag',
    targetVersion,
    '--access',
    'public',
  ])
  spinner.stop()
  const success = `${greenText('DONE')} Release Complete! \n`
  console.log(success)
}

;(async function release() {
  await runReleaseSteps()
})()
