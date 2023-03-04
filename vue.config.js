const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { config } = require('process')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // 修改项目的入口文件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项
        return options
      })
  }
})
