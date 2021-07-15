const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: path.resolve(__dirname, '../src/index.scss'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'temp.css',
  },
  resolve: {
    alias: {
      '@style': path.resolve(__dirname, '../src/_style'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
}
