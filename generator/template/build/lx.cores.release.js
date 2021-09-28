/**
 * 【Lx.Cores】release 发版zip打包处理
 * @author linxin
 * @since 2021.09.28
 * @suggest 不建议修改
 */
const FileManagerPlugin = require('filemanager-webpack-plugin')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = function (env) {
  const outputDir = resolve('./release_dist')
  let packageName
  let webpackPlugins = []

  if (env !== 'development') {
    // 发版zip压缩包名生成
    packageName = (function (prefix) {
      const date = new Date()
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const d = date.getDate().toString().padStart(2, '0')
      const h = date.getHours()
      const minutes = date.getMinutes()
      return `${prefix}-${env}-${month}${d}${h}${minutes}`
    })('lx-standard')

    // 发版将dist压缩为zip
    const destination = resolve(`./release_zip/${packageName}.zip`)
    webpackPlugins.push(new FileManagerPlugin({
      events: {
        onEnd: {archive: [{source: outputDir, destination}]}
      }
    }))
  }

  return {
    outputDir,
    packageName,
    webpackPlugins
  }
}
