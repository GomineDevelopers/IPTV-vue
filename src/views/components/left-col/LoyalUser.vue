<template>
  <div class="height_auto">
    <el-row class="title_row">
      <!-- 注意是上月的数据 -->
      <span class="title_border_left"></span>忠诚用户（上月）
    </el-row>
    <el-row v-show="ifgetdata" class="loyal_body">
      <el-col :span="16" class="height_auto" id="loyal_user"></el-col>
      <el-col :span="8" class="height_auto show_loyal_data">
        <div>
          <el-row>
            平均点击次数(次)：
            </br>
            <span class="click_num">{{avg_freq}}</span>
          </el-row>
          <el-row>
            平均停留时长(时)：
            </br>
            <span class="keep_time">{{avg_dur}}</span>
          </el-row>
          <el-row>
            忠诚用户数(户)：
            </br>
            <span class="loyal_index">{{loyal_num}}</span>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import { users_basic } from "@/api/api_main";
import { commonTools } from "@/utils/test";
import Vue from 'vue'

export default {
  name: "LoyalUser",  //忠诚用户组件
  data() {
    return {
      ifgetdata:false,
      avg_freq:0,
      avg_dur:0,
      loyal_num:0,
      echart_data:{
        data: [
            // ["最近访\n问时长", 7.3],
            // ["平均点\n击次数", 5.2],
            // ["平均停\n留时长", 2.3],
            ["平均点\n击次数", 0],
            ["平均停\n留时长", 0],
            ["忠诚\n用户数", 0],
          ]
      }
    }
  },
  mounted() {
    // this.setLoyalUserChart()
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.users_basic(response);
          setTimeout(function() {
            vm.setLoyalUserChart()
          }, 500);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  methods: {
    users_basic(ExpirationDate) {
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();

      // let temp = {
      //   operator: m_operator,
      //   start: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate,1),
      //   end: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate,1),
      //   year:commonTools.get_ExpirationDate_year(ExpirationDate)
      // };
      let CrossYear_data = commonTools.get_ExpirationDate_lastNMonth_CrossYear(ExpirationDate,1,'single');
      let temp = {
        operator: m_operator,
        start: CrossYear_data.month,
        end: CrossYear_data.month,
        year:CrossYear_data.year
      };

      users_basic(temp)
        .then(function(response) {
          let aggregations = response.data.responses[2].aggregations;
          // loyal_user_num  -- 忠诚用户数
          // 忠诚用户户均停留时长 = 忠诚用户停留时长/访问忠诚用户
          // access_dur_loyal / access_loyal_user_num
          // 忠诚用户户均点击次数 = 忠诚用户点击次数/忠诚用户用户数
          // click_freq_loyal / loyal_user_num
          if( aggregations.loyal_user_num.value == 0){
            vm.avg_freq = 0;
          }else{
            vm.avg_freq = parseInt(aggregations.click_freq_loyal.value / aggregations.loyal_user_num.value)
          }
          if( aggregations.access_loyal_user_num.value == 0){
            vm.avg_dur = 0;
          }else{
            vm.avg_dur = parseInt(aggregations.access_dur_loyal.value / aggregations.access_loyal_user_num.value / 3600)
          }
          vm.loyal_num = aggregations.loyal_user_num.value;
          Vue.set(vm.echart_data.data[0],1,vm.avg_freq);
          Vue.set(vm.echart_data.data[1],1,vm.avg_dur);
          Vue.set(vm.echart_data.data[2],1,vm.loyal_num);
          
          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    setLoyalUserChart() {
      let vm = this;
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
          source:vm.echart_data.data
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
      myChart.clear()
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


