const extendPackage = require('./main/extendPackage')
const renderTemplate = require('./main/renderTemplate')

module.exports = function (api, options, rootOptions) {
  console.log('\x1B[32m%s\x1B[39m', `正在为你创建 ${options.projectType} 项目`)
  extendPackage(api, options, rootOptions)
  renderTemplate(api, options, rootOptions)
}
