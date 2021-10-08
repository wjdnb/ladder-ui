const args = require('minimist')(process.argv.slice(2))
const { prompt } = require('enquirer');
const currentVersion = require('../package.json').version
const semver = require('semver')
const chalk = require('chalk');

async function release() {

  const input = await prompt(
    {
      type: 'input',
      name: 'version',
      message: 'Version'
    }
  );
 
  if(!input.version) {
    console.log(chalk.red('Need a Version'))
    return 
  }
}

release()