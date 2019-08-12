<template>
  <div class="UserStructure">
    <div id="echartsUA" :style="{width: '14vw',height: '14vw'}"></div>
    <div class="arrow" :style="{width: '3vw',height: '14vw'}">
      <p class="a_content">订购用户</p>
    </div>
    <div id="echartsUB" :style="{width: '14vw',height: '14vw'}"></div>
  </div>
</template>

<script>
export default {
  name: "UserStructure",
  data() {
    return {};
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("echartsUA"));

      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["45%", "50%"],
            selectedMode: "single",
            color: ["#FCB84F", "#F97E6F"],

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            data: [{ value: 23, name: "订购" }, { value: 77, name: "未订购" }],
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

      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawLine2() {
      var myChart = this.$echarts.init(document.getElementById("echartsUB"));

      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["45%", "50%"],
            selectedMode: "single",
            color: ["#FCB84F", "#B37CF4", "#7ECDF4", "#F97E6F", "#4ADBC7"],

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 0
              }
            },
            data: [
              { value: 11, name: "firsttime" },
              { value: 13, name: "onetime" },
              { value: 19, name: "周期性购买" },
              { value: 37, name: "忠诚用户" },
              { value: 22, name: "疑似流失" }
            ],
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

      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  }
};
</script>

<style>
.UserStructure {
  padding: 10% 0;
}
.UserStructure div {
  display: inline-block;
}
.UserStructure .arrow {
  background: url(../../../assets/m_arrow.png) no-repeat;
  background-size: 100%;
  font-size: 12px;
  color: #ffffff;
  vertical-align: top;
  margin-top: 20%;
}
.UserStructure .a_content {
  margin: 0;
  margin: auto;
  margin-top: 10%;
}
</style>


<style scoped>
</style>
