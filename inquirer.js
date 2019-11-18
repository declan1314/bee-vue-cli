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

module.exports = async () => {
  return await inquirer.prompt(resolveFinalPrompts())
}
