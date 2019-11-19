const inquirer = require('./inquirer')
const ejs = require('./ejs')
const fs = require('fs-extra')

module.exports = (name) => {
  inquirer().then((present) => {
    ejs(name, present)
  })
}