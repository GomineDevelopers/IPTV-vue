<template>
  <div class="height_auto" :id="data.id"></div>
</template>
<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "dataTendency",
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {};
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.echarts_set();
    }, 2000);
  },
  computed: {
    ...mapGetters(["DA_day"])
  },
  watch: {
    data(newValue, oldValue) {
      // console.log(newValue);

      let vm = this;
      setTimeout(function() {
        vm.echarts_set();
      }, 2000);
    },
    DA_day(newValue, oldValue) {
      // console.log(newValue);
      let vm = this;
      setTimeout(function() {
        vm.echarts_set();
      }, 2000);
    }
  },
  methods: {
    echarts_set() {
      try {
        // 基于准备好的dom，初始化echarts实例
        var dataTendencyChart = this.$echarts.init(
          document.getElementById(this.data.id)
        );

        var dataTime = this.data.dataTime;
        var nameArray = this.data.nameArray;
        var stringArray = this.data.stringArray;

        var seriesData = [];
        for (var i = 0; i < 9; i++) {
          var tmpData = {};
          tmpData.type = "line";
          tmpData.symbol = "circle";
          tmpData.data = stringArray[i].split("\t");
          for (var j = 0; j < tmpData.data.length; j++) {
            Vue.set(tmpData.data, j, parseFloat(tmpData.data[j]).toFixed(2));
          }
          tmpData.name = nameArray[i];
          Vue.set(seriesData, i, tmpData);
        }
        //设置异常值提示
        // seriesData[5].markPoint = {
        //   symbol: "Rect",
        //   symbolSize: [80, 30],
        //   label: {
        //     show: true, formatter: function (param) {
        //       return "异常值";
        //     }
        //   },
        //   data: [
        //     {
        //       coord: [10, '14.2'], label: { show: true }
        //     }
        //   ]
        // };
        // 指定图表的配置项和数据
        var option = {
          color: [
            "#3BA0FF",
            "#FF6123",
            "#975FE4",
            "#7ECDF4",
            "#FCB84F",
            "#4ADBC7",
            "#5E70F1",
            "#A9CCDC",
            "#FC9D91"
          ],
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: nameArray,
            icon: "circle",
            itemWidth: 6, // 设置宽度
            itemHeight: 6, // 设置高度
            itemGap: 20, // 设置间距
            textStyle: {
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.65)"
            }
          },
          //图表自带工具
          toolbox: {
            show: true,
            feature: {
              // dataView: { readOnly: false }, //切换数据视图查看数据
              magicType: { type: ["line", "bar"] },
              restore: {},
              saveAsImage: {}
            }
          },
          grid: {
            top: "10%",
            left: "2%",
            right: "2%",
            bottom: "7%",
            containLabel: true
          },
          dataZoom: [
            {
              show: true,
              start: 0,
              end: 100
            },
            {
              type: "inside",
              start: 0,
              end: 100
            }
          ],
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: dataTime,
            axisLabel: {
              //横坐标类目文字
              show: true,
              textStyle: {
                fontSize: "12" //设置横坐标轴文字颜大小
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
              }
            }
          },
          yAxis: {
            type: "value",
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
          series: seriesData
        };

        // 使用刚指定的配置项和数据显示图表。
        dataTendencyChart.clear();
        dataTendencyChart.setOption(option);
        window.addEventListener("resize", () => {
          dataTendencyChart.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
</style>