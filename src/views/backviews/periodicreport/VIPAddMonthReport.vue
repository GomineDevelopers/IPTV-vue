<template>
  <div class="height_auto">
    <!-- VIP增值业务专项分析开始 -->
    <el-row class="VIP_value_added_body">
      <el-row class="periodic_report_title">VIP增值业务专项分析</el-row>

      <!-- 新增用户转化率开始 -->
      <el-row class="new_add_user_percent back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>新增用户转化情况
        </el-row>
        <el-row class="new_add_user_percent_body">
          <el-col class="height_auto" :span="12">
            <monthly-total-viewing :lineData="newAddUserPercentData"></monthly-total-viewing>
          </el-col>
          <el-col class="height_auto" :span="12">
            <line-chart-single-prop :lineData="newAddPayingUserData"></line-chart-single-prop>
          </el-col>
        </el-row>
      </el-row>
      <!-- 新增用户转化率结束 -->

      <!-- 6月新增在册用户及开机行为用户数据（日趋势）开始 -->
      <el-row class="back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>6月新增在册用户及开机行为用户数据（日趋势）
        </el-row>
        <el-row class="new_registered_users_body">
          <el-col class="height_auto" :span="24">
            <double-yaxis-chart :lineData="newRegisteredUsersData"></double-yaxis-chart>
          </el-col>
        </el-row>
      </el-row>
      <!-- 6月新增在册用户及开机行为用户数据（日趋势）结束 -->

      <!-- 6月新增在册用户、开机行为用户数及新增付费用户数据（日趋势）开始 -->
      <el-row class="back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>6月新增在册用户、开机行为用户数及新增付费用户数据（日趋势）
        </el-row>
        <el-row class="new_registered_users_body">
          <el-col class="height_auto" :span="12">
            <double-yaxis-chart :lineData="powerAddNewUsersData"></double-yaxis-chart>
          </el-col>
          <el-col class="height_auto" :span="12">
            <double-yaxis-chart :lineData="powerAddNewPayingUsersData"></double-yaxis-chart>
          </el-col>
        </el-row>
      </el-row>
      <!-- 6月新增在册用户、开机行为用户数及新增付费用户数据（日趋势）结束-->

      <!-- 6月订购数据开始 -->
      <el-row class="back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>6月订购数据
        </el-row>
        <el-row class="new_registered_users_body">
          <el-col class="height_auto" :span="8">
            <bar-chart-single :chartData="monthOrderData"></bar-chart-single>
          </el-col>
          <el-col class="height_auto" :span="8">
            <bar-chart-single :chartData="monthVIPOrderData"></bar-chart-single>
          </el-col>
          <el-col class="height_auto" :span="8">
            <bar-chart-single :chartData="monthVIPOrderIncomeData"></bar-chart-single>
          </el-col>
        </el-row>
      </el-row>
      <!-- 6月订购数据结束-->

      <!-- 订购内容来源开始 -->
      <el-row class="back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>订购内容来源
        </el-row>
        <el-row class="order_content_body">
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="guideUserPayingContentData1"></live-view-behavior-analysis>
          </el-col>
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="guideUserPayingContentData2"></live-view-behavior-analysis>
          </el-col>
        </el-row>
      </el-row>
      <!-- 订购内容来源结束 -->

      <!-- 6月订购用户所属地区数据开始 -->
      <el-row class="back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>6月订购用户所属地区数据
        </el-row>
        <el-row class="order_user_region_body">
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="orderUserRegionData"></live-view-behavior-analysis>
            <span class="red_span">注：“空白”为未匹配或测试地区</span>
          </el-col>
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="GuiyangPayingUserData"></live-view-behavior-analysis>
          </el-col>
        </el-row>
      </el-row>
      <!-- 6月订购用户所属地区数据结束 -->

      <!-- 分地区订购用户引导付费内容订购排名开始 -->
      <el-row class="back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>分地区订购用户引导付费内容订购排名
        </el-row>
        <el-row class="regionalize_paying_user_body">
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="ZunyiPayingUserData"></live-view-behavior-analysis>
          </el-col>
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="QiannanPayingUserData"></live-view-behavior-analysis>
          </el-col>
        </el-row>
        <!-- 上下层图表块分割线开始 -->
        <div class="cut_off_rule"></div>
        <!-- 上下层图表块分割线开始 -->
        <el-row class="regionalize_paying_user_body">
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="QiandongnanPayingUserData"></live-view-behavior-analysis>
          </el-col>
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="TongrenPayingUserData"></live-view-behavior-analysis>
          </el-col>
        </el-row>
        <!-- 上下层图表块分割线开始 -->
        <div class="cut_off_rule"></div>
        <!-- 上下层图表块分割线开始 -->
        <el-row class="regionalize_paying_user_body">
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="BijiePayingUserData"></live-view-behavior-analysis>
          </el-col>
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="QianxinanPayingUserData"></live-view-behavior-analysis>
          </el-col>
        </el-row>
        <!-- 上下层图表块分割线开始 -->
        <div class="cut_off_rule"></div>
        <!-- 上下层图表块分割线开始 -->
        <el-row class="regionalize_paying_user_body">
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="LiupanshuiPayingUserData"></live-view-behavior-analysis>
          </el-col>
          <el-col class="height_auto" :span="12">
            <live-view-behavior-analysis :barListData="AnshunPayingUserData"></live-view-behavior-analysis>
          </el-col>
        </el-row>
      </el-row>
      <!-- 分地区订购用户引导付费内容订购排名结束 -->

      <!-- 6月订购用户数数据分布对比开始 -->
      <el-row class="back_white marginbottom_14">
        <el-row class="model_title">
          <span class="title_border_left"></span>6月订购用户数数据分布对比
        </el-row>
        <el-row class="order_user_distribution_body">
          <el-col class="height_auto" :span="12">
            <many-pie-chart2 :pieData="orderUserContrastData"></many-pie-chart2>
          </el-col>
          <el-col class="height_auto" :span="12">
            <many-pie-chart2 :pieData="incomeContrastData"></many-pie-chart2>
          </el-col>
        </el-row>
      </el-row>
      <!-- 6月订购用户数数据分布对比结束 -->

      <!-- 点播TOP榜单开始 -->
      <el-row class="back_white marginbottom_14 marginbottom_60">
        <el-row class="model_title">
          <span class="title_border_left"></span>点播TOP榜单
        </el-row>
        <el-row class="dibble_table_body">
          <el-col class="height_auto table_col_body" :span="12">
            <el-row class="table_title">2019年5月1-2019年5月31日点播次数排名（TOP15）</el-row>
            <dibble-table :tableData="tableData"></dibble-table>
          </el-col>
          <el-col class="height_auto table_col_body" :span="12">
            <el-row class="table_title">2019年6月1-2019年6月30日点播次数排名（TOP15）</el-row>
            <dibble-table :tableData="tableData2"></dibble-table>
          </el-col>
        </el-row>
      </el-row>
      <!-- 点播TOP榜单结束 -->
    </el-row>
    <!-- VIP增值业务专项分析结束 -->
  </div>
</template>
<script>
import MonthlyTotalViewing from "@/views/backcoms/G_TVuserviewingmonthreport/MonthlyTotalViewing"; //整体收拾行为分析（多个空心饼图组成的图表）
import LineChartSingleProp from "@/views/backcoms/commoncomponents/LineChartSingleProp"; //单数据折线图组件（百分比）
import DoubleYaxisChart from "@/views/backcoms/vipaddmonthreport/DoubleYaxisChart"; //双Y轴两条折线的图表
import BarChartSingle from "@/views/backcoms/commoncomponents/BarChartSingle"; //柱状图图表
import LiveViewBehaviorAnalysis from "@/views/backcoms/G_TVuserviewingmonthreport/LiveViewBehaviorAnalysis"; //TOP排名（柱状图列表）
import ManyPieChart2 from "@/views/backcoms/vipaddmonthreport/ManyPieChart2"; //双Y轴两条折线的图表
import DibbleTable from "@/views/backcoms/vipaddmonthreport/DibbleTable"; //表格组件

import { mapGetters } from "vuex";
export default {
  name: "VIPAddMonthReport", //VIP增值业务专项分析
  components: {
    "monthly-total-viewing": MonthlyTotalViewing,
    "line-chart-single-prop": LineChartSingleProp,
    "double-yaxis-chart": DoubleYaxisChart,
    "bar-chart-single": BarChartSingle,
    "live-view-behavior-analysis": LiveViewBehaviorAnalysis,
    "many-pie-chart2": ManyPieChart2,
    "dibble-table": DibbleTable
  },
  mounted() {},
  computed: {
    // ...this.$mapGetters(["PR_operator"])
    ...mapGetters(["PR_operator"])

  },
  methods: {
    users_vipReport() {
      // console.log("users_vipReport");
      let vm = this;
      let operator_arr = this.PR_operator;
      let temp = {
        // operator: String(["联通", "移动"]),
        operator: String(operator_arr),
        start: "2019-07-03",
        end: "2019-07-03"
      };
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      users_vipReport(formData)
        .then(function(response) {
          // console.log(response);
          // console.log(response.data.responses[0].aggregations.ti.buckets);
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  },
  data() {
    return {
      //用户数据概览
      newAddUserPercentData: {
        title: "用户数据概览（户）",
        id: "newAddUserPercen",
        color: ["#EC7C30", "#FFC618", "#70AD47"],
        data: [
          ["product", "2月", "3月", "4月", "5月", "6月"],
          ["新增在册用户数（万户）", 7.7, 11.1, 12.0, 9.7, 7.6],
          ["开机行为用户数（万户）", 12.1, 15.3, 17.2, 17.7, 20.0],
          ["新增付费用户数（万户）", 0.8, 0.7, 0.7, 0.9, 0.9]
        ]
      },
      // 开机行为用户中新增付费用户占比
      newAddPayingUserData: {
        title: "开机行为用户中新增付费用户占比",
        id: "newAddPayingUser",
        color: ["#EC7C30"],
        data: [
          ["product", "2月", "3月", "4月", "5月", "6月"],
          ["新增付费用户占比", 7.0, 4.3, 4.0, 5.0, 4.5]
        ]
      },

      //新增在册用户及开机行为用户数据
      newRegisteredUsersData: {
        title: "",
        id: "newRegisteredUsers",
        color: ["#A5A5A5", "#5B9BD5"],
        data: [
          [
            "product",
            "6月1日",
            "6月2日",
            "6月3日",
            "6月4日",
            "6月5日",
            "6月6日",
            "6月7日",
            "6月8日",
            "6月9日",
            "6月10日",
            "6月11日",
            "6月12日",
            "6月13日",
            "6月14日",
            "6月15日",
            "6月16日",
            "6月17日",
            "6月18日",
            "6月19日",
            "6月20日",
            "6月21日",
            "6月22日",
            "6月23日",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日"
          ],
          [
            "新增在册用户数",
            2200,
            2300,
            2358,
            2541,
            2235,
            2320,
            2450,
            2158,
            2241,
            2635,
            2000,
            2100,
            2308,
            2541,
            2235,
            2720,
            2050,
            2108,
            2341,
            2435,
            2100,
            2300,
            2058,
            2441,
            2035,
            2320,
            2550,
            2358,
            2241,
            2135
          ],
          [
            "新增付费用户数",
            213,
            330,
            430,
            541,
            235,
            220,
            350,
            358,
            241,
            335,
            210,
            230,
            205,
            241,
            235,
            320,
            550,
            358,
            241,
            135,
            220,
            230,
            235,
            251,
            235,
            320,
            450,
            158,
            241,
            635
          ]
        ]
      },

      //新增在册用户，开机行为用户数据（日趋势）
      powerAddNewUsersData: {
        title: "",
        id: "powerAddNewUsers",
        color: ["#79B253", "#FFD75C"],
        data: [
          [
            "product",
            "6月1日",
            "6月2日",
            "6月3日",
            "6月4日",
            "6月5日",
            "6月6日",
            "6月7日",
            "6月8日",
            "6月9日",
            "6月10日",
            "6月11日",
            "6月12日",
            "6月13日",
            "6月14日",
            "6月15日",
            "6月16日",
            "6月17日",
            "6月18日",
            "6月19日",
            "6月20日",
            "6月21日",
            "6月22日",
            "6月23日",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日"
          ],
          [
            "开机行为用户数",
            2200,
            2300,
            2358,
            2541,
            2235,
            2320,
            2450,
            2158,
            2241,
            2635,
            2000,
            2100,
            2308,
            2541,
            2235,
            2720,
            2050,
            2108,
            2341,
            2435,
            2100,
            2300,
            2058,
            2441,
            2035,
            2320,
            2550,
            2358,
            2241,
            2135
          ],
          [
            "新增在册用户数",
            213,
            330,
            430,
            541,
            235,
            220,
            350,
            358,
            241,
            335,
            210,
            230,
            205,
            241,
            235,
            320,
            550,
            358,
            241,
            135,
            220,
            230,
            235,
            251,
            235,
            320,
            450,
            158,
            241,
            635
          ]
        ]
      },
      //新增在册用户，开机行为用户数及新增付费用户数据（日趋势）
      powerAddNewPayingUsersData: {
        title: "",
        id: "powerAddNewPayingUsers",
        color: ["#79B253", "#FFD75C"],
        data: [
          [
            "product",
            "6月1日",
            "6月2日",
            "6月3日",
            "6月4日",
            "6月5日",
            "6月6日",
            "6月7日",
            "6月8日",
            "6月9日",
            "6月10日",
            "6月11日",
            "6月12日",
            "6月13日",
            "6月14日",
            "6月15日",
            "6月16日",
            "6月17日",
            "6月18日",
            "6月19日",
            "6月20日",
            "6月21日",
            "6月22日",
            "6月23日",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日"
          ],
          [
            "开机行为用户数",
            2200,
            2300,
            2358,
            2541,
            2235,
            2320,
            2450,
            2158,
            2241,
            2635,
            2000,
            2100,
            2308,
            2541,
            2235,
            2720,
            2050,
            2108,
            2341,
            2435,
            2100,
            2300,
            2058,
            2441,
            2035,
            2320,
            2550,
            2358,
            2241,
            2135
          ],
          [
            "新增在册用户数",
            213,
            330,
            430,
            541,
            235,
            220,
            350,
            358,
            241,
            335,
            210,
            230,
            205,
            241,
            235,
            320,
            550,
            358,
            241,
            135,
            220,
            230,
            235,
            251,
            235,
            320,
            450,
            158,
            241,
            635
          ]
        ]
      },

      //6月订购数据
      monthOrderData: {
        title: "6月订购数据",
        id: "monthOrder",
        color: ["#ED7D31", "#FFC000"],
        data: [
          ["product", "订购用户数（户）", "收入（元）"],
          ["2月", 8300, 13330],
          ["3月", 6457, 13563],
          ["4月", 6330, 14337],
          ["5月", 8832, 17330],
          ["6月", 8935, 17563]
        ]
      },
      //VIP包订购用户数
      monthVIPOrderData: {
        title: "VIP包订购用户数",
        id: "monthVIPOrder",
        color: ["#70AD47", "#4472C4", "#FFC000"],
        data: [
          ["product", "影视包（户）", "少儿包（户）", "欢乐家庭包（户）"],
          ["2月", 8300, 1330, 854],
          ["3月", 6457, 1563, 315],
          ["4月", 6330, 1437, 234],
          ["5月", 8832, 1330, 256],
          ["6月", 8935, 1563, 205]
        ]
      },
      //VIP包收入情况
      monthVIPOrderIncomeData: {
        title: "VIP包订购用户数",
        id: "monthVIPOrderIncome",
        color: ["#D39E00", "#FFC000", "#FFD9A0"],
        data: [
          ["product", "影视包（万元）", "少儿包（万元）", "欢乐家庭包（万元）"],
          ["2月", 9.6, 1.8, 2.5],
          ["3月", 10.2, 2.2, 1.3],
          ["4月", 10.3, 3.0, 1.2],
          ["5月", 13.3, 3.1, 1.5],
          ["6月", 13.2, 3.1, 1.0]
        ]
      },
      //5月引导用户付费内容排名（户）
      guideUserPayingContentData1: {
        title: "5月引导用户付费内容排名（户）",
        id: "guideUserPayingContent1",
        color: ["#ED7D31"],
        data: [
          ["product", "点击次数（万次）"],
          ["（电视剧）封神演义", 78],
          ["（电视剧）新白娘子传奇2019", 91],
          ["（电影）飞驰人生", 98],
          ["（电视剧）青春斗", 101],
          ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          ["（少儿）熊出没之探险日记 第二季", 179],
          ["（电视剧）招摇", 188],
          ["（电视剧）黄河英雄", 191],
          ["（电视剧）夜空中最闪亮的星", 285],
          ["（综艺）王牌对王牌 第四季", 302],
          ["（少儿）汪汪队立大功 第四季", 340],
          ["（电影）狂暴凶狮", 396],
          ["（通灵妃）通灵妃", 400],
          ["湖南卫视（高清）", 452],
          ["（电影）绿毛怪格林奇（原声版）", 465],
          ["（电影）钢铁飞龙之奥特曼崛起", 480],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          ["（电视剧）推手", 527],
          ["（动漫）猫妖的诱惑", 538],
          ["（少儿）假面骑士时王", 560]
        ]
      },
      //6月引导用户付费内容排名（户）
      guideUserPayingContentData2: {
        title: "6月引导用户付费内容排名（户）",
        id: "guideUserPayingContent2",
        color: ["#5B9BD4"],
        data: [
          ["product", "点击次数（万次）"],
          ["（电视剧）封神演义", 78],
          ["（电视剧）新白娘子传奇2019", 91],
          ["（电影）飞驰人生", 98],
          ["（电视剧）青春斗", 101],
          ["（少儿）猪猪侠之竞球小英雄第二部", 150],
          ["（少儿）熊出没之探险日记 第二季", 179],
          ["（电视剧）招摇", 188],
          ["（电视剧）黄河英雄", 191],
          ["（电视剧）夜空中最闪亮的星", 285],
          ["（综艺）王牌对王牌 第四季", 302],
          ["（少儿）汪汪队立大功 第四季", 340],
          ["（电影）狂暴凶狮", 396],
          ["（通灵妃）通灵妃", 400],
          ["湖南卫视（高清）", 452],
          ["（电影）绿毛怪格林奇（原声版）", 465],
          ["（电影）钢铁飞龙之奥特曼崛起", 480],
          ["（少儿）宝宝巴士启蒙音乐剧之汽车家族", 506],
          ["（电视剧）推手", 527],
          ["（动漫）猫妖的诱惑", 538],
          ["（少儿）假面骑士时王", 560]
        ]
      },

      //订购用户所属地区分布
      orderUserRegionData: {
        title: "订购用户所属地区分布",
        id: "orderUserRegion",
        color: ["#ED7D31", "#FFC000"],
        data: [
          ["product", "本月订购用户数", "上月订购用户数"],
          ["空白", 55, 58],
          ["安顺市", 540, 532],
          ["六盘水市", 555, 514],
          ["黔西布依族苗族自治州", 688, 631],
          ["毕节市", 869, 908],
          ["黔东南苗族侗族自治州", 946, 908],
          ["铜仁市", 880, 854],
          ["黔南布依族苗族自治州", 941, 881],
          ["遵义市", 1314, 1262],
          ["贵阳市", 2204, 2416]
        ]
      },
      //贵阳市引导付费内容排名
      GuiyangPayingUserData: {
        title: "贵阳市引导付费内容排名（户）",
        id: "GuiyangPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "本月订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },

      //遵义市引导付费内容排名
      ZunyiPayingUserData: {
        title: "遵义市引导付费内容排名（户）",
        id: "ZunyiPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },
      //黔南市引导付费内容排名
      QiannanPayingUserData: {
        title: "黔南布依族苗族自治州引导付费内容排名（户）",
        id: "QiannanPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },
      //黔东南苗族侗族自治州引导付费内容排名
      QiandongnanPayingUserData: {
        title: "黔东南苗族侗族自治州引导付费内容排名（户）",
        id: "QiandongnanPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },
      //铜仁市引导付费内容排名
      TongrenPayingUserData: {
        title: "铜仁市引导付费内容排名（户）",
        id: "TongrenPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },
      //毕节市引导付费内容排名
      BijiePayingUserData: {
        title: "毕节市引导付费内容排名（户）",
        id: "BijiePayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },
      //黔西南布依族苗族自治州引导付费内容排名
      QianxinanPayingUserData: {
        title: "黔西南布依族苗族自治州引导付费内容排名（户）",
        id: "QianxinanPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },
      //黔西南布依族苗族自治州引导付费内容排名
      LiupanshuiPayingUserData: {
        title: "六盘水市引导付费内容排名（户）",
        id: "LiupanshuiPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },
      //安顺市引导付费内容排名
      AnshunPayingUserData: {
        title: "安顺市引导付费内容排名（户）",
        id: "AnshunPayingUser",
        color: ["#5B9BD5"],
        data: [
          ["product", "订购用户数"],
          ["疯狂的外星人", 946],
          ["雪暴", 880],
          ["反贪风暴4（国语版）", 941],
          ["三重威胁之跨国大营救", 1314],
          ["白发", 2204]
        ]
      },

      //订购用户情况
      orderUserContrastData: {
        title: "订购用户情况（户）",
        id: "orderUserContrast",
        color: [
          "#B18400",
          "#C89600",
          "#DDA600",
          "#EFB300",
          "#EFB300",
          "#FFC000",
          "#FFCA69",
          "#FFD490",
          "#FFDDAD",
          "#FFE6C5"
        ],
        content: [
          {
            title: "6月订购用户情况（户）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "5月订购用户情况（户）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "4月订购用户情况（户）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "3月订购用户情况（户）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "2月订购用户情况（户）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "1月订购用户情况（户）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          }
        ]
      },
      //收入分布对比情况
      incomeContrastData: {
        title: "收入分布对比（元）",
        id: "incomeContrast",
        color: [
          "#4B772E",
          "#568736",
          "#60953C",
          "#68A242",
          "#70AD47",
          "#90BB7A",
          "#A9C99A",
          "#BED5B4",
          "#D0E0CA"
        ],
        content: [
          {
            title: "6月收入分布对比（元）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "5月收入分布对比（元）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "4月收入分布对比（元）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "3月收入分布对比（元）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "2月收入分布对比（元）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          },
          {
            title: "1月收入分布对比（元）",
            data: [
              { value: 535, name: "影视包" },
              { value: 410, name: "影视包（包季）" },
              { value: 348, name: "影视包（包年）" },
              { value: 348, name: "少儿包" },
              { value: 410, name: "少儿包（包季）" },
              { value: 348, name: "少儿包（包年）" },
              { value: 348, name: "欢乐家庭包" },
              { value: 410, name: "欢乐家庭包（包季）" },
              { value: 348, name: "欢乐家庭包（包年）" }
            ]
          }
        ]
      },

      //点播TOP榜单数据
      tableData: [
        {
          programName: "熊出没",
          programType: "少儿",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "疯狂的外星人",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "白发",
          programType: "电视剧",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "人间喜剧",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "流浪地球",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "新百娘子传奇",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "熊出没",
          programType: "少儿",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "疯狂的外星人",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "白发",
          programType: "电视剧",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "人间喜剧",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "流浪地球",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "新百娘子传奇",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "人间喜剧",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "流浪地球",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "新百娘子传奇",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        }
      ],
      tableData2: [
        {
          programName: "熊出没",
          programType: "少儿",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "疯狂的外星人",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "白发",
          programType: "电视剧",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "人间喜剧",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "流浪地球",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "新百娘子传奇",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "熊出没",
          programType: "少儿",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "疯狂的外星人",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "白发",
          programType: "电视剧",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "人间喜剧",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "流浪地球",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "新百娘子传奇",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "人间喜剧",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "流浪地球",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        },
        {
          programName: "新百娘子传奇",
          programType: "电影",
          userNum: "7472",
          times: "118503",
          duration: "30660"
        }
      ]
    };
  },
  mounted() {}
};
</script>
<style scoped>
.VIP_value_added_body {
  height: 100%;
  margin: 14px 0px;
}
.new_add_user_percent_body {
  height: 400px;
}
.new_registered_users_body {
  height: 400px;
}
.order_content_body {
  height: 700px;
}
.order_user_region_body {
  height: 430px;
  padding-bottom: 45px;
}
.red_span {
  color: red;
  font-size: 12px;
}
.regionalize_paying_user_body {
  height: 250px;
}
.order_user_distribution_body {
  height: 520px;
}
.table_col_body {
  padding: 0px 12px;
}
.table_title {
  font-size: 18px;
  font-weight: bold;
  line-height: 40px;
  border-bottom: 1px solid #f0f0f0;
}
.dibble_table_body {
  height: 680px;
}
.marginbottom_60 {
  margin-bottom: 60px;
}
</style>