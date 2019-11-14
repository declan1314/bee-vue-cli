const fs = require('fs-extra')
const ejs = require('ejs')
const path = require('path')
const globby = require('globby')

module.exports = async (present) => {
  
  const _files = await globby(['**/*'], { cwd: './template' })

  const files = {}
  for (const rawPath of _files) {
    const template = fs.readFileSync(path.resolve(`template/${rawPath}`), 'utf-8')
    const html = ejs.render(template, present);
    fs.ensureDirSync(path.dirname(`src/${present.bizName}/${rawPath}`))
    fs.writeFileSync(path.resolve(`src/${present.bizName}/${rawPath}`), html)
  }
}
