
import Vue from "vue";
import store from '@/store'

/* eslint-disable */
require('script-loader!file-saver');
require('script-loader!./Blob');

require('script-loader!xlsx/dist/xlsx.core.min');
function generateArray(table) {
    var out = [];
    var rows = table.querySelectorAll('tr');
    var ranges = [];
    for (var R = 0; R < rows.length; ++R) {
        var outRow = [];
        var row = rows[R];
        var columns = row.querySelectorAll('td');
        for (var C = 0; C < columns.length; ++C) {
            var cell = columns[C];
            var colspan = cell.getAttribute('colspan');
            var rowspan = cell.getAttribute('rowspan');
            var cellValue = cell.innerText;
            if (cellValue !== "" && cellValue == +cellValue) cellValue = +cellValue;

            ranges.forEach(function (range) {
                if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
                    for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
                }
            });
            if (rowspan || colspan) {
                rowspan = rowspan || 1;
                colspan = colspan || 1;
                ranges.push({ s: { r: R, c: outRow.length }, e: { r: R + rowspan - 1, c: outRow.length + colspan - 1 } });
            }
            ;
            outRow.push(cellValue !== "" ? cellValue : null);
            if (colspan) for (var k = 0; k < colspan - 1; ++k) outRow.push(null);
        }
        out.push(outRow);
    }
    return [out, ranges];
};

function datenum(v, date1904) {
    if (date1904) v += 1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
    var ws = {};
    var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
    for (var R = 0; R != data.length; ++R) {
        for (var C = 0; C != data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R;
            if (range.s.c > C) range.s.c = C;
            if (range.e.r < R) range.e.r = R;
            if (range.e.c < C) range.e.c = C;
            // var cell = { v: data[R][C] };
            var cell;
            let temp_data = data[R][C];
            if (typeof (temp_data) == "object") {
                cell = { v: JSON.stringify(data[R][C]) };
            } else {
                cell = { v: String(data[R][C]) }; // 其他：统一字符串！
            }
            console.log(data[R][C]);
            if (cell.v == null) continue;
            var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

            if (typeof cell.v === 'number') cell.t = 'n';
            else if (typeof cell.v === 'boolean') cell.t = 'b';
            else if (cell.v instanceof Date) {
                cell.t = 'n';
                cell.z = XLSX.SSF._table[14];
                cell.v = datenum(cell.v);
            }
            else cell.t = 's';
            ws[cell_ref] = cell;
        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
    return ws;
}


function sheet_from_array_of_arrays_Arr(titleArr, dataArr, opts) {
    let m_length = dataArr.length;
    let ws = {};
    let data = [];
    for (let m_j = 0; m_j < m_length; m_j++) {
        if (titleArr[m_j] != "") {
            data.push(titleArr[m_j]);
        }
        for (let c_i = 0; c_i < dataArr[m_j].length; c_i++) {
            data.push(dataArr[m_j][c_i]);
        }
    }
    let range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
    for (let R = 0; R != data.length; ++R) {
        if (data[R] == undefined || data[R].length == 0) { 
            // do nothing. 
        }   
        else {
            for (let C = 0; C < data[R].length; C++) {
                // 初始化实际长度 - start大于x则start取x（），end小于x则end取x
                if (range.s.r > R) range.s.r = R;
                if (range.s.c > C) range.s.c = C;
                if (range.e.r < R) range.e.r = R;
                if (range.e.c < C) range.e.c = C;

                // let cell = { v: data[R][C] }; 
                let cell;
                let temp_data = data[R][C];
                if (typeof (temp_data) == "object") {
                    cell = { v: JSON.stringify(data[R][C]) };
                } else {
                    cell = { v: String(data[R][C]) }; // 其他：统一字符串！
                }
                // console.log(data[R][C]);
                if (cell.v == null) continue;
                let cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

                if (typeof cell.v === 'number') cell.t = 'n';
                else if (typeof cell.v === 'boolean') cell.t = 'b';
                else if (cell.v instanceof Date) {
                    cell.t = 'n';
                    cell.z = XLSX.SSF._table[14];
                    cell.v = datenum(cell.v);
                }
                else cell.t = 's';
                ws[cell_ref] = cell;
            }
        }

    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
    return ws;
}

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}

function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

export function export_table_to_excel(id) {
    var theTable = document.getElementById(id);
    var oo = generateArray(theTable);
    var ranges = oo[1];

    var data = oo[0];
    var ws_name = "SheetJS";

    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);

    ws['!merges'] = ranges;

    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });

    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), "test.xlsx")
}

function formatJson(jsonData) {
    console.log(jsonData)
}

// origin
export function export_json_to_excel(th, jsonData, defaultTitle) {

    var data = jsonData;
    data.unshift(th);
    var ws_name = "SheetJS";

    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);


    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    var title = defaultTitle || '列表'
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
}


export function export_json_to_excel_new(titleArr, dataArr, defaultTitle) {
    var ws_name = "SheetJS";

    var wb = new Workbook(), ws = sheet_from_array_of_arrays_Arr(titleArr, dataArr);

    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    var title = defaultTitle || '列表'
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
    store
        .dispatch("set_PR_excel_DownloadingStatus", 0)
        .then(function (response) { console.log("下载完成") })
        .catch(function (error) {
            console.info(error);
        });
}

export function export_json_to_excel_test2(th, jsonData, defaultTitle) {
}
export function export_json_to_excel_plural(th, th2, jsonData, jsonData2, defaultTitle) {
}
export function export_json_to_excel_plural2(th, th2, jsonData, jsonData2, defaultTitle) {
}
export function exportExcel(titleArr, DataArr, defaultTitle) {

    store
        .dispatch("set_PR_downloadNum_parent", titleArr.length)
        .then(function (response) {
            // console.log(response);
        })
        .catch(function (error) {
            console.info(error);
        });

    // return; // 数据检测

    var rowString = ["A", "B", "C", "..."];
    var rowString_length_setting = 32;
    rowString = rowStringManage(rowString_length_setting);
    function compute_datumMark(length) {
        let remainder = length % 26;
        let quotient = parseInt(length / 26);
        let datumMark = 0;
        if (quotient == 0) {
            datumMark = 1;
        }
        if (quotient == 1 && remainder == 0) {
            datumMark = 1;
        }
        if (quotient >= 1 && quotient <= 27) {
            if (quotient == 1 && remainder != 0) {
                datumMark = 2;
            }
            if (quotient == 27 && remainder == 0) {
                datumMark = 2;
            }
            if (quotient > 1 && quotient < 27) {
                datumMark = 2;
            }
        }
        return datumMark;
    }
    function rowStringManage(length) {
        let arr = [];
        let remainder = length % 26;
        let quotient = parseInt(length / 26);
        let str_row = "";
        let datumMark = compute_datumMark(length);
        let mlength = quotient;
        if (remainder != 0) {
            mlength += 1;
        }
        for (let i = 0; i < mlength; i++) {
            for (let j = 0; j < 26; j++) {
                if (i == 0) {
                    arr.push(String.fromCharCode(65 + j))
                }
                if (i > 0 && i < 27) {
                    if (datumMark == 2) {
                        if (remainder != 0 && j < remainder) {
                            arr.push(arr[i - 1] + String.fromCharCode(65 + j))
                        }
                    }
                }
            }
        }
        return arr;
    }
    function compute_Object_range(obj) {
        let title_arr = [];
        let num_arr = [];
        let length = Object.getOwnPropertyNames(obj).length;
        for (let i = 0; i < length; i++) {
            let per_title = Object.getOwnPropertyNames(obj)[i];
            if (per_title != "!ref") {
                let split_arr = per_title.split("");
                let split_arr_num = per_title.split(split_arr[0]);
                if (title_arr.indexOf(split_arr[0]) == -1) {
                    title_arr.push(split_arr[0]);
                    num_arr.push(parseInt(split_arr_num[1]));
                }
                else {
                    for (let j = 0; j < title_arr.length; j++) {
                        if (title_arr[j] == split_arr[0]) {
                            if (num_arr[j] < parseInt(split_arr_num[1])) {
                                Vue.set(num_arr, j, parseInt(split_arr_num[1]))
                            }
                        }
                    }
                }
            }
        }
        return {
            title_arr: title_arr,
            num_arr: num_arr
        }
    }
    function LetterM(letter, num) {
        return letter + String(num);
    }
    function ref_manageS(letter, num) {
        return "A1:" + letter + String(num);
    }
    function mix_two_obejctUp(_obj1, _obj2, _Object_range1, _Object_range2) {
        let obj1 = {};
        let obj2 = {};
        let Object_range1 = {};
        let Object_range2 = {};
        obj1 = _obj1;
        obj2 = _obj2;
        Object_range1 = _Object_range1;
        Object_range2 = _Object_range2;
        let obj3 = new Object();
        obj3 = Object.assign({}, obj1);
        let obj1_title_arr_length = Object_range1.title_arr.length;
        let obj2_title_arr_length = Object_range2.title_arr.length;
        let obj3_title_arr = [];
        let min_length;
        let max_length;
        if (obj1_title_arr_length >= obj2_title_arr_length) {
            obj3_title_arr = Object_range1.title_arr;
            min_length = obj2_title_arr_length;
            max_length = obj1_title_arr_length;
        }
        else {
            obj3_title_arr = Object_range2.title_arr;
            min_length = obj1_title_arr_length;
            max_length = obj2_title_arr_length;
        }
        for (let i = 0; i < min_length; i++) {
            for (let j = 0; j < Object_range2.num_arr[i]; j++) {
                if (obj3_title_arr[i] == "A") {
                    if (j == 0) {
                        let L1 = LetterM("A", Object_range1.num_arr[i] + 1);
                        let L2 = LetterM("A", 1);
                        obj3[L1] = obj2[L2];
                    }
                    else {
                        let L1 = LetterM("A", Object_range1.num_arr[i] + j + 1)
                        let L2 = LetterM("A", j + 1);
                        obj3[L1] = obj2[L2];

                    }
                }
                else {
                    let current_letter = obj3_title_arr[i];
                    let L1 = LetterM(current_letter, Object_range1.num_arr[i] + j + 1);
                    let L2 = LetterM(current_letter, j + 1);
                    obj3[L1] = obj2[L2]
                }
            }
        }
        let obj3_num_arr = Object_range2.num_arr;
        if (obj1_title_arr_length < obj2_title_arr_length) {
            for (let k = min_length; k < max_length; k++) {
                for (let n = 0; n < obj3_num_arr[k]; n++) {
                    let current_letter = obj3_title_arr[k];
                    let L1 = LetterM(current_letter, Object_range1.num_arr[0] + n + 1);
                    let L2 = LetterM(current_letter, n + 1);
                    obj3[L1] = obj2[L2]
                }
            }
        }

        let obj3_num_arr0 = Object_range2.num_arr[0];
        if (obj1_title_arr_length > obj2_title_arr_length) {
            for (let k = min_length; k < max_length; k++) {
                for (let n = 0; n < obj3_num_arr0; n++) {
                    let current_letter = obj3_title_arr[k];
                    let L1 = LetterM(current_letter, Object_range1.num_arr[0] + n + 1);
                    obj3[L1] = "-";
                }
            }
        }
        let max_letter = "";
        let max_num = 0;
        max_letter = obj3_title_arr[obj3_title_arr.length - 1];
        obj3["!ref"] = ref_manageS(max_letter, max_num);
        return {
            obj: obj3,
            max_letter: max_letter
        };
    }
    let arr_length = titleArr.length;
    let titleA1 = new Array();
    let titleA2 = new Array();
    let data1 = new Array();
    let data2 = new Array();
    let ws1 = new Object();
    let ws2 = new Object();
    let objResult = new Object();
    let Object_range1 = {};
    let Object_range2 = {};
    let max_letter = "";
    if (arr_length == 0) {
        return;
    }
    if (arr_length == 1) {
        store
            .dispatch("set_PR_downloadNum_child", 1)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.info(error);
            });

        titleA1 = titleArr[0];
        data1 = [];
        if (DataArr[0] == undefined) {
            console.log("undefined: " + String(0));
            data1.push([]);
        } else {
            if (DataArr[0].length == 0) {
                data1.push([]);
            } else {
                for (let n = 0; n < DataArr[0].length; n++) {
                    data1.push(DataArr[0][n]);
                }
            }
        }
        if (titleA1[0] != "") {
            data1.unshift(titleA1);
        }
        else {
        }
        ws1 = Object.assign({}, sheet_from_array_of_arrays(data1));
        let temp_obj = Object.assign({}, ws1);
        objResult = temp_obj;
        let ws_name = "SheetJS";
        let wb = new Workbook();
        wb.SheetNames.push(ws_name);
        wb.Sheets[ws_name] = objResult;
        let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
        let title = defaultTitle || '列表'
        saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
        return;
    }
    if (arr_length > 1) {
        for (let i_arr = 0; i_arr < arr_length; i_arr++) {
            console.log(i_arr);
            // function currentSchedule() {
            //     console.log(i_arr);
            //     store
            //         .dispatch("set_PR_downloadNum_parent", i_arr)
            //         .then(function (response) {
            //             // console.log(response);
            //             console.log("~~~~~：" + String(i_arr));
            //         })
            //         .catch(function (error) {
            //             console.info(error);
            //         });
            //     if (i_arr == arr_length - 1) {
            //         clearInterval(currentSchedule);
            //     }
            // }
            // if (i_arr == 0) { // do x1
            //     setInterval(currentSchedule, 1);
            // }
            if (i_arr == 0) {
                titleA1 = titleArr[i_arr];
                data1 = [];
                if (DataArr[i_arr] == undefined) {
                    console.log("undefined: " + String(i_arr));
                    data1.push([]);
                }
                else {
                    if (DataArr[i_arr].length == 0) {
                        data1.push([]);
                    } else {
                        for (let n = 0; n < DataArr[i_arr].length; n++) {
                            data1.push(DataArr[i_arr][n]);
                        }
                    }
                }
                if (titleA1[0] != "") {
                    data1.unshift(titleA1);
                }
                else {
                }
                ws1 = Object.assign({}, sheet_from_array_of_arrays(data1));
                Object_range1 = compute_Object_range(ws1);
            }
            if (i_arr > 0) {
                titleA2 = titleArr[i_arr];
                data2 = [];
                if (DataArr[i_arr] == undefined) {
                    console.log("undefined: " + String(i_arr));
                    data2.push([]);
                } else {
                    if (DataArr[i_arr].length == 0) {
                        data2.push([]);
                    } else {
                        for (let n = 0; n < DataArr[i_arr].length; n++) {
                            data2.push(DataArr[i_arr][n]);
                        }
                    }
                }
                if (titleA2[0] != "") {
                    data2.unshift(titleA2);
                }
                else {
                }
                ws2 = Object.assign({}, sheet_from_array_of_arrays(data2));
                Object_range2 = compute_Object_range(ws2);
                let temp_obj = Object.assign({}, mix_two_obejctUp(ws1, ws2, Object_range1, Object_range2));
                objResult = temp_obj.obj;
                max_letter = temp_obj.max_letter;
                ws1 = Object.assign({}, objResult);
                Object_range1 = compute_Object_range(ws1);
            }
        }
    }

    console.log("over");


    let temp_objResult = new Object();
    temp_objResult = Object.assign({}, objResult);;
    let Object_rangeX = compute_Object_range(temp_objResult);
    let max_num = 0;
    for (let x = 0; x < Object_rangeX.num_arr.length; x++) {
        if (x == 0) {
            max_num = Object_rangeX.num_arr[0];
        }
        else {
            if (Object_rangeX.num_arr[x] > max_num) {
                max_num = Object_rangeX.num_arr[x];
            }
        }
    }
    temp_objResult["!ref"] = ref_manageS(max_letter, max_num);
    let ws_name = "SheetJS";
    let wb = new Workbook();
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = temp_objResult;
    let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    let title = defaultTitle || '列表'
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
    store
        .dispatch("set_PR_excel_DownloadingStatus", 0)
        .then(function (response) { console.log("下载完成") })
        .catch(function (error) {
            console.info(error);
        });
}

