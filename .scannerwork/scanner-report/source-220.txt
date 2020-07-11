/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:46:08
 * @LastEditTime: 2020-07-05 18:51:57
 * @LastEditors: Lyun
 * @FilePath: /koa_project/app.js
 * @Description: ...
 */
// alias
const moduleAlias = require('module-alias')
moduleAlias.addAliases({
    '@views':__dirname +'/views',
    '@models':__dirname +'/models',
    '@controllers':__dirname +'/controllers',
    '@utils':__dirname +'/utils',
    '@middle':__dirname +'/middlewares'
  })

const Koa = require('koa')
const serve = require('koa-static');
const { port, memoryFlag, viewDir, staticDir } = require('./config/index.js')
var render = require('koa-swig');
const co = require('co')
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const errorHandler = require('@middle/errorHandler')
// log4
const log4js = require('log4js')




const app = new Koa()

// log4config
log4js.configure({
    appenders: { cheese: { type: "file", filename: "./log/errorLog.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");






app.use(historyApiFallback({ index: '/', whiteList: ['/tejiaoyun', '/scale'] }));
app.use(serve(staticDir))
app.context.render = co.wrap(render({
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

require('@controllers/index.js')(app)

app.listen(port, () => {
    console.log('服务启动成功', port)
})
