/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:57:04
 * @LastEditTime: 2020-07-03 11:21:09
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\config\index.js
 * @Description: ...
 */ 
const {extend} = require('lodash')
const {join} = require('path')
let config = {
    viewDir :join(__dirname,'..','views'),
    staticDir:join(__dirname,'..','assets')
}
if(process.env.NODE_ENV==='development'){
    config = extend(config,{
        port:8000,
        memoryFlag:false
    })
}
if(process.env.NODE_ENV==='production'){
    config = extend(config,{
        port:80,
        memoryFlag:'memory'
    })
}
module.exports = config