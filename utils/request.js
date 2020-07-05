/*
 * @Author: Lyun
 * @Date: 2020-07-05 17:56:46
 * @LastEditTime: 2020-07-05 18:53:29
 * @LastEditors: Lyun
 * @FilePath: /koa_project/utils/request.js
 * @Description: ...
 */
const axios = require('axios')

// create an axios instance
const service = axios.create({
    baseURL: 'http://localhost/Yii/web/', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        config.headers['Accept'] = 'application/json'

        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response
        // console.log(res.status)
        // // if the custom code is not 20000, it is judged as an error.
        if (res.status !== 200) {
            // 不等于 200 处理
            console.log(res.message)
            return res.data.message
            // return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res.data
        }
    },
    error => {
        console.log('err' + error) // for debug
        // return Promise.reject(error)
    }
)

module.exports= service