import request from '@/utils/request'
import qs from 'qs'


export function test_login() {
    return request({
        method: 'post',
        url: 'https://icampaign.com.cn/customers/ndrc/index.php/api/user/login',
    })
}

// let temp = {
//     area: "all",
//     operator: "all",
//     method: 0,
//     list: "all",
//     start: "2019-07-12",
//     end: "2019-07-31",
//     increment: "少儿"
// };

// var formData = new FormData();
// var formData = new window.FormData();
// formData.append("area", temp.area);
// formData.append("operator", temp.operator);
// formData.append("method", temp.method);
// formData.append("list", temp.list);
// formData.append("start", temp.start);
// formData.append("end", temp.end);


// let temp = {
//     area: "all", // 地区码，all和贵州省地级市代码
//     operator: "all", // 运营商列表：根据用户收视行为运营商api为准的列表单，all为全部运营商
//     method: 0, // 播放方式：0-总体，1-直播，2-点播，3-回看
//     list: "all", // 节目列表：根据栏目api为准的列表单，all为全部节目
//     start: "2019-07-12",
//     end: "2019-07-31",
//     increment: "少儿包" // 增值包选项 如 少儿包
// };


// //////////////////////// 数据审计
// 完整性
// post http://{{iptv}}/api/missReport
export function missReport(postData) {
    return request({
        method: 'post',
        url: '/missReport',
        data: postData
    })
}
// 趋势 + 异常值
// post http://{{iptv}}/api/errorReport
export function errorReport(postData) {
    return request({
        method: 'post',
        url: '/errorReport',
        data: postData
    })
}
// //////////////////////// 权限

// 获取id用户权限
// get http://{{iptv}}/api/users/:user/permissions
export function get_user_permissions_byid(newToken, user) {
    return request({
        method: 'get',
        url: '/users/' + user + '/permissions',
        headers: { 'Authorization': 'Bearer' + newToken }
    })
}

// 当前用户权限
// get http://{{iptv}}/api/user/permissions
export function get_user_permissions(newToken) {
    return request({
        method: 'get',
        url: '/user/permissions',
        headers: { 'Authorization': 'Bearer' + newToken }
    })
}

// 给予权限
// post http://{{iptv}}/api/users/:user/permissions
export function post_users_permissions(newToken, user, postData) {
    return request({
        method: 'post',
        url: '/users/' + user + '/permissions',
        headers: { 'Authorization': 'Bearer' + newToken },
        data: postData
    })
}
// user    -- userid
// postData --permissions
// let temp = {
//     permissions: permissions,
// };

// 权限列表
// get http://{{iptv}}/api/permissions
export function get_permissions_list(newToken) {
    return request({
        method: 'get',
        url: '/permissions',
        headers: { 'Authorization': 'Bearer' + newToken }
    })
}


// //////////////////////// G+TV用户收视日报表
// G+TV用户收视日报表数据
// post http://{{iptv}}/api/users/daliyReport
export function users_daliyReport(postData) {
    return request({
        method: 'post',
        url: '/users/daliyReport',
        data: postData
    })
}
// export function users_daliyReport() {
//     return request({
//         method: 'get',
//         url: '/search',
//     })
// }


// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// G+TV用户收视日报表数据运营商   --- ▲▲没了
// get http://{{iptv}}/api/users/daliyReport/operators
export function users_daliyReport_operators() {
    return request({
        method: 'get',
        url: '/users/daliyReport/operators',
    })
}

// //////////////////////// G+TV用户发展活跃日报表

// G+TV用户发展活跃日报表数据
// post http://{{iptv}}/api/liveUsers/daliyReport
export function liveUsers_daliyReport(postData) {
    return request({
        method: 'post',
        url: '/liveUsers/daliyReport',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// G+TV用户发展活跃日报表数据运营商
// get http://{{iptv}}/api/liveUsers/daliyReport/operators
export function liveUsers_daliyReport_operators() {
    return request({
        method: 'get',
        url: '/liveUsers/daliyReport/operators',
    })
}

// //////////////////////// 贵州广电新媒体G+TV移动运营数据周报

// 贵州广电新媒体G+TV移动运营数据周报
// post http://{{iptv}}/api/users/mobileReport
export function users_mobileReport(postData) {
    return request({
        method: 'post',
        url: '/users/mobileReport',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// // 贵州广电新媒体G+TV移动运营数据周报数据运营商
// // get http://{{iptv}}/api/users/mobileReport/operators
// export function users_mobileReport_operators() {
//     return request({
//         method: 'get',
//         url: '/users/mobileReport/operators',
//     })
// }

// //////////////////////// G+TV月度用户收视行为分析报告

// G+TV月度用户收视行为分析报告数据
// post http://{{iptv}}/api/users/monthActiveReport
export function users_monthActiveReport(postData) {
    return request({
        method: 'post',
        url: '/users/monthActiveReport',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// G+TV月度用户收视行为分析报告数据（月，周维度）
// posthttp://{{iptv}}/api/users/monthActiveReport/range

export function users_monthActiveReport_range(postData) {
    return request({
        method: 'post',
        url: '/users/monthActiveReport/range',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }


// G+TV月度用户收视行为分析报告数据运营商   --- 暂时不用
// get http://{{iptv}}/api/users/monthActiveReport/operators
export function users_monthActiveReport_operators() {
    return request({
        method: 'get',
        url: '/users/monthActiveReport/operators',
    })
}



// //////////////////////// 用户收视行为周报

// 用户收视行为周报数据
// post http://{{iptv}}/api/users/weekActiveReport
export function users_weekActiveReport(postData) {
    return request({
        method: 'post',
        url: '/users/weekActiveReport',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// 用户收视行为周报数据运营商   // 删了！
// get http://{{iptv}}/api/users/weekActiveReport/operators
export function users_weekActiveReport_operators() {
    return request({
        method: 'get',
        url: '/users/weekActiveReport/operators',
    })
}


// //////////////////////// 市场业务运营数据分析周报

// 市场业务运营数据分析周报数据
// post http://{{iptv}}/api/users/marketReport
export function users_marketReport(postData) {
    return request({
        method: 'post',
        url: '/users/marketReport',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// 市场业务运营数据分析周报运营商
// get http://{{iptv}}/api/users/marketReport/operators
export function users_marketReport_operators() {
    return request({
        method: 'get',
        url: '/users/marketReport/operators',
    })
}


// //////////////////////// 电信VIP增值业务专项分析
// 电信VIP增值业务专项分析数据
// post http://{{iptv}}/api/users/vipReport
export function users_vipReport(postData) {
    return request({
        method: 'post',
        url: '/users/vipReport',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// 电信VIP增值业务专项分析数据运营商
// get http://{{iptv}}/api/users/vipReport/operators
export function users_vipReport_operators() {
    return request({
        method: 'get',
        url: '/users/vipReport/operators',
    })
}

// //////////////////////// 专区数据报告

// // 专区数据单运营商
// // post http://{{iptv}}/api/users/subReport/single
// export function users_subReport_single(postData) {
//     return request({
//         method: 'post',
//         url: '/users/subReport/single',
//         data: postData
//     })
// }

// let temp = {
//     operator:operator
//     start: start,
//     end: end
// }

// 专区数据全局运营商
// post http://{{iptv}}/api/users/subReport
export function users_subReport(postData) {
    return request({
        method: 'post',
        url: '/users/subReport',
        data: postData
    })
}
export function subReport_list() {
    return request({
        method: 'get',
        url: '/subReport/list',
    })
}

// let temp = {
//     start: start,
//     end: end
// }

// 专区数据运营商
// get http://{{iptv}}/api/users/subReport/operators
export function users_subReport_operators() {
    return request({
        method: 'get',
        url: '/users/subReport/operators',
    })
}

// //////////////////////// 用户收视行为

// 用户收视行为收视top15
// get http://{{iptv}}/api/userAction/top
export function userAction_top() {
    return request({
        method: 'get',
        url: '/userAction/top',
    })
}


// 用户收视行为标签搜索
// post http://{{iptv}}/api/userAction
export function userAction(postData) {
    return request({
        method: 'post',
        url: '/userAction',
        data: postData
    })
}

// 用户收视行为标签搜索 - 直播专用
// post http://{{iptv}}/api/userAction/demand
export function userAction_demand(postData) {
    return request({
        method: 'post',
        url: '/userAction/demand',
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

export function userAction_program_type() {
    return request({
        method: 'get',
        url: '/userAction/program_type/list',
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

// 热点监控
// get http://{{iptv}}/api/hot/top
export function hot_top() {
    return request({
        method: 'get',
        url: '/hot/top',
    })
}

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
export function users_total(data) {
    return request({
        method: 'get',
        url: '/users/total',
        params: {
            start: data.start,
            end: data.end
        }
    })
}




// //////////////////////// 增值业务

// 增值业务搜索
// post http://{{iptv}}/api/increment
export function increment(postData) {
    return request({
        method: 'post',
        url: '/increment',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     list: list,
//     start: start,
//     end: end
// }

// 获取增值业务栏目
// get http://{{iptv}}/api/increment/programs/list
export function increment_programs_list() {
    return request({
        method: 'get',
        url: '/increment/programs/list',
    })
}


// 获取增值业务运营商
// get http://{{iptv}}/api/increment/operators
export function increment_operators() {
    return request({
        method: 'get',
        url: '/vip/operators',
    })
}


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

// 获取vip运营商
// get http://{{iptv}}/api/vip/operators
export function vip_operators() {
    return request({
        method: 'get',
        url: '/vip/operators',
    })
}

// vip标签搜索
// post http://{{iptv}}/api/vip/increment
export function vip_increment(postData) {
    return request({
        method: 'post',
        url: '/vip/increment',
        data: postData
    })
}

// let temp = {
//     area: area,
//     operator: operator,
//     method: method,
//     list: list,
//     start: start,
//     end: end,
//     increment:increment
// }

// 获取vip栏目
// get http://{{iptv}}/api/vip/programs/list
export function vip_programs_list() {
    return request({
        method: 'get',
        url: '/vip/programs/list',
    })
}

// 获取vip数据地区码
// get http://{{iptv}}/api/vip/areaCode
export function vip_areaCode() {
    return request({
        method: 'get',
        url: '/vip/areaCode',
    })
}

// 获取vip数据增值包数据
// get http://{{iptv}}/api/vip/increment
export function vip_increment_get() {
    return request({
        method: 'get',
        url: '/vip/increment',
    })
}

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

//epg box详细信息
export function epg_box_content(postData) {
    return request({
        method: 'post',
        url: '/epg/content',
        data: postData
    })
}

// let temp = {
//     operator: operator,
//     list: list,
//     start: start,
//     end: end,
//     ver:ver
// }



// 获取epg栏目
// post http://{{iptv}}/api/epg/programs/list

export function epg_programs(postData) {
    return request({
        method: 'post',
        url: '/epg/programs/list',
        data: postData
    })
}

// // 获取epg运营商   
// // get http://{{iptv}}/api/epg/operators
// export function epg_operators() {
//     return request({
//         method: 'get',
//         url: '/epg/operators',
//     })
// }

// //////////////////////// 大屏页面

// 收视数据展示
// get http://{{iptv}}/api/media/watch/total
export function media_watch_total(data) {
    return request({
        method: 'get',
        url: '/media/watch/total',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}

// 媒资数据总收视数据
// get http://{{iptv}}/api/media/watch
export function media_watch() {
    return request({
        method: 'get',
        url: '/media/watch',

    })
}

// 媒资数据总节目数据
// get http://{{iptv}}/api/media/content
export function media_content(data) {
    return request({
        method: 'get',
        url: '/media/content',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator,
            year: data.year
        }
    })
}

// 本土原创节目数据
// get http://{{iptv}}/api/demands/location
export function demands_location(data) {
    return request({
        method: 'get',
        url: '/demands/location',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator,
            year: data.year
        }
    })
}

// 专区节目周累计点播收视时长
// get http://{{iptv}}/api/demands/week/duration
export function demands_week_duration() {
    return request({
        method: 'get',
        url: '/demands/week/duration',
    })
}

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


// vip点播收视top - 增值业务Top
// get http://{{iptv}}/api/demands/VipProgramTop
export function demands_VipProgramTop(data) {
    return request({
        method: 'get',
        url: '/demands/VipProgramTop',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}

// 点播收视TOP
// get http://{{iptv}}/api/demandProgramTop
export function demandProgramTop(data) {
    return request({
        method: 'get',
        url: '/demandProgramTop',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
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

// 点播总体数据统计 - 专区节目
// get http://{{iptv}}/api/broadcast/demand
export function broadcast_demand(data) {
    return request({
        method: 'get',
        url: '/broadcast/demand',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator

        }
    })
}

// 回播总体数据统计
// get http://{{iptv}}/api/broadcast/review
export function broadcast_review(data) {
    return request({
        method: 'get',
        url: '/broadcast/review',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}

// 用户数据展示
// get http://{{iptv}}/api/users/basic
export function users_basic(data) {
    return request({
        method: 'get',
        url: '/users/basic',
        params: {
            // date: date
            operator: data.operator,
            start: data.start,
            end: data.end,
            year: data.year
        }
    })
}

// 直播总体数据统计
// get http://{{iptv}}/api/broadcast/onlive
export function broadcast_onlive(data) {
    return request({
        method: 'get',
        url: '/broadcast/onlive',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}




// 用户订购数据
// get http://{{iptv}}/api/users/subscribe
export function users_subscribe(data) {
    return request({
        method: 'get',
        url: '/users/subscribe',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}

// 用户激活率
// get http://{{iptv}}/api/users/activationRate
export function users_activationRate(data) {
    return request({
        method: 'get',
        url: '/users/activationRate',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}

// 用户留存率
// get http://{{iptv}}/api/users/retention
export function users_retention(data) {
    return request({
        method: 'get',
        url: '/users/retention',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}

// 贵州频道收视TOP5
// get http://{{iptv}}/api/onlive/location
export function onlive_location(data) {
    return request({
        method: 'get',
        url: '/onlive/location',
        params: {
            start: data.start,
            end: data.end,
            operator: data.operator
        }
    })
}

// //////////////////////// 用户


// 删除用户
// delete http://{{iptv}}/api/users/:user
export function del_user(newToken, user) {
    return request({
        method: 'delete',
        url: '/users/' + user,
        headers: { 'Authorization': 'Bearer' + newToken },
    })
}

// ▲▲ x-www-form-urlencode
// 更新用户信息
// put http://{{iptv}}/api/users/:user
// export function update_users(newToken, user, postData) {
//     return request({
//         method: 'patch',
//         url: '/users/' + user,
//         headers: {
//             'Authorization': 'Bearer' + newToken,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data: postData
//     })
// }
// export function update_users(newToken, user, data) {
//     return request({
//         method: 'patch',
//         url: '/users/' + user,
//         headers: {
//             'Authorization': 'Bearer' + newToken,
//             // 'Content-Type': 'application/x-www-form-urlencoded'
//             'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'

//         },
//         params: qs.stringify(data)
//     })
// }
export function update_users(newToken, user, postData) {
    return request({
        method: 'patch',
        url: '/users/' + user,
        headers: {
            'Authorization': 'Bearer' + newToken,
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        data: qs.stringify(postData)
        // data: postData
    })
}

// let temp = {
//     name: name,
//     email: email,
//     password: password,
//     department: department,
//     reporter: reporter,
//     role: role
// }

// id用户信息
// get http://{{iptv}}/api/users/:user
export function get_userinfo_byid(newToken, user) {
    return request({
        method: 'get',
        url: '/users/' + user,
        headers: { 'Authorization': 'Bearer' + newToken },
    })
}

// 创建用户
// post http://{{iptv}}/api/users
export function create_users(newToken, postData) {
    return request({
        method: 'post',
        url: '/users',
        headers: { 'Authorization': 'Bearer' + newToken },
        data: postData
    })
}
// let temp = {
//     name: name,
//     email: email,
//     password: password,
//     department: department,
//     reporter: reporter,
//     role: role
// }

// 所有用户信息
// get http://{{iptv}}/api/users
export function get_allusersinfo(newToken) {
    return request({
        method: 'get',
        url: '/users',
        headers: { 'Authorization': 'Bearer' + newToken },
    })
}

// 当前用户信息
// get http://{{iptv}}/api/me
export function get_myinfo(newToken) {
    return request({
        method: 'get',
        url: '/me',
        headers: { 'Authorization': 'Bearer' + newToken },
    })
}


// token刷新
// put http://{{host}}/api/authorizations/current
export function refreshToken(newToken) {
    return request({
        method: 'put',
        url: '/authorizations/current',
        headers: { 'Authorization': 'Bearer' + newToken },
    })
}

// token删除
// delete http://{{host}}/api/authorizations/current
export function logout(newToken) {
    return request({
        method: 'delete',
        url: '/authorizations/current',
        headers: {
            'Authorization': 'Bearer' + newToken,
            "Content-type": "multipart/form-data"
        },
    })
}

// 用户登录
// post http://{{host}}/api/authorizations
export function login(data) {
    return request({
        method: 'post',
        url: '/authorizations',
        headers: {
            "Content-type": "multipart/form-data"
        },
        data: data
    })
}



// 用户登录
// post http://{{iptv}}/api/login

// export function login(postData) {
//     return request({
//         method: 'post',
//         url: '/login',
//         data: postData
//     })
// }

// let temp = {
//     email: email,
//     password: password,
//     captcha: captcha
// }

// 用户账号分发
// post http://{{iptv}}/api/register

// export function register(postData) {
//     return request({
//         method: 'post',
//         url: '/register',
//         data: postData
//     })
// }

// let temp = {
//     email_address: email_address,
//     password: password,
//     confirmed_password: confirmed_password
// }