<template>
  <div class="LocalOriginalProgrammes height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>本土原创节目（近7天）
    </el-row>
    <el-row v-show="ifgetdata" class="local_programmes_main">
      <!-- <el-row class="local_programmes_main"> -->
      <el-row id="local_programmes"></el-row>
      <el-row id="local_programmesB"></el-row>

      <!-- <el-row id="local_programmes2" class="bottom_bar"></el-row> -->
      <!-- <el-row class="m_row2">
        <table class="m_table" border="1">
          <tr class="m_table_font">
            <td colspan="1">&nbsp;</td>
            <td colspan="1">点播用户数</td>
            <td colspan="1">点播次数</td>
            <td colspan="1">点播时长（时）</td>
          </tr>
          <tr class="m_table_font">
            <td colspan="1">本周</td>
            <td colspan="1">{{un1}}</td>
            <td colspan="1">{{freq1}}</td>
            <td colspan="1">{{dur1}}</td>
          </tr>
          <tr class="m_table_font">
            <td colspan="1">上周</td>
            <td colspan="1">{{un2}}</td>
            <td colspan="1">{{freq2}}</td>
            <td colspan="1">{{dur2}}</td>
          </tr>
        </table>
      </el-row>-->
    </el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import { demands_location } from "@/api/api_main";
import { commonTools } from "@/utils/test";
import Vue from "vue";

export default {
  name: "LocalOriginalProgrammes",
  data() {
    return {
      ifgetdata: true,
      un1: 0,
      freq1: 0,
      dur1: 0,
      un2: 0,
      freq2: 0,
      dur2: 0,
      pie_data: {
        id: "local_programmes",
        name: [],
        value: []
        // name: ["综艺", "微电影", "纪实", "电影", "新闻", "时尚生活"],
        // value: [
        //   { value: 350, name: "综艺" },
        //   { value: 300, name: "微电影" },
        //   { value: 200, name: "纪实" },
        //   { value: 200, name: "电影" },
        //   { value: 170, name: "新闻" },
        //   { value: 150, name: "时尚生活" }
        // ]
      },
      pie_dataB: {
        id: "local_programmesB",
        name: [],
        value: []
        // name: ["综艺", "微电影", "纪实", "电影", "新闻", "时尚生活"],
        // value: [
        //   { value: 350, name: "综艺" },
        //   { value: 300, name: "微电影" },
        //   { value: 200, name: "纪实" },
        //   { value: 200, name: "电影" },
        //   { value: 170, name: "新闻" },
        //   { value: 150, name: "时尚生活" }
        // ]
      },
      echarts2: {
        data: [
          // ["product", "本周", "上周"],
          // ["点播用户数", 30000, 20000],
          // ["点播次数", 13000, 10000],
          // ["回看收视", 10000, 5000]
          ["product", "本周", "上周"],
          ["点播用户数", 0, 0],
          ["点播次数", 0, 0],
          ["点播时长", 0, 0]
        ]
      }
    };
  },
  mounted() {
    this.drawLine(); // 测试
    this.drawLineB();

    let vm = this;
    setTimeout(function () {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function (response) {
          vm.demands_location(response, "week_days"); // 本周-前6+加当天
          vm.demands_location(response, "weeks"); // 当天所在周的范围 + 当天的上周范围
        })
        .catch(function (error) {
          console.info(error);
        });
    }, 100);
  },
  methods: {
    demands_location(ExpirationDate, date_type) {
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();
      let data;
      let data2; // 用于本周的上一周请求
      if (date_type == "week_days") { // 两个饼图
        data = {
          start: commonTools.currentDay_ndaysAgodate(ExpirationDate, 6),
          end: ExpirationDate,
          operator: m_operator,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
        // console.log(data);
      }
      if (date_type == "weeks") {  // 当前视图没用到该时间周期
        data = {
          start: commonTools.getweekDays_y(ExpirationDate, 0)[2],
          end: commonTools.getweekDays_y(ExpirationDate, 0)[3],
          operator: m_operator,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
        data2 = {
          start: commonTools.getweekDays_y(ExpirationDate, 1)[2],
          end: commonTools.getweekDays_y(ExpirationDate, 1)[3],
          operator: m_operator,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
        // console.log(data);
        // console.log(data2);
      }

      demands_location(data)
        .then(function (response) {
          if (date_type == "week_days") {
            // console.log(response);
            // data:
            // responses: Array(1)
            // 0:
            // aggregations:
            // program_type:
            // buckets: Array(1)
            // 0:
            // demand_dur: {value: 3922}
            // demand_freq: {value: 6}
            // demand_user_num:
            // value: 4
            // let buckets = response.data.responses[0].aggregations.program_type.buckets;
            let buckets =
              response.data.responses[0].aggregations.program_type.buckets;
            let length = buckets.length;
            let i;
            let temp = [];
            let temp2 = [];
            let tempB = [];
            let temp2B = [];

            for (i = 0; i < length; i++) {
              temp.push(buckets[i].demand_freq.value);
              temp2.push(buckets[i].key);
              tempB.push((parseFloat(buckets[i].demand_dur.value / 60)).toFixed(0));
              temp2B.push(buckets[i].key);
            }
            vm.pie_data.value = temp;
            vm.pie_data.name = temp2;
            vm.pie_dataB.value = tempB;
            vm.pie_dataB.name = temp2B;
            vm.drawLine();
            vm.drawLineB();

            vm.ifgetdata = true;
          }
          if (date_type == "weeks") {  // 当前视图没用到该时间周期
            // console.log(response);
            let aggregations1_current = response.data.responses[1].aggregations;
            vm.ifgetdata = true;
            demands_location(data2)
              .then(function (response2) {
                // console.log(response2);
                let aggregations1_last =
                  response2.data.responses[1].aggregations;

                Vue.set(
                  vm.echarts2.data[1],
                  1,
                  aggregations1_current.demand_user_num.value
                );
                vm.un1 = aggregations1_current.demand_user_num.value; //
                Vue.set(
                  vm.echarts2.data[2],
                  1,
                  aggregations1_current.demand_freq.value
                );
                vm.freq1 = aggregations1_current.demand_freq.value;
                Vue.set(
                  vm.echarts2.data[3],
                  1,
                  parseInt(aggregations1_current.demand_dur.value / 60)
                );
                vm.dur1 = parseInt(aggregations1_current.demand_dur.value / 60);
                Vue.set(
                  vm.echarts2.data[1],
                  2,
                  aggregations1_last.demand_user_num.value
                );
                vm.un2 = aggregations1_last.demand_user_num.value;
                Vue.set(
                  vm.echarts2.data[2],
                  2,
                  aggregations1_last.demand_freq.value
                );
                vm.freq2 = aggregations1_last.demand_freq.value;
                Vue.set(
                  vm.echarts2.data[3],
                  2,
                  parseInt(aggregations1_last.demand_dur.value / 60)
                );
                vm.dur2 = parseInt(aggregations1_last.demand_dur.value / 60);

                setTimeout(function () {
                  vm.drawLine2();
                }, 100);
              })
              .catch(function (error) {
                console.info(error);
                vm.ifgetdata = false;
              });
          }
        })
        .catch(function (error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    drawLine() {
      let vm = this;
      var myChart11 = this.$echarts.init(
        document.getElementById(vm.pie_data.id)
      );
      let length = vm.pie_data.value.length;
      let i;
      let temp;
      let legend_data = [];
      // let legend_data = ["综艺", "微电影", "纪实", "电影", "新闻", "时尚生活"];

      let data = [
        // { value: 350, name: "综艺" },
        // { value: 300, name: "微电影" },
        // { value: 200, name: "纪实" },
        // { value: 200, name: "电影" },
        // { value: 170, name: "新闻" },
        // { value: 150, name: "时尚生活" }
      ];
      let o_color = [
        "#6648FF",
        "#4346D3",
        "#2D99FF",
        "#00c2ff",
        "#16CEB9",
        "#6F38FC",
        "#4346D3",
        "#2D99FF",
        "#00c2ff",
        "#16CEB9"
      ];
      let m_color = [];
      // let m_color = o_color;

      for (i = 0; i < length; i++) {
        legend_data.push(vm.pie_data.name[i]);
        temp = {
          value: vm.pie_data.value[i],
          name: vm.pie_data.name[i]
        };
        data.push(temp);
        m_color.push(o_color[i]);
      }

      // console.log("~~~~");
      // console.log(legend_data);
      // console.log(data);
      // console.log(m_color);

      var option11 = {
        color: m_color,
        tooltip: {
          trigger: "item",
          // formatter: "{b}（点播用户数） : {c} ({d}%)"
          formatter: "{b}（点播次数） : {c} ({d}%)"
        },
        legend: [
          // {
          //   show: true,
          //   top: "17%",
          //   left: "56%",
          //   data: legend_data,
          //   itemWidth: 5,
          //   itemHeight: 5,
          //   width: 40,
          //   padding: [0, 5],
          //   itemGap: 10,
          //   textStyle: {
          //     color: "#dedede"
          //   }
          // }
          {
            show: true,
            top: "2%",
            left: "56%",
            // data: ["综艺", "微电影", "纪实"],
            data: legend_data.slice(0, 5),
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 5,
            textStyle: {
              color: "#dedede",
              fontSize: "10"
            }
          },
          {
            show: true,
            top: "2%",
            left: "76%",
            // data: ["电影", "新闻", "时尚生活"],
            data: legend_data.slice(5, 10),
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 5,
            textStyle: {
              color: "#dedede",
              fontSize: "10"
            }
          }
        ],
        series: [
          {
            type: "pie",
            minAngle: 15,
            radius: "80%",
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            // roseType: "radius", // 按半径分
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            data: data
          }
        ]
      };
      myChart11.clear();
      myChart11.setOption(option11);
      window.addEventListener("resize", () => {
        myChart11.resize();
      });
    },
    drawLineB() {
      let vm = this;
      var myChart11 = this.$echarts.init(
        document.getElementById(vm.pie_dataB.id)
      );
      let length = vm.pie_dataB.value.length;
      let i;
      let temp;
      let legend_data = [];
      // let legend_data = ["综艺", "微电影", "纪实", "电影", "新闻", "时尚生活"];

      let data = [
        // { value: 350, name: "综艺" },
        // { value: 300, name: "微电影" },
        // { value: 200, name: "纪实" },
        // { value: 200, name: "电影" },
        // { value: 170, name: "新闻" },
        // { value: 150, name: "时尚生活" }
      ];
      let o_color = [
        "#6648FF",
        "#4346D3",
        "#2D99FF",
        "#00c2ff",
        "#16CEB9",
        "#6F38FC",
        "#4346D3",
        "#2D99FF",
        "#00c2ff",
        "#16CEB9"
      ];
      let m_color = [];
      // let m_color = o_color;

      for (i = 0; i < length; i++) {
        legend_data.push(vm.pie_dataB.name[i]);
        temp = {
          value: vm.pie_dataB.value[i],
          name: vm.pie_dataB.name[i]
        };
        data.push(temp);
        m_color.push(o_color[i]);
      }

      // console.log("~~~~");
      // console.log(legend_data);
      // console.log(data);
      // console.log(m_color);

      var option11 = {
        color: m_color,
        tooltip: {
          trigger: "item",
          formatter: "{b}（点播时长） : {c}小时 ({d}%)"
        },
        legend: [
          // {
          //   show: true,
          //   top: "17%",
          //   left: "56%",
          //   data: legend_data,
          //   itemWidth: 5,
          //   itemHeight: 5,
          //   width: 40,
          //   padding: [0, 5],
          //   itemGap: 10,
          //   textStyle: {
          //     color: "#dedede"
          //   }
          // }
          {
            show: true,
            top: "2%",
            left: "56%",
            // data: ["综艺", "微电影", "纪实"],
            data: legend_data.slice(0, 5),
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 5,
            textStyle: {
              color: "#dedede",
              fontSize: "10"
            }
          },
          {
            show: true,
            top: "2%",
            left: "76%",
            // data: ["电影", "新闻", "时尚生活"],
            data: legend_data.slice(5, 10),
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 5,
            textStyle: {
              color: "#dedede",
              fontSize: "10"
            }
          }
        ],
        series: [
          {
            type: "pie",
            minAngle: 15,
            radius: "80%",
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            // roseType: "radius", // 按半径分
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            data: data
          }
        ]
      };
      myChart11.clear();
      myChart11.setOption(option11);
      window.addEventListener("resize", () => {
        myChart11.resize();
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart22 = this.$echarts.init(
        document.getElementById("local_programmes2")
      );
      let vm = this;

      var option22 = {
        textStyle: {
          color: "#dedede"
        },
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#C46BD6" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#3726B0" // 100% 处的颜色
              }
            ]
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00E3FF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0033DD" // 100% 处的颜色
              }
            ]
          }
        ],
        legend: {
          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            color: "#dedede"
          }
        },
        grid: {
          top: "18%",
          left: "2%",
          right: "2%",
          bottom: "1%",
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: vm.echarts2.data
        },
        xAxis: {
          type: "category",
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            alignWithLabel: true //设置坐标轴刻度与坐标对齐
          },
          axisLine: {
            lineStyle: {
              color: "#939393" //设置横坐标轴线颜色
            }
          }
        },
        yAxis: {
          axisLabel: {
            //横坐标类目文字
            //rotate: 30,
          },
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false //设置坐标轴刻度不显示
          }
        },
        series: [
          {
            type: "bar",
            barWidth: 10
          },
          {
            type: "bar",
            barWidth: 10
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart22.clear();
      myChart22.setOption(option22);
      window.addEventListener("resize", () => {
        myChart22.resize();
      });
    }
  }
};
</script>
<style scoped>
.local_programmes_main {
  height: calc(100% - 0.3rem);
}
#local_programmes {
  height: 50%;
}
#local_programmes2 {
  height: 50%;
}
#local_programmesB {
  height: 50%;
}
.m_row2 {
  margin-left: 0.2rem;
}
.m_table {
  margin-top: 0.3rem;
  line-height: 0.3rem;
  /* border: #ffffff; */
  width: 95%;
}
.m_table_font {
  font-size: 0.13rem;
}
</style>



