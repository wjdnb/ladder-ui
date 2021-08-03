const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const tsLoader = require('ts-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境
module.exports = {
  mode: isProd ? 'production' : 'development',
  context: resolve('../../ladder-ui'),
  entry: '/docs/main.ts',
  output: {
    publicPath: './',
    path: resolve('../dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: ['\\.vue$'],
            },
          },
        ],
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              esModule: true,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]',
                  esModule: true,
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(otf|ttf|woff2?|eot)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              esModule: true,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]',
                  esModule: true,
                },
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.vue'],
    alias: {
      '~': resolve('../docs'),
      '@': resolve('../src'),
      '@style': resolve('../src/_style'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 页面title
      title: 'ladder-ui',
      // script 加载方式
      scriptLoading: 'defer',
      // 模板
      template: resolve('../docs/public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
    }),
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     extensions: {
    //       vue: {
    //         enabled: true,
    //         compiler:
    //           '/Users/hgwxxdd/coding/ladder-ui/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js',
    //       },
    //     },
    //     diagnosticOptions: {
    //       semantic: true,
    //       syntactic: false,
    //     },
    //   },
    // }),
  ],
}
