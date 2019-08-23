<template>
  <div class="MarketOperationalWeekReport height_auto">
    <!-- 市场业务运营数据分析周报 -->
    <el-row class="viewing_behavior_report">
      <el-row class="periodic_report_title m_textalign_c">市场业务运营数据分析周报</el-row>

      <!-- /////////////MOWR_1 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>周用户发展情况
      </el-row>
      <com-MOWR-m1></com-MOWR-m1>
      <!-- /////////////MOWR_2 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>24小时新增用户激活率
      </el-row>
      <com-MOWR-m2></com-MOWR-m2>
      <!-- /////////////MOWR_3 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（移动）
      </el-row>
      <com-MOWR-m3></com-MOWR-m3>
      <!-- /////////////MOWR_4 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（电信）
      </el-row>
      <com-MOWR-m4></com-MOWR-m4>
      <!-- /////////////MOWR_5 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>运营商各市（州）24小时新增激活情况（联通）
      </el-row>
      <com-MOWR-m5></com-MOWR-m5>
      <!-- /////////////MOWR_6 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>停机用户变化情况
      </el-row>
      <com-MOWR-m6></com-MOWR-m6>
      <!-- /////////////MOWR_7 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>销、停机用户变化情况
      </el-row>
      <com-MOWR-m7></com-MOWR-m7>
      <!-- /////////////MOWR_8 -->
      <el-row class="model_title">
        <span class="title_border_left"></span>电信增值业务周发展情况
      </el-row>
      <com-MOWR-m8></com-MOWR-m8>
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
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
.viewing_behavior_report {
  height: 500px;
  margin: 24px 0px;
}

.MarketOperationalWeekReport {
  text-align: left;
}
</style>