<template>
  <div class="LocalOriginalProgrammes height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>本土原创节目
    </el-row>
    <el-row class="local_programmes_main">
      <el-row id="local_programmes"></el-row>
      <el-row id="local_programmes2" class="bottom_bar"></el-row>
    </el-row>
  </div>
</template>
<script>
import { demands_location } from "@/api/api_main";

export default {
  name: "LocalOriginalProgrammes",
  data() {
    return {
      pie_data: {
        id: "local_programmes",
        value: [],
        name: []
      }
    };
  },
  mounted() {
    this.demands_location();
    // this.drawLine();
    // this.drawLine2();
  },
  methods: {
    demands_location() {
      // console.log("demands_location");
      let vm = this;
      let data = {
        start: "2019-06-01",
        end: "2019-06-01",
        operator: String(["移动", "联通", "电信"])
      };
      demands_location(data)
        .then(function(response) {
          // console.log(response);
          //           data:
          // responses: Array(1)
          // 0:
          // aggregations:
          // program_type:
          // buckets: Array(1)
          // 0:
          // demand_dur: {value: 3922}
          // demand_freq: {value: 6}
          // demand_user_num:
          // value: 4
          let buckets =
            response.data.responses[0].aggregations.program_type.buckets;
          let length = buckets.length;
          let i;
          let temp = [];
          let temp2 = [];

          for (i = 0; i < length; i++) {
            temp.push(buckets[i].demand_user_num.value);
            temp2.push(buckets[i].key);
          }
          vm.pie_data.value = temp;
          vm.pie_data.name = temp2;
          // console.log("vm.pie_data");
          // console.log(vm.pie_data);
          vm.drawLine();
          vm.drawLine2();
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    drawLine() {
      let vm = this;
      var myChart11 = this.$echarts.init(
        document.getElementById(vm.pie_data.id)
      );
      let length = vm.pie_data.value.length;
      let i;
      let temp;
      let legend_data = [];
      let data = [
        // { value: 350, name: "综艺" },
        // { value: 300, name: "微电影" },
        // { value: 200, name: "纪实" },
        // { value: 200, name: "电影" },
        // { value: 170, name: "新闻" },
        // { value: 150, name: "时尚生活" }
      ];
      for (i = 0; i < length; i++) {
        legend_data.push(vm.pie_data.name[i]);
        temp = {
          value: vm.pie_data.value[i],
          name: vm.pie_data.name[i]
        };
        data.push(temp);
      }
      // console.log("~~~~");
      // console.log(legend_data);
      // console.log(data);

      var option11 = {
        color: [
          "#6648FF",
          "#4346D3",
          "#2D99FF",
          "#00c2ff",
          "#16CEB9",
          "#6F38FC"
        ],
        legend: [
          {
            show: true,
            top: "17%",
            left: "56%",
            data: legend_data,
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 10,
            textStyle: {
              color: "#dedede"
            }
          }
          // {
          //   show: true,
          //   top: "17%",
          //   left: "56%",
          //   data: ["综艺", "微电影", "纪实"],
          //   itemWidth: 5,
          //   itemHeight: 5,
          //   width: 40,
          //   padding: [0, 5],
          //   itemGap: 10,
          //   textStyle: {
          //     color: "#dedede"
          //   }
          // },
          // {
          //   show: true,
          //   top: "17%",
          //   left: "76%",
          //   data: ["电影", "新闻", "时尚生活"],
          //   itemWidth: 5,
          //   itemHeight: 5,
          //   width: 40,
          //   padding: [0, 5],
          //   itemGap: 10,
          //   textStyle: {
          //     color: "#dedede"
          //   }
          // }
        ],
        series: [
          {
            type: "pie",
            radius: "80%",
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            data: data
          }
        ]
      };
      myChart11.setOption(option11);
      window.addEventListener("resize", () => {
        myChart11.resize();
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart22 = this.$echarts.init(
        document.getElementById("local_programmes2")
      );

      var option22 = {
        textStyle: {
          color: "#dedede"
        },
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#C46BD6" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#3726B0" // 100% 处的颜色
              }
            ]
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00E3FF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0033DD" // 100% 处的颜色
              }
            ]
          }
        ],
        legend: {
          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            color: "#dedede"
          }
        },
        grid: {
          top: "18%",
          left: "2%",
          right: "2%",
          bottom: "1%",
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: [
            ["product", "本周", "上周"],
            ["总体收视", 30000, 20000],
            ["点播收视", 13000, 10000],
            ["回看收视", 10000, 5000]
          ]
        },
        xAxis: {
          type: "category",
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "10" //设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            alignWithLabel: true //设置坐标轴刻度与坐标对齐
          },
          axisLine: {
            lineStyle: {
              color: "#939393" //设置横坐标轴线颜色
            }
          }
        },
        yAxis: {
          axisLabel: {
            //横坐标类目文字
            //rotate: 30,
          },
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              opacity: 0.2
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false //设置坐标轴刻度不显示
          }
        },
        series: [{ type: "bar", barWidth: 10 }, { type: "bar", barWidth: 10 }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart22.setOption(option22);

      window.addEventListener("resize", () => {
        myChart22.resize();
      });
    }
  }
};
</script>
<style scoped>
.local_programmes_main {
  height: calc(100% - 0.3rem);
}
#local_programmes {
  height: 50%;
}
#local_programmes2 {
  height: 50%;
}
</style>



