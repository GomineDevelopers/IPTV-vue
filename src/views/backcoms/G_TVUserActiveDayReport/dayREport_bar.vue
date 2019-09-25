<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="fillinData.id"></el-row> -->
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
  computed: {
    ...mapGetters(["PR_operator"]),
    fillinData_Change: {
      get: function () {
        let vm = this;
        let data = [];
        let length1 = vm.fillinData.data.length;
        // let length2 = vm.fillinData.data[0].length;
        // console.log("~~~~~~Change_dayR");

        let i;
        let j;
        let d0_0 = [];
        let d0_1 = [];
        let d1_0 = [];
        let d1_1 = [];

        // if (
        //   vm.fillinData.id == "newAddUserNumber_UADR" ||
        //   vm.fillinData.id == "outLookTime_UADR" ||
        //   vm.fillinData.id == "dayLooktime_UADR"
        // )
        if (
          vm.fillinData.id == "newAddUserNumber_UADR" ||
          vm.fillinData.id == "outLookTime_UADR"
        ) {
          if (this.PR_operator == null || this.PR_operator.length == 0) {
            data = vm.fillinData.data;
            // console.log("~~all data");
            // console.log(data);
            // console.log(data[0][0]);
            // console.log(data[0][1]);
            // console.log(data[1][0]);
            // console.log(data[1][1]);
          } else {
            d0_0.push(vm.fillinData.data[0][0][0]);
            d0_1.push(vm.fillinData.data[0][1][0]);
            d1_0.push(vm.fillinData.data[1][0][0]);
            d1_1.push(vm.fillinData.data[1][1][0]);
            // console.log(d0_0);
            // console.log(d0_1);
            // console.log(d1_0);
            // console.log(d1_1);
            for (i = 0; i < length1; i++) {
              data.push([]);
              // for (j = 0; j < length2; j++) {
              //   data[i].push([]);
              // }
            }
            // console.log("~~~~data");
            // console.log(data);
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
            // data.push(d0);
            // console.log(d0_0);
            // console.log(d0_1);
            // console.log(d1_0);
            // console.log(d1_1);
            // data[0][0].push(d0_0);
            // data[0][1].push(d0_1);
            // data[1][0].push(d1_0);
            // data[1][1].push(d1_1);
            data[0].push(d0_0);
            data[0].push(d0_1);
            data[1].push(d1_0);
            data[1].push(d1_1);
            // console.log("~~~~data");
            // console.log(data);
          }

          // 视图更新
          setTimeout(function () {
            // console.log("视图更新");
            vm.setLineChart();
          }, 1000);
          return {
            title: vm.fillinData.title,
            id: vm.fillinData.id,
            color: vm.fillinData.color,
            data: data
          };
        }
        // 视图更新
        setTimeout(function () {
          // console.log("视图更新");
          vm.setLineChart();
        }, 1000);
        return vm.fillinData;
      },
      set: function (newValue) { }
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.setLineChart();
    }, 1000);
  },
  methods: {
    setLineChart() {
      var lineChart = this.$echarts.init(
        document.getElementById(this.fillinData_Change.id)
      );
      //   循环获取数据
      let seriesData = [];
      let data = {};
      let legendlist = [];
      let xAxisdata = [];
      //设置series数据条数
      // console.log("~~~~~~Change_dayR");
      // console.log(this.fillinData_Change);

      for (let i = 0; i < this.fillinData_Change.data.length; i++) {
        data = {};
        data.name = this.fillinData_Change.data[i][1][0];
        data.type = "bar";
        data.data = [];
        data.label = {
          show: true,
          position: "top",
          formatter: "{c}"
        };
        data.barWidth = "40";
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

        legendlist.push(this.fillinData_Change.data[i][1][0]);
        seriesData.push(data);
      }
      // console.log("~~~~~~~ seriesData ");
      // console.log(seriesData);

      // console.log(seriesData)
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
          right: "right",
          data: legendlist,
          // icon: "circle",
          textStyle: {
            color: this.fillinData_Change.color
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
          formatter: "{a} <br/>{b} : {c}"
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