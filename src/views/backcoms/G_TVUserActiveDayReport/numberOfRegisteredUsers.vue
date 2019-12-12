<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="fillinData.id"></el-row> -->
    <el-row class="height_auto" :id="fillinData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "numberOfRegisteredUsers", //用户注册人数饼图
  props: ["fillinData"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_day"]),
    fillinData_Change: {
      get: function() {
        try {
          let vm = this;
          let data = [];
          let color = [];
          let d0 = [];
          let d1 = [];
          if (vm.fillinData.id == "registeredUsers_UADR") {
            if (vm.PR_day) {
              // do nothing. -- 监听
            }
            if (this.PR_operator == null || this.PR_operator.length == 0) {
              data = vm.fillinData.data;
              color = vm.fillinData.color;
            } else {
              d0.push(vm.fillinData.data[0][0]);
              d1.push(vm.fillinData.data[1][0]);
              if (this.PR_operator.indexOf("移动") > -1) {
                d0.push(vm.fillinData.data[0][1]);
                d1.push(vm.fillinData.data[1][1]);
                color.push(vm.fillinData.color[0]);
              }
              if (this.PR_operator.indexOf("联通") > -1) {
                d0.push(vm.fillinData.data[0][2]);
                d1.push(vm.fillinData.data[1][2]);
                color.push(vm.fillinData.color[1]);
              }
              if (this.PR_operator.indexOf("电信") > -1) {
                d0.push(vm.fillinData.data[0][3]);
                d1.push(vm.fillinData.data[1][3]);
                color.push(vm.fillinData.color[2]);
              }
              data.push(d0);
              data.push(d1);
            }
            setTimeout(function() {
              vm.setLineChart();
            }, 300);
            return {
              title: vm.fillinData.title,
              id: vm.fillinData.id,
              color: color,
              data: data
            };
          }

          return vm.fillinData;
        } catch (error) {
          console.log(error);
        }
      },
      set: function(newValue) {}
    }
  },
  mounted() {
    this.setLineChart();
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(
        document.getElementById(this.fillinData_Change.id)
      );
      //循环获取数据
      let seriesData = [];
      //设置series数据条数
      for (let i = 1; i <= this.fillinData_Change.data[0].length - 1; i++) {
        seriesData.push({
          name: this.fillinData_Change.data[0][i],
          value: this.fillinData_Change.data[1][i]
        });
      }
      // 数据配置项
      let option = {
        title: {
          text: this.fillinData_Change.title,
          x: "left",
          padding: [11, 0, 0, 18],
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          orient: "vertical",
          padding: [71, 100, 0, 0],
          right: "right",
          data: ["移动", "电信", "联通"],
          // icon: "circle",
          textStyle: {
            color: "#8C8C8C"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //图表自带工具
        toolbox: {
          show: true,
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: this.fillinData_Change.data[1][0],
            type: "pie",
            minAngle: 15,
            radius: "55%",
            center: ["50%", "60%"],
            data: seriesData,
            color: this.fillinData_Change.color,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            // //// 新增
            selectedMode: "single",
            label: {
              normal: {
                // position: "inner",
                // color: "#000",
                fontSize: "10",
                formatter: "{b}:\n {c}"
              }
            },
            labelLine: {
              show: false,
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            emphasis: false,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
            // ////
          }
        ]
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