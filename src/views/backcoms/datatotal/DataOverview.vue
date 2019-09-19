<template>
  <div class="DataOverview">
    <el-row class="model_title DO_left">
      <span class="title_border_left"></span>数据总览
    </el-row>
    <div class="city fontBold">{{city}}</div>
    <div class="datatotal_date">2019-07-01</div>
  </div>
</template>

<script>
export default {
  name: "DataOverview",
  props: ["city"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.DataOverview {
  /* background-color: #ffffff; */
  /* padding: 10px; */
  display: inline-block;
  /* height: 139px; */
  /* width: 16%; */
  height: 100%;
  width: 100%;
  /* margin: 7px; */
}
.DataOverview .datatotal_date {
  font-size: 0.15rem;
  text-align: center;
}
.DataOverview .DO_left {
  padding-left: 4px;
}
.DataOverview .fontBold {
  font-weight: bold;
}
.DataOverview .title {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  /* text-align: left; */
}
.DataOverview .city {
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #333333;
  margin-top: 4%;
  text-align: center;
}
</style>


<style scoped>
</style>
