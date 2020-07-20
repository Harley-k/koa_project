// 通过插件取到webpack运行时的model
const argv = require('yargs-parser')(process.argv.slice(2))
const _model = argv.model || 'development'

const _mergeConfig = require(`./config/webpack.${_model}.js`)

const { merge } = require("webpack-merge")


const {sync} = require('glob')
const files = sync('./src/web/views/**/*.entry.js')
const _entry = {

}
for(let item of files){
    if(/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js)/g.test(item)){
        console.log(RegExp.$1)
        const entryKey = RegExp.$1
        _entry[entryKey] = item
        const 
    }else{
        console.log('项目配置匹配失败!')
        // 匹配失败退出去,不然就挂了
        process.exit(-1)
    }
}

const webpackConfig = {
    
}

module.exports = merge(webpackConfig, _mergeConfig)