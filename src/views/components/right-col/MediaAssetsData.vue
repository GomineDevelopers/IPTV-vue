<template>
  <div class="MediaAssetsData height_auto">
    <el-row class="title_row">
      <!-- <span class="title_border_left"></span>媒资数据 (近7天) -->
      <span class="title_border_left"></span>媒资数据 (上月)
    </el-row>
    <el-row v-show="ifgetdata" id="media_assets_data" :style="{width: '16vw',height: '16vh'}"></el-row>
    <el-row v-show="ifgetdata" class="MAD_bottom" :style="{width: '16vw',height: '16vh'}">
      <!-- <p class="content_title">总节目数量</p> -->
      <div class="content_title">
        <div class="c_title_1P">
          <span class="c_title_1">总节目数量</span>
        </div>
        <div class="c_title_2P">
          <span class="c_title_2">新增节目数量</span>
        </div>
      </div>
      <div class="content_con">
        <div class="content_numP">
          <!-- <span class="content_num">123.7万</span> -->
          <span class="content_num">{{programNum}}</span>
        </div>
        <!-- <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> -->
        <div class="content_percentP">
          <span class="content_percent">
            <!-- 环比3.2% -->
            环比{{program_num_Ratio}}
            <!-- 新增环比{{program_num_Ratio}} -->
            <img v-show="if_program_num_Ratio_up == true && if_0 == false" src="@/assets/up.gif" />
            <img v-show="if_program_num_Ratio_up != true && if_0 == false" src="@/assets/up2.gif" />
          </span>
        </div>
      </div>
      <!-- <p class="content_title">总收视时长(时)</p> -->
      <!-- <p class="content_title">上月总收视时长(时)</p> -->
      <div class="content_title">
        <div class="c_title_1P">
          <span class="c_title_1">上月总收视时长(时)</span>
        </div>
        <div class="c_title_2P">
          <span class="c_title_2">新增总收视时长</span>
        </div>
      </div>
      <div class="content_con">
        <div class="content_numP">
          <!-- <span class="content_num">4325.7万</span> -->
          <span class="content_num">{{data_new}}</span>
        </div>
        <!-- <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> -->
        <!-- <span class="content_percent">
          环比1.2%
          <img src="@/assets/up.gif" />
        </span>-->
        <div class="content_percentP">
          <span class="content_percent">
            环比{{returnLinkRelativeRatio}}
            <img
              v-show="if_returnLinkRelativeRatio_up"
              src="@/assets/up.gif"
            />
            <img v-show="!if_returnLinkRelativeRatio_up" src="@/assets/up2.gif" />
          </span>
        </div>
      </div>
    </el-row>
    <el-row v-show="!ifgetdata" class="exception_p">
      <span class="exception_child">数据请求异常!</span>
    </el-row>
  </div>
</template>
<script>
import { media_watch_total, media_content } from "@/api/api_main";
import { commonTools } from "@/utils/test";
import Vue from "vue";

export default {
  name: "MediaAssetsData",
  data() {
    return {
      ifgetdata: true,

      programNum: "",
      data_old_o: "",
      data_new: "",
      program_num_Ratio: "",
      returnLinkRelativeRatio: "",
      echarts_data: {
        data: [
          { value: 1, name: "少儿" },
          { value: 1, name: "电影" },
          // { value: 848, name: "热剧" }, // pass 热剧
          { value: 1, name: "游戏" },
          { value: 1, name: "纪实" },
          { value: 1, name: "体育" },
          { value: 1, name: "电视剧" },
          { value: 1, name: "动漫" },
          { value: 1, name: "综艺" }
          // { value: 148, name: "推荐" } // pass  推荐
        ]
      },
      if_program_num_Ratio_up: true,
      if_0: false,
      if_returnLinkRelativeRatio_up: true
    };
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
                // 总时长 -- 用开始日期 + 截止日期
                // vm.media_watch_total(res1, res2, "days_all");
                vm.media_watch_total(res1, res2, "month"); // 单个月，上月
                vm.media_watch_total(res1, res2, "months"); //总数据为上月-上月为累积的，不是新增的 //环比： 上月 比 上上月
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
    // 环比
    returnLinkRelativeRatio_f(d_new, d_old) {
      this.returnLinkRelativeRatio =
        String(this.returnFloat(parseFloat(d_new) / parseFloat(d_old)) * 100) +
        "%";
    },
    returnFloat(value) {
      // 保留两位小数
      var value = Math.round(parseFloat(value) * 100) / 100;
      var xsd = value.toString().split(".");
      if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
      }
      if (xsd.length > 1) {
        if (xsd[1].length < 2) {
          value = value.toString() + "0";
        }
        return value;
      }
    },
    media_watch_total(StartDate, ExpirationDate, time_type) {
      // 用 media_content api
      let vm = this;
      let m_operator = commonTools.GetBigScreenOperator();
      let data;

      if (time_type == "month") {
        // data = {
        //   start: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 1), // 上月
        //   end: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 1), // 上月
        //   operator: m_operator,
        //   year: commonTools.get_ExpirationDate_year(ExpirationDate)
        // };
        let CrossYear_data = commonTools.get_ExpirationDate_lastNMonth_CrossYear(
          ExpirationDate,
          1,
          "single"
        );
        data = {
          operator: m_operator,
          start: CrossYear_data.month,
          end: CrossYear_data.month,
          year: CrossYear_data.year
        };

        // console.log(data);
      }
      if (time_type == "months") {
        // data = {
        //   start: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 2), // 上上月
        //   end: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 1), // 上月
        //   operator: m_operator,
        //   year: commonTools.get_ExpirationDate_year(ExpirationDate)
        // };
        console.log(ExpirationDate);
        let CrossYear_data_start = commonTools.get_ExpirationDate_lastNMonth_CrossYear(
          ExpirationDate,
          2,
          "range"
        );
        let CrossYear_data_end = commonTools.get_ExpirationDate_lastNMonth_CrossYear(
          ExpirationDate,
          1,
          "range"
        );
        data = {
          operator: m_operator,
          start: CrossYear_data_start.month, // start
          end: CrossYear_data_end.month, // end
          year: CrossYear_data_end.year // end
        };
        console.log(data);
      }

      // console.log(data);
      media_content(data)
        .then(function(response) {
          console.log("~~~~~~~~media_content");
          console.log(response);
          // if (time_type == "days_all") {

          // }
          if (time_type == "month") {
            // console.log(response);
            vm.programNum =
              response.data.responses[0].aggregations.program_content_num.value;
            vm.data_new = String(
              // vm.returnFloat(
              parseInt(
                response.data.responses[1].aggregations.watch_dur.value / 60
              )
              // ) // 保留两位小数
            );

            // echarts视图
            let buckets =
              response.data.responses[2].aggregations.program_type.buckets;
            let length = buckets.length;
            let i;
            function Set_KeyValue(key, index, index_buckets) {
              Vue.set(vm.echarts_data.data, index, {
                value: buckets[index_buckets].program_content_num.value,
                name: key
              });
            }
            for (i = 0; i < length; i++) {
              if (buckets[i].key == "少儿") {
                Set_KeyValue("少儿", 0, i);
              }
              if (buckets[i].key == "电影") {
                Set_KeyValue("电影", 1, i);
              }
              if (buckets[i].key == "游戏") {
                Set_KeyValue("游戏", 2, i);
              }
              if (buckets[i].key == "纪实") {
                Set_KeyValue("纪实", 3, i);
              }
              if (buckets[i].key == "体育") {
                Set_KeyValue("体育", 4, i);
              }
              if (buckets[i].key == "电视剧") {
                Set_KeyValue("电视剧", 5, i);
              }
              if (buckets[i].key == "动漫") {
                Set_KeyValue("动漫", 6, i);
              }
              if (buckets[i].key == "综艺") {
                Set_KeyValue("综艺", 7, i);
              }
            }
            // console.log(vm.echarts_data);

            setTimeout(function() {
              vm.drawLine();
            }, 100);
          }
          if (time_type == "months") {
            console.log(response);
            // 环比算法  （本期数值-上期数值）/上期数值
            // 总节目数量暂时没数据
            let buckets0 =
              response.data.responses[0].aggregations.statistical_granularity
                .buckets;
            // 总收视时长
            let buckets1 =
              response.data.responses[1].aggregations.statistical_granularity
                .buckets;

            // buckets0 = commonTools.bucketsSort_WM(buckets0);
            // buckets1 = commonTools.bucketsSort_WM(buckets1);
            buckets0 = commonTools.bucketsSort_WM_CrossYear(buckets0);
            buckets1 = commonTools.bucketsSort_WM_CrossYear(buckets1);

            let length = buckets0.length;
            let i;
            if (length == 0 || length == 1) {
              vm.program_num_Ratio = "-%";
              vm.returnLinkRelativeRatio = "-%";
              return;
            }
            if (length == 2) {
              let ratio1 = commonTools.returnFloat_2(
                ((buckets0[1].program_content_num_new.value -
                  buckets0[0].program_content_num_new.value) /
                  buckets0[0].program_content_num_new.value) *
                  100
              );
              if (ratio1 >= 0) {
                vm.if_program_num_Ratio_up = true;
              } else if (ratio1 < 0) {
                vm.if_program_num_Ratio_up = false;
              }
              vm.program_num_Ratio = String(ratio1) + "%";
              // 分母为0 判断
              let aaa = buckets0[0].program_content_num_new.value;
              if (aaa == 0 || aaa == "0") {
                vm.program_num_Ratio = "无新增";
                vm.if_0 = true;
              }
              let ratio2 = commonTools.returnFloat_2(
                ((buckets1[1].watch_dur.value - buckets1[0].watch_dur.value) /
                  buckets1[0].watch_dur.value) *
                  100
              );
              if (ratio2 >= 0) {
                vm.if_returnLinkRelativeRatio_up = true;
              } else if (ratio2 < 0) {
                vm.if_returnLinkRelativeRatio_up = false;
              }
              vm.returnLinkRelativeRatio = String(ratio2) + "%";
            }
          }
          vm.ifgetdata = true;
        })
        .catch(function(error) {
          console.info(error);
          vm.ifgetdata = false;
        });
      // 需要计算环比率
      // （观看时长 - 上期观看时长） / 上期观看时长
      // 需要俩接口  2019-07-01 - 2019-07-02
    },
    drawLine() {
      var myChart = this.$echarts.init(
        document.getElementById("media_assets_data")
      );
      let vm = this;

      var option = {
        //backgroundColor: '#424956', //背景
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
          {
            show: true,
            top: "10%",
            left: "70%",
            // data: ["少儿", "电影", "热剧", "游戏", "纪实", "体育"],
            data: ["少儿", "电影", "游戏", "纪实"],
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 10,
            textStyle: {
              color: "#fff"
            }
          },
          {
            show: true,
            top: "10%",
            left: "85%",
            // data: ["电视剧", "动漫", "综艺", "推荐"],
            data: ["体育", "电视剧", "动漫", "综艺"],
            itemWidth: 5,
            itemHeight: 5,
            width: 40,
            padding: [0, 5],
            itemGap: 10,
            textStyle: {
              color: "#fff"
            }
          }
        ],
        series: [
          // 外环
          {
            name: "访问来源",
            type: "pie",
            minAngle: 15,
            radius: ["50%", "75%"], // 大小
            center: ["33%", "55%"], // 位置
            color: [
              "#00C2FF",
              "#1B8EFB",
              "#1EB4BC",
              "#6648FF",
              "#79ABFC",
              "#417505",
              "#F5A623",
              "#FF7357"
              // "#50C380",
              // "#CDDC39"
            ],
            label: {
              normal: {
                // formatter: "{b}\n{d}%"
                formatter: "{d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                // lineStyle: {
                //   color: "rgba(255, 255, 255, 0.3)"
                // },
                smooth: 0.2,
                length: 5,
                length2: 5
              }
            },
            data: vm.echarts_data.data
          }
        ]
      };
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
</style>

<style>
.MediaAssetsData .MAD_bottom > p,
.MediaAssetsData .MAD_bottom > div {
  margin: 0 0 0 0.08rem;
}
.MediaAssetsData .el-row {
  text-align: left;
  font-size: 0.12rem;
  color: #dedede;
}
.MediaAssetsData .content_title {
  font-size: 0.14rem !important;
  margin-top: 0.06rem !important;
}
.c_title_1P {
  width: 55% !important;
  display: inline-block;
}
.c_title_2P {
  display: inline-block;
}

.MediaAssetsData .content_con {
  margin-top: 0.03rem !important;
}
.MediaAssetsData .content_numP {
  display: inline-block;
  width: 55% !important;
}
.MediaAssetsData .content_percentP {
  display: inline-block;
}
.MediaAssetsData .content_num {
  font-size: 0.2rem !important;
  /* width: 10rem !important; */
}

.MediaAssetsData .content_percent {
  font-size: 0.1rem !important;
}

.MediaAssetsData .title_row {
  display: flex;
  align-items: center;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.18rem;
  text-align: left;
}
</style>
