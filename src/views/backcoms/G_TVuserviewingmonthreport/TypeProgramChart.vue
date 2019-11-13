<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="chartData.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TypeProgramChart",
  props: {
    chartData: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["PR_week", "PR_month", "PR_operator"])
  },
  watch: {
    PR_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    chartData(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    }
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 2000);
  },
  methods: {
    drawLine() {
      var barChartSingle = this.$echarts.init(
        document.getElementById(this.chartData.id)
      );
      var option = {
        color: this.chartData.color,
        title: {
          text: this.chartData.title,
          x: "left",
          y: "0",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          top: "18%",
          itemWidth: 20,
          itemHeight: 6
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            align: "left"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "16%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: "35%",
          left: "10",
          right: "10",
          bottom: "5",
          containLabel: true
        },
        dataset: {
          source: this.chartData.data
        },
        xAxis: {
          type: "category",
          axisLabel: {
            //横坐标类目文字
            show: true,
            interval: 0, // 坐标轴显示不全问题解决方案
            textStyle: {
              fontSize: "12" //设置横坐标轴文字大小
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          }
        },
        yAxis: [
          {
            // 刻度线的设置
            splitLine: {
              show: true,
              lineStyle: {
                color: "#939393",
                type: "dotted",
                opacity: 0.2
              }
            },
            axisLine: {
              show: false, //Y轴不显示
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisLabel: {
              //横坐标类目文字
              show: true,
              textStyle: {
                fontSize: "12" //设置横坐标轴文字颜大小
              }
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
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
              formatter: "{value}%", //右侧Y轴文字显示
              textStyle: {
                color: "#333"
              }
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
          {
            type: "bar",
            barWidth: "10",
            barGap: 0 //两条柱子之间的间隙
          },
          {
            type: "bar",
            barWidth: "10",
            barGap: 0 //两条柱子之间的间隙
          },
          {
            type: "line",
            symbol: "circle",
            yAxisIndex: 1
            //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          }
        ]
      };
      barChartSingle.clear();
      barChartSingle.setOption(option);
      window.addEventListener("resize", () => {
        barChartSingle.resize();
      });
    }
  }
};
</script>