/*
 * @Author: Lyun
 * @Date: 2020-07-03 08:58:37
 * @LastEditTime: 2020-07-05 18:53:22
 * @LastEditors: Lyun
 * @FilePath: /koa_project/models/index.js
 * @Description: ...
 */ 
import service from '@utils/request.js'
// console.log(service)
export const books = {
  getList() {
    return service({
      url: '/book/',
    })
  }
}
