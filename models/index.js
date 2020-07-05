/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:58:37
 * @LastEditTime: 2020-07-05 18:53:22
 * @LastEditors: Lyun
 * @FilePath: /koa_project/models/index.js
 * @Description: ...
 */ 
const service = require('@utils/request.js')
// console.log(service)
module.exports = {
    books:{
        getList() {
            return service({
              url: '/book/',
            })
          }
    }
}
