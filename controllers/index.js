/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:53:08
 * @LastEditTime: 2020-07-05 18:48:07
 * @LastEditors: Lyun
 * @FilePath: /koa_project/controllers/index.js
 * @Description: ...
 */
const router = require('koa-simple-router');
const ApiController = require('@controllers/ApiController');
const IndexController = require('@controllers/IndexController');
const apiController = new ApiController();
const indexController = new IndexController();

module.exports = (app) => {
    app.use(
        router((_) => {
            _.get('/', indexController.actionIndex)
            _.get('/scale', apiController.actionScale)
            _.get('/tejiaoyun', apiController.actionTejiaoyun)
        })
    )
}
//  (ctx, next) => {
//     ctx.body = 'hello'
// }