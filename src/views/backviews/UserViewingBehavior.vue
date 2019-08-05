<template>
  <div class="user_viewing_behavior">
    <!-- 条件筛选开始 -->
    <el-row class="option_select">
      <el-row class="model_title">
        <span class="title_border_left"></span>条件筛选
      </el-row>
      <el-row class="chart_body back_white">条件.......</el-row>
    </el-row>
    <!-- 条件筛选结束 -->

    <!-- 收视行为开始 -->
    <el-row class="viewing_behavior">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视行为
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="12">收视行为图表1</el-col>
        <el-col class="height_auto" :span="12">收视行为图表2</el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->

    <!-- 收视TOP开始 -->
    <el-row class="viewing_top15">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视TOP15
      </el-row>
      <el-row class="chart_body back_white viewing_top15_list">
        <user-viewing-behavior-top :viewingTopList="viewingTopList"></user-viewing-behavior-top>
      </el-row>
    </el-row>
    <!-- 收视TOP结束 -->
  </div>
</template>
<script>
import UserViewingBehaviorTOP from '@/views/backcoms/userviewingbehavior/UserViewingBehaviorTOP';
export default {
  name: 'UserViewingBehavior', //用户收视行为
  components: {
    "user-viewing-behavior-top": UserViewingBehaviorTOP
  },
  data() {
    return {
      viewingTopList: [
        { topNum: 1, programName: '疯狂的外星人', programSource: '电影', hot: '90%', playNum: '12.3' },
        { topNum: 2, programName: '熊出没.原始', programSource: '少儿', hot: '85%', playNum: '11.2' },
        { topNum: 3, programName: '流浪地球', programSource: '电影', hot: '83%', playNum: '10.3' },
        { topNum: 4, programName: '人间.喜剧', programSource: '电影', hot: '80%', playNum: '10.1' },
        { topNum: 5, programName: '白发', programSource: '电视剧', hot: '78%', playNum: '9.5' },
        { topNum: 6, programName: '反贪风暴', programSource: '电影', hot: '73%', playNum: '9.2' },
        { topNum: 7, programName: '一出好戏', programSource: '电影', hot: '70%', playNum: '9.0' },
        { topNum: 8, programName: '拜托了冰箱', programSource: '综艺', hot: '68%', playNum: '8.7' },
        { topNum: 9, programName: '极限挑战', programSource: '真人秀', hot: '64%', playNum: '8.5' },
        { topNum: 10, programName: '陈情令', programSource: '电视剧', hot: '60%', playNum: '8.0' },
        { topNum: 11, programName: '反贪风暴', programSource: '电影', hot: '56%', playNum: '7.5' },
        { topNum: 12, programName: '一出好戏', programSource: '电影', hot: '53%', playNum: '7.0' },
        { topNum: 13, programName: '拜托了冰箱', programSource: '综艺', hot: '50%', playNum: '6.8' },
        { topNum: 14, programName: '极限挑战', programSource: '真人秀', hot: '45%', playNum: '6.3' },
        { topNum: 15, programName: '陈情令', programSource: '电视剧', hot: '40%', playNum: '6.0' }
      ]
    }
  },
  mounted() {
  },

}
</script>
<style scoped>
.option_select {
  height: 342px;
}
.viewing_behavior {
  height: 500px;
  margin: 24px 0px;
}
.viewing_top15 {
  height: 520px;
  margin-bottom: 50px;
}
</style>


