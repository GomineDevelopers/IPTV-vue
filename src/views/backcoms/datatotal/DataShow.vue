<template>
  <div class="DataShow">
    <p class="Dtop">
      <i class="icon" v-html="icon"></i>
      <!-- <i class="icon">{{icon}}</i> -->
      <!-- <i class="icon">&#xe605;</i> -->
      <span>&nbsp;</span>
      <span class="title">{{title}}</span>
      <span class="icon2 info">&#xe605;</span>
    </p>
    <p class="Dmiddle">
      <span class="numT">{{numT}}</span>
      <!-- <span class="wan">万</span> -->
      <span class="wan"></span>
    </p>
    <p class="Dbottom">
      <span class="content">{{content}}</span>
      <span>&nbsp;</span>
      <span class="numC">{{numC}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "DataShow",
  props: ["icon", "title", "numT", "content", "numC"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.DataShow {
  /* background-color: #ffffff; */
  display: inline-block;
  height: 100%;
  width: 100%;
  padding: 4px;
  /* width: 16%;
  height: 139px;
  padding: 10px;
  margin: 7px; */
}
.DataShow .icon,
.DataShow .icon2 {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.DataShow .icon {
  color: #ff4800;
}
.DataShow .icon2 {
  color: rgba(0, 0, 0, 0.45);
}
.DataShow .info {
  float: right;
  margin-right: 4px;
}
/* .DataShow .info:hover{
  cursor: pointer;
} */

.DataShow .Dtop {
  margin: 0;
}

.DataShow .Dmiddle {
  border-bottom: 1px #e8e8e8 solid;
  margin-top: 6px;
  margin-bottom: 0px;
  padding-bottom: 12px;
}

.DataShow .Dbottom {
  margin: 0 0;
}

.DataShow .title,
.DataShow .wan {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 22px;
}
.DataShow .numT {
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 38px;
  font-weight: bold;
}

.DataShow .content {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 22px;
  margin-top: 12px;
  margin-bottom: 12px;
}
.DataShow .numC {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #000000;
  line-height: 22px;
}
</style>


<style scoped>
</style>
