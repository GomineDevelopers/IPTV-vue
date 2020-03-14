import store from '@/store'
import { refreshToken, } from '@/api/api_main'
import CryptoJS from 'crypto-js' //加密js

const Utils = {}

Utils.setCookie = function (name, value, myDay) {
    var oDate = new Date()
    oDate.setTime(oDate.getTime() + (myDay * 60 * 1000))// 单位是毫秒
    document.cookie = name + '=' + value + '; expires=' + oDate.toUTCString()
}
Utils.getCookie = function (name) {
    // document.cookie获取当前网站的所有cookie
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split('=')
        if (arr1[0] === name) {
            return arr1[1]
        }
    }
    return '' //getCookie：如果没有当前name的cookie则返回''
}
Utils.delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = Utils.getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}
// ////////////////////
// 加密Cookie
Utils.setCookieCry = function (name, value, days) {
    var text = CryptoJS.AES.encrypt(value, 'secret key 123');//使用CryptoJS方法加密
    var saveDays = new Date(); //获取时间
    saveDays.setTime(saveDays.getTime() + 24 * 60 * 60 * 1000 * days); //保存的天数
    //字符串拼接存入cookie
    window.document.cookie = name + "=" + text + ";path=/;saveDays=" + saveDays.toGMTString();
}
//读取cookie
Utils.getCookieCry = function (name) {
    if (document.cookie.length > 0) {
        var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            if (arr2[0] == name) {
                //拿到拿到加密后的密码arr2[1]并解密
                var bytes = CryptoJS.AES.decrypt(arr2[1].toString(), 'secret key 123');
                var plaintext = bytes.toString(CryptoJS.enc.Utf8); //拿到解密后的密码（登录时输入的密码）
                return plaintext
            }
        }
    } else {
        return ""
    }
    return ""
}
//清除cookie
Utils.delCookieCry = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = Utils.getCookieCry(name); //del（组合）： 删除cookies - 就是删除，别置空
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
    }

}
// ////////////////////
Utils.checkToken = function () {  // ---暂且没用到
    let vm = this;
    let token = Utils.getCookie('user_token')
    let newToken = token.replace('"', '').replace('"', '')
    return new Promise((resolve, reject) => {
        store
            .dispatch("get_ifCanCheckToken")
            .then(function (response) {
                let ifCanCheckToken = response
                if (ifCanCheckToken == true) { //判断门
                    ifCanCheckToken = false //进来关门
                    store
                        .dispatch("set_ifCanCheckToken", ifCanCheckToken)
                        .then(function (response) {
                            refreshToken(newToken)
                                .then(function (response) {
                                    let access_token = response.data.access_token
                                    let freshData = response.data
                                    ifCanCheckToken = true //出去开门
                                    store
                                        .dispatch("set_ifCanCheckToken", ifCanCheckToken)
                                        .then(function (response) {
                                            Utils.setCookie('user_token', JSON.stringify(access_token), 60)// 存用户的新token(60分钟)
                                            resolve(freshData)
                                        })
                                        .catch(function (error) {
                                            console.info(error);
                                        });
                                })
                                .catch(function (error) {
                                    ifCanCheckToken = true //出去开门
                                    store
                                        .dispatch("set_ifCanCheckToken", ifCanCheckToken)
                                        .then(function (response) {
                                            console.log(error)
                                            // vm.$router.push({ path: "/" });
                                            reject(error)
                                        })
                                        .catch(function (error) {
                                            console.info(error);
                                        });
                                })
                        })
                        .catch(function (error) {
                            console.info(error);
                        });
                }
            })
            .catch(function (error) {
                console.info(error);
            });
    })
}

//日期时间计算（获取到日期的前 n 天日期）
Utils.getBeforeDate = function (strTime, n) {
    var n = n;
    var s;
    // var strTime = "2019-06-08"  //+++  此处为测试日期（去除测试后删）
    // var d = new Date();   //当前日期（去除测试后恢复）
    var d = new Date(strTime);  //+++  此处为配合测试日期的处理（去除测试后删）
    var year = d.getFullYear();
    var mon = d.getMonth() + 1;
    var day = d.getDate();
    if (day <= n) {
        if (mon > 1) {
            mon = mon - 1;
        } else {
            year = year - 1;
            mon = 12;
        }
    }
    d.setDate(d.getDate() - n);
    year = d.getFullYear();
    mon = d.getMonth() + 1;
    day = d.getDate();
    s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
    return s;
}

export {
    Utils
}
