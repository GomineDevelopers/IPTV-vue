<template>
  <div class="data_integrity" id="data_integrity_content">
    <el-row>
      <el-col :span="20">
        <!-- 开机日志开始 -->
        <el-row class="data_integrity_body" id="boot_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>开机日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="usercount"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 开机日志结束 -->

        <!-- 心跳日志开始 -->
        <el-row class="data_integrity_body" id="heartbeat_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>心跳日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeat"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 心跳日志结束 -->

        <!-- 页面访问日志开始 -->
        <el-row class="data_integrity_body" id="page_access_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>页面访问日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="basedata"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 页面访问日志结束 -->

        <!-- 热力图日志开始 -->
        <el-row class="data_integrity_body" id="thermodynamic_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>热力图日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="epghot"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 热力图日志结束 -->

        <!-- 点播播放日志开始 -->
        <el-row class="data_integrity_body" id="bunch_planting_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>点播播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="demand"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 点播播放日志结束 -->

        <!-- 回看播放日志开始 -->
        <el-row class="data_integrity_body" id="look_back_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>回看播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="review"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 回看播放日志结束 -->

        <!-- 直播播放日志开始 -->
        <el-row class="data_integrity_body" id="live_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>直播播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="onlive"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 直播播放日志结束 -->
      </el-col>
      <el-col :span="4" class="anchor_hyperlinks">
        <el-row>
          <!-- <a href="#boot_log">开机日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link1 avtive_link"
            @click="goAnchor('#boot_log')"
          >开机日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#heartbeat_log">心跳日志</a> -->
          <a href="javascript:void(0)" class="anchor_link2" @click="goAnchor('#heartbeat_log')">心跳日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#page_access_log">页面访问日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link3"
            @click="goAnchor('#page_access_log')"
          >页面访问日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#thermodynamic_log">热力图日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link4"
            @click="goAnchor('#thermodynamic_log')"
          >热力图日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#bunch_planting_log">点播播放日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link5"
            @click="goAnchor('#bunch_planting_log')"
          >点播播放日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#look_back_log">回看播放日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link6"
            @click="goAnchor('#look_back_log')"
          >回看播放日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#live_log">直播播放日志</a> -->
          <a
            class="anchor_link7"
            href="javascript:void(0)"
            @click="goAnchor('#look_back_log')"
          >直播播放日志</a>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { missReport } from "@/api/api_main";
import DataIntegrityModel from "@/views/backcoms/dataaudit/DataIntegrityModel"; //表格组件

export default {
  name: "DataIntegrity", //数据完整性
  components: {
    "data-integrity-model": DataIntegrityModel
  },
  data() {
    return {
      //开机日志
      usercount: [
        // {
        //   title: "uid",
        //   introduce: "用户IPTV账号",
        //   total: "3967472",
        //   missingData: "18503",
        //   LackOfProportion: "0.52%"
        // },
        // {
        //   title: "sid",
        //   introduce: "机顶盒型号",
        //   total: "721737",
        //   missingData: "12337",
        //   LackOfProportion: "0.23%"
        // },
        // {
        //   title: "ac",
        //   introduce: "地市代码",
        //   total: "632474",
        //   missingData: "982",
        //   LackOfProportion: "0.04%"
        // },
        // {
        //   title: "uip",
        //   introduce: "用户IP",
        //   total: "637467",
        //   missingData: "6374",
        //   LackOfProportion: "0.98%"
        // },
        // {
        //   title: "en",
        //   introduce: "模块名称",
        //   total: "732786",
        //   missingData: "5361",
        //   LackOfProportion: "0.23%"
        // },
        // {
        //   title: "gid",
        //   introduce: "用户所属分组",
        //   total: "276372",
        //   missingData: "2367",
        //   LackOfProportion: "0.45%"
        // },
        // {
        //   title: "epf",
        //   introduce: "用户所属能力平台",
        //   total: "863747",
        //   missingData: "3232",
        //   LackOfProportion: "0.32%"
        // },
        // {
        //   title: "operators",
        //   introduce: "用户所属运营商",
        //   total: "364372",
        //   missingData: "1232",
        //   LackOfProportion: "0.74%"
        // }
      ],

      //心跳日志
      heartbeat: [
        // 暂时没有
        // {
        //   title: "uid",
        //   introduce: "xxx",
        //   total: "0",
        //   missingData: "0",
        //   LackOfProportion: "0%"
        // }
        // {
        //   title: "uid",
        //   introduce: "用户IPTV账号",
        //   total: "3967472",
        //   missingData: "18503",
        //   LackOfProportion: "0.52%"
        // },
        // {
        //   title: "sid",
        //   introduce: "机顶盒型号",
        //   total: "721737",
        //   missingData: "12337",
        //   LackOfProportion: "0.23%"
        // },
        // {
        //   title: "ac",
        //   introduce: "地市代码",
        //   total: "632474",
        //   missingData: "982",
        //   LackOfProportion: "0.04%"
        // },
        // {
        //   title: "uip",
        //   introduce: "用户IP",
        //   total: "637467",
        //   missingData: "6374",
        //   LackOfProportion: "0.98%"
        // },
        // {
        //   title: "en",
        //   introduce: "模块名称",
        //   total: "732786",
        //   missingData: "5361",
        //   LackOfProportion: "0.23%"
        // },
        // {
        //   title: "gid",
        //   introduce: "用户所属分组",
        //   total: "276372",
        //   missingData: "2367",
        //   LackOfProportion: "0.45%"
        // },
        // {
        //   title: "epf",
        //   introduce: "用户所属能力平台",
        //   total: "863747",
        //   missingData: "3232",
        //   LackOfProportion: "0.32%"
        // },
        // {
        //   title: "operators",
        //   introduce: "用户所属运营商",
        //   total: "364372",
        //   missingData: "1232",
        //   LackOfProportion: "0.74%"
        // }
      ],

      //页面访问日志
      basedata: [],
      //热力图日志
      epghot: [],
      //点播播放日志
      demand: [],
      //回看播放日志
      review: [],
      //直播播放日志
      onlive: []
    };
  },
  mounted() {
    $("#data_integrity_content").scroll(function(event) {
      //console.log($('.backHome_body_main').scrollTop())
      let scrollTopHeight = $("#data_integrity_content").scrollTop();
      // let boot_log = document.querySelector('#boot_log').offsetTop
      // let heartbeat_log = document.querySelector('#heartbeat_log').offsetTop
      // let page_access_log = document.querySelector('#page_access_log').offsetTop
      // let thermodynamic_log = document.querySelector('#thermodynamic_log').offsetTop
      // let bunch_planting_log = document.querySelector('#bunch_planting_log').offsetTop
      // let look_back_log = document.querySelector('#look_back_log').offsetTop
      // let live_log = document.querySelector('#live_log').offsetTop
      if (0 <= scrollTopHeight) {
        $(".anchor_link1")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (400 <= scrollTopHeight) {
        $(".anchor_link2")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (800 <= scrollTopHeight) {
        $(".anchor_link3")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (1200 <= scrollTopHeight) {
        $(".anchor_link4")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (1500 <= scrollTopHeight) {
        $(".anchor_link5")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (1800 <= scrollTopHeight) {
        $(".anchor_link6")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (2100 < scrollTopHeight) {
        $(".anchor_link7")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
    });
    // 数据填充 （暂定为“当天”数据）
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.missReport(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  methods: {
    missReport(ExpirationDate) {
      let vm = this;
      let temp = {
        start: ExpirationDate,
        end: ExpirationDate
      };
      console.log(temp);
      var formData = new FormData();
      var formData = new window.FormData();
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      missReport(formData)
        .then(function(response) {
          console.log(response);
          // 暂时为某日的
          let buckets =
            response.data.responses[0].aggregations.statistical_granularity
              .buckets;
          let buckets_0 = buckets[0];
          let buckets_0_child = buckets_0.logname.buckets;
          let length_0_child = buckets_0_child.length;
          let i_0_child;
          function dataManage_title(currentPerTitleData) {
            let temp_pertitle_data = {
              title: "",
              introduce: "",
              total: "",
              missingData: "",
              LackOfProportion: ""
            };

            temp_pertitle_data.title = currentPerTitleData.key;
            temp_pertitle_data.introduce =
              currentPerTitleData.fieldname_cn.buckets[0].key;
            temp_pertitle_data.total = currentPerTitleData.n_total.value;
            temp_pertitle_data.missingData =
              currentPerTitleData.n_missing.value;
            temp_pertitle_data.LackOfProportion =
              currentPerTitleData.missign_rate.value;
            return temp_pertitle_data;
          }
          function dataManage(index_0_child) {
            let buckets_0_cc = buckets_0_child[index_0_child].fieldname.buckets;
            let length_0_cc = buckets_0_cc.length;
            let i_0_cc;
            // 8个字段固定： uid sid ac uip en gid epf operators
            let temp_type_data = [];
            let i_temp8;
            for (i_temp8 = 0; i_temp8 < 8; i_temp8++) {
              temp_type_data.push({});
            }
            for (i_0_cc = 0; i_0_cc < length_0_cc; i_0_cc++) {
              if (buckets_0_cc[i_0_cc].key == "uid") {
                temp_type_data[0] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "sid") {
                temp_type_data[1] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "ac") {
                temp_type_data[2] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "uip") {
                temp_type_data[3] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "en") {
                temp_type_data[4] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "gid") {
                temp_type_data[5] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "epf") {
                temp_type_data[6] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "operators") {
                temp_type_data[7] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
            }

            return temp_type_data;
          }
          let temp_all = [];

          let temp_usercount_all = [];
          let temp_heartbeat_all = [];
          let temp_basedata_all = [];
          let temp_epghot_all = [];
          let temp_demand_all = [];
          let temp_review_all = [];
          let temp_onlive_all = [];
          for (i_0_child = 0; i_0_child < length_0_child; i_0_child++) {
            try {
              if (buckets_0_child[i_0_child].key == "usercount") {
                temp_usercount_all = dataManage(i_0_child);
              }
            } catch (error) {
              console.log(error);
              temp_usercount_all = [
                {
                  title: "uid",
                  introduce: "xxx",
                  total: "0",
                  missingData: "0",
                  LackOfProportion: "0%"
                }
              ];
            }
            try {
              if (buckets_0_child[i_0_child].key == "heartbeat") {
                // 暂时没有
                // temp_heartbeat_all = dataManage(i_0_child);
              }
            } catch (error) {
              console.log(error);
              temp_heartbeat_all = [
                {
                  title: "uid",
                  introduce: "xxx",
                  total: "0",
                  missingData: "0",
                  LackOfProportion: "0%"
                }
              ];
            }
            try {
              if (buckets_0_child[i_0_child].key == "basedata") {
                temp_basedata_all = dataManage(i_0_child);
              }
            } catch (error) {
              console.log(error);
              temp_basedata_all = [
                {
                  title: "uid",
                  introduce: "xxx",
                  total: "0",
                  missingData: "0",
                  LackOfProportion: "0%"
                }
              ];
            }
            try {
              if (buckets_0_child[i_0_child].key == "epghot") {
                temp_epghot_all = dataManage(i_0_child);
              }
            } catch (error) {
              console.log(error);
              temp_epghot_all = [
                {
                  title: "uid",
                  introduce: "xxx",
                  total: "0",
                  missingData: "0",
                  LackOfProportion: "0%"
                }
              ];
            }
            try {
              if (buckets_0_child[i_0_child].key == "demand") {
                temp_demand_all = dataManage(i_0_child);
              }
            } catch (error) {
              console.log(error);
              temp_demand_all = [
                {
                  title: "uid",
                  introduce: "xxx",
                  total: "0",
                  missingData: "0",
                  LackOfProportion: "0%"
                }
              ];
            }
            try {
              if (buckets_0_child[i_0_child].key == "review") {
                temp_review_all = dataManage(i_0_child);
              }
            } catch (error) {
              console.log(error);
              temp_review_all = [
                {
                  title: "uid",
                  introduce: "xxx",
                  total: "0",
                  missingData: "0",
                  LackOfProportion: "0%"
                }
              ];
            }
            try {
              if (buckets_0_child[i_0_child].key == "onlive") {
                temp_onlive_all = dataManage(i_0_child);
              }
            } catch (error) {
              console.log(error);
              temp_onlive_all = [
                {
                  title: "uid",
                  introduce: "xxx",
                  total: "0",
                  missingData: "0",
                  LackOfProportion: "0%"
                }
              ];
            }
          }
          temp_all.push(temp_usercount_all);
          temp_all.push(temp_heartbeat_all);
          temp_all.push(temp_basedata_all);
          temp_all.push(temp_epghot_all);
          temp_all.push(temp_demand_all);
          temp_all.push(temp_review_all);
          temp_all.push(temp_onlive_all);

          console.log("~~~~~~!!!!!");
          console.log(temp_all);
          vm.usercount = temp_all[0];
          vm.heartbeat = temp_all[1];
          vm.basedata = temp_all[2];
          vm.epghot = temp_all[3];
          vm.demand = temp_all[4];
          vm.review = temp_all[5];
          vm.onlive = temp_all[6];
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let data_integrity_content = document.querySelector(
        "#data_integrity_content"
      ); //外层滚动容器元素
      //console.log("backHome_body_main", backHome_body_main)
      var anchor = document.querySelector(selector); // 参数为要跳转到的元素id
      data_integrity_content.scrollTop = anchor.offsetTop;
      $(".anchor_hyperlinks a").on("click", function() {
        $(this)
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      });
    },
    getDatategrity() {}
  }
};
</script>
<style scoped>
/*webkit内核*/
#data_integrity_content::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
/*o内核*/
#data_integrity_content .-o-scrollbar {
  -moz-appearance: none !important;
  background: rgba(0, 255, 0, 0) !important;
}
/*IE10,IE11,IE12*/
#data_integrity_content {
  -ms-scroll-chaining: chained;
  -ms-overflow-style: none;
  -ms-content-zooming: zoom;
  -ms-scroll-rails: none;
  -ms-content-zoom-limit-min: 100%;
  -ms-content-zoom-limit-max: 500%;
  -ms-scroll-snap-type: proximity;
  -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
  -ms-overflow-style: none;
  overflow: auto;
}
#data_integrity_content {
  height: 100%;
  /* overflow: auto; */
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.data_integrity_body {
  height: 418px;
  margin-bottom: 14px;
}
.anchor_hyperlinks {
  position: fixed;
  right: 0;
  padding-left: 40px;
  text-align: left;
}
.anchor_hyperlinks .el-row {
  margin-bottom: 12px;
}
.anchor_hyperlinks a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.anchor_hyperlinks .avtive_link {
  color: #ff6123;
}
#live_log {
  margin-bottom: 50px;
}
</style>