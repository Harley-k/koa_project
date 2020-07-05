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