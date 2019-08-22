<template>
  <div class="UVWR_m3">
    <!-- ///////////////////////// S -->
    <el-row class="model_title">
      <span class="title_border_left"></span>联通侧各市州G+TV一周用户发展活跃情况
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class="">
        <el-col :span="12">
          <p class="m_common_sm_title_font">在册用户数与新增在册用户数（户）</p>
          <!-- 条形图 -->
          <bar-list-chart :barListData="GT_UVWR1_S1"></bar-list-chart>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">用户占比</p>
          <!-- 饼图 -->
          <many-pie-chart :pieData="GT_UVWR1_S2"></many-pie-chart>
          <span class="m_common_content_font">注：由内而外分别是新增在册用户数、在册用户数</span>
        </el-col>
      </el-row>
      <p class="m_common_content_font">联通用户一周新增在册用户数31,643户，较前一周增加1,795户，增幅6.0%。</p>
      <!-- <p>黔西南州用户数超越安顺市，摆脱副班长的位置。贵阳、毕节、铜仁、黔西南新增用户占比高于在册用户占比，上周用户增速高于平均水平。</p> -->
    </el-row>

    <!-- ///////////////////////// T -->
    <el-row class="model_title">
      <span class="title_border_left"></span>三大基础功能收视数据（联通）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class="">
        <el-col :span="12">
          <p class="m_common_sm_title_font">一周总体观看数据</p>
          <!-- 饼图 -->
          <many-pie-chart2 :pieData="GT_UVWR1_T1"></many-pie-chart2>
          <span class="m_common_content_font">注：由内而外分别是观看用户数、观看次数、观看总时长</span>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">三大基础功能观看用户数每日走势（万户）</p>
          <!-- 曲线图 -->
          <line-dotted-chart :lineData="GT_UVWR1_T2"></line-dotted-chart>
        </el-col>
      </el-row>
      <p class="m_common_content_font">上周联通侧总收视次数1771.6万次，环比下降4.6%；总收视时长1944.5万小时，下降7.0%。</p>
      <!-- <p>各功能均有下跌，点播降幅最大。</p> -->
      <!-- <p>联通侧受到部分用户升级成为2.0的影响，上周收视数据尤其是收视时长滑落较多。从开机情况来推算，大概有2~3万的用户受到影响。</p> -->
      <!-- <p>同时，受到贵阳地区数博会放假与调休影响，开机用户走势呈现两头高，中间低的现象，周六与周一达到峰值。</p> -->
      <!-- <p>点播用户与开机用户保持一致走势，周六达到峰值。直播用户数则在周一、周二达到峰值。这表明受到放假影响的贵阳机关单位用户更偏向于使用直播功能。</p> -->
    </el-row>

    <!-- ///////////////////////// U -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播频道分组收视数据（联通）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 条形图x3 -->
      <el-row class="">
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播用户数（万户）</p>
          <bar-chart-single :chartData="GT_UVWR1_U1"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播次数（万次）</p>
          <bar-chart-single :chartData="GT_UVWR1_U2"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播收视时长（万小时）</p>
          <bar-chart-single :chartData="GT_UVWR1_U3"></bar-chart-single>
        </el-col>
      </el-row>
      <p
        class="m_common_content_font"
      >去重后联通侧直播用户数32.2万户，环比下降3.9%，一周直播收视次数661.0万次，下降4.3%；直播收视时长502.6万小时，下降4.4%。</p>
      <!-- <p>分组来看，直播收视规模地方频道和轮播频道降幅较小， 但收视时长降幅较大，用户粘性下降；央视、卫视组则正好相反。</p> -->
    </el-row>
    <!-- ///////////////////////// V -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播本地频道、节目收视数据（联通）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条形图 -->
      <!-- 曲线图 -->
      <!-- 条形图 -->
      <el-row class="">
        <el-col :span="12">
          <p class="m_common_sm_title_font">本地频道收视规模排名（万户）</p>
          <bar-list-chart2 :barListData="GT_UVWR1_V1"></bar-list-chart2>
        </el-col>
        <el-col :span="12">
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">轮播频道每日收视走势（户）</p>
            <smooth-line-chart :smoothLineData="GT_UVWR1_V2"></smooth-line-chart>
          </div>
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">本地自办节目TOP5（万小时）</p>
            <bar-chart-single :chartData="GT_UVWR1_V3"></bar-chart-single>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// W -->
    <el-row class="model_title">
      <span class="title_border_left"></span>各类型节目点播数据（联通）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class="">
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_W1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_W2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_W3"></bar-list-chart>
        </el-col>
      </el-row>
      <p
        class="m_common_content_font"
      >去重后联通侧一周总点播用户41.2万户，环比下降2.0%。总点播次数1096.7万次，下降4.8%；点播时长1430.1万小时，下降7.9%。</p>
    </el-row>

    <!-- ///////////////////////// X -->
    <el-row class="model_title">
      <span class="title_border_left"></span>主要栏目点击和播放数据（联通）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class="">
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_X1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_X2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面播放时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_X3"></bar-list-chart>
        </el-col>
      </el-row>
      <p class="m_common_content_font">联通侧一级页面总点击次数1332.2万次，环比下降6.1%；页面播放时长1258.9万小时，下降17.0%。</p>
    </el-row>
  </div>
</template>

<script>
import BarListChart from "@/views/backcoms/commoncomponents2/BarListChart_Change"; //排名柱状图
import BarListChart2 from "@/views/backcoms/commoncomponents2/BarListChart_Change2"; //排名柱状图

import ManyPieChart from "@/views/backcoms/commoncomponents2/ManyPieChart_Change"; //整体收拾行为分析（2个空心饼图组成的图表）
import ManyPieChart2 from "@/views/backcoms/commoncomponents2/ManyPieChart_Change2"; //整体收拾行为分析（3个空心饼图组成的图表）
import LineDottedChart from "@/views/backcoms/commoncomponents2/LineDottedChart_Change"; //4月新增在册用户数组件（折线图含虚线）
import BarChartSingle from "@/views/backcoms/commoncomponents2/BarChartSingle_Change"; //（空心）饼图组件
import SmoothLineChart from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change"; //平滑曲线折线图组件

export default {
  name: "UVWR_m3",
  components: {
    "bar-chart-single": BarChartSingle,
    "bar-list-chart": BarListChart,
    "bar-list-chart2": BarListChart2,
    "many-pie-chart": ManyPieChart,
    "many-pie-chart2": ManyPieChart2,
    "line-dotted-chart": LineDottedChart,
    "smooth-line-chart": SmoothLineChart
  },
  data() {
    return {
      GT_UVWR1_S1: {
        title: "",
        id: "GT_UVWR1_S1",
        height: "height:500px;",
        color: ["#5B9BD5", "#FFC000"],
        data: [
          ["product", "在册用户数", "新增在册用户数"],
          ["遵义", 152, 111],
          ["贵阳", 242, 222],
          ["黔东南", 485, 433],
          ["毕节", 717, 777],
          ["黔南", 733, 656],
          ["铜仁", 894, 888],
          ["六盘水", 928, 854],
          ["黔西南", 937, 999],
          ["安顺", 1324, 1111]
        ]
      },
      GT_UVWR1_S2: {
        title: "",
        id: "GT_UVWR1_S2",
        color: [
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
        content: [
          {
            title: "新增在册用户数",
            data: [
              { value: 535, name: "遵义" },
              { value: 410, name: "贵阳" },
              { value: 348, name: "黔东南" },
              { value: 410, name: "毕节" },
              { value: 410, name: "黔南" },
              { value: 410, name: "铜仁" },
              { value: 410, name: "六盘水" },
              { value: 410, name: "黔西南" },
              { value: 410, name: "安顺" }
            ]
          },
          {
            title: "在册用户数",
            data: [
              { value: 535, name: "遵义" },
              { value: 410, name: "贵阳" },
              { value: 348, name: "黔东南" },
              { value: 410, name: "毕节" },
              { value: 410, name: "黔南" },
              { value: 410, name: "铜仁" },
              { value: 410, name: "六盘水" },
              { value: 410, name: "黔西南" },
              { value: 410, name: "安顺" }
            ]
          }
        ]
      },
      GT_UVWR1_T1: {
        title: "",
        id: "GT_UVWR1_T1",
        color: ["#C2DEAE", "#5B9BD5", "#FFC000"],
        content: [
          {
            title: "观看用户数",
            data: [
              { value: 535, name: "直播" },
              { value: 410, name: "点播" },
              { value: 348, name: "回看" }
            ]
          },
          {
            title: "观看次数",
            data: [
              { value: 535, name: "直播" },
              { value: 410, name: "点播" },
              { value: 348, name: "回看" }
            ]
          },
          {
            title: "观看总时长",
            data: [
              { value: 535, name: "直播" },
              { value: 410, name: "点播" },
              { value: 348, name: "回看" }
            ]
          }
        ]
      },
      GT_UVWR1_T2: {
        title: "",
        id: "GT_UVWR1_T2",
        color: ["#70AD47", "#5B9BD5", "#A6A6A6", "#FFC000"],
        data: [
          [
            "product",
            "4月1日",
            "4月2日",
            "4月3日",
            "4月4日",
            "4月5日",
            "4月6日",
            "4月7日"
          ],
          ["直播", 11.7, 11.8, 11.1, 10.9, 10.8, 11.2, 10.8],
          ["点播", 20.4, 20.3, 20.2, 20.1, 20.8, 20.1, 20.2],
          ["开机用户数", 32.9, 31.9, 31.5, 31.4, 31.2, 30.8, 30.7],
          ["回看", 0.9, 1.1, 0.7, 1.2, 1.3, 0.7, 0.8]
        ]
      },
      GT_UVWR1_U1: {
        data: [
          ["product", "0520-0526", "0527-0602"],
          ["央视", 48.0, 48.1],
          ["卫视", 154.2, 157.4],
          ["地方", 60.1, 65.0],
          ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_U1",
        color: ["#E7E6E6", "#A9D18E"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_U2: {
        data: [
          ["product", "0520-0526", "0527-0602"],
          ["央视", 48.0, 48.1],
          ["卫视", 154.2, 157.4],
          ["地方", 60.1, 65.0],
          ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_U2",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_U3: {
        data: [
          ["product", "0520-0526", "0527-0602"],
          ["央视", 48.0, 48.1],
          ["卫视", 154.2, 157.4],
          ["地方", 60.1, 65.0],
          ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_U3",
        color: ["#E7E6E6", "#FFC000"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_V1: {
        title: "",
        id: "GT_UVWR1_V1",
        height: "height:720px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["贵州卫视", 20, 20],
          ["贵州-2 公共频道", 18, 18],
          ["贵州-3 影视文艺频道", 15, 15],
          ["贵州-4 大众生活频道", 17, 17],
          ["贵州-5 法制频道", 16, 16],
          ["华语影院", 14, 14],
          ["贵阳-4 都市频道", 13, 13],
          ["贵州-6 科教健康频道", 12, 12],
          ["贵州-7 经济频道", 11.5, 11.5],
          ["谍战剧场", 10, 10],
          ["贵阳-3 法制频道", 9.2, 9.2],
          ["海外佳片", 8.8, 8.8],
          ["贵阳-2 经济生活频道", 8.0, 8.0],
          ["贵阳-1 新闻综合频道", 7.7, 7.7],
          ["都市剧场", 5.5, 5.5],
          ["动画乐园", 3.3, 3.3],
          ["六盘水-2", 2.2, 2.2],
          ["贵州移动电视", 2.1, 2.1],
          ["六盘水-1", 1.8, 1.8],
          ["黔西南-综合", 1.4, 1.4],
          ["贵阳-5 旅游生活频道", 0.8, 0.8],
          ["黔西南-公共", 0.7, 0.7]
        ]
      },
      GT_UVWR1_V2: {
        title: "",
        id: "GT_UVWR1_V2",
        color: ["#70AD47", "#FFCCCC ", "#5B9BD5", "#FFC000", "#ED7D31"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日"
          ],
          ["谍战剧场", 12140, 12370, 12800, 12200, 12234, 12640, 12859],
          ["华语影院", 41400, 41700, 41800, 42000, 42340, 42400, 42590],
          ["海外佳片", 52140, 52170, 52580, 52400, 52534, 52640, 52759],
          ["都市剧场", 21140, 22170, 25280, 24200, 25234, 22640, 22759],
          ["动画乐园", 32140, 32170, 32580, 32400, 32534, 32640, 32759]
        ]
      },
      GT_UVWR1_V3: {
        data: [
          ["product", "0520-0526", "0527-0602"],
          ["百姓关注 贵州-2", 48.0, 48.1],
          ["贵州新闻联播 贵州卫视", 154.2, 157.4],
          ["第二放映室 贵州-2", 60.1, 65.0],
          ["非常友茗堂 贵州-2", 15.1, 16.0],
          ["牌王争霸 贵州-4", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_V3",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: false,
        ifLegendShow: false,
        m_barWidth: "40%"
      },
      GT_UVWR1_W1: {
        title: "",
        id: "GT_UVWR1_W1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_W2: {
        title: "",
        id: "GT_UVWR1_W2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_W3: {
        title: "",
        id: "GT_UVWR1_W3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_X1: {
        title: "",
        id: "GT_UVWR1_X1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_X2: {
        title: "",
        id: "GT_UVWR1_X2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_X3: {
        title: "",
        id: "GT_UVWR1_X3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["少儿", 20, 20],
          ["电影", 18, 18],
          ["热剧", 15, 15],
          ["游戏", 17, 17],
          ["动漫", 16, 16],
          ["综艺", 14, 14],
          ["纪实", 13, 13],
          ["音乐", 12, 12],
          ["体育", 11.5, 11.5],
          ["资讯", 10, 10]
        ]
      }
    };
  }
};
</script>

<style scoped>

</style>


<style >
.UVWR_m3 .analysis_of_viewing1 span {
  font-size: 12px;
  color: red;
}
</style>