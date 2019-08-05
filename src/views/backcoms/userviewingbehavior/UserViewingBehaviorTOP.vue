<template>
  <div class="user_viewing_behavior_top height_auto">
    <!-- 收视行为开始 -->
    <el-row class="height_auto">
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
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
export default {
  name: 'UserViewingBehaviorTOP', //用户收视行为\
  props: {
    viewingTopList: {
      type: Array,
    }
  },
  data() {
    return {
      viewingTopList: this.props.viewingTopList
    }
  },
  mounted() {
    //console.log(this.props.viewingTopList)
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
.user_viewing_behavior_top {
  height: 100%;
  overflow: hidden;
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