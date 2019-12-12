<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="fillinData.id"></el-row> -->
    <el-row class="height_auto" :id="fillinData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "numberOfRegisteredUsers_Change2", //用户注册人数饼图
  props: ["fillinData"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_operator"]),
    fillinData_Change: {
      get: function() {
        try {
          let vm = this;
          let data = [];
          let color = [];
          let d0 = [];
          let d1 = [];
          if (
            vm.fillinData.id == "MOWR_m7_A1" ||
            vm.fillinData.id == "MOWR_m7_A2" ||
            vm.fillinData.id == "MOWR_m7_A3" ||
            vm.fillinData.id == "GT_UVWR1_Y3"
          ) {
            if (this.PR_operator == null || this.PR_operator.length == 0) {
              data = vm.fillinData.data;
              color = vm.fillinData.color;
            } else {
              // data.push(vm.fillinData.data[0]);
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
            // 视图更新
            setTimeout(function() {
              vm.setLineChart();
            }, 1000);
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
    let vm = this;
    setTimeout(function() {
      vm.setLineChart();
    }, 1000);
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
          top: "0%",
          left: "80%",
          data: ["移动", "电信", "联通"],
          itemWidth: 12,
          itemHeight: 6,
          width: 40,
          itemGap: 5,
          textStyle: {
            color: "rgba(0,0,0,0.45)"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: this.fillinData_Change.data[1][0],
            type: "pie",
            minAngle: 15,
            radius: "55%",
            center: ["50%", "50%"],
            data: seriesData,
            color: this.fillinData_Change.color,
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
      lineChart.clear();
      lineChart.setOption(option);
      window.addEventListener("resize", () => {
        lineChart.resize();
      });
    }
  }
};
</script>