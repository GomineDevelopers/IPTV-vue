<template>
  <div class="height_auto">
    <el-row style="height:500px;" :id="chartData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: "BarGraph",
  props: {
    chartData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var barGraphChart = this.$echarts.init(
        document.getElementById(this.chartData.id)
      );
      let seriesData = [];
      //设置series数据条数
      // for (let i = 1; i <= this.chartData.data[0].length - 1; i++) {
      //   seriesData.push({ type: 'bar', stack: '堆叠', barWidth: '12' })
      // }
      var line_color = this.chartData.color[3];
      var option = {
        color: this.chartData.color,
        title: {
          text: this.chartData.title,
          x: "left",
          y: "7%",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14"
          }
        },
        legend: {
          top: "18%",
          right: "20%",
          itemWidth: 12,
          itemHeight: 7
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            align: "left"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          top: "16%",
          right: "6%",
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          top: "35%",
          left: "8%",
          right: "1%",
          bottom: "10%"
        },
        dataset: {
          source: this.chartData.data
        },
        xAxis: {
          type: "category",
          axisLabel: {
            //横坐标类目文字
            show: true,
            interval: 0, // 坐标轴显示不全问题解决方案
            textStyle: {
              fontSize: "12" //设置横坐标轴文字大小
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          }
        },
        // yAxis: {
        //   // 刻度线的设置
        //   splitLine: {
        //     show: false
        //   },
        //   axisLine: {
        //     show: false, //Y轴不显示
        //     lineStyle: {
        //       color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
        //     }
        //   },
        //   axisLabel: {
        //     //横坐标类目文字
        //     show: true,
        //     textStyle: {
        //       fontSize: "12" //设置横坐标轴文字颜大小
        //     }
        //   },
        //   axisTick: {
        //     show: false //设置坐标轴刻度不显示
        //   }
        // },
        // yAxis: [
        //   //两个y轴
        //   {
        //     gridIndex: 0,
        //     axisTick: {
        //       show: false //设置坐标轴刻度不显示
        //     },
        //     axisLine: {
        //       show: false
        //     },
        //     // 刻度线的设置
        //     splitLine: {
        //       show: true,
        //       lineStyle: {
        //         color: "#939393",
        //         type: "dotted",
        //         opacity: 0.2
        //       }
        //     }
        //   },
        //   {
        //     type: "value",
        //     axisLabel: {
        //       formatter: "{value}%"
        //     },
        //     gridIndex: 0,
        //     axisTick: {
        //       show: false //设置坐标轴刻度不显示
        //     },
        //     axisLine: {
        //       show: false
        //     },
        //     // 刻度线的设置
        //     splitLine: {
        //       show: true,
        //       lineStyle: {
        //         color: "#939393",
        //         type: "dotted",
        //         opacity: 0.2
        //       }
        //     }
        //   }
        // ],
        yAxis: [
          {
            // 刻度线的设置
            splitLine: {
              show: true,
              lineStyle: {
                color: "#939393",
                type: "dotted",
                opacity: 0.2
              }
            },
            axisLine: {
              show: false, //Y轴不显示
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisLabel: {
              //横坐标类目文字
              show: true,
              textStyle: {
                fontSize: "12" //设置横坐标轴文字颜大小
              }
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
            }
          },
          {
            type: "value",
            gridIndex: 0,
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLabel: {
              show: true,
              formatter: "{value}%", //右侧Y轴文字显示
              textStyle: {
                color: "#333"
              }
            },
            axisLine: {
              show: false
            },
            // 刻度线的设置
            splitLine: {
              show: false
            }
          }
        ],
        // series: seriesData
        series: [
          {
            type: "bar",
            stack: "堆叠",
            barWidth: "40%",
            yAxisIndex: "0",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "black"
                }
              }
            }
          },
          {
            type: "bar",
            stack: "堆叠",
            barWidth: "40%",
            yAxisIndex: "0",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "black"
                }
              }
            }
          },
          {
            type: "bar",
            stack: "堆叠",
            barWidth: "40%",
            yAxisIndex: "0",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "black"
                }
              }
            }
          },
          {
            type: "line",
            stack: "堆叠",
            yAxisIndex: "1",

            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "black",
                  formatter: function(value) {
                    // return "{a|" + value.data + "}";
                    // console.log(value)
                    return value.data[4] + "%";
                  }
                }
              }
            }
          }
          // {
          //   stack: "堆叠",
          //   type: "line",
          //   seriesLayoutBy: "row",
          //   symbol: "none",
          //   yAxisIndex: "1",
          //   itemStyle: {
          //     normal: {
          //       label: {
          //         show: true,
          //         color: "black"
          //       }
          //     }
          //   }
          // }
        ]
      };
      barGraphChart.setOption(option);
      window.addEventListener("resize", () => {
        barGraphChart.resize();
      });
    }
  }
};
</script>