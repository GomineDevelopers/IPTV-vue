<template>
  <div class="InTheNetwork">
    <div class="m_table">
      <div class="mt_title">
        <div class="mt_h">
          <div></div>
          <div>在网数（万）</div>
          <div>人均观看时长（小时）</div>
          <div>平均消费（元）</div>
          <div>用户画像</div>
        </div>
      </div>
      <div class="mt_row">
        <div class="mt_h">
          <div>总体数据</div>
          <div class="data_num">292</div>
          <div class="data_num">123</div>
          <div class="data_num">1232</div>
          <div id="Net_echartsA" :style="{width: '8vw',height: '8vw'}"></div>
        </div>
      </div>
      <div class="mt_row">
        <div class="mt_h">
          <div>活跃</div>
          <div class="data_num">292</div>
          <div class="data_num">123</div>
          <div class="data_num">1232</div>
          <div id="Net_echartsB" :style="{width: '8vw',height: '8vw'}"></div>
        </div>
      </div>
      <div class="mt_row">
        <div class="mt_h">
          <div>沉默</div>
          <div class="data_num">292</div>
          <div class="data_num">123</div>
          <div class="data_num">1232</div>
          <div id="Net_echartsC" :style="{width: '8vw',height: '8vw'}"></div>
        </div>
      </div>
      <div class="mt_row">
        <div class="mt_h">
          <div>停机</div>
          <div class="data_num">292</div>
          <div class="data_num">123</div>
          <div class="data_num">1232</div>
          <div id="Net_echartsD" :style="{width: '8vw',height: '8vw'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InTheNetwork",
  data() {
    return {};
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
    this.drawLine4();
  },
  methods: {
    drawLine1() {
      var myChart = this.$echarts.init(document.getElementById("Net_echartsA"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
          {
            show: true,
            top: "0%",
            left: "80%",
            data: ["A", "B", "C", "D"],
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 0],
            itemGap: 5,
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
            radius: ["35%", "45%"], // 大小
            center: ["40%", "30%"], // 位置
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
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 1035, name: "A" },
              { value: 979, name: "B" },
              { value: 848, name: "C" },
              { value: 748, name: "D" }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    drawLine2() {
      var myChart = this.$echarts.init(document.getElementById("Net_echartsB"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "访问来源",
            type: "pie",
            radius: ["35%", "45%"], // 大小
            center: ["40%", "30%"], // 位置
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
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 1035, name: "A" },
              { value: 979, name: "B" },
              { value: 848, name: "C" },
              { value: 748, name: "D" }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    drawLine3() {
      var myChart = this.$echarts.init(document.getElementById("Net_echartsC"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "访问来源",
            type: "pie",
            radius: ["35%", "45%"], // 大小
            center: ["40%", "30%"], // 位置
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
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 1035, name: "A" },
              { value: 979, name: "B" },
              { value: 848, name: "C" },
              { value: 748, name: "D" }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    drawLine4() {
      var myChart = this.$echarts.init(document.getElementById("Net_echartsD"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "访问来源",
            type: "pie",
            radius: ["35%", "45%"], // 大小
            center: ["40%", "30%"], // 位置
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
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 1035, name: "A" },
              { value: 979, name: "B" },
              { value: 848, name: "C" },
              { value: 748, name: "D" }
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
.InTheNetwork {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
}
.InTheNetwork .mt_title .mt_h {
  height: 6vh;
}
.InTheNetwork .mt_row .mt_h {
  height: 8vh;
}

.InTheNetwork .mt_title .mt_h div {
  display: inline-block;
  width: 20%;
}
.InTheNetwork .mt_row .mt_h div {
  display: inline-block;
  width: 20%;
  height: 8vw;
  vertical-align: top;
}

.InTheNetwork #Net_echartsA,
.InTheNetwork #Net_echartsB,
.InTheNetwork #Net_echartsC,
.InTheNetwork #Net_echartsD {
  width: 20%;
  vertical-align: top;
}

.InTheNetwork .data_num {
  font-size: 12px;
  color: #999999;
}
</style>


<style scoped>
</style>
