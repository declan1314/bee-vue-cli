const webpack = require('webpack')
const path = require('path')
const baseWebpackConfig = require('./webpack.config.base')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin')
const merge = require('webpack-merge')
const devWebpackConfig = require('./webpack.config.dev')

const testWebpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)($|\?)/i
    }),
    new webpack.ProvidePlugin({
      __CONFIG__: path.resolve(`config/development.json`),
    }),
    new DefinePlugin({
      'process.env': require('./config/dev.env')
    })
  ],
  devtool: 'inline-source-map',
  mode: 'development'
})

module.exports = testWebpackConfig
