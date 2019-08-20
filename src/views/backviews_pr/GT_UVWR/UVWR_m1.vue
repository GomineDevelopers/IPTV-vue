<template>
  <div class="UVWR_m1">
    <!-- ///////////////////////// A -->
    <el-row class="chart_body back_white">
      <p class="m_common_title_font">G+TV用户发展数据</p>
      <!-- 柱状图 -->
      <div class="m_init_div m_width_25 m_padding_lr_4">
        <div class="m_common_echarts_styleA" id="GT_UVWR1_A1"></div>
        <p
          class="m_margin_00 m_common_content_font"
        >截至2019年6月3日凌晨，平台累计 在册用户数2,133,546户，较前一 周增长2.0%，增速回落0.5个百分点。</p>
      </div>
      <!-- 饼图 -->
      <div class="m_init_div m_width_25 m_padding_lr_4">
        <!-- <div class="m_common_echarts_styleA" id="GT_UVWR1_A2"></div> -->
        <pie-center-label :chartData="GT_UVWR1_A2"></pie-center-label>
        <p
          class="m_margin_00 m_common_content_font"
        >移动在册用户1,162,381户，较前一周增长 2.5%，增速提升0.1个百分点。 电信在册用户594,456户，较前一周增长3.9%， 增速提升0.1个百分点。 联通在册用户376,709户，较前一周减少9,533 户。</p>
      </div>
      <!-- 柱状图 -->
      <div class="m_init_div m_width_25 m_padding_lr_4">
        <div class="m_common_echarts_styleA" id="GT_UVWR1_A3"></div>
        <p
          class="m_margin_00 m_common_content_font"
        >周新增60,798户，较前一周增加8.6%。 周停机12,369户，较前一周增加969.1%， 较上月同期（0426-0502）增长108.9%。 周销户21,165户，较前一周增长247.5%， 较上月同期增长39.6%。</p>
      </div>
    </el-row>
    <!-- ///////////////////////// B -->
    <el-row class="chart_body back_white">
      <p class="m_common_title_font">各市州G+TV用户发展数据</p>

      <!-- 饼图 -->
      <div class="m_init_div m_width_40 m_padding_lr_4">
        <p class="m_common_sm_title_font">各市州在册用户占比（万户）</p>
        <pie-center-label :chartData="GT_UVWR1_B1"></pie-center-label>
      </div>

      <!-- 柱状图 + 折线图 -->
      <div class="m_init_div m_width_40 m_padding_lr_5">
        <p class="m_common_sm_title_font">三大运营商各市州一周新增在册用户数（户）</p>
        <!-- <pie-center-label :chartData="GT_UVWR1_A2"></pie-center-label> -->
      </div>

      <p class="m_margin_00 m_common_content_font">上周在册用户净增40,899户，增量下滑19.3%。</p>
      <p
        class="m_margin_00 m_common_content_font"
      >各市州平均增速2.8%，环比提升0.2个百分点。毕节市增速3.7%最高，环比提升0.7个百分点；安顺市增速2.0%最低，环比提升0.4个百分点。</p>
    </el-row>
    <!-- ///////////////////////// C -->
    <el-row class="chart_body back_white">
      <p class="m_common_title_font">G+TV一周用户增减数据</p>
      <!-- 饼图x3 -->
      <div class="m_init_div m_width_25 m_padding_lr_4">
        <p class="m_common_sm_title_font">新增用户占比</p>
        <pie-center-label :chartData="GT_UVWR1_C1"></pie-center-label>
      </div>
      <div class="m_init_div m_width_25 m_padding_lr_4">
        <p class="m_common_sm_title_font">停机用户占比</p>
        <pie-center-label :chartData="GT_UVWR1_C2"></pie-center-label>
      </div>
      <div class="m_init_div m_width_25 m_padding_lr_4">
        <p class="m_common_sm_title_font">销户用户占比</p>
        <pie-center-label :chartData="GT_UVWR1_C3"></pie-center-label>
      </div>
      <!-- 曲线图x3 -->
      <p>*注：停机、销户数据统计时间为2019年6月3日24:00（不同时间点统计，停机数和销户数会有所区别）。</p>
    </el-row>
    <!-- ///////////////////////// D -->

    <el-row class="chart_body back_white">
      <p class="m_common_title_font">各运营商周一开机率</p>
      <div class="m_init_div m_width_40 m_padding_lr_4">
        <p class="m_common_sm_title_font">各市州在册用户占比（万户）</p>
        <bar-chart-single :chartData="GT_UVWR1_D1"></bar-chart-single>
      </div>

      <p>*注：电信全省放号后大量使用融合终端，导致不关机顶盒的用户大幅上升，以开机行为计算的开机率大幅下降。</p>
      <!-- <p>上周各运营商一周开机率保持稳定，其中联通有所上升，电信继续下降。平均每日开机率则是联通下降，电信上升。这代表联通活跃用户规模增加，但活跃程度有 所降低。移动两项数据均与前一周持平。</p> -->
      <!-- <p>分地区来看，铜仁市、遵义市两地整体开机率下降较多，铜仁市开机用户数环比减少293户。遵义市电信侧开机率大降2.9%。毕节市开机率大幅增加。</p> -->
    </el-row>
    <!-- ///////////////////////// E -->
    <el-row class="chart_body back_white">
      <p class="m_common_title_font">一周直播节目收视TOP15（万小时）</p>
      <!-- 列表&条线图x3 -->
    </el-row>
    <!-- ///////////////////////// F -->
    <el-row class="chart_body back_white">
      <p class="m_common_title_font">一周点播节目TOP15（万次）</p>
      <!-- 列表&条线图x3 -->
    </el-row>
  </div>
</template>

<script>
import pie_center_label from "@/views/backcoms/commoncomponents2/pie_center_label"; //（空心）饼图组件
import BarChartSingle from "@/views/backcoms/commoncomponents2/BarChartSingle_Change"; //（空心）饼图组件

export default {
  name: "UVWR_m1",
  components: {
    "bar-chart-single": BarChartSingle,
    "pie-center-label": pie_center_label
  },

  data() {
    return {
      GT_UVWR1_A2: {
        title: "",
        id: "GT_UVWR1_A2",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#FFC000", "#5B9BD5"],
        m_data2: [
          { value: 116.4, name: "移动" },
          { value: 59.7, name: "电信" },
          { value: 32.4, name: "联通" }
        ],
        label_formatter: "{c}\n{d}%",
        legend_show: true
      },

      GT_UVWR1_B1: {
        title: "",
        id: "GT_UVWR1_B1",
        m_data: [
          "贵阳",
          "遵义",
          "黔东南",
          "毕节",
          "黔南",
          "铜仁",
          "六盘水",
          "安顺",
          "黔西南"
        ],
        m_color: [
          "#5B9BD5",
          "#FFC000",
          "#ED7D31",
          "#9DC3E6",
          "#FFD966",
          "#F4B183",
          "#DEEBF7",
          "#FFF2CC",
          "#FBE5D6"
        ],
        m_data2: [
          { value: 116.4, name: "贵阳" },
          { value: 59.7, name: "遵义" },
          { value: 32.4, name: "黔东南" },
          { value: 32.4, name: "毕节" },
          { value: 32.4, name: "黔南" },
          { value: 32.4, name: "铜仁" },
          { value: 32.4, name: "六盘水" },
          { value: 32.4, name: "安顺" },
          { value: 32.4, name: "黔西南" }
        ],
        label_formatter: "{b}\n{c}\n{d}%",
        legend_show: false
      },

      GT_UVWR1_C1: {
        title: "",
        id: "GT_UVWR1_C1",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#FFC000", "#5B9BD5"],
        m_data2: [
          { value: 7, name: "移动" },
          { value: 38, name: "电信" },
          { value: 55, name: "联通" }
        ],
        label_formatter: "{d}%",
        legend_show: true
      },
      GT_UVWR1_C2: {
        title: "",
        id: "GT_UVWR1_C2",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#FFC000", "#5B9BD5"],
        m_data2: [
          { value: 100, name: "移动" },
          { value: 0, name: "电信" },
          { value: 0, name: "联通" }
        ],
        label_formatter: "{c}\n{d}%",
        legend_show: true
      },
      GT_UVWR1_C3: {
        title: "",
        id: "GT_UVWR1_C3",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#FFC000", "#5B9BD5"],
        m_data2: [
          { value: 116.4, name: "移动" },
          { value: 59.7, name: "电信" },
          { value: 32.4, name: "联通" }
        ],
        label_formatter: "{c}\n{d}%",
        legend_show: true
      },
      GT_UVWR1_D1: {
        // title: "",
        // id: "GT_UVWR1_D1",
        // color: ["#5B9BD4", "#FFC000"],
        data: [
          ["product", "推荐", "少儿包"],
          ["移动", 48.0, 48.1],
          ["电信", 54.2, 57.4],
          ["联通", 20.1, 20.0]
        ],
        title: "各页面专区入口点击次数",
        id: "GT_UVWR1_D1",
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        // data: [
        //   ["product", "推荐", "少儿包", "分类"],
        //   ["移动1.0", 4330, 13563, 3337],
        //   ["电信", 8300, 16457, 2330],
        //   ["联通", 8600, 17896, 1457]
        // ]
      }
    };
  },
  mounted() {
    this.GT_UVWR1_A1();
    this.GT_UVWR1_A3();
  },
  methods: {
    GT_UVWR1_A1() {
      var myChart = this.$echarts.init(document.getElementById("GT_UVWR1_A1"));
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
            data: ["0520-0526", "0527-0602"],
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
            name: "",
            type: "bar",
            barWidth: "40%",
            data: ["209.4", "213.4"],
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function(params) {
                  let colorList = ["#EDEDED", "#ED7D31"];
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
    },
    GT_UVWR1_A3() {
      var myChart = this.$echarts.init(document.getElementById("GT_UVWR1_A3"));
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
            data: ["新增用户数", "停机用户数", "销户用户数"],
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
            name: "",
            type: "bar",
            barWidth: "40%",
            data: ["65453", "12356", "21235"],
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function(params) {
                  let colorList = ["#5B9BD5", "#FFC000", "#ED7D31"];
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

<style >
.UVWR_m1 .GT_UVWR1_A1 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
.UVWR_m1 .GT_UVWR1_A2 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
.UVWR_m1 .GT_UVWR1_A3 {
  display: inline-block;
  height: 300px;
  width: 100%;
}

.UVWR_m1 .GT_UVWR1_B1 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
.UVWR_m1 .GT_UVWR1_B2 {
  display: inline-block;
  height: 300px;
  width: 100%;
}
</style>