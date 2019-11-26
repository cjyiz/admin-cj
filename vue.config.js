const path = require('path')
const defaultSettings = require('./src/settings.js')
function resolve (dir) {
  return path.join(__dirname, dir)
}
// 配置默认标题名
const name = defaultSettings.title || 'cjyiz'
const port = process.env.port || process.env.npm_config_port || 9528
module.exports = {
  // 配置发布到线上资源的URL前缀
  publicPath: '/',
  // 输出文件存放在本地的目录，这个应该可以不用配置
  outputDir: 'dist',
  // 资源文件目录，cli3默认的就是这个路径
  assetsDir: 'static',
  // 是否在保存时使用eslint-loader检查，值为布尔值。这里的意思是在开发环境下会检查
  lintOnSave: process.env.NODE_ENV === 'development',
  // 生产环境是否生成sourceMap文件
  productionSourceMap: false,
  // 部署服务
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // 将API请求映射到API服务器上
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: `http://127.0.0.1:${port}/mock`,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // },
    // 提供在服务器内部所在的其他中间件之后执行自定义中间件的功能
    // after: require('./mock/mock-server.js')
  },

  // 如果是一个对象，则会合并到最终配置中。如果是一个函数，则会被接收解析作为参数，
  configureWebpack: {
    // 将应用名提供给webpack的name字段
    name: name,
    resolve: {
      // 配置路径别名
      alias: {
        '@': resolve('src')
      }
    }
  },
  // 接收一个基于webpack-chain的实例，允许对webpack配置修改
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
      })
      .end()

    // config
    // .when(process.env.NODE_ENV!=='development',
    // config=>{
    //   config.plugin('Script')
    // })
  }

}
