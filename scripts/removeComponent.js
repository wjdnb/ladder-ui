const { existsSync } = require('fs')
const { SRC_DIR } = require('../ladder.config.js')
const { join } = require('path')
const { remove } = require('fs-extra')

function removeComponent(dir) {
  const componentPath = join(SRC_DIR, dir)

  if (existsSync(componentPath)) {
    remove(componentPath)
  }

  // TODO
  // Reove from component.ts & index.scss
}

removeComponent('test')
