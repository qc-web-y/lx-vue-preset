module.exports = (api, options, rootOptions) => {
  console.log(`你选择创建 ${options.projectType}`);

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      "axios": "^0.21.4",
    },
    devDependencies: {
      "filemanager-webpack-plugin": "^6.1.7",
    }
  });

  // 安装css预编译
  switch(options.cssPrecompile) {
    case 'sass': {
      api.extendPackage({
        devDependencies: {
          "sass": "^1.26.5",
          "sass-loader": "^8.0.2"
        }
      });
    }
    break;
    case 'less': {
      api.extendPackage({
        devDependencies: {
          "less": "^1.26.5",
          "less-loader": "^8.0.2"
        }
      });
    }
    break;
  }

  api.render(`./template/lx-${options.projectType}-vue`, options);

}
