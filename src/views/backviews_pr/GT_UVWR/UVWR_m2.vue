<template>
  <div class="UVWR_m2">
    <!-- ///////////////////////// G -->
    <el-row class="model_title">
      <span class="title_border_left"></span>移动侧各市州G+TV一周用户发展活跃情况
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 条形图 -->
      <!-- 饼图 -->
      <el-row class="programs_demand_content1">
        <el-col :span="12">
          <p class="m_common_sm_title_font">在册用户数与新增在册用户数（户）</p>
          <bar-list-chart :barListData="GT_UVWR1_G1"></bar-list-chart>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">用户占比</p>
          <!-- <bar-list-chart :barListData="GT_UVWR1_G2"></bar-list-chart> -->
          <many-pie-chart :pieData="GT_UVWR1_G2"></many-pie-chart>
          <span class="m_common_content_font">注：由内而外分别是新增在册用户数、在册用户数</span>
        </el-col>
      </el-row>
      <p class="m_common_content_font">移动用户一周新增在册用户数31,643户，较前一周增加1,795户，增幅6.0%。</p>
      <!-- <p>黔西南州用户数超越安顺市，摆脱副班长的位置。贵阳、毕节、铜仁、黔西南新增用户占比高于在册用户占比，上周用户增速高于平均水平。</p> -->
    </el-row>

    <!-- ///////////////////////// H -->
    <el-row class="model_title">
      <span class="title_border_left"></span>三大基础功能收视数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 饼图 -->
      <!-- 曲线图 -->
      <p class="m_common_content_font">上周移动侧总收视次数1771.6万次，环比下降4.6%；总收视时长1944.5万小时，下降7.0%。</p>
      <!-- <p>各功能均有下跌，点播降幅最大。</p> -->
      <!-- <p>移动侧受到部分用户升级成为2.0的影响，上周收视数据尤其是收视时长滑落较多。从开机情况来推算，大概有2~3万的用户受到影响。</p> -->
      <!-- <p>同时，受到贵阳地区数博会放假与调休影响，开机用户走势呈现两头高，中间低的现象，周六与周一达到峰值。</p> -->
      <!-- <p>点播用户与开机用户保持一致走势，周六达到峰值。直播用户数则在周一、周二达到峰值。这表明受到放假影响的贵阳机关单位用户更偏向于使用直播功能。</p> -->
    </el-row>

    <!-- ///////////////////////// I -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播频道分组收视数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 条形图x3 -->
      <p class="m_common_content_font">去重后移动侧直播用户数32.2万户，环比下降3.9%，一周直播收视次数661.0万次，下降4.3%；直播收视时长502.6万小时，下降4.4%。</p>
      <!-- <p>分组来看，直播收视规模地方频道和轮播频道降幅较小， 但收视时长降幅较大，用户粘性下降；央视、卫视组则正好相反。</p> -->
    </el-row>
    <!-- ///////////////////////// J -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播本地频道、节目收视数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条形图 -->
      <!-- 曲线图 -->
      <!-- 条形图 -->
    </el-row>
    <!-- ///////////////////////// K -->
    <el-row class="model_title">
      <span class="title_border_left"></span>各类型节目点播数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <p class="m_common_content_font">去重后移动侧一周总点播用户41.2万户，环比下降2.0%。总点播次数1096.7万次，下降4.8%；点播时长1430.1万小时，下降7.9%。</p>
    </el-row>

    <!-- ///////////////////////// L -->
    <el-row class="model_title">
      <span class="title_border_left"></span>主要栏目点击和播放数据（移动）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <p class="m_common_content_font">移动侧一级页面总点击次数1332.2万次，环比下降6.1%；页面播放时长1258.9万小时，下降17.0%。</p>
    </el-row>
  </div>
</template>

<script>
import BarListChart from "@/views/backcoms/commoncomponents2/BarListChart_Change"; //排名柱状图
import ManyPieChart from "@/views/backcoms/commoncomponents2/ManyPieChart_Change"; //整体收拾行为分析（多个空心饼图组成的图表）

export default {
  name: "UVWR_m2",
  components: {
    "bar-list-chart": BarListChart,
    "many-pie-chart": ManyPieChart
  },
  data() {
    return {
      GT_UVWR1_G1: {
        title: "",
        id: "GT_UVWR1_G1",
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
      GT_UVWR1_G2: {
        title: "",
        id: "GT_UVWR1_G2",
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
      }
    };
  }
};
</script>

<style >
.UVWR_m2 .analysis_of_viewing1 span {
  font-size: 12px;
  color: red;
}
</style>