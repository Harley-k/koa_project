/*
 * @Author: Lyun
 * @Date: 2020-07-19 21:30:54
 * @LastEditTime: 2020-07-20 16:56:22
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\webpack.config.js
 * @Description: ...
 */

 const {resolve}  = require('path')
// 通过插件取到webpack运行时的model
const argv = require('yargs-parser')(process.argv.slice(2))
const _model = argv.model || 'development'

// 取到config里面的配置
const _mergeConfig = require(`./config/webpack.${_model}.js`)

const { merge } = require("webpack-merge")
const { sync } = require('glob')
// 找到entry文件
const files = sync('./src/web/views/**/*.entry.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 入口文件
const _entry = {}
let _plugins = []

// 引用自己写的插件
const HtmlAfterPlugin = require('./config/HtmlAfterPlugin')
// htmlWebpackPlugin运行的时候暴露出来一些钩子,当它运行的时候,可以直接引用暴露出来的钩子,此时可以自己处理一些事物

for (let item of files) {
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js)/g.test(item)) {
        // 取到值匹配到的文件塞到入口文件里面
        const entryKey = RegExp.$1
        _entry[entryKey] = item
        const [dist, template] = entryKey.split('-')
        _plugins.push(
            new HtmlWebpackPlugin({
                filename: `../views/${dist}/pages/${template}.html`,
                // Load a custom template (lodash by default)
                template: `src/web/views/${dist}/pages/${template}.html`,
                chunks: ['runtime', entryKey],
                inject: false
            })
        )

    } else {
        console.log('项目配置匹配失败!')
        // 匹配失败退出去,不然就挂了
        process.exit(-1)
    }
}
const webpackConfig = {

    entry: _entry,
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        }
    },
    plugins: [..._plugins,new HtmlAfterPlugin(),

    ],
    resolve:{
        alias:{
            "@":resolve('src/web')
        }
    }
}

module.exports = merge(webpackConfig, _mergeConfig)