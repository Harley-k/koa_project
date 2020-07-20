/*
 * @Author: Lyun
 * @Date: 2020-07-19 18:44:10
 * @LastEditTime: 2020-07-20 15:07:40
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\config\webpack.development.js
 * @Description: ...
 */ 
const {join} = require('path')

module.exports = {
    output: {
        path: join(__dirname, './dist/assets'),
        filename: 'scripts/[name].bundle.js',
        publicPath: '/'
    },
}