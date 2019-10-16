import axios from 'axios'
import Vue from 'vue'


import utils from "./formutils"

// 创建axios实例
const service = axios.create({
    // baseURL: 'http://172.17.103.213:8080/api', // 线下测试
    baseURL: 'http://10.5.1.13/api', // 线下测试
    // baseURL: 'http://10.5.1.15/api', // 线下测试
    // baseURL: 'http://172.17.103.213:8087/api', // 线上测试
    timeout: 15000 // 请求超时时间
})

const customTransformData = (data, headers) => {
    if (utils.isFormData(data) ||
        utils.isArrayBuffer(data) ||
        utils.isBuffer(data) ||
        utils.isStream(data) ||
        utils.isFile(data) ||
        utils.isBlob(data) ||
        utils.isArrayBufferView(data) ||
        utils.isURLSearchParams(data)
    ) {
        return data
    }
    if (utils.isObject(data)) {
        for (var pkey in data) {
            if (data[pkey] === null || typeof (data[pkey]) === 'undefined') {
                delete data[pkey]
            }
        }
        data = utils.params(data)
        return data
    }
    return data
}

// 加入到数据最前面
service.defaults.transformRequest.unshift(customTransformData)

function ShowResponseInfo(code, info) {
    let str = String(code) + ': ' + info
    // console.log(str)
}

// request拦截器 - 测试用

// response拦截器 - 测试用

// params: {
//     start: data.start,
//         end: data.end,
//             operator: data.operator
// }

// let data = {
//     operator: String(["移动", "联通", "电信"]),
//     start: "2019-07-06",
//     end: "2019-07-06"
// };

// let temp = {
//     operator: String(["联通", "移动"]),
//     start: "2019-07-03",
//     end: "2019-07-03"
// };
// var formData = new FormData();
// var formData = new window.FormData();
// formData.append("operator", temp.operator);
// formData.append("start", temp.start);
// formData.append("end", temp.end);


// formData

//axios拦截器
// import axios from 'axios';
// import qs from 'qs';
// import iView from 'iview';
// import Cookies from 'js-cookie';
// import util from './util';
// service.defaults.timeout = 2000000;

// 自动根据浏览器系统语言设置语言
// const navLang = navigator.language
// const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
// let lang = window.localStorage.lang || localLang || 'zh-CN';
// let local = Cookies.get('local') || lang || 'zh-CN';

service.interceptors.request.use(config => {
    // config.headers['Authorization'] = Cookies.get('token'); //传入token
    // config.headers['language'] = local; //传入语言参数

    //增加几口时间戳
    config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
    }
    // console.log("~~~~~!!!");
    // console.log(config);


    return config;
}, error => {
    //发送请求错误操作
    // iView.Message.error('error：' + error.message);
    return Promise.reject(error);
})
// service.defaults.baseURL = util.rootPath
// service.interceptors.response.use(response => {
//     //对响应数据做操作
//     if (response.headers['content-type'].indexOf('application/json') > -1) {
//         if (parseInt(response.data.meta.status, 10) == 0) {
//             return response
//         } else if (parseInt(response.data.meta.status, 10) == 1) {
//             // iView.Message.error(response.data.meta.message);
//             return response;
//         } else if (response.data.meta.status == 9) {
//             // iView.Message.error('登录已过期请重新登陆');
//             // Cookies.remove('token');
//             // Cookies.remove('userName');
//             // Cookies.remove('userId');
//             // window.location.href = '#/login';
//         } else {
//             // iView.Message.error(response.data.meta.message);
//             return response;
//         }
//     } else {
//         return response
//     }



// }, error => {
//     // iView.Message.error('error:' + error.message);
//     return Promise.reject(error);
// })


export default service


