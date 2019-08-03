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
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(
        document.getElementById("eUserPortrait")
      );
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
          {
            show: true,
            top: "15%",
            left: "80%",
            data: ["少儿", "电影", "热剧", "游戏", "纪实", "体育"],
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
            radius: ["50%", "60%"], // 大小
            center: ["40%", "50%"], // 位置
            color: [
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
            data: [
              { value: 1035, name: "少儿" },
              { value: 979, name: "电影" },
              { value: 848, name: "热剧" },
              { value: 748, name: "游戏" },
              { value: 659, name: "纪实" },
              { value: 548, name: "体育" }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
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
