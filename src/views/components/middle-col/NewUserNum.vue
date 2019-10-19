<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>新增用户数（户）
    </el-row>
    <el-row v-show="ifgetdata" class="chart_height" id="new_user_num"></el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import { users_basic } from "@/api/api_main";
import { commonTools } from "@/utils/test";
export default {
  name: "NewUserNum", //新增用户数组件
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.users_basic(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  data() {
    return {
      ifgetdata: true,

      echarts_data: {
        id: "new_user_num",
        name: [],
        value: []
      }
    };
  },
  methods: {
    users_basic(ExpirationDate) {
      // console.log("~~~~~~users_basic");
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();

      let temp = {
        // operator: String(["移动", "联通", "电信"]),
        operator: m_operator,
        start: commonTools.get_ExpirationDate_01(ExpirationDate),
        end: ExpirationDate,
        year:commonTools.get_ExpirationDate_year(ExpirationDate)

      };
      users_basic(temp)
        .then(function(response) {
          console.log(response);
          let buckets = response.data.responses[1].aggregations.ac.buckets;
          // let length = buckets.length;
          let length = 9; // 原长度为10-10位其他 这里只能用9
          let i;
          let temp1 = [];
          let temp2 = [];
          for (i = 0; i < length; i++) {
            temp1.push(buckets[i].key);
            temp2.push(buckets[i].new_num.value);
          }
          // temp1 = temp1.reverse();
          // temp2 = temp2.reverse();

          // console.log(temp1);
          vm.echarts_data.name = commonTools.acConvert_R_reverse(temp1); // 反序（后台返回是851-859，这里反序成859-851）
          // vm.echarts_data.name = temp1;
          vm.echarts_data.value = temp2.reverse(); // 反序
          // console.log(vm.echarts_data);
          vm.setNewUserChart();
          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    setNewUserChart() {
      let vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById(vm.echarts_data.id)
      );

      let data_value = [
        // 2744, 3300, 4489, 5340, 6970, 7970, 8034, 9489, 10000
      ];
      let data_name = [
        // "黔西南",
        // "黔南",
        // "黔东南",
        // "铜仁",
        // "毕节",
        // "安顺",
        // "六盘水",
        // "遵义",
        // "贵阳"
      ];
      data_name = vm.echarts_data.name;
      data_value = vm.echarts_data.value;

      var option = {
        textStyle: {
          color: "#dedede"
        },
        //设置柱子颜色渐变
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#6648FF " // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#488BFF" // 100% 处的颜色
            }
          ]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        grid: {
          top: "5%",
          left: "0",
          right: "8%",
          bottom: "1%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
          },
          axisTick: {
            show: false //设置坐标轴刻度不显示
          },
          axisLabel: {
            //横坐标类目文字
            show: true,
            //rotate: 30,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字颜大小
            }
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字颜大小
            }
          },
          axisLine: {
            lineStyle: {
              color: "#ccc" //设置横坐标轴线颜色
            }
          },
          data: data_name
        },
        series: [
          {
            type: "bar",
            barWidth: 10, //柱子宽度
            data: data_value
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
<style scoped>
</style>


