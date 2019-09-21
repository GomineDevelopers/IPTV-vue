

const commonTools = {}






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


// 时间格式转换
// Wed Sep 11 2019 00:00:00 GMT+0800 (中国标准时间),Wed Oct 16 2019 00:00:00 GMT+0800 (中国标准时间)
// =》 2019-09-11   2019-10-16
commonTools.split_picker = function (str) {
    let time_arr = str.split(",");
    let t1 = time_arr[0];
    let t2 = time_arr[1];
    t1 = commonTools.dayChange(t1);
    t2 = commonTools.dayChange(t2);
    return {
        start: t1,
        end: t2
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
} //返回小时 
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

// $(
//     function () {
//         $("#add").click(function () {
//             var client = {
//                 "client_name": $('#client_name').val(),
//                 "client_id": $('#client_id').val(),
//                 "client_sex": $("input[name='client_sex']:checked").val(),
//                 "client_birthday": dateFormat($('#client_birthday').datebox('getValue')),
//                 "client_address": $('#client_address').val(),
//                 "room_no": $('#room_no').val(),
//                 "isVip": $("input[name='isVip']:checked").val(),
//                 "check_in": datetimeFormat($('#check_in').datetimebox('getValue'))
//             }
//             console.log(client)
//             $.post("../insertClient.action", client, function (flag) {
//                 if ("OK" == flag) {
//                     window.location.href = "allRoomsInfo.jsp";
//                 }
//             })
//         })
//     }
// ) 

// 当年的第几周
commonTools.getWeek_y = function (date) {
    let d1 = new Date(date);
    let d2 = new Date(date);
    d2.setMonth(0);
    d2.setDate(1);
    let rq = d1 - d2;
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
    let num = Math.ceil(days / 7);
    return num;
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
    // console.log("~~~raws:");
    // console.log(raws);

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

////////////////////// 
// 分割自定义时间格式
// 处理 2018&3week 类似格式，返回 year 和 time(week或month)
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
        // console.log(year)
        // console.log(month)
        // console.log(commonTools.getMonthDays(year, month))
    }
    // console.log(monthDaysArr);

    // return monthDaysArr;
    return monthDays;
}

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