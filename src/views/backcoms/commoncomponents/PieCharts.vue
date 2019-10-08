<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="chartData.id"></el-row> -->
    <el-row class="height_auto" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "PieCharts", //饼图组件
  props: {
    chartData: {
      type: Object
    }
  },
  computed: {
    ...mapGetters([
      "PR_operator",
      "UVB_region",
      "ADD_VIP_region",
      "UVB_playmode",
      "ADD_VIP_playmode",
      "UVB_day",
      "UVB_week",
      "UVB_picker"
    ]),
    chartData_Change: {
      get: function() {
        let vm = this;

        let data = [];
        let color = [];

        // ★由于该组件是复用组件-涉及不同筛选条件的渲染-用唯一值（id）做数据+渲染
        if (vm.chartData.id == "operatorProportionChart") {
          // console.log("this.PR_operator");
          // console.log(this.PR_operator);
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            data.push(vm.chartData.data[0]);
            data.push(vm.chartData.data[1]);
            data.push(vm.chartData.data[2]);
            color.push(vm.chartData.color[0]);
            color.push(vm.chartData.color[1]);
            color.push(vm.chartData.color[2]);
          } else {
            if (this.PR_operator.indexOf("移动") > -1) {
              data.push(vm.chartData.data[0]);
              color.push(vm.chartData.color[0]);
            }

            if (this.PR_operator.indexOf("联通") > -1) {
              data.push(vm.chartData.data[1]);
              color.push(vm.chartData.color[1]);
            }
            if (this.PR_operator.indexOf("电信") > -1) {
              data.push(vm.chartData.data[2]);
              color.push(vm.chartData.color[2]);
            }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("operatorProportionChart 视图更新");
            vm.drawLine();
          }, 1000);

          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: color,
            data: data
          };
        }

        if (vm.chartData.id == "regionChart") {
          if (vm.UVB_playmode) {
            // do nothing. -- 监听刷新
          }
          if (vm.UVB_day) {
            // do nothing. --监听
          }
          if (vm.UVB_week) {
            // do nothing. --监听
          }
          if (vm.UVB_picker) {
            // do nothing. --监听
          }
          if (vm.UVB_region == null || vm.UVB_region.length == 0) {
            color = vm.chartData.color;
            data = vm.chartData.data;
          } else {
            if (vm.UVB_region.indexOf("贵阳") > -1) {
              color.push(vm.chartData.color[0]);
              data.push(vm.chartData.data[0]);
            }
            if (vm.UVB_region.indexOf("遵义") > -1) {
              color.push(vm.chartData.color[1]);
              data.push(vm.chartData.data[1]);
            }
            if (vm.UVB_region.indexOf("安顺") > -1) {
              color.push(vm.chartData.color[2]);
              data.push(vm.chartData.data[2]);
            }
            if (vm.UVB_region.indexOf("黔南") > -1) {
              color.push(vm.chartData.color[3]);
              data.push(vm.chartData.data[3]);
            }
            if (vm.UVB_region.indexOf("黔东南") > -1) {
              color.push(vm.chartData.color[4]);
              data.push(vm.chartData.data[4]);
            }
            if (vm.UVB_region.indexOf("铜仁") > -1) {
              color.push(vm.chartData.color[5]);
              data.push(vm.chartData.data[5]);
            }
            if (vm.UVB_region.indexOf("毕节") > -1) {
              color.push(vm.chartData.color[6]);
              data.push(vm.chartData.data[6]);
            }
            if (vm.UVB_region.indexOf("六盘水") > -1) {
              color.push(vm.chartData.color[7]);
              data.push(vm.chartData.data[7]);
            }
            if (vm.UVB_region.indexOf("黔西南") > -1) {
              color.push(vm.chartData.color[8]);
              data.push(vm.chartData.data[8]);
            }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("regionChart 视图更新");
            vm.drawLine();
          }, 1000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: color,
            data: data
          };
        }

        if (vm.chartData.id == "regionChart_vip") {
          if (vm.ADD_VIP_region == null || vm.ADD_VIP_region.length == 0) {
            color = vm.chartData.color;
            data = vm.chartData.data;
          } else {
            if (vm.ADD_VIP_region.indexOf("贵阳") > -1) {
              color.push(vm.chartData.color[0]);
              data.push(vm.chartData.data[0]);
            }
            if (vm.ADD_VIP_region.indexOf("遵义") > -1) {
              color.push(vm.chartData.color[1]);
              data.push(vm.chartData.data[1]);
            }
            if (vm.ADD_VIP_region.indexOf("安顺") > -1) {
              color.push(vm.chartData.color[2]);
              data.push(vm.chartData.data[2]);
            }
            if (vm.ADD_VIP_region.indexOf("黔南") > -1) {
              color.push(vm.chartData.color[3]);
              data.push(vm.chartData.data[3]);
            }
            if (vm.ADD_VIP_region.indexOf("黔东南") > -1) {
              color.push(vm.chartData.color[4]);
              data.push(vm.chartData.data[4]);
            }
            if (vm.ADD_VIP_region.indexOf("铜仁") > -1) {
              color.push(vm.chartData.color[5]);
              data.push(vm.chartData.data[5]);
            }
            if (vm.ADD_VIP_region.indexOf("毕节") > -1) {
              color.push(vm.chartData.color[6]);
              data.push(vm.chartData.data[6]);
            }
            if (vm.ADD_VIP_region.indexOf("六盘水") > -1) {
              color.push(vm.chartData.color[7]);
              data.push(vm.chartData.data[7]);
            }
            if (vm.ADD_VIP_region.indexOf("黔西南") > -1) {
              color.push(vm.chartData.color[8]);
              data.push(vm.chartData.data[8]);
            }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("regionChart_vip 视图更新");
            vm.drawLine();
          }, 1000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: color,
            data: data
          };
        }
        if (vm.chartData.id == "playChart") {
          if (vm.UVB_playmode == null || vm.UVB_playmode.length == 0) {
            color = vm.chartData.color;
            data = vm.chartData.data;
          } else {
            if (vm.UVB_playmode.indexOf("直播") > -1) {
              color.push(vm.chartData.color[0]);
              data.push(vm.chartData.data[0]);
            }
            if (vm.UVB_playmode.indexOf("点播") > -1) {
              color.push(vm.chartData.color[1]);
              data.push(vm.chartData.data[1]);
            }
            if (vm.UVB_playmode.indexOf("回看") > -1) {
              color.push(vm.chartData.color[2]);
              data.push(vm.chartData.data[2]);
            }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("regionChart_vip 视图更新");
            vm.drawLine();
          }, 1000);
          return {
            title: vm.chartData.title,
            id: vm.chartData.id,
            color: color,
            data: data
          };
        }
        if (vm.chartData.id == "playChart_vip") {
          if (vm.ADD_VIP_playmode == null || vm.ADD_VIP_playmode.length == 0) {
            color = vm.chartData.color;
            data = vm.chartData.data;
          } else {
            if (vm.ADD_VIP_playmode.indexOf("直播") > -1) {
              color.push(vm.chartData.color[0]);
              data.push(vm.chartData.data[0]);
            }
            if (vm.ADD_VIP_playmode.indexOf("点播") > -1) {
              color.push(vm.chartData.color[1]);
              data.push(vm.chartData.data[1]);
            }
            if (vm.ADD_VIP_playmode.indexOf("回看") > -1) {
              color.push(vm.chartData.color[2]);
              data.push(vm.chartData.data[2]);
            }
          }
          // 视图更新
          setTimeout(function() {
            // console.log("regionChart_vip 视图更新");
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

      set: function(newValue) {
        //
      }
    }
  },

  data() {
    return {};
  },
  methods: {
    drawLine() {
      var pieChart = this.$echarts.init(
        document.getElementById(this.chartData_Change.id)
      );

      var option = {
        color: this.chartData_Change.color,
        title: {
          text: this.chartData_Change.title,
          x: "left",
          y: "10",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "16%",
          right: "10%",
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: this.chartData_Change.title,
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.chartData_Change.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      pieChart.clear();
      pieChart.setOption(option);
      window.addEventListener("resize", () => {
        pieChart.resize();
      });
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 1000);
  }
};
</script>
<style scoped>
</style>