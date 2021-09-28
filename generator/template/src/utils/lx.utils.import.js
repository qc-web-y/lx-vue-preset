/**
 * 【Lx.Cores】Utils 文件模块批量快速导入
 * @author linxin
 * @since 2020.06.02
 * @suggest 不建议修改
 *
 * @param {Object} files 导入文件对象
 *
 * @param {String} mode 导入模式，默认'object'，可选值:
 *  └┄┄ 'object'  将模块名作为对象名，模块内容作为对象值，分离式成对导入
 *  └┄┄ 'array'   将所有模块导入为一个数组
 *  └┄┄ 'single'  将所有模块导入合并为一个对象
 *
 * @param {RegExp|String} reg 文件匹配正则，默认'underlineHead'
 *  ↪ 类型为 {RegExp} 自定义匹配正则
 *  ↪ 类型为 {String} 选择默认提供正则，可选值:
 *     └┄┄ 'underlineHead' 匹配文件名格式为'_XXX.js'
 *     └┄┄ 'letterHead'    匹配文件名格式为'XXX.js'
 */

const fileNameReg = {
  underlineHead: /(_|^\.\/|\.js$)/g,
  letterHead: /(^\.\/|\.js$)/g
}

function lxModuleIn (files, mode, reg) {
  if (!files) return
  mode = mode || 'object'
  reg = fileNameReg[reg] || reg || fileNameReg.underlineHead

  var modules = mode === 'array' ? [] : {}
  var objModules = {}

  files.keys().forEach(key => {
    var mk = key.replace(reg, '')
    var m = files(key)

    objModules[mk] = Object.keys(m).reduce((s, e) => {
      if (e !== 'default') s[e] = m[e]
      if (mode === 'array') modules = modules.concat(s)
      return s
    }, m.default || {})

    if (mode === 'single') modules = Object.assign({}, modules, objModules[mk])
  })

  if (mode === 'object') {
    modules = objModules
  } else {
    objModules = null
  }

  return modules
}

export default lxModuleIn
