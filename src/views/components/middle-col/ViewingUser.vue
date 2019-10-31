<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>
      <!-- 收视用户({{m_Unit}}) -->
      收视用户 (当日)
    </el-row>
    <el-row v-show="ifgetdata" class="chart_height" id="viewing_user"></el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import {
  broadcast_demand,
  broadcast_review,
  media_watch_total,
  broadcast_onlive
} from "@/api/api_main";
import { commonTools } from "@/utils/test";

export default {
  name: "ViewingUser", //收视用户组件

  data() {
    return {
      current_value: 1,
      current_value2: 1,

      ifgetdata: true,
      broadcast_demand_1: null,
      broadcast_demand_2: null,
      broadcast_demand_3: null,
      broadcast_review_1: null,
      broadcast_review_2: null,
      broadcast_review_3: null,
      media_watch_total_1: null,
      media_watch_total_2: null,
      media_watch_total_3: null,
      broadcast_onlive_1: null,
      broadcast_onlive_2: null,
      broadcast_onlive_3: null,
      // 单位
      m_Unit: null
    };
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.broadcast_demand(response);
          vm.broadcast_review(response);
          vm.media_watch_total(response);
          vm.broadcast_onlive(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);

    setTimeout(function() {
      vm.setNewUserChart();
    }, 1000);
  },
  methods: {
    broadcast_demand(ExpirationDate) {
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();
      let data = {
        start: ExpirationDate,
        end: ExpirationDate,
        // operator: String(["移动", "联通", "电信"])
        operator: m_operator
      };
      // console.log("~~~~~~broadcast_demand");
      broadcast_demand(data)
        .then(function(response) {
          // console.log(response);

          let m_data = response.data.responses[0].aggregations;

          // 用户数 收视数 户均收视数
          vm.broadcast_demand_1 = m_data.demand_user_num.value;
          vm.broadcast_demand_2 = m_data.demand_freq.value;
          vm.broadcast_demand_3 = parseInt(m_data.watch_freq_family.value);
          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    broadcast_review(ExpirationDate) {
      // console.log("~~~~~~!!!!!ExpirationDate");
      // console.log(ExpirationDate);

      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();
      let data = {
        start: ExpirationDate,
        end: ExpirationDate,
        // operator: String(["移动", "联通", "电信"])
        operator: m_operator
      };
      broadcast_review(data)
        .then(function(response) {
          // console.log("~~~~~~broadcast_review");
          // console.log(response);

          let m_data = response.data.responses[0].aggregations;
          // 用户数 收视数 户均收视数
          vm.broadcast_review_1 = m_data.watch_user_num.value;
          vm.broadcast_review_2 = m_data.watch_freq.value;
          vm.broadcast_review_3 = parseInt(m_data.watch_freq_family.value);
          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    media_watch_total(ExpirationDate) {
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();
      let data = {
        start: ExpirationDate,
        end: ExpirationDate,
        // operator: String(["移动", "联通", "电信"])
        operator: m_operator
      };
      media_watch_total(data)
        .then(function(response) {
          // console.log("~~~~~~media_watch_total");
          // console.log(response);

          let m_data = response.data.responses[0].aggregations;
          // 用户数 收视数 户均收视数
          vm.media_watch_total_1 = m_data.watch_user_num.value;
          vm.media_watch_total_2 = m_data.watch_freq.value;
          vm.media_watch_total_3 = parseInt(m_data.watch_freq_family.value);
          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    broadcast_onlive(ExpirationDate) {
      // console.log("broadcast_onlive");
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();
      let data = {
        start: ExpirationDate,
        end: ExpirationDate,
        // operator: String(["移动", "联通", "电信"])
        operator: m_operator
      };
      broadcast_onlive(data)
        .then(function(response) {
          // console.log("~~~~~~broadcast_onlive");
          // console.log(response);
          let m_data = response.data.responses[0].aggregations;
          vm.broadcast_onlive_1 = m_data.onlive_user_num.value;
          vm.broadcast_onlive_2 = m_data.onlive_freq.value;
          vm.broadcast_onlive_3 = parseInt(m_data.watch_freq_family.value);
          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    setNewUserChart() {
      let vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("viewing_user"));

      var option = {
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
                color: "#488BFF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#6648FF" // 100% 处的颜色
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
                color: "#00E5FF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0053DC" // 100% 处的颜色
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
                color: "#00D7CF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#00C786" // 100% 处的颜色
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
          top: "15%",
          left: "0",
          right: "1%",
          bottom: "1%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            align: "left"
          },
          formatter: function(params) {
            let length = params.length;
            // console.log(params);
            // console.log(length);
            return (
              params[0].name +
              "<br/>" +
              params[0].seriesName +
              "：" +
              (parseInt(params[0].value[1]) / vm.current_value).toFixed(2) +
              "<br/>" +
              params[1].seriesName +
              "：" +
              (parseInt(params[0].value[2]) / vm.current_value2).toFixed(2)
            );
          }
        },
        dataset: {
          source: [
            // ["product", "用户数", "收视次数", "户均收视次数"],
            // ["product", "用户数", "收视次数"],
            // ["product", "用户数（千万）", "收视次数（千万）"],
            ["product", "用户数（万）", "收视次数（百万）"],
            // ["总体收视", 111950, 111837, 111433],
            [
              "总体收视",
              vm.media_watch_total_1,
              vm.media_watch_total_2
              // vm.media_watch_total_3
            ],
            // ["直播收视", 111831, 111734, 111551],
            [
              "直播收视",
              vm.broadcast_onlive_1,
              vm.broadcast_onlive_2
              // vm.broadcast_onlive_3
            ],
            // ["点播收视", 864, 652, 825],
            [
              "点播收视",
              vm.broadcast_demand_1,
              vm.broadcast_demand_2
              // vm.broadcast_demand_3
            ],
            // ["回看收视", 111724, 111539, 111391]
            [
              "回看收视",
              vm.broadcast_review_1,
              vm.broadcast_review_2
              // vm.broadcast_review_3
            ]
          ]
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
              color: "#ccc" //设置横坐标轴线颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              //横坐标类目文字
              //rotate: 30,
              // formatter:'{value}(万)'
              formatter: function(value) {
                // return String(value / 10000 / 1000) + "（千万）";

                // if (value == 0) {
                //   return 0;
                // }
                // if (vm.media_watch_total_2 > 100000000) {
                //   vm.m_Unit = "亿";
                //   // return String(value / 10000 / 10000) + "亿";
                //   vm.current_value = 100000000;
                //   return String(value / 10000 / 10000);
                // }
                // if (
                //   vm.media_watch_total_2 > 10000000 &&
                //   vm.media_watch_total_2 <= 100000000
                // ) {
                //   vm.m_Unit = "千万";
                //   vm.current_value = 10000000;
                //   return String(value / 10000 / 1000);
                // }
                // if (
                //   vm.media_watch_total_2 > 1000000 &&
                //   vm.media_watch_total_2 <= 10000000
                // ) {
                //   vm.m_Unit = "百万";
                //   vm.current_value = 1000000;
                //   return String(value / 10000 / 100);
                // }
                // if (
                //   vm.media_watch_total_2 > 10000 &&
                //   vm.media_watch_total_2 <= 1000000
                // ) {
                //   vm.m_Unit = "万";
                //   vm.current_value = 10000;
                //   return String(value / 10000);
                // }
                // return String(value);

                // 固定
                vm.current_value = 10000;
                return String(value / vm.current_value);
              }
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
          {
            gridIndex: 0,
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              show: false
            },
            // 刻度线的设置
            splitLine: {
              show: true,
              lineStyle: {
                color: "#939393",
                type: "dotted",
                opacity: 0.2
              }
            },
            axisLabel: {
              formatter: function(value) {
                // 固定
                vm.current_value2 = 1000000;
                return String(value / vm.current_value2);
              }
            }
          }
        ],
        series: [
          { type: "bar", barWidth: 10, yAxisIndex: "0" },
          { type: "bar", barWidth: 10, yAxisIndex: "1" }
          // { type: "bar", barWidth: 10 }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
<style scoped>
</style>


