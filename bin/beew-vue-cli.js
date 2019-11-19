#!/usr/bin/env node

const program = require('commander')
const minimist = require('minimist')

program
  .version(`@vue/cli ${require('../package').version}`)
  .usage('<command> [options]')

function camelize (str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs (cmd) {
  const args = {}
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ''))
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key]
    }
  })
  return args
}

program
  .command('create <module-name>')
  .description('create a new module powered by beew-vue-cli')
  .action(async (name, cmd) => {
    // const options = cleanArgs(cmd)
    await require('../lib/create-module')(name)
  })

program
  .command('init <project-name>')
  .description('create a new project powered by beew-vue-cli')
  .action(async (name, cmd) => {
    // const options = cleanArgs(cmd)
    await require('../lib/init-project')(name)
  })

program.parse(process.argv);

// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`beew-vue-cli <command> --help`)} for detailed usage of given command.`)
  console.log()
})
