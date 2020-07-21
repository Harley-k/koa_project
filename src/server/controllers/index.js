/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:53:08
 * @LastEditTime: 2020-07-05 18:48:07
 * @LastEditors: Lyun
 * @FilePath: /koa_project/controllers/index.js
 * @Description: ...
 */
import router from 'koa-simple-router';
import ApiController from '@controllers/ApiController';
import IndexController from '@controllers/IndexController';
const apiController = new ApiController();
const indexController = new IndexController();

export default (app) => {
    app.use(
        router((_) => {
            _.get('/', indexController.actionIndex)
            _.get('/books/list', apiController.actionList)
            _.get('/books/create', apiController.actionCreate)
        })
    )
}
//  (ctx, next) => {
//     ctx.body = 'hello'
// }