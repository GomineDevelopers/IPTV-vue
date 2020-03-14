<template>
  <div class="height_auto">
    <el-row class="hot_topics_control">
      <el-row class="model_title">
        <span class="title_border_left"></span>大屏管理
      </el-row>
      <el-row class="hot_topics_list chart_body back_white">
        <p class="screen_info">选择大屏显示类型：</p>
        <el-row class="programInput_elrow">
          <!-- <el-button class="search_btn" @click="BigScreenChoose(0)">综合</el-button>
          <el-button class="search_btn" @click="BigScreenChoose(1)">移动</el-button>
          <el-button class="search_btn" @click="BigScreenChoose(2)">联通</el-button>
          <el-button class="search_btn" @click="BigScreenChoose(3)">电信</el-button>-->
          <el-switch
            style="display: block"
            v-model="switch_value1"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="综合"
            inactive-text
            @change="BigScreenChoose($event,0)"
          ></el-switch>
          <el-switch
            style="display: block"
            v-model="switch_value2"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="移动"
            inactive-text
            @change="BigScreenChoose($event,1)"
          ></el-switch>
          <el-switch
            style="display: block"
            v-model="switch_value3"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="联通"
            inactive-text
            @change="BigScreenChoose($event,2)"
          ></el-switch>
          <el-switch
            style="display: block"
            v-model="switch_value4"
            active-color="#ff6123"
            inactive-color="rgb(235, 225, 215)"
            active-text="电信"
            inactive-text
            @change="BigScreenChoose($event,3)"
          ></el-switch>
        </el-row>
        <div class="currentP">
          当前大屏显示为：
          <span class="current">{{currentStatus}}</span>
        </div>
        <div class="currentP2">
          <!-- <a href="/" class="go_home">点击跳转大屏页面</a> -->
          <p class="goHome" @click="goHome()">点击跳转大屏页面</p>
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
    let temp_status = this.$Utils.getCookieCry("bigscreenchoose");
    // console.log("页面显示初始值", temp_status)
    if (temp_status == "综合") {
      this.switch_value1 = true;
      this.switch_value2 = false;
      this.switch_value3 = false;
      this.switch_value4 = false;
      this.currentStatus = temp_status;
    } else if (temp_status == "移动") {
      this.switch_value1 = false;
      this.switch_value2 = true;
      this.switch_value3 = false;
      this.switch_value4 = false;
      this.currentStatus = temp_status;
    } else if (temp_status == "联通") {
      this.switch_value1 = false;
      this.switch_value2 = false;
      this.switch_value3 = true;
      this.switch_value4 = false;
      this.currentStatus = temp_status;
    } else if (temp_status == "电信") {
      (this.switch_value1 = false), (this.switch_value2 = false);
      this.switch_value3 = false;
      this.switch_value4 = true;
      this.currentStatus = temp_status;
    } else if (temp_status == " " || temp_status == undefined) {
      this.switch_value1 = true;
      this.switch_value2 = false;
      this.switch_value3 = false;
      this.switch_value4 = false;
      this.currentStatus = "综合";
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" }); //接受头部组件传的数据报表参数，切换对应路由
    },
    BigScreenChoose($event, index) {
      // console.log($event);
      if (index == 0) {
        this.$Utils.setCookieCry("bigscreenchoose", "综合", 100);
        if ($event) {
          // console.log("开启综合");
          (this.switch_value2 = false),
            (this.switch_value3 = false),
            (this.switch_value4 = false);
        } else {
          // console.log("关闭综合");
        }
      }
      if (index == 1) {
        this.$Utils.setCookieCry("bigscreenchoose", "移动", 100);
        if ($event) {
          // console.log("开启移动");
          (this.switch_value1 = false),
            (this.switch_value3 = false),
            (this.switch_value4 = false);
        } else {
          // console.log("关闭移动");
        }
      }
      if (index == 2) {
        this.$Utils.setCookieCry("bigscreenchoose", "联通", 100);
        if ($event) {
          // console.log("开启联通");
          (this.switch_value1 = false),
            (this.switch_value2 = false),
            (this.switch_value4 = false);
        } else {
          // console.log("关闭联通");
        }
      }
      if (index == 3) {
        this.$Utils.setCookieCry("bigscreenchoose", "电信", 100);
        if ($event) {
          // console.log("开启电信");
          (this.switch_value1 = false),
            (this.switch_value2 = false),
            (this.switch_value3 = false);
        } else {
          // console.log("关闭电信");
        }
      }
      this.currentStatus = this.$Utils.getCookieCry("bigscreenchoose");
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
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.programInput_elrow .el-switch {
  margin-right: 30px;
}
.programInput_elrow .search_btn {
  width: 119px;
  height: 40px;
  border-radius: 4px;
  background-color: #ff6123;
  color: #ffffff;
  margin: 0px;
  padding: 0px;
  margin: 20px 6px;
}
.screen_info {
  color: #333333;
  text-align: left;
  font-size: 15px;
  margin: 10px 0px;
  margin-left: 8px;
  font-weight: bold;
}
.currentP {
  color: #333333;
  text-align: left;
  margin-top: 10px;
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
.currentP2 a {
  color: #278bea;
}
.current {
  display: inline-block;
  color: #ff6123;
}
.go_home {
  font-size: 15px;
}
.goHome {
  text-decoration: underline;
  color: #409eff;
  display: inline-block;
}
.goHome:hover{
  cursor: pointer;
}
</style>
