const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    entry: './docs/main.ts',
    resolve: {
      alias: {
        '~': resolve('docs'),
        '@': resolve('src'),
        '@style': resolve('src/_style'),
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
            },
            {
              loader: resolve('./build/md-loader/index.js'),
            },
          ],
        },
      ],
    },
  },
}
