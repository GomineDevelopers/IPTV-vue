<template>
  <div class="data_total">
    <el-row>
      <el-col class="data_body_left" :span="4" :lg="4" :md="5">
        <el-row class="data_detail_model data_detail_city back_white">
          <com-dataoverview v-bind:city="data.city"></com-dataoverview>
        </el-row>
        <el-row class="data_detail_model back_white">
          <com-datashow
            v-bind:icon="data.datashow[0].icon"
            v-bind:title="data.datashow[0].title"
            v-bind:numT="data.datashow[0].numT"
            v-bind:content="data.datashow[0].content"
            v-bind:numC="data.datashow[0].numC"
          ></com-datashow>
        </el-row>
        <el-row class="data_detail_model back_white">
          <com-datashow
            v-bind:icon="data.datashow[1].icon"
            v-bind:title="data.datashow[1].title"
            v-bind:numT="data.datashow[1].numT"
            v-bind:content="data.datashow[1].content"
            v-bind:numC="data.datashow[1].numC"
          ></com-datashow>
        </el-row>
        <el-row class="data_detail_model back_white">
          <com-datashow
            v-bind:icon="data.datashow[2].icon"
            v-bind:title="data.datashow[2].title"
            v-bind:numT="data.datashow[2].numT"
            v-bind:content="data.datashow[2].content"
            v-bind:numC="data.datashow[2].numC"
          ></com-datashow>
        </el-row>
      </el-col>
      <el-col class="data_body_middle" :span="16" :lg="16" :md="14">
        <div class="data_map back_white">
          <com-map @setcity="setcity" @setDatashow="setDatashow" @updateDatashow="updateDatashow"></com-map>
        </div>
      </el-col>
      <el-col class="data_body_right" :span="4" :lg="4" :md="5">
        <el-row class="data_detail_model back_white">
          <com-datashow
            v-bind:icon="data.datashow[3].icon"
            v-bind:title="data.datashow[3].title"
            v-bind:numT="data.datashow[3].numT"
            v-bind:content="data.datashow[3].content"
            v-bind:numC="data.datashow[3].numC"
          ></com-datashow>
        </el-row>
        <el-row class="data_detail_model back_white">
          <com-datashow
            v-bind:icon="data.datashow[4].icon"
            v-bind:title="data.datashow[4].title"
            v-bind:numT="data.datashow[4].numT"
            v-bind:content="data.datashow[4].content"
            v-bind:numC="data.datashow[4].numC"
          ></com-datashow>
        </el-row>
        <el-row class="data_detail_model back_white">
          <com-datashow
            v-bind:icon="data.datashow[5].icon"
            v-bind:title="data.datashow[5].title"
            v-bind:numT="data.datashow[5].numT"
            v-bind:content="data.datashow[5].content"
            v-bind:numC="data.datashow[5].numC"
          ></com-datashow>
        </el-row>
        <el-row class="data_detail_model back_white">
          <com-datashow
            v-bind:icon="data.datashow[6].icon"
            v-bind:title="data.datashow[6].title"
            v-bind:numT="data.datashow[6].numT"
            v-bind:content="data.datashow[6].content"
            v-bind:numC="data.datashow[6].numC"
          ></com-datashow>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="data_total_bottom">
      <el-col class="data_bottom_left" :span="12">
        <el-row class="model_title">
          <span class="title_border_left"></span>用户画像
        </el-row>
        <div class="chart_body back_white">
          <com-userportrait></com-userportrait>
        </div>
      </el-col>
      <el-col class="data_bottom_right" :span="12">
        <el-row class="model_title">
          <span class="title_border_left"></span>日活趋势（万）
        </el-row>
        <div class="chart_body back_white">
          <line-chart-single2 :lineData="dailyLivingTrendData"></line-chart-single2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyMap from "@/views/backcoms/datatotal/MyMap"; // 地图
import DataOverview from "@/views/backcoms/datatotal/DataOverview"; // 数据总览
import DataShow from "@/views/backcoms/datatotal/DataShow"; // 数据展示
import UserPortrait from "@/views/backcoms/datatotal/UserPortrait"; // 用户画像
import LineChartSingle2 from "@/views/backcoms/commoncomponents/LineChartSingle2"; //单数据折线图组件(日活趋势组件)

import { users_total } from "@/api/api_main";
import { commonTools } from "@/utils/test";

import Vue from "vue"; // 数组操作

export default {
  name: "DataTotal", //数据总览
  components: {
    "com-map": MyMap,
    "com-dataoverview": DataOverview,
    "com-datashow": DataShow,
    "com-userportrait": UserPortrait,
    "line-chart-single2": LineChartSingle2
  },
  mounted() {
    let vm = this;

    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenStartDate")
        .then(function(res1) {
          setTimeout(function() {
            vm.$store
              .dispatch("get_BigScreenExpirationDate")
              .then(function(res2) {
                vm.users_total(res1, res2, "singleday"); // 截止统计日
                vm.users_total(res2, res2, "rangeday"); // 日维度
              })
              .catch(function(error) {
                console.info(error);
              });
          }, 100);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },

  methods: {
    users_total(StartDate, ExpirationDate, type) {
      console.log("~~~~~~~~~users_total");
      let vm = this;
      let data = {
        start: StartDate,
        end: ExpirationDate
      };
      // vm.api_data.module2_numT = [
      //   "851",
      //   "852",
      //   "853",
      //   "854",
      //   "855",
      //   "856",
      //   "857",
      //   "858",
      //   "859"
      // ];
      users_total(data)
        .then(function(response) {
          console.log(response);
          // console.log(response.data.responses[0].aggregations.ac.buckets);
          // console.log(
          //   response.data.responses[0].aggregations.ac.buckets[0].key
          // );
          // let data = response.data.responses[0].aggregations.ac.buckets;
          let responses1 = response.data.responses[0];
          // activate_user_num: {value: 949770}
          // doc_count: 24
          // key: "851"
          // new_num: {value: 580520}
          // open_num: {value: 2371}
          // register_num: {value: 3572107}
          let responses2 = response.data.responses[1];
          // doc_count: 38
          // key: "851"
          // watch_dur_family: {value: 1735929.4043456912}
          // watch_user_num: {value: 584388}
          let responses3 = response.data.responses[2];
          // doc_count: 24
          // downtime_user_num: {value: 39}
          // downtime_user_num_t: {value: 49960}
          // key: "851"
          // paid_num: {value: 0}
          // unsub_user_num: {value: 155}
          // unsub_user_num_t: {value: 51828}

          // singleday
          // module1_numC - new_num
          // module3_numT - open_num
          // module3_numC - open_rate
          // module4_numT - watch_user_num
          // module4_numC - watch_dur_family
          // module6_numC - downtime_user_num
          // module7_numC - unsub_user_num

          // rangeday
          // module1_numT - register_num
          // module2_numT - activate_user_num
          // module2_numC - activate_rate
          // module5_numT - paid_num
          // module5_numC - paid_rate
          // module6_numT - downtime_user_num_t
          // module7_numT - unsub_user_num_t

          // 1:
          // aggregations:
          // ac:
          // buckets: Array(10)
          // 0:
          // doc_count: 38
          // key: "851"
          // watch_dur_family: {value: 1735929.4043456912}
          // watch_user_num: {value: 584388}

          // let length = data.length;
          let length = 9; // 1 -8  9 个 ，不要 10 others

          let i;
          function dataManage(i) {
            if (type == "singleday") {
              Vue.set(
                vm.api_data.module1_numC,
                i,
                responses1.aggregations.ac.buckets[i].new_num.value
              );
              Vue.set(
                vm.api_data.module3_numT,
                i,
                responses1.aggregations.ac.buckets[i].open_num.value
              );
              Vue.set(
                vm.api_data.module3_numC,
                i,
                responses1.aggregations.ac.buckets[i].open_num.value /
                  responses1.aggregations.ac.buckets[i].register_num.value
              );
              Vue.set(
                vm.api_data.module4_numT,
                i,
                responses2.aggregations.ac.buckets[i].watch_user_num.value
              );
              Vue.set(
                vm.api_data.module4_numC,
                i,
                responses2.aggregations.ac.buckets[i].watch_dur_family.value
              );
              Vue.set(
                vm.api_data.module6_numC,
                i,
                responses3.aggregations.ac.buckets[i].downtime_user_num.value
              );
              Vue.set(
                vm.api_data.module7_numC,
                i,
                responses3.aggregations.ac.buckets[i].unsub_user_num.value
              );
            }
            if (type == "rangeday") {
              Vue.set(
                vm.api_data.module1_numT,
                i,
                responses1.aggregations.ac.buckets[i].register_num.value
              );
              Vue.set(
                vm.api_data.module2_numT,
                i,
                responses1.aggregations.ac.buckets[i].activate_user_num.value
              );
              Vue.set(
                vm.api_data.module2_numC,
                i,
                responses1.aggregations.ac.buckets[i].activate_user_num.value /
                  responses1.aggregations.ac.buckets[i].register_num.value
              );
              Vue.set(
                vm.api_data.module5_numT,
                i,
                responses3.aggregations.ac.buckets[i].paid_num.value
              );
              Vue.set(
                vm.api_data.module5_numC,
                i,
                responses3.aggregations.ac.buckets[i].paid_num.value /
                  responses1.aggregations.ac.buckets[i].active_num.value
              );
              Vue.set(
                vm.api_data.module6_numT,
                i,
                responses3.aggregations.ac.buckets[i].downtime_user_num_t.value
              );
              Vue.set(
                vm.api_data.module7_numT,
                i,
                responses3.aggregations.ac.buckets[i].unsub_user_num_t.value
              );
            }
          }
          // 开机用户
          for (i = 0; i < length; i++) {
            console.log(responses1.aggregations.ac.buckets[i].key);
            console.log(responses2.aggregations.ac.buckets[i].key);
            console.log(responses3.aggregations.ac.buckets[i].key);

            if (
              responses1.aggregations.ac.buckets[i].key == "851" &&
              responses2.aggregations.ac.buckets[i].key == "851" &&
              responses3.aggregations.ac.buckets[i].key == "851"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "852" &&
              responses2.aggregations.ac.buckets[i].key == "852" &&
              responses3.aggregations.ac.buckets[i].key == "852"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "853" &&
              responses2.aggregations.ac.buckets[i].key == "853" &&
              responses3.aggregations.ac.buckets[i].key == "853"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "854" &&
              responses2.aggregations.ac.buckets[i].key == "854" &&
              responses3.aggregations.ac.buckets[i].key == "854"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "855" &&
              responses2.aggregations.ac.buckets[i].key == "855" &&
              responses3.aggregations.ac.buckets[i].key == "855"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "856" &&
              responses2.aggregations.ac.buckets[i].key == "856" &&
              responses3.aggregations.ac.buckets[i].key == "856"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "857" &&
              responses2.aggregations.ac.buckets[i].key == "857" &&
              responses3.aggregations.ac.buckets[i].key == "857"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "858" &&
              responses2.aggregations.ac.buckets[i].key == "858" &&
              responses3.aggregations.ac.buckets[i].key == "858"
            ) {
              dataManage(i);
            }
            if (
              responses1.aggregations.ac.buckets[i].key == "859" &&
              responses2.aggregations.ac.buckets[i].key == "859" &&
              responses3.aggregations.ac.buckets[i].key == "859"
            ) {
              dataManage(i);
            }
          }

          console.log("vm.api_data~~~~~~");
          console.log(vm.api_data);
          vm.updateDatashow(0); // 数据初始化 - 0 - 贵阳
          vm.updateDatashow(1);
          vm.updateDatashow(2);
          vm.updateDatashow(3);
          vm.updateDatashow(4);
          vm.updateDatashow(5);
          vm.updateDatashow(6);
          vm.updateDatashow(7);
          vm.updateDatashow(8);
          vm.ifRequestSuccess = 1;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifRequestSuccess = 0;
          vm.setDatashow(vm.data.datashow2);
        });
    },
    setcity(city) {
      this.data.city = city;
    },
    setDatashow(datashow) {
      this.data.datashow = datashow;
    },
    updateDatashow(city_num) {
      // api_data.module2_numT
      // let length = this.data.datashow.length;
      // let i;
      // for(i=0;i<length;i++){
      // }
      if (this.ifRequestSuccess == 0) {
        // this.data.datashow[2].numT = "...";
        this.data.datashow[0].numT = "...";
        this.data.datashow[0].numC = "...";
        this.data.datashow[1].numT = "...";
        this.data.datashow[1].numC = "...";
        this.data.datashow[2].numT = "...";
        this.data.datashow[2].numC = "...";
        this.data.datashow[3].numT = "...";
        this.data.datashow[3].numC = "...";
        this.data.datashow[4].numT = "...";
        this.data.datashow[4].numC = "...";
        this.data.datashow[5].numT = "...";
        this.data.datashow[5].numC = "...";
        this.data.datashow[6].numT = "...";
        this.data.datashow[6].numC = "...";
      } else if (this.ifRequestSuccess == 2) {
        // this.data.datashow[2].numT = "数据请求中...";
        this.data.datashow[0].numT = "...";
        this.data.datashow[0].numC = "...";
        this.data.datashow[1].numT = "...";
        this.data.datashow[1].numC = "...";
        this.data.datashow[2].numT = "...";
        this.data.datashow[2].numC = "...";
        this.data.datashow[3].numT = "...";
        this.data.datashow[3].numC = "...";
        this.data.datashow[4].numT = "...";
        this.data.datashow[4].numC = "...";
        this.data.datashow[5].numT = "...";
        this.data.datashow[5].numC = "...";
        this.data.datashow[6].numT = "...";
        this.data.datashow[6].numC = "...";
      } else {
        // this.data.datashow[2].numT = this.api_data.module2_numT[city_num];

        this.data.datashow[0].numT = this.api_data.module1_numT[city_num];
        this.data.datashow[0].numC = this.api_data.module1_numC[city_num];
        this.data.datashow[1].numT = this.api_data.module2_numT[city_num];
        this.data.datashow[1].numC =
          String(
            commonTools.returnFloat_2(
              this.api_data.module2_numC[city_num] * 100
            )
          ) + "%";
        this.data.datashow[2].numT = this.api_data.module3_numT[city_num];

        this.data.datashow[2].numC =
          String(
            commonTools.returnFloat_2(
              this.api_data.module3_numC[city_num] * 100
            )
          ) + "%";

        this.data.datashow[3].numT = this.api_data.module4_numT[city_num];
        this.data.datashow[3].numC = parseInt(
          this.api_data.module4_numC[city_num]
        );

        this.data.datashow[4].numT = this.api_data.module5_numT[city_num];
        this.data.datashow[4].numC =
          String(
            commonTools.returnFloat_2(
              this.api_data.module5_numC[city_num] * 100
            )
          ) + "%";

        this.data.datashow[5].numT = this.api_data.module6_numT[city_num];
        this.data.datashow[5].numC = this.api_data.module6_numC[city_num];
        this.data.datashow[6].numT = this.api_data.module7_numT[city_num];
        this.data.datashow[6].numC = this.api_data.module7_numC[city_num];
      }
    }
  },
  data() {
    return {
      ifRequestSuccess: 2, // 数据请求状态（默认：请求中）：0-失败 1-成功 2-请求中
      api_data: {
        // 日维度 - singleday   截止统计日 - rangeday

        // module0 是 city（市）
        // 在册用户  - register_num -  截止统计日
        module1_numT: [],
        // 每日新增在册用户 - new_num -  日维度
        module1_numC: [],
        // 激活用户 - activate_user_num -  截止统计日
        module2_numT: [],
        // 激活率 - activate_rate -  截止统计日
        module2_numC: [],
        // 开机用户 - open_num -  日维度
        module3_numT: [],
        // 开机率 - open_rate -  日维度
        module3_numC: [],
        // 收视用户(观看用户数) - watch_user_num -  日维度
        module4_numT: [],
        // 户均收视次数 - watch_dur_family -  日维度
        module4_numC: [],
        // 付费用户(订购用户数)- paid_num -  截止统计日
        module5_numT: [],
        // 付费转化率- paid_rate -  截止统计日
        module5_numC: [],
        // 停机- downtime_user_num_t -  截止统计日
        module6_numT: [],
        // 每日停机户 - downtime_user_num -  日维度
        module6_numC: [],
        // 销户- unsub_user_num_t -  截止统计日
        module7_numT: [],
        // 每日销户数 - unsub_user_num -  日维度
        module7_numC: []
      },
      data: {
        city: "贵阳",
        //新增用户概览数据
        datashow0: [
          {
            icon: "&#xe600;",
            title: "在册用户",
            numT: "数据请求中...",
            content: "每日新增在册用户",
            numC: "数据请求中..."
          },
          {
            icon: "&#xe620;",
            title: "激活用户",
            numT: "数据请求中...",
            content: "激活率",
            numC: "数据请求中..."
          },

          {
            icon: "&#xe60c;",
            title: "开机用户",
            numT: "数据请求中...",
            content: "开机率",
            numC: "数据请求中..."
          },
          {
            icon: "&#xe641;",
            title: "收视用户",
            numT: "数据请求中...",
            content: "户均收视次数",
            numC: "数据请求中..."
          },
          {
            icon: "&#xe64f;",
            title: "付费用户",
            numT: "数据请求中...",
            content: "付费转化率",
            numC: "数据请求中..."
          },
          {
            icon: "&#xe612;",
            title: "停机",
            numT: "数据请求中...",
            content: "每日停机户",
            numC: "数据请求中..."
          },
          {
            icon: "&#xe601;",
            title: "销户",
            numT: "数据请求中...",
            content: "每日销户数",
            numC: "数据请求中..."
          }
        ],
        datashow: [
          {
            icon: "&#xe600;",
            title: "在册用户",
            numT: "0",
            content: "每日新增在册用户",
            numC: "0"
          },
          {
            icon: "&#xe620;",
            title: "激活用户",
            numT: "0",
            content: "激活率",
            numC: "0%"
          },

          {
            icon: "&#xe60c;",
            title: "开机用户",
            numT: "0",
            content: "开机率",
            numC: "0%"
          },
          {
            icon: "&#xe641;",
            title: "收视用户",
            numT: "0",
            content: "户均收视次数",
            numC: "0"
          },
          {
            icon: "&#xe64f;",
            title: "付费用户",
            numT: "0",
            content: "付费转化率",
            numC: "0"
          },
          {
            icon: "&#xe612;",
            title: "停机",
            numT: "0",
            content: "每日停机户",
            numC: "0"
          },
          {
            icon: "&#xe601;",
            title: "销户",
            numT: "0",
            content: "每日销户数",
            numC: "0"
          }
        ],
        datashow2: [
          {
            icon: "&#xe600;",
            title: "在册用户",
            numT: "0",
            content: "每日新增在册用户",
            numC: "0"
          },
          {
            icon: "&#xe620;",
            title: "激活用户",
            numT: "0",
            content: "激活率",
            numC: "0%"
          },

          {
            icon: "&#xe60c;",
            title: "开机用户",
            numT: "0",
            content: "开机率",
            numC: "0%"
          },
          {
            icon: "&#xe641;",
            title: "收视用户",
            numT: "0",
            content: "户均收视次数",
            numC: "0"
          },
          {
            icon: "&#xe64f;",
            title: "付费用户",
            numT: "0",
            content: "付费转化率",
            numC: "0"
          },
          {
            icon: "&#xe612;",
            title: "停机",
            numT: "0",
            content: "每日停机户",
            numC: "0"
          },
          {
            icon: "&#xe601;",
            title: "销户",
            numT: "0",
            content: "每日销户数",
            numC: "0"
          }
        ],
        datashow2_beifen: [
          {
            icon: "&#xe600;",
            title: "在册用户",
            numT: "数据请求失败！",
            content: "每日新增在册用户",
            numC: "数据请求失败！"
          },
          {
            icon: "&#xe620;",
            title: "激活用户",
            numT: "数据请求失败！",
            content: "激活率",
            numC: "数据请求失败！"
          },

          {
            icon: "&#xe60c;",
            title: "开机用户",
            numT: "数据请求失败！",
            content: "开机率",
            numC: "数据请求失败！"
          },
          {
            icon: "&#xe641;",
            title: "收视用户",
            numT: "数据请求失败！",
            content: "户均收视次数",
            numC: "数据请求失败！"
          },
          {
            icon: "&#xe64f;",
            title: "付费用户",
            numT: "数据请求失败！",
            content: "付费转化率",
            numC: "数据请求失败！"
          },
          {
            icon: "&#xe612;",
            title: "停机",
            numT: "数据请求失败！",
            content: "每日停机户",
            numC: "数据请求失败！"
          },
          {
            icon: "&#xe601;",
            title: "销户",
            numT: "数据请求失败！",
            content: "每日销户数",
            numC: "数据请求失败！"
          }
        ]
      },
      dailyLivingTrendData: {
        title: "",
        id: "dailyLivingTrend",
        color: ["#3BA0FF", "#FF6123", "#975FE4"],
        date_year: "2019年",
        date_month: "8月",
        data: [
          [
            "product",
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
          [
            "中国移动",
            140,
            170,
            180,
            200,
            234,
            240,
            259,
            265,
            270,
            284,
            298,
            300,
            259,
            265,
            270,
            284
          ],
          [
            "中国联通",
            100,
            106,
            119,
            123,
            138,
            123,
            118,
            124,
            130,
            136,
            149,
            151,
            118,
            124,
            130,
            136
          ],
          [
            "中国电信",
            45,
            52,
            63,
            68,
            79,
            72,
            60,
            65,
            70,
            62,
            68,
            78,
            65,
            65,
            65,
            70,
            62,
            68
          ]
        ]
      }
    };
  }
};
</script>
<style scoped>
.data_total {
  height: auto;
  color: rgba(0, 0, 0, 0.85);
  text-align: left;
}
.data_total .data_body_left,
.data_total .data_body_middle,
.data_total .data_body_right {
  height: 598px;
}
.data_total .data_body_middle {
  padding: 0 14px;
}
.data_body_middle .data_map {
  width: 100%;
  height: 100%;
}
.data_total .data_detail_model {
  height: calc((100% - 42px) / 4);
  margin-bottom: 14px;
  padding: 10px;
}
.data_total .data_detail_model:nth-child(4) {
  margin-bottom: 0px;
}
.data_detail_city {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
.data_detail_cityname {
  height: calc(100% - 25px);
  display: -webkit-flex;
  display: flex;
  flex: 1;
  -webkit-flex: 1;
  align-items: center;
}
.data_detail_cityname {
  margin: 0 auto;
}
.data_bottom_left,
.data_bottom_right {
  height: 352px;
}
.data_total_bottom {
  margin: 14px 0px;
  margin-bottom: 70px;
}
.data_bottom_left {
  padding-right: 7px;
}
.data_bottom_right {
  padding-left: 7px;
}
.user_portrayal,
.day_live_tendency {
  width: 100%;
  height: 100%;
}
</style>


