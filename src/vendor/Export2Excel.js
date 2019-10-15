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
                ranges.push({s: {r: R, c: outRow.length}, e: {r: R + rowspan - 1, c: outRow.length + colspan - 1}});
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
    var range = {s: {c: 10000000, r: 10000000}, e: {c: 0, r: 0}};
    for (var R = 0; R != data.length; ++R) {
        for (var C = 0; C != data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R;
            if (range.s.c > C) range.s.c = C;
            if (range.e.r < R) range.e.r = R;
            if (range.e.c < C) range.e.c = C;
            var cell = {v: data[R][C]};
            if (cell.v == null) continue;
            var cell_ref = XLSX.utils.encode_cell({c: C, r: R});

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

    var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: false, type: 'binary'});

    saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), "test.xlsx")
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

    var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: false, type: 'binary'});
    var title = defaultTitle || '列表'
    saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), title + ".xlsx")
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


// plural复数处理形式
// export function export_json_to_excel_plural(th, th2, jsonData, jsonData2, defaultTitle) {

//     /* original data */
//     var data = jsonData;
//     data.unshift(th);
//     var ws_name = "SheetJS";
//     var wb = new Workbook();
//     var wb2 = new Workbook();

//     var ws = sheet_from_array_of_arrays(data);
//     var ws2 = sheet_from_array_of_arrays(data);

//     /* add worksheet to workbook */
//     wb.SheetNames.push(ws_name);
//     wb.Sheets[ws_name] = ws;

//     var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
//     var title = defaultTitle || '列表'
//     // 输出 + 命名 
//     saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), title + ".xlsx")
// }
