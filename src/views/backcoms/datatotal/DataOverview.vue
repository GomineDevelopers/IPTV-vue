<template>
  <div class="DataOverview">
    <el-row class="model_title DO_left">
      <span class="title_border_left"></span>数据总览
    </el-row>
    <div class="city fontBold">{{city}}</div>
    <div class="datatotal_date">{{ExpirationDate}}</div>
  </div>
</template>

<script>
export default {
  name: "DataOverview",
  props: ["city"],
  data() {
    return {
      ExpirationDate: ""
    };
  },
  methods: {},
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.ExpirationDate = response;
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  }
};
</script>

<style>
.DataOverview {
  display: inline-block;
  height: 100%;
  width: 100%;
  /* background-color: #ffffff; */
  /* padding: 10px; */
  /* height: 139px; */
  /* width: 16%; */
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
