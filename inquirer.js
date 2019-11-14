const inquirer = require('inquirer')

const resolveFinalPrompts = () => {
  const prompts = [
    {
      name: 'bizName',
      type: 'input',
      message: 'Please input bussiness name?'
    }
  ]
  return prompts
}

module.exports = () => {
  return new Promise((resolve, reject) => {
    inquirer.prompt(resolveFinalPrompts()).then((present) => {
      resolve(present)
    }).catch((e) => {
      reject(e)
    })
  })
}