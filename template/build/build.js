'use strict'
require('./check-versions')()

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config')
let webpackConfig = require(`./${process.env.NODE_ENV !== 'development' ? 'webpack.config.prod' : 'webpack.config.dev'}`)

// added
const fs = require('fs');
const envConfig = require(path.resolve(`config/${process.env.CLIENT}/${process.env.NODE_ENV}.json`))

const spinner = ora(`building for ${process.env.NODE_ENV}...`)
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    // added
    const dist = path.resolve(`out/${process.env.PROJECT}/dist/config.js`)
    fs.writeFileSync(dist, `var __CONFIG__ = Object.freeze(${JSON.stringify(envConfig)})`)

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
