<template>
  <div class="ViewingBehaviorPR">
    <div id="echartsA" class="echarts1"></div>
    <br>
    <div class="m_description">
      <p class="m_description_content">截至2019年6月3日凌晨，平台累计在册用户数2,133,546户,较前一周增长2.0%，增速回落0.5个百分点。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewingBehaviorPR",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
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
          top: "5%",
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
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            }
          }
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: function() {
                return ""; // 隐藏Y左边数据
              }
            },
            // 刻度线的设置
            splitLine: {
              show: false
            },
            axisLine: {
              show: false, //Y轴不显示
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            },
            axisLabel: {
              //横坐标类目文字
              show: false
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
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
                color: function(params) {
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
    }
  }
};
</script>

<style>
.ViewingBehaviorPR {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  text-align: left;
}
.ViewingBehaviorPR .echarts1 {
  display: inline-block;
  height: 300px;
  width: 20%;
}
.ViewingBehaviorPR .m_description{
  display: inline-block;
  height: 100px;
  width: 20%;

}
.ViewingBehaviorPR .m_description_content {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  text-align: justify;
}
</style>

<style scoped>
</style>
