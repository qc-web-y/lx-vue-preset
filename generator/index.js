const fs = require('fs')
const path = require('path')

function createApiRenderObject (options) {
  let result = {}

  const init = function (src, dst) {
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

module.exports = function (api, options, rootOptions) {
  console.log('\x1B[32m%s\x1B[39m', `正在为你创建 ${options.projectType} 项目`)

  // package.json配置及依赖安装
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build:stg": "cross-env APP_NEV=stg vue-cli-service build",
      "build:uat": "cross-env APP_NEV=uat vue-cli-service build",
      "build:prod": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    dependencies: {
      "axios": "^0.21.4",
      "core-js": "^3.6.5",
      "vue": "^2.6.11",
      "vue-router": "^3.2.0",
      "vuex": "^3.4.0"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.5.0",
      "@vue/cli-plugin-eslint": "^4.5.0",
      "@vue/cli-plugin-router": "^4.5.0",
      "@vue/cli-plugin-vuex": "^4.5.0",
      "@vue/cli-service": "^4.5.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.1.0",
      "eslint": "^6.7.2",
      "eslint-plugin-prettier": "^3.3.1",
      "eslint-plugin-vue": "^6.2.2",
      "filemanager-webpack-plugin": "^6.1.7",
      "prettier": "^2.2.1",
      "vue-template-compiler": "^2.6.11"
    }
  })

  // 安装CSS预编译依赖
  switch (options.cssPrecompile) {
    case 'sass': {
      api.extendPackage({
        devDependencies: {
          "sass": "^1.26.5",
          "sass-loader": "^8.0.2"
        }
      })
      api.injectImports(api.entryFile, `import './assets/styles/sls/index.scss'`)
    }
    break
    case 'less': {
      api.extendPackage({
        devDependencies: {
          "less": "^1.26.5",
          "less-loader": "^8.0.2"
        }
      })
    }
    break
  }

  // 渲染模板
  api.render('./template', options)

  // 拷贝sass相关文件
  if (options.cssPrecompile === 'sass') {
    const sassFiles = createApiRenderObject({
      src: './additional/library/sls',
      dst: './src/assets/styles/sls'
    })
    api.render(sassFiles, options)
  }

  // 拷贝standard相关文件
  if (options.projectType === 'standard') {
    const standardFiles = createApiRenderObject({
      src: './additional/standard',
      dst: './src'
    })
    api.render(standardFiles, options)
  }
}
