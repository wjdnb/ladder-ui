const args = require('minimist')(process.argv.slice(2))
const { prompt } = require('enquirer')
const currentVersion = require('../package.json').version
const semver = require('semver')
const execa = require('execa')

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
  await execa('git', ['tag', `v${targetVersion}`])
  await execa('git', ['push', 'origin', `refs/tags/v${targetVersion}`])
}

async function publishToNpm() {
  await execa('yarn', [
    'publish',
    '--new-version',
    targetVersion,
    [
      'publish',
      '--new-version',
      version,
      '--tag',
      targetVersion,
      '--access',
      'public',
    ],
  ])
}

;(async function release() {
  await runReleaseSteps()
})()
