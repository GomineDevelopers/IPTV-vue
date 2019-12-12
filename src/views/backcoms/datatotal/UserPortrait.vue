<template>
  <div class="UserPortrait">
    <el-row id="eUserPortrait" :style="{width: '100%',height: '100%'}"></el-row>
  </div>
</template>

<script>
export default {
  name: "UserPortrait",
  data() {
    return {};
  },
  props: {
    lineData: Object
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      try {
        let vm = this;
        var myChart = this.$echarts.init(
          document.getElementById(vm.lineData.id)
        );
        var option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
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
          legend: [
            {
              show: true,
              top: "15%",
              left: "70%",
              data: vm.lineData.data1,
              itemWidth: 5,
              itemHeight: 5,
              width: 40,
              padding: [10, 5],
              itemGap: 25,
              textStyle: {
                color: "rgba(0,0,0,0.45);"
              }
            }
          ],
          series: [
            // 外环
            {
              name: "访问来源",
              type: "pie",
              minAngle: 15,
              radius: ["50%", "60%"], // 大小
              center: ["40%", "50%"], // 位置
              color: [
                "#91D4F5",
                "#BE8FF5",
                "#FCC269",
                "#64E0CF",
                "#F99184",
                "#7584F2",
                "#5554F2",
                "#91D4F5",
                "#BE8FF5",
                "#FCC269",
                "#64E0CF",
                "#F99184",
                "#7584F2"
              ],
              label: {
                normal: {
                  formatter: "{d}%" // 只显示百分比
                }
              },
              labelLine: {
                normal: {
                  smooth: 0.2,
                  length: 5,
                  length2: 5
                }
              },
              data: vm.lineData.data2
            }
          ]
        };
        myChart.clear();
        myChart.setOption(option);
        window.addEventListener("resize", () => {
          myChart.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.UserPortrait {
  /* background-color: #ffffff; */
  /* width: 32%;
  height: 352px;
  margin: 7px;
  padding: 10px; */

  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>


<style scoped>
</style>
