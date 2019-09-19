<template>
  <div class="height_auto">
    <!-- <div class="pie_hollow_chart" :id="smoothLineData.id"></div> -->
    <div class="pie_hollow_chart" :id="smoothLineData_Change.id"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SmoothLineChart_Change2", //专题专区数据报告
  props: {
    smoothLineData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_operator"]),
    smoothLineData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        let color = [];

        if (vm.smoothLineData.id == "MOWR_m2_A1") {
          if (vm.PR_operator == null || vm.PR_operator.length == 0) {
            color = vm.smoothLineData.color;
            data = vm.smoothLineData.data;
          } else {
            data.push(vm.smoothLineData.data[0]);
            if (vm.PR_operator.indexOf("移动") > -1) {
              color.push(vm.smoothLineData.color[0]);
              data.push(vm.smoothLineData.data[1]);
            }
            if (vm.PR_operator.indexOf("联通") > -1) {
              color.push(vm.smoothLineData.color[1]);
              data.push(vm.smoothLineData.data[2]);
            }
            if (vm.PR_operator.indexOf("电信") > -1) {
              color.push(vm.smoothLineData.color[2]);
              data.push(vm.smoothLineData.data[3]);
            }
          }
          setTimeout(function() {
            vm.setLineChart();
          }, 1000);
          let temp = {
            title: vm.smoothLineData.title,
            id: vm.smoothLineData.id,
            height: vm.smoothLineData.height,
            color: color,
            data: data
          };
          // console.log(temp);
          return temp;
        }
        return vm.smoothLineData;
      }
    },
    set: function(newValue) {}
  },

  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 1000);
  },
  methods: {
    setLineChart() {
      var smoothLineChart = this.$echarts.init(
        document.getElementById(this.smoothLineData_Change.id)
      );
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.smoothLineData_Change.data.length - 1; i++) {
        seriesData.push({
          type: "line",
          seriesLayoutBy: "row",
          symbol: "none",
          smooth: true
        });
      }
      var option = {
        color: this.smoothLineData_Change.color,
        textStyle: {
          color: "rgba(0, 0, 0, 0.65)"
        },
        title: {
          text: this.smoothLineData_Change.title,
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
          top: "10%",
          itemWidth: 12, // 设置宽度
          itemHeight: 7, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        grid: {
          top: "20%",
          left: "12%",
          right: "5%",
          bottom: "15%"
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            align: "left"
          },
          formatter: function(params) {
            // console.log(params);
            let title = params[0].data[0];

            let length = params.length;

            let t1 = params[0].seriesName;
            let marker1 = params[0].marker;
            let value1 = params[0].data[1];

            if (length == 1) {
              return title + ":<br/>" + marker1 + t1 + ":" + value1 + "%";
            }

            let t2 = params[1].seriesName;
            let t3 = params[2].seriesName;
            let marker2 = params[1].marker;
            let marker3 = params[2].marker;
            let value2 = params[0].data[2];
            let value3 = params[0].data[3];

            return (
              title +
              ":<br/>" +
              marker1 +
              t1 +
              ":" +
              value1 +
              "%" +
              "<br/>" +
              marker2 +
              t2 +
              ":" +
              value2 +
              "%" +
              "<br/>" +
              marker3 +
              t3 +
              ":" +
              value3 +
              "%"
            );
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "9%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        dataset: {
          source: this.smoothLineData_Change.data
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //设置数据开始显示的起点在Y轴上
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          },
          axisTick: {
            alignWithLabel: true //设置坐标轴刻度与坐标对齐
          }
        },
        yAxis: {
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
        },
        series: seriesData
      };
      smoothLineChart.clear();
      smoothLineChart.setOption(option);
      window.addEventListener("resize", () => {
        smoothLineChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.pie_hollow_chart {
  height: 300px;
}
</style>
