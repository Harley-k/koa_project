1. 通过gulp把node项目编译  


### 为什么使用gulp不使用webpack编译nodejs?
1. gulp简单
2. 清洗的时候灵活  
3. webpack前端包工具慢;


    "prestarts":"echo 111111111", pre是前置钩子
    "starts":"echo 1",
    "starts_1":"echo 2",
    "start":"npm run starts & npm run starts_1" 
    & 和&& 串行和并行


### npm插件 
1. npm-run-all  (多命令执行)
2. scripty (shell)
3. webpack-merge (合并config)

### npm_package_config_port
config配置



### mpa的多页应用 webpack
1. nodejs + 后台模板 +html
2. pages/books/list.html <= 继承自layout.html
3. 去找页面需要哪些组件? banner组件 

        {% include "../../../components/banner/banner.html" %}

4. 关键的一步 banner.js + banner.css 要带到page里面去  

5. chunk.js相互依赖 

    books/list => list.html => banner.html => banner.css+banner.js  

    list.html => list.entry.js + banner.js => list.js