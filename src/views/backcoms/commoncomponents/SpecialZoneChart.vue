<template>
  <div class="height_auto">
    <!-- <el-row class="height_auto" :id="chartData.id"></el-row> -->
    <el-row class="height_auto" :id="chartData.id"></el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SpecialZoneChart", //饼图组件
  props: {
    chartData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_picker", "PR_value_specialName"])
  },
  watch: {
    PR_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    },
    PR_value_specialName(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawLine();
      }, 2000);
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let vm = this;
    setTimeout(function() {
      vm.drawLine();
    }, 1000);
  },
  methods: {
    drawLine() {
      let vm = this;
      var pieChart = this.$echarts.init(
        document.getElementById(this.chartData.id)
      );
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //   orient: 'vertical',
        //   x: 'left',
        //   data: ['用户点击']
        // },
        title: {
          text: vm.chartData.text,
          // text: String(vm.subscriber_proportion) + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "bold",
            color: "red",
            fontSize: "22"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "0",
          right: "center",
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            // name: '用户点击',
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            itemStyle: {
              color: "#EC7C30"
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.chartData.data
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
  }
};
</script>