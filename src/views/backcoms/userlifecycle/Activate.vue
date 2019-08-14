<template>
  <div class="Activate">
    <div id="echartsAA" class="echarts1 Aleft"></div>
    <div class="Aright">
      <div :style="{width: '100%',height: '70%'}" class="echarts2 Rtop">
        <line-chart-single-prop :lineData="activationRate"></line-chart-single-prop>
      </div>
      <div id="echartsCC" class="Rbottom">
        <p class="title">激活率预警</p>
        <p class="content">
          <span class="sTitle">遵义：</span>
          <span class="percentage">60%</span>
          <span>&nbsp;&nbsp;</span>
          <span class="sTitle">环比下降：</span>
          <span class="percentage2">2.1%</span>
        </p>
        <p class="content">
          <span class="sTitle">铜仁：</span>
          <span class="percentage">60%</span>
          <span>&nbsp;&nbsp;</span>
          <span class="sTitle">环比下降：</span>
          <span class="percentage2">5.7%</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LineChartSingleProp from '@/views/backcoms/commoncomponents/LineChartSingleProp'  //单数据折线图Y轴显示百分比组件
export default {
  name: "Activate",
  components: {
    "line-chart-single-prop": LineChartSingleProp,
  },
  data() {
    return {
      activationRate: {
        title: "激活率",
        id: "newPayingUsers",
        color: ["#FF6123", "#FF8859"],
        data:
          [
            ['product', '贵阳', '遵义', '毕节', '铜仁', '六盘水', '黔南', '黔东南', '黔西南', '安顺'],
            ['本月', 30, 40, 30, 70, 90, 50, 80, 30, 40],
            ['同期', 20, 40, 50, 40, 60, 40, 77, 50, 80]
          ]
      }
    };
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var myChart2 = this.$echarts.init(document.getElementById("echartsAA"));
      var myColor = ["#FF6123"];
      var arrName = ["激活数"];
      var option2 = {
        title: {
          text: "激活用户数",
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
          top: "10%",
          left: "40%",
          data: arrName,
          itemWidth: 6,
          itemHeight: 6,
          padding: [0, 5],
          itemGap: 2,
          textStyle: {
            color: "#999999"
          }
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "12" //设置横坐标轴文字大小
            },
            interval: 0 // 坐标轴显示不全问题解决方案
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.65)',//设置横坐标轴线颜色
            }
          },
          axisTick: {
            alignWithLabel: true
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
          max: 16000,
          min: 0,
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              type: "dotted",
              opacity: 0.2
            },
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
.Activate {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
}
.Activate .Aright,
.Activate .Aleft {
  height: 300px;
  width: 50%;
  display: inline-block;
}

.Activate .Aright {
  vertical-align: top;
}

.Activate .Aright .Rtop {
  /* height: 80%; */
  width: 100%;
}

.Activate .Aright .Rbottom {
  /* height: 20%; */
  width: 100%;
  text-align: left;
}
.Activate .title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  margin: 5px 0;
  margin-left: 2%;
}
.Activate .content {
  margin: 5px 0;
  margin-left: 7.5%;
}
.Activate .sTitle {
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #333333;
}
.Activate .percentage {
  color: #ff4800;
}
.Activate .percentage2 {
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #3f3f3f;
}

/* .Activate .echarts1 {
}
.Activate .echarts2 {
} */
</style>

<style scoped>
</style>
