<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "BarGraph",
  props: {
    chartData: {
      type: Object
    }
  },
  computed: {
    ...mapGetters([
      "UVB_region",
      "UVB_operator",
      "ADD_VIP_region",
      "ADD_VIP_operator"
    ]),
    chartData_Change: {
      get: function() {
        let vm = this;
        let data = [];
        let color = [];

        if (vm.chartData.id == "operatorChart") {
          color = [];
          let temp_chartData = {
            title: "",
            id: "",
            color: [],
            data: []
          };
          let i;
          let length = vm.chartData.data.length;
          // console.log("~~~~~~~~~~~~~~~AA");
          // console.log(vm.chartData);

          // ///// 先-运营商（数据内部）

          let dx = [];
          for (i = 0; i < length; i++) {
            dx.push([]);
          }
          let color_t = [];
          let temp_chartData_t = {
            title: "",
            id: "",
            color: [],
            data: []
          };
          // console.log("~~~~~~~~~~~~~~~AA2");
          // console.log(dx);
          if (vm.UVB_operator == null || vm.UVB_operator.length == 0) {
            // console.log("~~~~~~~~~~~~~~~bb");
            // console.log(vm.chartData);
            color_t = vm.chartData.color;
            temp_chartData_t.data = vm.chartData.data;
            // console.log(color_t);
          } else {
            // console.log("~~~~~~~~~~~~~~~cc");
            // console.log(vm.chartData);
            for (i = 0; i < length; i++) {
              dx[i].push(vm.chartData.data[i][0]);
            }
            if (this.UVB_operator.indexOf("移动") > -1) {
              color_t.push(vm.chartData.color[0]);
              for (i = 0; i < length; i++) {
                dx[i].push(vm.chartData.data[i][1]);
              }
            }
            if (this.UVB_operator.indexOf("联通") > -1) {
              color_t.push(vm.chartData.color[1]);
              for (i = 0; i < length; i++) {
                dx[i].push(vm.chartData.data[i][2]);
              }
            }
            if (this.UVB_operator.indexOf("电信") > -1) {
              color_t.push(vm.chartData.color[2]);
              for (i = 0; i < length; i++) {
                dx[i].push(vm.chartData.data[i][3]);
              }
            }
            for (i = 0; i < length; i++) {
              temp_chartData_t.data.push(dx[i]);
            }
            // console.log("~~~~~~~~~~dd");
            // console.log(color_t);
            // console.log(temp_chartData_t);
          }

          // //// 后-地区（数据一条）
          // 即 1条"地区" 包括 3个运营商

          // temp_chartData.data = vm.chartData.data;
          // color = vm.chartData.color;

          for (i = 0; i < length; i++) {
            Vue.set(temp_chartData.data, i, temp_chartData_t.data[i]);
          }
          color = color_t;

          // console.log("~~~~~~~~~~zzz");
          // console.log(temp_chartData);
          // console.log(color);
          // temp_chartData.data = temp_chartData_t.data;
          if (vm.UVB_region == null || vm.UVB_region.length == 0) {
            data = temp_chartData.data;
          } else {
            // for (i = 0; i < length; i++) {
            //   data.push([]);
            // }
            // data = temp_chartData.data; // 实际api
            // let t_length = vm.UVB_region.length;
            // data.push(temp_chartData.data[0]);
            // for (let t_i = 0; t_i < t_length; t_i++) {
            //   data.push(temp_chartData.data[t_i + 1]);
            // }
            let t_length = temp_chartData.data.length -1;
            data.push(temp_chartData.data[0]);
            for (let t_i = 0; t_i < t_length; t_i++) {
              data.push(temp_chartData.data[t_i + 1]);
            }
            // data.push(temp_chartData.data[0]);
            // if (vm.UVB_region.indexOf("贵阳") > -1) {
            //   data.push(temp_chartData.data[1]);
            // }
            // if (vm.UVB_region.indexOf("遵义") > -1) {
            //   data.push(temp_chartData.data[2]);
            // }
            // if (vm.UVB_region.indexOf("安顺") > -1) {
            //   data.push(temp_chartData.data[3]);
            // }
            // if (vm.UVB_region.indexOf("黔南") > -1) {
            //   data.push(temp_chartData.data[4]);
            // }
            // if (vm.UVB_region.indexOf("黔东南") > -1) {
            //   data.push(temp_chartData.data[5]);
            // }
            // if (vm.UVB_region.indexOf("铜仁") > -1) {
            //   data.push(temp_chartData.data[6]);
            // }
            // if (vm.UVB_region.indexOf("毕节") > -1) {
            //   data.push(temp_chartData.data[7]);
            // }
            // if (vm.UVB_region.indexOf("六盘水") > -1) {
            //   data.push(temp_chartData.data[8]);
            // }
            // if (vm.UVB_region.indexOf("黔西南") > -1) {
            //   data.push(temp_chartData.data[9]);
            // }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("operatorChart_vip 视图更新");
            vm.drawLine();
          }, 1000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: color,
            data: data
          };
        }

        if (vm.chartData.id == "operatorChart_vip") {
          color = [];
          let temp_chartData = {
            title: "",
            id: "",
            color: [],
            data: []
          };
          let i;
          let length = vm.chartData.data.length;

          // ///// 先-运营商（数据内部）

          let dx = [];
          for (i = 0; i < length; i++) {
            dx.push([]);
          }
          let color_t = [];
          let temp_chartData_t = {
            title: "",
            id: "",
            color: [],
            data: []
          };
          if (vm.ADD_VIP_operator == null || vm.ADD_VIP_operator.length == 0) {
            color_t = vm.chartData.color;
            temp_chartData_t.data = vm.chartData.data;
          } else {
            for (i = 0; i < length; i++) {
              dx[i].push(vm.chartData.data[i][0]);
            }
            if (this.ADD_VIP_operator.indexOf("移动") > -1) {
              color_t.push(vm.chartData.color[0]);
              for (i = 0; i < length; i++) {
                dx[i].push(vm.chartData.data[i][1]);
              }
            }
            if (this.ADD_VIP_operator.indexOf("联通") > -1) {
              color_t.push(vm.chartData.color[1]);
              for (i = 0; i < length; i++) {
                dx[i].push(vm.chartData.data[i][2]);
              }
            }
            if (this.ADD_VIP_operator.indexOf("电信") > -1) {
              color_t.push(vm.chartData.color[2]);
              for (i = 0; i < length; i++) {
                dx[i].push(vm.chartData.data[i][3]);
              }
            }
            for (i = 0; i < length; i++) {
              temp_chartData_t.data.push(dx[i]);
            }
          }

          // //// 后-地区（数据一条）
          // 即 1条"地区" 包括 3个运营商

          // temp_chartData.data = vm.chartData.data;
          // color = vm.chartData.color;

          for (i = 0; i < length; i++) {
            Vue.set(temp_chartData.data, i, temp_chartData_t.data[i]);
          }
          color = color_t;
          if (vm.ADD_VIP_region == null || vm.ADD_VIP_region.length == 0) {
            data = temp_chartData.data;
          } else {
            // data = temp_chartData.data;
            // let t_length = vm.UVB_region.length;
            // data.push(temp_chartData.data[0]);
            // for (let t_i = 0; t_i < t_length; t_i++) {
            //   data.push(temp_chartData.data[t_i + 1]);
            // }
            let t_length = temp_chartData.data.length -1;
            data.push(temp_chartData.data[0]);
            for (let t_i = 0; t_i < t_length; t_i++) {
              data.push(temp_chartData.data[t_i + 1]);
            }
            // data.push(temp_chartData.data[0]);
            // if (vm.ADD_VIP_region.indexOf("贵阳") > -1) {
            //   data.push(temp_chartData.data[1]);
            // }
            // if (vm.ADD_VIP_region.indexOf("遵义") > -1) {
            //   data.push(temp_chartData.data[2]);
            // }
            // if (vm.ADD_VIP_region.indexOf("安顺") > -1) {
            //   data.push(temp_chartData.data[3]);
            // }
            // if (vm.ADD_VIP_region.indexOf("黔南") > -1) {
            //   data.push(temp_chartData.data[4]);
            // }
            // if (vm.ADD_VIP_region.indexOf("黔东南") > -1) {
            //   data.push(temp_chartData.data[5]);
            // }
            // if (vm.ADD_VIP_region.indexOf("铜仁") > -1) {
            //   data.push(temp_chartData.data[6]);
            // }
            // if (vm.ADD_VIP_region.indexOf("毕节") > -1) {
            //   data.push(temp_chartData.data[7]);
            // }
            // if (vm.ADD_VIP_region.indexOf("六盘水") > -1) {
            //   data.push(temp_chartData.data[8]);
            // }
            // if (vm.ADD_VIP_region.indexOf("黔西南") > -1) {
            //   data.push(temp_chartData.data[9]);
            // }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("operatorChart_vip 视图更新");
            vm.drawLine();
          }, 1000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: color,
            data: data
          };
        }
        setTimeout(function() {
          vm.drawLine();
        }, 1000);
        return vm.chartData;
      },
      set: function(newValue) {}
    }
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 1000);
  },
  methods: {
    drawLine() {
      let vm = this;
      var barGraphChart = vm.$echarts.init(
        document.getElementById(vm.chartData_Change.id)
      );
      let seriesData = [];
      // console.log("~~~vm.chartData_Change:");
      // console.log(vm.chartData_Change);
      //设置series数据条数
      for (let i = 1; i <= vm.chartData_Change.data[0].length - 1; i++) {
        seriesData.push({ type: "bar", stack: "堆叠", barWidth: "12" });
      }
      var option = {
        color: vm.chartData_Change.color,
        title: {
          text: vm.chartData_Change.title,
          x: "left",
          y: "10",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          top: "10%",
          itemWidth: 12,
          itemHeight: 7
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
          top: "8%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: "35%",
          left: "8%",
          right: "1%",
          bottom: "10%"
        },
        dataset: {
          source: vm.chartData_Change.data
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
        yAxis: {
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
        series: seriesData
      };
      barGraphChart.clear();
      barGraphChart.setOption(option);
      window.addEventListener("resize", () => {
        barGraphChart.resize();
      });
    }
  }
};
</script>