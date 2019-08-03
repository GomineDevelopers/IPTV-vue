<template>
  <div class="LocalOriginalProgrammes height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>本土原创节目
    </el-row>
    <el-row class="local_programmes_main">
      <el-row id="local_programmes"></el-row>
      <el-row id="local_programmes2" class="bottom_bar"></el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "LocalOriginalProgrammes",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  },
  methods: {
    drawLine() {
      var myChart11 = this.$echarts.init(document.getElementById("local_programmes"))

      var option11 = {
        color: [
          "#6648FF",
          "#4346D3",
          "#2D99FF",
          "#00c2ff",
          "#16CEB9",
          "#6F38FC"
        ],
        legend: [
          {
            show: true,
            top: "17%",
            left: "56%",
            data: ["综艺", "微电影", "纪实"],
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 10,
            textStyle: {
              color: '#dedede'
            }
          },
          {
            show: true,
            top: "17%",
            left: "76%",
            data: ["电影", "新闻", "时尚生活"],
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 10,
            textStyle: {
              color: '#dedede'
            }
          }
        ],
        series: [
          {
            type: "pie",
            radius: "100%",
            center: ["20%", "50%"],
            avoidLabelOverlap: false,
            roseType: "radius",
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              }
            },
            data: [
              { value: 350, name: '综艺' },
              { value: 300, name: '微电影' },
              { value: 200, name: '纪实' },
              { value: 200, name: '电影' },
              { value: 170, name: '新闻' },
              { value: 150, name: '时尚生活' }
            ],
          }
        ]
      }
      myChart11.setOption(option11)
      window.addEventListener("resize", () => {
        myChart11.resize();
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart22 = this.$echarts.init(
        document.getElementById("local_programmes2")
      );

      var option22 = {
        textStyle: {
          color: "#dedede"
        },
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#C46BD6" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#3726B0" // 100% 处的颜色
              }
            ]
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00E3FF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0033DD" // 100% 处的颜色
              }
            ]
          }
        ],
        legend: {
          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            color: "#dedede"
          }
        },
        grid: {
          top: "18%",
          left: "2%",
          right: "2%",
          bottom: "1%",
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: [
            ["product", "本周", "上周"],
            ["总体收视", 30000, 20000],
            ["点播收视", 13000, 10000],
            ["回看收视", 10000, 5000]
          ]
        },
        xAxis: {
          type: "category",
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            alignWithLabel: true //设置坐标轴刻度与坐标对齐
          },
          axisLine: {
            lineStyle: {
              color: "#939393" //设置横坐标轴线颜色
            }
          }
        },
        yAxis: {
          axisLabel: {
            //横坐标类目文字
            //rotate: 30,
          },
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false //设置坐标轴刻度不显示
          }
        },
        series: [{ type: "bar", barWidth: 10 }, { type: "bar", barWidth: 10 }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart22.setOption(option22);

      window.addEventListener("resize", () => {
        myChart22.resize();
      });
    }
  }
};
</script>
<style scoped>
.local_programmes_main {
  height: calc(100% - 0.3rem);
}
#local_programmes {
  height: 50%;
}
#local_programmes2 {
  height: 50%;
}
</style>



