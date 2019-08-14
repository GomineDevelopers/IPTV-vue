<template>
  <div class="Registered">
    <div id="echartsA" class="echarts1"></div>
    <div id="echartsB" class="echarts2"></div>
  </div>
</template>

<script>
export default {
  name: "Registered",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("echartsA"));
      var option = {
        title: {
          text: "在册用户数",
          textStyle: {
            //设置主标题风格
            Color: "#333333", //设置主标题字体颜色
            fontStyle: "", //主标题文字风格
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: '5%',
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["7.08-7.14", "7.15-7.21"],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
              }
            },
          }
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: function () {
                return ""; // 隐藏Y左边数据
              }
            },
            // 刻度线的设置
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,  //Y轴不显示
              lineStyle: {
                color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
              }
            },
            axisLabel: {//横坐标类目文字
              show: false,
            },
            axisTick: {
              show: false  //设置坐标轴刻度不显示
            }
          }
        ],
        series: [
          {
            name: "在册用户数",
            type: "bar",
            barWidth: "40%",
            data: ["209.4", "213.4"],
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function (params) {
                  let colorList = ["#FFAA89", "#FF6123"];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16
                  }
                }
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
      var myChart2 = this.$echarts.init(document.getElementById("echartsB"));
      var myColor = ["#FF6123", "#FF8859", "#FFAA89"];
      var arrName = ["移动", "联通", "电信"];
      var option2 = {
        title: {
          text: "新增在册用户",
          textStyle: {
            //设置主标题风格
            Color: "#333333", //设置主标题字体颜色
            fontStyle: "", //主标题文字风格
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: '5%',
          right: "5%",
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          show: true,
          top: "5%",
          data: arrName,
          itemWidth: 12,
          itemHeight: 7,
          itemGap: 10,
          textStyle: {
            color: "#999999"
          }
        },

        grid: {
          left: "3%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          // axisLabel: {
          //   intervel: 0
          // },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "12" //设置横坐标轴文字大小
            },
            interval: 0,  // 坐标轴显示不全问题解决方案
            // rotate: 40  // 旋转效果
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            }
          },
          data: [
            "贵阳",
            "遵义",
            "六盘水",
            "安顺",
            "毕节",
            "铜仁",
            "黔东南",
            "黔南",
            "黔西南"
          ]
        },
        yAxis: {
          type: "value",
          // 刻度线的设置
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,  //Y轴不显示
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            }
          },
          axisLabel: {//横坐标类目文字
            show: true,
            textStyle: {
              fontSize: '12'//设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            show: false  //设置坐标轴刻度不显示
          }
        },
        series: [
          {
            name: arrName[0],
            type: "bar",
            barWidth: "33%", //柱图宽度
            stack: "总量",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: [3000, 2800, 2700, 2800, 2700, 2500, 2600, 2700, 2800],
            color: myColor[0]
          },
          {
            name: arrName[1],
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: [4500, 4400, 4300, 4200, 4000, 4100, 4200, 4300, 4400],
            color: myColor[1]
          },
          {
            name: arrName[2],
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: [6000, 5800, 5700, 5600, 5400, 5500, 5600, 5500, 5300],
            color: myColor[2]
          }
        ]
      };
      myChart2.setOption(option2);
      window.addEventListener("resize", () => {
        myChart2.resize();
      });
    }
  }
};
</script>

<style>
/*
295 435+84
*/
.Registered {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
}
.Registered .echarts1 {
  display: inline-block;
  height: 300px;
  width: 33%;
}
.Registered .echarts2 {
  display: inline-block;
  height: 300px;
  width: 60%;
}
</style>

<style scoped>
</style>
