<template>
  <div class="height_auto">
    <el-row class="height_auto" :id="fillinData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "registereduserpie", //用户注册人数饼图
  props: ["fillinData"],
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 1000);
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_day"]),
    fillinData_Change: {
      get: function() {
        try {
          let vm = this;
          let data = [];
          let length1 = vm.fillinData.data.length;
          let length2 = vm.fillinData.data[0].length;
          let i;
          let j;
          let d0_0 = [];
          let d0_1 = [];
          let d1_0 = [];
          let d1_1 = [];

          if (vm.fillinData.id == "turnOnRate_UADR") {
            if (vm.PR_day) {
              // do nothing. -- 监听
            }
            if (this.PR_operator == null || this.PR_operator.length == 0) {
              data = vm.fillinData.data;
            } else {
              d0_0.push(vm.fillinData.data[0][0][0]);
              d0_1.push(vm.fillinData.data[0][1][0]);
              d1_0.push(vm.fillinData.data[1][0][0]);
              d1_1.push(vm.fillinData.data[1][1][0]);
              for (i = 0; i < length1; i++) {
                data.push([]);
              }
              if (this.PR_operator.indexOf("移动") > -1) {
                d0_0.push(vm.fillinData.data[0][0][1]);
                d0_1.push(vm.fillinData.data[0][1][1]);
                d1_0.push(vm.fillinData.data[1][0][1]);
                d1_1.push(vm.fillinData.data[1][1][1]);
              }
              if (this.PR_operator.indexOf("联通") > -1) {
                d0_0.push(vm.fillinData.data[0][0][2]);
                d0_1.push(vm.fillinData.data[0][1][2]);
                d1_0.push(vm.fillinData.data[1][0][2]);
                d1_1.push(vm.fillinData.data[1][1][2]);
              }
              if (this.PR_operator.indexOf("电信") > -1) {
                d0_0.push(vm.fillinData.data[0][0][3]);
                d0_1.push(vm.fillinData.data[0][1][3]);
                d1_0.push(vm.fillinData.data[1][0][3]);
                d1_1.push(vm.fillinData.data[1][1][3]);
              }
              data[0].push(d0_0);
              data[0].push(d0_1);
              data[1].push(d1_0);
              data[1].push(d1_1);
            }
            setTimeout(function() {
              vm.setLineChart();
            }, 1000);
            return {
              title: vm.fillinData.title,
              id: vm.fillinData.id,
              color: vm.fillinData.color,
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

  methods: {
    setLineChart() {
      try {
        var lineChart = this.$echarts.init(
          document.getElementById(this.fillinData_Change.id)
        );
        // 循环获取数据
        let seriesData = [];
        let data = {};
        // 设置series数据条数
        let xAxisdata = [];
        for (let i = 0; i < this.fillinData_Change.data.length; i++) {
          data = {};
          data.name = this.fillinData_Change.data[i][1][0];
          data.type = "bar";
          data.data = [];
          data.barWidth = "40";
          data.label = {
            show: true,
            position: "top",
            formatter: "{c}%"
          };
          data.barGap = "5%";
          data.itemStyle = {
            color: this.fillinData_Change.color[i]
          };

          for (
            let j = 1;
            j <= this.fillinData_Change.data[i][1].length - 1;
            j++
          ) {
            data.data.push(this.fillinData_Change.data[i][1][j]);
            if (i == this.fillinData_Change.data.length - 1) {
              xAxisdata.push(this.fillinData_Change.data[i][0][j]);
            }
          }
          seriesData.push(data);
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
            orient: "horizontal",
            padding: [20, 50, 0, 50],
            right: "center",
            data: ["平均", "今日"],
            // icon: "circle",
            textStyle: {
              color: ["#82b65f", "#70a7d8"]
            }
          },
          xAxis: {
            type: "category",

            // 留白空隙
            boundaryGap: [0, 0.5],
            axisLine: {
              lineStyle: {
                color: "#A0A4AA"
              },
              show: false
            },
            axisLabel: {
              padding: [10, 0, 0, 0],
              fontSize: 14,
              color: "#111"
            },
            // 影藏刻度
            axisTick: {
              show: false
            },
            data: xAxisdata
          },
          yAxis: {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                color: "#939393",
                opacity: 0.2
              }
            },
            axisLine: {
              lineStyle: {
                color: "#A0A4AA"
              },
              show: false
            },
            axisLabel: {
              formatter: "{value}%"
            },
            // 影藏刻度
            axisTick: {
              show: false
            }
          },
          grid: {
            top: "83",
            left: "3%",
            right: "50",
            bottom: "55",
            containLabel: true
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} %"
          },
          //图表自带工具
          toolbox: {
            show: true,
            right: "6%",
            feature: {
              saveAsImage: {}
            }
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