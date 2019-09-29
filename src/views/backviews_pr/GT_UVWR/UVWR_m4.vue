
<template>
  <div class="UVWR_m4">
    <!-- ///////////////////////// M -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电信侧各市州G+TV一周用户发展活跃情况
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">在册用户数与新增在册用户数（户）</p>
          <!-- 条形图 -->
          <bar-list-chart :barListData="GT_UVWR1_M1"></bar-list-chart>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">用户占比</p>
          <!-- 饼图 -->
          <many-pie-chart :pieData="GT_UVWR1_M2"></many-pie-chart>
          <span class="m_common_content_font">注：由内而外分别是新增在册用户数、在册用户数</span>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// N -->
    <el-row class="model_title">
      <span class="title_border_left"></span>三大基础功能收视数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">一周总体观看数据</p>
          <!-- 饼图 -->
          <many-pie-chart2 :pieData="GT_UVWR1_N1"></many-pie-chart2>
          <span class="m_common_content_font">注：由内而外分别是观看用户数、观看次数、观看总时长</span>
        </el-col>
        <el-col :span="12">
          <p class="m_common_sm_title_font">三大基础功能观看用户数每日走势（万户）</p>
          <!-- 曲线图 -->
          <line-dotted-chart :lineData="GT_UVWR1_N2"></line-dotted-chart>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// O -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播频道分组收视数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播用户数（万户）</p>
          <bar-chart-single :chartData="GT_UVWR1_O1"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播次数（万次）</p>
          <bar-chart-single :chartData="GT_UVWR1_O2"></bar-chart-single>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">分组频道直播收视时长（万小时）</p>
          <bar-chart-single :chartData="GT_UVWR1_O3"></bar-chart-single>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// P -->
    <el-row class="model_title">
      <span class="title_border_left"></span>电视直播本地频道、节目收视数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 列表&条形图 -->
      <!-- 曲线图 -->
      <!-- 条形图 -->
      <el-row class>
        <el-col :span="12">
          <p class="m_common_sm_title_font">本地频道收视规模排名（万户）</p>
          <bar-list-chart2 :barListData="GT_UVWR1_P1"></bar-list-chart2>
        </el-col>
        <el-col :span="12">
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">轮播频道每日收视走势（户）</p>
            <smooth-line-chart :smoothLineData="GT_UVWR1_P2"></smooth-line-chart>
          </div>
          <div class="m_init_div m_width_80 m_padding_l_4">
            <p class="m_common_sm_title_font">本地自办节目TOP5（万小时）</p>
            <bar-chart-single :chartData="GT_UVWR1_P3"></bar-chart-single>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <!-- ///////////////////////// Q -->
    <el-row class="model_title">
      <span class="title_border_left"></span>各类型节目点播数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_Q1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_Q2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">点播时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_Q3"></bar-list-chart>
        </el-col>
      </el-row>
    </el-row>

    <!-- ///////////////////////// R -->
    <el-row class="model_title">
      <span class="title_border_left"></span>主要栏目点击和播放数据（电信）
    </el-row>
    <el-row class="chart_body back_white m_marginbottom_pxA">
      <!-- 横向条形图x3 -->
      <el-row class>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击用户数（万户）</p>
          <bar-list-chart :barListData="GT_UVWR1_R1"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面点击次数（万次）</p>
          <bar-list-chart :barListData="GT_UVWR1_R2"></bar-list-chart>
        </el-col>
        <el-col :span="8">
          <p class="m_common_sm_title_font">页面播放时长（万小时）</p>
          <bar-list-chart :barListData="GT_UVWR1_R3"></bar-list-chart>
        </el-col>
      </el-row>
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
  name: "UVWR_m4",
  components: {
    "bar-chart-single": BarChartSingle,
    "bar-list-chart": BarListChart,
    "bar-list-chart2": BarListChart2,
    "many-pie-chart": ManyPieChart,
    "many-pie-chart2": ManyPieChart2,
    "line-dotted-chart": LineDottedChart,
    "smooth-line-chart": SmoothLineChart
  },
  props: ["api_data_m4"],
  watch: {
    api_data_m4(newValue, oldValue) {
      console.log("api_data_m4 - newValue");
      console.log(newValue);

      let vm = this;
      ////////// 三大基础功能收视数据（移动） 一周总体观看数据  GT_UVWR1_H1
      // 内-》外 1-》3 用户数 次数 总时长
      let onlive1 =
        newValue.data.responses[2].aggregations.onlive_user_num.value;
      let onlive2 = newValue.data.responses[2].aggregations.onlive_freq.value;
      let onlive3 = newValue.data.responses[2].aggregations.onlive_dur.value;
      let demand1 =
        newValue.data.responses[3].aggregations.demand_user_num.value;
      let demand2 = newValue.data.responses[3].aggregations.demand_freq.value;
      let demand3 = newValue.data.responses[3].aggregations.demand_dur.value;
      let watch1 = newValue.data.responses[4].aggregations.watch_user_num.value;
      let watch2 = newValue.data.responses[4].aggregations.watch_freq.value;
      let watch3 = newValue.data.responses[4].aggregations.watch_dur.value;
      let content = [
        {
          title: "观看用户数",
          data: [
            { value: onlive1, name: "直播" },
            { value: demand1, name: "点播" },
            { value: watch1, name: "回看" }
          ]
        },
        {
          title: "观看次数",
          data: [
            { value: onlive2, name: "直播" },
            { value: demand2, name: "点播" },
            { value: watch2, name: "回看" }
          ]
        },
        {
          title: "观看总时长",
          data: [
            { value: onlive3, name: "直播" },
            { value: demand3, name: "点播" },
            { value: watch3, name: "回看" }
          ]
        }
      ];

      vm.GT_UVWR1_N1.content = content;

      // ////////////////////////////
      let arrContent5 =
        newValue.data.responses[5].aggregations.channel_flag.buckets;
      let length5 = arrContent5.length;
      let i5;
      let data1 = [];
      data1.push(["product", "0520-0526", "0527-0602"]);

      // ▲▲▲问题点：周报 - 012345的 0为空 用1-4  ---暂定
      // onlive_user_num
      // onlive_freq
      // onlive_dur
      let temp1 = [];
      let temp2 = [];
      let temp3 = [];
      let temp4 = [];

      // for (i5 = 1; i5 < length5; i5++) {
      temp1.push(arrContent5[1].key);
      temp1.push(vm.returnFloat(arrContent5[1].onlive_user_num.value));
      temp1.push(vm.returnFloat(arrContent5[1].onlive_user_num.value)); // ▲▲▲▲▲ 注意！！！ 这里是临时的（要比前期）

      temp2.push(arrContent5[2].key);
      temp2.push(vm.returnFloat(arrContent5[2].onlive_user_num.value));
      temp2.push(vm.returnFloat(arrContent5[2].onlive_user_num.value));

      temp3.push(arrContent5[3].key);
      temp3.push(vm.returnFloat(arrContent5[3].onlive_user_num.value));
      temp3.push(vm.returnFloat(arrContent5[3].onlive_user_num.value));

      temp4.push(arrContent5[4].key);
      temp4.push(vm.returnFloat(arrContent5[4].onlive_user_num.value));
      temp4.push(vm.returnFloat(arrContent5[4].onlive_user_num.value));
      // }
      data1.push(temp1);
      data1.push(temp2);
      data1.push(temp3);
      data1.push(temp4);

      vm.GT_UVWR1_O1.data = data1;

      data1 = [];
      data1.push(["product", "0520-0526", "0527-0602"]);

      temp1 = [];
      temp2 = [];
      temp3 = [];
      temp4 = [];
      temp1.push(arrContent5[1].key);
      temp1.push(vm.returnFloat(arrContent5[1].onlive_freq.value));
      temp1.push(vm.returnFloat(arrContent5[1].onlive_freq.value));

      temp2.push(arrContent5[2].key);
      temp2.push(vm.returnFloat(arrContent5[2].onlive_freq.value));
      temp2.push(vm.returnFloat(arrContent5[2].onlive_freq.value));

      temp3.push(arrContent5[3].key);
      temp3.push(vm.returnFloat(arrContent5[3].onlive_freq.value));
      temp3.push(vm.returnFloat(arrContent5[3].onlive_freq.value));

      temp4.push(arrContent5[4].key);
      temp4.push(vm.returnFloat(arrContent5[4].onlive_freq.value));
      temp4.push(vm.returnFloat(arrContent5[4].onlive_freq.value));
      data1.push(temp1);
      data1.push(temp2);
      data1.push(temp3);
      data1.push(temp4);
      vm.GT_UVWR1_O2.data = data1;

      data1 = [];
      data1.push(["product", "0520-0526", "0527-0602"]);

      temp1 = [];
      temp2 = [];
      temp3 = [];
      temp4 = [];
      temp1.push(arrContent5[1].key);
      temp1.push(vm.returnFloat(arrContent5[1].onlive_dur.value));
      temp1.push(vm.returnFloat(arrContent5[1].onlive_dur.value));

      temp2.push(arrContent5[2].key);
      temp2.push(vm.returnFloat(arrContent5[2].onlive_dur.value));
      temp2.push(vm.returnFloat(arrContent5[2].onlive_dur.value));

      temp3.push(arrContent5[3].key);
      temp3.push(vm.returnFloat(arrContent5[3].onlive_dur.value));
      temp3.push(vm.returnFloat(arrContent5[3].onlive_dur.value));

      temp4.push(arrContent5[4].key);
      temp4.push(vm.returnFloat(arrContent5[4].onlive_dur.value));
      temp4.push(vm.returnFloat(arrContent5[4].onlive_dur.value));
      data1.push(temp1);
      data1.push(temp2);
      data1.push(temp3);
      data1.push(temp4);
      vm.GT_UVWR1_O3.data = data1;

      // ////////////////////////////

      let buckets6 = newValue.data.responses[6].aggregations.channel.buckets;
      let length6 = buckets6.length;
      let data6 = [];
      let temp6;
      let i6;
      //
      temp6 = [];
      data6.push(["product", "0527-0602", "0520-0526"]);
      for (i6 = 0; i6 < length6; i6++) {
        temp6 = [];
        temp6.push(buckets6[i6].key);
        temp6.push(vm.returnFloat(buckets6[i6].onlive_user_num.value));
        temp6.push(vm.returnFloat(buckets6[i6].onlive_user_num.value)); // ▲▲▲注意 临时点
        data6.push(temp6);
      }
      //
      data6 = vm.sortArr(data6, 1);
      vm.GT_UVWR1_P1.data = data6;

      //////////////////////

      let buckets7 = newValue.data.responses[7].aggregations.channel.buckets;
      let length7 = buckets7.length;
      let i7;
      let data7 = [];
      let temp7 = [];
      data7.push(["product", "0520-0526", "0527-0602"]);
      for (i7 = 0; i7 < length7; i7++) {
        temp7 = [];
        temp7.push(buckets7[i7].key);
        temp7.push(vm.returnFloat(buckets7[i7].doc_count));
        temp7.push(vm.returnFloat(buckets7[i7].doc_count)); // ▲▲▲注意 临时点
        data7.push(temp7);
      }
      data7 = vm.sortArr(data7, 1);
      vm.GT_UVWR1_P3.data = data7;

      // ///////////▲▲▲ 应该是 channel 第8个 --暂时先接上.jpg （暂用节目名称）（数据给错了）
      let buckets8 = newValue.data.responses[8].aggregations.channel.buckets;
      let length8 = buckets8.length;
      let i8;
      let data8 = [];
      let temp8 = [];
      data8.push(["product", "0520-0526", "0527-0602"]);
      for (i8 = 0; i8 < length8; i8++) {
        temp8 = [];
        temp8.push(buckets8[i8].key);
        temp8.push(vm.returnFloat(buckets8[i8].onlive_dur.value));
        temp8.push(vm.returnFloat(buckets8[i8].onlive_dur.value)); // ▲▲▲注意 临时点
        data8.push(temp8);
      }
      data8 = vm.sortArrZ(data8, 1);
      vm.GT_UVWR1_Q3.data = data8;


      let buckets10 = newValue.data.responses[10].aggregations.ti.buckets;
      let length10 = buckets10.length;
      let i10;
      ////
      let data10 = [];
      let temp10 = [];
      let data10B = [];
      let temp10B = [];

      data10.push(["product", "0520-0526", "0527-0602"]);
      data10B.push(["product", "0520-0526", "0527-0602"]);

      for (i10 = 0; i10 < length10; i10++) {
        ////  点播用户
        temp10 = [];
        temp10.push(buckets10[i10].key);
        temp10.push(vm.returnFloat(buckets10[i10].click_freq.value));
        temp10.push(vm.returnFloat(buckets10[i10].click_freq.value)); // ▲▲▲注意 临时点
        data10.push(temp10);
        ////  点播次数
        temp10B = [];
        temp10B.push(buckets10[i10].key);
        temp10B.push(vm.returnFloat(buckets10[i10].click_user_num.value));
        temp10B.push(vm.returnFloat(buckets10[i10].click_user_num.value)); // ▲▲▲注意 临时点
        data10B.push(temp10B);
      }
      data10 = vm.sortArrZ(data10, 1);
      vm.GT_UVWR1_R1.data = data10;
      data10B = vm.sortArrZ(data10B, 1);
      vm.GT_UVWR1_R2.data = data10B;
    }
  },
  methods: {
    returnFloat(value) {
      // 保留两位小数
      var value = Math.round(parseFloat(value) * 100) / 100;
      var xsd = value.toString().split(".");
      if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
      }
      if (xsd.length > 1) {
        if (xsd[1].length < 2) {
          value = value.toString() + "0";
        }
        return value;
      }
    },
    //冒泡排序 -- 从序数index几开始 （反向）
    sortArr(arr, index) {
      for (var i = 0; i < arr.length - 1; i++) {
        //决定每一轮比较多少次
        for (var j = index; j < arr.length - i - 1; j++) {
          if (arr[j][1] < arr[j + 1][1]) {
            // 判断第二位
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
      return arr;
    },
    //冒泡排序 -- 从序数index几开始
    sortArrZ(arr, index) {
      for (var i = 0; i < arr.length - 1; i++) {
        //决定每一轮比较多少次
        for (var j = index; j < arr.length - i - 1; j++) {
          if (arr[j][1] > arr[j + 1][1]) {
            // 判断第二位
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
      return arr;
    }
  },
  mounted() {
    let vm = this;

  },

  data() {
    return {
      GT_UVWR1_M1: {
        title: "",
        id: "GT_UVWR1_M1",
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
      GT_UVWR1_M2: {
        title: "",
        id: "GT_UVWR1_M2",
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
      GT_UVWR1_N1: {
        title: "",
        id: "GT_UVWR1_N1",
        color: ["#C2DEAE", "#5B9BD5", "#FFC000"],
        content: [
          // {
          //   title: "观看用户数",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "点播" },
          //     { value: 348, name: "回看" }
          //   ]
          // },
          // {
          //   title: "观看次数",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "点播" },
          //     { value: 348, name: "回看" }
          //   ]
          // },
          // {
          //   title: "观看总时长",
          //   data: [
          //     { value: 535, name: "直播" },
          //     { value: 410, name: "点播" },
          //     { value: 348, name: "回看" }
          //   ]
          // }
        ]
      },
      GT_UVWR1_N2: {
        title: "",
        id: "GT_UVWR1_N2",
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
      GT_UVWR1_O1: {
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 48.0, 48.1],
          // ["卫视", 154.2, 157.4],
          // ["地方", 60.1, 65.0],
          // ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_O1",
        color: ["#E7E6E6", "#A9D18E"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_O2: {
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 48.0, 48.1],
          // ["卫视", 154.2, 157.4],
          // ["地方", 60.1, 65.0],
          // ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_O2",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_O3: {
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["央视", 48.0, 48.1],
          // ["卫视", 154.2, 157.4],
          // ["地方", 60.1, 65.0],
          // ["轮播", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_O3",
        color: ["#E7E6E6", "#FFC000"],
        ifYaxisShow: true,
        ifLegendShow: true,
        m_barWidth: "12"
      },
      GT_UVWR1_P1: {
        title: "",
        id: "GT_UVWR1_P1",
        height: "height:720px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["贵州卫视", 20, 20],
          // ["贵州-2 公共频道", 18, 18],
          // ["贵州-3 影视文艺频道", 15, 15],
          // ["贵州-4 大众生活频道", 17, 17],
          // ["贵州-5 法制频道", 16, 16],
          // ["华语影院", 14, 14],
          // ["贵阳-4 都市频道", 13, 13],
          // ["贵州-6 科教健康频道", 12, 12],
          // ["贵州-7 经济频道", 11.5, 11.5],
          // ["谍战剧场", 10, 10],
          // ["贵阳-3 法制频道", 9.2, 9.2],
          // ["海外佳片", 8.8, 8.8],
          // ["贵阳-2 经济生活频道", 8.0, 8.0],
          // ["贵阳-1 新闻综合频道", 7.7, 7.7],
          // ["都市剧场", 5.5, 5.5],
          // ["动画乐园", 3.3, 3.3],
          // ["六盘水-2", 2.2, 2.2],
          // ["贵州移动电视", 2.1, 2.1],
          // ["六盘水-1", 1.8, 1.8],
          // ["黔西南-综合", 1.4, 1.4],
          // ["贵阳-5 旅游生活频道", 0.8, 0.8],
          // ["黔西南-公共", 0.7, 0.7]
        ]
      },
      GT_UVWR1_P2: {
        title: "",
        id: "GT_UVWR1_P2",
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
      GT_UVWR1_P3: {
        data: [
          // ["product", "0520-0526", "0527-0602"],
          // ["百姓关注 贵州-2", 48.0, 48.1],
          // ["贵州新闻联播 贵州卫视", 154.2, 157.4],
          // ["第二放映室 贵州-2", 60.1, 65.0],
          // ["非常友茗堂 贵州-2", 15.1, 16.0],
          // ["牌王争霸 贵州-4", 15.1, 16.0]
        ],
        title: "",
        id: "GT_UVWR1_P3",
        color: ["#E7E6E6", "#5B9BD5"],
        ifYaxisShow: false,
        ifLegendShow: false,
        m_barWidth: "40%"
      },
      GT_UVWR1_Q1: {
        title: "",
        id: "GT_UVWR1_Q1",
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
      GT_UVWR1_Q2: {
        title: "",
        id: "GT_UVWR1_Q2",
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
      GT_UVWR1_Q3: {
        title: "",
        id: "GT_UVWR1_Q3",
        height: "height:600px;",
        color: ["#FFC000", "#EDEDED"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_R1: {
        title: "",
        id: "GT_UVWR1_R1",
        height: "height:600px;",
        color: ["#A9D18E", "#EDEDED"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_R2: {
        title: "",
        id: "GT_UVWR1_R2",
        height: "height:600px;",
        color: ["#5B9BD5", "#EDEDED"],
        data: [
          // ["product", "0527-0602", "0520-0526"],
          // ["少儿", 20, 20],
          // ["电影", 18, 18],
          // ["热剧", 15, 15],
          // ["游戏", 17, 17],
          // ["动漫", 16, 16],
          // ["综艺", 14, 14],
          // ["纪实", 13, 13],
          // ["音乐", 12, 12],
          // ["体育", 11.5, 11.5],
          // ["资讯", 10, 10]
        ]
      },
      GT_UVWR1_R3: {
        title: "",
        id: "GT_UVWR1_R3",
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
.UVWR_m4 .analysis_of_viewing1 span {
  font-size: 12px;
  color: red;
}
</style>