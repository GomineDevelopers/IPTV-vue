<template>
  <div class="abnormal_value">
    <!-- 异常值图表开始 -->
    <el-row class="abnormal_value_body">
      <el-row class="model_title">
        <span class="title_border_left"></span>各地市每天用户开机次数
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="24">各地市每天用户开机次数图表</el-col>
      </el-row>
    </el-row>
    <!-- 异常值图表结束 -->
  </div>
</template>
<script>
export default {
  name: 'AbnormalValue', //数据异常值
}
</script>
<style scoped>
.abnormal_value_body {
  height: 750px;
}
</style>