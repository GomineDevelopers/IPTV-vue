<template>
  <div class="periodic_report">
    <!-- 条件筛选开始 -->
    <el-row class="option_select periodic_report">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">
        <com-optionselectPR @setRoute="setRouteView"></com-optionselectPR>
      </el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 各个报告的页面路由入口 -->
    <router-view />
  </div>
</template>
<script>
import OptionSelectPR from "../backcoms/periodicreport/OptionSelectPR"  //定期报告条件选择组件

export default {
  name: "PeriodicReport", //定期报告
  components: {
    "com-optionselectPR": OptionSelectPR,
  },
  data() {
    return {
      reportName: "专题专区数据报告",
      operator: "总体"
    }
  },
  mounted() {

  },
  methods: {
    //从头部条件筛选子页面传过来用户所选择的报告，条件，执行下面操作
    setRouteView(data) {
      // console.log(data, '~~~')
      this.$router.push({ path: data.routerLink })  //接受头部组件传的数据报表参数，切换对应路由
    }
  }
};
</script>
<style scoped>
.periodic_report {
  height: 430px;
}
</style>

