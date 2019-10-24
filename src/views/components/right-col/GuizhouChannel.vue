<template>
  <div class="height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>
      贵州频道收视TOP5({{GuizhouChannel_unit}})
      <!-- 贵州频道收视TOP5 -->
    </el-row>
    <el-row class="programmes_name"></el-row>
    <el-row class="zone_programmes_body" v-show="ifgetdata">
      <!-- <el-row :id="echarts_data.id"></el-row> -->
      <live-view-behavior-analysis :barListData="GuizhouChannelData"></live-view-behavior-analysis>
    </el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import LiveViewBehaviorAnalysis from "@/views/backcoms/G_TVuserviewingmonthreport/LiveViewBehaviorAnalysis_Change"; //TOP排名（柱状图列表）
import { onlive_location } from "@/api/api_main";
import { commonTools } from "@/utils/test";
import { mapGetters } from "vuex";

export default {
  name: "GuizhouChannel", //专区节目组件
  components: {
    "live-view-behavior-analysis": LiveViewBehaviorAnalysis
  },
  computed: {
    ...mapGetters(["GuizhouChannel_unit"])
  },
  data() {
    return {
      ifgetdata: true,

      echarts_data: {
        id: "zone_programmes"
      },
      GuizhouChannelData: {
        // title: "订购用户所属地区分布",
        id: "GuizhouChannel",
        color: ["#5078FF", "#00A8F1"],
        data: [
          ["product", "收视时长", "收视次数"]
          // ["贵州-4", 55, 58],
          // ["贵州-3", 540, 532],
          // ["贵州-2", 555, 514],
          // ["贵州-1", 688, 631],
          // ["贵州卫视", 869, 908]
        ]
      }
    };
  },
  mounted() {
    // this.drawline();
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.onlive_location(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  methods: {
    onlive_location(ExpirationDate) {
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();

      let data = {
        start: commonTools.currentDay_ndaysAgodate(ExpirationDate, 6),
        end: ExpirationDate,
        // operator: String(["移动", "联通", "电信"])
        operator: m_operator
      };
      onlive_location(data)
        .then(function(response) {
          // console.log("~~~~~~~▲▲▲");
          // console.log(response);
          let buckets = response.data.responses[0].aggregations.channel.buckets;
          let length = buckets.length;
          let i;
          let temp = ["product", "收视时长", "收视次数"];
          let data = [];
          data.push(temp);
          function keyManage(key) {
            let arr = key.split(" ");
            return arr[0];
          }
          for (i = length - 1; i > -1; i--) {
            temp = [];
            temp.push(keyManage(buckets[i].key));
            temp.push(
              // (buckets[i].onlive_dur.value  /3600).toFixed(2)
              (buckets[i].onlive_dur.value ).toFixed(2)
            );
            temp.push((buckets[i].onlive_freq.value ).toFixed(2));

            // temp.push(buckets[i].onlive_dur.value / 3600);
            // temp.push(buckets[i].onlive_freq.value);

            data.push(temp);
          }
          vm.GuizhouChannelData.data = data;
          console.log("~~~~~~!!!");
          console.log(vm.GuizhouChannelData);

          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
    },
    drawline() {
      var myChart = this.$echarts.init(
        document.getElementById(this.echarts_data.id)
      );

      myChart.clear();
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.programmes_name i {
  display: inline-block;
  width: 0.04rem;
  height: 0.04rem;
  border-radius: 50%;
  font-style: normal;
  background: #1e9fff;
  vertical-align: middle;
}
.programmes_name {
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.14rem;
  text-align: left;
  color: #dedede;
  margin-left: 0.08rem;
}
.zone_programmes_body {
  height: calc(100% - 0.5rem);
  margin-left: 0.08rem;
}
#zone_programmes {
  height: 60%;
}
.zone_programmes_detail {
  height: 40%;
  font-size: 0.12rem;
  color: #dedede;
}
.zone_programmes_main {
  margin-top: 0.05rem;
}
/* .zone_programmes_main:nth-child(odd) {
  margin-bottom: 0.1rem;
} */
.zone_programmes_detail img {
  vertical-align: sub;
  margin-right: 0.05rem;
}
.zone_programmes_detail span {
  padding-left: 0.18rem;
  font-size: 0.2rem;
  color: #fff067;
}
</style>


