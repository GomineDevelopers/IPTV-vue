<template>
  <div class="height_auto">
    <!-- 收视行为开始 -->
    <el-row class="hot_topics_control">
      <el-row class="model_title">
        <span class="title_border_left"></span>微博热搜
      </el-row>
      <el-row class="hot_topics_list chart_body back_white">
        <el-col class="hot_topics_list_date" :span="4">{{date}}</el-col>
        <el-col
          class="hot_topics_list_content"
          :span="10"
          v-for="(item,index) in HotSearchList"
          :key="index"
        >
          <el-row class="hot_time">热搜榜&nbsp;&nbsp;{{item.time}}</el-row>
          <el-row>
            <i class="iconfont up_icon">&#xe673;</i>
            {{item.hotName}}
          </el-row>
          <el-row v-for="(list,index2) in item.articleList" :key="index2+'a'">{{index2+1}}、{{list}}</el-row>
        </el-col>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
export default {
  name: 'HotTopicsControl', //热点监控
  data() {
    return {
      date: "2019-07-22",
      HotSearchList: [
        {
          time: "12:00",
          hotName: "人类月球日",
          articleList: [
            '韩商言佟年分手 ',
            'by2零星',
            '月球表Moonwatch',
            '带火厦门六中合唱团的老师走了',
            '周杰伦粉丝叫阿信打榜',
            '刺伤任达华的嫌犯有精神障碍',
            '珍珠奶茶润唇膏',
            '针孔摄像头画质竟是4k高清的',
            '章莹颖案被告监狱生活',
            '11条金融业对外开放措施',
          ]
        },
        {
          time: "20:00",
          hotName: "人类月球日",
          articleList: [
            '韩商言佟年分手 ',
            'by2零星',
            '月球表Moonwatch',
            '带火厦门六中合唱团的老师走了',
            '周杰伦粉丝叫阿信打榜',
            '刺伤任达华的嫌犯有精神障碍',
            '珍珠奶茶润唇膏',
            '针孔摄像头画质竟是4k高清的',
            '章莹颖案被告监狱生活',
            '11条金融业对外开放措施',
          ]
        },
      ]
    }
  }
}
</script>
<style scoped>
.hot_topics_control {
  height: 550px;
}
.hot_topics_list_date {
  font-size: 14px;
  color: #999999;
  padding-left: 10px;
  text-align: left;
  line-height: 40px;
}
.hot_topics_list_content {
  text-align: left;
  font-size: 14px;
  color: #333333;
  text-align: left;
  line-height: 40px;
}
.hot_time {
  font-size: 16px;
  color: #ff4800;
  font-weight: bold;
}
.hot_topics_list_content .up_icon {
  color: #ff4800;
  font-size: 16px;
}
</style>
