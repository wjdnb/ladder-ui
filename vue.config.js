const path = require('path')

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
  configureWebpack: {
    entry: './docs/main.ts',
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './docs'),
        '@': path.resolve(__dirname, './src'),
        '@style': path.resolve(__dirname, './src/_style'),
      },
    },
  },
}
