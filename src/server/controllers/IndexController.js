/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:47:52
 * @LastEditTime: 2020-07-05 19:05:38
 * @LastEditors: Lyun
 * @FilePath: /koa_project/controllers/IndexController.js
 * @Description: ...
 */
import controller from '@controllers/controller'
import { books } from '@models/index.js'
class IndexController extends controller {
    constructor() {
        super()
    }
    async actionIndex(ctx,next) {
        // const data = await books.getList()
        const data = [
            {
                book_code:'1',
                book_name:'1',
                book_desc:''
            }
        ]
        // console.log(data)
        ctx.body = await ctx.render('index',{
            data
        })
    }
}
export default IndexController