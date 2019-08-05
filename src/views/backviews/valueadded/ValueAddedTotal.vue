<template>
  <div class="value_added_total">
    <!-- 条件筛选开始 -->
    <el-row class="value_added_option_select epg">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">条件.......</el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 用户转化开始 -->
    <el-row class="user_conversion">
      <el-row class="model_title">
        <span class="title_border_left"></span>用户转化
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="12">111</el-col>
        <el-col class="height_auto" :span="12">222</el-col>
      </el-row>
    </el-row>
    <!-- 用户转化结束 -->

    <!-- 订购用户开始 -->
    <el-row class="subscribers">
      <el-row class="model_title">
        <span class="title_border_left"></span>订购用户
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="12">111</el-col>
        <el-col class="height_auto" :span="12">222</el-col>
      </el-row>
    </el-row>
    <!-- 订购用户结束 -->
  </div>
</template>
<script>
export default {
  name: 'ValueAddedTotal', //增值业务总览
}
</script>
<style scoped>
.value_added_option_select {
  height: 250px;
}
/* 用户转化开始 */
.user_conversion {
  height: 422px;
  margin: 24px 0px;
}
/* 用户转化结束 */

/* 订购用户开始 */
.subscribers {
  height: 422px;
  margin-bottom: 50px;
}
/* 订购用户结束*/
</style>
