# lx-vue-preset
> 该预设模板为本人在工作中累计经验而研发出的前端架构，架构以后端思想驱动前端架构发展，整合代码逻辑，集控管理核心逻辑。便于代码的开发与维护。

> 框架模板已集成sass、less、iconfont.cn字体图片功能，做到开箱即用。详细的代码注解，可作为前端进阶学习的产物。

> 如有疑问欢迎小窗咨询，QQ：695524015

---

## 基础信息

#### 前端架构：林欣
#### 前端开发:
#### 项目原型:

---

## 仓库信息

#### 仓库首页:
  - [仓库首页](https://github.com/qc-web-y/lx-vue-preset)
#### 仓库GIT:
  - [HTTPS](https://github.com/qc-web-y/lx-vue-preset.git)
  - [SSH](git@github.com:qc-web-y/lx-vue-preset.git)

---

## API信息

#### API地址
  - mock：``https://mock.lx.test.hcyan.cn/mock/5ea03a75f439060016f1744c/template``
  - 开发：``http://www.api.cn/dev``
  - 测试：``http://www.api.cn/test``
  - 正式：``http://www.api.cn/prod``

#### API文档
  - [mock文档 - 无]()
  - [开发文档](http://www.dev.cn/doc)
  - [测试文档](http://www.test.cn/doc)
  - [正式文档](http://www.prod.cn/doc)

#### 返回数据规则
  - HTTP 状态 = 200  请求成功
    ```
    {
      /**
       * @param {Number} code 操作成功与否，1为成功，2为失败
       * @param {String} msg  操作提示信息
       * @param {Any}    data 返回前端的数据
       */
      code: 1,
      msg: "提交成功！",
      data: '数据'
    }
    ```
  - HTTP 状态 = 401  鉴权失败
  - HTTP 状态 = 404  请求接口不存在
  - HTTP 状态 = 500  服务器错误

---

## Command

  - 安装相关依赖            ``npm install``
  - 启动开发环境            ``npm run serve``
  - 构建打包至stg测试缓凝剂  ``npm run build:stg``
  - 构建打包至uat测试环境    ``npm run build:uat``
  - 构建打包至正式环境       ``npm run build:prod``
  - Eslint自动检测并修复    ``npm run lint``


## 技术栈
  - [vue](https://cn.vuejs.org/)
  - [vue-cli](https://cli.vuejs.org/)
  - [vue-router](https://router.vuejs.org/zh/)
  - [vuex](https://vuex.vuejs.org/zh/)
  - [axios](https://github.com/axios/axios)
  - [sass](https://www.sass.hk/)
  - [simple-layout-scss](https://gitee.com/qc-web-y/sls)

## 目录结构
|--★ build ------------------------------------ 构建打包配置
    └┄┄★ lx.cores.develop.js ------------------ 开发配置
    └┄┄★ lx.cores.release.js ------------------ 发版配置
|-- public ------------------------------------- 站点静态资源及Html模板
    └┄┄※ favicon.ico -------------------------- 站标
    └┄┄※ index.html --------------------------- Html模板
|-- src ---------------------------------------- 开发目录
    └┄┄※ assets ------------------------------- 静态资源
        └┄┄※ images --------------------------- 图片资源
        └┄┄※ iconfont ------------------------- 字体图标
        └┄┄※ styles --------------------------- 公共样式
        └┄┄※ scripts -------------------------- 公共JS
    └┄┄※ config ------------------------------- 开发配置
        └┄┄※ index.js ------------------------- 主配置文件
    └┄┄ controller ----------------------------- 数据控制
        └┄┄ store ------------------------------ VUEX配置
        └┄┄ mixins ----------------------------- VUE混合配置
        └┄┄ filters ---------------------------- VUE过滤配置
        └┄┄ plugin ----------------------------- 第三方或引入插件
    └┄┄ router --------------------------------- 页面路由
        └┄┄ routes ----------------------------- 路由模块，命名以“_”开头
        └┄┄※ index.js ------------------------- 路由主配置文件
        └┄┄★ lx.cores.router.js --------------- 路由封装
    └┄┄ service -------------------------------- 服务端通信
        └┄┄ apis ------------------------------- API模块，命名以“_”开头
        └┄┄※ index.js ------------------------- API主配置文件
        └┄┄★ lx.cores.http.js ----------------- axios封装
    └┄┄ utils ---------------------------------- 第三方或引入JS库
        └┄┄★ lx.utils.loading ----------------- 全屏loading
        └┄┄★ lx.utils.import.js --------------- 文件模块导入
        └┄┄★ lx.utils.storage.js -------------- 前端存储封装
        └┄┄※ lx.utils.tools.js ---------------- 小工具
    └┄┄※ App.vue ------------------------------ 入口视图
    └┄┄※ main.js ------------------------------ 入口逻辑
|--★ .eslintrc.js ----------------------------- eslint规范配置
|-- .gitignore --------------------------------- git提交过滤配置
|--※ babel.config.js -------------------------- babel配置
|-- package.json ------------------------------- npm包及命令配置
|--※ vue.config.js ---------------------------- VUE-Cli配置

- ★ 核心文件，建议由前端架构师进行修改
- ※ 公共文件，建议由专人维护，避免冲突





## 架构使用说明

#### API代理配置
- 文件路径：``./src/config/index.js``
- API地址配置：PROXY_URL
  ```
  exports.PROXY_URL = new Map([
    [ 'stg', 'https://www.stg.com' ],          // stg测试api地址
    [ 'uat', 'https://www.uat.com' ],          // uat测试api地址
    [ 'dev', 'https://www.dev.com' ],          // dev开发api地址
    [ 'mock', 'https://www.mock.com' ]         // mock模拟api地址
    [ 'zhangsan', 'https://www.zhangsan.com' ] // 张三本地api地址
    [ 'lisi', 'https://www.lisi.com' ]         // 李四本地api地址
    [ 'wanger', 'https://www.wanger.com' ]     // 王二本地api地址
    [ '...', '...' ]     // 这里可以添加更多的api联调地址
  ])
  ```
  优点：避免老旧的注释，让代码逻辑及阅读更加清晰明了，也让API代码更加方便快捷
  原理：最终会在 ``vue.config.js`` 的 ``devServer`` 中的 ``proxy`` 中生成对应的反向代理配置，如:
        ```
        [ 'stg', 'https://www.stg.com' ] 生成为 =>

        '^/stg': {
          target: value,
          ws: true,
          changOrigin: true,
          pathRewrite: {'^/stg': '/'}
        }
        ```

- API baseUrl 配置：BASE_URL
  ```
  // 根据环境配置全局默认使用的代理前缀
  exports.BASE_URL = (function (env) {
    switch (env) {
    case 'development': return 'dev'
    case 'stg': return 'stg'
    case 'uat': return 'uat'
    case 'production': return 'prod'
    }
  })(process.env.APP_NEV)
  ```
  优点：根据环境自动配置axios baseUrl，无需再根目录创建很多env环境变量文件，使目录结构清晰简明
  原理：根据process.env.APP_NEV环境变量，判断当前应用环境，使用指定的baseUrl

- API代理使用说明
  - 全局代理修改(支持热更新，无需重启项目)
    直接修改API baseUrl 配置：BASE_URL即可
    如你想把``'development'``环境的代理修改为 ``mock``，即``case 'development': return 'mock'``

  - 局部代理修改(支持热更新，无需重启项目)
    直接修改API文件中的地址前缀即可
    如你想把 ``_user.js``中的``login``代理到mock去请求，则只需将``url``修改为：``url: '{mock}/login'``即可

#### API调用方法
- API已经自动添加进VUE的原型方法
- 调用规则: this.$api.[去掉下划线的文件名].[声明的对象名](data).then(res => {})
- Example: ``@/service/apis/_user.js``` 中的 login 调用
           ```
           this.$api.user.login({
             username: 'admin',
             password: '123456'
           }).then(res => {
             console.log(res)
           })
           ```
- 注意事项: 文件模块需要以 ``_`` 开头，但是当调用的时候不需要 ``_``
- 声明API只需要在``apis``目录下，增加对应的业务模块，并导出对象即可，架构会自动进行导入并引入，方便快捷，无需手动导入

#### 路由声明方式
- 文件目录: ``@/router/routes``
- 声明路由只需要在 ``routes``目录下，增加对应的业务模块，并导出数组即可，架构会自动进行导入并引入，方便快捷，无需手动导入
-

#### loading使用方式
待更新

## 开源说明
> 该架构为本人前端工作5年累积的经验收获，欢迎大家使用并提出不同的意见，当然如果我的作品荣幸的被您看中，也希望在使用过程中可以保留作者信息，以对我辛苦付出的回馈！
