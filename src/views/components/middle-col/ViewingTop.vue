<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>收视TOP
    </el-row>
    <el-row v-show="ifgetdata" id="viewing_top">
      <el-row class="viewing_top_title">
        <el-col :span="3">排名</el-col>
        <el-col :span="9">节目名称</el-col>
        <el-col :span="6">内容类型</el-col>
        <el-col :span="6">热度</el-col>
      </el-row>
      <div id="viewingTOP_list">
        <el-row class="viewing_top_list" v-for="(item,index) in viewingTopList" :key="index">
          <el-col :span="3">
            <span>{{item.topNum}}</span>
          </el-col>
          <el-col :span="9">
            <span>{{item.programName}}</span>
          </el-col>
          <el-col :span="6">
            <span>{{item.programSource}}</span>
          </el-col>
          <el-col :span="6" class="hotWidth">
            <span :style="{width:item.hot}"></span>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import { demandProgramTop } from "@/api/api_main";
import { commonTools } from "@/utils/test";

export default {
  name: "ViewingTop", //收视TOP组件
  data() {
    return {
      ifgetdata: true,
      viewingTopList: [
        // {
        //   topNum: 1,
        //   programName: "疯狂的外星人",
        //   programSource: "电影",
        //   hot: "80%"
        // },
        // {
        //   topNum: 2,
        //   programName: "熊出没.原始",
        //   programSource: "少儿",
        //   hot: "70%"
        // },
        // {
        //   topNum: 3,
        //   programName: "疯狂的外星人",
        //   programSource: "电影",
        //   hot: "80%"
        // },
        // {
        //   topNum: 4,
        //   programName: "熊出没.原始",
        //   programSource: "少儿",
        //   hot: "70%"
        // },
        // {
        //   topNum: 5,
        //   programName: "疯狂的外星人",
        //   programSource: "电影",
        //   hot: "80%"
        // },
        // {
        //   topNum: 6,
        //   programName: "熊出没.原始",
        //   programSource: "少儿",
        //   hot: "70%"
        // },
        // {
        //   topNum: 7,
        //   programName: "疯狂的外星人",
        //   programSource: "电影",
        //   hot: "80%"
        // },
        // {
        //   topNum: 8,
        //   programName: "熊出没.原始",
        //   programSource: "少儿",
        //   hot: "70%"
        // },
        // {
        //   topNum: 9,
        //   programName: "疯狂的外星人",
        //   programSource: "电影",
        //   hot: "80%"
        // },
        // {
        //   topNum: 10,
        //   programName: "熊出没.原始",
        //   programSource: "少儿",
        //   hot: "70%"
        // },
      ]
    };
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function (response) {
          vm.demandProgramTop(response);
        })
        .catch(function (error) {
          console.info(error);
        });
    }, 100);

    setTimeout(function () {
      vm.scrollLoopUp("viewingTOP_list");
    }, 1000);
  },
  methods: {
    demandProgramTop(ExpirationDate) {
      // console.log("demandProgramTop");
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();

      let data = {
        start: commonTools.currentDay_ndaysAgodate(ExpirationDate, 6),
        end: ExpirationDate,
        // operator: String(["移动", "联通", "电信"])
        operator: m_operator
      };
      // console.log("~~~~~demandProgramTop");
      demandProgramTop(data)
        .then(function (response) {
          // console.log(response);

          let m_data =
            response.data.responses[0].aggregations.programname.buckets;
          let length = m_data.length;
          let i;
          let temp;
          // let tempArr = [];
          let totalvalue = m_data[0].demand_freq.value; // hot需要百分比，这里用排名第一的热度值做分母，即第一为百分百
          for (i = 0; i < length; i++) {
            temp = {
              topNum: i + 1,
              programName: m_data[i].key,
              programSource: m_data[i].program_type.buckets[0].key,
              hot:
                String((m_data[i].demand_freq.value / totalvalue) * 100) + "%"
            };
            vm.viewingTopList.push(temp);
          }
          // console.log('收视TOP')
          vm.ifgetdata = true;
        })
        .catch(function (error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    scrollLoopUp: function (id) {
      var scrollBox = document.getElementById(id);
      var lineHeight = scrollBox.clientHeight / 5;
      //var lineHeight = 30
      var time = 100;
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
#viewing_top {
  padding: 0rem 0.1rem;
  font-size: 0.12rem;
  color: #dedede;
  height: calc(100% - 0.3rem);
  overflow: hidden;
}
#viewing_top .viewing_top_body {
  width: 100%;
}
#viewing_top .el-col {
  text-align: left !important;
}
.viewing_top_title {
  padding-left: 0.05rem;
  color: #94b3e7;
  height: 0.28rem;
  line-height: 0.28rem;
  border-bottom: 1px solid #fff;
}
#viewingTOP_list {
  padding-left: 0.08rem;
  height: calc(100% - 0.28rem);
  overflow: hidden;
}
#viewingTOP_list .viewing_top_list {
  height: calc(100% / 5);
  border-bottom: 1px solid rgba(147, 147, 147, 0.2);
}
#viewingTOP_list .viewing_top_list .el-col {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
#viewingTOP_list .viewing_top_list:nth-child(1) .el-col:nth-child(1) {
  color: #ff4c75;
}
#viewingTOP_list .viewing_top_list:nth-child(2) .el-col:nth-child(1) {
  color: #f8e71c;
}
#viewingTOP_list .viewing_top_list:nth-child(3) .el-col:nth-child(1) {
  color: #ff8964;
}
#viewingTOP_list .viewing_top_list:nth-child(11) .el-col:nth-child(1) {
  color: #ff4c75;
}
#viewingTOP_list .viewing_top_list:nth-child(12) .el-col:nth-child(1) {
  color: #f8e71c;
}
#viewingTOP_list .viewing_top_list:nth-child(13) .el-col:nth-child(1) {
  color: #ff8964;
}
#viewingTOP_list .viewing_top_list .hotWidth {
  text-align: right !important;
}
#viewingTOP_list .viewing_top_list .hotWidth span {
  height: 0.06rem;
  background: linear-gradient(135deg, #ff8e63 0%, #ff4777 100%);
  border-radius: 4px;
}
</style>