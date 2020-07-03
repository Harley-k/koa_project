/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:47:31
 * @LastEditTime: 2020-07-03 12:52:38
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\controllers\ApiController.js
 * @Description: ...
 */ 
const controller  = require('./controller')
class ApiController extends controller{
    constructor(){
        super()
    }
    async actionTejiaoyun(ctx,next){
        ctx.body = await ctx.render('tejiaoyun')
    }
    async actionScale(ctx,next){
        ctx.body = await ctx.render('scale')
    }
}
module.exports = ApiController
