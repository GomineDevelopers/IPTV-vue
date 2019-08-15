<template>
  <div class="height_auto">
    <!-- 收视行为开始 -->
    <el-row class="viewing_behavior_report">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视行为
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="24">G+TV用户收视日报表</el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
export default {
  name: 'G_TVUserViewingDayReport',  //G+TV用户收视日报表
  data() {
    return {}
  },
  mounted() {

  }
}
</script>
<style scoped>
.viewing_behavior_report {
  height: 500px;
  margin: 24px 0px;
}
</style>