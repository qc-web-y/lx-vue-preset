/**
 * 【VUE APP】常用配置
 * @author linxin
 * @since 2021.09.23
 * @const {Map}   PROXY_URL 前端本地代理API代理地址
 * @const {Map}   BASE_URL  axios请求时基础前缀(前缀前的 “/” 为可选，最终会自动添加)，'stg' 配置预览：'http://localhost:8080/dev/xxxx'
 * @const {Array} SASS_VAR  全局sass变量
 * @method onHttpErrTips    获取HTTP请求发生错误提示信息及处理方式。code-HTTP请求状态码，error-HTTP请求错误实例
 */
exports.PROXY_URL = new Map([
  [ 'stg', 'https://www.baidu.com' ],
  [ 'uat', 'https://www.baidu.com' ],
  [ 'dev', 'https://www.baidu.com' ],
  [ 'mock', 'https://mock.lx.test.hcyan.cn/mock/5ea03a75f439060016f1744c/template' ]
])

exports.BASE_URL = (function (env) {
  switch (env) {
  case 'development': return 'dev'
  case 'stg': return 'stg'
  case 'uat': return 'uat'
  case 'production': return 'prod'
  }
})(process.env.APP_NEV)

<%_ if (options.cssPrecompile === 'sass') { _%>
exports.SASS_VAR = `
  @use "@/assets/styles/sls/variable/mixins.scss" as *;
  @use "@/assets/styles/sls/variable/setting.scss" as *;
`
<%_ } _%>

<%_ if (options.cssPrecompile === 'less') { _%>
exports.SASS_VAR = ''
<%_ } _%>

<%_ if (options.cssPrecompile === 'css') { _%>
exports.SASS_VAR = ''
<%_ } _%>

exports.onHttpErrTips = function (code, error) {
  code = code.toString()
  let msg

  switch (true) {
  case code === '401':
    msg = '抱歉，无访问权限，请先登录账号!'
    break
  case code >= 400 && code <= 410:
    msg = '资源请求出错，请稍后重试！'
    console.error(`前端问题_错误码: ${code}`)
    break
  case code >= 500 && code <= 510:
    msg = '服务器开小差了，请稍后重试！'
    console.error(`后端问题_错误码: ${code}`)
    break
  default:
    msg = '网络链接失败，请检查您网络或稍后重试！'
    console.error('接口请求错误:', error)
    break
  }

  // 消息提示处理函数，可根据实际场景修改
  alert(msg)
}
