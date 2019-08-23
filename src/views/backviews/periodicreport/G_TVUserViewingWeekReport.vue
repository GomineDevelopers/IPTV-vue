<template>
  <div class="G_TUserViewingWeekReport height_auto">
    <!-- 收视行为开始 -->
    <el-row class="viewing_behavior_report">
      <el-col class="height_auto viewing_behavior_report_body">
        <el-row class="periodic_report_title m_textalign_c">G+TV用户收视行为周报</el-row>
        <el-row class="viewing_behavior_report_left">
          <!-- ■■■■■■■■■■ 1 用户发展与活跃数据 -->
          <el-row id="module1">
            <com-UVWR-m1></com-UVWR-m1>
          </el-row>

          <!-- ■■■■■■■■■■ 2 移动侧节目收视与页面热度 -->
          <el-row id="module2">
            <com-UVWR-m2></com-UVWR-m2>
          </el-row>

          <!-- ■■■■■■■■■■ 3 电信侧节目收视与页面热度 -->
          <el-row id="module3">
            <com-UVWR-m3></com-UVWR-m3>
          </el-row>

          <!-- ■■■■■■■■■■ 4 联通侧节目收视与页面热度 -->
          <el-row id="module4">
            <com-UVWR-m4></com-UVWR-m4>
          </el-row>

          <!-- ■■■■■■■■■■ 5 本土原创节目点播数据 -->
          <el-row id="module5">
            <com-UVWR-m5></com-UVWR-m5>
          </el-row>
        </el-row>
      </el-col>

      <!-- 右侧导航开始 -->
      <el-col class="viewing_behavior_nav height_auto">
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link1 avtive_link"
            @click="goAnchor('#module1')"
          >用户发展与活跃数据</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link2"
            @click="goAnchor('#module2')"
          >移动侧节目收视与页面热度</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link3"
            @click="goAnchor('#module3')"
          >电信侧节目收视与页面热度</a>
        </el-row>
        <el-row>
          <a
            href="javascript:void(0)"
            class="anchor_link4"
            @click="goAnchor('#module4')"
          >联通侧节目收视与页面热度</a>
        </el-row>
        <el-row>
          <a href="javascript:void(0)" class="anchor_link5" @click="goAnchor('#module5')">本土原创节目点播数据</a>
        </el-row>
      </el-col>
      <!-- 右侧导航结束 -->
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
import "@/styles/common_2.css";

import UVWR_m1 from "@/views/backviews_pr/GT_UVWR/UVWR_m1";
import UVWR_m2 from "@/views/backviews_pr/GT_UVWR/UVWR_m2";
import UVWR_m3 from "@/views/backviews_pr/GT_UVWR/UVWR_m3";
import UVWR_m4 from "@/views/backviews_pr/GT_UVWR/UVWR_m4";
import UVWR_m5 from "@/views/backviews_pr/GT_UVWR/UVWR_m5";

export default {
  name: "G_TUserViewingWeekReport", //G+TV用户收视行为周报
  components: {
    "com-UVWR-m1": UVWR_m1,
    "com-UVWR-m2": UVWR_m2,
    "com-UVWR-m3": UVWR_m3,
    "com-UVWR-m4": UVWR_m4,
    "com-UVWR-m5": UVWR_m5
  },
  data() {
    return {};
  },
  mounted() {
    //监听滚动事件
    $('.viewing_behavior_report_left').scroll(function (event) {
      let scrollTopHeight = $('.viewing_behavior_report_left').scrollTop()
      if (0 <= scrollTopHeight) {
        $(".anchor_link1").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (4300 <= scrollTopHeight) {
        $(".anchor_link2").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (8600 <= scrollTopHeight) {
        $(".anchor_link3").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (12900 <= scrollTopHeight) {
        $(".anchor_link4").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (17200 <= scrollTopHeight) {
        $(".anchor_link5").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
    })
    // 性能：渲染使用下拉加载才渲染
    this.drawLine1_A()
    this.drawLine1_B()
    this.drawLine1_C()
  },
  methods: {
    drawLine1_A() {
      var myChart = this.$echarts.init(document.getElementById("echartsA"));
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
            data: ["7.08-7.14", "7.15-7.21"],
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
              formatter: function () {
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
            name: "在册用户数",
            type: "bar",
            barWidth: "40%",
            data: ["209.4", "213.4"],
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function (params) {
                  let colorList = ["#FFAA89", "#FF6123"];
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
    drawLine1_B() { },
    drawLine1_C() {
      var myChart = this.$echarts.init(document.getElementById("echartsA"));
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
            data: ["7.08-7.14", "7.15-7.21"],
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
              formatter: function () {
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
            name: "在册用户数",
            type: "bar",
            barWidth: "40%",
            data: ["209.4", "213.4"],
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function (params) {
                  let colorList = ["#FFAA89", "#FF6123"];
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
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let scrollDiv = document.querySelector('.viewing_behavior_report_left')  //外层滚动容器元素
      var anchor = document.querySelector(selector)   // 参数为要跳转到的元素id
      scrollDiv.scrollTop = anchor.offsetTop
      $('.viewing_behavior_nav a').on('click', function () {
        $(this).addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      })
    }
  }
};
</script>
<style scoped>
.viewing_behavior_report {
  height: 860px;
  margin: 14px 0px;
  display: -webkit-flex;
  display: flex;
}
.viewing_behavior_report_body {
  flex: 1;
  height: 100%;
}
.viewing_behavior_report_left {
  height: calc(100% - 50px);
  padding-bottom: 40px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
/*webkit内核*/
.viewing_behavior_report_left::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
/*o内核*/
.viewing_behavior_report_left .-o-scrollbar {
  -moz-appearance: none !important;
  background: rgba(0, 255, 0, 0) !important;
}
/*IE10,IE11,IE12*/
.viewing_behavior_report_left {
  -ms-scroll-chaining: chained;
  -ms-overflow-style: none;
  -ms-content-zooming: zoom;
  -ms-scroll-rails: none;
  -ms-content-zoom-limit-min: 100%;
  -ms-content-zoom-limit-max: 500%;
  -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
  -ms-overflow-style: none;
  overflow: auto;
}

.viewing_behavior_nav {
  width: 220px;
}
.viewing_behavior_nav {
  padding-left: 20px;
  text-align: left;
}
.viewing_behavior_nav .el-row {
  margin-bottom: 12px;
}
.viewing_behavior_nav a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.viewing_behavior_nav .avtive_link {
  color: #ff6123;
}
.G_TUserViewingWeekReport {
  text-align: left;
}
</style>