/*
 * @Author: Lyun
 * @Date: 2020-07-05 17:03:35
 * @LastEditTime: 2020-07-05 17:37:28
 * @LastEditors: Lyun
 * @FilePath: /koa_project/middlewares/errorHandler.js
 * @Description: ...
 */ 

 class errorHandler{
    static error(app,logger){
        // 500处理
        app.use(async (ctx,next)=>{
            try{
                await next()
            }catch(err){
                console.log(err)
                ctx.body='请求 500 了'
                // 使用 log4js 记一下日志
                logger.error(err)
            }
        })
// 404处理
        app.use(async (ctx,next)=>{
            await next()
            // console.log(ctx)
            if(404==ctx.status){
                ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>'
            }
        })
    }
 }

 export default errorHandler