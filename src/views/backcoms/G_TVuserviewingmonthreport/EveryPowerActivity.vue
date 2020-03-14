<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="lineData.id"></el-row> -->
    <el-row class="height_auto" :id="lineData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "EveryPowerActivity", //折线图Y轴显示百分比
  props: {
    lineData: Object
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 2000);
  },
  watch: {
    PR_month(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.setLineChart();
      }, 2000);
    },
    PR_operator(newValue, oldValue) {
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
  computed: {
    ...mapGetters(["PR_operator", "PR_month"]),
    lineData_Change: {
      get: function() {
        try {
          let vm = this;
          let data = [];
          let color = [];
          if (vm.lineData.id == "everyPowerActivity") {
            if (vm.PR_month) {
              // do nothing. --监听
            }
            if (this.PR_operator == null || this.PR_operator.length == 0) {
              data = vm.lineData.data;
              color = vm.lineData.color;
            } else {
              data.push(vm.lineData.data[0]);
              if (this.PR_operator.indexOf("移动") > -1) {
                color.push(vm.lineData.color[0]);
                data.push(vm.lineData.data[1]);
              }
              if (this.PR_operator.indexOf("联通") > -1) {
                color.push(vm.lineData.color[1]);
                data.push(vm.lineData.data[2]);
              }
              if (this.PR_operator.indexOf("电信") > -1) {
                color.push(vm.lineData.color[2]);
                data.push(vm.lineData.data[3]);
              }
              data.push(vm.lineData.data[4]);
            }
            // 视图更新
            setTimeout(function() {
              vm.setLineChart();
            }, 2000);
            return {
              title: vm.lineData.title,
              id: vm.lineData.id,
              color: color,
              data: data
            };
          }
          setTimeout(function() {
            vm.setLineChart();
          }, 2000);
          return vm.lineData;
        } catch (error) {
          console.log(error);
        }
      },
      set: function(newValue) {}
    }
  },
  methods: {
    setLineChart() {
      try {
        var lineChart = this.$echarts.init(
          document.getElementById(this.lineData_Change.id)
        );
        let seriesData = [];
        //设置series数据条数
        for (let i = 1; i <= this.lineData_Change.data.length - 1; i++) {
          seriesData.push({
            type: "line",
            seriesLayoutBy: "row",
            symbol: "circle"
          });
        }
        var option = {
          color: this.lineData_Change.color,
          textStyle: {
            color: "rgba(0, 0, 0, 0.65)"
          },
          title: {
            text: this.lineData_Change.title,
            x: "2%",
            y: "0%",
            textStyle: {
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14"
            }
          },
          legend: {
            icon: "circle",
            top: "10%",
            itemWidth: 6, // 设置宽度
            itemHeight: 6, // 设置高度
            itemGap: 20, // 设置间距
            textStyle: {
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.65)"
            }
          },
          tooltip: {
            trigger: "axis",
            textStyle: {
              align: "left"
            },
            formatter: function(params) {
              console.log(params);
              let length = params.length;
              let title = params[0].data[0];
              let t1 = params[0].seriesName;
              let marker1 = params[0].marker;
              let value1 = params[0].data[1];
              if (length == 1) {
                return (
                  title +
                  "<br/>" +
                  marker1 +
                  t1 +
                  ":  " +
                  value1 +
                  "%"
                );
              }
              let title2 = params[1].data[0];
              let t2 = params[1].seriesName;
              let marker2 = params[1].marker;
              let value2 = params[1].data[2];
              let str_return = "";
              str_return =
                title +
                "<br/>" +
                marker1 +
                t1 +
                ":  " +
                value1 +
                "%" +
                "<br/>" +
                marker2 +
                t2 +
                ":  " +
                value2 +
                "%";
              if (length == 2) {
                return str_return;
              }
              let title3 = params[2].data[0];
              let t3 = params[2].seriesName;
              let marker3 = params[2].marker;
              let value3 = params[2].data[3];
              str_return += "<br/>" + marker3 + t3 + ":  " + value3 + "%";

              if (length == 3) {
                return str_return;
              }
              let title4 = params[3].data[0];
              let t4 = params[3].seriesName;
              let marker4 = params[3].marker;
              let value4 = params[3].data[4];
              str_return += "<br/>" + marker4 + t4 + ":  " + value4 + "%";
              if (length == 4) {
                return str_return;
              }
              let title5 = params[4].data[0];
              let t5 = params[4].seriesName;
              let marker5 = params[4].marker;
              let value5 = params[4].data[5];
              str_return += "<br/>" + marker5 + t5 + ":  " + value5 + "%";
              if (length == 5) {
                return str_return;
              }
            }
          },
          //图表自带工具
          toolbox: {
            show: true,
            top: "10%",
            right: "6%",
            feature: {
              saveAsImage: {}
            }
          },
          dataset: {
            source: this.lineData_Change.data
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
              //横坐标类目文字
              show: true,
              interval: 0, // 坐标轴显示不全问题解决方案
              rotate: 40,
              textStyle: {
                fontSize: "12" //设置横坐标轴文字大小
              }
            }
          },
          yAxis: {
            gridIndex: 0,
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value}%"
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
                type: "dotted",
                opacity: 0.2
              }
            }
          },
          grid: {
            top: "30%",
            left: "5%",
            right: "5%",
            bottom: "10%"
          },
          series: seriesData
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