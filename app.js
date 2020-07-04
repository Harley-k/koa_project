/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:46:08
 * @LastEditTime: 2020-07-04 18:59:52
 * @LastEditors: Lyun
 * @FilePath: /koa_project/app.js
 * @Description: ...
 */
const Koa = require('koa')
const serve = require('koa-static');
const { port, memoryFlag, viewDir,staticDir } = require('./config/index.js')
var render = require('koa-swig');
const co = require('co')
const { historyApiFallback } = require('koa2-connect-history-api-fallback');


const app = new Koa()


app.use(historyApiFallback({index:'/', whiteList: ['/tejiaoyun','/scale'] }));
require('./controllers/index.js')(app)
app.use(serve(staticDir))
app.context.render = co.wrap(render({
    root: viewDir,
    autoescape: true,
    cache: memoryFlag, // disable, set to false
    ext: 'html',
    writeBody: false,
    varControls:["{{{","}}}"] //改写渲染标识
}));
app.listen(port, () => {
    console.log('服务启动成功', port)
})
