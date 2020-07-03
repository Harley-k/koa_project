/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:47:52
 * @LastEditTime: 2020-07-03 14:43:37
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\controllers\indexController.js
 * @Description: ...
 */
const controller = require('./controller')
class IndexController extends controller {
    constructor() {
        super()
    }
    async actionIndex(ctx,next) {
        ctx.body = await ctx.render('index')
    }
}
module.exports = IndexController