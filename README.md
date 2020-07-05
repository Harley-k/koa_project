### Koa2 + koa-simple-router + swig  

        .
        ├── README.md
        ├── REANME.md
        ├── app.js
        ├── assets
        ├── config
        ├── controllers
        ├── models
        ├── node_modules
        ├── package-lock.json
        ├── package.json
        └── views


没有啥后端思想,所以借用了 yii2 的项目结构,实现了一个基于 koa2 的后台;  

模板使用的是 koa-swig;  

system.js 使用 module 浏览器不认识的情况下多次加载问题,可以看下<a href="https://gist.github.com/Harley-K/72a8646ae4354378d97cf63dab4ce9d4">GitHub</a>

## 实现一个简易的 underscore 
在 utils 文件夹

## 容错处理
 middlewares 中间件夹

 首先得了解 koa 的中间件执行顺序 =>
 洋葱模型,先把 next 前面的跑完,再从后往前执行 next 后面的

 ### log4js记录日志

 ## 使用 axios 发请求拿数据