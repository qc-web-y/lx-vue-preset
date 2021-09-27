module.exports = [
  {
    name: "projectType",
    type: "list",
    message: `请选择项目类型`,
    choices:[
      {name: '基础项目', value: 'standard'},
      {name: '移动端H5', value: 'h5'},
      {name: 'PC管理后台系统', value: 'admin'}
    ],
    default: 'standard'
  },
  {
    name: "cssPrecompile",
    type: "list",
    message: `选择使用的CSS预编译`,
    choices:[
      {name: 'css', value: 'css'},
      {name: 'sass', value: 'sass'},
      {name: 'less', value: 'less'}
    ],
    default: 'sass'
  },
]
