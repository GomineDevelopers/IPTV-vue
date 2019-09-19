

const commonTools = {}



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
            value: String(year) + "选项" + String(index1),
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
            value: String(year) + "选项" + String(index1),
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
            value: String(year) + "选项" + String(i),
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
            value: String(year) + "选项" + String(i),
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