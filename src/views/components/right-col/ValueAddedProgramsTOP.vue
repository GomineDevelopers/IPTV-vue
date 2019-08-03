<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>增值节目TOP
    </el-row>
    <el-row id="value_added_programsTOP">
      <el-row class="viewing_top_title">
        <el-col :span="3">排名</el-col>
        <el-col :span="9">节目名称</el-col>
        <el-col :span="6">节目来源</el-col>
        <el-col :span="6">热度</el-col>
      </el-row>
      <el-row id="ValueProgramsTOP_list">
        <el-row class="viewing_top_list" v-for="(item,index) in viewingTopList" :key="index">
          <el-col :span="3">
            <span>{{item.topNum}}</span>
          </el-col>
          <el-col :span="9">
            <span>{{item.programName}}</span>
          </el-col>
          <el-col :span="6">
            <span>{{item.programSource}}</span>
          </el-col>
          <el-col :span="6" class="hotWidth">
            <span :style="{width:item.hot}"></span>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ValueAddedProgramsTOP',  //增值节目TOP组件
  data() {
    return {
      viewingTopList: [
        { topNum: 1, programName: '疯狂的外星人', programSource: '电影', hot: '80%' },
        { topNum: 2, programName: '熊出没.原始', programSource: '少儿', hot: '70%' },
        { topNum: 3, programName: '流浪地球', programSource: '电影', hot: '50%' },
        { topNum: 4, programName: '人间.喜剧', programSource: '电影', hot: '45%' },
        { topNum: 5, programName: '白发', programSource: '电视剧', hot: '34%' },
        { topNum: 6, programName: '反贪风暴', programSource: '电影', hot: '28%' },
        { topNum: 7, programName: '一出好戏', programSource: '电影', hot: '26%' },
        { topNum: 8, programName: '拜托了冰箱', programSource: '综艺', hot: '20%' },
        { topNum: 9, programName: '极限挑战', programSource: '真人秀', hot: '18%' },
        { topNum: 10, programName: '陈情令', programSource: '电视剧', hot: '8%' }
      ]
    }
  },
  mounted() {
    this.scrollLoopUp('ValueProgramsTOP_list')
  },
  methods: {
    scrollLoopUp: function (id) {
      var scrollBox = document.getElementById(id)
      var lineHeight = scrollBox.clientHeight / 7
      //var lineHeight = 35
      var time = 100;
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
#value_added_programsTOP {
  padding: 0rem 0.1rem;
  font-size: 0.12rem;
  color: #dedede;
  height: calc(100% - 0.3rem);
  overflow: hidden;
}
#value_added_programsTOP .viewing_top_body {
  width: 100%;
}
#value_added_programsTOP .el-col {
  text-align: left !important;
}
.viewing_top_title {
  padding-left: 0.05rem;
  color: #94b3e7;
  height: 0.28rem;
  line-height: 0.28rem;
  border-bottom: 1px solid #fff;
}
#ValueProgramsTOP_list {
  padding-left: 0.08rem;
  height: calc(100% - 0.28rem);
  overflow: hidden;
}
#ValueProgramsTOP_list .viewing_top_list {
  height: calc(100% / 7);
  border-bottom: 1px solid rgba(147, 147, 147, 0.2);
}
#ValueProgramsTOP_list .viewing_top_list .el-col {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
#ValueProgramsTOP_list .viewing_top_list:nth-child(1) .el-col:nth-child(1) {
  color: #ff4c75;
}
#ValueProgramsTOP_list .viewing_top_list:nth-child(2) .el-col:nth-child(1) {
  color: #f8e71c;
}
#ValueProgramsTOP_list .viewing_top_list:nth-child(3) .el-col:nth-child(1) {
  color: #ff8964;
}
#ValueProgramsTOP_list .viewing_top_list:nth-child(11) .el-col:nth-child(1) {
  color: #ff4c75;
}
#ValueProgramsTOP_list .viewing_top_list:nth-child(12) .el-col:nth-child(1) {
  color: #f8e71c;
}
#ValueProgramsTOP_list .viewing_top_list:nth-child(13) .el-col:nth-child(1) {
  color: #ff8964;
}
#ValueProgramsTOP_list .viewing_top_list .hotWidth {
  text-align: right !important;
}
#ValueProgramsTOP_list .viewing_top_list .hotWidth span {
  height: 0.06rem;
  background: linear-gradient(135deg, #ff8e63 0%, #ff4777 100%);
  border-radius: 4px;
}
</style>


