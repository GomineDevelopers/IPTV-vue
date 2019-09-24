import axios from 'axios'
import Vue from 'vue'


import utils from "./formutils"

// 创建axios实例
const service = axios.create({
    // baseURL: 'http://172.17.103.213:8080/api', // 线下测试
    // baseURL: 'http://10.5.1.13/api', // 线下测试
    baseURL: 'http://10.5.1.15/api', // 线下测试
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

export default service