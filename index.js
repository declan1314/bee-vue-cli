const inquirer = require('./inquirer')
const ejs = require('./ejs')
const fs = require('fs-extra')

inquirer().then((present) => {
  ejs(present)
})