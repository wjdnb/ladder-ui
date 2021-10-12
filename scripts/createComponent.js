const args = require('minimist')(process.argv.slice(2))
const { SRC_DIR } = require('../ladder.config.js')
const { join } = require('path')
const { mkdirSync, existsSync, writeFileSync } = require('fs')
const componentName = args._[0]
let componentStructure = {}
const { scssTemplate, tsxTemplate, indexTemplate } = require('./utils')

async function generateComponent(targetDir, structure) {
  if (!structure.name || !structure.type) return

  switch (structure.type) {
    case 'dir':
      const dirPath = join(targetDir, structure.name)
      if (!existsSync(dirPath)) {
        generateDir(dirPath)

        if (structure.children) {
          structure.children.forEach(item => {
            generateComponent(dirPath, item)
          })
        }
      }
      break
    case 'file':
      const filePath = join(targetDir, `${structure.name}.${structure.suffix}`)
      console.log(filePath)
      if (!existsSync(filePath)) {
        generateFile(filePath, structure.template)
      }
      break
    default:
      return
  }
}

function generateComponentStructure(componentName) {
  return {
    name: componentName,
    type: 'dir',
    children: [
      {
        type: 'dir',
        name: 'demo',
        children: [],
      },
      {
        type: 'dir',
        name: 'style',
        children: [
          {
            type: 'file',
            suffix: 'scss',
            name: `${componentName}`,
            template: scssTemplate(componentName),
          },
        ],
      },
      {
        type: 'file',
        suffix: `tsx`,
        name: `${componentName}`,
        template: tsxTemplate(componentName),
      },
      {
        type: 'file',
        suffix: 'ts',
        name: 'index',
        template: indexTemplate(componentName),
      },
    ],
  }
}

componentStructure = generateComponentStructure(componentName)

function generateDir(path) {
  mkdirSync(path)
}

function generateFile(path, template) {
  writeFileSync(path, template)
}

generateComponent(SRC_DIR, componentStructure)
