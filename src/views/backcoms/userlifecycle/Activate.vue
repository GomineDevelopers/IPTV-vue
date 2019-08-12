<template>
  <div class="Activate">
    <div id="echartsAA" class="echarts1 Aleft"></div>
    <div class="Aright">
      <div id="echartsBB" class="echarts2 Rtop"></div>
      <div id="echartsBB" class="Rbottom">
        <p class="title">激活率预警</p>
        <p class="content">
          <span class="sTitle">遵义：</span>
          <span class="percentage">60%</span>
          <span>&nbsp;&nbsp;</span>
          <span class="sTitle">环比下降：</span>
          <span class="percentage">2.1%</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activate",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
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
        legend: {
          show: true,
          top: "0%",
          left: "70%",
          data: arrName,
          itemWidth: 10,
          itemHeight: 10,
          width: 40,
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
          // axisLabel: {
          //   intervel: 0
          // },
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字大小
            },
            interval: 0 // 坐标轴显示不全问题解决方案
            // rotate: 40  // 旋转效果
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
          min: 0
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
    },
    drawLine2() {
      var myChart2 = this.$echarts.init(document.getElementById("echartsBB"));
      var myColor = ["#FF6123"];
      var arrName = ["48小时激活率"];
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
        legend: {
          show: true,
          top: "0%",
          left: "80%",
          data: arrName,
          itemWidth: 10,
          itemHeight: 10,
          width: 40,
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
          // axisLabel: {
          //   intervel: 0
          // },
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字大小
            },
            interval: 0 // 坐标轴显示不全问题解决方案
            // rotate: 40  // 旋转效果
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
          min: 0
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

.Activate .Aright{
  margin-top: -10%
}

.Activate .Aright .Rtop {
  height: 60%;
  width: 100%;
  display: inline-block;
}

.Activate .Aright .Rbottom {
  height: 40%;
  width: 100%;
  display: inline-block;
  text-align: left;
}
.Activate .title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  margin: 5px 0;
}
.Activate .content {
  margin: 5px 0;
}
.Activate .sTitle {
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #333333;
}
.Activate .percentage {
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #ff4800;
}

/* .Activate .echarts1 {
}
.Activate .echarts2 {
} */
</style>

<style scoped>
</style>
