const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    entry: './docs/main.ts',
    resolve: {
      alias: {
        '~': resolve('docs'),
        '@': resolve('src'),
        '@style': resolve('src/_style'),
      },
    },
  },
}
