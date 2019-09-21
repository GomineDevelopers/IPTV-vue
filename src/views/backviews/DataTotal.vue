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
    this.users_total();
  },

  methods: {
    users_total() {
      // console.log("users_total");
      let vm = this;
      let data = {
        start: "2019-07-14",
        end: "2019-07-14"
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
          // console.log(response);
          // console.log(response.data.responses[0].aggregations.ac.buckets);
          // console.log(
          //   response.data.responses[0].aggregations.ac.buckets[0].key
          // );
          let data = response.data.responses[0].aggregations.ac.buckets;
          let length = data.length;
          let i;
          // 开机用户
          for (i = 0; i < length; i++) {
            if (data[i].key == "851") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
              // Vue.set(vm.api_data.module2_numT, i, "851");
            }
            if (data[i].key == "852") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
            if (data[i].key == "853") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
            if (data[i].key == "854") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
            if (data[i].key == "855") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
            if (data[i].key == "856") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
            if (data[i].key == "857") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
            if (data[i].key == "858") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
            if (data[i].key == "859") {
              Vue.set(vm.api_data.module2_numT, i, data[i].open_num.value);
            }
          }
          vm.ifRequestSuccess = 1;
          vm.updateDatashow(0); // 数据初始化 - 0 - 贵阳
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
        this.data.datashow[2].numT = "数据请求失败！";
      } else if (this.ifRequestSuccess == 2) {
        this.data.datashow[2].numT = "数据请求中...";
      } else {
        this.data.datashow[2].numT = this.api_data.module2_numT[city_num];
      }
    }
  },
  data() {
    return {
      ifRequestSuccess: 2, // 数据请求状态（默认：请求中）：0-失败 1-成功 2-请求中
      api_data: {
        // module0 是 city（市）
        // 在册用户
        module1_numT: [],
        // 每日新增在册用户
        module1_numC: [],
        // 激活用户
        module2_numT: [],
        // 激活率
        module2_numC: [],
        // 开机用户
        module3_numT: [],
        // 开机率
        module3_numC: [],
        // 收视用户
        module4_numT: [],
        // 户均收视次数
        module4_numC: [],
        // 付费用户
        module5_numT: [],
        // 付费转化率
        module5_numC: [],
        // 停机
        module6_numT: [],
        // 每日停机户
        module6_numC: [],
        // 销户
        module7_numT: [],
        // 每日销户数
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
            numT: "231.1",
            content: "每日新增在册用户",
            numC: "12423"
          },
          {
            icon: "&#xe620;",
            title: "激活用户",
            numT: "132.2",
            content: "激活率",
            numC: "67%"
          },

          {
            icon: "&#xe60c;",
            title: "开机用户",
            numT: "23.1",
            content: "开机率",
            numC: "32%"
          },
          {
            icon: "&#xe641;",
            title: "收视用户",
            numT: "29.1",
            content: "户均收视次数",
            numC: "12231"
          },
          {
            icon: "&#xe64f;",
            title: "付费用户",
            numT: "18.1",
            content: "付费转化率",
            numC: "12423"
          },
          {
            icon: "&#xe612;",
            title: "停机",
            numT: "0.7",
            content: "每日停机户",
            numC: "32"
          },
          {
            icon: "&#xe601;",
            title: "销户",
            numT: "2.5",
            content: "每日销户数",
            numC: "25"
          }
        ],
        datashow2: [
          {
            icon: "&#xe600;",
            title: "在册用户",
            numT: "231.1",
            content: "每日新增在册用户",
            numC: "12423"
          },
          {
            icon: "&#xe620;",
            title: "激活用户",
            numT: "132.2",
            content: "激活率",
            numC: "67%"
          },

          {
            icon: "&#xe60c;",
            title: "开机用户",
            numT: "23.1",
            content: "开机率",
            numC: "32%"
          },
          {
            icon: "&#xe641;",
            title: "收视用户",
            numT: "29.1",
            content: "户均收视次数",
            numC: "12231"
          },
          {
            icon: "&#xe64f;",
            title: "付费用户",
            numT: "18.1",
            content: "付费转化率",
            numC: "12423"
          },
          {
            icon: "&#xe612;",
            title: "停机",
            numT: "0.7",
            content: "每日停机户",
            numC: "32"
          },
          {
            icon: "&#xe601;",
            title: "销户",
            numT: "2.5",
            content: "每日销户数",
            numC: "25"
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


