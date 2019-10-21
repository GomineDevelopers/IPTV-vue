<template>
  <div class="MarketOperationalWeekReport height_auto">
    <!-- 市场业务运营数据分析周报 -->
    <el-row class="viewing_behavior_report">
      <el-row class="periodic_report_title m_textalign_c">市场业务运营数据分析周报</el-row>

      <!-- /////////////MOWR_1 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>周用户发展情况
      </el-row>
      <com-MOWR-m1 v-bind:m1_data="m1_data" class="m_marginbottom_pxA"></com-MOWR-m1>
      <!-- /////////////MOWR_2 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>24小时新增用户激活率
      </el-row>
      <com-MOWR-m2 v-bind:m2_data="m2_data" class="m_marginbottom_pxA"></com-MOWR-m2>
      <!-- /////////////MOWR_3 -->
      <el-row v-show="ifFormRowShow_yd" class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（移动）
      </el-row>
      <com-MOWR-m3 v-bind:m3_data="m3_data" v-show="ifFormRowShow_yd" class="m_marginbottom_pxA"></com-MOWR-m3>
      <!-- /////////////MOWR_4 -->
      <el-row v-show="ifFormRowShow_lt" class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（联通）
      </el-row>
      <com-MOWR-m4 v-bind:m4_data="m4_data" v-show="ifFormRowShow_lt" class="m_marginbottom_pxA"></com-MOWR-m4>
      <!-- /////////////MOWR_5 -->
      <el-row v-show="ifFormRowShow_dx" class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（电信）
      </el-row>
      <com-MOWR-m5 v-bind:m5_data="m5_data" v-show="ifFormRowShow_dx" class="m_marginbottom_pxA"></com-MOWR-m5>
      <!-- /////////////MOWR_6 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>停机用户变化情况
      </el-row>
      <com-MOWR-m6 v-bind:m6_data="m6_data" class="m_marginbottom_pxA"></com-MOWR-m6>
      <!-- /////////////MOWR_7 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>销、停机用户变化情况
      </el-row>
      <com-MOWR-m7 v-bind:m7_data="m7_data" class="m_marginbottom_pxA"></com-MOWR-m7>
      <!-- /////////////MOWR_8 -->
      <el-row v-show="ifFormRowShow_dx" class="model_title">
        <span class="title_border_left"></span>电信增值业务周发展情况
      </el-row>
      <com-MOWR-m8 v-bind:m8_data="m8_data" v-show="ifFormRowShow_dx" class="m_marginbottom_pxA"></com-MOWR-m8>
    </el-row>

    <!-- 市场业务运营数据分析周报 -->
  </div>
</template>
<script>
import "@/styles/common_2.css";

import MOWR_m1 from "@/views/backviews_pr/MOWR/MOWR_m1";
import MOWR_m2 from "@/views/backviews_pr/MOWR/MOWR_m2";
import MOWR_m3 from "@/views/backviews_pr/MOWR/MOWR_m3";
import MOWR_m4 from "@/views/backviews_pr/MOWR/MOWR_m4";
import MOWR_m5 from "@/views/backviews_pr/MOWR/MOWR_m5";
import MOWR_m6 from "@/views/backviews_pr/MOWR/MOWR_m6";
import MOWR_m7 from "@/views/backviews_pr/MOWR/MOWR_m7";
import MOWR_m8 from "@/views/backviews_pr/MOWR/MOWR_m8";

import { mapGetters } from "vuex";
import { commonTools } from "@/utils/test";
import { users_marketReport } from "@/api/api_main";
import Vue from "vue";

export default {
  name: "MarketOperationalWeekReport", //市场业务运营数据分析周报
  components: {
    "com-MOWR-m1": MOWR_m1,
    "com-MOWR-m2": MOWR_m2,
    "com-MOWR-m3": MOWR_m3,
    "com-MOWR-m4": MOWR_m4,
    "com-MOWR-m5": MOWR_m5,
    "com-MOWR-m6": MOWR_m6,
    "com-MOWR-m7": MOWR_m7,
    "com-MOWR-m8": MOWR_m8
  },
  data() {
    return {
      api_data_yd_w: null,
      api_data_lt_w: null,
      api_data_dx_w: null,
      api_data_yd_wd: null,
      api_data_lt_wd: null,
      api_data_dx_wd: null,
      api_data_yd_wdl: null,
      api_data_lt_wdl: null,
      api_data_dx_wdl: null,
      m1_data: [],
      m2_data: [],
      m3_data: [],
      m4_data: [],
      m5_data: [],
      m6_data: [],
      m7_data: [],
      m8_data: []
    };
  },
  mounted() {
    this.api_data_set();
  },
  watch: {
    PR_operator(newValue, oldValue) {
      this.api_data_set();
    },
    PR_week(newValue, oldValue) {
      this.api_data_set();
    }
  },
  // ▲▲▲▲ 8个模块的数据传入类型
  // (该日报只涉及单独运营商数据，不涉及混合运营商数据)
  // (涉及 week 和 week_days 时间类型)
  // 1 - single x 3
  // 2 - single x 3
  // 3 - single yd
  // 4 - single lt
  // 5 - single dx
  // 6 - single x 3
  // 7 - single x 3
  // 8 - single dx
  methods: {
    api_data_set() {
      let vm = this;
      setTimeout(function() {
        vm.refresh_api_data("yd", "week");
        vm.refresh_api_data("lt", "week");
        vm.refresh_api_data("dx", "week");
        vm.refresh_api_data("yd", "week_days");
        vm.refresh_api_data("lt", "week_days");
        vm.refresh_api_data("dx", "week_days");
        vm.refresh_api_data("yd", "week_days_last");
        vm.refresh_api_data("lt", "week_days_last");
        vm.refresh_api_data("dx", "week_days_last");
        // 数据统一处理 - 给对应的m?传入相应处理好的data!
        setTimeout(function() {
          vm.modulesDataManage();
        }, 100);
      }, 100);
    },
    modulesDataManage() {
      let vm = this;
      // 根据6种数据类型 - 设置好 m1_m8的各数据，再分别传入
      // api_data_yd_w
      // api_data_lt_w
      // api_data_dx_w
      // api_data_yd_wd
      // api_data_lt_wd
      // api_data_dx_wd
      // api_data_yd_wdl
      // api_data_lt_wdl
      // api_data_dx_wdl
      console.log("~~~~~~~~~~modulesDataManage");
      console.log(vm.api_data_yd_w);
      console.log(vm.api_data_lt_w);
      console.log(vm.api_data_dx_w);
      console.log(vm.api_data_yd_wd);
      console.log(vm.api_data_lt_wd);
      console.log(vm.api_data_dx_wd);
      console.log(vm.api_data_yd_wdl);
      console.log(vm.api_data_lt_wdl);
      console.log(vm.api_data_dx_wdl);

      let w_yd = vm.api_data_yd_w.data.responses;
      let w_lt = vm.api_data_lt_w.data.responses;
      let w_dx = vm.api_data_dx_w.data.responses;
      let wd_yd = vm.api_data_yd_wd.data.responses;
      let wd_lt = vm.api_data_lt_wd.data.responses;
      let wd_dx = vm.api_data_dx_wd.data.responses;
      let wdl_yd = vm.api_data_yd_wdl.data.responses;
      let wdl_lt = vm.api_data_lt_wdl.data.responses;
      let wdl_dx = vm.api_data_dx_wdl.data.responses;
      // OK -  1 6 7 2 3 4 5
      // ing -

      // 暂时没有wd和w混合的 模块

      /////////////// m1
      // left / right - new_num - 用户发展情况
      // responses 0
      // wd
      // wd_yd[0];
      // wd_lt[0];
      // wd_dx[0];
      let buckets_1_0_yd =
        wd_yd[0].aggregations.statistical_granularity.buckets;
      let buckets_1_0_lt =
        wd_lt[0].aggregations.statistical_granularity.buckets;
      let buckets_1_0_dx =
        wd_dx[0].aggregations.statistical_granularity.buckets;

      let length_1_0 = buckets_1_0_yd.length;
      let i_1_0;

      // left
      let m1_0 = {
        // ▲ 0
        title: ["日新增", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", , , , , , , ,],
        rowB: ["联通", , , , , , , ,],
        rowC: ["电信", , , , , , , ,],
        rowD: ["", "", "", "", "", "", "", "", ""]
      };
      let sum_1_0_yd = 0;
      let sum_1_0_lt = 0;
      let sum_1_0_dx = 0;
      let sum_1_0_all = 0;
      // right
      let m1_1 = {
        title: "",
        id: "MOWR_m1_A1",
        height: "height:300px;",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "移动", "联通", "电信"],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,]
        ]
      };

      for (i_1_0 = 0; i_1_0 < length_1_0; i_1_0++) {
        // ▲ 1 - 7
        // 循环 x7
        // left
        Vue.set(m1_0.title, i_1_0 + 1, buckets_1_0_yd[i_1_0].key);
        Vue.set(m1_0.rowA, i_1_0 + 1, buckets_1_0_yd[i_1_0].new_num.value);
        Vue.set(m1_0.rowB, i_1_0 + 1, buckets_1_0_lt[i_1_0].new_num.value);
        Vue.set(m1_0.rowC, i_1_0 + 1, buckets_1_0_dx[i_1_0].new_num.value);
        sum_1_0_yd += buckets_1_0_yd[i_1_0].new_num.value;
        sum_1_0_lt += buckets_1_0_lt[i_1_0].new_num.value;
        sum_1_0_dx += buckets_1_0_dx[i_1_0].new_num.value;
        // right
        Vue.set(m1_1.data[i_1_0 + 1], 0, buckets_1_0_yd[i_1_0].key);
        Vue.set(m1_1.data[i_1_0 + 1], 1, buckets_1_0_yd[i_1_0].new_num.value);
        Vue.set(m1_1.data[i_1_0 + 1], 2, buckets_1_0_lt[i_1_0].new_num.value);
        Vue.set(m1_1.data[i_1_0 + 1], 3, buckets_1_0_dx[i_1_0].new_num.value);
      }
      // left
      sum_1_0_all = sum_1_0_yd + sum_1_0_lt + sum_1_0_dx;
      //设置-单运营商-和 - ▲ 8
      Vue.set(m1_0.rowA, length_1_0 + 1, sum_1_0_yd);
      Vue.set(m1_0.rowB, length_1_0 + 1, sum_1_0_lt);
      Vue.set(m1_0.rowC, length_1_0 + 1, sum_1_0_dx);
      Vue.set(m1_0.rowD, length_1_0 + 1, sum_1_0_all);

      let m1 = [];
      m1.push(m1_0);
      m1.push(m1_1);
      // console.log("~~~~~~~~~~~~m1");
      // console.log(m1);

      let buckets_1_0_yd2 =
        wdl_yd[0].aggregations.statistical_granularity.buckets;
      let buckets_1_0_lt2 =
        wdl_lt[0].aggregations.statistical_granularity.buckets;
      let buckets_1_0_dx2 =
        wdl_dx[0].aggregations.statistical_granularity.buckets;

      let length_1_02 = buckets_1_0_yd2.length;
      let i_1_02;

      // left
      let m1_02 = {
        // ▲ 0
        title: ["日新增", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", , , , , , , ,],
        rowB: ["联通", , , , , , , ,],
        rowC: ["电信", , , , , , , ,],
        rowD: ["", "", "", "", "", "", "", "", ""]
      };
      let sum_1_0_yd2 = 0;
      let sum_1_0_lt2 = 0;
      let sum_1_0_dx2 = 0;
      let sum_1_0_all2 = 0;
      // right
      let m1_12 = {
        title: "",
        id: "MOWR_m1_A2",
        height: "height:300px;",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "移动", "联通", "电信"],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,],
          ["", , ,]
        ]
      };

      for (i_1_02 = 0; i_1_02 < length_1_02; i_1_02++) {
        // ▲ 1 - 7
        // 循环 x7
        // left
        Vue.set(m1_02.title, i_1_02 + 1, buckets_1_0_yd2[i_1_02].key);
        Vue.set(m1_02.rowA, i_1_02 + 1, buckets_1_0_yd2[i_1_02].new_num.value);
        Vue.set(m1_02.rowB, i_1_02 + 1, buckets_1_0_lt2[i_1_02].new_num.value);
        Vue.set(m1_02.rowC, i_1_02 + 1, buckets_1_0_dx2[i_1_02].new_num.value);
        sum_1_0_yd2 += buckets_1_0_yd2[i_1_02].new_num.value;
        sum_1_0_lt2 += buckets_1_0_lt2[i_1_02].new_num.value;
        sum_1_0_dx2 += buckets_1_0_dx2[i_1_02].new_num.value;
        // right
        Vue.set(m1_12.data[i_1_02 + 1], 0, buckets_1_0_yd2[i_1_02].key);
        Vue.set(
          m1_12.data[i_1_02 + 1],
          1,
          buckets_1_0_yd2[i_1_02].new_num.value
        );
        Vue.set(
          m1_12.data[i_1_02 + 1],
          2,
          buckets_1_0_lt2[i_1_02].new_num.value
        );
        Vue.set(
          m1_12.data[i_1_02 + 1],
          3,
          buckets_1_0_dx2[i_1_02].new_num.value
        );
      }
      // left
      sum_1_0_all2 = sum_1_0_yd2 + sum_1_0_lt2 + sum_1_0_dx2;
      //设置-单运营商-和 - ▲ 8
      Vue.set(m1_02.rowA, length_1_02 + 1, sum_1_0_yd2);
      Vue.set(m1_02.rowB, length_1_02 + 1, sum_1_0_lt2);
      Vue.set(m1_02.rowC, length_1_02 + 1, sum_1_0_dx2);
      Vue.set(m1_02.rowD, length_1_02 + 1, sum_1_0_all2);

      let m12 = [];
      m12.push(m1_02);
      m12.push(m1_12);
      // console.log("~~~~~~~~~~~~m12");
      // console.log(m12);
      vm.m1_data = []; // 初始化
      vm.m1_data.push(m1);
      vm.m1_data.push(m12);

      /////////////// m2
      // left / right - new_num - 24小时激活率
      //激活率=新增激活用户/新增用户 active_rate =  new_activate_num / new_num
      // responses 1
      // wd
      // wd_yd[1];
      // wd_lt[1];
      // wd_dx[1];
      // 单天
      let buckets_2_1_yd = wd_yd[1].aggregations.statistical_date.buckets;
      let buckets_2_1_lt = wd_lt[1].aggregations.statistical_date.buckets;
      let buckets_2_1_dx = wd_dx[1].aggregations.statistical_date.buckets;
      // 整周
      let aggregations_2_1_yd_all = wd_yd[1].aggregations;
      let aggregations_2_1_lt_all = wd_lt[1].aggregations;
      let aggregations_2_1_dx_all = wd_dx[1].aggregations;

      let length_2_1 = buckets_2_1_yd.length;
      let i_2_1;

      let m2_0 = {
        title: ["日新增", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", , , , , , , ,],
        rowB: ["联通", , , , , , , ,],
        rowC: ["电信", , , , , , , ,],
        rowD: [, , , , , , , ,]
      };
      let sum_2_1_yd = 0;
      let sum_2_1_lt = 0;
      let sum_2_1_dx = 0;
      let sum_2_1_all = 0;

      let m2_1 = {
        title: "",
        id: "MOWR_m2_A1",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["移动", , , , , , , ,],
          ["联通", , , , , , , ,],
          ["电信", , , , , , , ,]
        ]
      };
      for (i_2_1 = 0; i_2_1 < length_2_1; i_2_1++) {
        // ▲ 1 - 7
        // 循环 x7
        // left
        Vue.set(m2_0.title, i_2_1 + 1, buckets_2_1_yd[i_2_1].key);
        Vue.set(
          m2_0.rowA,
          i_2_1 + 1,
          String(
            commonTools.returnFloat_2(
              (buckets_2_1_yd[i_2_1].new_activate_num.value /
                buckets_2_1_yd[i_2_1].new_num.value) *
                100
            )
          ) + "%"
        );
        Vue.set(
          m2_0.rowB,
          i_2_1 + 1,
          String(
            commonTools.returnFloat_2(
              (buckets_2_1_lt[i_2_1].new_activate_num.value /
                buckets_2_1_lt[i_2_1].new_num.value) *
                100
            )
          ) + "%"
        );
        Vue.set(
          m2_0.rowC,
          i_2_1 + 1,
          String(
            commonTools.returnFloat_2(
              (buckets_2_1_dx[i_2_1].new_activate_num.value /
                buckets_2_1_dx[i_2_1].new_num.value) *
                100
            )
          ) + "%"
        );
        // right
        Vue.set(m2_1.data[0], i_2_1 + 1, buckets_2_1_yd[i_2_1].key);
        Vue.set(
          m2_1.data[1],
          i_2_1 + 1,
          parseFloat(
            commonTools.returnFloat_2(
              (buckets_2_1_yd[i_2_1].new_activate_num.value /
                buckets_2_1_yd[i_2_1].new_num.value) *
                100
            )
          )
        );
        Vue.set(
          m2_1.data[2],
          i_2_1 + 1,
          parseFloat(
            commonTools.returnFloat_2(
              (buckets_2_1_lt[i_2_1].new_activate_num.value /
                buckets_2_1_lt[i_2_1].new_num.value) *
                100
            )
          )
        );
        Vue.set(
          m2_1.data[3],
          i_2_1 + 1,
          parseFloat(
            commonTools.returnFloat_2(
              (buckets_2_1_dx[i_2_1].new_activate_num.value /
                buckets_2_1_dx[i_2_1].new_num.value) *
                100
            )
          )
        );
      }
      // left
      sum_2_1_yd =
        String(
          commonTools.returnFloat_2(
            (aggregations_2_1_yd_all.new_activate_num.value /
              aggregations_2_1_yd_all.new_num.value) *
              100
          )
        ) + "%";
      sum_2_1_lt =
        String(
          commonTools.returnFloat_2(
            (aggregations_2_1_lt_all.new_activate_num.value /
              aggregations_2_1_lt_all.new_num.value) *
              100
          )
        ) + "%";
      sum_2_1_dx =
        String(
          commonTools.returnFloat_2(
            (aggregations_2_1_dx_all.new_activate_num.value /
              aggregations_2_1_dx_all.new_num.value) *
              100
          )
        ) + "%";
      sum_2_1_all =
        String(
          commonTools.returnFloat_2(
            ((aggregations_2_1_yd_all.new_activate_num.value +
              aggregations_2_1_lt_all.new_activate_num.value +
              aggregations_2_1_dx_all.new_activate_num.value) /
              (aggregations_2_1_yd_all.new_num.value +
                aggregations_2_1_lt_all.new_num.value +
                aggregations_2_1_dx_all.new_num.value)) *
              100
          )
        ) + "%";

      Vue.set(m2_0.rowA, length_2_1 + 1, sum_2_1_yd);
      Vue.set(m2_0.rowB, length_2_1 + 1, sum_2_1_lt);
      Vue.set(m2_0.rowC, length_2_1 + 1, sum_2_1_dx);
      Vue.set(m2_0.rowD, length_2_1 + 1, sum_2_1_all);

      let m2 = [];
      m2.push(m2_0);
      m2.push(m2_1);
      // console.log("~~~~~~~~~~~~m2");
      // console.log(m2);

      /////////// m2 上周
      // 单天
      let buckets_2_1_yd_2 = wdl_yd[1].aggregations.statistical_date.buckets;
      let buckets_2_1_lt_2 = wdl_lt[1].aggregations.statistical_date.buckets;
      let buckets_2_1_dx_2 = wdl_dx[1].aggregations.statistical_date.buckets;
      // 整周
      let aggregations_2_1_yd_all_2 = wdl_yd[1].aggregations;
      let aggregations_2_1_lt_all_2 = wdl_lt[1].aggregations;
      let aggregations_2_1_dx_all_2 = wdl_dx[1].aggregations;

      let length_2_1_2 = buckets_2_1_yd_2.length;
      let i_2_1_2;

      let m2_0_2 = {
        title: ["日新增", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", , , , , , , ,],
        rowB: ["联通", , , , , , , ,],
        rowC: ["电信", , , , , , , ,],
        rowD: [, , , , , , , ,]
      };
      let sum_2_1_yd_2 = 0;
      let sum_2_1_lt_2 = 0;
      let sum_2_1_dx_2 = 0;
      let sum_2_1_all_2 = 0;

      let m2_1_2 = {
        title: "",
        id: "MOWR_m2_A2",
        color: ["#8064A2", "#9BBB59", "#C0504D"],
        data: [
          ["product", "", "", "", "", "", "", ""],
          ["移动", , , , , , , ,],
          ["联通", , , , , , , ,],
          ["电信", , , , , , , ,]
        ]
      };
      for (i_2_1_2 = 0; i_2_1_2 < length_2_1_2; i_2_1_2++) {
        // ▲ 1 - 7
        // 循环 x7
        // left
        Vue.set(m2_0_2.title, i_2_1_2 + 1, buckets_2_1_yd_2[i_2_1_2].key);
        Vue.set(
          m2_0_2.rowA,
          i_2_1_2 + 1,
          String(
            commonTools.returnFloat_2(
              (buckets_2_1_yd_2[i_2_1_2].new_activate_num.value /
                buckets_2_1_yd_2[i_2_1_2].new_num.value) *
                100
            )
          ) + "%"
        );
        Vue.set(
          m2_0_2.rowB,
          i_2_1_2 + 1,
          String(
            commonTools.returnFloat_2(
              (buckets_2_1_lt_2[i_2_1_2].new_activate_num.value /
                buckets_2_1_lt_2[i_2_1_2].new_num.value) *
                100
            )
          ) + "%"
        );
        Vue.set(
          m2_0_2.rowC,
          i_2_1_2 + 1,
          String(
            commonTools.returnFloat_2(
              (buckets_2_1_dx_2[i_2_1_2].new_activate_num.value /
                buckets_2_1_dx_2[i_2_1_2].new_num.value) *
                100
            )
          ) + "%"
        );
        // right
        Vue.set(m2_1_2.data[0], i_2_1_2 + 1, buckets_2_1_yd_2[i_2_1_2].key);
        Vue.set(
          m2_1_2.data[1],
          i_2_1_2 + 1,
          parseFloat(
            commonTools.returnFloat_2(
              (buckets_2_1_yd_2[i_2_1_2].new_activate_num.value /
                buckets_2_1_yd_2[i_2_1_2].new_num.value) *
                100
            )
          )
        );
        Vue.set(
          m2_1_2.data[2],
          i_2_1_2 + 1,
          parseFloat(
            commonTools.returnFloat_2(
              (buckets_2_1_lt_2[i_2_1_2].new_activate_num.value /
                buckets_2_1_lt_2[i_2_1_2].new_num.value) *
                100
            )
          )
        );
        Vue.set(
          m2_1_2.data[3],
          i_2_1_2 + 1,
          parseFloat(
            commonTools.returnFloat_2(
              (buckets_2_1_dx_2[i_2_1_2].new_activate_num.value /
                buckets_2_1_dx_2[i_2_1_2].new_num.value) *
                100
            )
          )
        );
      }
      // left
      sum_2_1_yd_2 =
        String(
          commonTools.returnFloat_2(
            (aggregations_2_1_yd_all_2.new_activate_num.value /
              aggregations_2_1_yd_all_2.new_num.value) *
              100
          )
        ) + "%";
      sum_2_1_lt_2 =
        String(
          commonTools.returnFloat_2(
            (aggregations_2_1_lt_all_2.new_activate_num.value /
              aggregations_2_1_lt_all_2.new_num.value) *
              100
          )
        ) + "%";
      sum_2_1_dx_2 =
        String(
          commonTools.returnFloat_2(
            (aggregations_2_1_dx_all_2.new_activate_num.value /
              aggregations_2_1_dx_all_2.new_num.value) *
              100
          )
        ) + "%";
      sum_2_1_all_2 =
        String(
          commonTools.returnFloat_2(
            ((aggregations_2_1_yd_all_2.new_activate_num.value +
              aggregations_2_1_lt_all_2.new_activate_num.value +
              aggregations_2_1_dx_all_2.new_activate_num.value) /
              (aggregations_2_1_yd_all_2.new_num.value +
                aggregations_2_1_lt_all_2.new_num.value +
                aggregations_2_1_dx_all_2.new_num.value)) *
              100
          )
        ) + "%";

      Vue.set(m2_0_2.rowA, length_2_1_2 + 1, sum_2_1_yd_2);
      Vue.set(m2_0_2.rowB, length_2_1_2 + 1, sum_2_1_lt_2);
      Vue.set(m2_0_2.rowC, length_2_1_2 + 1, sum_2_1_dx_2);
      Vue.set(m2_0_2.rowD, length_2_1_2 + 1, sum_2_1_all_2);

      let m2_2 = [];
      m2_2.push(m2_0_2);
      m2_2.push(m2_1_2);
      // console.log("~~~~~~~~~~~~m2_2");
      // console.log(m2_2);
      vm.m2_data = []; // 初始化
      vm.m2_data.push(m2);
      vm.m2_data.push(m2_2);

      /////////////// m3
      // left / right - new_num - 24小时激活率
      //激活率=新增激活用户/新增用户 active_rate =  new_activate_num / new_num
      // responses 1
      // w
      // w_yd[1];
      // w_lt[1];
      // w_dx[1];
      let buckets_3_0_yd = wd_yd[0].aggregations.ac.buckets;
      let buckets_3_1_yd = wd_yd[1].aggregations.ac.buckets;

      let length_3_1 = buckets_3_1_yd.length;
      let sum_3_1_all_rn = 0;
      let sum_3_1_all_nan = 0;
      let sum_3_1_all_nn = 0;

      let i_3_1;
      let m3_0 = {
        title: ["运营商", "地区", "在册用户", "新增激活率"],
        row1: ["移动", "", ,],
        row2: ["", ,],
        row3: ["", ,],
        row4: ["", ,],
        row5: ["", ,],
        row6: ["", ,],
        row7: ["", ,],
        row8: ["", ,],
        row9: ["", ,],
        row10: ["", ,],
        row11: ["总计", ,]
      };
      // ...
      Vue.set(
        m3_0.row1,
        1,
        commonTools.acConvert_Single(buckets_3_0_yd[0].key)
      );
      Vue.set(
        m3_0.row2,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[1].key)
      );
      Vue.set(
        m3_0.row3,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[2].key)
      );
      Vue.set(
        m3_0.row4,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[3].key)
      );
      Vue.set(
        m3_0.row5,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[4].key)
      );
      Vue.set(
        m3_0.row6,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[5].key)
      );
      Vue.set(
        m3_0.row7,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[6].key)
      );
      Vue.set(
        m3_0.row8,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[7].key)
      );
      Vue.set(
        m3_0.row9,
        0,
        commonTools.acConvert_Single(buckets_3_0_yd[8].key)
      );

      Vue.set(m3_0.row10, 0, "其他"); // 没有“贵安”，写其他
      Vue.set(
        m3_0.row1,
        2,
        buckets_3_0_yd[0].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row2,
        1,
        buckets_3_0_yd[1].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row3,
        1,
        buckets_3_0_yd[2].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row4,
        1,
        buckets_3_0_yd[3].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row5,
        1,
        buckets_3_0_yd[4].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row6,
        1,
        buckets_3_0_yd[5].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row7,
        1,
        buckets_3_0_yd[6].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row8,
        1,
        buckets_3_0_yd[7].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row9,
        1,
        buckets_3_0_yd[8].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m3_0.row10,
        1,
        buckets_3_0_yd[9].register_num.buckets[0].register_num.value
      );
      for (i_3_1 = 0; i_3_1 < length_3_1; i_3_1++) {
        sum_3_1_all_rn +=
          buckets_3_0_yd[i_3_1].register_num.buckets[0].register_num.value;
      }

      Vue.set(
        m3_0.row1,
        3,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[0].new_activate_num.value /
              buckets_3_1_yd[0].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row2,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[1].new_activate_num.value /
              buckets_3_1_yd[1].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row3,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[2].new_activate_num.value /
              buckets_3_1_yd[2].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row4,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[3].new_activate_num.value /
              buckets_3_1_yd[3].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row5,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[4].new_activate_num.value /
              buckets_3_1_yd[4].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row6,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[5].new_activate_num.value /
              buckets_3_1_yd[5].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row7,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[6].new_activate_num.value /
              buckets_3_1_yd[6].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row8,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[7].new_activate_num.value /
              buckets_3_1_yd[7].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m3_0.row9,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_3_1_yd[8].new_activate_num.value /
              buckets_3_1_yd[8].new_num.value) *
              100
          )
        ) + "%"
      );
      try {
        Vue.set(
          m3_0.row10,
          2,
          String(
            commonTools.returnFloat_2(
              (buckets_3_1_yd[9].new_activate_num.value /
                buckets_3_1_yd[9].new_num.value) *
                100
            )
          ) + "%"
        );
      } catch (err) {
        Vue.set(
          // ▲▲特殊处理 如果没有其他的情况 -- 这里设置为0
          m3_0.row10,
          2,
          "none"
        );
      }

      for (i_3_1 = 0; i_3_1 < length_3_1; i_3_1++) {
        sum_3_1_all_nan += buckets_3_1_yd[i_3_1].new_activate_num.value;
        sum_3_1_all_nn += buckets_3_1_yd[i_3_1].new_num.value;
      }
      Vue.set(m3_0.row11, 1, sum_3_1_all_rn);
      Vue.set(
        m3_0.row11,
        2,
        String(
          commonTools.returnFloat_2((sum_3_1_all_nan / sum_3_1_all_nn) * 100)
        ) + "%"
      );

      let m3 = [];
      m3.push(m3_0);
      // console.log("~~~~~~~~~~~~m3");
      // console.log(m3);
      vm.m3_data = []; // 初始化
      vm.m3_data.push(m3);

      /////////////// m4
      // left / right - new_num - 24小时激活率
      //激活率=新增激活用户/新增用户 active_rate =  new_activate_num / new_num
      // responses 1
      // w
      // w_yd[1];
      // w_lt[1];
      // w_dx[1];
      let buckets_4_0_lt = wd_lt[0].aggregations.ac.buckets;
      let buckets_4_1_lt = wd_lt[1].aggregations.ac.buckets;

      let length_4_1 = buckets_4_1_lt.length;
      let sum_4_1_all_rn = 0;
      let sum_4_1_all_nan = 0;
      let sum_4_1_all_nn = 0;

      let i_4_1;
      let m4_0 = {
        title: ["运营商", "地区", "在册用户", "新增激活率"],
        row1: ["联通", "", ,],
        row2: ["", ,],
        row3: ["", ,],
        row4: ["", ,],
        row5: ["", ,],
        row6: ["", ,],
        row7: ["", ,],
        row8: ["", ,],
        row9: ["", ,],
        row10: ["", ,],
        row11: ["总计", ,]
      };
      // ...
      Vue.set(
        m4_0.row1,
        1,
        commonTools.acConvert_Single(buckets_4_0_lt[0].key)
      );
      Vue.set(
        m4_0.row2,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[1].key)
      );
      Vue.set(
        m4_0.row3,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[2].key)
      );
      Vue.set(
        m4_0.row4,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[3].key)
      );
      Vue.set(
        m4_0.row5,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[4].key)
      );
      Vue.set(
        m4_0.row6,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[5].key)
      );
      Vue.set(
        m4_0.row7,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[6].key)
      );
      Vue.set(
        m4_0.row8,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[7].key)
      );
      Vue.set(
        m4_0.row9,
        0,
        commonTools.acConvert_Single(buckets_4_0_lt[8].key)
      );

      Vue.set(m4_0.row10, 0, "其他"); // 没有“贵安”，写其他
      Vue.set(
        m4_0.row1,
        2,
        buckets_4_0_lt[0].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row2,
        1,
        buckets_4_0_lt[1].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row3,
        1,
        buckets_4_0_lt[2].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row4,
        1,
        buckets_4_0_lt[3].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row5,
        1,
        buckets_4_0_lt[4].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row6,
        1,
        buckets_4_0_lt[5].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row7,
        1,
        buckets_4_0_lt[6].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row8,
        1,
        buckets_4_0_lt[7].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row9,
        1,
        buckets_4_0_lt[8].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m4_0.row10,
        1,
        buckets_4_0_lt[9].register_num.buckets[0].register_num.value
      );
      for (i_4_1 = 0; i_4_1 < length_4_1; i_4_1++) {
        sum_4_1_all_rn +=
          buckets_4_0_lt[i_4_1].register_num.buckets[0].register_num.value;
      }

      Vue.set(
        m4_0.row1,
        3,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[0].new_activate_num.value /
              buckets_4_1_lt[0].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row2,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[1].new_activate_num.value /
              buckets_4_1_lt[1].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row3,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[2].new_activate_num.value /
              buckets_4_1_lt[2].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row4,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[3].new_activate_num.value /
              buckets_4_1_lt[3].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row5,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[4].new_activate_num.value /
              buckets_4_1_lt[4].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row6,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[5].new_activate_num.value /
              buckets_4_1_lt[5].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row7,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[6].new_activate_num.value /
              buckets_4_1_lt[6].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row8,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[7].new_activate_num.value /
              buckets_4_1_lt[7].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m4_0.row9,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_4_1_lt[8].new_activate_num.value /
              buckets_4_1_lt[8].new_num.value) *
              100
          )
        ) + "%"
      );

      try {
        Vue.set(
          m4_0.row10,
          2,
          String(
            commonTools.returnFloat_2(
              (buckets_4_1_lt[9].new_activate_num.value /
                buckets_4_1_lt[9].new_num.value) *
                100
            )
          ) + "%"
        );
      } catch (err) {
        Vue.set(
          // ▲▲特殊处理 如果没有其他的情况 -- 这里设置为0
          m4_0.row10,
          2,
          "none"
        );
      }

      for (i_4_1 = 0; i_4_1 < length_4_1; i_4_1++) {
        sum_4_1_all_nan += buckets_4_1_lt[i_4_1].new_activate_num.value;
        sum_4_1_all_nn += buckets_4_1_lt[i_4_1].new_num.value;
      }
      Vue.set(m4_0.row11, 1, sum_4_1_all_rn);
      Vue.set(
        m4_0.row11,
        2,
        String(
          commonTools.returnFloat_2((sum_4_1_all_nan / sum_4_1_all_nn) * 100)
        ) + "%"
      );

      let m4 = [];
      m4.push(m4_0);
      // console.log("~~~~~~~~~~~~m4");
      // console.log(m4);
      vm.m4_data = []; // 初始化
      vm.m4_data.push(m4);

      /////////////// m5
      // left / right - new_num - 24小时激活率
      //激活率=新增激活用户/新增用户 active_rate =  new_activate_num / new_num
      // responses 1
      // w
      // w_yd[1];
      // w_lt[1];
      // w_dx[1];
      let buckets_5_0_dx = wd_dx[0].aggregations.ac.buckets;
      let buckets_5_1_dx = wd_dx[1].aggregations.ac.buckets;

      let length_5_1 = buckets_5_1_dx.length;
      let sum_5_1_all_rn = 0;
      let sum_5_1_all_nan = 0;
      let sum_5_1_all_nn = 0;

      let i_5_1;
      let m5_0 = {
        title: ["运营商", "地区", "在册用户", "新增激活率"],
        row1: ["电信", "", ,],
        row2: ["", ,],
        row3: ["", ,],
        row4: ["", ,],
        row5: ["", ,],
        row6: ["", ,],
        row7: ["", ,],
        row8: ["", ,],
        row9: ["", ,],
        row10: ["", ,],
        row11: ["总计", ,]
      };
      // ...
      Vue.set(
        m5_0.row1,
        1,
        commonTools.acConvert_Single(buckets_5_0_dx[0].key)
      );
      Vue.set(
        m5_0.row2,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[1].key)
      );
      Vue.set(
        m5_0.row3,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[2].key)
      );
      Vue.set(
        m5_0.row4,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[3].key)
      );
      Vue.set(
        m5_0.row5,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[4].key)
      );
      Vue.set(
        m5_0.row6,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[5].key)
      );
      Vue.set(
        m5_0.row7,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[6].key)
      );
      Vue.set(
        m5_0.row8,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[7].key)
      );
      Vue.set(
        m5_0.row9,
        0,
        commonTools.acConvert_Single(buckets_5_0_dx[8].key)
      );

      Vue.set(m5_0.row10, 0, "其他"); // 没有“贵安”，写其他
      Vue.set(
        m5_0.row1,
        2,
        buckets_5_0_dx[0].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row2,
        1,
        buckets_5_0_dx[1].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row3,
        1,
        buckets_5_0_dx[2].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row4,
        1,
        buckets_5_0_dx[3].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row5,
        1,
        buckets_5_0_dx[4].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row6,
        1,
        buckets_5_0_dx[5].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row7,
        1,
        buckets_5_0_dx[6].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row8,
        1,
        buckets_5_0_dx[7].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row9,
        1,
        buckets_5_0_dx[8].register_num.buckets[0].register_num.value
      );
      Vue.set(
        m5_0.row10,
        1,
        buckets_5_0_dx[9].register_num.buckets[0].register_num.value
      );
      for (i_5_1 = 0; i_5_1 < length_5_1; i_5_1++) {
        sum_5_1_all_rn +=
          buckets_5_0_dx[i_5_1].register_num.buckets[0].register_num.value;
      }

      Vue.set(
        m5_0.row1,
        3,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[0].new_activate_num.value /
              buckets_5_1_dx[0].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row2,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[1].new_activate_num.value /
              buckets_5_1_dx[1].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row3,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[2].new_activate_num.value /
              buckets_5_1_dx[2].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row4,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[3].new_activate_num.value /
              buckets_5_1_dx[3].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row5,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[4].new_activate_num.value /
              buckets_5_1_dx[4].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row6,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[5].new_activate_num.value /
              buckets_5_1_dx[5].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row7,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[6].new_activate_num.value /
              buckets_5_1_dx[6].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row8,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[7].new_activate_num.value /
              buckets_5_1_dx[7].new_num.value) *
              100
          )
        ) + "%"
      );
      Vue.set(
        m5_0.row9,
        2,
        String(
          commonTools.returnFloat_2(
            (buckets_5_1_dx[8].new_activate_num.value /
              buckets_5_1_dx[8].new_num.value) *
              100
          )
        ) + "%"
      );

      try {
        Vue.set(
          m5_0.row10,
          2,
          String(
            commonTools.returnFloat_2(
              (buckets_5_1_dx[9].new_activate_num.value /
                buckets_5_1_dx[9].new_num.value) *
                100
            )
          ) + "%"
        );
      } catch (err) {
        Vue.set(
          // ▲▲特殊处理 如果没有其他的情况 -- 这里设置为0
          m5_0.row10,
          2,
          "none"
        );
      }

      for (i_5_1 = 0; i_5_1 < length_5_1; i_5_1++) {
        sum_5_1_all_nan += buckets_5_1_dx[i_5_1].new_activate_num.value;
        sum_5_1_all_nn += buckets_5_1_dx[i_5_1].new_num.value;
      }
      Vue.set(m5_0.row11, 1, sum_5_1_all_rn);
      Vue.set(
        m5_0.row11,
        2,
        String(
          commonTools.returnFloat_2((sum_5_1_all_nan / sum_5_1_all_nn) * 100)
        ) + "%"
      );

      let m5 = [];
      m5.push(m5_0);
      // console.log("~~~~~~~~~~~~m5");
      // console.log(m5);
      vm.m5_data = []; // 初始化
      vm.m5_data.push(m5);

      /////////////// m6
      // 停机用户变化情况
      // responses 0  （0关于用户）
      // wd
      // wd_yd[0];
      // wd_lt[0];
      // wd_dx[0];
      let buckets_6_0_yd =
        wd_yd[0].aggregations.statistical_granularity.buckets;
      let buckets_6_0_lt =
        wd_lt[0].aggregations.statistical_granularity.buckets;
      let buckets_6_0_dx =
        wd_dx[0].aggregations.statistical_granularity.buckets;

      let length_6_0 = buckets_6_0_yd.length;
      let i_6_0;

      let m6_0 = {
        title: ["停机数", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", , , , , , , ,],
        rowC: ["联通", , , , , , , ,],
        rowB: ["电信", , , , , , , ,]
      };
      let sum_6_0_yd = 0;
      let sum_6_0_lt = 0;
      let sum_6_0_dx = 0;

      let m6_1 = {
        title: "",
        id: "MOWR_m6_A1",
        color: ["#8064A2"],
        data: [["product", "", "", "", "", "", "", ""], ["移动", , , , , , ,]]
      };
      let m6_2 = {
        title: "",
        id: "MOWR_m6_A2",
        color: ["#9BBB59"],
        data: [["product", "", "", "", "", "", "", ""], ["联通", , , , , , ,]]
      };
      let m6_3 = {
        title: "",
        id: "MOWR_m6_A3",
        color: ["#C0504D"],
        data: [["product", "", "", "", "", "", "", ""], ["电信", , , , , , ,]]
      };

      for (i_6_0 = 0; i_6_0 < length_6_0; i_6_0++) {
        // 循环 x7
        // m6_0
        Vue.set(m6_0.title, i_6_0 + 1, buckets_6_0_yd[i_6_0].key);
        Vue.set(
          m6_0.rowA,
          i_6_0 + 1,
          buckets_6_0_yd[i_6_0].downtime_user_num.value
        );
        Vue.set(
          m6_0.rowB,
          i_6_0 + 1,
          buckets_6_0_lt[i_6_0].downtime_user_num.value
        );
        Vue.set(
          m6_0.rowC,
          i_6_0 + 1,
          buckets_6_0_dx[i_6_0].downtime_user_num.value
        );
        sum_6_0_yd += buckets_6_0_yd[i_6_0].downtime_user_num.value;
        sum_6_0_lt += buckets_6_0_lt[i_6_0].downtime_user_num.value;
        sum_6_0_dx += buckets_6_0_dx[i_6_0].downtime_user_num.value;
        // m6_1
        Vue.set(m6_1.data[0], i_6_0 + 1, buckets_6_0_yd[i_6_0].key);
        Vue.set(
          m6_1.data[1],
          i_6_0 + 1,
          buckets_6_0_yd[i_6_0].downtime_user_num.value
        );
        // m6_2
        Vue.set(m6_2.data[0], i_6_0 + 1, buckets_6_0_lt[i_6_0].key);
        Vue.set(
          m6_2.data[1],
          i_6_0 + 1,
          buckets_6_0_lt[i_6_0].downtime_user_num.value
        );
        // m6_3
        Vue.set(m6_3.data[0], i_6_0 + 1, buckets_6_0_dx[i_6_0].key);
        Vue.set(
          m6_3.data[1],
          i_6_0 + 1,
          buckets_6_0_dx[i_6_0].downtime_user_num.value
        );
      }
      // m6_0
      Vue.set(m6_0.rowA, length_6_0 + 1, sum_6_0_yd);
      Vue.set(m6_0.rowB, length_6_0 + 1, sum_6_0_lt);
      Vue.set(m6_0.rowC, length_6_0 + 1, sum_6_0_dx);

      let m6 = [];
      m6.push(m6_0);
      m6.push(m6_1);
      m6.push(m6_2);
      m6.push(m6_3);
      // console.log("~~~~~~~~~~~~m6");
      // console.log(m6);

      let buckets_6_0_yd2 =
        wdl_yd[0].aggregations.statistical_granularity.buckets;
      let buckets_6_0_lt2 =
        wdl_lt[0].aggregations.statistical_granularity.buckets;
      let buckets_6_0_dx2 =
        wdl_dx[0].aggregations.statistical_granularity.buckets;

      let length_6_02 = buckets_6_0_yd2.length;
      let i_6_02;

      let m6_02 = {
        title: ["停机数", "", "", "", "", "", "", "", "总计"],
        rowA: ["移动", , , , , , , ,],
        rowC: ["联通", , , , , , , ,],
        rowB: ["电信", , , , , , , ,]
      };
      let sum_6_0_yd2 = 0;
      let sum_6_0_lt2 = 0;
      let sum_6_0_dx2 = 0;

      let m6_12 = {
        title: "",
        id: "MOWR_m6_A1_2",
        color: ["#8064A2"],
        data: [["product", "", "", "", "", "", "", ""], ["移动", , , , , , ,]]
      };
      let m6_22 = {
        title: "",
        id: "MOWR_m6_A2_2",
        color: ["#9BBB59"],
        data: [["product", "", "", "", "", "", "", ""], ["联通", , , , , , ,]]
      };
      let m6_32 = {
        title: "",
        id: "MOWR_m6_A3_2",
        color: ["#C0504D"],
        data: [["product", "", "", "", "", "", "", ""], ["电信", , , , , , ,]]
      };

      for (i_6_02 = 0; i_6_02 < length_6_02; i_6_02++) {
        // 循环 x7
        // m6_02
        Vue.set(m6_02.title, i_6_02 + 1, buckets_6_0_yd2[i_6_02].key);
        Vue.set(
          m6_02.rowA,
          i_6_02 + 1,
          buckets_6_0_yd2[i_6_02].downtime_user_num.value
        );
        Vue.set(
          m6_02.rowB,
          i_6_02 + 1,
          buckets_6_0_lt2[i_6_02].downtime_user_num.value
        );
        Vue.set(
          m6_02.rowC,
          i_6_02 + 1,
          buckets_6_0_dx2[i_6_02].downtime_user_num.value
        );
        sum_6_0_yd2 += buckets_6_0_yd2[i_6_02].downtime_user_num.value;
        sum_6_0_lt2 += buckets_6_0_lt2[i_6_02].downtime_user_num.value;
        sum_6_0_dx2 += buckets_6_0_dx2[i_6_02].downtime_user_num.value;
        // m6_12
        Vue.set(m6_12.data[0], i_6_02 + 1, buckets_6_0_yd2[i_6_02].key);
        Vue.set(
          m6_12.data[1],
          i_6_02 + 1,
          buckets_6_0_yd2[i_6_02].downtime_user_num.value
        );
        // m6_22
        Vue.set(m6_22.data[0], i_6_02 + 1, buckets_6_0_lt2[i_6_02].key);
        Vue.set(
          m6_22.data[1],
          i_6_02 + 1,
          buckets_6_0_lt2[i_6_02].downtime_user_num.value
        );
        // m6_32
        Vue.set(m6_32.data[0], i_6_02 + 1, buckets_6_0_dx2[i_6_02].key);
        Vue.set(
          m6_32.data[1],
          i_6_02 + 1,
          buckets_6_0_dx2[i_6_02].downtime_user_num.value
        );
      }
      // m6_02
      Vue.set(m6_02.rowA, length_6_02 + 1, sum_6_0_yd2);
      Vue.set(m6_02.rowB, length_6_02 + 1, sum_6_0_lt2);
      Vue.set(m6_02.rowC, length_6_02 + 1, sum_6_0_dx2);

      let m62 = [];
      m62.push(m6_02);
      m62.push(m6_12);
      m62.push(m6_22);
      m62.push(m6_32);
      // console.log("~~~~~~~~~~~~m62");
      // console.log(m62);
      vm.m6_data = []; // 初始化
      vm.m6_data.push(m6);
      vm.m6_data.push(m62);

      /////////////// m7
      // 销、停机用户变化情况
      // responses 0  （0关于用户）
      // wd
      // wd_yd[0];
      // wd_lt[0];
      // wd_dx[0];

      let buckets_7_0_yd =
        wd_yd[0].aggregations.statistical_granularity.buckets;
      let buckets_7_0_lt =
        wd_lt[0].aggregations.statistical_granularity.buckets;
      let buckets_7_0_dx =
        wd_dx[0].aggregations.statistical_granularity.buckets;

      let length_7_0 = buckets_7_0_yd.length;
      let i_7_0;

      // 上周
      let buckets_7_0_yd_l =
        wdl_yd[0].aggregations.statistical_granularity.buckets;
      let buckets_7_0_lt_l =
        wdl_lt[0].aggregations.statistical_granularity.buckets;
      let buckets_7_0_dx_l =
        wdl_dx[0].aggregations.statistical_granularity.buckets;

      let m7_0 = {
        title: ["运营商", "分类", "", "", "", "", "", "", "", "合计"],
        row1: ["移动", "新增", , , , , , , ,],
        row2: ["销户", , , , , , , ,],
        row3: ["净增", , , , , , , ,],
        row4: ["联通", "新增", , , , , , , ,],
        row5: ["销户", , , , , , , ,],
        row6: ["净增", , , , , , , ,],
        row7: ["电信", "新增", , , , , , , ,],
        row8: ["销户", , , , , , , ,],
        row9: ["净增", , , , , , , ,]
      };
      let m7_1 = {
        title: "",
        id: "MOWR_m7_A1",
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [["运营商", "移动", "联通", "电信"], ["占比", , ,]],
        label_formatter: "{c}\n{d}%"
      };
      let m7_2 = {
        title: "",
        id: "MOWR_m7_A2",
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [["运营商", "移动", "联通", "电信"], ["占比", , ,]],
        label_formatter: "{c}\n{d}%"
      };
      let m7_3 = {
        title: "",
        id: "MOWR_m7_A3",
        color: ["#C0504D", "#9BBB59", "#CC7B38"],
        data: [["运营商", "移动", "联通", "电信"], ["占比", , ,]],
        label_formatter: "{c}\n{d}%"
      };

      // 新增 new_num         -- nn
      // 销户 unsub_user_num  -- uun
      // 净增 net_inc_num     -- nin   -- 净增用户数 = 在册用户数-截止上周期的在册用户数 register_num

      let sum_7_0_yd_nn = 0;
      let sum_7_0_yd_uun = 0;
      let sum_7_0_yd_nin = 0;
      let sum_7_0_lt_nn = 0;
      let sum_7_0_lt_uun = 0;
      let sum_7_0_lt_nin = 0;
      let sum_7_0_dx_nn = 0;
      let sum_7_0_dx_uun = 0;
      let sum_7_0_dx_nin = 0;

      for (i_7_0 = 0; i_7_0 < length_7_0; i_7_0++) {
        //// m7_0
        Vue.set(m7_0.title, i_7_0 + 2, buckets_7_0_yd[i_7_0].key);
        // yd
        Vue.set(m7_0.row1, i_7_0 + 2, buckets_7_0_yd[i_7_0].new_num.value);
        Vue.set(
          m7_0.row2,
          i_7_0 + 1,
          buckets_7_0_yd[i_7_0].unsub_user_num.value
        );
        Vue.set(
          m7_0.row3,
          i_7_0 + 1,
          buckets_7_0_yd[i_7_0].register_num.value -
            buckets_7_0_yd_l[i_7_0].register_num.value
        );
        sum_7_0_yd_nn += buckets_7_0_yd[i_7_0].new_num.value;
        sum_7_0_yd_uun += buckets_7_0_yd[i_7_0].unsub_user_num.value;
        sum_7_0_yd_nin += buckets_7_0_yd[i_7_0].register_num.value;
        // lt
        Vue.set(
          m7_0.row4,
          i_7_0 + 2,
          buckets_7_0_yd[i_7_0].register_num.value -
            buckets_7_0_yd_l[i_7_0].register_num.value
        );
        Vue.set(
          m7_0.row5,
          i_7_0 + 1,
          buckets_7_0_lt[i_7_0].unsub_user_num.value
        );
        Vue.set(
          m7_0.row6,
          i_7_0 + 1,
          buckets_7_0_lt[i_7_0].register_num.value -
            buckets_7_0_lt_l[i_7_0].register_num.value
        );
        sum_7_0_lt_nn += buckets_7_0_lt[i_7_0].new_num.value;
        sum_7_0_lt_uun += buckets_7_0_lt[i_7_0].unsub_user_num.value;
        sum_7_0_lt_nin += buckets_7_0_lt[i_7_0].register_num.value;
        // dx
        Vue.set(
          m7_0.row7,
          i_7_0 + 2,
          buckets_7_0_lt[i_7_0].register_num.value -
            buckets_7_0_lt_l[i_7_0].register_num.value
        );
        Vue.set(
          m7_0.row8,
          i_7_0 + 1,
          buckets_7_0_dx[i_7_0].unsub_user_num.value
        );
        Vue.set(
          m7_0.row9,
          i_7_0 + 1,
          buckets_7_0_dx[i_7_0].register_num.value -
            buckets_7_0_dx_l[i_7_0].register_num.value
        );
        sum_7_0_dx_nn += buckets_7_0_dx[i_7_0].new_num.value;
        sum_7_0_dx_uun += buckets_7_0_dx[i_7_0].unsub_user_num.value;
        sum_7_0_dx_nin +=
          buckets_7_0_dx[i_7_0].register_num.value -
          buckets_7_0_dx_l[i_7_0].register_num.value;
      }
      //// m7_0
      Vue.set(m7_0.row1, length_7_0 + 2, sum_7_0_yd_nn);
      Vue.set(m7_0.row2, length_7_0 + 1, sum_7_0_yd_uun);
      Vue.set(m7_0.row3, length_7_0 + 1, sum_7_0_yd_nin);
      Vue.set(m7_0.row4, length_7_0 + 2, sum_7_0_lt_nn);
      Vue.set(m7_0.row5, length_7_0 + 1, sum_7_0_lt_uun);
      Vue.set(m7_0.row6, length_7_0 + 1, sum_7_0_lt_nin);
      Vue.set(m7_0.row7, length_7_0 + 2, sum_7_0_dx_nn);
      Vue.set(m7_0.row8, length_7_0 + 1, sum_7_0_dx_uun);
      Vue.set(m7_0.row9, length_7_0 + 1, sum_7_0_dx_nin);

      //// m7_1
      Vue.set(m7_1.data[1], 1, sum_7_0_yd_nn);
      Vue.set(m7_1.data[1], 2, sum_7_0_lt_nn);
      Vue.set(m7_1.data[1], 3, sum_7_0_dx_nn);
      //// m7_2
      Vue.set(m7_2.data[1], 1, sum_7_0_yd_uun);
      Vue.set(m7_2.data[1], 2, sum_7_0_lt_uun);
      Vue.set(m7_2.data[1], 3, sum_7_0_dx_uun);
      //// m7_3
      Vue.set(m7_3.data[1], 1, sum_7_0_yd_nin);
      Vue.set(m7_3.data[1], 2, sum_7_0_lt_nin);
      Vue.set(m7_3.data[1], 3, sum_7_0_dx_nin);

      let m7 = [];
      m7.push(m7_0);
      m7.push(m7_1);
      m7.push(m7_2);
      m7.push(m7_3);
      // console.log("~~~~~~~~~~~~m7");
      // console.log(m7);
      vm.m7_data = []; // 初始化
      vm.m7_data.push(m7);

      /////////////// m8
      // 电信增值业务周发展情况 - 暂时只有电信的 dx
      // responses 2
      // wd
      // wd_dx[2];
      let m8_0 = {
        title1: ["订购日期", "", "", "", "", "", "", "", "", "", "合计"],
        title2: [
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入",
          "订购数",
          "收入"
        ],

        row1: ["", , , , , , , , , , , , , , , , , , , ,],
        row2: ["", , , , , , , , , , , , , , , , , , , ,],
        row3: ["", , , , , , , , , , , , , , , , , , , ,],
        row4: ["", , , , , , , , , , , , , , , , , , , ,],
        row5: ["", , , , , , , , , , , , , , , , , , , ,],
        row6: ["", , , , , , , , , , , , , , , , , , , ,],
        row7: ["", , , , , , , , , , , , , , , , , , , ,],
        row_bottom: ["总计", , , , , , , , , , , , , , , , , , , ,]
      };
      let buckets_8_2 = wd_dx[2].aggregations.statistical_granularity.buckets;
      let length_8_2 = buckets_8_2.length; // 7天长度 - 7
      let i_8_2;
      let buckets_8_2_package =
        buckets_8_2[0].value_added_service_package.buckets;
      let length_8_2_package = buckets_8_2_package.length; // 包（个数）长度
      let i_8_2_package;
      // 存入日期
      Vue.set(m8_0.row1, 0, buckets_8_2[0].key);
      Vue.set(m8_0.row2, 0, buckets_8_2[1].key);
      Vue.set(m8_0.row3, 0, buckets_8_2[2].key);
      Vue.set(m8_0.row4, 0, buckets_8_2[3].key);
      Vue.set(m8_0.row5, 0, buckets_8_2[4].key);
      Vue.set(m8_0.row6, 0, buckets_8_2[5].key);
      Vue.set(m8_0.row7, 0, buckets_8_2[6].key);

      // 设置title1 -根据 包的（个数）长度
      // 设置title2 -根据 包的（个数）长度
      m8_0.title1 = []; // 初始化
      m8_0.title1.push("订购日期");
      m8_0.title2 = []; // 初始化

      for (
        i_8_2_package = 0;
        // i_8_2_package < length_8_2_package;
        i_8_2_package < 9; // 固定值 x9
        i_8_2_package++
      ) {
        // m8_0.title1.push(buckets_8_2_package[i_8_2_package].key);
        m8_0.title2.push("订购数");
        m8_0.title2.push("收入");
      }
      // title1 固定传入 （后台“包”有不全情况） //以包传 包x9 //以日传 包x7
      let title1_arr = [
        "欢乐家庭VIP包年",
        "欢乐家庭VIP包季",
        "欢乐家庭VIP",
        "影视VIP包年",
        "影视VIP包季",
        "影视VIP",
        "少儿VIP包年",
        "少儿VIP包季",
        "少儿VIP"
      ];
      let title_length9 = 9;
      m8_0.title1.push(
        "欢乐家庭VIP包年",
        "欢乐家庭VIP包季",
        "欢乐家庭VIP",
        "影视VIP包年",
        "影视VIP包季",
        "影视VIP",
        "少儿VIP包年",
        "少儿VIP包季",
        "少儿VIP"
      );

      m8_0.title1.push("合计");
      m8_0.title2.push("订购数");
      m8_0.title2.push("收入");

      //for 天 -》 for 包  （for 天 - 固定了rown，只有一个for）
      // 0~9
      // 1~20
      // 0:0~1 1:2~3  9:19~20
      // n:2n+1~2n+2
      function return_KeyValue(key, index_date) {
        let npn = 0;
        let ni = 0;
        console.log("~~~~~~~~~~~return_KeyValue");
        console.log("~~~~~~~~~~~" + key);
        console.log("~~~~~~~~~~~" + String(index_date));
        console.log("~~~~~~~~~~~");

        try {
          let i_temp_r = 0;
          for (
            i_temp_r = 0;
            // i_temp_r < length_8_2_package;
            i_temp_r < title_length9; //需要用最长的9
            i_temp_r++
          ) {
            if (
              buckets_8_2[index_date].value_added_service_package.buckets
                .length > 0
            ) {
              if (
                buckets_8_2[index_date].value_added_service_package.buckets[
                  i_temp_r
                ].key == key
              ) {
                npn =
                  buckets_8_2[index_date].value_added_service_package.buckets[
                    i_temp_r
                  ].new_paid_num.value;
                ni =
                  buckets_8_2[index_date].value_added_service_package.buckets[
                    i_temp_r
                  ].new_income.value;
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
        return {
          npn: npn,
          ni: ni
        };
      }

      // 数值： 7天固定  对应 9种包固定
      let i_8_temp = 0;
      for (
        i_8_temp = 0;
        // i_8_temp < length_8_2_package;
        i_8_temp < title_length9; // 固定x9
        i_8_temp++
      ) {
        Vue.set(
          m8_0.row1,
          i_8_temp * 2 + 1,
          return_KeyValue(title1_arr[i_8_temp], 0).npn
        );
        Vue.set(
          m8_0.row1,
          i_8_temp * 2 + 2,
          return_KeyValue(title1_arr[i_8_temp], 0).ni
        );
        Vue.set(
          m8_0.row2,
          i_8_temp * 2 + 1,
          return_KeyValue(title1_arr[i_8_temp], 1).npn
        );
        Vue.set(
          m8_0.row2,
          i_8_temp * 2 + 2,
          return_KeyValue(title1_arr[i_8_temp], 1).ni
        );
        Vue.set(
          m8_0.row3,
          i_8_temp * 2 + 1,
          return_KeyValue(title1_arr[i_8_temp], 2).npn
        );
        Vue.set(
          m8_0.row3,
          i_8_temp * 2 + 2,
          return_KeyValue(title1_arr[i_8_temp], 2).ni
        );
        Vue.set(
          m8_0.row4,
          i_8_temp * 2 + 1,
          return_KeyValue(title1_arr[i_8_temp], 3).npn
        );
        Vue.set(
          m8_0.row4,
          i_8_temp * 2 + 2,
          return_KeyValue(title1_arr[i_8_temp], 3).ni
        );
        Vue.set(
          m8_0.row5,
          i_8_temp * 2 + 1,
          return_KeyValue(title1_arr[i_8_temp], 4).npn
        );
        Vue.set(
          m8_0.row5,
          i_8_temp * 2 + 2,
          return_KeyValue(title1_arr[i_8_temp], 4).ni
        );
        Vue.set(
          m8_0.row6,
          i_8_temp * 2 + 1,
          return_KeyValue(title1_arr[i_8_temp], 5).npn
        );
        Vue.set(
          m8_0.row6,
          i_8_temp * 2 + 2,
          return_KeyValue(title1_arr[i_8_temp], 5).ni
        );
        Vue.set(
          m8_0.row7,
          i_8_temp * 2 + 1,
          return_KeyValue(title1_arr[i_8_temp], 6).npn
        );
        Vue.set(
          m8_0.row7,
          i_8_temp * 2 + 2,
          return_KeyValue(title1_arr[i_8_temp], 6).ni
        );
      }

      // Vue.set(
      //   m8_0.row1,
      //   i_8_temp * 2 + 1,
      //   return_KeyValue("欢乐家庭VIP包年", 0).npn
      // );
      // Vue.set(
      //   m8_0.row1,
      //   i_8_temp * 2 + 2,
      //   return_KeyValue("欢乐家庭VIP包年", 0).ni
      // );
      // Vue.set(
      //   m8_0.row2,
      //   i_8_temp * 2 + 1,
      //   return_KeyValue("欢乐家庭VIP包季", 1).npn
      // );
      // Vue.set(
      //   m8_0.row2,
      //   i_8_temp * 2 + 2,
      //   return_KeyValue("欢乐家庭VIP包季", 1).ni
      // );
      // Vue.set(
      //   m8_0.row3,
      //   i_8_temp * 2 + 1,
      //   return_KeyValue("欢乐家庭VIP包季", 2).npn
      // );
      // Vue.set(
      //   m8_0.row3,
      //   i_8_temp * 2 + 2,
      //   return_KeyValue("欢乐家庭VIP包季", 2).ni
      // );
      // Vue.set(
      //   m8_0.row4,
      //   i_8_temp * 2 + 1,
      //   return_KeyValue("欢乐家庭VIP包季", 3).npn
      // );
      // Vue.set(
      //   m8_0.row4,
      //   i_8_temp * 2 + 2,
      //   return_KeyValue("欢乐家庭VIP包季", 3).ni
      // );
      // Vue.set(
      //   m8_0.row5,
      //   i_8_temp * 2 + 1,
      //   return_KeyValue("欢乐家庭VIP包季", 4).npn
      // );
      // Vue.set(
      //   m8_0.row5,
      //   i_8_temp * 2 + 2,
      //   return_KeyValue("欢乐家庭VIP包季", 4).ni
      // );
      // Vue.set(
      //   m8_0.row6,
      //   i_8_temp * 2 + 1,
      //   return_KeyValue("欢乐家庭VIP包季", 5).npn
      // );
      // Vue.set(
      //   m8_0.row6,
      //   i_8_temp * 2 + 2,
      //   return_KeyValue("欢乐家庭VIP包季", 5).ni
      // );
      // Vue.set(
      //   m8_0.row7,
      //   i_8_temp * 2 + 1,
      //   return_KeyValue("欢乐家庭VIP包季", 6).npn
      // );
      // Vue.set(
      //   m8_0.row7,
      //   i_8_temp * 2 + 2,
      //   return_KeyValue("欢乐家庭VIP包季", 6).ni
      // );

      // 横向合计（后台已经解决） - 某天的所有包的和（分为订购数 和 收入）
      Vue.set(
        m8_0.row1,
        title_length9 * 2 + 1,
        buckets_8_2[0].new_paid_num.value
      ); //
      Vue.set(
        m8_0.row1,
        title_length9 * 2 + 2,
        buckets_8_2[0].new_income.value
      ); //
      Vue.set(
        m8_0.row2,
        title_length9 * 2 + 1,
        buckets_8_2[1].new_paid_num.value
      );
      Vue.set(
        m8_0.row2,
        title_length9 * 2 + 2,
        buckets_8_2[1].new_income.value
      );
      Vue.set(
        m8_0.row3,
        title_length9 * 2 + 1,
        buckets_8_2[2].new_paid_num.value
      );
      Vue.set(
        m8_0.row3,
        title_length9 * 2 + 2,
        buckets_8_2[2].new_income.value
      );
      Vue.set(
        m8_0.row4,
        title_length9 * 2 + 1,
        buckets_8_2[3].new_paid_num.value
      );
      Vue.set(
        m8_0.row4,
        title_length9 * 2 + 2,
        buckets_8_2[3].new_income.value
      );
      Vue.set(
        m8_0.row5,
        title_length9 * 2 + 1,
        buckets_8_2[4].new_paid_num.value
      );
      Vue.set(
        m8_0.row5,
        title_length9 * 2 + 2,
        buckets_8_2[4].new_income.value
      );
      Vue.set(
        m8_0.row6,
        title_length9 * 2 + 1,
        buckets_8_2[5].new_paid_num.value
      );
      Vue.set(
        m8_0.row6,
        title_length9 * 2 + 2,
        buckets_8_2[5].new_income.value
      );
      Vue.set(
        m8_0.row7,
        title_length9 * 2 + 1,
        buckets_8_2[6].new_paid_num.value
      );
      Vue.set(
        m8_0.row7,
        title_length9 * 2 + 2,
        buckets_8_2[6].new_income.value
      );

      // // 竖向合计（后台已经解决） - 某包的7天的和（分为订购数 和 收入）
      let buckets_8_2_days =
        wd_dx[2].aggregations.value_added_service_package.buckets;
      let length_8_2_days = buckets_8_2_days.length;
      let i_8_2_days;
      // 设置 row_bottom
      m8_0.row_bottom = [];
      m8_0.row_bottom.push("总计");
      for (i_8_2_days = 0; i_8_2_days < length_8_2_days; i_8_2_days++) {
        m8_0.row_bottom.push(buckets_8_2_days[i_8_2_days].new_paid_num.value);
        m8_0.row_bottom.push(buckets_8_2_days[i_8_2_days].new_income.value);
      }

      // 最右下角的合计
      m8_0.row_bottom.push(wd_dx[2].aggregations.new_paid_num.value);
      m8_0.row_bottom.push(wd_dx[2].aggregations.new_income.value);

      let m8 = [];
      m8.push(m8_0);
      // console.log("~~~~~~~~~~~~m8");
      // console.log(m8);
      vm.m8_data = []; // 初始化
      vm.m8_data.push(m8);
    },
    refresh_api_data(operator_type, week_type) {
      this.users_marketReport(operator_type, week_type);
    },
    users_marketReport(operator_type, week_type) {
      // console.log("users_marketReport");
      let vm = this;
      if (vm.PR_week == "" || vm.PR_week == null || vm.PR_week == undefined) {
        return;
      }
      // let temp_operator = commonTools.operatorConvert(vm.PR_operator);
      let temp_time = commonTools.split_WeeksDays_byDWwr(vm.PR_week);
      let temp;
      function temp_manage(m_operator_type, m_operator) {
        if (operator_type == m_operator_type) {
          if (week_type == "week") {
            temp = {
              operator: String([m_operator]),
              year: temp_time.year,
              // start: temp_time.week,
              start: commonTools.ReturnBeforeWeek(temp_time.week, 1),
              end: temp_time.week
            };
          }
          if (week_type == "week_days") {
            temp = {
              operator: String([m_operator]),
              year: temp_time.year,
              start: temp_time.week_day_start,
              end: temp_time.week_day_end
            };
          }
          if (week_type == "week_days_last") {
            temp = {
              operator: String([m_operator]),
              year: temp_time.year,
              start: commonTools.currentDay_7daysAgoRange(
                temp_time.week_day_start
              ).start,
              end: commonTools.currentDay_7daysAgoRange(temp_time.week_day_end)
                .start
            };
          }
        }
      }
      temp_manage("yd", "移动");
      temp_manage("lt", "联通");
      temp_manage("dx", "电信");

      console.log("~~~~~~~~~~~~~~~~~~~ temp  users_marketReport");
      console.log(temp);
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("operator", temp.operator);
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      formData.append("year", temp.year);

      users_marketReport(formData)
        .then(function(response) {
          // console.log(operator_type + " " + week_type);
          // console.log(response);
          if (week_type == "week") {
            switch (operator_type) {
              case "yd":
                vm.api_data_yd_w = response;
                break;
              case "lt":
                vm.api_data_lt_w = response;
                break;
              case "dx":
                vm.api_data_dx_w = response;
                break;
              default:
                console.log("none!");
            }
          }
          if (week_type == "week_days") {
            switch (operator_type) {
              case "yd":
                vm.api_data_yd_wd = response;
                break;
              case "lt":
                vm.api_data_lt_wd = response;
                break;
              case "dx":
                vm.api_data_dx_wd = response;
                break;
              default:
                console.log("none!");
            }
          }
          if (week_type == "week_days_last") {
            switch (operator_type) {
              case "yd":
                vm.api_data_yd_wdl = response;
                break;
              case "lt":
                vm.api_data_lt_wdl = response;
                break;
              case "dx":
                vm.api_data_dx_wdl = response;
                break;
              default:
                console.log("none!");
            }
          }
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  },
  computed: {
    ...mapGetters(["PR_operator", "PR_week"]),
    ifFormRowShow_yd: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("移动") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifFormRowShow_lt: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("联通") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    },
    ifFormRowShow_dx: {
      get: function() {
        if (this.PR_operator == null || this.PR_operator.length == 0) {
          return true;
        } else {
          if (this.PR_operator.indexOf("电信") > -1) {
            return true;
          }
        }
        return false;
      },
      set: function(newValue) {}
    }
  }
};
</script>
<style scoped>
.viewing_behavior_report {
  height: 500px;
  margin: 14px 0px;
}

.MarketOperationalWeekReport {
  text-align: left;
}
</style>