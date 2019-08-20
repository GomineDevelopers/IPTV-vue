import request from '@/utils/request'
// import qs from 'qs'





// //////////////////////// 用户收视行为

// 用户收视行为标签搜索
// post http://{{iptv}}/api/userAction

export function userAction(postData) {
    return request({
        method: 'post',
        url: '/userAction',
        data: postData
    })
}

// let temp = {
//     area: area,
//     operator: operator,
//     method: method,
//     list: list,
//     start: start,
//     end: end
// }

// 获取用户收视行为栏目
// get http://{{iptv}}/api/userAction/programs/list

export function userAction_programs() {
    return request({
        method: 'get',
        url: '/userAction/programs/list',
    })
}

// 获取用户收视行为运营商
// get http://{{iptv}}/api/userAction/operator

export function userAction_operator() {
    return request({
        method: 'get',
        url: '/userAction/operator',
    })
}

// //////////////////////// 热点控制
// //////////////////////// 定期报告
// //////////////////////// 总体数据展示

// 获取贵州省地区码
// get http://{{iptv}}/api/areaCode

export function areaCode() {
    return request({
        method: 'get',
        url: '/areaCode',
    })
}

// 总体数据
// http://{{iptv}}/api/users/total

export function users_total(code) {
    return request({
        method: 'get',
        url: '/users/total',
        params: {
            code: code
        }
    })
}


// //////////////////////// 增值业务
// //////////////////////// 用户生命周期
// //////////////////////// 节目搜索

// 节目搜索
// post http://{{iptv}}/api/search
export function program_search(postData) {
    return request({
        method: 'post',
        url: '/search',
        data: postData
    })
}

// let temp = {
//     programName: programName,
//     UTC: UTC,
// }

// //////////////////////// vip
// //////////////////////// epg

// epg标签搜索
// post http://{{iptv}}/api/epg

export function epg(postData) {
    return request({
        method: 'post',
        url: '/epg',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     list: list,
//     start: start,
//     end: end
// }



// 获取epg栏目
// post http://{{iptv}}/api/epg/programs/list

export function epg_programs() {
    return request({
        method: 'get',
        url: '/epg/programs/list',
    })
}

// 获取epg运营商
// get http://{{iptv}}/api/epg/operators

export function epg_operators() {
    return request({
        method: 'get',
        url: '/epg/operators',
    })
}

// //////////////////////// epg标签搜索
// //////////////////////// 专区数据
// //////////////////////// 大屏页面

// 用户订购数据
// get http://{{iptv}}/api/users/subscribe

export function users_subscribe() {
    return request({
        method: 'get',
        url: '/users/subscribe',
    })
}

// 用户激活率
// get http://{{iptv}}/api/users/activationRate

export function users_activationRate(hours) {
    return request({
        method: 'get',
        url: '/users/activationRate',
        params: {
            hours: hours
        }
    })
}

// 用户留存率
// get http://{{iptv}}/api/users/retention

export function users_retention(date) {
    return request({
        method: 'get',
        url: '/users/retention',
        params: { date: date }
    })
}

