const pluginName = 'HtmlAfterPlugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetsHelp = (data)=>{
    let js = []
    const getAssetsName={
        js:item=>`<script scr="${item}"></script>`
    }
    for(let jsitem of data.js){
        js.push(getAssetsName.js(jsitem))
    }
    return {js}
}

class HtmlAfterPlugin {
    constructor(){
        this.jsArr = [];
    }
    apply(compiler) {
        // compiler是webpack的运行核心,负责编译webpack的一个流程
        compiler.hooks.compilation.tap(pluginName, compilation => {
            // 每一个chunk在生成的时候都有一个compilation
            // console.log("webpack 构建过程开始！");
            // 在资源生成好之后拿到资源
            HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(pluginName,(data,cb)=>{
                const {js} = assetsHelp(data.assets)
                // console.log(js)
                // 取到js值之后,要把它保存了
                this.jsArr = js
                cb(null,data)
            })
            // beforeEmit 文件生成好提交之前做处理
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName, // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    let _html = data.html;
                    _html = _html.replace('<!-- injectjs -->', this.jsArr.join(''))
                    data.html = _html
                    cb(null, data)
                }
            )
        });
    }
}

module.exports = HtmlAfterPlugin