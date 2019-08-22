<template>
  <div class="backHome">
    <div class="backHome_nav">
      <back-home-nav></back-home-nav>
    </div>
    <div class="backHome_body">
      <div class="backHome_body_title">
        <span>贵州广电新媒体数据分析平台</span>
      </div>
      <div class="backHome_body_main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import "@/styles/common.css";
import BackHomeNav from "@/views/backcoms/backhomenav/BackHomeNav"; //左侧导航栏
export default {
  name: "BackHome",
  components: {
    "back-home-nav": BackHomeNav
  }
};
</script>

<style scoped>
.backHome {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
}
.backHome .backHome_nav {
  width: 230px;
  height: 100%;
  box-shadow: 2px 0 6px 0 rgba(0, 21, 41, 0.35);
}
.backHome .backHome_body {
  background: #f0f2f5;
  width: calc(100% - 230px);
  height: 100%;
}
.backHome_body .backHome_body_title {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 230px);
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  background: #fff;
  box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.2);
  z-index: 99;
  margin: 0 auto;
}
.backHome_body .backHome_body_title span {
  margin: 0 auto;
}
.backHome_body .backHome_body_main {
  height: calc(100% - 60px);
  padding: 24px 14px;
  margin-top: 60px;
  overflow: auto;
  z-index: 1;
}
</style>
