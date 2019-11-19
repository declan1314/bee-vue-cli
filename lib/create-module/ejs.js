const fs = require('fs-extra')
const ejs = require('ejs')
const path = require('path')
const globby = require('globby')

module.exports = async (name, present) => {
  const templateName = 'template/src/module'
  
  const targetDir = process.cwd()
  const _files = await globby(['**/*'], {
    cwd: path.join(__dirname, '../..', templateName),
    absolute: true,
  })

  for (const rawPath of _files) {
    const template = fs.readFileSync(rawPath, 'utf-8')
    const html = ejs.render(template, {bizName: name});
    const relativeRawPath = rawPath.slice(rawPath.indexOf(templateName) + templateName.length)
    fs.ensureFileSync(path.join(targetDir, `src/${name}`, relativeRawPath))
    fs.writeFileSync(path.join(targetDir, `src/${name}`, relativeRawPath), html)
  }
}
