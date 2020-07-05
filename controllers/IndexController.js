/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:47:52
 * @LastEditTime: 2020-07-05 18:39:05
 * @LastEditors: Lyun
 * @FilePath: /koa_project/controllers/IndexController.js
 * @Description: ...
 */
const controller = require('./controller')
const {books} = require('../models/index.js')
class IndexController extends controller {
    constructor() {
        super()
    }
    async actionIndex(ctx,next) {
        const data = await books.getList()
        ctx.body = await ctx.render('index',{
            data
        })
    }
}
module.exports = IndexController