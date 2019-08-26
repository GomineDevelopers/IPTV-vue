import request from '@/utils/request'
// import qs from 'qs'


// let temp = {
//     area: "all",
//     operator: "all",
//     method: 0,
//     list: "all",
//     start: "2019-07-12",
//     end: "2019-07-31",
//     increment: "少儿包"
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


// let temp = {
//     operator: operator,
//     start: start,
//     end: end
// }

// G+TV用户收视日报表数据运营商
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

// 贵州广电新媒体G+TV移动运营数据周报数据运营商
// get http://{{iptv}}/api/users/mobileReport/operators
export function users_mobileReport_operators() {
    return request({
        method: 'get',
        url: '/users/mobileReport/operators',
    })
}

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

// G+TV月度用户收视行为分析报告数据运营商
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

// 用户收视行为周报数据运营商
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
// 专区数据
// post http://{{iptv}}/api/users/subReport
export function users_subReport(postData) {
    return request({
        method: 'post',
        url: '/users/subReport',
        data: postData
    })
}

// let temp = {
//     operator: operator,
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
export function users_total(code, date) {
    return request({
        method: 'get',
        url: '/users/total',
        params: {
            code: code,
            date: date
        }
    })
}




// //////////////////////// 增值业务

// 增值业务搜索
// post http://{{iptv}}/api/increment
export function increment(postData) {
    return request({
        method: 'post',
        url: '/api/increment',
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

// 收视数据展示
// get http://{{iptv}}/api/media/watch/total
export function media_watch_total() {
    return request({
        method: 'get',
        url: '/media/watch/total',
    })
}

// 媒资数据总收视数据
// get http://{{iptv}}/api/media/watch
export function media_watch() {
    return request({
        method: 'get',
        url: '/api/media/watch',
    })
}

// 媒资数据总节目数据
// get http://{{iptv}}/api/media/content
export function media_content() {
    return request({
        method: 'get',
        url: '/api/media/content',
    })
}

// 本土原创节目数据
// get http://{{iptv}}/api/demands/location
export function demands_location() {
    return request({
        method: 'get',
        url: '/api/demands/location',
    })
}

// 专区节目周累计点播收视时长
// get http://{{iptv}}/api/demands/week/duration
export function demands_week_duration() {
    return request({
        method: 'get',
        url: '/api/demands/week/duration',
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