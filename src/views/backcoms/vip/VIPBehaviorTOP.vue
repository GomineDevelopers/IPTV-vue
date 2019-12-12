<template>
  <div class="user_viewing_behavior_top height_auto">
    <!-- 收视行为开始 -->
    <el-row class="height_auto">
      <el-row class="viewing_top15_detail">
        <el-row class="viewing_top_title">
          <el-col :span="3" :offset="2">{{TopTitleInfo.i1}}</el-col>
          <el-col :span="7">{{TopTitleInfo.i2}}</el-col>
          <el-col :span="6">{{TopTitleInfo.i3}}</el-col>
          <el-col :span="6">{{TopTitleInfo.i4}}</el-col>
        </el-row>
        <el-row class="programsTOP_list" :id="viewingTopList.id">
          <el-row class="viewing_top_list" v-for="(item,index) in viewingTopList.data" :key="index">
            <el-col :span="3" :offset="2">
              <span>{{item.topNum}}</span>
            </el-col>
            <el-col :span="7">
              <span>{{item.programName}}</span>
            </el-col>
            <el-col :span="6">
              <span>{{item.programSource}}</span>
            </el-col>
            <el-col :span="6" class="hotWidth">
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
      "UVB_region",
      "UVB_operator",
      "UVB_playmode",
      "UVB_programa",
      "UVB_contenttype",
      "UVB_day",
      "UVB_week",
      "UVB_picker",
      "UVB_time_type",

      "ADD_VIP_region",
      "ADD_VIP_operator",
      "ADD_VIP_programa",
      "ADD_VIP_valueAddedPackage",
      "ADD_VIP_day",
      "ADD_VIP_week",
      "ADD_VIP_picker",
      "ADD_VIP_time_type"
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
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },

    UVB_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_playmode(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_programa(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_contenttype(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    UVB_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },

    ADD_VIP_region(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    ADD_VIP_operator(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    ADD_VIP_programa(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    ADD_VIP_valueAddedPackage(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    ADD_VIP_day(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    ADD_VIP_week(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    ADD_VIP_picker(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    },
    ADD_VIP_time_type(newValue, oldValue) {
      let vm = this;
      setTimeout(function() {
        vm.drawEcharts();
      }, 2000);
    }
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.drawEcharts();
    }, 2000);
  },
  methods: {
    drawEcharts() {
      try {
        // console.log("~~~~~test");
        // console.log(this.viewingTopList);
        if (
          this.viewingTopList.type == "live" ||
          this.viewingTopList.type == "review"
        ) {
          this.TopTitleInfo = {
            i1: "排名",
            i2: "频道",
            i3: "节目",
            i4: "次数"
          };
        }
        if (this.viewingTopList.type == "demand") {
          this.TopTitleInfo = {
            i1: "排名",
            i2: "内容类型",
            i3: "节目",
            // i4: "次数（万）"
            i4: "次数"
          };
        }
        // this.scrollLoopUp(this.viewingTopList.id); // 滚动暂时关掉
      } catch (error) {
        console.log(error);
      }
    },
    scrollLoopUp: function(id) {
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
  text-align: left !important;
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
  height: 42.5px;
  line-height: 42.5px;
}
.programsTOP_list .viewing_top_list .el-col {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  align-items: center;
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
  text-align: right !important;
}
.programsTOP_list .viewing_top_list .hotWidth span {
  color: #fff;
  height: 12px;
  line-height: 12px;
  background: #ff6123;
  border-radius: 2px;
  text-align: center;
}
/* 节目收视排名 top15结束 */
</style>