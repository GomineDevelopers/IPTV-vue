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

// 用户生命周期标签搜索
// POST http://{{iptv}}/api/userLives
export function userLives(postData) {
    return request({
        method: 'post',
        url: '/userLives',
        data: postData
    })
}
// let temp = {
//     area: area,
//     operator: operator,
//     start: start,
//     end: end
// }

// 获取用户生命周期运营商
// GET http://{{iptv}}/api/userLives/operators

export function userLives_operators() {
    return request({
        method: 'get',
        url: '/userLives/operators',
    })
}

// 获取用户生命周期地区码
// GET http://{{iptv}}/api/userLives/areaCode
export function userLives_areaCode() {
    return request({
        method: 'get',
        url: '/userLives/areaCode',
    })
}

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

// //////////////////////// 大屏页面

// // 直播，点播，回看总体数据统计
// // get http://{{iptv}}/api/broadcast/total
// export function broadcast_total() {
//     return request({
//         method: 'get',
//         url: '/broadcast/total',
//     })
// }


// 专区节目周累计点播量
// get http://{{iptv}}/api/demands/week
export function demands_week() {
    return request({
        method: 'get',
        url: '/demands/week',
    })
}
// 专区节目获得用户
// get http://{{iptv}}/api/demands/special
export function demands_special() {
    return request({
        method: 'get',
        url: '/demands/special',
    })
}


// vip点播收视top
// get http://{{iptv}}/api/demands/VipProgramTop
export function demands_VipProgramTop() {
    return request({
        method: 'get',
        url: '/demands/VipProgramTop',
    })
}

// 点播收视TOP
// get http://{{iptv}}/api/demandProgramTop
export function demandProgramTop() {
    return request({
        method: 'get',
        url: '/demandProgramTop',
    })
}

// 增值业务订购数据
// get http://{{iptv}}/api/purchasePrd
export function purchasePrd() {
    return request({
        method: 'get',
        url: '/purchasePrd',
    })
}

// 点播总体数据统计
// get http://{{iptv}}/api/broadcast/demand
export function broadcast_demand() {
    return request({
        method: 'get',
        url: '/broadcast/demand',
    })
}

// 回播总体数据统计
// get http://{{iptv}}/api/broadcast/review
export function broadcast_review() {
    return request({
        method: 'get',
        url: '/broadcast/review',
    })
}

// 用户数据展示
// get http://{{iptv}}/api/users/basic
export function users_basic(date) {
    return request({
        method: 'get',
        url: '/users/basic',
        params: {
            date: date
        }
    })
}

// 直播总体数据统计
// get http://{{iptv}}/api/broadcast/onlive
export function broadcast_onlive(func) {
    return request({
        method: 'get',
        url: '/broadcast/onlive',
        params: {
            func: func
        }
    })
}




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


// //////////////////////// 用户

// 用户登录
// post http://{{iptv}}/api/login

export function login(postData) {
    return request({
        method: 'post',
        url: '/login',
        data: postData
    })
}

// let temp = {
//     email: email,
//     password: password,
//     captcha: captcha
// }

// 用户账号分发
// post http://{{iptv}}/api/register

export function register(postData) {
    return request({
        method: 'post',
        url: '/register',
        data: postData
    })
}


// let temp = {
//     email_address: email_address,
//     password: password,
//     confirmed_password: confirmed_password
// }