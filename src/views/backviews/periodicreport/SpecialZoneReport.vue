<template>
  <div>
    <!-- 数据报告页面开始 -->
    <el-row class="periodic_report_body">
      <el-row class="periodic_report_title">专题专区数据报告</el-row>
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>数据总览
        </el-row>
        <el-row class="back_white">
          <el-row class="special_data_total">
            <el-col :span="8" class="height_auto">
              <div class="ringlike_div flex">22.1万</div>
              <div class="chart_explain">
                小小福星”专区入口上线以来，
                <br />不去重累计获得
                <i class="special_data">17.5万用户</i>
                点击
                <i class="special_data">22.1</i>万次
              </div>
            </el-col>
            <el-col :span="8" class="height_auto">
              <div class="ringlike_div flex">3.6万</div>
              <div class="chart_explain">
                专区内节目累计点播量
                <i class="special_data">3.6万次</i>
              </div>
            </el-col>
            <el-col :span="8" class="height_auto">
              <div class="ringlike_div flex">4505</div>
              <div class="chart_explain">
                专区内节目累计点播时长
                <i class="special_data">4505小时</i>
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="special_click_data back_white">
        <el-row class="model_title">
          <span class="title_border_left"></span>入口点击情况
        </el-row>
        <el-row class="special_click_chart">
          <el-col :span="8" class="height_auto">
            <bar-chart-single :chartData="clickNumData"></bar-chart-single>
          </el-col>
          <el-col :span="8" class="height_auto">
            <pie-charts :chartData="pageProportionData"></pie-charts>
          </el-col>
          <el-col :span="8" class="height_auto">
            <pie-charts :chartData="operatorProportionData"></pie-charts>
          </el-col>
        </el-row>

        <!-- 上下层图表块分割线开始 -->
        <div class="cut_off_rule"></div>
        <!-- 上下层图表块分割线开始 -->

        <!-- 入口点击情况第二模块开始 -->
        <el-row class="special_click_data2">
          <el-col class="height_auto" :span="8">
            <smooth-line-chart :smoothLineData="recommendPageData"></smooth-line-chart>
          </el-col>
          <el-col class="height_auto" :span="8">
            <smooth-line-chart :smoothLineData="childrenPageData"></smooth-line-chart>
          </el-col>
          <el-col class="height_auto" :span="8">
            <smooth-line-chart :smoothLineData="classifyPageData"></smooth-line-chart>
          </el-col>
        </el-row>
        <!-- 入口点击情况第二模块结束 -->
      </el-row>

      <!-- 节目点播情况开始 -->
      <el-row class="programs_demand back_white">
        <el-row class="model_title">
          <span class="title_border_left"></span>节目点播情况
        </el-row>
        <!-- 节目点播情况模块1开始 -->
        <el-row class="programs_demand_content1">
          <el-col :span="8">
            <bar-list-chart :barListData="playUserNumData"></bar-list-chart>
          </el-col>
          <el-col :span="8">
            <bar-list-chart :barListData="playNumberData"></bar-list-chart>
          </el-col>
          <el-col :span="8">
            <bar-list-chart :barListData="playDemandLengthData"></bar-list-chart>
          </el-col>
        </el-row>
        <!-- 节目点播情况模块1结束 -->

        <!-- 上下层图表块分割线开始 -->
        <div class="cut_off_rule"></div>
        <!-- 上下层图表块分割线开始 -->

        <!-- 节目点播情况模块2开始 -->
        <el-row class="programs_demand_content2">
          <el-col :span="24">
            <!-- 每日TOP5排名走势开始 -->
            <day-rank-top5 :dayRankTop5Data="dayRankTop5Data"></day-rank-top5>
            <!-- 每日TOP5排名走势结束 -->
          </el-col>
        </el-row>
        <!-- 节目点播情况模块2结束 -->
      </el-row>
      <!-- 节目点播情况结束 -->
    </el-row>

    <!-- 数据报告页面结束 -->
  </div>
</template>
<script>
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //单坐标柱状图组件
import PieCharts from "@/views/backcoms/commoncomponents/PieCharts"; //公用饼图
import SmoothLineChart from "@/views/backcoms/commoncomponents/SmoothLineChart"; //平滑曲线折线图组件
import BarListChart from "@/views/backcoms/commoncomponents/BarListChart"; //排名柱状图
import DayRankTop5 from "@/views/backcoms/commoncomponents/DayRankTop5"; //每日排名走势TOP5组件

import { users_subReport } from "@/api/api_main";
import { mapGetters } from "vuex";
export default {
  name: "SpecialZoneReport", //专题专区数据报告

  components: {
    "bar-chart-single": BarChartSingle,
    "pie-charts": PieCharts,
    "smooth-line-chart": SmoothLineChart,
    "bar-list-chart": BarListChart,
    "day-rank-top5": DayRankTop5
  },
  computed: {
    ...mapGetters(["PR_operator"])
    // ...mapGetters(["PR_operator", "PR_day"])
  },
  mounted() {
    this.users_subReport();
  },
  methods: {
    users_subReport() {
      // console.log("users_subReport");

      let vm = this;
      // console.log(String(["联通", "移动"]));
      let operator_arr = this.PR_operator;
      let temp = {
        // operator: String(["联通", "移动"]),
        operator: String(operator_arr),
        start: "2019-07-15",
        end: "2019-07-15"
      };

      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);

      users_subReport(formData)
        .then(function(response) {
          // console.log(response);
          // console.log(response.data.responses[0].aggregations.ti.buckets);
          let data = response.data.responses[0].aggregations.ti.buckets;
          let length = data.length;
          let i;
          let d1 = null,
            d2 = null,
            d3 = null;
          for (i = 0; i < length; i++) {
            // console.log(data[i].key);
            if (data[i].key == "推荐") {
              d1 = data[i];
              // console.log("~~~~i: " + i);
            }
            if (data[i].key == "少儿") {
              d2 = data[i];
              // console.log("~~~~i: " + i);
            }
            if (data[i].key == "分类") {
              d3 = data[i];
              // console.log("~~~~i: " + i);
            }
            if (d1 != null && d2 != null && d3 != null) {
              break;
            }
            // console.log("~~~~i: " + i);
          }
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  },
  data() {
    return {
      //各页面专区入口点击次数
      clickNumData: {
        title: "各页面专区入口点击次数",
        id: "specialClickNum",
        color: ["#5B9BD4", "#FFC000", "#EC7C30"],
        data: [
          ["product", "推荐", "少儿", "分类"],
          ["移动1.0", 4330, 13563, 3337],
          ["联通", 8600, 17896, 1457],
          ["电信", 8300, 16457, 2330]
        ]
      },

      //所属页面占比
      pageProportionData: {
        title: "所属页面占比",
        id: "pageProportionChart",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          { value: 535, name: "推荐" },
          { value: 410, name: "分类" },
          { value: 1348, name: "少儿" }
        ]
      },
      //所属运营商占比
      operatorProportionData: {
        title: "所属运营商占比",
        id: "operatorProportionChart",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          { value: 535, name: "移动1.0" },
          { value: 410, name: "联通" },
          { value: 648, name: "电信" }
        ]
      },

      //推荐页入口每日走势
      recommendPageData: {
        title: "推荐页入口每日走势(次)",
        id: "recommendPage",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          [
            "product",
            "2019/6/24",
            "2019/6/25",
            "2019/6/26",
            "2019/6/27",
            "2019/6/28",
            "2019/6/29",
            "2019/6/30",
            "2019/7/1",
            "2019/7/2",
            "2019/7/3",
            "2019/7/4"
          ],
          [
            "移动推荐",
            2140,
            2370,
            2800,
            2200,
            2234,
            2640,
            2859,
            2140,
            2670,
            2580,
            3800
          ],
          [
            "联通推荐",
            2140,
            2170,
            2580,
            2400,
            2534,
            2640,
            2759,
            2640,
            2270,
            9880,
            4200
          ],
          [
            "电信推荐",
            1400,
            1700,
            1800,
            2000,
            2340,
            2400,
            2590,
            3040,
            3070,
            3800,
            3200
          ]
        ]
      },

      //少儿页入口每日走势（次）
      childrenPageData: {
        title: "少儿页入口每日走势（次）",
        id: "childrenPage",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          [
            "product",
            "2019/6/24",
            "2019/6/25",
            "2019/6/26",
            "2019/6/27",
            "2019/6/28",
            "2019/6/29",
            "2019/6/30",
            "2019/7/1",
            "2019/7/2",
            "2019/7/3",
            "2019/7/4"
          ],
          [
            "移动少儿",
            2140,
            2370,
            2800,
            2200,
            2234,
            2640,
            2859,
            2140,
            2670,
            2580,
            3800
          ],
          [
            "联通少儿",
            2140,
            2170,
            2580,
            2400,
            2534,
            2640,
            2759,
            2640,
            2270,
            9880,
            4200
          ],
          [
            "电信少儿",
            1400,
            1700,
            1800,
            2000,
            2340,
            2400,
            2590,
            3040,
            3070,
            3800,
            3200
          ]
        ]
      },

      //分类页入口每日走势（次）
      classifyPageData: {
        title: "分类页入口每日走势（次）",
        id: "classifyPage",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          [
            "product",
            "2019/6/24",
            "2019/6/25",
            "2019/6/26",
            "2019/6/27",
            "2019/6/28",
            "2019/6/29",
            "2019/6/30",
            "2019/7/1",
            "2019/7/2",
            "2019/7/3",
            "2019/7/4"
          ],
          [
            "移动分类",
            2140,
            2370,
            2800,
            2200,
            2234,
            2640,
            2859,
            2140,
            2670,
            2580,
            3800
          ],
          [
            "联通分类",
            2140,
            2170,
            2580,
            2400,
            2534,
            2640,
            2759,
            2640,
            2270,
            9880,
            4200
          ],
          [
            "电信分类",
            1400,
            1700,
            1800,
            2000,
            2340,
            2400,
            2590,
            3040,
            3070,
            3800,
            3200
          ]
        ]
      },

      // 点播用户数数据
      playUserNumData: {
        title: "点播用户数(户)",
        id: "playUserNum",
        color: ["#A9D18E"],
        data: [
          ["product", "点播用户数"],
          ["海选第二期-片段四", 152],
          ["海选第三期-片段二", 242],
          ["海选第二期-片段一", 485],
          ["Cut 9-海选第一期", 717],
          ["Cut 4-海选第一期", 733],
          ["Cut 8-海选第一期", 894],
          ["Cut 5-海选第一期", 928],
          ["Cut 6-海选第一期", 937],
          ["Cut 3-海选第一期", 1324],
          ["Cut 7-海选第一期", 1621],
          ["Cut 10-海选第一期", 1685],
          ["Cut 2-海选第一期", 2588],
          ["海选第三期-片段一", 3068],
          ["Cut 1-海选第一期", 4350],
          ["《福星成长营》火热报名中", 9692]
        ]
      },

      // 点播次数数据
      playNumberData: {
        title: "点播次数(次)",
        id: "playNumber",
        color: ["#5B9BD4"],
        data: [
          ["product", "点播次数"],
          ["海选第二期-片段四", 152],
          ["海选第三期-片段二", 242],
          ["海选第二期-片段一", 485],
          ["Cut 9-海选第一期", 717],
          ["Cut 4-海选第一期", 733],
          ["Cut 8-海选第一期", 894],
          ["Cut 5-海选第一期", 928],
          ["Cut 6-海选第一期", 937],
          ["Cut 3-海选第一期", 1324],
          ["Cut 7-海选第一期", 1621],
          ["Cut 10-海选第一期", 1705],
          ["Cut 2-海选第一期", 2588],
          ["海选第三期-片段一", 3068],
          ["Cut 1-海选第一期", 4350],
          ["《福星成长营》火热报名中", 11692]
        ]
      },

      // 点播时长数据
      playDemandLengthData: {
        title: "点播时长(小时)",
        id: "playDemandLength",
        color: ["#FFC000"],
        data: [
          ["product", "点播时长"],
          ["海选第二期-片段四", 102],
          ["海选第三期-片段二", 142],
          ["海选第二期-片段一", 185],
          ["Cut 9-海选第一期", 217],
          ["Cut 4-海选第一期", 233],
          ["Cut 8-海选第一期", 289],
          ["Cut 5-海选第一期", 308],
          ["Cut 6-海选第一期", 327],
          ["Cut 3-海选第一期", 374],
          ["Cut 7-海选第一期", 401],
          ["Cut 10-海选第一期", 455],
          ["Cut 2-海选第一期", 508],
          ["海选第三期-片段一", 568],
          ["Cut 1-海选第一期", 650],
          ["《福星成长营》火热报名中", 1692]
        ]
      },

      //每日排名走势组件数据
      dayRankTop5Data: [
        {
          date: "6月28日",
          data: {
            top1: { classfiy: "classfiy1", name: "《福星成长营》火热报名中" },
            top2: { classfiy: "classfiy2", name: "Cut 1-海选第一期" },
            top3: { classfiy: "classfiy3", name: "Cut 2-海选第一期" },
            top4: { classfiy: "classfiy4", name: "Cut 10-海选第一期" },
            top5: { classfiy: "classfiy5", name: "Cut 7-海选第一期" }
          }
        },
        {
          date: "6月29日",
          data: {
            top1: { classfiy: "classfiy1", name: "《福星成长营》火热报名中" },
            top2: { classfiy: "classfiy2", name: "Cut 1-海选第一期" },
            top3: { classfiy: "classfiy3", name: "Cut 2-海选第一期" },
            top4: { classfiy: "classfiy4", name: "Cut 10-海选第一期" },
            top5: { classfiy: "classfiy5", name: "Cut 7-海选第一期" }
          }
        },
        {
          date: "6月30日",
          data: {
            top1: { classfiy: "classfiy1", name: "《福星成长营》火热报名中" },
            top2: { classfiy: "classfiy2", name: "Cut 1-海选第一期" },
            top3: { classfiy: "classfiy3", name: "Cut 2-海选第一期" },
            top4: { classfiy: "classfiy4", name: "Cut 10-海选第一期" },
            top5: { classfiy: "classfiy5", name: "Cut 7-海选第一期" }
          }
        },
        {
          date: "7月1日",
          data: {
            top1: { classfiy: "classfiy1", name: "《福星成长营》火热报名中" },
            top2: { classfiy: "classfiy2", name: "Cut 1-海选第一期" },
            top3: { classfiy: "classfiy3", name: "Cut 2-海选第一期" },
            top4: { classfiy: "classfiy4", name: "Cut 10-海选第一期" },
            top5: { classfiy: "classfiy5", name: "Cut 7-海选第一期" }
          }
        },
        {
          date: "7月2日",
          data: {
            top1: { classfiy: "classfiy1", name: "《福星成长营》火热报名中" },
            top2: { classfiy: "classfiy2", name: "Cut 1-海选第一期" },
            top3: { classfiy: "classfiy3", name: "Cut 2-海选第一期" },
            top4: { classfiy: "classfiy4", name: "Cut 10-海选第一期" },
            top5: { classfiy: "classfiy6", name: "Cut 3-海选第一期" }
          }
        },
        {
          date: "7月3日",
          data: {
            top1: { classfiy: "classfiy7", name: "海选第三期-片段一" },
            top2: { classfiy: "classfiy1", name: "《福星成长营》火热报名中" },
            top3: { classfiy: "classfiy2", name: "Cut 1-海选第一期" },
            top4: { classfiy: "classfiy8", name: "海选第二期-片段一" },
            top5: { classfiy: "classfiy3", name: "Cut 2-海选第一期" }
          }
        },
        {
          date: "7月4日",
          data: {
            top1: { classfiy: "classfiy7", name: "海选第三期-片段一" },
            top2: { classfiy: "classfiy8", name: "海选第二期-片段一" },
            top3: { classfiy: "classfiy2", name: "Cut 1-海选第一期" },
            top4: { classfiy: "classfiy1", name: "《福星成长营》火热报名中" },
            top5: { classfiy: "classfiy9", name: "海选第三期-片段二" }
          }
        }
      ]
    };
  }
};
</script>
<style scoped>
.periodic_report_body {
  height: 100%;
  margin: 14px 0px;
}
.special_data_total {
  height: 300px;
}
.ringlike_div {
  margin: 0 auto;
  border: 30px solid #ff8758;
  border-radius: 130px;
  height: 130px;
  width: 130px;
  font-weight: bold;
  color: red;
}
.chart_explain {
  font-size: 16px;
  color: #333;
  margin-top: 20px;
}
.chart_explain i.special_data {
  font-style: normal;
  color: red;
  font-size: 16px;
  font-weight: bold;
}

/* 入口点击情况开始 */
.special_click_data {
  height: 100%;
  margin: 14px 0px;
}
.special_click_chart {
  height: 300px;
}
.cut_off_rule {
  border-bottom: 1px dashed #f0f0f0;
  margin: 40px 0px;
}
.special_click_data2 {
  height: 500px;
}
/* 入口点击情况结束 */

/* 节目点播情况开始 */
.programs_demand {
  height: 100%;
  margin-bottom: 50px;
}
.programs_demand_content1 {
  height: 550px;
}
.programs_demand_content2 {
  height: 550px;
}
/* 节目点播情况结束 */
</style>