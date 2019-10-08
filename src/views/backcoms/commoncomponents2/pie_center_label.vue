<template>
  <div class="m_height_300px m_width_100">
    <!-- <el-row :style="chartData.height" class="m_width_100" :id="chartData.id"></el-row> -->
    <el-row :style="chartData_Change.height" class="m_width_100" :id="chartData_Change.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "pie_center_label",
  props: {
    chartData: {
      type: Object
    }
  },
  watch: {
    // chartData(newValue, oldValue) {
    //   let vm = this;
    //   console.log("AAAAAAAAAAAAAAA")

    //   setTimeout(function () {
    //     vm.drawLine();
    //   }, 1000);
    // },
    chartData_Change(newValue, oldValue) {
      let vm = this;
      // console.log("AAAAAAAAAAAAAAA")

      setTimeout(function () {
        vm.drawLine();
      }, 1000);
    }
  },
  computed: {
    ...mapGetters(["PR_operator"]),
    chartData_Change: {
      get: function () {
        let vm = this;
        if (vm.chartData.id == "GT_UVWR1_A2") {
          if (vm.PR_operator == null || vm.PR_operator.length == 0) {
            return vm.chartData;
          } else {
            let m_color = [];
            let m_data = [];
            let m_data2 = [];
            if (vm.PR_operator.indexOf("移动") > -1) {
              m_color.push(vm.chartData.m_color[0]);
              m_data.push(vm.chartData.m_data[0]);
              m_data2.push(vm.chartData.m_data2[0]);
            }
            if (vm.PR_operator.indexOf("联通") > -1) {
              m_color.push(vm.chartData.m_color[1]);
              m_data.push(vm.chartData.m_data[1]);
              m_data2.push(vm.chartData.m_data2[1]);
            }
            if (vm.PR_operator.indexOf("电信") > -1) {
              m_color.push(vm.chartData.m_color[2]);
              m_data.push(vm.chartData.m_data[2]);
              m_data2.push(vm.chartData.m_data2[2]);
            }
            setTimeout(function () {
              vm.drawLine();
            }, 1000);
            let temp = {
              title: vm.chartData.title,
              id: vm.chartData.id,
              height: vm.chartData.height,
              m_data: m_data,
              m_color: m_color,
              m_data2: m_data2,
              label_formatter: vm.chartData.label_formatter,
              legend_show: vm.chartData.legend_show
            };
            // console.log(temp);
            setTimeout(function () {
              vm.drawLine();
            }, 500);
            return temp;
          }
          // return vm.chartData;
        }
        if (vm.chartData.id == "GT_UVWR1_B1") {
          // console.log(vm.PR_operator);
          if (vm.PR_operator.length == 0) {
            // do nothing.
          }
          // console.log("-------------mytest")
          // console.log(vm.chartData)
          setTimeout(function () {
            vm.drawLine();
          }, 1000);
          return vm.chartData;
        }
        setTimeout(function () {
          vm.drawLine();
        }, 1000);
        return vm.chartData;
      },
      set: function (newValue) { }
    }
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.drawLine();
    }, 1000);
  },
  methods: {
    drawLine() {
      var myEcharts = this.$echarts.init(
        document.getElementById(this.chartData_Change.id)
      );
      let vm = this;
      var m_data = this.chartData_Change.m_data;
      var m_data2 = this.chartData_Change.m_data2;
      var m_color = this.chartData_Change.m_color;
      var legend_show = this.chartData_Change.legend_show;
      var label_formatter = this.chartData_Change.label_formatter;

      var option = {
        tooltip: {
          trigger: "item",
          extraCssText: "width:120px;height:60px",
          formatter: "{a} <br/>{b}:  <br/>{c} ({d}%)"
        },
        legend: [
          {
            show: vm.chartData_Change.legend_show,
            top: "40%",
            left: "45%",
            data: vm.chartData_Change.m_data,
            itemWidth: 12,
            itemHeight: 6,
            width: 40,
            itemGap: 5,
            textStyle: {
              color: "rgba(0,0,0,0.45)"
            }
          }
        ],
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            radius: ["40%", "80%"], // 大小
            color: vm.chartData_Change.m_color,
            // label: {
            //   normal: {
            //     show: false
            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              //饼图图形上的文本标签
              normal: {
                show: true,
                position: "inner", //标签的位置
                textStyle: {
                  //   fontWeight: 200,
                  color: "#000000",
                  fontSize: 12 //文字的字体大小
                },
                formatter: vm.chartData_Change.label_formatter
              }
            },
            hoverAnimation: false, //鼠标移入变大false
            data: vm.chartData_Change.m_data2
          }
        ]
      };
      myEcharts.clear();
      myEcharts.setOption(option);
      window.addEventListener("resize", () => {
        myEcharts.resize();
      });
    }
  }
};
</script>