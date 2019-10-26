<template>
  <!-- <div class="abnormal_value">
    <el-row class="abnormal_value_body">
      <el-row class="model_title">
        <span class="title_border_left"></span>各地市每天用户开机次数
      </el-row>
      <el-row class="chart_body back_white">
        <el-col class="height_auto" :span="24">
          <el-row id="abnormalValueChart" class="height_auto"></el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>-->
  <div class="data_integrity" id="data_integrity_content">
    <el-row>
      <el-col :span="20" class="table_content">
        <!-- 开机日志开始 -->
        <el-row class="data_integrity_body" id="boot_log2">
          <el-row class="model_title">
            <span class="title_border_left"></span>开机日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="usercount"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 开机日志结束 -->
        <!-- 心跳日志开始 -->
        <!-- <el-row class="data_integrity_body" id="heartbeat_log2">
          <el-row class="model_title">
            <span class="title_border_left"></span>心跳日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeat"></data-integrity-model>
          </el-row>
        </el-row>-->
        <!-- 心跳日志结束 -->

        <!-- 页面访问日志开始 -->
        <el-row class="data_integrity_body" id="page_access_log2">
          <el-row class="model_title">
            <span class="title_border_left"></span>页面访问日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="basedata"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 页面访问日志结束 -->

        <!-- 热力图日志开始 -->
        <el-row class="data_integrity_body" id="thermodynamic_log2">
          <el-row class="model_title">
            <span class="title_border_left"></span>热力图日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="epghot"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 热力图日志结束 -->

        <!-- 点播播放日志开始 -->
        <el-row class="data_integrity_body" id="bunch_planting_log2">
          <el-row class="model_title">
            <span class="title_border_left"></span>点播播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="demand"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 点播播放日志结束 -->

        <!-- 回看播放日志开始 -->
        <el-row class="data_integrity_body" id="look_back_log2">
          <el-row class="model_title">
            <span class="title_border_left"></span>回看播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="review"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 回看播放日志结束 -->

        <!-- 直播播放日志开始 -->
        <el-row class="data_integrity_body" id="live_log2">
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
            @click="goAnchor('#boot_log2')"
          >开机日志</a>
        </el-row>
        <!-- <el-row> -->
        <!-- <a href="#heartbeat_log">心跳日志</a> -->
        <!-- <a href="javascript:void(0)" class="anchor_link2" @click="goAnchor('#heartbeat_log2')">心跳日志</a> -->
        <!-- </el-row> -->
        <el-row>
          <!-- <a href="#page_access_log">页面访问日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link3"
            @click="goAnchor('#page_access_log2')"
          >页面访问日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#thermodynamic_log">热力图日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link4"
            @click="goAnchor('#thermodynamic_log2')"
          >热力图日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#bunch_planting_log">点播播放日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link5"
            @click="goAnchor('#bunch_planting_log2')"
          >点播播放日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#look_back_log">回看播放日志</a> -->
          <a
            href="javascript:void(0)"
            class="anchor_link6"
            @click="goAnchor('#look_back_log2')"
          >回看播放日志</a>
        </el-row>
        <el-row>
          <!-- <a href="#live_log">直播播放日志</a> -->
          <a class="anchor_link7" href="javascript:void(0)" @click="goAnchor('#live_log2')">直播播放日志</a>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { errorReport } from "@/api/api_main";

import DataIntegrityModel from "@/views/backcoms/dataaudit/DataIntegrityModel2"; //表格组件

export default {
  name: "AbnormalValue", //数据异常值
  components: {
    "data-integrity-model": DataIntegrityModel
  },
  data() {
    return {
      usercount: [],
      heartbeat: [],
      basedata: [],
      epghot: [],
      demand: [],
      review: [],
      onlive: [],

      echart_data: {
        id: "abnormalValueChart",
        dataTime: [
          "12日",
          "13日",
          "14日",
          "15日",
          "16日",
          "17日",
          "18日",
          "19日",
          "20日",
          "21日",
          "22日",
          "23日",
          "24日",
          "25日",
          "26日",
          "27日"
        ],
        nameArray: [
          "贵阳",
          "遵义",
          "安顺",
          "黔南",
          "黔东南",
          "铜仁",
          "毕节",
          "六盘水",
          "黔西南"
        ],
        stringArray: [
          "2.399513119\t2.828314028\t2.312376238\t2.39081537\t2.80230535\t4.282758621\t2.871265378\t3.114492445\t2.054696012\t2.142528736\t2.260790641\t2.956497386\t2.756800871\t2.834182329\t2.161296509\t2.069767442",
          "2.243289306\t2.451304667\t3.072733787\t3.604081633\t3.245494096\t2.364439536\t2.964993216\t2.597731469\t2.108393409\t2.114770973\t2.23516537\t2.211039681\t2.413382594\t2.330260836\t2.249948014\t2.356405586",
          "2.2115548\t2.292988314\t2.519937451\t2.497893258\t2.872407291\t2.538233551\t2.490751445\t2.459797499\t2.272427078\t2.300180018\t2.214814815\t2.291609977\t2.514273166\t2.553508772\t2.346221441\t3.146224356",
          "2.881062356\t3.452354874\t6.891098485\t6.633161512\t5.189054726\t3.179948586\t2.965047393\t2.928571429\t2.660836977\t2.630785791\t2.739397036\t2.946314832\t3.237510955\t3.279137287\t2.999109924\t3.03467707",
          "2.465287049\t2.561500615\t2.459474886\t2.412334353\t2.416162489\t3.014393939\t2.720028209\t2.606966925\t2.497919556\t2.417412782\t2.463011314\t2.712787724\t2.811590689\t3.691940976\t2.441564675\t2.481199539",
          "2.264090177\t2.755319149\t2.627272727\t2.629251701\t3.463753724\t6.730186999\t2.640067912\t4.172828891\t2.45295587\t4.059006211\t13.71069634\t3.83463035\t2.623197115\t2.623885918\t2.367591425\t5.274660366",
          "2.845310597\t2.784334764\t3.176416819\t8.3352\t2.855622089\t2.995719636\t2.912475822\t2.709547739\t2.521096129\t2.787443578\t2.731441048\t2.579281184\t2.750401542\t2.722999107\t2.494865212\t2.878107218",
          "2.579158317\t2.437965261\t2.428742515\t2.682148853\t2.512361915\t2.73129562\t3.615555556\t6.080348944\t6.415909091\t4.479406919\t5.112459547\t2.496071829\t2.531814895\t2.546671128\t2.665264634\t2.435844513",
          "2.810897436\t2.833093525\t2.784266985\t2.880855397\t3.12243221\t3.431059507\t2.886162236\t2.824213406\t2.591207349\t2.568014706\t2.58037225\t2.846077948\t2.813664596\t2.715574549\t6.092814371\t6.200475059"
        ]
      }
    };
  },
  mounted() {
    let vm = this;
    setTimeout(function () {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function (response) {
          vm.errorReport(response);
          // setTimeout(function() {
          //   vm.echarts_manage();
          // }, 1000);
        })
        .catch(function (error) {
          console.info(error);
        });
    }, 100);

    $("#data_integrity_content").scroll(function (event) {
      //console.log($('.backHome_body_main').scrollTop())
      let scrollTopHeight = $("#data_integrity_content").scrollTop();
      if (0 <= scrollTopHeight) {
        $(".anchor_link1")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (300 <= scrollTopHeight) {
        $(".anchor_link3")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (600 <= scrollTopHeight) {
        $(".anchor_link4")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (900 <= scrollTopHeight) {
        $(".anchor_link5")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (1200 <= scrollTopHeight) {
        $(".anchor_link6")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (1500 < scrollTopHeight) {
        $(".anchor_link7")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
    });
  },
  methods: {
    goAnchor(selector) {
      let data_integrity_content = document.querySelector(
        "#data_integrity_content"
      ); //外层滚动容器元素
      //console.log("backHome_body_main", backHome_body_main)
      var anchor = document.querySelector(selector); // 参数为要跳转到的元素id
      data_integrity_content.scrollTop = anchor.offsetTop;
      $(".anchor_hyperlinks a").on("click", function () {
        $(this)
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      });
    },
    errorReport(ExpirationDate) {
      let vm = this;
      let temp = {
        start: ExpirationDate,
        end: ExpirationDate
      };
      // console.log(temp);
      var formData = new FormData();
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      errorReport(formData)
        .then(function (response) {
          // console.log(response);
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
              currentPerTitleData.n_exception.value;
            temp_pertitle_data.LackOfProportion =
              currentPerTitleData.exception_rate.value;
            return temp_pertitle_data;
          }
          function dataManage(index_0_child) {
            let buckets_0_cc = buckets_0_child[index_0_child].fieldname.buckets;
            let length_0_cc = buckets_0_cc.length;
            let i_0_cc;
            // 3个字段固定： uid operators durationOnlive
            let temp_type_data = [];
            let i_temp3;
            for (i_temp3 = 0; i_temp3 < 3; i_temp3++) {
              temp_type_data.push({});
            }
            for (i_0_cc = 0; i_0_cc < length_0_cc; i_0_cc++) {
              if (buckets_0_cc[i_0_cc].key == "uid") {
                temp_type_data[0] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "operators") {
                temp_type_data[1] = dataManage_title(buckets_0_cc[i_0_cc]);
              }
              if (buckets_0_cc[i_0_cc].key == "durationOnlive") {
                temp_type_data[2] = dataManage_title(buckets_0_cc[i_0_cc]);
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
              if (buckets_0_child[i_0_child].key == "useronline") {
                temp_heartbeat_all = dataManage(i_0_child);
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
              if (buckets_0_child[i_0_child].key == "epgHot") {
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

          // console.log("~~~~~~!!!!!");
          // console.log(temp_all);
          vm.usercount = temp_all[0];
          vm.heartbeat = temp_all[1];
          vm.basedata = temp_all[2];
          vm.epghot = temp_all[3];
          vm.demand = temp_all[4];
          vm.review = temp_all[5];
          vm.onlive = temp_all[6];
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    echarts_manage() {
      // 时间设置为 截止日期所在月1号~截止日期
      // 基于准备好的dom，初始化echarts实例
      let vm = this;
      var abnormalValueChart = this.$echarts.init(
        document.getElementById(vm.echart_data.id)
      );
      var dataTime = vm.echart_data.dataTime;
      var nameArray = vm.echart_data.nameArray;
      var stringArray = vm.echart_data.stringArray;

      var seriesData = [];
      for (var i = 0; i < 9; i++) {
        var tmpData = {};
        tmpData.type = "line";
        tmpData.symbol = "circle";
        tmpData.data = stringArray[i].split("\t");
        for (var j = 0; j < tmpData.data.length; j++) {
          tmpData.data[j] = parseFloat(tmpData.data[j]).toFixed(2);
        }
        tmpData.name = nameArray[i];
        seriesData[i] = tmpData;
      }
      // console.log("seriesData", seriesData);
      seriesData[5].markPoint = {
        symbol: "Rect",
        symbolSize: [80, 30],
        label: {
          show: true,
          formatter: function (param) {
            return "异常值";
          }
        },
        data: [
          {
            coord: [10, "14.2"],
            label: { show: true }
          }
        ]
      };

      // 指定图表的配置项和数据
      var option = {
        color: [
          "#3BA0FF",
          "#FF6123",
          "#975FE4",
          "#7ECDF4",
          "#FCB84F",
          "#4ADBC7",
          "#5E70F1",
          "#A9CCDC",
          "#FC9D91"
        ],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: nameArray,
          icon: "circle",
          itemWidth: 6, // 设置宽度
          itemHeight: 6, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.65)"
          }
        },
        //图表自带工具
        toolbox: {
          show: true,
          feature: {
            // dataView: { readOnly: false }, //切换数据视图查看数据
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        grid: {
          top: "10%",
          left: "2%",
          right: "2%",
          bottom: "7%",
          containLabel: true
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: "inside",
            start: 0,
            end: 100
          }
        ],
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: dataTime,
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "12" //设置横坐标轴文字颜大小
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          }
        },
        yAxis: {
          type: "value",
          // 刻度线的设置
          splitLine: {
            show: true,
            lineStyle: {
              color: "#939393",
              type: "dotted",
              opacity: 0.2
            }
          },
          axisLine: {
            show: false, //Y轴不显示
            lineStyle: {
              color: "rgba(0,0,0,0.65)" //设置横坐标轴线颜色
            }
          },
          axisLabel: {
            //横坐标类目文字
            show: true,
            textStyle: {
              fontSize: "12" //设置横坐标轴文字颜大小
            }
          },
          axisTick: {
            show: false //设置坐标轴刻度不显示
          }
        },
        series: seriesData
      };

      // 使用刚指定的配置项和数据显示图表。
      abnormalValueChart.setOption(option);

      window.addEventListener("resize", () => {
        abnormalValueChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.abnormal_value_body {
  height: 750px;
  margin-bottom: 50px;
}

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
  /* height: 229px; */
  height: 300px;
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
.table_content {
  padding-bottom: 30px;
}
</style>