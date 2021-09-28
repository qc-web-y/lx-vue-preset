/**
 * vue.config.js
 * 配置参考地址：https://cli.vuejs.org/zh/config
 */
const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const {PROXY_URL, SASS_VAR} = require('./vue.app')

const resolve = dir => path.join(__dirname, dir)
const log = msg => console.log('\x1B[32m%s\x1B[39m', msg)
const appEnv = process.env.APP_NEV || process.env.NODE_ENV
const isDev = appEnv === 'development'
const outputDir = resolve('./release_dist')
let packageName
let webpackPlugins = []
let devServerProxy = {}
let devServerProxyList = []

log(`${isDev ? '运行服务环境' : '打包环境核对'}: ${appEnv}`)

if (isDev) {
  // 本地反向代理列表生成
  for (let [ key, value ] of PROXY_URL) {
    if (!value) return
    const pathRewrite = {}
    pathRewrite['^/' + key] = '/'
    devServerProxy['^/' + key] = {
      target: value,
      ws: true,
      changOrigin: true,
      pathRewrite: pathRewrite
    }
  }

  // 反向代理列表打印
  devServerProxyList = Object.keys(devServerProxy).map(prefix => ({
    location: prefix,
    proxy_pass: devServerProxy[prefix].target
  }))
  log('开发服务代理规则：')
  console.log(devServerProxyList)
} else {
  // 发版zip压缩包名生成
  packageName = (function (prefix) {
    const date = new Date()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const d = date.getDate().toString().padStart(2, '0')
    const h = date.getHours()
    const minutes = date.getMinutes()
    return `${prefix}-${appEnv}-${month}${d}${h}${minutes}`
  })('lx-standard')

  // 发版将dist压缩为zip
  const destination = resolve(`./release_zip/${packageName}.zip`)
  webpackPlugins.push(new FileManagerPlugin({
    events: {
      onEnd: {archive: [{source: outputDir, destination}]}
    }
  }))
}


module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir,
  productionSourceMap: false,
  devServer: {
    open: false,
    port: 9528,
    host: '0.0.0.0',
    https: false,
    hotOnly: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: devServerProxy,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: SASS_VAR
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@cores': resolve('./src/.lx.cores/'),
        '@app': resolve('./vue.app')
      },
      extensions: [ '.js', '.vue', '.json' ]
    }
  },
  chainWebpack (config) {
    // 写入VUE环境变量
    config.plugin('define').tap(args => {
      log('\r\n设置process.env环境变量...')
      args[0]['process.env'].VUE_PACK_VERSION = '"' + packageName + '"'
      args[0]['process.env'].VUE_APP_ENV = '"' + appEnv + '"'

      <% if (options.authenMode !== 'no') { %>
      args[0]['process.env'].VUE_AXIOS_AUTHEN = '"<%= options.authenField %>"'
      <% } %>

      return args
    })
  }
}