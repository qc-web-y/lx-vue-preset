/**
 * 【Lx.Cores】develop 开发服务相关配置
 * @author linxin
 * @since 2021.09.28
 * @suggest 仅建议修改host及port，不建议修改反向代理部分
 */

const log = msg => console.log('\x1B[32m%s\x1B[39m', msg)

module.exports = function (env) {
  let server = {}

  if (env === 'development') {
    const {PROXY_URL} = require('../src/config')
    let proxy = {}
    let proxyList = []

    // 本地反向代理列表生成
    for (let [ key, value ] of PROXY_URL) {
      if (!value) return
      const pathRewrite = {}
      pathRewrite['^/' + key] = '/'
      proxy['^/' + key] = {
        target: value,
        ws: true,
        changOrigin: true,
        pathRewrite: pathRewrite
      }
    }

    // 反向代理列表打印
    proxyList = Object.keys(proxy).map(prefix => ({
      location: prefix,
      proxy_pass: proxy[prefix].target
    }))
    log('开发服务代理规则：')
    console.log(proxyList)

    server = {
      open: false,
      port: 9528,
      host: '0.0.0.0',
      https: false,
      hotOnly: true,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: proxy,
      disableHostCheck: true
    }
  }

  return server
}
