<template>
  <div class="user_viewing_behavior_top height_auto">
    <!-- 收视行为开始 -->
    <el-row class="height_auto">
      <el-row class="viewing_top15_detail">
        <el-row class="viewing_top_title">
          <el-col :span="2" :offset="1">{{TopTitleInfo.i1}}</el-col>
          <el-col :span="7">{{TopTitleInfo.i2}}</el-col>
          <el-col :span="6">{{TopTitleInfo.i3}}</el-col>
          <el-col :span="7">{{TopTitleInfo.i4}}</el-col>
        </el-row>
        <el-row class="programsTOP_list" :id="viewingTopList.id">
          <el-row class="viewing_top_list" v-for="(item,index) in viewingTopList.data" :key="index">
            <el-col :span="2" :offset="1">
              <span>{{item.topNum}}</span>
            </el-col>
            <el-col :span="7" class="programSource">
              <span>{{item.programSource }}</span>
            </el-col>
            <el-col :span="6">
              <span class="program_name">{{item.programName}}</span>
            </el-col>
            <el-col :span="7" class="hotWidth">
              <span :style="{width:item.hot,paddingRight:'5%',paddingLeft:'5%'}">{{item.playNum}}</span>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <!-- 收视行为结束 -->
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";
export default {
  name: "UserViewingBehaviorTOP", //用户收视行为
  props: {
    viewingTopList: {
      type: Object
    }
  },
  computed: {
    ...mapGetters([
      "ULC_region",
      "ULC_operator",
      "ULC_month",
    ])
  },
  data() {
    return {
      TopTitleInfo: {
        i1: "",
        i2: "",
        i3: "",
        i4: ""
      }
    };
  },
  watch: {
    viewingTopList(newValue, oldValue) {
      let vm = this;
      if (vm.ULC_month && vm.ULC_operator && ULC_region) {

      }
      console.log("收视收视收视————————————", newValue)
      setTimeout(function () {
        vm.drawEcharts();
      }, 1000)
    },
    ULC_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        vm.drawEcharts();
      }, 1000)
    },
    ULC_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function () {
        vm.drawEcharts();
      }, 1000)
    },
    ULC_month(newValue, oldValue) {
      console.log(" ULC_month更新------", newValue)
      let vm = this;
      setTimeout(function () {
        vm.drawEcharts();
      }, 1000)
    },
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.drawEcharts();
    }, 1000);
  },
  methods: {
    drawEcharts() {
      console.log("~~~~~test");
      console.log(this.viewingTopList);

      if (this.viewingTopList.id == "viewingTimeTOP") {
        this.TopTitleInfo = {
          i1: "排名",
          i2: "节目类型",
          i3: "节目",
          i4: "时长（千小时）"
        };
      }
      if (this.viewingTopList.id == "NumberOfViewersTop") {
        this.TopTitleInfo = {
          i1: "排名",
          i2: "节目类型",
          i3: "节目",
          i4: "次数（万次）"
        };
      }
      // this.scrollLoopUp(this.viewingTopList.id);
    },
    scrollLoopUp: function (id) {
      var scrollBox = document.getElementById(id);
      var lineHeight = 42.5;
      var time = 50;
      scrollBox.innerHTML += scrollBox.innerHTML;
      scrollBox.scrollTop = 0;
      var timer;
      function scrollMove() {
        scrollBox.scrollTop++;
        timer = setInterval(scrollUp, time);
      }
      function scrollUp() {
        if (scrollBox.scrollTop % lineHeight == 0) {
          //滚动一行后，延时2秒
          clearInterval(timer);
          setTimeout(scrollMove, 2000);
        } else {
          scrollBox.scrollTop++;
          if (scrollBox.scrollTop >= scrollBox.scrollHeight / 2) {
            //判断滚动高度,当滚动高度大于scrollBox本身的高度时，使其回到原点重新滚动
            scrollBox.scrollTop = 0;
          }
        }
      }
      setTimeout(scrollMove, 2000);
    }
  }
};
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
  text-align: center !important;
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
  color: #999 !important;
  padding-left: 8px;
  overflow: hidden;
}
.programsTOP_list .viewing_top_list {
  /* height: 42.5px;
  line-height: 42.5px; */
  height: 43px;
  overflow: hidden;
}
.programsTOP_list .viewing_top_list .el-col {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  white-space: nowrap;
}
.program_name {
  width: 95%;
  text-align: left !important;
  overflow: hidden;
  text-overflow: ellipsis;
}
.programsTOP_list .viewing_top_list:nth-child(1) .el-col:nth-child(1) {
  color: #ff4c75 !important;
}
.programsTOP_list .viewing_top_list:nth-child(2) .el-col:nth-child(1) {
  color: #ff8859 !important;
}
.programsTOP_list .viewing_top_list:nth-child(3) .el-col:nth-child(1) {
  color: #ffaa89 !important;
}
.programsTOP_list .viewing_top_list:nth-child(16) .el-col:nth-child(1) {
  color: #ff4c75 !important;
}
.programsTOP_list .viewing_top_list:nth-child(17) .el-col:nth-child(1) {
  color: #ff8859 !important;
}
.programsTOP_list .viewing_top_list:nth-child(18) .el-col:nth-child(1) {
  color: #ffaa89 !important;
}
.programsTOP_list .viewing_top_list .hotWidth {
  text-align: left !important;
}
.programsTOP_list .viewing_top_list .hotWidth span {
  color: #fff;
  height: 12px;
  line-height: 12px;
  background: #ff6123;
  border-radius: 2px;
  text-align: center;
}
.programSource {
  text-align: center !important;
}
.programSource span {
  width: 100%;
}
/* 节目收视排名 top15结束 */
</style>