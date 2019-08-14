<template>
  <div class="height_auto InTheNetwork">
    <div class="height_auto m_table">
      <el-row class="mt_title">
        <el-row class="mt_h">
          <el-col :span="4"></el-col>
          <el-col :span="4">在网数（万）</el-col>
          <el-col :span="5">人均观看时长（小时）</el-col>
          <el-col :span="4">平均消费（元）</el-col>
          <el-col :span="7">用户画像</el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="4">总体数据</el-col>
          <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="5" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>
          <el-col :span="7" id="Net_echartsA"></el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="4">活跃</el-col>
          <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="5" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>
          <el-col :span="7" id="Net_echartsB"></el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="4">沉默</el-col>
          <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="5" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>
          <el-col :span="7" id="Net_echartsC"></el-col>
        </el-row>
      </el-row>
      <el-row class="mt_row">
        <el-row class="mt_h">
          <el-col :span="4">停机</el-col>
          <el-col :span="4" class="data_num">292</el-col>
          <el-col :span="5" class="data_num">123</el-col>
          <el-col :span="4" class="data_num">1232</el-col>
          <el-col :span="7" id="Net_echartsD"></el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "InTheNetwork",
  data() {
    return {}
  },
  mounted() {
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
    this.drawLine4()
  },
  methods: {
    drawLine1() {
      var myChart = this.$echarts.init(document.getElementById("Net_echartsA"));
      var option = {
        tooltip: {
          trigger: "item",
          extraCssText: 'width:120px;height:60px',
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: [
          {
            show: true,
            top: "15%",
            left: "80%",
            data: ["A", "B", "C", "D"],
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
            radius: ["80%", "60%"], // 大小
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
            hoverAnimation: false, //鼠标移入变大false
            data: [
              { value: 1035, name: "A", },
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
          extraCssText: 'width:120px;height:60px',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            radius: ["80%", "60%"], // 大小
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
            hoverAnimation: false, //鼠标移入变大false
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
          extraCssText: 'width:120px;height:60px',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            radius: ["80%", "60%"], // 大小
            color: [
              "#91D4F5",
              "#BE8FF5",
              "#FCC269",
              "#64E0CF",
              "#F99184",
              "#7584F2"
            ],
            hoverAnimation: false, //鼠标移入变大false
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
          extraCssText: 'width:120px;height:60px',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            radius: ["80%", "60%"], // 大小
            color: [
              "#91D4F5",
              "#BE8FF5",
              "#FCC269",
              "#64E0CF",
              "#F99184",
              "#7584F2"
            ],
            hoverAnimation: false, //鼠标移入变大false
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
}
</script>

<style>
.InTheNetwork {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
}
.InTheNetwork .mt_title .mt_h {
  height: 35px;
  line-height: 35px;
  display: -webkit-flex;
  display: flex;
}
.InTheNetwork .mt_title .mt_h div {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.InTheNetwork .mt_row {
  height: calc((100% - 35px) / 4);
}
.InTheNetwork .mt_row .mt_h {
  height: 100%;
}
.InTheNetwork .mt_row .mt_h div {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}
.InTheNetwork #Net_echartsA,
.InTheNetwork #Net_echartsB,
.InTheNetwork #Net_echartsC,
.InTheNetwork #Net_echartsD {
  height: 100%;
}

.InTheNetwork .data_num {
  font-size: 12px;
  color: #999999;
}
</style>
