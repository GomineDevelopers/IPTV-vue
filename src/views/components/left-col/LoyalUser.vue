<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>忠诚用户
    </el-row>
    <el-row class="loyal_body">
      <el-col :span="16" class="height_auto" id="loyal_user"></el-col>
      <el-col :span="8" class="height_auto show_loyal_data">
        <div>
          <el-row>
            平均点击次数：
            </br>
            <span class="click_num">5</span>次
          </el-row>
          <el-row>
            平均停留时长：
            </br>
            <span class="keep_time">1.4</span>小时
          </el-row>
          <el-row>
            用户忠诚指数：
            </br>
            <span class="loyal_index">8</span>分
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "LoyalUser",  //忠诚用户组件
  data() {
    return {

    }
  },
  mounted() {
    this.setLoyalUserChart()
  },
  methods: {
    setLoyalUserChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('loyal_user'))
      var option = {
        textStyle: {
          color: "#dedede"
        },
        grid: {
          top: "10%",
          left: '2%',
          right: '5%',
          bottom: "5%",
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          position: 'top'
        },
        dataset: {
          source: [
            ["最近访\n问时长", 7.3],
            ["平均点\n击次数", 5.2],
            ["平均停\n留时长", 2.3],
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {//横坐标类目文字
            show: true,
            //rotate: 45,
            textStyle: {
              color: '#f9f9f9',//设置横坐标轴文字颜色
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
          }
        },
        yAxis: {
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
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 10, //柱子宽度
            itemStyle: {
              color: function (params) {
                var colorList = [
                  {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#488BFF' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#6648FF' // 100% 处的颜色
                    }],
                  },
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
                  },
                  {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#00D7CF' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#00C786' // 100% 处的颜色
                    }],
                  }
                ]
                return colorList[params.dataIndex];
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>
<style scoped>
.loyal_body {
  height: calc(100% - 0.3rem);
}
.show_loyal_data{
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  /* align-items: center;
  -webkit-align-items: center; */
  padding-top:7%;
  text-align: left;
  font-size:0.12rem;
  color:#dedede;
}
.show_loyal_data div .el-row{
  margin-bottom:0.12rem;
  line-height: 0.24rem;
}
.show_loyal_data div .el-row span{
  font-size:0.2rem;
}
.click_num{
  color:#FF4800;
}
.keep_time{
  color:#28DB99;
}
.loyal_index{
  color:#e4ba1a;
}
</style>


