/**
 * vue.config.js
 * 配置参考地址：https://cli.vuejs.org/zh/config
 */
const appEnv = process.env.APP_NEV || process.env.NODE_ENV
const log = msg => console.log('\x1B[32m%s\x1B[39m', msg)
const develop = require('./build/lx.cores.develop')(appEnv)
const {outputDir, packageName, webpackPlugins} = require('./build/lx.cores.release')(appEnv)

log(`${appEnv === 'development' ? '运行服务环境' : '打包环境核对'}: ${appEnv}`)


module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir,
  productionSourceMap: false,
  devServer: develop,
  <%_ if (options.cssPrecompile === 'sass') { _%>
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @use "@/assets/styles/sls/variable/mixins.scss" as *;
          @use "@/assets/styles/sls/variable/setting.scss" as *;
        `
      }
    }
  },
  <%_ } _%>
  chainWebpack (config) {
    // 写入VUE环境变量
    config.plugin('define').tap(args => {
      log('\r\n设置process.env环境变量...')
      log(`\r\nprocess.env.VUE_PACK_VERSION: ${packageName}`)
      log(`\r\nprocess.env.VUE_APP_ENV: ${appEnv}`)
      args[0]['process.env'].VUE_PACK_VERSION = '"' + packageName + '"'
      args[0]['process.env'].VUE_APP_ENV = '"' + appEnv + '"'

      <%_ if (options.authenMode !== 'no') { _%>
      log(`\r\nprocess.env.VUE_AXIOS_AUTHEN: <%= options.authenField %>`)
      args[0]['process.env'].VUE_AXIOS_AUTHEN = '"<%= options.authenField %>"'
      <%_ } _%>

      return args
    })
  },
  configureWebpack: {
    plugins: [...webpackPlugins]
  }
}
