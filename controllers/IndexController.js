/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:47:52
 * @LastEditTime: 2020-07-05 17:40:34
 * @LastEditors: Lyun
 * @FilePath: /koa_project/controllers/IndexController.js
 * @Description: ...
 */
const controller = require('./controller')
class IndexController extends controller {
    constructor() {
        super()
    }
    async actionIndex(ctx,next) {
        ctx.body = await ctx.render('index',{
            data:'后台数据'
        })
    }
}
module.exports = IndexController