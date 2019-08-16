import request from '@/utils/request'
// import qs from 'qs'


// 用户激活率
// get
// http://{{iptv}}/api/users/activationRate
// query
// hours - number
export function activationRate(hours) {
    return request({
        method: 'get',
        url: '/users/activationRate',
        params: { hours: hours }
    })
}

// 用户留存率
// get
// http://{{iptv}}/api/users/retention
// query
// date - number
export function retention(date) {
    return request({
        method: 'get',
        url: '/users/retention',
        params: { date: date }
    })
}
