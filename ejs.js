const fs = require('fs-extra')
const ejs = require('ejs')
const path = require('path')
const globby = require('globby')

module.exports = async (present) => {
  // const targetDir = path.resolve(process.cwd(), projectName || '.')
  const targetDir = process.cwd()
  const _files = await globby(['**/*'], {
    cwd: './template',
    onlyFiles: true,
    gitignore: true,
    ignore: ['**/node_modules/**', '**/.git/**'],
    dot: true
  }) //{ cwd: path.resolve('template') }
  
  // const files = []
  // _files.forEach((_file) => {
  //   files.push(_file.slice(9))
  // })

  console.log(path.resolve('template'))
  console.log(targetDir)
  console.log(path.join(targetDir, `src/${present.bizName}`))
  console.log(_files)
  // for (const rawPath of files) {
  //   const template = fs.readFileSync(path.resolve(`./template/${rawPath}`), 'utf-8')
  //   const html = ejs.render(template, present);
  //   fs.ensureDirSync(path.join(targetDir, `src/${present.bizName}/${rawPath}`))
  //   fs.writeFileSync(path.join(targetDir, `src/${present.bizName}/${rawPath}`), html)
  // }
}
