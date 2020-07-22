/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:46:08
 * @LastEditTime: 2020-07-05 18:51:57
 * @LastEditors: Lyun
 * @FilePath: /koa_project/app.js
 * @Description: ...
 */
// alias

import { addAliases } from 'module-alias';
addAliases({
    '@views':__dirname +'/views',
    '@models':__dirname +'/models',
    '@controllers':__dirname +'/controllers',
    '@utils':__dirname +'/utils',
    '@middlewares':__dirname +'/middlewares'
  })
import Koa from 'koa';
import serve from 'koa-static';
import { port, memoryFlag, viewDir, staticDir } from './config/index.js';
import render from 'koa-swig';
import { wrap } from 'co';
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
import  errorHandler  from './middlewares/errorHandler.js';
import controllers from './controllers/index';
// log4
import { configure, getLogger } from 'log4js';




const app = new Koa()

// log4config
configure({
    appenders: { cheese: { type: "file", filename: "./log/errorLog.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = getLogger("cheese");






app.use(historyApiFallback({ index: '/', whiteList: ['/books/list', '/books/create'] }));
app.use(serve(staticDir))
app.context.render = wrap(render({
    root: viewDir,
    autoescape: true,
    cache: memoryFlag, // disable, set to false
    ext: 'html',
    writeBody: false,
    varControls: ["{{{", "}}}"] //改写渲染标识
}));

// static 之下
errorHandler.error(app,logger) //处理 error
// 路由之上  

controllers(app)

app.listen(port, () => {
    console.log('服务启动成功', port)
})
