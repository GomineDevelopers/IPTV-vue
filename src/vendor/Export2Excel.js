/* eslint-disable */
require('script-loader!file-saver');
// require('script-loader!vendor/Blob');
require('script-loader!./Blob');

// 依赖
// npm install file - saver--save
// npm install xlsx--save
// npm install script - loader--save - dev

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

            //Skip ranges
            ranges.forEach(function (range) {
                if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
                    for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
                }
            });

            //Handle Row Span
            if (rowspan || colspan) {
                rowspan = rowspan || 1;
                colspan = colspan || 1;
                ranges.push({ s: { r: R, c: outRow.length }, e: { r: R + rowspan - 1, c: outRow.length + colspan - 1 } });
            }
            ;

            //Handle Value
            outRow.push(cellValue !== "" ? cellValue : null);

            //Handle Colspan
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
            var cell = { v: data[R][C] };
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
            console.log(cell);
            console.log(ws[cell_ref]);

        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
    console.log(range);
    console.log(ws['!ref'] );
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
    console.log('a')
    var oo = generateArray(theTable);
    var ranges = oo[1];

    /* original data */
    var data = oo[0];
    var ws_name = "SheetJS";
    console.log(data);

    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);

    /* add ranges to worksheet */
    // ws['!cols'] = ['apple', 'banan'];
    ws['!merges'] = ranges;

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });

    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), "test.xlsx")
}

function formatJson(jsonData) {
    console.log(jsonData)
}
export function export_json_to_excel(th, jsonData, defaultTitle) {

    /* original data */

    var data = jsonData;
    data.unshift(th);
    var ws_name = "SheetJS";

    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);


    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    var title = defaultTitle || '列表'
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
}


// 参数作用
// th为标题
// jsonData为数据 （处理后可以看作一个数组，分别push表格中）
// push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
// unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
export function export_json_to_excel_test2(th, jsonData, defaultTitle) {

    /* original data */

    var data = jsonData;
    console.log(typeof data);
    console.log(data);
    data.unshift(th);
    console.log(typeof data);
    console.log(data);

    var ws_name = "SheetJS";

    var wb = new Workbook();
    console.log(typeof wb);
    console.log(wb);

    var ws = sheet_from_array_of_arrays(data);
    console.log(typeof ws);
    console.log(ws);


    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    console.log(typeof wb);
    console.log(wb);

    wb.Sheets[ws_name] = ws;
    console.log(typeof wb);
    console.log(wb);


    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    // console.log(typeof wbout);
    // console.log(wbout);

    var title = defaultTitle || '列表'

    // 输出 + 命名 
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
}

// export2Excel()中require的路径因个人项目结构不同可能需要单独调整，如果报module not found '../../Export2Excel.js'之类请自行修改路径。
// tHeader是每一栏的名称，需手动输入。
// filterVal是data中list的key值，也是要自己写的。
// 这里记得要与data里面的list名称对应
// "商品管理列表"是表格名称
// SheetJS 是表格下面的表格分栏名称


// plural复数处理形式 --- 分栏 下方的SheetJS
export function export_json_to_excel_plural(th, th2, jsonData, jsonData2, defaultTitle) {

    /* original data */
    var data = jsonData;
    var data2 = jsonData2;
    console.log(data);
    console.log(data2);

    data.unshift(th);
    data2.unshift(th2);
    console.log(data);
    console.log(data2);

    var ws_name = "SheetJS";
    var ws2_name = "SheetJS2";

    var wb = new Workbook();
    // var wb2 = new Workbook();
    console.log(wb);

    var ws = sheet_from_array_of_arrays(data);
    var ws2 = sheet_from_array_of_arrays(data);
    console.log(ws);
    console.log(ws2);

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.SheetNames.push(ws2_name);

    wb.Sheets[ws_name] = ws;
    wb.Sheets[ws2_name] = ws2;


    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    var title = defaultTitle || '列表'
    // 输出 + 命名 
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
}

// plural复数处理形式2 
export function export_json_to_excel_plural2(th, th2, jsonData, jsonData2, defaultTitle) {

    /* original data */
    var data = jsonData;
    var data2 = jsonData2;
    console.log(data);
    console.log(data2);

    data.unshift(th);
    data2.unshift(th2);
    console.log(data);
    console.log(data2);

    var ws_name = "SheetJS";

    var wb = new Workbook();
    // var wb2 = new Workbook();
    console.log(wb);

    var ws = sheet_from_array_of_arrays(data);
    var ws2 = sheet_from_array_of_arrays(data);
    console.log(ws);
    console.log(ws2);

    function mix_two_obejct(obj1,obj2) {
        let obj3;

        let obj1_length = Object.getOwnPropertyNames(obj1).length;
        let obj2_length = Object.getOwnPropertyNames(obj2).length;


        return obj3;
    }

    let ws_m = mix_two_obejct(ws,ws2);

    // 注释
    // A B C 是excel的横 --- A->Z->AA->AB->ZB->以此类推 
    // 竖即使 A? 的 ?
    // 此处默认 ?=1的 只有A，用于标题
    // t：s 指  string
    // t：n 指  number
    // 进行顺序 颠倒 B3B4提到B2前 =》 输出内容不会颠倒 
    // =》 excel填充是按索引填充，不是按顺序填充 =》可以直接对object进行推入操作
    // =》 以此实现 多个数组内容相加功能
    // ///默认的object的length = 21（假设） = 1A(string-title) 10A（string-per_title） + 10B(num-per_value)    
    let temp_ws = {
        // !ref: "A1:B10",          // 0
        A1: { v: "xxxx", t: "s" },  // 1 title
        A2: { v: "影视包", t: "s" }, // 2~10 per_title
        A3: { v: "影视包（包季）", t: "s" },
        A4: { v: "影视包（包年）", t: "s" },
        A5: { v: "少儿包", t: "s" },
        A6: { v: "少儿包（包季）", t: "s" },
        A7: { v: "少儿包（包年）", t: "s" },
        A8: { v: "欢乐家庭包", t: "s" },
        A9: { v: "欢乐家庭包（包季）", t: "s" },
        A10: { v: "欢乐家庭包（包年）", t: "s" },
        B3: { v: 3, t: "n" }, // 11~19 per_title
        B4: { v: 4, t: "n" },
        B2: { v: 2, t: "n" },
        B5: { v: 5, t: "n" },
        B6: { v: 6, t: "n" },
        B7: { v: 7, t: "n" },
        B8: { v: 8, t: "n" },
        B9: { v: 9, t: "n" },
        B10: { v: 10, t: "n" },
        H18: { v: 2333, t: "n" },
    }

    // var obj = {
    //     key1: 1,
    //     key2: 2,
    //     key3: 3
    // };
    // Object.getOwnPropertyNames(obj).length
    // Object.keys(obj).length
    // 输出对象的属性个数
    // console.log(Object.getOwnPropertyNames(temp_ws).length);  // 输出：20
    // console.log(Object.keys(temp_ws).length);  // 输出：20
    console.log(Object.getOwnPropertyNames(temp_ws)[0]); // 输出 A1
    console.log(Object.getOwnPropertyNames(temp_ws)[1]); // 输出 A2
    console.log(Object.getOwnPropertyNames(temp_ws)[0].v); 
    // 需要输出obj的 {}


    // var obj = {};
    // // 动态给对象添加属性的常见方式
    // obj.name = 'aaa';
    // obj.age = 22;
    // console.log(obj); // 输出为： {name:"aaa",age:22}

    // // 不常见方式
    // var key = 'address';
    // var value = '南京市雨花台区';
    // obj[key] = value;
    // console.log(obj);

    // temp_ws['!ref'] = "A1:B10";
    temp_ws['!ref'] = "A1:H18";

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);

    // wb.Sheets[ws_name] = ws;
    wb.Sheets[ws_name] = temp_ws;

    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    var title = defaultTitle || '列表'
    // 输出 + 命名 
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
}
