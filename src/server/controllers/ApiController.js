/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:47:31
 * @LastEditTime: 2020-07-05 18:48:44
 * @LastEditors: Lyun
 * @FilePath: /koa_project/controllers/ApiController.js
 * @Description: ...
 */ 
import controller from '@controllers/controller'
class ApiController extends controller{
    constructor(){
        super()
    }
    async actionList(ctx,next){
        ctx.body = await ctx.render('books/pages/list')
    }
    async actionCreate(ctx,next){
        ctx.body = await ctx.render('books/pages/create')
    }
}
export default ApiController
