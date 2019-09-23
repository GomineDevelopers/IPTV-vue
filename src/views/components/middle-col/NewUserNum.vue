<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>新增用户数（户）
    </el-row>
    <el-row class="chart_height" id="new_user_num"></el-row>
  </div>
</template>
<script>
import { users_basic } from "@/api/api_main";
import { commonTools } from "@/utils/test";
export default {
  name: "NewUserNum", //新增用户数组件
  mounted() {
    this.users_basic();
  },
  data() {
    return {
      echarts_data: {
        id: "new_user_num",
        name: [],
        value: []
      }
    };
  },
  methods: {
    users_basic() {
      // console.log("~~~~~~users_basic");
      let vm = this;
      let temp = {
        operator: String(["移动", "联通", "电信"]),
        start: "2019-06-01",
        end: "2019-06-01"
      };
      users_basic(temp)
        .then(function(response) {
          // console.log(response);
          let buckets = response.data.responses[0].aggregations.ac.buckets;
          // let length = buckets.length;
          let length = 9; // 原长度为10-10位其他 这里只能用9
          let i;
          let temp1 = [];
          let temp2 = [];
          for (i = 0; i < length; i++) {
            temp1.push(buckets[i].key);
            temp2.push(buckets[i].new_num.value);
          }
          // console.log(temp1);
          vm.echarts_data.name = commonTools.acConvert_reverse(temp1);
          vm.echarts_data.value = temp2; // 待优化 -- 根据数据大小排列
          // console.log(vm.echarts_data);
          vm.setNewUserChart();
        })
        .catch(function(error) {
          console.info(error);
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


