/*
 * @Author: Lyun
 * @Date: 2020-07-05 13:16:23
 * @LastEditTime: 2020-07-05 16:44:46
 * @LastEditors: Lyun
 * @FilePath: /koa_project/assets/utils/utils.js
 * @Description: 仿照 underscore 实现一个函数式编程工具库
 */

/*   首先看一下 demo=>
_.each([1, 2, 3], alert); _([1,2,3]).each(alert)
它既可以先传入,又可以在 each 那里传入,这里就要开始处理了
1. 首先看一下 underscore,首先第一步写了个大闭包,下面就要分析它是如何工作的
    1.1 _方法是它的关键性东西=>对外暴露的内容,因此要把_方法挂载到 root 上面
    1.2 把要实现的方法挂到_方法上面=>实现一个 map 方法
    1.3 这时候就有一个问题了,_方法执行完了,它上面也有 map方法;看下 underscore 是如何操作的
        - 在函数执行完了, 执行了一个 mixin 混入 allExports ,对外暴露;  
        - 这个 mixin 呢,这里的 mixin 就把上面的操作都完成了 并且还在在原型链和静态方法上挂载方法,因此可以协程 each 这样
    1.4 分析下这个 mixin
*/
//一. 写个大闭包
(function () {
    const root =
        // self.self = self 这里的 self 就是 window 上自带的一个关键字 相当于=>window 
        typeof self == 'object' && self.self === self && self ||
        // 同样的这里的 global 也和 self 一样=>
        //这里通过 selef 和 global 来判断环境 self 和 global 对应的是浏览器环境和 node 环境
        typeof global == 'object' && global.global === global && global ||
        // 如果啥都没有,自己 return 出去...
        Function('return this')() ||
        //或者为空对象
        {};
    // 借方法
    var ArrayProto = Array.prototype, ObjProto = Object.prototype;
    var push = ArrayProto.push
    // 自己实现一个 each
    function each(obj, callback, context) {
        if (Array.isArray(obj)) {
            for (let item of obj) {
                // 占位,修正 this
                callback && callback.call(_, item)
            }
        }
    }

    // 1.1 实现_方法,并且把它挂到 root 上面
    function _(obj) {
        // 如果传进来的 obj是由它自己创建的,直接把他丢出去
        if (obj instanceof _) return obj;
        // 如果不是由他自己创建的,强制的去 new 一下,这样可以保证它上面有对应的方法
        if (!(this instanceof _)) return new _(obj);
        // 用一个 wrapped 包裹了 obj=>相当于缓存了一下参数,再接着看 mixin
        this._wrapped = obj;
    }
    // 注意这里,map 只接收两个参数,由于在mixin 的时候执行了参数合并,因此要么在前面传递参数,要么在后面传递参数
    // 两边一起传就挂了,
    function map(obj,func) {
        if(typeof func !=='function'){
            throw new Error(func+' is not function')
        }else{
            for(let item of obj){
                func(item)
            }
        }
    }
    // 节流函数 两个参数,方法和时间
    function throttle(fn,wait=500){
        let timer = null;
        return function(...args){
            if(timer===null){
                timer = setTimeout(()=>{
                    timer = null
                },wait)
                return fn.apply(this,args)
            }

        }
    }


    // 所有对外暴露的东西
    const allExports = {
        map,
        throttle
    }
    // 得到所有的 key
    function functions(obj) {
        var names = [];
        for (var key in obj) {
            // 这里就是判断是不是 function 了=>如果是一个方法,就把 方法名 push 进去
            if(typeof obj[key] ==='function') names.push(key);
        }
        // 返回这里的得到的所有方法名
        return names.sort();
    }
    // mxin 混入=>这个 mixin 主要就是在原型链和静态方法上挂载要暴露的方法,因此
    function mixin(obj) {
        // 内部执行了一个循环 functions 取出所有 key
        each(functions(obj), function (name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function () {
                // 挂载原型的时候,方法是不接受参数的
                var args = [this._wrapped];
                // 这一步把第二个参数和第一个参数合并了
                push.apply(args, arguments);
                // 参数合并了,修正一下 this 把它吐出去
                // return chainResult(this, func.apply(_, args));
                return func.apply(_,args)
            };
        });
        return _;
    }


    // 把allExports全部混入
    mixin(allExports)
    // // 把_方法挂载到 root 上
    root._ = _;

})()
