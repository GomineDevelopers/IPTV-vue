<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>订购数据
    </el-row>
    <el-row class="order_data_body">
      <el-row class="order_data_row1" id="order_data_circular"></el-row>
      <el-row class="order_data_row2" id="paid_data">ccc</el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "OrderData",  //订购数据组件
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
    this.drawLine2()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('order_data_circular'))
      let data = [
        {
          name: "欢乐家庭包",
          value: 121711
        },
        {
          name: "少儿包",
          value: 72112
        },
        {
          name: "影视包",
          value: 33211
        },
      ];
      let arrName = getArrayValue(data, "name")
      let arrValue = getArrayValue(data, "value")
      let sumValue = eval(arrValue.join('+'))
      let objData = array2obj(data, "name")
      let optionData = getData(data)
      function getArrayValue(array, key) {
        var key = key || "value"
        var res = []
        if (array) {
          array.forEach(function (t) {
            res.push(t[key])
          })
        }
        return res
      }

      function array2obj(array, key) {
        var resObj = {}
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj
      }

      function getData(data) {
        var res = {
          series: [],
          yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
          res.series.push({
            name: '订购类型',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ["30%", "55%"],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false,
              },
              labelLine: {
                show: false
              },
              borderWidth: 5,
            },
            data: [{
              value: data[i].value,
              name: data[i].name
            }, {
              value: sumValue - data[i].value,
              name: '',
              itemStyle: {
                color: "rgba(0,0,0,0)",
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }]
          });
          res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ["30%", "55%"],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false,
              },
              labelLine: {
                show: false
              },
              borderWidth: 5,
            },
            data: [{
              value: 10,
              itemStyle: {
                color: "rgba(47,69,84,0.8)",
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }, {
              value: 0,
              name: '',
              itemStyle: {
                color: "rgba(0,0,0,0)",
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }]
          });
          res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
        }
        return res;
      }

      let option = {
        legend: {
          show: true,
          top: "center",
          left: '60%',
          data: arrName,
          itemWidth: 5,
          itemHeight: 5,
          width: 40,
          padding: [0, 5],
          itemGap: 10,
          formatter: function (name) {
            //return "{title|" + name + "}\n{value|" + (objData[name].value) + "人}"
            return "{title|" + name + "}"
          },
          textStyle: {
            rich: {
              title: {
                fontSize: 12,
                lineHeight: 10,
                color: "#dedede"
              },
              value: {
                fontSize: 14,
                lineHeight: 18,
                color: "#dedede"
              }
            }
          },
        },
        tooltip: {
          show: true,
          trigger: "item",
          position: ['40%', '45%'],
          formatter: "{a}<br>{b}:{c}({d}%)"
        },
        color: ['#4346D3', '#16CEB9', '#488BFF'],
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false  //不显示环形条的百分比
          },
          data: optionData.yAxis
        }],
        xAxis: [{
          show: false
        }],
        series: optionData.series
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },

    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart2 = this.$echarts.init(document.getElementById('paid_data'))

      var option2 = {
        textStyle: {
          color: "#dedede"
        },
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#00E5FF' // 0% 处的颜色
            }, {
              offset: 1, color: '#0053DC' // 100% 处的颜色
            }],
          }
        ],
        tooltip: {
          trigger: 'item',
          position: 'top'
        },
        legend: {
          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            color: "#dedede"
          },
        },
        grid: {
          top: "17%",
          left: '2%',
          right: '4%',
          bottom: "1%",
          containLabel: true
        },
        dataset: {
          source: [
            ['product', '订购用户数'],
            ['02月', 9500],
            ['03月', 8300],
            ['04月', 5600],
            ['05月', 7200],
            ['07月', 3500],
            ['08月', 6500],
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {//横坐标类目文字
            show: true,
            textStyle: {
              fontSize: '10'//设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            alignWithLabel: true  //设置坐标轴刻度与坐标对齐
          },
          axisLine: {
            lineStyle: {
              color: '#ccc',//设置横坐标轴线颜色
            }
          },
        },
        yAxis: {
          axisLabel: {//横坐标类目文字
            //rotate: 30,
          },
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            },
          },
          axisTick: {
            show: false  //设置坐标轴刻度不显示
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#202f59',//设置横坐标轴线颜色
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 10, //柱子宽度
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart2.setOption(option2)

      window.addEventListener('resize', () => {
        myChart2.resize()
      })
    }
  }
}
</script>

<style scoped>
.order_data_body {
  height: calc(100% - 0.3rem);
}
.order_data_row1 {
  height: 58%;
}
.order_data_row2 {
  height: 42%;
}
</style>

