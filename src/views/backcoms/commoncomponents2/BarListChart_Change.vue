<template>
  <div class="height_auto">
    <!-- <div class="pie_hollow_chart" :id="barListData.id"></div> -->
    <div :style="barListData.height" :id="barListData.id"></div>

    <!-- <div v-if="!barListData.id == 'GT_UVWR1_J1'" class="pie_hollow_chart" :id="barListData.id"></div> -->
    <!-- <div v-if="barListData.id == 'GT_UVWR1_J1'" class="pie_hollow_chart2" :id="barListData.id"></div> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BarListChart_Change", //专题专区数据报告
  props: {
    barListData: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["PR_week"]),
  },
  watch: {
    PR_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        vm.setLineChart();
      }, 1000);
    },
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.setLineChart();
    }, 1000);
  },
  methods: {
    setLineChart() {
      var barListChart = this.$echarts.init(
        document.getElementById(this.barListData.id)
      );
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.barListData.data[0].length - 1; i++) {
        seriesData.push({
          type: "bar",
          barWidth: "16",
          barMinHeight: 10,
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: "right", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 12
                }
              }
            }
          }
        });
      }
      var option = {
        color: this.barListData.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.barListData.title,
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
          top: "2%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        grid: {
          top: "10%",
          left: "32%",
          right: "8%",
          bottom: "5%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            align: "left"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "1%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        dataset: {
          source: this.barListData.data
        },
        xAxis: {
          type: "value",
          axisTick: {
            show: false //设置坐标轴刻度不显示
          },
          axisLabel: {
            show: false
          },
          // 刻度线的设置
          splitLine: {
            show: false
          },
          axisLine: {
            show: false //X轴不显示
          }
        },
        yAxis: {
          type: "category",
          gridIndex: 0,
          axisTick: {
            show: false //设置坐标轴刻度不显示
          },
          // 刻度线的设置
          splitLine: {
            show: false
          },
          axisLine: {
            show: false, //Y轴不显示
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            formatter: function (val) {
              var strs = val.split(""); //字符串数组
              var str = "";
              for (var i = 0, s; (s = strs[i++]);) {
                //遍历字符串数组
                str += s;
                if (!(i % 9)) str += "\n";
              }
              return str;
            }
          }
        },
        series: seriesData
      };
      barListChart.clear();
      barListChart.setOption(option);
      window.addEventListener("resize", () => {
        barListChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.pie_hollow_chart {
  height: 500px;
}
.pie_hollow_chart2 {
  height: 600px;
}
</style>
