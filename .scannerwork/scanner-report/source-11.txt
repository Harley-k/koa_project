/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:47:31
 * @LastEditTime: 2020-07-05 18:48:44
 * @LastEditors: Lyun
 * @FilePath: /koa_project/controllers/ApiController.js
 * @Description: ...
 */ 
const controller  = require('@controllers/controller')
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
