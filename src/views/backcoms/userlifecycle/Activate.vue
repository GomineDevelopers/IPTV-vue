<template>
  <div class="Activate">
    <!-- <div id="echartsAA" class="echarts1 Aleft"></div> -->
    <div :id="activationNum_Change.id" class="echarts1 Aleft"></div>
    <div class="Aright">
      <div :style="{width: '100%',height: '100%'}" class="echarts2 Rtop">
        <line-chart-single-prop :lineData="activationRate"></line-chart-single-prop>
      </div>
      <!-- <div id="echartsCC" class="Rbottom">
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
      </div>-->
    </div>
  </div>
</template>

<script>
import LineChartSingleProp from "@/views/backcoms/commoncomponents/LineChartSingleProp"; //单数据折线图Y轴显示百分比组件
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "Activate",
  props: ["activate_user_num"],
  components: {
    "line-chart-single-prop": LineChartSingleProp
  },
  watch: {
    activate_user_num(newValue, oldValue) {
      let vm = this;

      console.log("ULC - activate_user_num:");
      console.log(newValue);
      vm.activationNum = vm.activate_user_num
      // vm.activationNum.title = "激活用户数-测试";
      // vm.activationRate.title = "激活率-测试";

      // 此处组件-刷新-drawline()
    },
    ULC_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        let str;
        if (newValue == 1) {
          str = "当日";
        }
        if (newValue == 2) {
          str = "本周";
        }
        if (newValue == 3) {
          str = "本月";
        }
        Vue.set(vm.activationRate.data[1], 0, str);
      }, 1000);
    }
  },
  computed: {
    ...mapGetters([
      "ULC_region",
      "ULC_time_type",
      "ULC_operator",
      "ULC_day",
      "ULC_week",
      "ULC_month"
    ]),
    activationNum_Change: {
      get: function () {
        let vm = this;
        if (
          vm.ULC_region &&
          vm.ULC_operator &&
          vm.ULC_day &&
          vm.ULC_week &&
          vm.ULC_month
        ) {
          // do nothing. -- 监听
        }
        let id = vm.activationNum.id;
        let title = vm.activationNum.title;
        let dataName = vm.activationNum.dataName;
        let color = vm.activationNum.color;
        let data_region = [];
        let series_data = [];

        if (vm.ULC_region == null || vm.ULC_region.length == 0) {
          data_region = vm.activationNum.data_region;
          series_data = vm.activationNum.series_data;
        } else {
          for (let i_x = 0; i_x < vm.ULC_region.length; i_x++) {
            if (vm.ULC_region.indexOf("贵阳") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("遵义") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("安顺") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("黔南") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("黔东南") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("铜仁") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("毕节") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("六盘水") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
            if (vm.ULC_region.indexOf("黔西南") > -1) {
              data_region.push(vm.activationNum.data_region[i_x]);
              series_data.push(vm.activationNum.series_data[i_x]);
              continue;

            }
          }

          // if (vm.ULC_region.indexOf("贵阳") > -1) {
          //   data_region.push(vm.activationNum.data_region[0]);
          //   series_data.push(vm.activationNum.series_data[0]);
          // }
          // if (vm.ULC_region.indexOf("遵义") > -1) {
          //   data_region.push(vm.activationNum.data_region[1]);
          //   series_data.push(vm.activationNum.series_data[1]);
          // }
          // if (vm.ULC_region.indexOf("安顺") > -1) {
          //   data_region.push(vm.activationNum.data_region[2]);
          //   series_data.push(vm.activationNum.series_data[2]);
          // }
          // if (vm.ULC_region.indexOf("黔南") > -1) {
          //   data_region.push(vm.activationNum.data_region[3]);
          //   series_data.push(vm.activationNum.series_data[3]);
          // }
          // if (vm.ULC_region.indexOf("黔东南") > -1) {
          //   data_region.push(vm.activationNum.data_region[4]);
          //   series_data.push(vm.activationNum.series_data[4]);
          // }
          // if (vm.ULC_region.indexOf("铜仁") > -1) {
          //   data_region.push(vm.activationNum.data_region[5]);
          //   series_data.push(vm.activationNum.series_data[5]);
          // }
          // if (vm.ULC_region.indexOf("毕节") > -1) {
          //   data_region.push(vm.activationNum.data_region[6]);
          //   series_data.push(vm.activationNum.series_data[6]);
          // }
          // if (vm.ULC_region.indexOf("六盘水") > -1) {
          //   data_region.push(vm.activationNum.data_region[7]);
          //   series_data.push(vm.activationNum.series_data[7]);
          // }
          // if (vm.ULC_region.indexOf("黔西南") > -1) {
          //   data_region.push(vm.activationNum.data_region[8]);
          //   series_data.push(vm.activationNum.series_data[8]);
          // }

        }
        // 视图更新
        setTimeout(function () {
          // console.log("Activate echartsAA 视图更新");
          vm.drawLine();
        }, 300);
        return {
          id: id,
          title: title,
          dataName: dataName,
          color: color,
          data_region: data_region,
          series_data: series_data
        };
      },
      set: function (newValue) { }
    }
  },

  data() {
    return {
      activationNum: {
        // id: "echartsAA",
        // title: "激活用户数",
        // dataName: ["激活数"],
        // color: ["#FF6123"],
        // data_region: [
        //   "贵阳",
        //   "遵义",
        //   "安顺",
        //   "黔南",
        //   "黔东南",
        //   "铜仁",
        //   "毕节",
        //   "六盘水",
        //   "黔西南"
        // ],
        // series_data: [3000, 2800, 2700, 2800, 2700, 2500, 2600, 2700, 2800]
      },
      activationRate: {
        title: "激活率",
        id: "newPayingUsers",
        color: ["#FF6123", "#FF8859"],
        data: [
          [
            "product",
            "贵阳",
            "遵义",
            "安顺",
            "黔南",
            "黔东南",
            "铜仁",
            "毕节",
            "六盘水",
            "黔西南"
          ],
          ["本月", 30, 40, 30, 70, 90, 50, 80, 30, 40],
          ["同期", 20, 40, 50, 40, 60, 40, 77, 50, 80]
        ]
      }
    };
  },
  mounted() {
    this.activationNum = this.activate_user_num
    console.log("this.activate_user_num~~~~~~~~~~~", this.activate_user_num)
    // this.drawLine();
  },
  methods: {
    drawLine() {
      var vm = this;
      var color = vm.activationNum_Change.color;
      var dataName = vm.activationNum_Change.dataName;
      var title = vm.activationNum_Change.title;
      var series_data = vm.activationNum_Change.series_data;
      var data_region = vm.activationNum_Change.data_region;
      var myChart2 = this.$echarts.init(
        document.getElementById(vm.activationNum_Change.id)
      );

      var option2 = {
        title: {
          text: title,
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
          right: "5%",
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          show: true,
          top: "10%",
          left: "40%",
          data: dataName,
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
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          data: data_region
        },
        yAxis: {
          type: "value",
          // max: 16000,
          // min: 0,
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
        series: [
          {
            name: dataName[0],
            type: "bar",
            barWidth: "33%", //柱图宽度
            stack: "总量",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: series_data,
            color: color[0]
          }
        ]
      };
      myChart2.clear();
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
