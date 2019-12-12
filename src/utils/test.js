import CryptoJS from 'crypto-js' //加密js
import { get_date } from "@/api/api_main";

// import { commonTools } from "@/utils/test";
// import { commonTools } from "@/utils/common";

const commonTools = {}

// commonTools.date = { // 测试
//     start_year: 2018,
//     start_month: 1,
//     start_week: 1,
//     start_day: 1,
//     end_year: 2019,
//     end_month: 12,
//     end_week: 54,
//     end_day: 31
// }
commonTools.date = {
    start_year: 0,
    start_month: 0,
    start_week: 0,
    start_day: 0,
    end_year: 0,
    end_month: 0,
    end_week: 0,
    end_day: 0
}
get_date()
    .then(function (response_date) {
        let start_date = response_date.data.responses[0].aggregations.begin_date.buckets[0].key;
        let end_date = response_date.data.responses[0].aggregations.end_date.buckets[0].key;
        commonTools.date.start_year = commonTools.date_format_DWMY(start_date).year;
        // commonTools.date.start_year = 2017;  // 临时
        commonTools.date.start_month = commonTools.date_format_DWMY(start_date).month;
        commonTools.date.start_week = commonTools.date_format_DWMY(start_date).week;
        commonTools.date.start_day = commonTools.date_format_DWMY(start_date).day;

        commonTools.date.end_year = commonTools.date_format_DWMY(end_date).year;
        commonTools.date.end_month = commonTools.date_format_DWMY(end_date).month;
        // commonTools.date.end_month = 6;  // 临时

        commonTools.date.end_week = commonTools.date_format_DWMY(end_date).week;
        commonTools.date.end_day = commonTools.date_format_DWMY(end_date).day;


        // console.log(commonTools.date.start_month);
        // console.log(commonTools.date.end_month);

        // ///// 新增：周月末判断 （非周末 非月末情况 ， 周-1 月-1 ， 最小为 第0周 第0月 ---即没周数据、月数据）
        // 由于返回的数据是 users_basic 里面的时间范围，所以有了周末或月末就有当周或当月

        //传入年份和月份 获取该年对应月份的天数
        let split_arr = end_date.split("-");
        let day = parseInt(split_arr[2]);
        let month = parseInt(split_arr[1]);
        let year = parseInt(split_arr[0]);
        if (day != commonTools.getMonthDays(year, month)) { // 非月末
            if (commonTools.date.end_month > 0) {
                commonTools.date.end_month -= 1;
            }
        }
        let weekNum = commonTools.getWeek_y(end_date);
        let dateArr = commonTools.getDayEveryDay(year, weekNum);
        if (end_date != dateArr[6]) {
            commonTools.date.end_week -= 1;
        }
    })
    .catch(function (error) {
        console.info(error);
    });

// date 转换成 日周月年num（无单位）
// 2019-10-01 => 1 x 10 2019
commonTools.date_format_DWMY = function (date) {
    let split_arr = date.split("-");

    let day = parseInt(split_arr[2]);
    let week = commonTools.getWeek_y(date);
    let month = parseInt(split_arr[1]);
    let year = parseInt(split_arr[0]);;
    return {
        day: day,
        week: week,
        month: month,
        year: year
    }
}

// 处理下拉框实际value_str - 分几种类型
function manage_date_value(str, str_type) {
    if (str_type == "week") {//  2019&52week => 2019 52
        let split_arr = str.split("&");
        let year = parseInt(split_arr[0]);
        let split_arr2 = split_arr[1].split("week");
        let week = parseInt(split_arr2[0]);
        return {
            year: year,
            week: week
        }
    }
    if (str_type == "weekdays") { // (&2019&52week&@2019-12-23@2019-12-31@*49week*52week*) =>  2019 52
        let split_arr = str.split("&");
        let year = parseInt(split_arr[1]);
        let split_arr2 = split_arr[2].split("week");
        let week = parseInt(split_arr2[0]);
        return {
            year: year,
            week: week
        }
    }
    if (str_type == "weekdays_byday") { // 2019&52week*2019-12-23*2019-12-31 =>  2019 52
        let split_arr = str.split("&");
        let year = parseInt(split_arr[0]);
        let split_arr2 = split_arr[1].split("week");
        let week = parseInt(split_arr2[0]);
        return {
            year: year,
            week: week
        }
    }
    if (str_type == "month") { // 2019&12month  => 2019 12
        let split_arr = str.split("&");
        let year = parseInt(split_arr[0]);
        let split_arr2 = split_arr[1].split("month");
        let month = parseInt(split_arr2[0]);
        return {
            year: year,
            month: month
        }
    }
    if (str_type == "monthdays") { // (&2019&1month&@2019-01-01@2019-01-31@*1week*4week*^NaNmonth^1month^) =》 2019 1
        let split_arr = str.split("&");
        let year = parseInt(split_arr[1]);
        let split_arr2 = split_arr[2].split("month");
        let month = parseInt(split_arr2[0]);
        return {
            year: year,
            month: month
        }
    }
    if (str_type == "monthdays_byweek") { // 2019&12month*48week*52week =>  2019 12
        let split_arr = str.split("&");
        let year = parseInt(split_arr[0]);
        let split_arr2 = split_arr[1].split("month");
        let month = parseInt(split_arr2[0]);
        return {
            year: year,
            month: month
        }
    }
}

function M_ValueRange(arr, str_type) {
    let temp_arr = [];
    if (str_type == "week" ||
        str_type == "weekdays" ||
        str_type == "weekdays_byday"
    ) {
        for (let i = 0; i < arr.length; i++) {
            // 非start 非end 年 
            if (manage_date_value(arr[i].value, str_type).year > commonTools.date.start_year && manage_date_value(arr[i].value, str_type).year < commonTools.date.end_year) {
                temp_arr.push(arr[i]);
            }
            // start年 非end年
            else if (manage_date_value(arr[i].value, str_type).year == commonTools.date.start_year && manage_date_value(arr[i].value, str_type).year != commonTools.date.end_year) {
                if (manage_date_value(arr[i].value, str_type).week >= commonTools.date.start_week) {
                    temp_arr.push(arr[i]);
                }
            }
            // end年 非start年
            else if (manage_date_value(arr[i].value, str_type).year != commonTools.date.start_year && manage_date_value(arr[i].value, str_type).year == commonTools.date.end_year) {
                if (manage_date_value(arr[i].value, str_type).week <= commonTools.date.end_week) {
                    temp_arr.push(arr[i]);
                }
            } // start年 end年
            else if (manage_date_value(arr[i].value, str_type).year == commonTools.date.end_year && manage_date_value(arr[i].value, str_type).year == commonTools.date.end_year) {
                if (manage_date_value(arr[i].value, str_type).week >= commonTools.date.start_week && manage_date_value(arr[i].value, str_type).week <= commonTools.date.end_week) {
                    temp_arr.push(arr[i]);
                }
            }
        }
    }
    if (str_type == "month" ||
        str_type == "monthdays" ||
        str_type == "monthdays_byweek"
    ) {
        for (let i = 0; i < arr.length; i++) {
            // 非start 非end 年 
            if (manage_date_value(arr[i].value, str_type).year > commonTools.date.start_year && manage_date_value(arr[i].value, str_type).year < commonTools.date.end_year) {
                temp_arr.push(arr[i]);
            }
            // start年 非end年
            else if (manage_date_value(arr[i].value, str_type).year == commonTools.date.start_year && manage_date_value(arr[i].value, str_type).year != commonTools.date.end_year) {
                if (manage_date_value(arr[i].value, str_type).month >= commonTools.date.start_month) {
                    temp_arr.push(arr[i]);
                }
            }
            // end年 非start年
            else if (manage_date_value(arr[i].value, str_type).year != commonTools.date.start_year && manage_date_value(arr[i].value, str_type).year == commonTools.date.end_year) {
                if (manage_date_value(arr[i].value, str_type).month <= commonTools.date.end_month) {
                    temp_arr.push(arr[i]);
                }
            } // start年 end年
            else if (manage_date_value(arr[i].value, str_type).year == commonTools.date.end_year && manage_date_value(arr[i].value, str_type).year == commonTools.date.end_year) {
                if (manage_date_value(arr[i].value, str_type).month >= commonTools.date.start_month && manage_date_value(arr[i].value, str_type).month <= commonTools.date.end_month) {
                    temp_arr.push(arr[i]);
                }
            }
        }
    }
    return temp_arr;
}

// /////////// 判定-by year+week范围
commonTools.weekDate_ED = function () {
    let temp_year = commonTools.date.start_year
    let arr = commonTools.weekDate(temp_year);
    for (temp_year; temp_year < commonTools.date.end_year;) {
        temp_year++;
        arr = commonTools.weekDate_add(temp_year, arr);
    }
    arr = M_ValueRange(arr, "week");
    return arr.reverse();
}
commonTools.format_WeeksDays_byDWwr_ED = function () {
    let temp_year = commonTools.date.start_year
    let arr = commonTools.format_WeeksDays_byDWwr(temp_year, 4);
    for (temp_year; temp_year < commonTools.date.end_year;) {
        temp_year++;
        arr = commonTools.format_WeeksDays_byDWwr_add(temp_year, 4, arr);
    }
    arr = M_ValueRange(arr, "weekdays");
    return arr.reverse();
}
commonTools.weekDate_byday_ED = function () {
    let temp_year = commonTools.date.start_year
    let arr = commonTools.weekDate_byday(temp_year);
    for (temp_year; temp_year < commonTools.date.end_year;) {
        temp_year++;
        arr = commonTools.weekDate_add_byday(temp_year, arr);
    }
    arr = M_ValueRange(arr, "weekdays_byday");
    return arr.reverse();
}
//  判定-by year+month范围
commonTools.format_MonthDays_ED = function () {
    let temp_year = commonTools.date.start_year
    let arr = commonTools.format_MonthDays(temp_year);
    for (temp_year; temp_year < commonTools.date.end_year;) {
        temp_year++;
        arr = commonTools.format_MonthDays_add(temp_year, arr);
    }
    arr = M_ValueRange(arr, "month");
    return arr.reverse();
}
commonTools.format_MonthDays_byDWMMr_ED = function () {
    let temp_year = commonTools.date.start_year
    let arr = commonTools.format_MonthDays_byDWMMr(temp_year, 4);
    for (temp_year; temp_year < commonTools.date.end_year;) {
        temp_year++;
        arr = commonTools.format_MonthDays_byDWMMr_add(temp_year, 4, arr);
    }
    arr = M_ValueRange(arr, "monthdays");
    return arr.reverse();
}
commonTools.format_MonthDays_byweek_ED = function () {
    let temp_year = commonTools.date.start_year
    let arr = commonTools.format_MonthDays_byweek(temp_year);
    for (temp_year; temp_year < commonTools.date.end_year;) {
        temp_year++;
        arr = commonTools.format_MonthDays_add_byweek(temp_year, arr);
    }
    arr = M_ValueRange(arr, "monthdays_byweek");
    return arr.reverse();
}


///////////////////////////////////////////////

// buckets - 周月排序(按key)
commonTools.bucketsSort_WM = function (buckets) {
    let buckets_sort = [];
    for (let z = 0; z < buckets.length; z++) {
        buckets_sort.push(buckets[z]);
    }
    // 排序
    for (let i = 0; i < buckets_sort.length - 1; i++) {
        for (let j = 0; j < buckets_sort.length - i - 1; j++) {
            if (commonTools.Return_WM_Num(buckets_sort[j].key) > commonTools.Return_WM_Num(buckets_sort[j + 1].key)) {
                // 判断第二位
                let tmp = buckets_sort[j];
                buckets_sort[j] = buckets_sort[j + 1];
                buckets_sort[j + 1] = tmp;
            }
        }
    }
    return buckets_sort;
}
// 周月Number  ( "11week" => 11   "5month" => 5)
commonTools.Return_WM_Num = function (STR) {
    let WM_Num = 0;
    let str_arr;
    if (STR.indexOf("week") > -1) {
        str_arr = STR.split("week");
        WM_Num = Number(str_arr[0]);
    }
    if (STR.indexOf("month") > -1) {
        str_arr = STR.split("month");
        WM_Num = Number(str_arr[0]);
    }
    // console.log(str_arr);
    // console.log(WM_Num);
    return WM_Num;
}
// commonTools.Return_WM_Num("11week");
// commonTools.Return_WM_Num("5week");
// commonTools.Return_WM_Num("5month");




// 传入日期 month 1
// 2019-08-10 , 1  => 7month
commonTools.get_ExpirationDate_lastNMonth = function (date, n) {
    let arr = date.split("-");
    let month_str = parseInt(arr[1]) - n;
    if (month_str < 1) {
        month_str = 1;
    }
    return String(month_str) + "month";
}
commonTools.get_ExpirationDate_lastNMonth_toChinese = function (date, n) {
    let arr = date.split("-");
    let month_str = parseInt(arr[1]) - n;
    if (month_str < 1) {
        month_str = 1;
    }
    return String(month_str) + "月";
}

// 传入日期获得当前年year
commonTools.get_ExpirationDate_year = function (date) {
    let arr = date.split("-");
    return String(arr[0]);
}

// 传入日期 2019-10-18 返回（包括当前月的）n月份
// 如 5month~10month
commonTools.get_ExpirationDate_n_months = function (date, n) {
    let spilit_str = date.split("-");
    let current_month = String(parseInt(spilit_str[1])); // 目的  Str: 05 -》 5
    let start;
    start = parseInt(current_month) - n + 1;
    if (start < 1) {
        start = 1;
    }
    start = String(start);
    start += "month";
    let end = current_month + "month";

    return {
        start: start,
        end: end
    }
}

// 传入日期 2019-10-18 获得当月01号 2019-10-01
commonTools.get_ExpirationDate_01 = function (date) {
    let spilit_str = date.split("-");
    return spilit_str[0] + "-" + spilit_str[1] + "-01";
}

// 数据格式转换 2019-08-06 =》8月6日
commonTools.format_dateToChineseMD = function (date) {
    let setDate = new Date(date);
    // let setdateYear = setDate.getFullYear() + "年";
    let setDateMonth = setDate.getMonth() + 1 + "月";
    let setDateDay = setDate.getDate() + "日";
    let dayDate = setDateMonth + setDateDay;
    return dayDate;
}

// 数据格式转换 2019-10-18 -> 18
commonTools.format_dayToChinese = function (str) {
    let arr = str.split("-");
    return arr[2];
}

// 数据格式转换 2019-10-18 -> 18日
commonTools.format_dayToChinese_2 = function (str) {
    let arr = str.split("-");
    return arr[2] + "日";
}

// 数据格式转换 xmonth -> x月
commonTools.format_monthToChinese = function (str) {
    // 特殊处理 - 去掉NaN
    // str = str.replace("NaN", "")
    return str.replace("month", "月");
}

// 数据格式转换 xweek -> x周
commonTools.format_weekToChinese = function (str) {
    return str.replace("week", "周");
}

// 返回当前周前n周的week
// 传入：22week ，1   输出  21week
commonTools.ReturnBeforeWeek = function (weekString, before_n) {
    let str_split = weekString.split("week");
    let reStr;
    if (parseInt(str_split[0]) == 1) { // 第1周 处理 则 1week~1week
        reStr = String(parseInt(str_split[0])) + "week";
    }
    else {
        reStr = String(parseInt(str_split[0]) - before_n) + "week";
    }
    return reStr;
}

// 周-天格式显示转换
// 2019-09-01 ,2019-09-07 =》  0901-0907
commonTools.weekDaysShowFormat = function (date1, date2) {
    let str_split1 = date1.split("-");
    let str_split2 = date2.split("-");
    return str_split1[1] + str_split1[2] + "-" + str_split2[1] + str_split2[2];
}

// 周-天格式显示转换+上一周的
// 2019-09-01 ,2019-09-07 =》 2019-08-25,2019-08-31,2019-09-01 ,2019-09-07 => 0825-0831,0901-0907
// 注意传入的 date1为本(年)周的第一天，date2为(年)周的第二天
commonTools.weekDaysShowFormat_AndBeforeWeek = function (date1, date2) {
    let str_split1 = date1.split("-");
    let str_split2 = date2.split("-");

    let beforeWeekDays = commonTools.currentDay_7daysAgoRange(date1);
    let date3 = beforeWeekDays.start; // 上（年）周一
    let date4 = beforeWeekDays.end;   // 上（年）周日
    let str_split3 = date3.split("-");
    let str_split4 = date4.split("-");

    return {
        beforeWeekFormat: str_split3[1] + str_split3[2] + "-" + str_split4[1] + str_split4[2],
        currentWeekFormat: str_split1[1] + str_split1[2] + "-" + str_split2[1] + str_split2[2]
    }
}

// 获取Cookie
commonTools.getCookieCry = function (name) {
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

// 获取当前运营商 - by cookie
commonTools.GetBigScreenOperator = function () {
    let currentOperator;
    let temp_status = commonTools.getCookieCry("bigscreenchoose");
    if (
        temp_status == null ||
        temp_status == undefined ||
        temp_status == ""
    ) {
        currentOperator = ["移动", "联通", "电信"];
    } else {
        if (temp_status == "综合") {
            currentOperator = ["移动", "联通", "电信"];
        }
        if (temp_status == "移动") {
            currentOperator = ["移动"];
        }
        if (temp_status == "联通") {
            currentOperator = ["联通"];
        }
        if (temp_status == "电信") {
            currentOperator = ["电信"];
        }
    }
    return String(currentOperator);

}


// 获取当天+前6天的date数组  -- OperationalWeekReport  responses33
// returnDate_StartToExpirationDate
// 获取当天所在月的1号~当天  -- DataTrend
// returnDate_StartToExpirationDate

// //////////////// 返回当前天的前七天（不包括当天）

// 返回当前的前7天（不包括当天）的范围
commonTools.currentDay_7daysAgoRange = function (m_date) {
    return {
        start: commonTools.currentDay_ndaysAgodate(m_date, 7),
        end: commonTools.currentDay_ndaysAgodate(m_date, 1)
    }
}

// ▲只用于七日留存率-返回当天日期 - 都作为start end （原因：后台7日留存率逻辑变了）
commonTools.currentDay_currenDayRange = function (m_date) {
    return {
        // start: m_date,
        // end: m_date
        start: commonTools.currentDay_ndaysAgodate(m_date, 7),
        end: commonTools.currentDay_ndaysAgodate(m_date, 7)
    }
}

// date格式： 2019-06-07
// dateInterval:时间间隔 如：7天 =》  7
commonTools.currentDay_ndaysAgodate = function (m_date, m_dateInterval) {
    let dateInterval = m_dateInterval;
    let split_arr = m_date.split("-");

    let num_year = parseInt(split_arr[0]);
    let num_month = parseInt(split_arr[1]) - 1;
    let num_day = parseInt(split_arr[2]);
    // let date = new Date();
    let date = new Date(num_year, num_month, num_day); // 传入为num,year day正常 1+ ， month 0+
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day <= dateInterval) {
        if (month > 1) {
            month = month - 1;
        } else {
            year = year - 1;
            month = 12;
        }
    }
    date.setDate(date.getDate() - dateInterval);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    let temp_string = year + "-" + (month < 10 ? ('0' + month) : month) + "-" + (day < 10 ? ('0' + day) : day);
    return temp_string;
}

// 返回数组中最大值
commonTools.returnArrMax = function (arr) {
    let max;
    let length = arr.length;
    let i;
    for (i = 0; i < length; i++) {
        if (i == 0) {
            max = arr[i];
        } else {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}

// 冒泡排序 -- 从序数index几开始 （反向）
commonTools.sortArr = function (arr, index) {
    for (var i = 0; i < arr.length - 1; i++) {
        //决定每一轮比较多少次
        for (var j = index; j < arr.length - i - 1; j++) {
            if (arr[j][1] < arr[j + 1][1]) {
                // 判断第二位
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

//冒泡排序 -- 从序数index几开始
commonTools.sortArrZ = function (arr, index) {
    for (var i = 0; i < arr.length - 1; i++) {
        //决定每一轮比较多少次
        for (var j = index; j < arr.length - i - 1; j++) {
            if (arr[j][1] > arr[j + 1][1]) {
                // 判断第二位
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

// 反序

// 保留一位小数
commonTools.returnFloat_1 = function (value) {
    var value = Math.round(parseFloat(value) * 10) / 10;
    var xsd = value.toString().split(".");
    if (xsd.length == 1) {
        value = value.toString() + ".0";
        return value;
    }
    if (xsd.length > 1) {
        if (xsd[1].length < 1) {
            value = value.toString() + "0";
        }
        return value;
    }
}



// 保留两位小数
commonTools.returnFloat_2 = function (value) {
    var value = Math.round(parseFloat(value) * 100) / 100;
    var xsd = value.toString().split(".");
    if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
    }
    // if (xsd.length > 1) {  // 写细了会转换成 字符串！注意
    //     if (xsd[1].length == 0) {
    //         value = value.toString() + "00";
    //     }
    //     else if (xsd[1].length == 1) {
    //         value = value.toString() + "0";
    //     }
    //     return value;
    // }
    if (xsd.length > 1) {  // 原
        if (xsd[1].length < 1) {
            value = value.toString() + "0";
        }
        return value;
    }
}
// console.log(commonTools.returnFloat_2(0));
// console.log(commonTools.returnFloat_2(0.));
// console.log(commonTools.returnFloat_2(0.4));
// console.log(commonTools.returnFloat_2(0.5));
// console.log(commonTools.returnFloat_2(0.51));
// console.log(commonTools.returnFloat_2(0.55));
// console.log(commonTools.returnFloat_2(0.551));
// console.log(commonTools.returnFloat_2(0.555));


// // 保留三位小数
// commonTools.returnFloat_3 = function (value) {
//     var value = Math.round(parseFloat(value) * 1000) / 1000;
//     var xsd = value.toString().split(".");
//     if (xsd.length == 1) {
//         value = value.toString() + ".000";
//         return value;
//     }
//     // if (xsd.length > 1) {
//     //     if (xsd[1].length == 0) {
//     //         value = value.toString() + "000";
//     //     }
//     //     else if(xsd[1].length == 1) {
//     //         value = value.toString() + "00";
//     //     }
//     //     else if (xsd[1].length == 2) {
//     //         value = value.toString() + "0";
//     //     }
//     //     return value;
//     // }
//     if (xsd.length > 1) {
//         if (xsd[1].length < 3) {
//             value = value.toString() + "0";
//         }
//         return value;
//     }
// }
// console.log(commonTools.returnFloat_3(0));
// console.log(commonTools.returnFloat_3(0.));
// console.log(commonTools.returnFloat_3(0.4));
// console.log(commonTools.returnFloat_3(0.5));
// console.log(commonTools.returnFloat_3(0.51));
// console.log(commonTools.returnFloat_3(0.55));
// console.log(commonTools.returnFloat_3(0.551));
// console.log(commonTools.returnFloat_3(0.555));
// console.log(commonTools.returnFloat_3(0.5511));
// console.log(commonTools.returnFloat_3(0.5515));

// // 保留四位小数
// commonTools.returnFloat_4 = function (value) {
//     var value = Math.round(parseFloat(value) * 100) / 100;
//     var xsd = value.toString().split(".");
//     if (xsd.length == 1) {
//         value = value.toString() + ".0000";
//         return value;
//     }
//     if (xsd.length > 1) {
//         if (xsd[1].length < 4) {
//             value = value.toString() + "0";
//         }
//         return value;
//     }
// }

// ///////////////////// ac 地区码
// 851：贵阳
// 852：遵义
// 853: 安顺
// 854：黔南
// 855：黔东南
// 856：铜仁
// 857：毕节
// 858：六盘水
// 859：黔西南

commonTools.acConvert_Single = function (ac) {
    let city;
    switch (ac) {
        case "851":
            city = "贵阳";
            break;
        case "852":
            city = "遵义";
            break;
        case "853":
            city = "安顺";
            break;
        case "854":
            city = "黔南";
            break;
        case "855":
            city = "黔东南";
            break;
        case "856":
            city = "铜仁";
            break;
        case "857":
            city = "毕节";
            break;
        case "858":
            city = "六盘水";
            break;
        case "859":
            city = "黔西南";
            break;
        case "other":
            city = "其他";
            break;
        default:
            console.log("none!");
    }
    return city;
}

// ac 地区码转换-反向
commonTools.acConvert_reverse = function (area_arr) {
    let ac_arr = [];
    // if (area_arr.length == 0) {
    //     ac_arr.push("851");
    //     ac_arr.push("852");
    //     ac_arr.push("853");
    //     ac_arr.push("854");
    //     ac_arr.push("855");
    //     ac_arr.push("856");
    //     ac_arr.push("857");
    //     ac_arr.push("858");
    //     ac_arr.push("859");
    // }
    // else {

    // 暂定ac格式为 string
    if (area_arr.indexOf("851") > -1) {
        ac_arr.push("贵阳");
    }
    if (area_arr.indexOf("852") > -1) {
        ac_arr.push("遵义");
    }
    if (area_arr.indexOf("853") > -1) {
        ac_arr.push("安顺");
    }
    if (area_arr.indexOf("854") > -1) {
        ac_arr.push("黔南");
    }
    if (area_arr.indexOf("855") > -1) {
        ac_arr.push("黔东南");
    }
    if (area_arr.indexOf("856") > -1) {
        ac_arr.push("铜仁");
    }
    if (area_arr.indexOf("857") > -1) {
        ac_arr.push("毕节");
    }
    if (area_arr.indexOf("858") > -1) {
        ac_arr.push("六盘水");
    }
    if (area_arr.indexOf("859") > -1) {
        ac_arr.push("黔西南");
    }
    // }
    return ac_arr
}

commonTools.acConvert_R_reverse = function (area_arr) {
    let ac_arr = [];

    // 暂定ac格式为 string
    if (area_arr.indexOf("859") > -1) {
        ac_arr.push("黔西南");
    }
    if (area_arr.indexOf("858") > -1) {
        ac_arr.push("六盘水");
    }
    if (area_arr.indexOf("857") > -1) {
        ac_arr.push("毕节");
    }
    if (area_arr.indexOf("856") > -1) {
        ac_arr.push("铜仁");
    }
    if (area_arr.indexOf("855") > -1) {
        ac_arr.push("黔东南");
    }
    if (area_arr.indexOf("854") > -1) {
        ac_arr.push("黔南");
    }
    if (area_arr.indexOf("853") > -1) {
        ac_arr.push("安顺");
    }
    if (area_arr.indexOf("852") > -1) {
        ac_arr.push("遵义");
    }
    if (area_arr.indexOf("851") > -1) {
        ac_arr.push("贵阳");
    }
    return ac_arr
}

// ac 地区码转换
commonTools.acConvert = function (area_arr) {
    let ac_arr = [];
    if (area_arr.length == 0) {
        ac_arr.push("851");
        ac_arr.push("852");
        ac_arr.push("853");
        ac_arr.push("854");
        ac_arr.push("855");
        ac_arr.push("856");
        ac_arr.push("857");
        ac_arr.push("858");
        ac_arr.push("859");
    }
    else {

        // 暂定ac格式为 string
        if (area_arr.indexOf("贵阳") > -1) {
            ac_arr.push("851");
        }
        if (area_arr.indexOf("遵义") > -1) {
            ac_arr.push("852");
        }
        if (area_arr.indexOf("安顺") > -1) {
            ac_arr.push("853");
        }
        if (area_arr.indexOf("黔南") > -1) {
            ac_arr.push("854");
        }
        if (area_arr.indexOf("黔东南") > -1) {
            ac_arr.push("855");
        }
        if (area_arr.indexOf("铜仁") > -1) {
            ac_arr.push("856");
        }
        if (area_arr.indexOf("毕节") > -1) {
            ac_arr.push("857");
        }
        if (area_arr.indexOf("六盘水") > -1) {
            ac_arr.push("858");
        }
        if (area_arr.indexOf("黔西南") > -1) {
            ac_arr.push("859");
        }
    }
    return ac_arr
}

// 运营商转换 （为空则为全选）
commonTools.operatorConvert = function (operator_arr) {
    let temp_arr = [];
    if (operator_arr.length == 0) { // （为空则为全选）
        temp_arr.push("移动");
        temp_arr.push("联通");
        temp_arr.push("电信");
        return temp_arr;
    }
    else {
        return operator_arr // （非空则保持原样）
    }
}

// 播放方式转换 （为空则为全选）
commonTools.playmodeConvert = function (playmode_arr) {
    let temp_arr = [];
    if (playmode_arr.length == 0) { // （为空则为全选）
        temp_arr.push("直播");
        temp_arr.push("点播");
        temp_arr.push("回看");
        return temp_arr;
    }
    else {
        return playmode_arr // （非空则保持原样）
    }
}

// 内容类型转换 （为空则为全选）
commonTools.contenttypeConvert = function (playmode_arr) {
    let temp_arr = [];
    if (playmode_arr.length == 0) { // （为空则为全选）
        temp_arr.push("健康");
        temp_arr.push("音乐");
        return temp_arr;
    }
    else {
        return playmode_arr // （非空则保持原样）
    }
}

// 栏目转换 （为空则为全选）
commonTools.programaConvert = function (programa_arr) {
    let temp_arr = [];
    if (programa_arr.length == 0) { // （为空则为全选）
        temp_arr.push("分类");
        temp_arr.push("电视");
        temp_arr.push("推荐");
        temp_arr.push("电影");
        temp_arr.push("热剧");
        temp_arr.push("少儿");
        temp_arr.push("动漫");
        temp_arr.push("综艺");
        temp_arr.push("体育");
        temp_arr.push("纪实");
        temp_arr.push("游戏");
        temp_arr.push("健康");
        temp_arr.push("音乐");
        temp_arr.push("其他");
        return temp_arr;
    }
    else {
        return programa_arr // （非空则保持原样）
    }
}

////////////////////// 
// 分割自定义时间格式
// 处理 2018&3week 2018&3month 类似格式，返回 year 和 time(week或month)
// 处理 =》 weekDate weekDate_add format_MonthDays format_MonthDays_add
commonTools.split_yearAtime = function (str) {
    let t_year;
    let t_time;
    let strs = str.split('&');
    t_year = strs[0];
    t_time = strs[1];
    return {
        year: t_year,
        time: t_time
    };
}

////////////////////// 
// 分割自定义时间格式
// 处理 2019-07-01 格式，返回 year 和 time(day和year)
// 处理 =》 day
commonTools.split_yearAtime2 = function (str) {
    let t_year;
    let t_month;
    let t_day;
    let strs = str.split('-');
    t_year = strs[0];
    t_month = strs[1];
    t_day = strs[3];
    return {
        year: t_year,
        month: t_month,
        day: t_day
    };
}

// 处理 2018*2018-01-01*2018-01-07 或者  2018*1week*4week
// 处理 weekDate_byday  weekDate_add_byday format_MonthDays_byweek format_MonthDays_add_byweek
commonTools.split_yearAtime_byweekOrDay = function (str) {
    let t_year = commonTools.split_yearAtime(str).year;
    let t_time1;
    let t_time2;
    let strs = str.split('*');
    t_time1 = strs[1];
    t_time2 = strs[2];

    return {
        year: t_year,
        time1: t_time1,
        time2: t_time2,
    };
}

// 时间格式转换
// Wed Sep 11 2019 00:00:00 GMT+0800 (中国标准时间),Wed Oct 16 2019 00:00:00 GMT+0800 (中国标准时间)
// =》 2019-09-11   2019-10-16
commonTools.split_picker = function (str) {
    let time_arr = str.split(",");
    let t1 = time_arr[0];
    let t2 = time_arr[1];
    t1 = commonTools.dayChange(t1);
    t2 = commonTools.dayChange(t2);
    let year = t1.split("-")[0]
    return {
        start: t1,
        end: t2,
        year: year
    }
}

// 时间格式转换
// Tue Sep 03 2019 00:00:00 GMT+0800 (中国标准时间) => 2019-09-03
commonTools.dayChange = function (str) { // 实际使用
    let string_event = str;
    let tempArr = string_event.split(" ");

    let year = tempArr[3];
    let month = commonTools.monthManage(tempArr[1]);
    let day = tempArr[2];
    let m_time = String(year + "-" + month + "-" + day);
    return m_time
}

// 时间格式转换X (Aug 2, 2019 at 4:59PM  = 》 2019-08-02) ---s金融的格式
commonTools.timeformatX = function (str) { // 暂且没用到
    let tmepArr = str.split(" ");
    let year = tmepArr[2];
    let month = commonTools.monthManage(tmepArr[0]); // Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
    let day = commonTools.dayManage(tmepArr[1].replace(",", ""));
    return year + "-" + month + "-" + day;
}

// 处理天-数字1~9首位置零
commonTools.dayManage = function (str) {
    let day = str;
    switch (str) {
        case "1":
            day = "01";
            break;
        case "2":
            day = "02";
            break;
        case "3":
            day = "03";
            break;
        case "4":
            day = "04";
            break;
        case "5":
            day = "05";
            break;
        case "6":
            day = "06";
            break;
        case "7":
            day = "07";
            break;
        case "8":
            day = "08";
            break;
        case "9":
            day = "09";
            break;
        default:
            day = str;
    }
    return day;
}

// 月判断 By 英文缩写
commonTools.monthManage = function (str) {
    let month;
    switch (str) {
        case "Jan":
            month = "01";
            break;
        case "Feb":
            month = "02";
            break;
        case "Mar":
            month = "03";
            break;
        case "Apr":
            month = "04";
            break;
        case "May":
            month = "05";
            break;
        case "Jun":
            month = "06";
            break;
        case "Jul":
            month = "07";
            break;
        case "Aug":
            month = "08";
            break;
        case "Sep":
            month = "09";
            break;
        case "Oct":
            month = "10";
            break;
        case "Nov":
            month = "11";
            break;
        case "Dec":
            month = "12";
            break;
        default:
            console.log("none!");
    }
    return month;
}

////////////////////////////////////////

// 日期格式转换
commonTools.dateFormat = function (stringTypeDate) {
    var dateType = "";
    var date = new Date(stringTypeDate);
    dateType = date.getFullYear() + "-" + commonTools.getMonth(date) + "-" + commonTools.getDay(date);
    return dateType;
}

// 日期时间格式转换
commonTools.datetimeFormat = function (stringTypeDate) {
    var datetimeType = "";
    var date = new Date(stringTypeDate);
    datetimeType = date.getFullYear() + "-" + commonTools.getMonth(date) + "-" + commonTools.getDay(date) + " " + commonTools.getHours(date) + ":" + commonTools.getMinutes(date) + ":" + commonTools.getSeconds(date);
    //yyyy-MM-dd 00:00:00格式日期 
    return datetimeType;
}

//返回 01-12 的月份值 
commonTools.getMonth = function (date) {
    var month = "";
    month = date.getMonth() + 1;
    //getMonth()得到的月份是0-11
    if (month < 10) {
        month = "0" + month;
    }
    return month;
}
//返回01-30的日期 
commonTools.getDay = function (date) {
    var day = "";
    day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    return day;
}
//返回小时 
commonTools.getHours = function (date) {
    var hours = "";
    hours = date.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    return hours;
}
//返回分 
commonTools.getMinutes = function (date) {
    var minute = "";
    minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    return minute;
}
//返回秒 
commonTools.getSeconds = function (date) {
    var second = "";
    second = date.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    return second;
}

// ///////////////// 返回当前日期 是当年的第几周 哪周
commonTools.getWeek_y = function (date) {
    let d1 = new Date(date);
    let d2 = new Date(date);
    d2.setMonth(0);
    d2.setDate(1);
    let rq = d1 - d2;
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
    let num = Math.ceil(days / 7);
    // console.log(rq / (24 * 60 * 60 * 1000)); // 221  2019-08-10 是当年第221天
    // console.log(days / 7);   // 31.571428571428573   除以7  进一法 为32周
    return num;
}
// ///////////////// 返回当前日期 该周周几 （▲周日属于周末最后一天）
commonTools.getWeek_y_dayn = function (date) {
    let d1 = new Date(date);
    let d2 = new Date(date);
    d2.setMonth(0);
    d2.setDate(1);
    let rq = d1 - d2;
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
    let num = Math.ceil(days / 7);
    // console.log(rq / (24 * 60 * 60 * 1000)); // 221  2019-08-10 是当年第221天
    // console.log(days / 7);   // 31.571428571428573   除以7  进一法 为32周
    return num;
}
commonTools.getWeek_y_dayn("2019-12-03");



// ///////////////// 返回当前日期 前n周的范围
// 传入 0 是本周 ，传入1是上周  
// date格式： 2019-10-18
// getweekDays_y: [2019, 32, "2019-08-09", "2019-08-15"]
commonTools.getweekDays_y = function (date, n) {
    let weekNum = commonTools.getWeek_y(date);
    let year = parseInt(commonTools.get_ExpirationDate_year(date)); // 获取当前日期的年份=》int 
    weekNum = weekNum - n;
    let arr = commonTools.getYearWeekRange(year, weekNum)
    return arr;
}


/*获取当前年的第几周，以及周对应的日期范围（根据当前日期的时间） 
*@author weiyongfu
*@date 2017-11-17
*/
commonTools.getYearWeekRange = function (year, weekNum) {   // ---- 注意 下面有时间推移，得改！
    var date = null;
    var year = year;
    var month = null;
    var day = null;
    var d = null;
    if (weekNum == null || weekNum == "") {//如果为空，默认加载当前日期，否则加载选择的周数
        date = new Date();//获取系统时间
        year = date.getFullYear();//年
        month = date.getMonth() + 1;//月
        day = date.getDate();//
        var d = year + "-" + month + "-" + day;
    } else {
        if (weekNum.length == 3) {
            weekNum = weekNum.substring(1, 2);
        } else if (weekNum.length == 4) {
            weekNum = weekNum.substring(1, 3);
        }
        var weekDay = commonTools.getDayEveryDay(year, weekNum);
        d = weekDay[0];//获取对应周数的第一天
    }
    //获取当前日期的为今年的第几周的周数，常规的获取直接调用getWeekNumber(year, month, day);
    /*由于项目需要，我这儿的周定义为周五到下周四为一周,所以我传入的日期参数得往前推4天，
    *然后在调用常规的计算周数的方法
    */
    var beforeFourDay = commonTools.GetDateStr(-4, d);//当前日期前推4天的日期,返回值格式为2017-01-01
    var yearMonthDay = beforeFourDay.split("-");

    if (weekNum == null || weekNum == "") {//如果为空，默认加载当前日期的周数以及对应范围,否未为选择的周数
        weekNum = commonTools.getWeekNumber(yearMonthDay[0], yearMonthDay[1], yearMonthDay[2]);//按照周五到下周四为一周，计算当前日期为今年的第几周
    } else {
        weekNum = weekNum;
    }
    //获取当前日期的为今年的第几周的周数日期范围，getDateRange("2017-01-01")，在调用常规的计算周数日期的方法返回值为["2016-12-26","2017-1-1"];
    /*由于项目需要，我这儿的周定义为周五到下周四为一周,
    *在调用常规的计算周数日期的方法返回值时得相应做出调整getDateRange("2017-01-01");return ["2016-12-26","2017-1-1"];
    * arr[0]前推3天，arr[1]后推5天,["2016-12-30","2017-1-5"],得出2017年的1月1馹,(按照周五到下周四算一周为一周的日期范围为["2016-12-30","2017-1-5"])
    */

    var weekRange = commonTools.getDateRange(beforeFourDay);//常规的传入时间返回周的范围(周一到周天) return 格式["2016-12-26","2017-1-1"]
    // weekRange[0] = commonTools.GetDateStr(4, weekRange[0]);//后推4天
    // weekRange[1] = commonTools.GetDateStr(4, weekRange[1]);//后推4天
    weekRange[0] = commonTools.GetDateStr(7, weekRange[0]);// 正常周一到周日
    weekRange[1] = commonTools.GetDateStr(7, weekRange[1]);// 正常周一到周日


    //返回当前日期为[年，周数，周的范围start,周的范围end],按照周五到下周四为一周 =》 正常周一到周日
    return [year, weekNum, weekRange[0], weekRange[1]];
}


/*
*这个方法是获取周对应的日期范围(常规的一周为周一到周天为一周
* 参数datevalue如：2017-01-01)
*/
commonTools.getDateRange = function (datevalue) {
    var dateValue = datevalue;
    var arr = dateValue.split("-")
    //月份-1 因为月份从0开始 构造一个Date对象
    var date = new Date(arr[0], arr[1] - 1, arr[2]);

    var dateOfWeek = date.getDay();//返回当前日期的在当前周的某一天（0～6--周日到周一）

    var dateOfWeekInt = parseInt(dateOfWeek, 10);//转换为整型

    if (dateOfWeekInt == 0) {//如果是周日
        dateOfWeekInt = 7;
    }
    var aa = 7 - dateOfWeekInt;//当前于周末相差的天数

    var temp2 = parseInt(arr[2], 10);//按10进制转换，以免遇到08和09的时候转换成0
    var sunDay = temp2 + aa;//当前日期的周日的日期
    var monDay = sunDay - 6//当前日期的周一的日期

    var startDate = new Date(arr[0], arr[1] - 1, monDay);
    var endDate = new Date(arr[0], arr[1] - 1, sunDay);

    var sm = parseInt(startDate.getMonth()) + 1;//月份+1 因为月份从0开始
    var em = parseInt(endDate.getMonth()) + 1;

    //  alert("星期一的日期："+startDate.getFullYear()+"-"+sm+"-"+startDate.getDate());
    //  alert("星期日的日期："+endDate.getFullYear()+"-"+em+"-"+endDate.getDate());
    var start = startDate.getFullYear() + "-" + sm + "-" + startDate.getDate();
    var end = endDate.getFullYear() + "-" + em + "-" + endDate.getDate();
    var result = new Array();
    result.push(start);
    result.push(end);

    return result;
}

//以下几个函数是判断当前日期所对应的周数，如2017-1-1，为2017年第一周,return 1
/**
 * 判断年份是否为润年
 *
 * @param {Number} year
 */
commonTools.isLeapYear = function (year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}
/**
 * 获取某一年份的某一月份的天数
 *
 * @param {Number} year
 * @param {Number} month
 */
commonTools.getMonthDays = function (year, month) {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (commonTools.isLeapYear(year) ? 29 : 28);
}
/**
 * 获取某年的某天是第几周
 * @param {Number} y
 * @param {Number} m
 * @param {Number} d
 * @returns {Number}
 */
commonTools.getWeekNumber = function (y, m, d) {
    var now = new Date(y, m - 1, d),
        year = now.getFullYear(),
        month = now.getMonth(),
        days = now.getDate();
    //那一天是那一年中的第多少天
    for (var i = 0; i < month; i++) {
        days += commonTools.getMonthDays(year, i);
    }

    //那一年第一天是星期几
    var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

    var week = null;
    if (yearFirstDay == 1) {
        week = Math.ceil(days / yearFirstDay);
    } else {
        days -= (7 - yearFirstDay + 1);
        week = Math.ceil(days / 7) + 1;
    }

    return week;
}//计算周的范围结束

/*
*js获取当前指定的前几天的日期,往前推4天，GetDateStr(4)，后推4天GetDateStr(-4)
 */
commonTools.GetDateStr = function (AddDayCount, date) {
    var dd = new Date(date);
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0
    return y + "-" + m + "-" + d;
}

/*
*传入年，周数，获取周数对应的所有日期
 */
commonTools.getDayEveryDay = function (year, index) {  // ▲▲▲注意：跨年周为本年第一周！
    var d = new Date(year, 0, 1);

    while (d.getDay() != 1) { // ▲▲第一天如果不为周一，while(减一天）,直到为周一
        d.setDate(d.getDate() - 1);
    }
    var to = new Date(year + 1, 0, 1);

    var i = 1;
    var arr = [];
    for (var from = d; from < to;) {
        // console.log(from);
        if (i == index) {
            arr.push(from.getFullYear() + "-" + (from.getMonth() + 1) + "-" + from.getDate());
        }
        var j = 6;
        while (j > 0) {
            // console.log(j);
            from.setDate(from.getDate() + 1);
            if (i == index) {
                arr.push(from.getFullYear() + "-" + (from.getMonth() + 1) + "-" + from.getDate());
            }
            j--;
        }
        if (i == index) {
            return arr;
        }
        from.setDate(from.getDate() + 1);
        i++;
    }
}

commonTools.getDayEveryDay2 = function (year, index) {  // ▲▲▲注意：这个是以满周算第一周，跨年周为上年！
    var d = new Date(year, 0, 1);
    while (d.getDay() != 1) {  // ▲▲第一天如果不为周一，while(加一天）,直到为周一
        d.setDate(d.getDate() + 1);
    }
    var to = new Date(year + 1, 0, 1);
    var i = 1;
    var arr = [];
    for (var from = d; from < to;) {
        if (i == index) {
            arr.push(from.getFullYear() + "-" + (from.getMonth() + 1) + "-" + from.getDate());
        }
        var j = 6;
        while (j > 0) {
            from.setDate(from.getDate() + 1);
            if (i == index) {
                arr.push(from.getFullYear() + "-" + (from.getMonth() + 1) + "-" + from.getDate());
            }
            j--;
        }
        if (i == index) {
            return arr;
        }
        from.setDate(from.getDate() + 1);
        i++;
    }
}

// 当月的第几周
commonTools.getWeek_m = function (date) {
    // const getWeek = (date) => {
    let day = date.getDay();
    let no = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let week = Math.floor(no / 7);
    let remainder = no % 7;
    // 判断余数与周一的位置
    if (day !== 0 && day <= remainder) {
        week += 1;
    } else {
        if (week === 0) {
            // 求出上月最后一天是第几周即可
            // week=5;
            if (month === 1) {
                year -= 1;
                month = 12;
            } else {
                month -= 1;
            }
            let temDate = new Date(year, month, 0);
            let temDay = temDate.getDay();
            let temNo = temDate.getDate();
            week = Math.floor(temNo / 7);
            let temRremainder = temNo % 7;
            if (temDay !== 0 && temDay <= temRremainder) {
                week += 1;
            }
        }
    }
    let json = {
        year: year,
        month: month,
        week: week,
    };
    return json;
}

////////////////////// 遍历某年的各周日期范围(开始)

// ////////// 周处理（by day）
commonTools.weekDate_byday = function (year) {
    let arr_temp = [];
    let temp;
    let start;
    let end;
    let index1 = 1;
    // console.log(year);

    for (let i of commonTools.createWeeks(year)) {

        start = i[0];
        end = i[1];
        if (index1 == 1 && (end - start) < 518400000) {
            start = end - 518400000;
        }
        // let ifCross = false;
        if (index1 != 1 && (end - start) > 518400000) {
            // ifCross = true;
            end = start + 518400000;
        }

        // console.log(i);
        // console.log(commonTools.formatDate3(start));
        // console.log(commonTools.formatDate3(end));
        temp = {
            // value: String(year) + "选项" + String(index1),
            value: String(year) + "&" + String(index1) + "week" + "*" + commonTools.formatDate3(start) + "*" + commonTools.formatDate3(end),
            label: String(year) + `年第${commonTools.formatDig(
                index1++
            )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        };
        arr_temp.push(temp);
        // if (ifCross) {
        //     start += 518400000 / 6 * 7;
        //     end = start + 518400000;
        //     temp = {
        //         // value: String(year) + "选项" + String(index1),
        //         value: String(year) + "&" + String(index1) + "week" + "*" + commonTools.formatDate3(start) + "*" + commonTools.formatDate3(end),
        //         label: String(year) + `年第${commonTools.formatDig(
        //             index1++
        //         )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        //     };
        //     arr_temp.push(temp);
        // }
    }
    return arr_temp
}

// 传入年 与 累加数据
commonTools.weekDate_add_byday = function (year, arr_temp) {
    let temp;
    let start;
    let end;
    let index1 = 1;
    // console.log(year);
    for (let i of commonTools.createWeeks(year)) {
        start = i[0];
        end = i[1];
        if (index1 == 1 && (end - start) < 518400000) {
            start = end - 518400000;
        }
        // let ifCross = false;
        if (index1 != 1 && (end - start) > 518400000) {
            // ifCross = true;
            end = start + 518400000;
        }
        // console.log(i);
        // console.log(commonTools.formatDate3(start));
        // console.log(commonTools.formatDate3(end));
        temp = {
            // value: String(year) + "选项" + String(index1),
            value: String(year) + "&" + String(index1) + "week" + "*" + commonTools.formatDate3(start) + "*" + commonTools.formatDate3(end),
            label: String(year) + `年第${commonTools.formatDig(
                index1++
            )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        };
        arr_temp.push(temp);
        // if (ifCross) {
        //     start += 518400000 / 6 * 7;
        //     end = start + 518400000;
        //     temp = {
        //         // value: String(year) + "选项" + String(index1),
        //         value: String(year) + "&" + String(index1) + "week" + "*" + commonTools.formatDate3(start) + "*" + commonTools.formatDate3(end),
        //         label: String(year) + `年第${commonTools.formatDig(
        //             index1++
        //         )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        //     };
        //     arr_temp.push(temp);
        // }
    }
    return arr_temp
}

// ////////// 周处理（by week）
// 传入年
commonTools.weekDate = function (year) {
    let arr_temp = [];
    let temp;
    let start;
    let end;
    let index1 = 1;
    for (let i of commonTools.createWeeks(year)) {
        start = i[0];
        end = i[1];
        if (index1 == 1 && (end - start) < 518400000) {
            start = end - 518400000;
        }
        if (index1 != 1 && (end - start) > 518400000) {
            end = start + 518400000;
        }
        temp = {
            // value: String(year) + "选项" + String(index1),
            value: String(year) + "&" + String(index1) + "week",
            label: String(year) + `年第${commonTools.formatDig(
                index1++
            )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        };
        arr_temp.push(temp);
    }
    return arr_temp
}
// 传入年 与 累加数据
commonTools.weekDate_add = function (year, arr_temp) {
    let temp;
    let start;
    let end;
    let index1 = 1;
    for (let i of commonTools.createWeeks(year)) {
        start = i[0];
        end = i[1];
        if (index1 == 1 && (end - start) < 518400000) {
            start = end - 518400000;
        }
        if (index1 != 1 && (end - start) > 518400000) {
            end = start + 518400000;
        }
        temp = {
            // value: String(year) + "选项" + String(index1),
            value: String(year) + "&" + String(index1) + "week",
            label: String(year) + `年第${commonTools.formatDig(
                index1++
            )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        };
        arr_temp.push(temp);
    }
    return arr_temp
}


// 格式（不大于9给0）
commonTools.formatDig = function (num) {
    return num > 9 ? '' + num : '0' + num;
}
// 输出格式1
commonTools.formatDate = function (mill) {
    var y = new Date(mill);
    let raws = [
        y.getFullYear(),
        commonTools.formatDig(y.getMonth() + 1),
        commonTools.formatDig(y.getDate()),
        y.getDay() || 7
    ];
    let format = ['年', '月', '日 星期'];
    return String.raw({ raw: raws }, ...format);
}
// 输出格式2
commonTools.formatDate2 = function (mill) {
    var y = new Date(mill);
    let raws = [
        y.getFullYear(),
        commonTools.formatDig(y.getMonth() + 1),
        commonTools.formatDig(y.getDate()),
        ""
    ];
    let format = ['年', '月', '日'];

    return String.raw({ raw: raws }, ...format); // 参数 4夹3
    // eg：
    //    String.raw({ raw: ['t', 'e', 's', 't'] }, 0, 1, 2);
    //    返回的是't0e1s2t'
}
// 输出格式3
commonTools.formatDate3 = function (mill) {
    var y = new Date(mill);
    let raws = [
        y.getFullYear(),
        commonTools.formatDig(y.getMonth() + 1),
        commonTools.formatDig(y.getDate()),
        ""
    ];
    let format = ['-', '-', ''];
    return String.raw({ raw: raws }, ...format);
}
// 第几周
commonTools.createWeeks = function* (year) {
    const ONE_DAY = 24 * 3600 * 1000;
    let start = new Date(year, 0, 1),
        end = new Date(year, 11, 31);
    let firstDay = start.getDay() || 7,
        lastDay = end.getDay() || 7;
    let startTime = +start,
        endTime = startTime + (7 - firstDay) * ONE_DAY,
        _endTime = end - (7 - lastDay) * ONE_DAY;
    yield [startTime, endTime];
    startTime = endTime + ONE_DAY;
    endTime = endTime + 7 * ONE_DAY;
    while (endTime < _endTime) {
        yield [startTime, endTime];
        startTime = endTime + ONE_DAY;
        endTime = endTime + 7 * ONE_DAY;
    }
    yield [startTime, +end];
}

////////////////////// 遍历某年的各周日期范围(收尾)

//传入年份和月份 获取该年对应月份的天数
commonTools.getMonthDays = function (year, month) {
    var thisDate = new Date(year, month, 0); //当天数为0 js自动处理为上一月的最后一天
    return thisDate.getDate();
}

// 传入年份 获取1~12月的日期范围
commonTools.getMonthDays_y = function (year) {
    let monthDaysArr = [];
    let monthDays = {
        firstDay: [],
        lastDay: []
    }
    let temp_date1;
    let temp_date2;
    let month = 1;
    let length = 12;

    for (month; month <= length; month++) {
        monthDaysArr.push(commonTools.getMonthDays(year, month));
        temp_date1 = new Date(Date.UTC(year, month - 1, 1));
        temp_date2 = new Date(Date.UTC(year, month - 1, commonTools.getMonthDays(year, month)));
        // monthDays.firstDay.push(temp_date1);
        // monthDays.lastDay.push(temp_date2);

        monthDays.firstDay.push(commonTools.dateFormat(temp_date1));
        monthDays.lastDay.push(commonTools.dateFormat(temp_date2));
    }
    // return monthDaysArr;
    return monthDays;
}

// /////// // /////// // /////// // /////// // /////// // /////// 
// /////// // /////// // /////// // /////// // /////// // /////// 

// /////// ▲▲▲ 显示格式 - 月 up（by day by week by month）
// 显示值： 4.1~4.30  xweek~(x+3)week 4month 1~4month  (特殊处理 1 2 3 )
// format_MonthDays_byDayWeekMonthMonthrange
// monthsRange 时间范围（用于处理月范围：eg：传入范围4 5-1234 4-1234 3-123）
commonTools.manageTIMEsRange = function (currentTIME, TIMEsRange) {
    let start;
    let differ = currentTIME - (TIMEsRange - 1);
    if (differ < 1) {
        start = 1;
    }
    else {
        start = differ
    }
    return {
        start: start,
        end: currentTIME
    }
}
commonTools.format_MonthDays_byDWMMr = function (year, monthsRange) {
    let monthDays = commonTools.getMonthDays_y(year);
    let m_format = [];
    let length = 12;
    let i;
    let temp;
    let t_week_arr;
    let t_week_arr_length
    let monthsRange_sAe;
    for (i = 1; i <= length; i++) {
        t_week_arr = commonTools.get_YweeksRange_InMonth(year, i);
        t_week_arr_length = t_week_arr.length;
        monthsRange_sAe = commonTools.manageTIMEsRange(i, monthsRange);
        temp = {
            // value: "(" + "&" + String(year) + "&" + String(i) + "month" + "&" + "@" + monthDays.firstDay[i - 1] + "@" + monthDays.lastDay[i - 1] + "@" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[3]) + "week" + "*" + "^" + String(monthsRange_sAe.start) + "month" + "^" + String(monthsRange_sAe.end) + "month" + "^" + ")",
            // label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[3] + "周" + ")"
            value: "(" + "&" + String(year) + "&" + String(i) + "month" + "&" + "@" + monthDays.firstDay[i - 1] + "@" + monthDays.lastDay[i - 1] + "@" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[t_week_arr_length - 1]) + "week" + "*" + "^" + String(monthsRange_sAe.start) + "month" + "^" + String(monthsRange_sAe.end) + "month" + "^" + ")",
            label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[t_week_arr_length - 1] + "周" + ")"
        }
        m_format.push(temp);
    }
    return m_format;
}
commonTools.format_MonthDays_byDWMMr_add = function (year, monthsRange, m_format_get) {
    let monthDays = commonTools.getMonthDays_y(year);
    let m_format = [];
    for (let j = 0; j < m_format_get.length; j++) {
        m_format.push(m_format_get[j]);
    }
    let length = 12;
    let i;
    let temp;
    let t_week_arr;
    let t_week_arr_length
    let monthsRange_sAe;
    for (i = 1; i <= length; i++) {
        t_week_arr = commonTools.get_YweeksRange_InMonth(year, i);
        t_week_arr_length = t_week_arr.length;
        monthsRange_sAe = commonTools.manageTIMEsRange(i, monthsRange);
        temp = {
            // value: "(" + "&" + String(year) + "&" + String(i) + "month" + "&" + "@" + monthDays.firstDay[i - 1] + "@" + monthDays.lastDay[i - 1] + "@" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[3]) + "week" + "*" + "^" + String(monthsRange_sAe.start) + "month" + "^" + String(monthsRange_sAe.end) + "month" + "^" + ")",
            // label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[3] + "周" + ")"
            value: "(" + "&" + String(year) + "&" + String(i) + "month" + "&" + "@" + monthDays.firstDay[i - 1] + "@" + monthDays.lastDay[i - 1] + "@" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[t_week_arr_length - 1]) + "week" + "*" + "^" + String(monthsRange_sAe.start) + "month" + "^" + String(monthsRange_sAe.end) + "month" + "^" + ")",
            label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[t_week_arr_length - 1] + "周" + ")"
        }
        m_format.push(temp);
    }
    return m_format;
}
// /////// 切割单个value的内容=》 format_MonthDays_byDWMMr format_MonthDays_byDWMMr_add
commonTools.split_MonthDays_byDWMMr = function (str) {
    let arr1;  // & 1-年  2-月
    let arr2;  // @ 1-日s 2-日e
    let arr3;  // * 1-周s 2-周e
    let arr4;  // ^ 1-月s 2-月e
    arr1 = str.split("&");
    arr2 = str.split("@");
    arr3 = str.split("*");
    arr4 = str.split("^");

    let year = arr1[1];
    let month = arr1[2];
    let month_day_start = arr2[1];
    let month_day_end = arr2[2];
    let month_week_start = arr3[1];
    let month_week_end = arr3[2];
    let monthsRange_start = arr4[1];
    let monthsRange_end = arr4[2];

    return {
        year: year,
        month: month,
        month_day_start: month_day_start,
        month_day_end: month_day_end,
        month_week_start: month_week_start,
        month_week_end: month_week_end,
        monthsRange_start: monthsRange_start,
        monthsRange_end: monthsRange_end
    }
}



// /////// // /////// // /////// // /////// // /////// // /////// 
// /////// // /////// // /////// // /////// // /////// // /////// 

commonTools.format_WeeksDays_byDWwr = function (year, weeksRange) {
    let arr_temp = [];
    let temp;
    let start;
    let end;
    let index1 = 1;
    let weeksRange_sAe;

    for (let i of commonTools.createWeeks(year)) {
        weeksRange_sAe = commonTools.manageTIMEsRange(index1, weeksRange);

        start = i[0];
        end = i[1];
        if (index1 == 1 && (end - start) < 518400000) {
            start = end - 518400000;
        }
        if (index1 != 1 && (end - start) > 518400000) {
            end = start + 518400000;
        }
        temp = {

            value: "(" + "&" + String(year) + "&" + String(index1) + "week" + "&" + "@" + commonTools.formatDate3(start) + "@" + commonTools.formatDate3(end) + "@" + "*" + String(weeksRange_sAe.start) + "week" + "*" + String(weeksRange_sAe.end) + "week" + "*" + ")",
            label: String(year) + `年第${commonTools.formatDig(
                index1++
            )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        };
        arr_temp.push(temp);
    }
    return arr_temp
}
commonTools.format_WeeksDays_byDWwr_add = function (year, weeksRange, arr_temp) {
    // let arr_temp = [];
    let temp;
    let start;
    let end;
    let index1 = 1;
    let weeksRange_sAe;

    for (let i of commonTools.createWeeks(year)) {
        weeksRange_sAe = commonTools.manageTIMEsRange(index1, weeksRange);

        start = i[0];
        end = i[1];
        if (index1 == 1 && (end - start) < 518400000) {
            start = end - 518400000;
        }
        if (index1 != 1 && (end - start) > 518400000) {
            end = start + 518400000;
        }
        temp = {
            value: "(" + "&" + String(year) + "&" + String(index1) + "week" + "&" + "@" + commonTools.formatDate3(start) + "@" + commonTools.formatDate3(end) + "@" + "*" + String(weeksRange_sAe.start) + "week" + "*" + String(weeksRange_sAe.end) + "week" + "*" + ")",
            label: String(year) + `年第${commonTools.formatDig(
                index1++
            )}周 ${commonTools.formatDate3(start)}-${commonTools.formatDate3(end)}`
        };
        arr_temp.push(temp);
    }
    return arr_temp
}
// (&2019&26week&@2019-06-24@2019-06-30@*23week*26week*)
commonTools.split_WeeksDays_byDWwr = function (str) {
    let arr1;  // & 1-年  2-周
    let arr2;  // @ 1-日s 2-日e
    let arr3;  // * 1-周s 2-周e
    arr1 = str.split("&");
    arr2 = str.split("@");
    arr3 = str.split("*");
    let year = arr1[1];
    let week = arr1[2];
    let week_day_start = arr2[1];
    let week_day_end = arr2[2];
    let weeksRange_start = arr3[1];
    let weeksRange_end = arr3[2];
    return {
        year: year,
        week: week,
        week_day_start: week_day_start,
        week_day_end: week_day_end,
        weeksRange_start: weeksRange_start,
        weeksRange_end: weeksRange_end
    }
}




// /////// // /////// // /////// // /////// // /////// // /////// 
// /////// // /////// // /////// // /////// // /////// // /////// 
// /////// 显示格式 - 月（by day）
// 某年1~12月（下拉框数据格式）
commonTools.format_MonthDays = function (year) {

    let monthDays = commonTools.getMonthDays_y(year);

    let m_format = [];
    let length = 12;
    let i;
    let temp;
    for (i = 1; i <= length; i++) {
        temp = {
            // /// PS: value对应 api值 ， label对应显示
            // value: String(year) + "选项" + String(i),
            value: String(year) + "&" + String(i) + "month", // 拆分年&周（月），分割&即可
            label: String(year) + "年" + String(i) + "月" + "(" + monthDays.firstDay[i - 1] + "至" + monthDays.lastDay[i - 1] + ")"
        }
        m_format.push(temp);
    }
    return m_format;

}
// 某年1~12月（下拉框数据格式） 与 累加
commonTools.format_MonthDays_add = function (year, m_format) {
    let monthDays = commonTools.getMonthDays_y(year);
    // let m_format = [];
    let length = 12;
    let i;
    let temp;
    for (i = 1; i <= length; i++) {
        temp = {
            // value: String(year) + "选项" + String(i),
            value: String(year) + "&" + String(i) + "month",
            label: String(year) + "年" + String(i) + "月" + "(" + monthDays.firstDay[i - 1] + "至" + monthDays.lastDay[i - 1] + ")"
        }
        m_format.push(temp);
    }
    return m_format;
}


// /////// 显示格式 - 月（by week）
// 某年1~12月（下拉框数据格式）
commonTools.format_MonthDays_byweek = function (year) {
    let m_format = [];
    let length = 12;
    let i;
    let temp;
    let t_week_arr;
    let t_week_arr_length
    for (i = 1; i <= length; i++) {
        t_week_arr = commonTools.get_YweeksRange_InMonth(year, i);
        // console.log(t_week_arr);
        t_week_arr_length = t_week_arr.length;
        temp = {
            // value: String(year) + "&" + String(i) + "month" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[3]) + "week",
            // 会有跨6周的情况
            value: String(year) + "&" + String(i) + "month" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[t_week_arr_length - 1]) + "week",
            // label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[3] + "周" + ")"
            label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[t_week_arr_length - 1] + "周" + ")"

        }
        m_format.push(temp);
    }
    return m_format;

}
// 某年1~12月（下拉框数据格式） 与 累加
commonTools.format_MonthDays_add_byweek = function (year, m_format) {
    // let m_format = [];
    let length = 12;
    let i;
    let temp;
    let t_week_arr;
    let t_week_arr_length
    for (i = 1; i <= length; i++) {
        t_week_arr = commonTools.get_YweeksRange_InMonth(year, i);
        t_week_arr_length = t_week_arr.length;
        temp = {
            // value: String(year) + "&" + String(i) + "month" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[3]) + "week",
            value: String(year) + "&" + String(i) + "month" + "*" + String(t_week_arr[0]) + "week" + "*" + String(t_week_arr[t_week_arr_length - 1]) + "week",
            // label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[3] + "周" + ")"
            label: String(year) + "年" + String(i) + "月" + "(" + t_week_arr[0] + "周" + "至" + t_week_arr[t_week_arr_length - 1] + "周" + ")"
        }
        m_format.push(temp);
    }
    return m_format;
}

/////////////////////// 某月的四周取前四周（一个月一般跨5周）
/////////////////////// （也就是第四周是满周，第一周可能是跨月周）

// 获取(年的)周范围-在某个月中
commonTools.get_YweeksRange_InMonth = function (year, month) {

    // 2018年第01周 2018-01-01-2018-01-07
    // 2018&1week

    // 先获取改年的周-列表
    let week_arr = commonTools.weekDate(year);  // ▲这里 weekDate 涉及 518400000 的更改（当前定义：跨年周属于本年）

    let length = week_arr.length;
    let i;
    let per_split_label = [];
    let per_split_label_1 = [];
    let per_split_label_1_2 = [];
    let index_arr = [];
    for (i = 0; i < length; i++) {
        per_split_label.push(week_arr[i].label.split("-"));
        per_split_label_1.push(per_split_label[i][0].split("第"))
        per_split_label_1_2.push(per_split_label_1[i][1].split("周"))
        // console.log("~~~~~~");
        // console.log(per_split_label[i]);

        // ▲满周为月第一周 （跨月周判定：周一所在月 <= 当月 && 周日所在月 == 当月 ）  =>  还需要改根源 weekDate
        // // if (parseInt(per_split_label[i][1]) <= parseInt(month) && parseInt(per_split_label[i][4]) == parseInt(month)) {
        // //     index_arr.push(i + 1); // 序数 变成 第几周
        // // }
        // if (parseInt(per_split_label[i][1]) == parseInt(month) ) {
        //     index_arr.push(i + 1); // 序数 变成 第几周
        // }

        // ▲跨月周（非满周）为月第一周
        if (parseInt(per_split_label[i][4]) == parseInt(month)) {
            index_arr.push(i + 1); // 序数 变成 第几周
        }


    }
    return index_arr;
}

// //////////////// 复选框 =》（单选框 或 复选框）
// 原-多选换单选

commonTools.delete_repet_origin = function (val_new, val_old) {

    // 数组去重
    // console.log(val_new);
    // console.log(val_old);

    //做比较的两个数组
    // var array_new = ["a", "b", "c", "d", "e"]; //数组1
    // var array_old = ["d", "f", "e", "a", "p"]; //数组2
    var array_new = val_new; //数组1
    var array_old = val_old; //数组2
    if (array_new == array_old) {
        // console.log(array_new);
        return array_new;
    }
    //临时数组存放
    var tempArray_new = []; //临时数组1
    var tempArray_old = []; //临时数组2
    for (var i = 0; i < array_old.length; i++) {
        tempArray_new[array_old[i]] = true; //将数array_old 中的元素值作为tempArray_new 中的键，值为true；
    }

    for (var i = 0; i < array_new.length; i++) {
        if (!tempArray_new[array_new[i]]) {
            tempArray_old.push(array_new[i]); //过滤array_new 中与array_old 相同的元素；
        }
    }
    // console.log(tempArray_old);
    // ▲解决：复选框去重-一去一来，包含内容相同（不管顺序）
    if (tempArray_old.length == 0 && array_new.length == 2) { // 原长度都是2，顺序不同但内容相同
        // console.log("~~~0 2 1")
        // console.log(array_new[1])
        let my_tempArr = [];
        my_tempArr.push(array_new[1])
        return my_tempArr;  // 则返回 新（第）2 或者 旧（第）1
    }
    return tempArray_old;
}

// 取消-多选换单选-返回正常选择值
commonTools.delete_repet = function (val_new, val_old) {
    return val_new;

}

export {
    commonTools
}