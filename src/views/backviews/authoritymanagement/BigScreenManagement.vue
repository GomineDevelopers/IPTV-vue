<template>
  <div class="height_auto">
    <el-row class="hot_topics_control">
      <el-row class="model_title">
        <span class="title_border_left"></span>大屏管理
      </el-row>
      <el-row class="hot_topics_list chart_body back_white">
        <p class="screen_info">选择大屏显示类型：</p>
        <el-row class="programInput_elrow">
          <el-button class="search_btn" @click="BigScreenChoose(0)">综合</el-button>
          <el-button class="search_btn" @click="BigScreenChoose(1)">移动</el-button>
          <el-button class="search_btn" @click="BigScreenChoose(2)">联通</el-button>
          <el-button class="search_btn" @click="BigScreenChoose(3)">电信</el-button>
          <!-- <el-switch
            style="display: block"
            v-model="switch_value1"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="综合"
            inactive-text
            @change="BigScreenChoose(0)"
          ></el-switch>
          <el-switch
            style="display: block"
            v-model="switch_value2"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="移动"
            inactive-text
            @change="BigScreenChoose(1)"
          ></el-switch>
          <el-switch
            style="display: block"
            v-model="switch_value3"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="联通"
            inactive-text
            @change="BigScreenChoose(2)"
          ></el-switch>
          <el-switch
            style="display: block"
            v-model="switch_value4"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="电信"
            inactive-text
            @change="BigScreenChoose(3)"
          ></el-switch>-->
        </el-row>
        <div class="currentP">
          当前大屏显示为：
          <p class="current">{{currentStatus}}</p>。
        </div>
        <div class="currentP2">
          <a href="/" class="go_home">点击跳转大屏页面</a>
        </div>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "BigScreenManagement", //热点监控
  data() {
    return {
      currentStatus: "综合",
      switch_value1: true,
      switch_value2: false,
      switch_value3: false,
      switch_value4: false
    };
  },
  mounted() {
    //   初始化
    this.currentStatus = this.$commonTools.getCookieCry("bigscreenchoose");
  },
  methods: {
    // BigScreenChoose(event, index) {
    BigScreenChoose(index) {
      //   console.log("~~~~~~event:");
      //   console.log(event);
      if (index == 0) {
        this.$commonTools.setCookieCry("bigscreenchoose", "综合", 100);
      }
      if (index == 1) {
        this.$commonTools.setCookieCry("bigscreenchoose", "移动", 100);
      }
      if (index == 2) {
        this.$commonTools.setCookieCry("bigscreenchoose", "联通", 100);
      }
      if (index == 3) {
        this.$commonTools.setCookieCry("bigscreenchoose", "电信", 100);
      }
      this.currentStatus = this.$commonTools.getCookieCry("bigscreenchoose");
    }
  }
};
</script>
<style scoped>
.hot_topics_control {
  height: 280px;
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
/* ----------- */
.programInput_elrow {
  height: 35px;
  line-height: 35px;
  text-align: left;
}
.programInput_elrow .search_btn {
  width: 119px;
  height: 32px;
  border-radius: 4px;
  background-color: #ff6123;
  color: #ffffff;
  /* line-height: 40px; */
  margin: 0px;
  padding: 0px;
  margin: 20px 6px;
}
.screen_info {
  color: #333333;
  text-align: left;
  font-size: 15px;
  margin: 0;
  margin-left: 8px;
  font-weight: bold;
}
.currentP {
  color: #333333;
  text-align: left;
  margin-top: 24px;
  font-size: 15px;
  margin-left: 8px;
  font-weight: bold;
}
.currentP2 {
  color: #333333;
  text-align: left;
  margin-top: 46px;
  font-size: 15px;
  margin-left: 8px;
}
.current {
  display: inline-block;
  color: #ff6123;
}
.go_home {
  font-size: 15px;
}
</style>

<style>
</style>