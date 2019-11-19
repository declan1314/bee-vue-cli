'use strict'
const path = require('path')
const webpack = require('webpack')
const helpers = require('./helpers')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')
const { VueLoaderPlugin } = require('vue-loader');
const DefinePlugin = require('webpack/lib/DefinePlugin')
const config = require('./config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

let webpackConfig = {
  entry: ['@babel/polyfill', './src/main'],
  output: {
    path: config.build.assetsRoot,
    filename: `[name].js`,
    chunkFilename: `[name].js`,
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve(`src/${process.env.PROJECT}`),
      '@Base': resolve('src/base'),
      'bee-ui': resolve('src/base/components/lib')
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: "pre",
      //   include: [resolve('src'), resolve('test')],
      //   exclude: /vue.vux.js$/,
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      // {
      //   test: /\.vue.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   enforce: 'pre',
      //   loader: 'tslint-loader'
      // },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client'),
          resolve('node_modules/element-ui/src'),
          resolve('node_modules/element-ui/packages'),
          // resolve('node_modules/_element-ui@2.11.1@element-ui/src'),
          // resolve('node_modules/_element-ui@2.11.1@element-ui/packages')
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: { 
              appendTsSuffixTo: [/.vue$/] //认识vue文件
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          { loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                // path.resolve(__dirname, '..', `src/base/assets/theme/base/theme-*.scss`),
                resolve(`src/base/assets/theme/${process.env.CLIENT || 'base'}/theme-*.scss`),
                resolve(`src/base/assets/theme/base/element-variables.scss`),
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: `src/${process.env.PROJECT}/assets`,
      to: './assets'
    } ]),
    // new CheckerPlugin(),
    // new TsConfigPathsPlugin(/* { configFileName, compiler } */),
    new webpack.ProvidePlugin({
      _: 'lodash'
      // $: 'jquery'
    })
  ]
}

module.exports = webpackConfig
