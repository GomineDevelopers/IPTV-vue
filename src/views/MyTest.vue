<template>
  <div class="MyTest">
    <button @click="userAction">userAction</button>
    <button @click="userAction_programs">userAction_programs</button>
    <button @click="userAction_operator">userAction_operator</button>

    <button @click="areaCode">areaCode</button>
    <button @click="users_total">users_total</button>

    <button @click="program_search">program_search</button>

    <button @click="epg">epg</button>
    <button @click="epg_programs">epg_programs</button>
    <button @click="epg_operators">epg_operators</button>

    <button @click="users_subscribe">users_subscribe</button>
    <button @click="users_activationRate">users_activationRate</button>
    <button @click="users_retention">users_retention</button>

    <div id="echartsUA" :style="{width: '14vw',height: '14vw'}"></div>
  </div>
</template>

<script>
// import "@/vendor/Blob";
// import "@/vendor/Export2Excel";
// import Vue from "vue";
import {
  userAction,
  userAction_programs,
  userAction_operator,
  areaCode,
  users_total,
  program_search,
  epg,
  epg_programs,
  epg_operators,
  users_subscribe,
  users_activationRate,
  users_retention
} from "@/api/api_main";

import { commonTools } from "@/utils/test";

export default {
  name: "MyTest",
  data() {
    return {
      list: [
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        },
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        }
      ],
      goodsItems: ["商品名称", "商品货号", "售价", "库存", "销量", "分享"]
    };
  },
  mounted() {
    this.drawLine();

    // api 测试
  },
  methods: {
    userAction() {
      console.log("userAction");

      let temp = {
        area: "all",
        operator: "all",
        method: 0,
        list: "all",
        start: "2019-07-12",
        end: "2019-07-31"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("area", temp.area);
      formData.append("operator", temp.operator);
      formData.append("method", temp.method);
      formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      userAction(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    userAction_programs() {
      console.log("userAction_programs");

      userAction_programs()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    userAction_operator() {
      console.log("userAction_operator");

      userAction_operator()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    areaCode() {
      console.log("areaCode");

      areaCode()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_total() {
      console.log("users_total");

      let code = "812";

      users_total(code)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    program_search() {
      console.log("program_search");

      var myDateTest = new Date();
      console.log(myDateTest);
      var tempDT = commonTools.dateFormat(myDateTest);
      console.log(tempDT);
      console.log(typeof tempDT); // string

      var myDateTest2 = new Date();
      var tempDT2 = commonTools.getWeek_m(myDateTest);
      console.log(tempDT2);
      console.log(typeof tempDT2); // string

      var myDateTest3 = new Date();
      var tempDT3 = commonTools.getWeek_y(myDateTest);
      console.log(tempDT3);
      console.log(typeof tempDT3); // string

      let index = 1;
      for (let i of commonTools.createWeeks(2018)) {
        let start = i[0],
          end = i[1];
        console.log(
          `第${commonTools.formatDig(index++)}周 ${commonTools.formatDate(
            start
          )}-${commonTools.formatDate(end)}`
        );
      }
      console.log("~~~~~~~~~~~~~~~~~~~A");

      let index2 = 1;
      for (let i of commonTools.createWeeks(2018)) {
        let start = i[0],
          end = i[1];
        console.log(
          `第${commonTools.formatDig(index2++)}周 ${commonTools.formatDate2(
            start
          )}-${commonTools.formatDate2(end)}`
        );
      }
      console.log("~~~~~~~~~~~~~~~~~~~A2");

      let index3 = 1;
      for (let i of commonTools.createWeeks(2018)) {
        let start = i[0],
          end = i[1];
        console.log(
          `第${commonTools.formatDig(index3++)}周 ${commonTools.formatDate3(
            start
          )}-${commonTools.formatDate3(end)}`
        );
      }

      console.log("~~~~~~~~~~~~~~~~~~~A3");


      // js获取当前月后面12个月所有月份
      // var dataArr = [];
      // var data = new Date();
      // var year = data.getFullYear();
      // data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
      // for (var i = 0; i < 12; i++) {
      //   data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
      //   var m = data.getMonth() + 1;
      //   m = m < 10 ? "0" + m : m;
      //   dataArr.push(data.getFullYear() + "-" + m);
      // }
      // console.log(dataArr);

      //传入年份和月份 获取该年对应月份的天数
      let time_m = commonTools.getMonthDays(2019, 8);
      console.log("time_m： " + time_m);

      // 传入年份 获取1~12月的日期范围
      let time_y = commonTools.getMonthDays_y(2019, 8);
      console.log("time_y： " + time_y.firstDay);
      console.log("time_y： " + time_y.lastDay);

      // 下面的转换有问题！
      // console.log(new Date(Date.UTC(2019, 1, 1)));
      // console.log(new Date(Date.UTC(2019, 1, 31)));
      // console.log(new Date(Date.UTC(2019, 2, 1)));
      // console.log(new Date(Date.UTC(2019, 1, 28)));

      // console.log(new Date(96, 1, 2, 3, 4, 5));
      // console.log(Date.UTC(96, 1, 2, 3, 4, 5));
      // console.log(new Date(2019, 1-1, 31-1));
      // console.log(Date.UTC(2019, 1-1, 31-1));
      //  时间计算是： 年2019-0 月份一-1 日期31-0

      console.log("~~~~~~~~~~~~~~~~~~~B");

      var utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
      var utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
      console.log(typeof Date.UTC(96, 1, 2, 3, 4, 5)); // > "number"
      console.log(typeof utcDate1); // > "object"
      console.log(typeof utcDate1.toUTCString()); // > "string"
      console.log(Date.UTC(96, 1, 2, 3, 4, 5)); // > 823230245000
      console.log(utcDate1); // > Fri Feb 02 1996 11:04:05 GMT+0800 (中国标准时间)
      console.log(utcDate1.toUTCString()); // > "Fri, 02 Feb 1996 03:04:05 GMT"
      // expected output: Fri, 02 Feb 1996 03:04:05 GMT

      console.log(utcDate2.toUTCString()); // > "Sun, 31 Dec 1899 00:00:00 GMT"
      // expected output: Sun, 31 Dec 1899 00:00:00 GMT

      // Date.UTC(year,month,day,hours,minutes,seconds,ms)
      var timeUTC = Date.UTC(2005, 7, 8);
      console.log(timeUTC);
      var timeUTC2 = Date.UTC(2019, 8, 19);
      console.log(timeUTC2);
      var timeUTC3 = Date.UTC(2019, 8, 19, 12);
      console.log(timeUTC3);

      var myDate = new Date();
      myDate.getYear(); //获取当前年份(2位)
      myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      myDate.getMonth(); //获取当前月份(0-11,0代表1月)
      myDate.getDate(); //获取当前日(1-31)
      myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
      myDate.getHours(); //获取当前小时数(0-23)
      myDate.getMinutes(); //获取当前分钟数(0-59)
      myDate.getSeconds(); //获取当前秒数(0-59)
      myDate.getMilliseconds(); //获取当前毫秒数(0-999)
      myDate.toLocaleDateString(); //获取当前日期
      var mytime = myDate.toLocaleTimeString(); //获取当前时间
      myDate.toLocaleString(); //获取日期与时间

      console.log(myDate);
      console.log(mytime);
      console.log(typeof myDate);
      console.log(typeof mytime);

      let temp = {
        programName: "白发魔女",
        UTC: "1224134151"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("programName", temp.programName);
      formData.append("UTC", temp.UTC);

      program_search(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    epg() {
      console.log("epg");

      let temp = {
        operator: "all",
        list: "all",
        start: "2018-07-12",
        end: "2018-07-15"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("list", temp.list);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      epg(formData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    epg_programs() {
      console.log("epg_programs");

      epg_programs()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    epg_operators() {
      console.log("epg_operators");

      epg_operators()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    users_subscribe() {
      console.log("users_subscribe");

      users_subscribe()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_activationRate() {
      console.log("users_activationRate");

      let hours;

      users_activationRate(hours)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    users_retention() {
      console.log("users_retention");

      users_retention(date)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    },

    formatJson(filterVal, jsonData) {
      //   let temp1 = [55, 66];
      //   let k ;
      //   let temp2 = temp1.map(v => k);
      //   console.log(temp2);
      return jsonData.map(v => filterVal.map(j => v[j]));
      // return "";
    },
    export2Excel() {
      console.log("~~export2Excel");
      require.ensure([], () => {
        const { export_json_to_excel } = require("../vendor/Export2Excel");
        const tHeader = [
          "商品名称",
          "商品货号",
          "售价",
          "库存",
          "销量",
          "分享"
        ];
        const filterVal = [
          "name",
          "number",
          "salePrice",
          "stocknums",
          "salesnums",
          "sharenums"
        ];
        // const list = this.goodsItems;
        const list = this.list;
        console.log(list);
        console.log(filterVal);
        const data = this.formatJson(filterVal, list);
        console.log(tHeader);
        console.log(data);
        export_json_to_excel(tHeader, data, "商品管理列表");
      });
    },
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("echartsUA"));
      let vm = this;
      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
            myTool1: {
              show: true,
              title: "自定义扩展方法1",
              icon: "image://http://echarts.baidu.com/images/favicon.png",
              onclick: function() {
                // alert("myToolHandler1");
                vm.export2Excel();
              }
            }
          }
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["45%", "50%"],
            selectedMode: "single",
            color: ["#FCB84F", "#F97E6F"],

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            data: [{ value: 23, name: "订购" }, { value: 77, name: "未订购" }],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

<style >
</style>

