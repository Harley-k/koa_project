/*
 * @Author: Lyun
 * @Date: 2020-07-19 21:30:54
 * @LastEditTime: 2020-07-20 15:22:59
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\webpack.config.js
 * @Description: ...
 */
// 通过插件取到webpack运行时的model
const argv = require('yargs-parser')(process.argv.slice(2))
const _model = argv.model || 'development'

const _mergeConfig = require(`./config/webpack.${_model}.js`)

const { merge } = require("webpack-merge")

const { sync } = require('glob')
const files = sync('./src/web/views/**/*.entry.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 入口文件
const _entry = {}
let _plugins = []

for (let item of files) {
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js)/g.test(item)) {
        // 取到值匹配到的文件塞到入口文件里面
        const entryKey = RegExp.$1
        _entry[entryKey] = item
        const [dist, template] = entryKey.split('-')
        console.log('------------------',[dist, template])
        _plugins.push(
            new HtmlWebpackPlugin({
                filename: `../views/${dist}/pages/${template}.html`,
                // Load a custom template (lodash by default)
                template: `src/web/views/${dist}/pages/${template}.html`,
                chunks:['runtime',entryKey],
                inject:false
            })
        )

    } else {
        console.log('项目配置匹配失败!')
        // 匹配失败退出去,不然就挂了
        process.exit(-1)
    }
}
const webpackConfig = {

    entry:_entry,
    optimization:{
        runtimeChunk:{ 
            name:'runtime'
        }
     },
    plugins:[..._plugins]
}

module.exports = merge(webpackConfig, _mergeConfig)