<template>
  <div class="periodic_report">
    <!-- 条件筛选开始 -->
    <el-row class="option_select periodic_report">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <com-optionselectPR></com-optionselectPR>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 收视行为开始 -->
    <el-row class="viewing_behavior_report">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视行为
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="24">
          <com-viewingbehaviorPR></com-viewingbehaviorPR>
        </el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
import OptionSelectPR from "../backcoms/periodicreport/OptionSelectPR";
import ViewingBehaviorPR from "../backcoms/periodicreport/ViewingBehaviorPR";

export default {
  name: "PeriodicReport", //定期报告
  components: {
    "com-optionselectPR": OptionSelectPR,
    "com-viewingbehaviorPR": ViewingBehaviorPR
  }
};
</script>
<style scoped>
.periodic_report {
  height: 388px;
}
.viewing_behavior_report {
  height: 500px;
  margin: 24px 0px;
}
</style>

