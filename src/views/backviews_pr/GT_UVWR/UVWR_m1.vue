<template>
  <div class="UVWR_m1">
    <!-- ///////////////////////// A -->
    <el-row class="model_title">
      <span class="title_border_left"></span>G+TV用户发展数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row :gutter="100" class>
        <el-col :span="8">
          <!-- 柱状图 -->
          <p class="m_common_sm_title_font">平台累计在册用户数总览</p>
          <div class="m_common_echarts_styleA" id="GT_UVWR1_A1"></div>
          <p class="m_margin_0a m_common_content_font">
            截至2019年6月3日凌晨，平台累计 在册用户数
            <span class="font_color_r">2,133,546</span>户，较前一周增长
            <span class="font_color_r">2.0%</span>，增速回落0.5个百分点。
          </p>
        </el-col>

        <el-col :span="8">
          <!-- 饼图 -->
          <p class="m_common_sm_title_font">三大运营商在册用户数总览</p>
          <pie-center-label class :chartData="GT_UVWR1_A2"></pie-center-label>
          <p class="m_margin_0a m_common_content_font">
            移动在册用户
            <span class="font_color_r">1,162,381</span>户，较前一周增长 2.5%，增速提升0.1个百分点。 电信在册用户
            <span class="font_color_r">594,456</span>户，较前一周增长3.9%， 增速提升0.1个百分点。 联通在册用户
            <span class="font_color_r">376,709</span>户，较前一周减少9,533 户。
          </p>
        </el-col>
        <el-col :span="8">
          <!-- 柱状图 -->
          <p class="m_common_sm_title_font">新增、停机、销户用户数总览</p>
          <div class="m_common_echarts_styleA" id="GT_UVWR1_A3"></div>
          <p
            class="m_margin_0a m_common_content_font"
          >周新增60,798户，较前一周增加8.6%。 周停机12,369户，较前一周增加969.1%， 较上月同期（0426-0502）增长108.9%。 周销户21,165户，较前一周增长247.5%， 较上月同期增长39.6%。</p>
        </el-col>
      </el-row>
      <div class="m_init_div m_width_25 m_padding_l_4"></div>
      <div class="m_init_div m_width_25 m_padding_l_4"></div>
      <div class="m_init_div m_width_25 m_padding_l_4"></div>
    </el-row>
    <!-- ///////////////////////// B -->
    <el-row class="model_title">
      <span class="title_border_left"></span>各市州G+TV用户发展数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 饼图 -->
      <div class="m_init_div m_width_40">
        <p class="m_common_sm_title_font">各市州在册用户占比（万户）</p>
        <pie-center-label :chartData="GT_UVWR1_B1"></pie-center-label>
      </div>

      <!-- 柱状图 + 折线图 -->
      <div class="m_init_div m_width_40 m_padding_l_5">
        <p class="m_common_sm_title_font">三大运营商各市州一周新增在册用户数（户）</p>
        <bar-charts-stack :chartData="GT_UVWR1_B2"></bar-charts-stack>
      </div>

      <p class="m_margin_0a m_common_content_font">上周在册用户净增40,899户，增量下滑19.3%。</p>
      <p
        class="m_margin_0a m_common_content_font"
      >各市州平均增速2.8%，环比提升0.2个百分点。毕节市增速3.7%最高，环比提升0.7个百分点；安顺市增速2.0%最低，环比提升0.4个百分点。</p>
    </el-row>
    <!-- ///////////////////////// C -->
    <el-row class="model_title">
      <span class="title_border_left"></span>G+TV一周用户增减数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 饼图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">新增用户占比</p>
          <pie-center-label :chartData="GT_UVWR1_C1"></pie-center-label>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">停机用户占比</p>
          <pie-center-label :chartData="GT_UVWR1_C2"></pie-center-label>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">销户用户占比</p>
          <pie-center-label :chartData="GT_UVWR1_C3"></pie-center-label>
        </el-col>
      </el-row>

      <!-- 曲线图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">新增用户数走势（户）</p>
          <smooth-line-chart :smoothLineData="GT_UVWR1_C4"></smooth-line-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">停机用户数走势（户）</p>
          <smooth-line-chart :smoothLineData="GT_UVWR1_C5"></smooth-line-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">销户用户数走势（户）</p>
          <smooth-line-chart :smoothLineData="GT_UVWR1_C6"></smooth-line-chart>
        </el-col>
      </el-row>

      <p
        class="m_margin_0a m_common_content_font"
      >*注：停机、销户数据统计时间为2019年6月3日24:00（不同时间点统计，停机数和销户数会有所区别）。</p>
    </el-row>
    <!-- ///////////////////////// D -->
    <el-row class="model_title">
      <span class="title_border_left"></span>开机活跃数据
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="10">
          <p class="m_common_sm_title_font">各运营商周一开机率</p>
          <bar-chart-single2 :chartData="GT_UVWR1_D1"></bar-chart-single2>
        </el-col>
        <el-col :span="14">
          <p class="m_common_sm_title_font">各市州一周开机率</p>
          <bar-charts-stack3 :chartData="GT_UVWR1_D2"></bar-charts-stack3>
        </el-col>
      </el-row>

      <p
        class="m_margin_0a m_common_content_font"
      >*注：电信全省放号后大量使用融合终端，导致不关机顶盒的用户大幅上升，以开机行为计算的开机率大幅下降。</p>
      <!-- <p>上周各运营商一周开机率保持稳定，其中联通有所上升，电信继续下降。平均每日开机率则是联通下降，电信上升。这代表联通活跃用户规模增加，但活跃程度有 所降低。移动两项数据均与前一周持平。</p> -->
      <!-- <p>分地区来看，铜仁市、遵义市两地整体开机率下降较多，铜仁市开机用户数环比减少293户。遵义市电信侧开机率大降2.9%。毕节市开机率大幅增加。</p> -->
    </el-row>
    <!-- ///////////////////////// E -->
    <el-row class="model_title">
      <span class="title_border_left"></span>一周直播节目收视TOP15（万小时）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条线图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">移动</p>
          <bar-list-chart :barListData="GT_UVWR1_E1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">联通</p>
          <bar-list-chart :barListData="GT_UVWR1_E2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">电信</p>
          <bar-list-chart :barListData="GT_UVWR1_E3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// F -->
    <el-row class="model_title">
      <span class="title_border_left"></span>一周点播节目TOP15（万次）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条线图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">移动</p>
          <bar-list-chart :barListData="GT_UVWR1_F1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">联通</p>
          <bar-list-chart :barListData="GT_UVWR1_F2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">电信</p>
          <bar-list-chart :barListData="GT_UVWR1_F3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import pie_center_label from "@/views/backcoms/commoncomponents2/pie_center_label"; //（空心）饼图组件
import BarChartSingle from "@/views/backcoms/commoncomponents2/BarChartSingle_Change"; //（空心）饼图组件
import BarChartSingle2 from "@/views/backcoms/commoncomponents2/BarChartSingle_Change2"; //（空心）饼图组件

import BarChartsStack from "@/views/backcoms/commoncomponents2/BarChartsStack_Change"; //公用柱状图堆叠
import SmoothLineChart from "@/views/backcoms/commoncomponents2/SmoothLineChart_Change"; //平滑曲线折线图组件
import BarListChart from "@/views/backcoms/commoncomponents2/BarListChart_Change"; //排名柱状图

import BarChartsStack3 from "@/views/backcoms/commoncomponents2/BarChartsStack_Change3"; // 公用柱状图堆叠3 - 左侧Y轴百分比

export default {
  name: "UVWR_m1",
  components: {
    "bar-chart-single": BarChartSingle,
    "bar-chart-single2": BarChartSingle2,
    "pie-center-label": pie_center_label,
    "bar-charts-stack": BarChartsStack,
    "bar-charts-stack3": BarChartsStack3,
    "smooth-line-chart": SmoothLineChart,
    "bar-list-chart": BarListChart
  },

  data() {
    return {
      GT_UVWR1_A2: {
        title: "",
        id: "GT_UVWR1_A2",
        height: "height:300px;",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#5B9BD5", "#FFC000"],
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
        height: "height:500px;",
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
      GT_UVWR1_B2: {
        title: "",
        id: "GT_UVWR1_B2",
        color: ["#5B9BD5", "#FFC000", "#ED7D31", "#BFBFBF"],
        data: [
          ["product", "移动", "联通", "电信", "增速"],
          ["贵阳", 43.3, 85.8, 93.7, 2.7],
          ["遵义", 83.1, 73.4, 55.1, 3.5],
          ["毕节", 86.4, 65.2, 82.5, 2.3],
          ["铜仁", 72.4, 53.9, 39.1, 2.6],
          ["六盘水", 43.3, 85.8, 93.7, 3.0],
          ["黔南", 83.1, 73.4, 55.1, 3.2],
          ["黔东南", 86.4, 65.2, 82.5, 2.3],
          ["黔西南", 72.4, 53.9, 39.1, 3.6],
          ["安顺", 43.3, 85.8, 93.7, 2.8]
        ]
      },
      GT_UVWR1_C1: {
        title: "",
        id: "GT_UVWR1_C1",
        height: "height:300px;",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#5B9BD5", "#FFC000"],
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
        height: "height:300px;",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#5B9BD5", "#FFC000"],
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
        height: "height:300px;",
        m_data: ["移动", "电信", "联通"],
        m_color: ["#ED7D31", "#5B9BD5", "#FFC000"],
        m_data2: [
          { value: 116.4, name: "移动" },
          { value: 59.7, name: "电信" },
          { value: 32.4, name: "联通" }
        ],
        label_formatter: "{c}\n{d}%",
        legend_show: true
      },

      GT_UVWR1_C4: {
        title: "",
        id: "GT_UVWR1_C4",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日"
          ],
          [
            "移动",
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
            "电信",
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
          ],
          [
            "联通",
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
          ]
        ]
      },
      GT_UVWR1_C5: {
        title: "",
        id: "GT_UVWR1_C5",
        color: ["#5B9BD4", "#EC7C30 ", "#FFC000"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日"
          ],
          [
            "移动",
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
            "电信",
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
          ],
          [
            "联通",
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
          ]
        ]
      },
      GT_UVWR1_C6: {
        title: "",
        id: "GT_UVWR1_C6",
        color: ["#406A9C", "#4F81BD ", "#AABAD7"],
        data: [
          [
            "product",
            "6月24日",
            "6月25日",
            "6月26日",
            "6月27日",
            "6月28日",
            "6月29日",
            "6月30日",
            "7月1日",
            "7月2日",
            "7月3日",
            "7月4日"
          ],
          [
            "移动",
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
            "电信",
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
          ],
          [
            "联通",
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
          ]
        ]
      },

      GT_UVWR1_D1: {
        data: [
          ["product", "0520-0526", "0527-0602"],
          ["移动", 48.0, 48.1],
          ["电信", 54.2, 57.4],
          ["联通", 20.1, 20.0]
        ],
        title: "",
        id: "GT_UVWR1_D1",
        height: "height:300px;",
        color: ["#EDEDED", "#5B9BD5"],
        ifYaxisShow: true,
        ifLegendShow: false,
        m_barWidth: "20%"
      },
      GT_UVWR1_D2: {
        title: "",
        id: "GT_UVWR1_D2",
        color: ["#5B9BD5", "#ED7D31", "#FFC000"],
        data: [
          ["product", "移动", "联通", "电信"],
          ["贵阳", 23.3, 25.8, 23.7],
          ["遵义", 23.3, 35.8, 23.7],
          ["毕节", 23.3, 25.8, 23.7],
          ["铜仁", 23.3, 15.8, 23.7],
          ["六盘水", 23.3, 25.8, 23.7],
          ["黔南", 23.3, 25.8, 23.7],
          ["黔东南", 23.3, 35.8, 23.7],
          ["黔西南", 23.3, 25.8, 23.7],
          ["安顺", 23.3, 15.8, 23.7]
        ]
      },

      GT_UVWR1_E1: {
        title: "",
        id: "GT_UVWR1_E1",
        height: "height:800px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["CCTV-13-新闻直播间", 152, 111],
          ["贵州卫视-铁核桃之无间风云", 242, 222],
          ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          ["贵州卫视-孤雁", 717, 777],
          ["谍战剧场-信者无敌", 733, 656],
          ["贵州-2-百姓关注", 894, 888],
          ["谍战剧场-女人的抗战", 928, 854],
          ["贵州卫视-情谜睡美人", 937, 999],
          ["贵州卫视-二十四道拐", 1324, 1111],
          ["贵州卫视-贵州新闻联播", 1621, 1230],
          ["贵州卫视-中央台新闻联播", 1685, 1111],
          ["CCTV-4-中国新闻", 2588, 2222],
          ["湖南卫视-筑梦情缘", 3068, 3131],
          ["CCTV-12-普法栏目组", 4350, 4333],
          ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_E2: {
        title: "",
        id: "GT_UVWR1_E2",
        height: "height:800px;",
        color: ["#ED7D31", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["CCTV-13-新闻直播间", 152, 111],
          ["贵州卫视-铁核桃之无间风云", 242, 222],
          ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          ["贵州卫视-孤雁", 717, 777],
          ["谍战剧场-信者无敌", 733, 656],
          ["贵州-2-百姓关注", 894, 888],
          ["谍战剧场-女人的抗战", 928, 854],
          ["贵州卫视-情谜睡美人", 937, 999],
          ["贵州卫视-二十四道拐", 1324, 1111],
          ["贵州卫视-贵州新闻联播", 1621, 1230],
          ["贵州卫视-中央台新闻联播", 1685, 1111],
          ["CCTV-4-中国新闻", 2588, 2222],
          ["湖南卫视-筑梦情缘", 3068, 3131],
          ["CCTV-12-普法栏目组", 4350, 4333],
          ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_E3: {
        title: "",
        id: "GT_UVWR1_E3",
        height: "height:800px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["CCTV-13-新闻直播间", 152, 111],
          ["贵州卫视-铁核桃之无间风云", 242, 222],
          ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          ["贵州卫视-孤雁", 717, 777],
          ["谍战剧场-信者无敌", 733, 656],
          ["贵州-2-百姓关注", 894, 888],
          ["谍战剧场-女人的抗战", 928, 854],
          ["贵州卫视-情谜睡美人", 937, 999],
          ["贵州卫视-二十四道拐", 1324, 1111],
          ["贵州卫视-贵州新闻联播", 1621, 1230],
          ["贵州卫视-中央台新闻联播", 1685, 1111],
          ["CCTV-4-中国新闻", 2588, 2222],
          ["湖南卫视-筑梦情缘", 3068, 3131],
          ["CCTV-12-普法栏目组", 4350, 4333],
          ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_F1: {
        title: "",
        id: "GT_UVWR1_F1",
        height: "height:800px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["CCTV-13-新闻直播间", 152, 111],
          ["贵州卫视-铁核桃之无间风云", 242, 222],
          ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          ["贵州卫视-孤雁", 717, 777],
          ["谍战剧场-信者无敌", 733, 656],
          ["贵州-2-百姓关注", 894, 888],
          ["谍战剧场-女人的抗战", 928, 854],
          ["贵州卫视-情谜睡美人", 937, 999],
          ["贵州卫视-二十四道拐", 1324, 1111],
          ["贵州卫视-贵州新闻联播", 1621, 1230],
          ["贵州卫视-中央台新闻联播", 1685, 1111],
          ["CCTV-4-中国新闻", 2588, 2222],
          ["湖南卫视-筑梦情缘", 3068, 3131],
          ["CCTV-12-普法栏目组", 4350, 4333],
          ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_F2: {
        title: "",
        id: "GT_UVWR1_F2",
        height: "height:800px;",
        color: ["#ED7D31", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["CCTV-13-新闻直播间", 152, 111],
          ["贵州卫视-铁核桃之无间风云", 242, 222],
          ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          ["贵州卫视-孤雁", 717, 777],
          ["谍战剧场-信者无敌", 733, 656],
          ["贵州-2-百姓关注", 894, 888],
          ["谍战剧场-女人的抗战", 928, 854],
          ["贵州卫视-情谜睡美人", 937, 999],
          ["贵州卫视-二十四道拐", 1324, 1111],
          ["贵州卫视-贵州新闻联播", 1621, 1230],
          ["贵州卫视-中央台新闻联播", 1685, 1111],
          ["CCTV-4-中国新闻", 2588, 2222],
          ["湖南卫视-筑梦情缘", 3068, 3131],
          ["CCTV-12-普法栏目组", 4350, 4333],
          ["浙江卫视-我的真朋友", 9692, 8888]
        ]
      },
      GT_UVWR1_F3: {
        title: "",
        id: "GT_UVWR1_F3",
        height: "height:800px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          ["product", "0527-0602", "0520-0526"],
          ["CCTV-13-新闻直播间", 152, 111],
          ["贵州卫视-铁核桃之无间风云", 242, 222],
          ["贵州卫视-绝地枪王II松花江上的枪声", 485, 433],
          ["贵州卫视-孤雁", 717, 777],
          ["谍战剧场-信者无敌", 733, 656],
          ["贵州-2-百姓关注", 894, 888],
          ["谍战剧场-女人的抗战", 928, 854],
          ["贵州卫视-情谜睡美人", 937, 999],
          ["贵州卫视-二十四道拐", 1324, 1111],
          ["贵州卫视-贵州新闻联播", 1621, 1230],
          ["贵州卫视-中央台新闻联播", 1685, 1111],
          ["CCTV-4-中国新闻", 2588, 2222],
          ["湖南卫视-筑梦情缘", 3068, 3131],
          ["CCTV-12-普法栏目组", 4350, 4333],
          ["浙江卫视-我的真朋友", 9692, 8888]
        ]
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
          text: "",
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
          text: "",
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

<style scoped>
.font_color_r {
  color: #bf0000;
  font-weight: bold;
}
</style>

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