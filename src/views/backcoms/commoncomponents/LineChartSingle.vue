<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="lineData.id"></el-row> -->
    <el-row class="height_auto" :id="lineData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "LineChartSingle", //折线图
  props: {
    lineData: Object
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.lineData)
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 1000);
  },
  computed: {
    ...mapGetters(["PR_operator"]),
    lineData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        let color = [];
        if (
          vm.lineData.id == "registeredUsers_UVMR" ||
          vm.lineData.id == "monthNewRegUser_UVMR" ||
          vm.lineData.id == "monthCancellationUser_UVMR" ||
          vm.lineData.id == "G_TVRegionUser" ||
          vm.lineData.id == "weekNewUser"
        ) {
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
            console.log(color);
            console.log(data);
          }

          // 视图更新
          setTimeout(function() {
            vm.setLineChart();
          }, 1000);
          return {
            title: vm.lineData.title,
            id: vm.lineData.id,
            color: color,
            data: data
          };
        }
        return vm.lineData;
      },
      set: function(newValue) {}
    }
  },
  methods: {
    setLineChart() {
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
        grid: {
          top: "30%",
          left: "8%",
          right: "5%",
          bottom: "10%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          textStyle: {
            align: "left"
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
              type: "dotted",
              opacity: 0.2
            }
          }
        },
        series: seriesData
      };
      lineChart.clear();
      lineChart.setOption(option);
      window.addEventListener("resize", () => {
        lineChart.resize();
      });
    }
  }
};
</script>