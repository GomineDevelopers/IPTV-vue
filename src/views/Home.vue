<template>
  <div class="home" :style="bodyBgm">
    <el-row justify="space-between" class="container">
      <el-col :span="4" class="left_col">
        <!-- 订购用户数开始 -->
        <el-row class="height_33vh">
          <subscriber-number></subscriber-number>
        </el-row>
        <el-row class="height_33vh left_middle_row">
          <!-- 订购数据开始 -->
          <order-data></order-data>
        </el-row>
        <el-row class="height_33vh">
          <!-- 忠诚用户 -->
          <loyal-user></loyal-user>
        </el-row>
      </el-col>
      <el-col :span="16" class="middle_col">
        <div class="middle_col_container">
          <!-- 顶部title img -->
          <el-row class="margin_bottom middle_title">
            <el-col v-show="ifAllShow" :span="6">&nbsp;</el-col>
            <el-col v-show="ifAllShow" :span="12">
              <div id="main_title_id1" class="main_title">{{bigScreenTitle}}</div>
              <img id="m_head_img1" src="@/assets/headtest.png" />
            </el-col>
            <el-col v-show="!ifAllShow" :span="4">&nbsp;</el-col>
            <el-col v-show="!ifAllShow" :span="14">
              <div id="main_title_id2" class="main_title">{{bigScreenTitle}}</div>
              <img id="m_head_img2" src="@/assets/headtest2.png" />
            </el-col>
            <el-col :span="6">
              <p class="home_date1">数据截止日期：</p>
              <p class="home_date2">2019.07.31</p>
            </el-col>
          </el-row>
          <!-- 在册数 -->
          <el-row class="margin_bottom middle_user_number">
            <registered-user-info v-bind:value_p="value_p"></registered-user-info>
          </el-row>
          <el-row class="margin_bottom middle_view_user">
            <el-col class="map_left_col" :span="6">
              <!-- 新增用户户数 -->
              <el-row class="view_user_chart">
                <new-user-num></new-user-num>
              </el-row>
              <!-- 收视用户 -->
              <el-row class="add_user_chart">
                <viewing-user></viewing-user>
              </el-row>
            </el-col>
            <el-col :span="12" class="middle_map_col">
              <!-- <el-row class="middle_main_map">地图625px</el-row> -->
              <el-row class="middle_main_map">
                <!-- 地图625px -->
                <thermodynamic-chart v-bind:value_p="value_p"></thermodynamic-chart>
              </el-row>
            </el-col>
            <el-col class="map_right_col" :span="6">
              <!-- 收视TOP -->
              <el-row class="view_top_chart">
                <viewing-top></viewing-top>
              </el-row>
              <!-- 本土原创节目 -->
              <el-row class="local_originality_chart">
                <local-original-programmes></local-original-programmes>
              </el-row>
            </el-col>
          </el-row>
          <el-row class="middle_trend">
            <el-col :span="12">
              <user-development-trend></user-development-trend>
            </el-col>
            <el-col :span="12">
              <retention_and_activation></retention_and_activation>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="4" class="right_col">
        <el-row class="height_33vh">
          <!-- 增值节目TOP -->
          <value-added-programsTOP></value-added-programsTOP>
        </el-row>
        <el-row class="height_33vh left_middle_row">
          <!-- 专区节目 -->
          <!-- <zone-programmes></zone-programmes> -->
          <!-- 贵州频道 -->
          <guizhou-channel></guizhou-channel>
        </el-row>
        <el-row class="height_33vh">
          <!-- 媒资数据 -->
          <media-assets-data></media-assets-data>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "@/styles/common.css";
import SubscriberNumber from "@/views/components/left-col/SubscriberNumber"; //订购用户数组件
import OrderData from "@/views/components/left-col/OrderData"; //订购数据组件
import LoyalUser from "@/views/components/left-col/LoyalUser"; //忠诚用户组件组件
import RegisteredUserInfo from "@/views/components/middle-col/RegisteredUserInfo"; //在册用户组件
import NewUserNum from "@/views/components/middle-col/NewUserNum"; //新增用户组件
import ViewingUser from "@/views/components/middle-col/ViewingUser"; //收视用户组件
import ViewingTop from "@/views/components/middle-col/ViewingTop"; //收视Top组件
import LocalOriginalProgrammes from "@/views/components/middle-col/LocalOriginalProgrammes"; //本土原创节目组件
import UserDevelopmentTrend from "@/views/components/middle-col/UserDevelopmentTrend"; //用户发展趋势组件
import RetentionAndActivation from "@/views/components/middle-col/RetentionAndActivation"; //留存率和激活率组件
import ValueAddedProgramsTOP from "@/views/components/right-col/ValueAddedProgramsTOP"; //增值节目TOP组件

import ZoneProgrammes from "@/views/components/right-col/ZoneProgrammes"; //专区节目组件MediaAssetsData
// 专区节目改成贵州频道
import GuizhouChannel from "@/views/components/right-col/GuizhouChannel"; //贵州频道收视Top横向-双条形图

import MediaAssetsData from "@/views/components/right-col/MediaAssetsData"; //媒资数据组件

import ThermodynamicChart from "@/views/components/middle-col/ThermodynamicChart"; // 热力图

export default {
  name: "home",
  components: {
    "subscriber-number": SubscriberNumber,
    "order-data": OrderData,
    "loyal-user": LoyalUser,
    "registered-user-info": RegisteredUserInfo,
    "new-user-num": NewUserNum,
    "viewing-user": ViewingUser,
    "viewing-top": ViewingTop,
    "local-original-programmes": LocalOriginalProgrammes,
    "user-development-trend": UserDevelopmentTrend,
    retention_and_activation: RetentionAndActivation,
    "value-added-programsTOP": ValueAddedProgramsTOP,
    "zone-programmes": ZoneProgrammes,
    "guizhou-channel": GuizhouChannel,
    "media-assets-data": MediaAssetsData,
    "thermodynamic-chart": ThermodynamicChart
  },
  data() {
    return {
      bodyBgm: {
        backgroundImage: "url(" + require("@/assets/bg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      value_p: 0, //计时器
      bigScreenTitle: "贵州省广电新媒体用户行为分析",
      ifAllShow: true
    };
  },
  mounted() {
    setInterval(this.get, 1000);

    this.drawLine();
    let temp_status = this.$commonTools.getCookieCry("bigscreenchoose");
    if (temp_status == null || temp_status == undefined || temp_status == "") {
      this.bigScreenTitle = "贵州省广电新媒体用户行为分析";
    } else {
      if (temp_status == "综合") {
        this.bigScreenTitle = "贵州省广电新媒体用户行为分析";
        this.ifAllShow = true;
        document.getElementById("main_title_id1").style.width = "5.76rem";
    
      }
      if (temp_status == "移动") {
        this.bigScreenTitle = "贵州省广电新媒体移动用户行为分析";
        this.ifAllShow = false;
        document.getElementById("main_title_id2").style.width = "6.76rem";
     
      }
      if (temp_status == "联通") {
        this.bigScreenTitle = "贵州省广电新媒体联通用户行为分析";
        this.ifAllShow = false;
        document.getElementById("main_title_id2").style.width = "6.76rem";
       
      }
      if (temp_status == "电信") {
        this.bigScreenTitle = "贵州省广电新媒体电信用户行为分析";
        this.ifAllShow = false;
        document.getElementById("main_title_id2").style.width = "6.76rem";

      }
    }
  },
  methods: {
    drawLine() {},
    get() {
      if (this.value_p >= 19) {
        this.value_p = 0;
      } else {
        this.value_p++;
      }
    }
  }
};
</script>
<style scoped>
/* 外层高度开始 */
.home {
  height: calc(100% - 0.36rem);
  padding: 0.24rem 0.06rem 0.12rem 0.06rem;
}
.left_col,
.middle_col,
.right_col,
.container {
  height: 100%;
}
/* 外层高度结束 */
.middle_col {
  padding: 0rem 0.12rem;
}
.left_col .left_middle_row,
.right_col .left_middle_row {
  margin: 0.12rem 0px;
}

/* 左右两侧三块高度设置 */
.height_33vh {
  height: calc((100% - 0.24rem) / 3);
  /* border: 0.01rem solid #ccc; */
}

/* 中间顶部 */
.middle_title {
  height: 0.61rem;
  /* border: 0.01rem solid #f0f0f0; */
}
/* .middle_title img {
  width: 5.56rem;
  height: 0.61rem;
} */

.middle_title img {
  width: 5.56rem;
  height: 0.3rem;
}
.home .main_title {
  width: 5.76rem;
  height: 0.35rem;
  letter-spacing: 0.13rem;
  margin: 0 auto;
  font-size: 0.275rem;
  font-weight: bold;
  background-image: -webkit-linear-gradient(
    left,
    #006af3,
    #00d9d8 10%,
    #006af3 20%,
    #00d9d8 30%,
    #006af3 40%,
    #00d9d8 50%,
    #006af3 60%,
    #00d9d8 70%,
    #006af3 80%,
    #00d9d8 90%,
    #006af3
  );
  color: transparent; /*文字填充色为透明*/
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; /*背景剪裁为文字，只将文字显示为背景*/
  background-size: 200% 100%; /*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
  /* 动画 */
  animation: masked-animation 6s infinite linear;
}
@keyframes masked-animation {
  0% {
    background-position: 0 0; /*background-position 属性设置背景图像的起始位置。*/
  }
  100% {
    background-position: -80% 0;
  }
}
#m_head_img1 {
  margin-left: 0rem;
}
#m_head_img2 {
  margin-left: 1rem;
}

.home_date1 {
  width: 2rem;
  height: 0.22rem;
  font-size: 0.16rem;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(0, 194, 255, 1);
  line-height: 0.22rem;
  margin: 0;
  margin-left: 0.3rem;
  margin-top: 0.08rem;
  text-align: left;
}
.home_date2 {
  width: 0.134rem;
  height: 0.33rem;
  font-size: 0.24rem;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(0, 194, 255, 1);
  line-height: 0.33rem;
  letter-spacing: 0.01rem;
  margin: 0;
  margin-left: 0.3rem;
}

.margin_bottom {
  margin-bottom: 0.12rem;
}

/* 中间头部用户在册数  （固定） */
.middle_user_number {
  height: 0.32rem;
  /* border: 0.01rem solid #f0f0f0; */
}

/* 地图层自适应开始 */
.middle_col_container,
.middle_map_col {
  height: 100%;
}
.middle_view_user {
  /* height: 6.25rem; */
  height: calc(100% - 4.19rem);
  /* border: 0.01rem solid #f0f0f0; */
}
.middle_main_map {
  /* border: 0.01rem solid #4489cc; */
  height: 100%;
}
/* 地图层自适应结束 */

/* 地图左右两侧高度设置 */
.middle_view_user .el-col:nth-child(1),
.middle_view_user .el-col:nth-child(3) {
  height: 100%;
}
.middle_map_col {
  padding: 0rem 0.12rem;
}
.view_user_chart,
.view_top_chart,
.add_user_chart,
.local_originality_chart {
  height: calc((100% - 0.12rem) / 2);
  /* border: 0.01rem solid #ccc; */
}
.view_user_chart,
.view_top_chart {
  margin-bottom: 0.12rem;
}
.middle_trend .el-col {
  height: 100%;
}
.middle_trend .el-col div {
  /* border: 0.01rem solid #ccc; */
  height: 100%;
}

.middle_trend .el-col:nth-child(1) {
  padding-right: 0.06rem;
}
.middle_trend .el-col:nth-child(2) {
  padding-left: 0.06rem;
}

/* 中间底部 （固定）*/
.middle_trend {
  height: 2.9rem;
}
</style>

