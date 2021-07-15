const path = require('path')

module.exports = {
  publicPath: '/docs',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
  pages: {
    index: {
      entry: './docs/main.ts',
      template: './docs/public/index.html',
      favicon: './docs/public/favicon.png',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './docs'),
        '@': path.resolve(__dirname, './src'),
        '@style': path.resolve(__dirname, './src/_style'),
      },
    },
  },
}
