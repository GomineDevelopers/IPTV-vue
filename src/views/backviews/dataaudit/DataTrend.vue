<template>
  <div class="data_trend">
    <el-col :span="20">
      <!-- 各地市每天开机用户数量图表开始 -->
      <el-row class="data_trend_chart" id="power_user_number">
        <el-row class="model_title">
          <span class="title_border_left"></span>各地市每天开机用户数量
        </el-row>
        <el-row class="chart_body back_white">
          <el-col class="height_auto" :span="24">各地市每天开机用户数量图表</el-col>
        </el-row>
      </el-row>
      <!-- 各地市每天开机用户数量图表结束 -->

      <!-- 各地市每天在线用户数图表开始 -->
      <el-row class="data_trend_chart" id="online_user_number">
        <el-row class="model_title">
          <span class="title_border_left"></span>各地市每天在线用户数
        </el-row>
        <el-row class="chart_body back_white">
          <el-col class="height_auto" :span="24">各地市每天在线用户数图表</el-col>
        </el-row>
      </el-row>
      <!-- 各地市每天在线用户数图表结束 -->

      <!-- 各地市每天每用户心跳频次图表开始 -->
      <el-row class="data_trend_chart" id="heartbeat_frequency">
        <el-row class="model_title">
          <span class="title_border_left"></span>各地市每天每用户心跳频次
        </el-row>
        <el-row class="chart_body back_white">
          <el-col class="height_auto" :span="24">各地市每天每用户心跳频次图表</el-col>
        </el-row>
      </el-row>
      <!-- 各地市每天每用户心跳频次图表结束 -->
    </el-col>
    <el-col :span="4" class="anchor_hyperlinks">
      <el-row>
        <!-- <a href="#boot_log">开机日志</a> -->
        <a
          href="javascript:void(0)"
          class="anchor_link1 avtive_link"
          @click="goAnchor('#power_user_number')"
        >各地市每天开机用户数量</a>
      </el-row>
      <el-row>
        <!-- <a href="#page_access_log">页面访问日志</a> -->
        <a
          href="javascript:void(0)"
          class="anchor_link3"
          @click="goAnchor('#online_user_number')"
        >各地市每天在线用户数</a>
      </el-row>
      <el-row>
        <!-- <a href="#thermodynamic_log">热力图日志</a> -->
        <a
          href="javascript:void(0)"
          class="anchor_link4"
          @click="goAnchor('#heartbeat_frequency')"
        >各地市每天每用户心跳频次</a>
      </el-row>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'DataTrend', //数据趋势
  data() {
    return {

    }
  },
  mounted() {
    $('.backHome_body_main').scroll(function (event) {
      //console.log($('.backHome_body_main').scrollTop())
      let scrollTopHeight = $('.backHome_body_main').scrollTop()
      let power_user_number = document.querySelector('#power_user_number').offsetTop
      let online_user_number = document.querySelector('#online_user_number').offsetTop
      let heartbeat_frequency = document.querySelector('#heartbeat_frequency').offsetTop
      console.log('scrollTopHeight', scrollTopHeight)
      // console.log('power_user_number 0', power_user_number)
      // console.log('online_user_number 0', online_user_number)
      // console.log('heartbeat_frequency 0', heartbeat_frequency)
      if (0 <= scrollTopHeight) {
        console.log("各地市每天开机用户数量图表")
        $(".anchor_link1").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (300 <= scrollTopHeight) {
        $(".anchor_link2").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("各地市每天在线用户数图表")
      }
      if (800 <= scrollTopHeight) {
        $(".anchor_link3").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("各地市每天每用户心跳频次图表")
      }
    })
  },
  methods: {
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let backHome_body_main = document.querySelector('.backHome_body_main')  //外层滚动容器元素
      //console.log("backHome_body_main", backHome_body_main)
      var anchor = document.querySelector(selector)   // 参数为要跳转到的元素id
      //console.log("anchor", anchor)
      backHome_body_main.scrollTop = anchor.offsetTop

      $('.anchor_hyperlinks a').on('click', function () {
        $(this).addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      })
    }
  }
}
</script>
<style scoped>
.data_trend_chart {
  height: 750px;
  margin-bottom: 24px;
}
.anchor_hyperlinks {
  position: fixed;
  right: 0;
  padding-left: 40px;
  text-align: left;
}
.anchor_hyperlinks .el-row {
  margin-bottom: 12px;
}
.anchor_hyperlinks a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.anchor_hyperlinks .avtive_link {
  color: #ff6123;
}
</style>