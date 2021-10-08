const fs = require('fs')
const path = require('path')

function createApiRenderObject (options) {
  let result = {}

  function init (src, dst) {
    const srcFilesPath = path.resolve(__dirname, src)
    const files = fs.readdirSync(srcFilesPath)

    files.forEach(file => {
      const srcFilePath = path.resolve(__dirname, src, file)
      const srcPath = src + '/' + file
      const dstPath = dst + '/' + file
      const isFile = fs.statSync(srcFilePath).isFile()
      if (isFile) {
        result[dstPath] = srcPath
      } else {
        init(srcPath, dstPath)
      }
    })
  }

  init(options.src, options.dst)

  return result
}

module.exports = function (api, options, /*rootOptions*/) {
  console.log('\x1B[32m%s\x1B[39m', `正在渲染模板文件，请稍等...`)

  // 渲染主模板
  api.render('../template/main', options)

  // 渲染sass相关模板
  if (options.cssPrecompile === 'sass') {
    api.injectImports(api.entryFile, `import './assets/styles/sls/index.scss'`)
    const sassFiles = createApiRenderObject({
      src: '../template/library/sls',
      dst: './src/assets/styles/sls'
    })
    api.render(sassFiles, options)
  }

  // 渲染vuex相关模板
  if (options.vuex) {
    api.injectImports(api.entryFile, `import store from './controller/store'`)
    const vuexFiles = createApiRenderObject({
      src: '../template/library/store',
      dst: './src/controller/store'
    })
    api.render(vuexFiles, options)
  }

  // 渲染standard相关模板
  if (options.projectType === 'standard') {
    const standardFiles = createApiRenderObject({
      src: '../template/custom/standard',
      dst: './src'
    })
    api.render(standardFiles, options)
  }

  // 渲染h5相关模板
  if (options.projectType === 'h5') {
    const standardFiles = createApiRenderObject({
      src: '../template/custom/h5',
      dst: './src'
    })
    api.render(standardFiles, options)
  }

  // 渲染admin相关模板
  if (options.projectType === 'admin') {
    const standardFiles = createApiRenderObject({
      src: '../template/custom/admin',
      dst: './src'
    })
    api.render(standardFiles, options)
  }
}
