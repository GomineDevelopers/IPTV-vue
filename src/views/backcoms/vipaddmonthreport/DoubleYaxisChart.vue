<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="lineData.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "DoubleYaxisChart", //折线图
  props: {
    lineData: Object
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_month"])
  },
  watch: {
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    lineData(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 2000);
  },
  methods: {
    setLineChart() {
      try {
        var lineChart = this.$echarts.init(
          document.getElementById(this.lineData.id)
        );
        var option = {
          color: this.lineData.color,
          textStyle: {
            color: "rgba(0, 0, 0, 0.65)"
          },
          title: {
            text: this.lineData.title,
            x: "2%",
            y: "0%",
            textStyle: {
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14"
            }
          },
          legend: {
            icon: "re",
            top: "8%",
            itemWidth: 20, // 设置宽度
            itemHeight: 2, // 设置高度
            itemGap: 20, // 设置间距
            textStyle: {
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.65)"
            }
          },
          grid: {
            top: "25%",
            left: "7%",
            right: "5%",
            bottom: "12%"
          },
          tooltip: {
            trigger: "axis",
            textStyle: {
              align: "left"
            }
          },
          //图表自带工具
          toolbox: {
            show: true,
            top: "7%",
            right: "6%",
            feature: {
              saveAsImage: {}
            }
          },
          dataset: {
            source: this.lineData.data
          },
          xAxis: {
            type: "category",
            boundaryGap: false, //设置数据开始显示的起点在Y轴上
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisTick: {
              alignWithLabel: true //设置坐标轴刻度与坐标对齐
            },
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          },
          yAxis: [
            {
              type: "value",
              gridIndex: 0,
              axisTick: {
                show: false //设置坐标轴刻度不显示
              },
              axisLine: {
                show: false
              },
              // 刻度线的设置
              splitLine: {
                show: false
              }
            },
            {
              type: "value",
              gridIndex: 0,
              axisTick: {
                show: false //设置坐标轴刻度不显示
              },
              axisLabel: {
                show: true,
                interval: "auto"
              },
              axisLine: {
                show: false
              },
              // 刻度线的设置
              splitLine: {
                show: false
              }
            }
          ],
          series: [
            { type: "line", seriesLayoutBy: "row", symbol: "none" },
            {
              type: "line",
              seriesLayoutBy: "row",
              symbol: "none",
              yAxisIndex: 1
              //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            }
          ]
        };
        lineChart.clear();
        lineChart.setOption(option);
        window.addEventListener("resize", () => {
          lineChart.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>