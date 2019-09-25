<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>留存率和激活趋势
    </el-row>
    <el-row id="retention_and_activation"></el-row>
  </div>
</template>
<script>
export default {
  name: "RetentionAndActivation", //留存率和激活趋势组件
  data() {
    return {
      echarts_data: {
        id: "retention_and_activation",
        data_date: [
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16"
        ],
        h_48: [
          0.8,
          0.82,
          0.83,
          0.84,
          0.85,
          0.86,
          0.87,
          0.85,
          0.84,
          0.86,
          0.89,
          0.9,
          0.91,
          0.94
        ],
        h_24: [
          0.7,
          0.72,
          0.73,
          0.74,
          0.75,
          0.76,
          0.77,
          0.65,
          0.7,
          0.78,
          0.79,
          0.8,
          0.81,
          0.84,
          0.86
        ],
        d_7: [0.4, 0.42, 0.43, 0.44, 0.45, 0.46, 0.5]
      }
    };
  },
  mounted() {
    this.setRntenChart();
  },
  methods: {
    setRntenChart() {
      let vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById(vm.echarts_data.id)
      );
      var option = {
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
          show: true
        },
        // dataset: {
        //   source: [
        //     ['product', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
        //     ['48小时激活率', 0.80, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.85, 0.84, 0.86, 0.89, 0.90, 0.91, 0.94, 0.96],
        //     ['24小时激活率', 0.70, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.65, 0.70, 0.78, 0.79, 0.80, 0.81, 0.84, 0.86],
        //     ['七日留存率', 0.40, 0.42, 0.43, 0.44, 0.45, 0.46, 0.50]
        //   ]
        // },
        xAxis: {
          type: "category",
          //boundaryGap: false,  //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: "#ccc" //设置横坐标轴线颜色
            }
          },
          axisTick: {
            alignWithLabel: true //设置坐标轴刻度与坐标对齐
          },
          data: vm.echarts_data.data_date
        },
        yAxis: {
          gridIndex: 0,
          axisLabel: {
            formatter: function(val) {
              return val * 100 + "%";
            }
          },
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
          right: "9%",
          bottom: "10%"
        },
        series: [
          {
            type: "line",
            name: "48小时激活率",
            seriesLayoutBy: "row",
            data: vm.echarts_data.h_48,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#00C779" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00D7B7" // 100% 处的颜色
                }
              ]
            }
          },
          {
            type: "line",
            name: "24小时激活率",
            seriesLayoutBy: "row",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0099FF" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00EBFA" // 100% 处的颜色
                }
              ]
            },
            showSymbol: true,
            data: vm.echarts_data.h_24,
            label: {
              show: true,
              position: "bottom",
              color: "#ff4800",
              fontSize: 14,
              formatter: function(params) {
                //根据值判断是否显示提示
                var index = params.value;
                if (index < 0.7) {
                  return "低于平均值";
                } else {
                  return " ";
                }
              }
            },
            // itemStyle: {
            //   color: function (params) {
            //     var index = params.value;
            //     if (index < 0.7) {
            //       return 'red'
            //     } else {
            //       return ''
            //     }
            //   },
            // },
            markLine: {
              silent: true,
              lineStyle: { color: "#fff", type: "dotted" },
              data: [
                {
                  name: "24小时激活基准线",
                  label: {
                    show: true,
                    position: "end",
                    formatter: "24小时\n激活率\n基准线"
                  },
                  yAxis: 0.7
                }
              ]
            }
          },
          {
            type: "line",
            name: "七日留存率",
            data: vm.echarts_data.d_7,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#FF4777" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#FFC3BB" // 100% 处的颜色
                }
              ]
            }
          }
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
#retention_and_activation {
  height: calc(100% - 0.3rem);
}
</style>


