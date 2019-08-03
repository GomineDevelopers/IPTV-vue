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

    <!-- 收视行为开始 -->
    <el-row class="viewing_top15">
      <el-row class="model_title">
        <span class="title_border_left"></span>收视TOP15
      </el-row>
      <el-row class="chart_body back_white">
        <el-row class="viewing_top15_detail">
          <el-row class="viewing_top_title">
            <el-col :span="3" :offset="2">排名</el-col>
            <el-col :span="7">卫视</el-col>
            <el-col :span="6">节目</el-col>
            <el-col :span="6">次数（万）</el-col>
          </el-row>
          <el-row class="programsTOP_list" id="viewing_top15_body">
            <el-row class="viewing_top_list" v-for="(item,index) in viewingTopList" :key="index">
              <el-col :span="3" :offset="2">
                <span>{{item.topNum}}</span>
              </el-col>
              <el-col :span="7">
                <span>{{item.programName}}</span>
              </el-col>
              <el-col :span="6">
                <span>{{item.programSource}}</span>
              </el-col>
              <el-col :span="6" class="hotWidth">
                <span :style="{width:item.hot}">{{item.playNum}}</span>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
export default {
  name: 'UserViewingBehavior', //用户收视行为
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
    this.scrollLoopUp('viewing_top15_body')
  },
  methods: {
    scrollLoopUp: function (id) {
      var scrollBox = document.getElementById(id)
      var lineHeight = 42.5
      var time = 50;
      scrollBox.innerHTML += scrollBox.innerHTML;
      scrollBox.scrollTop = 0;
      var timer;
      function scrollMove() {
        scrollBox.scrollTop++;
        timer = setInterval(scrollUp, time);
      }
      function scrollUp() {
        if (scrollBox.scrollTop % lineHeight == 0) {//滚动一行后，延时2秒
          clearInterval(timer)
          setTimeout(scrollMove, 2000)
        } else {
          scrollBox.scrollTop++
          if (scrollBox.scrollTop >= scrollBox.scrollHeight / 2) { //判断滚动高度,当滚动高度大于scrollBox本身的高度时，使其回到原点重新滚动 
            scrollBox.scrollTop = 0
          }
        }
      }
      setTimeout(scrollMove, 2000)
    }
  }
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

/* 节目收视 top15开始 */
.viewing_top15_detail {
  padding: 0 1px;
  font-size: 12px;
  color: #dedede;
  height: 100%;
  overflow: hidden;
}
.viewing_top15_detail .viewing_top_body {
  width: 100%;
}
.viewing_top15_detail .el-col {
  text-align: left !important;
}
.viewing_top_title {
  padding-left: 5px;
  color: #333;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
}
.programsTOP_list {
  height: calc(100% - 45px);
  color: #999;
  padding-left: 8px;
  overflow: hidden;
}
.programsTOP_list .viewing_top_list {
  height: 42.5px;
  line-height: 42.5px;
  /* height: calc(100% / 10); */
  /* border-bottom: 1px solid rgba(147, 147, 147, 0.2); */
}
.programsTOP_list .viewing_top_list .el-col {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.programsTOP_list .viewing_top_list:nth-child(1) .el-col:nth-child(1) {
  color: #ff4c75;
}
.programsTOP_list .viewing_top_list:nth-child(2) .el-col:nth-child(1) {
  color: #ff8859;
}
.programsTOP_list .viewing_top_list:nth-child(3) .el-col:nth-child(1) {
  color: #ffaa89;
}
.programsTOP_list .viewing_top_list:nth-child(16) .el-col:nth-child(1) {
  color: #ff4c75;
}
.programsTOP_list .viewing_top_list:nth-child(17) .el-col:nth-child(1) {
  color: #ff8859;
}
.programsTOP_list .viewing_top_list:nth-child(18) .el-col:nth-child(1) {
  color: #ffaa89;
}
.programsTOP_list .viewing_top_list .hotWidth {
  /* width: 100%; */
  text-align: right !important;
}
.programsTOP_list .viewing_top_list .hotWidth span {
  color: #fff;
  height: 12px;
  line-height: 12px;
  background: #ff6123;
  border-radius: 2px;
  text-align: center;
}
/* 节目收视排名 top15结束 */
</style>


