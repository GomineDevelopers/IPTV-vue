<template>
  <div class="height_auto">
    <el-row class="viewing_behavior_report">
      <el-row class="periodic_report_title">G+TV月度用户收视行为报告</el-row>

      <!-- G+TV用户发展数据概览开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV用户发展数据概览
        </el-row>
        <el-row class="G_TV_user_dev_data back_white">
          <el-col class="height_auto" :span="10">
            <line-chart-single :lineData="G_TVUserData"></line-chart-single>
          </el-col>
          <el-col class="height_auto" :span="14">
            <bar-list-chart-stack :barListData="NewUserComparisonData"></bar-list-chart-stack>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV用户发展数据概览结束 -->

      <!-- G+TV各运营商侧用户发展数据概览开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV各运营商侧用户发展数据概览
        </el-row>
        <el-row class="G_TV_user_dev_data back_white">
          <el-col class="height_auto" :span="8">
            <!-- 在册用户总数 -->
            <line-chart-single :lineData="registeredUsersData"></line-chart-single>
          </el-col>
          <el-col class="height_auto" :span="8">
            <!-- 月新增在册用户对比 -->
            <line-chart-single :lineData="monthNewRegUserData"></line-chart-single>
          </el-col>
          <el-col class="height_auto" :span="8">
            <!-- 月销户用户对比 -->
            <line-chart-single :lineData="monthCancellationUserData"></line-chart-single>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV各运营商侧用户发展数据概览结束 -->

      <!-- G+TV4月分地区用户发展数据概览开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV4月分地区用户发展数据概览
        </el-row>
        <el-row class="G_TV_user_dev_data back_white">
          <el-col class="height_auto" :span="24">
            <line-chart-single :lineData="G_TVRegionUserData"></line-chart-single>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV4月分地区用户发展数据概览结束 -->

      <!-- G+TV4月各周用户发展数据开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV4月各周用户发展数据
        </el-row>
        <el-row class="G_TV_user_dev_data back_white">
          <el-col class="height_auto" :span="24">
            <line-chart-single :lineData="weekNewUserData"></line-chart-single>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV4月各周用户发展数据结束 -->

      <!-- G+TV各周分地区用户发展数据概览开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV各周分地区用户发展数据概览
        </el-row>
        <el-row class="week_region_data back_white">
          <el-col class="height_auto" :span="8">
            <!-- 移动侧4月各市州新增在册用户数 -->
            <bar-list-chart-stack :barListData="mobileNewUserData"></bar-list-chart-stack>
          </el-col>
          <el-col class="height_auto" :span="8">
            <!-- 联通侧4月各市州新增在册用户数 -->
            <el-row class="unicornNewUserChart height_auto">
              <bar-list-chart-stack :barListData="unicornNewUserData"></bar-list-chart-stack>
            </el-row>
            <!-- <el-row class="unicornNewUserTable">
              <table class="gridtable">
                <tr v-for="(item,index) in unicornTableData" :key="index+'c'">
                  <th>{{item.name}}</th>
                  <th>{{item.data1}}</th>
                  <th>{{item.data2}}</th>
                  <th>{{item.data3}}</th>
                  <th>{{item.data4}}</th>
                  <th>{{item.data5}}</th>
                  <th>{{item.data6}}</th>
                  <th>{{item.data7}}</th>
                  <th>{{item.data8}}</th>
                  <th>{{item.data9}}</th>
                </tr>
              </table>
            </el-row>-->
          </el-col>
          <el-col class="height_auto" :span="8">
            <!-- 电信侧4月各市州新增在册用户数 -->
            <bar-list-chart-stack :barListData="telecomNewUserData"></bar-list-chart-stack>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV各周分地区用户发展数据概览结束 -->

      <!-- G+TV 4月每日用户发展数据开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>G+TV4月每日用户发展数据
        </el-row>
        <el-row class="everyday_user_develop back_white">
          <el-col class="height_auto" :span="24">
            <line-dotted-chart :lineData="everyDayUserData"></line-dotted-chart>
          </el-col>
        </el-row>
      </el-row>
      <!-- G+TV 4月每日用户发展数据结束 -->

      <!-- 开机活跃数据开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>开机活跃数据
        </el-row>
        <el-row class="everyday_user_develop back_white">
          <el-col class="height_auto" :span="12">
            <line-chart-single-prop :lineData="monthPowerActivityData"></line-chart-single-prop>
          </el-col>
          <el-col class="height_auto" :span="12">
            <line-chart-single-prop :lineData="areaPowerActivityData"></line-chart-single-prop>
          </el-col>
        </el-row>
      </el-row>
      <!-- 开机活跃数据结束 -->

      <!-- 日开机活跃数据开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>日开机活跃数据
        </el-row>
        <el-row class="everyday_user_develop back_white">
          <el-col class="height_auto" :span="24">
            <every-power-activity :lineData="everyPowerActivityData"></every-power-activity>
          </el-col>
        </el-row>
      </el-row>
      <!-- 日开机活跃数据结束 -->

      <!-- 整体收视行为分析开始 -->
      <el-row>
        <el-row class="model_title">
          <span class="title_border_left"></span>整体收视行为分析
        </el-row>
        <el-row class="analysis_of_viewing back_white">
          <el-row class="analysis_of_viewing1">
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="usingTheUser"></many-pie-chart>
              <span>注：由内而外分别是1月、2月、3月、4月</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="usingTheTime"></many-pie-chart>
              <span>注：由内而外分别是1月、2月、3月、4月</span>
            </el-col>
            <el-col class="height_auto" :span="8">
              <many-pie-chart :pieData="usingTheDuration"></many-pie-chart>
              <span>注：由内而外分别是1月、2月、3月、4月</span>
            </el-col>
          </el-row>
          <el-row class="analysis_of_viewing2">
            <el-col class="height_auto" :span="24">444</el-col>
          </el-row>
        </el-row>
      </el-row>
      <!-- 整体收视行为分析结束 -->
    </el-row>
  </div>
</template>
<script>
import LineChartSingle from '@/views/backcoms/commoncomponents/LineChartSingle'  //单数据折线图组件（新增用户概览）
import BarListChartStack from "@/views/backcoms/commoncomponents/BarListChartStack"  //排名柱状图
import LineDottedChart from "@/views/backcoms/G_TVuserviewingmonthreport/LineDottedChart"  //4月新增在册用户数组件（折线图含虚线）
import LineChartSingleProp from '@/views/backcoms/commoncomponents/LineChartSingleProp'  //单数据折线图组件（百分比）
import EveryPowerActivity from "@/views/backcoms/G_TVuserviewingmonthreport/EveryPowerActivity"  //4月新增在册用户数组件（折线图含虚线）

import ManyPieChart from "@/views/backcoms/G_TVuserviewingmonthreport/ManyPieChart"  //4月新增在册用户数组件（折线图含虚线）

export default {
  name: 'G_TVUserViewingMonthReport',  //G+TV月度用户收视行为报告
  components: {
    "line-chart-single": LineChartSingle,
    "bar-list-chart-stack": BarListChartStack,
    "line-dotted-chart": LineDottedChart,
    "line-chart-single-prop": LineChartSingleProp,
    "every-power-activity": EveryPowerActivity,
    "many-pie-chart": ManyPieChart
  },
  data() {
    return {
      //G+TV用户发展情况数据
      G_TVUserData: {
        title: "G+TV用户发展情况",
        id: "G_TVUseroVerview",
        color: ["#5B9BD4", "#FF6123",],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['在册用户数(万户）', 144.4, 146.4, 169.6, 191.6],
          ['新增在册用户数（万户）', 26.7, 16.4, 25.0, 23.8]
        ]
      },

      // 各州市1-4月新增在册用户数对比（万户）
      NewUserComparisonData: {
        title: "各州市1-4月新增在册用户数对比（万户）",
        id: 'newUserComparison',
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['安顺', 2.0, 1.0, 1.6, 1.7],
          ['黔西南', 1.9, 1.2, 1.5, 1.8],
          ['六盘水', 2.3, 2.3, 1.7, 2.3],
          ['铜仁', 2.9, 1.5, 2.2, 2.3],
          ['黔东南', 3.6, 1.2, 2.1, 2.5],
          ['黔南', 2.9, 1.8, 2.6, 2.4],
          ['毕节', 2.5, 2.0, 2.7, 2.8],
          ['遵义', 4.9, 2.9, 5.0, 4.0],
          ['贵阳', 4.1, 2.7, 5.3, 5.0],
        ]
      },

      //在册用户总数数据
      registeredUsersData: {
        title: "在册用户总数（万户）",
        id: "registeredUsers",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 103.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
        ]
      },

      // 月新增在册用户对比
      monthNewRegUserData: {
        title: "月新增在册用户对比（万户）",
        id: "monthNewRegUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 103.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
        ]
      },

      // 月销户用户对比
      monthCancellationUserData: {
        title: "月销户用户对比（万户）",
        id: "monthCancellationUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 103.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
        ]
      },

      // G+TV4月分地区用户发展数据概览
      G_TVRegionUserData: {
        title: "4月各市州新增在册用户数（万户）",
        id: "G_TVRegionUser",
        color: ["#EC7C30", "#FFC000", "#6FAC46"],
        data: [
          ['product', '贵阳', '遵义', '毕节', '黔南', '铜仁', '六盘水', '黔东南', '安顺', '黔西南',],
          ['移动', 1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9],
          ['联通', 0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1],
          ['电信', 2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6],
        ]
      },

      // 4月每周新增在册用户数
      weekNewUserData: {
        title: "4月每周新增在册用户数（万户）",
        id: "weekNewUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4"],
        data: [
          ['product', '4月第一周', '4月第二周', '四月第三周', '四月第四周'],
          ['移动', 1.6, 2.2, 2.7, 3.0],
          ['联通', 0.4, 0.4, 0.3, 0.3],
          ['电信', 2.1, 2.8, 2.8, 3.2],
        ]
      },

      // 移动侧4月各市州新增在册用户数（千户）
      mobileNewUserData: {
        title: "移动侧4月各市州新增在册用户数（千户）",
        id: 'mobileNewUser',
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '4月第一周', '4月第二周', '4月第三周', '4月第四周'],
          ['安顺', 1.6, 2.0, 2.5, 2.0],
          ['黔西南', 1.9, 1.8, 2.3, 2.1],
          ['铜仁', 1.3, 2.2, 2.3, 2.1],
          ['黔南', 1.5, 2.0, 3.2, 3.6],
          ['毕节', 1.7, 2.2, 2.8, 3.6],
          ['黔东南', 1.5, 2.0, 3.4, 3.6],
          ['贵阳', 2.7, 3.6, 4.2, 5.1],
          ['遵义', 2.5, 3.9, 4.7, 5.3],
          ['六盘水', 7.5, 7.5, 7.5, 2.8],
        ]
      },

      // 联通侧4月各市州新增在册用户数（千户）
      unicornNewUserData: {
        title: "联通侧4月各市州新增在册用户数（千户）",
        id: 'unicornNewUser',
        color: ["#EC7C30", "#FFC000", "#6FAC46", "#9E470E"],
        data: [
          ['product', '4月第一周', '4月第二周', '4月第三周', '4月第四周'],
          ['安顺', 1.6, 2.0, 2.5, 2.0],
          ['黔西南', 1.9, 1.8, 2.3, 2.1],
          ['铜仁', 1.3, 2.2, 2.3, 2.1],
          ['黔南', 1.5, 2.0, 3.2, 3.6],
          ['毕节', 1.7, 2.2, 2.8, 3.6],
          ['黔东南', 1.5, 2.0, 3.4, 3.6],
          ['贵阳', 2.7, 3.6, 4.2, 5.1],
          ['遵义', 2.5, 3.9, 4.7, 5.3],
          ['六盘水', 7.5, 7.5, 7.5, 2.8],
        ]
      },

      // 联通表格数据  (暂时未用到)
      unicornTableData: [
        {
          name: '',
          data1: '黔东南',
          data2: '黔南',
          data3: '黔西南',
          data4: '铜仁',
          data5: '毕节',
          data6: '安顺',
          data7: '遵义',
          data8: '贵阳',
          data9: '六盘水',
        }, {
          name: '4月第一周',
          data1: 0.1,
          data2: 0.3,
          data3: 0.3,
          data4: 0.3,
          data5: 0.3,
          data6: 0.5,
          data7: 0.7,
          data8: 0.9,
          data9: 7.5,
        }, {
          name: '4月第二周',
          data1: 0.1,
          data2: 0.2,
          data3: 0.3,
          data4: 0.3,
          data5: 0.4,
          data6: 0.4,
          data7: 0.6,
          data8: 0.9,
          data9: 7.5,
        }, {
          name: '4月第三周',
          data1: 0.1,
          data2: 0.2,
          data3: 0.3,
          data4: 0.3,
          data5: 0.4,
          data6: 0.4,
          data7: 0.6,
          data8: 0.9,
          data9: 7.5,
        }, {
          name: '4月第四周',
          data1: 0.1,
          data2: 0.3,
          data3: 0.3,
          data4: 0.3,
          data5: 0.3,
          data6: 0.5,
          data7: 0.7,
          data8: 0.9,
          data9: 7.5,
        }
      ],

      // 电信侧4月各市州新增在册用户数（千户）
      telecomNewUserData: {
        title: "电信侧4月各市州新增在册用户数（千户）",
        id: 'telecomNewUser',
        color: ["#6FAC46", "#4471C4", "#FFC000", "#43682B"],
        data: [
          ['product', '4月第一周', '4月第二周', '4月第三周', '4月第四周'],
          ['安顺', 1.6, 2.0, 2.5, 2.0],
          ['黔西南', 1.9, 1.8, 2.3, 2.1],
          ['铜仁', 1.3, 2.2, 2.3, 2.1],
          ['黔南', 1.5, 2.0, 3.2, 3.6],
          ['毕节', 1.7, 2.2, 2.8, 3.6],
          ['黔东南', 1.5, 2.0, 3.4, 3.6],
          ['贵阳', 2.7, 3.6, 4.2, 5.1],
          ['遵义', 2.5, 3.9, 4.7, 5.3],
          ['六盘水', 7.5, 7.5, 7.5, 2.8],
        ]
      },

      // G+TV4月每日用户发展数据
      everyDayUserData: {
        title: "4月日新增在册用户数（千户）",
        id: "everyDayUser",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          [
            'product',
            '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日', '4月10日',
            '4月11日', '4月12日', '4月13日', '4月14日', '4月15日', '4月16日', '4月17日', '4月18日', '4月19日', '4月20日',
            '4月21日', '4月22日', '4月23日', '4月24日', '4月25日', '4月26日', '4月27日', '4月28日', '4月29日', '4月30日',
          ],
          ['移动',
            1.7, 1.8, 1.1, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 5.6,
          ],
          ['联通',
            0.4, 0.3, 0.2, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.7,
          ],
          ['电信',
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 5.4,
          ],
          ['线性（移动）',
            2.0, 2.2, 2.4, 2.6, 3.0, 3.2, 3.4, 3.6, 3.8,
            4.0, 4.2, 4.4, 4.6, 4.8, 5.0, 5.2, 5.4, 5.5, 5.7,
            5.8, 5.9, 6.0, 6.2, 6.4, 6.6, 6.8, 7.0, 7.2, 7.4,
          ],
        ]
      },

      //开机活跃数据
      //移动、电信、联通侧月开机活跃率数据
      monthPowerActivityData: {
        title: "移动、电信、联通侧月开机活跃率",
        id: "monthPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '1月', '2月', '3月', '4月'],
          ['移动', 82.2, 83.4, 94.7, 89.6],
          ['联通', 35.8, 35.9, 36.9, 38.0],
          ['电信', 26.1, 27.0, 36.9, 49.7],
          ['总开机率', 58.8, 61.9, 59.7, 56.1],
        ]
      },
      //各市州4月开机活跃率
      areaPowerActivityData: {
        title: "各市州4月开机活跃率",
        id: "areaPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          ['product', '贵阳', '遵义', '六盘水', '铜仁', '黔南', '安顺', '毕节', '黔东南', '黔西南'],
          ['移动', 82.2, 83.4, 94.7, 89.6, 82.2, 83.4, 94.7, 89.6, 83.4],
          ['联通', 35.8, 35.9, 36.9, 38.0, 35.8, 35.9, 36.9, 38.0, 35.8,],
          ['电信', 26.1, 27.0, 36.9, 49.7, 26.1, 27.0, 36.9, 49.7, 27.0],
          ['总开机活跃率', 58.8, 61.9, 59.7, 56.1, 58.8, 61.9, 59.7, 56.1, 61.9],
        ]
      },

      // 日开机活跃数据
      everyPowerActivityData: {
        title: "日开机活跃率",
        id: "everyPowerActivity",
        color: ["#5B9BD4", "#EC7C30", "#A4A4A4", "#FFC000"],
        data: [
          [
            'product',
            '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日', '4月10日',
            '4月11日', '4月12日', '4月13日', '4月14日', '4月15日', '4月16日', '4月17日', '4月18日', '4月19日', '4月20日',
            '4月21日', '4月22日', '4月23日', '4月24日', '4月25日', '4月26日', '4月27日', '4月28日', '4月29日', '4月30日',
          ],
          ['移动',
            1.7, 1.8, 1.1, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 1.2,
            1.7, 1.8, 1.1, 0.9, 0.9, 0.8, 1.2, 0.8, 0.9, 5.6,
          ],
          ['联通',
            0.4, 0.3, 0.2, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.8,
            0.4, 0.3, 0.2, 0.1, 0.1, 0.8, 0.1, 0.2, 0.1, 0.7,
          ],
          ['电信',
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 0.9,
            2.9, 1.9, 1.5, 1.4, 1.2, 0.8, 0.8, 0.7, 0.6, 5.4,
          ],
          ['总开机活跃',
            2.0, 2.2, 2.4, 2.6, 3.0, 3.2, 3.4, 3.6, 3.8,
            4.0, 4.2, 4.4, 4.6, 4.8, 5.0, 5.2, 5.4, 5.5, 5.7,
            5.8, 5.9, 6.0, 6.2, 6.4, 6.6, 6.8, 7.0, 7.2, 7.4,
          ],
        ]
      },

      //4月三大基础功能使用用户占比
      usingTheUser: {
        title: "4月三大基础功能使用用户占比",
        id: 'usingTheUser',
        color: ["#B4CFA8", "#6FAC46", "#5B8E39"],
        content: [
          {
            title: "4月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "3月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "2月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "1月三大基础功能使用用户占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          }
        ],
      },

      //4月三大基础功能使用次数占比
      usingTheTime: {
        title: "4月三大基础功能使用次数占比",
        id: 'usingTheTimes',
        color: ["#878787", "#A4A4A4", "#CACACA"],
        content: [
          {
            title: "4月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "3月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "2月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "1月三大基础功能使用次数占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          }
        ],
      },
      //4月三大基础功能使用次数占比
      usingTheDuration: {
        title: "4月三大基础功能使用时长占比",
        id: 'usingTheDuration',
        color: ["#D29E00", "#FFC000", "#FFD99D"],
        content: [
          {
            title: "4月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "3月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "2月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          },
          {
            title: "1月三大基础功能使用时长占比",
            data: [
              { value: 535, name: '直播' },
              { value: 410, name: '回看' },
              { value: 348, name: '点播' }
            ],
          }
        ],
      },

    }
  },
  mounted() { }
}
</script>
<style scoped>
.viewing_behavior_report {
  height: 500px;
  margin: 24px 0px;
}

/* G+TV用户发展数据概览开始 */
.G_TV_user_dev_data {
  height: 500px;
  margin-bottom: 24px;
}
/* G+TV用户发展数据概览结束 */

.week_region_data {
  height: 500px;
  margin-bottom: 24px;
}
/* .unicornNewUserChart {
  height: 460px;
} */
.unicornNewUserTable {
  height: 250px;
}
.unicornNewUserTable table.gridtable {
  width: 90%;
  height: 200px;
  margin: 0 auto;
  font-family: verdana, arial, sans-serif;
  font-size: 11px;
  color: #666;
  border-width: 1px;
  border-color: #ccc;
  border-collapse: collapse;
}
.unicornNewUserTable table.gridtable th {
  border-width: 1px;
  padding: 4px 8px;
  border-style: solid;
  border-color: #ccc;
}
.unicornNewUserTable table.gridtable td {
  border-width: 1px;
  padding: 1px 8px;
  border-style: solid;
  border-color: #ccc;
}

/*  */
.everyday_user_develop {
  height: 500px;
  margin-bottom: 24px;
}

/* 整体收视行为分析 */
.analysis_of_viewing {
  height: 700px;
}
.analysis_of_viewing .analysis_of_viewing1 {
  height: 500px;
}
.analysis_of_viewing1 span {
  font-size: 12px;
  color: red;
}
.analysis_of_viewing .analysis_of_viewing2 {
  height: 200px;
  margin-top: 40px;
}
</style>