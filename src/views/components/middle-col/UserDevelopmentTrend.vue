<template>
  <div class="height_auto UserDevelopmentTrend">
    <el-row class="title_row">
      <span class="title_border_left"></span>用户发展趋势(万)
    </el-row>
    <el-row id="user_development_trend"></el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import { users_basic } from "@/api/api_main";
import { commonTools } from "@/utils/test";

export default {
  name: "UserDevelopmentTrend", //用户发展趋势组件
  data() {
    return {
      ifgetdata: true,
      echarts_data: {
        data: [
          // ['product', '09日', '10日', '11日', '12日', '01日', '02日', '03日', '04日', '05日', '06日', '07日', '08日'],
          // ['在册用户', 140, 170, 180, 200, 234, 240, 259, 265, 270, 284, 298, 300],
          // ['月活用户', 100, 106, 119, 123, 138, 123, 118, 124, 130, 136, 149, 151],
          // ['日活用户', 45, 52, 63, 68, 79, 72, 60, 65, 70, 62, 68, 78],
          // ["product"],
          // ["在册用户"],
          // ["活跃用户"],
          // ["激活用户"],
        ]
      }
    };
  },
  mounted() {
    // this.setUserEevTrendChart()
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.users_basic(response);
          setTimeout(function() {
            vm.setUserEevTrendChart();
          }, 100);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  methods: {
    users_basic(ExpirationDate) {
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();

      let temp = {
        operator: m_operator,
        start: commonTools.currentDay_ndaysAgodate(ExpirationDate, 14),
        end: ExpirationDate,
        year:commonTools.get_ExpirationDate_year(ExpirationDate)

      };
      // console.log(temp);
      users_basic(temp)
        .then(function(response) {
          // console.log("~~~~~~users_basic");
          // console.log(response);
          let buckets =
            response.data.responses[1].aggregations.statistical_granularity
              .buckets;
          let length = buckets.length;
          let i;
          let temp_data = [
            ["product"],
            ["在册用户"],
            ["激活用户"],
            ["活跃用户"]
          ];
          for (i = 0; i < length; i++) {
            temp_data[0].push(commonTools.format_dayToChinese(buckets[i].key));
            temp_data[1].push(parseInt(buckets[i].register_num.value / 10000));
            temp_data[2].push(
              parseInt(buckets[i].activate_user_num.value / 10000)
            );
            temp_data[3].push(parseInt(buckets[i].active_num.value / 10000));
          }
          vm.echarts_data.data = temp_data;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    setUserEevTrendChart() {
      let vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("user_development_trend")
      );
      var option = {
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(145,34,251,0.8)" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(145,34,251,0.2)" // 100% 处的颜色
              }
            ]
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0,207,255,0.8)" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(0,207,255,0.2)" // 100% 处的颜色
              }
            ]
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(40,219,153,0.8)" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(40,219,153,0.2)" // 100% 处的颜色
              }
            ]
          }
        ],
        textStyle: {
          color: "#dedede"
        },
        legend: {
          textStyle: {
            color: "#dedede"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
          //showContent: true
        },
        dataset: {
          source: vm.echarts_data.data
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: "#ccc" //设置横坐标轴线颜色
            }
          },
          axisTick: {
            alignWithLabel: true //设置坐标轴刻度与坐标对齐
          }
        },
        yAxis: {
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
              opacity: 0.2
            }
          }
        },
        grid: {
          top: "15%",
          left: "8%",
          right: "5%",
          bottom: "10%"
        },
        series: [
          {
            type: "line",
            areaStyle: {},
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "circle",
            showSymbol: false
          },
          {
            type: "line",
            areaStyle: {},
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "circle",
            showSymbol: false
          },
          {
            type: "line",
            areaStyle: {},
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "circle",
            showSymbol: false
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      // setInterval(function () {
      //   mTime()
      // }, 10000);
      var index = 0; //播放所在下标
      var total = option.dataset.source[0].length - 1; //获取X轴的数据长度
      //console.log(total)
      var mTime = setInterval(function() {
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: index
        });
        index++;
        if (index > total) {
          index = 0;
        }
      }, 1000);

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
<style scoped>
#user_development_trend {
  height: calc(100% - 0.3rem);
}
</style>


