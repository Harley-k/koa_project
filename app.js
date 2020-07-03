/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:46:08
 * @LastEditTime: 2020-07-03 11:22:30
 * @LastEditors: Do not edit
 * @FilePath: \koa_project\app.js
 * @Description: ...
 */
const Koa = require('koa')
const serve = require('koa-static');
const { port, memoryFlag, viewDir,staticDir } = require('./config/index.js')

var render = require('koa-swig');
const co = require('co')
const app = new Koa()
require('./controllers/index.js')(app)
app.use(serve(staticDir))
app.context.render = co.wrap(render({
    root: viewDir,
    autoescape: true,
    cache: memoryFlag, // disable, set to false
    ext: 'html',
    writeBody: false
}));
app.listen(port, () => {
    console.log('服务启动成功', port)
})
