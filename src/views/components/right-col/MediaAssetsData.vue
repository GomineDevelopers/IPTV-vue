<template>
  <div class="MediaAssetsData height_auto">
    <el-row class="title_row">
      <span class="title_border_left"></span>媒资数据
    </el-row>
    <el-row id="media_assets_data" :style="{width: '16vw',height: '16vh'}"></el-row>
    <el-row class="MAD_bottom" :style="{width: '16vw',height: '16vh'}">
      <p class="content_title">总节目数量</p>
      <div class="content_con">
        <div class="content_numP">
          <!-- <span class="content_num">123.7万</span> -->
          <span class="content_num">{{programNum}}</span>
        </div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="content_percent">
          <!-- 环比3.2% -->
          环比{{program_num_Ratio}}
          <img src="@/assets/up.gif" />
        </span>
      </div>
      <p class="content_title">总收视时长</p>
      <div class="content_con">
        <div class="content_numP">
          <!-- <span class="content_num">4325.7万</span> -->
          <span class="content_num">{{data_new}}</span>
        </div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <!-- <span class="content_percent">
          环比1.2%
          <img src="@/assets/up.gif" />
        </span>-->
        <span class="content_percent">
          环比{{returnLinkRelativeRatio}}
          <img src="@/assets/up.gif" />
        </span>
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
      }
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
    // setTimeout(function() {
    //   vm.$store
    //     .dispatch("get_BigScreenExpirationDate")
    //     .then(function(response) {
    //       // vm.media_content(response);
    //       vm.media_watch_total(response);
    //       vm.drawLine();
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // }, 100);
  },
  methods: {
    // media_content(ExpirationDate) {
    //   let vm = this;
    //   let m_operator = commonTools.GetBigScreenOperator();
    //   let data = {
    //     start: ExpirationDate,
    //     end: ExpirationDate
    //     // operator: String(["移动", "联通", "电信"])
    //   };
    //   console.log("media_content");
    //   console.log(data);
    //   media_content(data)
    //     .then(function(response) {
    //       console.log(response);
    //       vm.programNum =
    //         response.data.responses[0].aggregations.program_content_num.value;
    //     })
    //     .catch(function(error) {
    //       console.info(error);
    //     });
    // },
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
      // if (time_type == "days_all") {
      //   data = {
      //     start: StartDate,
      //     end: ExpirationDate,
      //     // operator: String(["移动", "联通", "电信"])
      //     operator: m_operator,
      //     year: commonTools.get_ExpirationDate_year(ExpirationDate)
      //   };
      // }
      if (time_type == "month") {
        data = {
          start: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 1), // 上月
          end: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 1), // 上月
          operator: m_operator,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
      }
      if (time_type == "months") {
        data = {
          start: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 2), // 上上月
          end: commonTools.get_ExpirationDate_lastNMonth(ExpirationDate, 1), // 上月
          operator: m_operator,
          year: commonTools.get_ExpirationDate_year(ExpirationDate)
        };
      }

      // let vm = this;
      // media_watch_total(data)
      console.log("media_watch_total");
      console.log(data);
      media_content(data)
        .then(function(response) {
          // if (time_type == "days_all") {

          // }
          if (time_type == "month") {
            console.log(response);
            vm.programNum =
              response.data.responses[0].aggregations.program_content_num.value;
            vm.data_new = String(
              // vm.returnFloat(
              parseInt(
                response.data.responses[1].aggregations.watch_dur.value / 3600
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
            console.log(vm.echarts_data);

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
            let length = buckets0.length;
            let i;
            if (length == 0 || length == 1) {
              vm.program_num_Ratio = "-%";
              vm.returnLinkRelativeRatio = "-%";
              return;
            }
            if (length == 2) {
              vm.program_num_Ratio =
                String(
                  commonTools.returnFloat_2(
                    ((buckets0[1].program_content_num.value -
                      buckets0[0].program_content_num.value) /
                      buckets0[0].program_content_num.value) *
                      100
                  )
                ) + "%";
              vm.returnLinkRelativeRatio =
                String(
                  commonTools.returnFloat_2(
                    ((buckets1[1].watch_dur.value -
                      buckets1[0].watch_dur.value) /
                      buckets1[0].watch_dur.value) *
                      100
                  )
                ) + "%";
            }
          }
          vm.ifgetdata = true;

          // vm.data_old_o =
          //   response.data.responses[1].aggregations.watch_dur.value;

          // /////第二天
          // let data2 = {
          //   start: ExpirationDate,
          //   end: ExpirationDate,
          //   // operator: String(["移动", "联通", "电信"])
          //   operator: m_operator
          // };
          // setTimeout(function() {
          //   media_watch_total(data2)
          //     .then(function(response2) {
          //       // console.log(response2);
          //       // console.log(
          //       //   response2.data.responses[0].aggregations.watch_dur.value
          //       // );
          //       vm.data_new = String(
          //         vm.returnFloat(
          //           parseFloat(
          //             response2.data.responses[0].aggregations.watch_dur.value
          //           )
          //         ) // 保留两位小数
          //       );
          //       vm.returnLinkRelativeRatio_f(vm.data_new, vm.data_old_o);
          //     })
          //     .catch(function(error) {
          //       console.info(error);
          //     });
          // }, 300);
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
              "#FF7357",
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
.MediaAssetsData .content_con {
  margin-top: 0.03rem !important;
}
.MediaAssetsData .content_numP {
  display: inline-block;
  width: 1rem;
}
.MediaAssetsData .content_num {
  font-size: 0.2rem !important;
  width: 10rem !important;
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
