module.exports = [
  {
    name: 'projectType',
    type: 'list',
    message: '请选择项目类型',
    choices: [
      {name: '基础项目', value: 'standard'},
      {name: '移动端H5', value: 'h5'},
      {name: 'PC管理后台系统', value: 'admin'}
    ],
    default: 'standard'
  },
  {
    name: 'vuex',
    type: 'confirm',
    message: '是否需要使用vuex',
    default: true,
    when: input => input !== 'admin'
  },
  {
    name: 'cssPrecompile',
    type: 'list',
    message: '选择使用的CSS预编译方式',
    choices: [
      {name: 'sass', value: 'sass'},
      {name: 'less', value: 'less'},
      {name: '不需要', value: 'css'},
    ],
    default: 'css'
  },
  {
    name: 'authenMode',
    type: 'list',
    message: '请选择页面鉴权方式',
    choices: [
      {name: '请求头', value: 'headers'},
      {name: '请求传参', value: 'params'},
      {name: '不需要', value: 'no'}
    ],
    default: 'header'
  },
  {
    name: 'authenField',
    type: 'input',
    message: '请输入页面鉴权字段',
    default: 'token',
    when: input => input !== 'no'
  }
]
