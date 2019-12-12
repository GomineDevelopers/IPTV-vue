import axios from 'axios'
import utils from "./formutils"

// 创建axios实例
const service = axios.create({
    // baseURL: 'http://10.5.1.13/api', // 线下测试 - 常用
    // baseURL: 'http://10.5.1.15/api', // 线下测试 - 临时

    baseURL: 'http://10.5.1.11/api', // 线下测试 - 临时

    // baseURL: 'http://172.17.103.213:8080/api', // 线上测试
    // baseURL: 'http://172.17.103.213:8087/api', // 线上测试 - 历史
    // baseURL: 'http://backend.gomineshop.cn/api', // demo
    // baseURL: 'http://localhost:8087/api', // 线上测试 - 历史
    // baseURL: 'http://172.17.103.185:9200/api', // 线上测试 - 历史
    
    // baseURL: 'http://172.17.103.185:8087/api', // 线上测试 - 当前▲▲

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

service.interceptors.request.use(config => {
    config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
    }
    return config;
}, error => {
    //发送请求错误操作
    return Promise.reject(error);
})

export default service


