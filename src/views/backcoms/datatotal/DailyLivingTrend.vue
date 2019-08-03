<template>
  <div class="DailyLivingTrend">
    <el-row id="eDailyLivingTrend" :style="{width: '100%',height: '100%'}"></el-row>
  </div>
</template>

<script>
export default {
  name: "DailyLivingTrend",
  data() {
    return {};
  },
  mounted() {
    this.setRntenChart();
  },
  methods: {
    setRntenChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("eDailyLivingTrend")
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
                // color: "#ffffff"
              },
              {
                offset: 1,
                color: "rgba(145,34,251,0.2)" // 100% 处的颜色
                // color: "#ffffff"
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
                // color: "#ffffff"
              },
              {
                offset: 1,
                color: "rgba(0,207,255,0.2)" // 100% 处的颜色
                // color: "#ffffff"
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
                // color: "#ffffff"
              },
              {
                offset: 1,
                color: "rgba(40,219,153,0.2)" // 100% 处的颜色
                // color: "#ffffff"
              }
            ]
          }
        ],
        textStyle: {
          color: "rgba(0,0,0,0.65);"
        },
        legend: {
          textStyle: {
            color: "rgba(0,0,0,0.65);"
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
          source: [
            [
              "product",
              "09月",
              "10月",
              "11月",
              "12月",
              "01月",
              "02月",
              "03月",
              "04月",
              "05月",
              "06月",
              "07月",
              "08月"
            ],
            [
              "在册用户",
              140,
              170,
              180,
              200,
              234,
              240,
              259,
              265,
              270,
              284,
              298,
              300
            ],
            [
              "月活用户",
              100,
              106,
              119,
              123,
              138,
              123,
              118,
              124,
              130,
              136,
              149,
              151
            ],
            ["日活用户", 45, 52, 63, 68, 79, 72, 60, 65, 70, 62, 68, 78]
          ]
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
            // smooth: true,
            seriesLayoutBy: "row",
            symbol: "circle",
            showSymbol: false
          },
          {
            type: "line",
            areaStyle: {},
            // smooth: true,
            seriesLayoutBy: "row",
            symbol: "circle",
            showSymbol: false
          },
          {
            type: "line",
            areaStyle: {},
            // smooth: true,
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

<style>
.DailyLivingTrend {
  /* background-color: #ffffff; */
  /* height: calc(100% - 0.3rem); */
  display: inline-block;
  color: rgba(0, 0, 0, 0.65);

  /* padding: 10px;
  width: 32%;
  height: 352px;
  margin: 7px; */
  height: 100%;
  width: 100%;
}
</style>


<style scoped>
</style>
