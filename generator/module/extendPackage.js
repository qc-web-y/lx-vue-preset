module.exports = function (api, options, /*rootOptions*/) {
  console.log('\x1B[32m%s\x1B[39m', `正在安装所需依赖包，请稍等...`)

  // package.json配置及依赖安装
  api.extendPackage({
    scripts: {
      'serve': 'vue-cli-service serve',
      'build:stg': 'cross-env APP_NEV=stg vue-cli-service build',
      'build:uat': 'cross-env APP_NEV=uat vue-cli-service build',
      'build:prod': 'vue-cli-service build',
      'lint': 'vue-cli-service lint'
    },
    dependencies: {
      'axios': '^0.21.4',
      'core-js': '^3.6.5',
      'vue': '^2.6.11',
      'vue-router': '^3.2.0',
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '^4.5.0',
      '@vue/cli-plugin-eslint': '^4.5.0',
      '@vue/cli-plugin-router': '^4.5.0',
      '@vue/cli-plugin-vuex': '^4.5.0',
      '@vue/cli-service': '^4.5.0',
      '@vue/eslint-config-prettier': '^6.0.0',
      'babel-eslint': '^10.1.0',
      'eslint': '^6.7.2',
      'eslint-plugin-prettier': '^3.3.1',
      'eslint-plugin-vue': '^6.2.2',
      'filemanager-webpack-plugin': '^6.1.7',
      'prettier': '^2.2.1',
      'vue-template-compiler': '^2.6.11'
    }
  })

  // 安装SASS预编译依赖
  if (options.cssPrecompile === 'sass') {
    api.extendPackage({
      devDependencies: {
        'sass': '^1.26.5',
        'sass-loader': '^8.0.2'
      }
    })
  }

  // 安装LESS预编译依赖
  if (options.cssPrecompile === 'less') {
    // api.extendPackage({
    //   devDependencies: {
    //     "sass": "^1.26.5",
    //     "sass-loader": "^8.0.2"
    //   }
    // })
  }

  // 安装VUEX依赖
  if (options.vuex) {
    api.extendPackage({
      dependencies: {
        'vuex': '^3.4.0'
      }
    })
  }
}
