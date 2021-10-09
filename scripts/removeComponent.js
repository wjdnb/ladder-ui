import { existsSync } from 'fs'
import { SRC_DIR } from '../ladder.config.js'
import { join } from 'path'
import { remove } from 'fs-extra'

export function removeComponent(dir) {
  const componentPath = join(SRC_DIR, dir)

  if (existsSync(componentPath)) {
    remove(componentPath)
  }

  // TODO
  // Reove from componentPath.ts & index.scss
}

removeComponent('test')
