<template>
  <div class="data_trend">
    <el-col :span="20">
      <!-- 各地市每天开机用户数量图表开始 -->
      <el-row class="data_trend_chart" id="power_user_number">
        <el-row class="model_title">
          <span class="title_border_left"></span>各地市每天开机用户数量
        </el-row>
        <el-row class="chart_body back_white">
          <el-col class="height_auto" :span="24">
            <!-- 各地市每天开机用户数量组件 -->
            <data-tendency :data="powerUserNumber"></data-tendency>
          </el-col>
        </el-row>
      </el-row>
      <!-- 各地市每天开机用户数量图表结束 -->

      <!-- 各地市每天在线用户数图表开始 -->
      <el-row class="data_trend_chart" id="online_user_number">
        <el-row class="model_title">
          <span class="title_border_left"></span>各地市每天在线用户数
        </el-row>
        <el-row class="chart_body back_white">
          <el-col class="height_auto" :span="24">
            <!-- 各地市每天在线用户数组件 -->
            <data-tendency :data="onlineUserNumber"></data-tendency>
          </el-col>
        </el-row>
      </el-row>
      <!-- 各地市每天在线用户数图表结束 -->

      <!-- 各地市每天每用户心跳频次图表开始 -->
      <el-row class="data_trend_chart" id="heartbeat_frequency">
        <el-row class="model_title">
          <span class="title_border_left"></span>各地市每天每用户心跳频次
        </el-row>
        <el-row class="chart_body back_white">
          <el-col class="height_auto" :span="24">
            <!-- 各地市每天每用户心跳频次组件 -->
            <data-tendency :data="heartbeatFrequency"></data-tendency>
          </el-col>
        </el-row>
      </el-row>
      <!-- 各地市每天每用户心跳频次图表结束 -->
    </el-col>
    <el-col :span="4" class="anchor_hyperlinks">
      <el-row>
        <!-- <a href="#boot_log">开机日志</a> -->
        <a
          href="javascript:void(0)"
          class="anchor_link1 avtive_link"
          @click="goAnchor('#power_user_number')"
        >各地市每天开机用户数量</a>
      </el-row>
      <el-row>
        <!-- <a href="#page_access_log">页面访问日志</a> -->
        <a
          href="javascript:void(0)"
          class="anchor_link2"
          @click="goAnchor('#online_user_number')"
        >各地市每天在线用户数</a>
      </el-row>
      <el-row>
        <!-- <a href="#thermodynamic_log">热力图日志</a> -->
        <a
          href="javascript:void(0)"
          class="anchor_link3"
          @click="goAnchor('#heartbeat_frequency')"
        >各地市每天每用户心跳频次</a>
      </el-row>
    </el-col>
  </div>
</template>
<script>
import dataTendency from "@/views/backcoms/dataaudit/dataTendency";
import { errorReport } from "@/api/api_main";
import Vue from "vue";

export default {
  name: "DataTrend", //数据趋势
  components: {
    "data-tendency": dataTendency
  },
  data() {
    return {
      powerUserNumber: {
        id: "powerUserNumber",
        dataTime: [
          // "12日",
          // "13日",
          // "14日",
          // "15日",
          // "16日",
          // "17日",
          // "18日",
          // "19日",
          // "20日",
          // "21日",
          // "22日",
          // "23日",
          // "24日",
          // "25日",
          // "26日",
          // "27日"
        ],
        nameArray: [
          // "贵阳",
          // "遵义",
          // "安顺",
          // "黔南",
          // "黔东南",
          // "铜仁",
          // "毕节",
          // "六盘水",
          // "黔西南"
        ],
        stringArray: [
          //   "2.399513119\t2.828314028\t2.312376238\t2.39081537\t2.80230535\t4.282758621\t2.871265378\t3.114492445\t2.054696012\t2.142528736\t2.260790641\t2.956497386\t2.756800871\t2.834182329\t2.161296509\t2.069767442",
          //   "2.243289306\t2.451304667\t3.072733787\t3.604081633\t3.245494096\t2.364439536\t2.964993216\t2.597731469\t2.108393409\t2.114770973\t2.23516537\t2.211039681\t2.413382594\t2.330260836\t2.249948014\t2.356405586",
          //   "2.2115548\t2.292988314\t2.519937451\t2.497893258\t2.872407291\t2.538233551\t2.490751445\t2.459797499\t2.272427078\t2.300180018\t2.214814815\t2.291609977\t2.514273166\t2.553508772\t2.346221441\t3.146224356",
          //   "2.881062356\t3.452354874\t6.891098485\t6.633161512\t5.189054726\t3.179948586\t2.965047393\t2.928571429\t2.660836977\t2.630785791\t2.739397036\t2.946314832\t3.237510955\t3.279137287\t2.999109924\t3.03467707",
          //   "2.465287049\t2.561500615\t2.459474886\t2.412334353\t2.416162489\t3.014393939\t2.720028209\t2.606966925\t2.497919556\t2.417412782\t2.463011314\t2.712787724\t2.811590689\t3.691940976\t2.441564675\t2.481199539",
          //   "2.264090177\t2.755319149\t2.627272727\t2.629251701\t3.463753724\t6.730186999\t2.640067912\t4.172828891\t2.45295587\t4.059006211\t13.71069634\t3.83463035\t2.623197115\t2.623885918\t2.367591425\t5.274660366",
          //   "2.845310597\t2.784334764\t3.176416819\t8.3352\t2.855622089\t2.995719636\t2.912475822\t2.709547739\t2.521096129\t2.787443578\t2.731441048\t2.579281184\t2.750401542\t2.722999107\t2.494865212\t2.878107218",
          //   "2.579158317\t2.437965261\t2.428742515\t2.682148853\t2.512361915\t2.73129562\t3.615555556\t6.080348944\t6.415909091\t4.479406919\t5.112459547\t2.496071829\t2.531814895\t2.546671128\t2.665264634\t2.435844513",
          //   "2.810897436\t2.833093525\t2.784266985\t2.880855397\t3.12243221\t3.431059507\t2.886162236\t2.824213406\t2.591207349\t2.568014706\t2.58037225\t2.846077948\t2.813664596\t2.715574549\t6.092814371\t6.200475059"
        ]
      },
      onlineUserNumber: {
        id: "onlineUserNumber",
        dataTime: [
          // "12日",
          // "13日",
          // "14日",
          // "15日",
          // "16日",
          // "17日",
          // "18日",
          // "19日",
          // "20日",
          // "21日",
          // "22日",
          // "23日",
          // "24日",
          // "25日",
          // "26日",
          // "27日"
        ],
        nameArray: [
          // "贵阳",
          // "遵义",
          // "安顺",
          // "黔南",
          // "黔东南",
          // "铜仁",
          // "毕节",
          // "六盘水",
          // "黔西南"
        ],
        stringArray: [
          //   "2.399513119\t2.828314028\t2.312376238\t2.39081537\t2.80230535\t4.282758621\t2.871265378\t3.114492445\t2.054696012\t2.142528736\t2.260790641\t2.956497386\t2.756800871\t2.834182329\t2.161296509\t2.069767442",
          //   "2.243289306\t2.451304667\t3.072733787\t3.604081633\t3.245494096\t2.364439536\t2.964993216\t2.597731469\t2.108393409\t2.114770973\t2.23516537\t2.211039681\t2.413382594\t2.330260836\t2.249948014\t2.356405586",
          //   "2.2115548\t2.292988314\t2.519937451\t2.497893258\t2.872407291\t2.538233551\t2.490751445\t2.459797499\t2.272427078\t2.300180018\t2.214814815\t2.291609977\t2.514273166\t2.553508772\t2.346221441\t3.146224356",
          //   "2.881062356\t3.452354874\t6.891098485\t6.633161512\t5.189054726\t3.179948586\t2.965047393\t2.928571429\t2.660836977\t2.630785791\t2.739397036\t2.946314832\t3.237510955\t3.279137287\t2.999109924\t3.03467707",
          //   "2.465287049\t2.561500615\t2.459474886\t2.412334353\t2.416162489\t3.014393939\t2.720028209\t2.606966925\t2.497919556\t2.417412782\t2.463011314\t2.712787724\t2.811590689\t3.691940976\t2.441564675\t2.481199539",
          //   "2.264090177\t2.755319149\t2.627272727\t2.629251701\t3.463753724\t6.730186999\t2.640067912\t4.172828891\t2.45295587\t4.059006211\t13.71069634\t3.83463035\t2.623197115\t2.623885918\t2.367591425\t5.274660366",
          //   "2.845310597\t2.784334764\t3.176416819\t8.3352\t2.855622089\t2.995719636\t2.912475822\t2.709547739\t2.521096129\t2.787443578\t2.731441048\t2.579281184\t2.750401542\t2.722999107\t2.494865212\t2.878107218",
          //   "2.579158317\t2.437965261\t2.428742515\t2.682148853\t2.512361915\t2.73129562\t3.615555556\t6.080348944\t6.415909091\t4.479406919\t5.112459547\t2.496071829\t2.531814895\t2.546671128\t2.665264634\t2.435844513",
          //   "2.810897436\t2.833093525\t2.784266985\t2.880855397\t3.12243221\t3.431059507\t2.886162236\t2.824213406\t2.591207349\t2.568014706\t2.58037225\t2.846077948\t2.813664596\t2.715574549\t6.092814371\t6.200475059"
        ]
      },
      heartbeatFrequency: {
        id: "heartbeatFrequency",
        dataTime: [
          // "12日",
          // "13日",
          // "14日",
          // "15日",
          // "16日",
          // "17日",
          // "18日",
          // "19日",
          // "20日",
          // "21日",
          // "22日",
          // "23日",
          // "24日",
          // "25日",
          // "26日",
          // "27日"
        ],
        nameArray: [
          // "贵阳",
          // "遵义",
          // "安顺",
          // "黔南",
          // "黔东南",
          // "铜仁",
          // "毕节",
          // "六盘水",
          // "黔西南"
        ],
        stringArray: [
          //   "2.399513119\t2.828314028\t2.312376238\t2.39081537\t2.80230535\t4.282758621\t2.871265378\t3.114492445\t2.054696012\t2.142528736\t2.260790641\t2.956497386\t2.756800871\t2.834182329\t2.161296509\t2.069767442",
          //   "2.243289306\t2.451304667\t3.072733787\t3.604081633\t3.245494096\t2.364439536\t2.964993216\t2.597731469\t2.108393409\t2.114770973\t2.23516537\t2.211039681\t2.413382594\t2.330260836\t2.249948014\t2.356405586",
          //   "2.2115548\t2.292988314\t2.519937451\t2.497893258\t2.872407291\t2.538233551\t2.490751445\t2.459797499\t2.272427078\t2.300180018\t2.214814815\t2.291609977\t2.514273166\t2.553508772\t2.346221441\t3.146224356",
          //   "2.881062356\t3.452354874\t6.891098485\t6.633161512\t5.189054726\t3.179948586\t2.965047393\t2.928571429\t2.660836977\t2.630785791\t2.739397036\t2.946314832\t3.237510955\t3.279137287\t2.999109924\t3.03467707",
          //   "2.465287049\t2.561500615\t2.459474886\t2.412334353\t2.416162489\t3.014393939\t2.720028209\t2.606966925\t2.497919556\t2.417412782\t2.463011314\t2.712787724\t2.811590689\t3.691940976\t2.441564675\t2.481199539",
          //   "2.264090177\t2.755319149\t2.627272727\t2.629251701\t3.463753724\t6.730186999\t2.640067912\t4.172828891\t2.45295587\t4.059006211\t13.71069634\t3.83463035\t2.623197115\t2.623885918\t2.367591425\t5.274660366",
          //   "2.845310597\t2.784334764\t3.176416819\t8.3352\t2.855622089\t2.995719636\t2.912475822\t2.709547739\t2.521096129\t2.787443578\t2.731441048\t2.579281184\t2.750401542\t2.722999107\t2.494865212\t2.878107218",
          //   "2.579158317\t2.437965261\t2.428742515\t2.682148853\t2.512361915\t2.73129562\t3.615555556\t6.080348944\t6.415909091\t4.479406919\t5.112459547\t2.496071829\t2.531814895\t2.546671128\t2.665264634\t2.435844513",
          //   "2.810897436\t2.833093525\t2.784266985\t2.880855397\t3.12243221\t3.431059507\t2.886162236\t2.824213406\t2.591207349\t2.568014706\t2.58037225\t2.846077948\t2.813664596\t2.715574549\t6.092814371\t6.200475059"
        ]
      }
    };
  },
  mounted() {
    $(".data_trend").scroll(function(event) {
      let scrollTopHeight = $(".data_trend").scrollTop();
      let power_user_number = document.querySelector("#power_user_number")
        .offsetTop;
      let online_user_number = document.querySelector("#online_user_number")
        .offsetTop;
      let heartbeat_frequency = document.querySelector("#heartbeat_frequency")
        .offsetTop;
      // console.log('power_user_number 84', power_user_number)
      // console.log('online_user_number 858', online_user_number)
      // console.log('heartbeat_frequency 1632', heartbeat_frequency)
      if (0 <= scrollTopHeight) {
        $(".anchor_link1")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (658 <= scrollTopHeight) {
        $(".anchor_link2")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
      if (1000 <= scrollTopHeight) {
        $(".anchor_link3")
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      }
    });
    let vm = this;
    setTimeout(function() {
      vm.$store
        .dispatch("get_BigScreenExpirationDate")
        .then(function(response) {
          vm.errorReport(response);
        })
        .catch(function(error) {
          console.info(error);
        });
    }, 100);
  },
  methods: {
    errorReport(ExpirationDate) {
      let vm = this;
      // 截止日期-日变成01
      function ExpirationDateManage(date) {
        let split_arr = date.split("-");
        return split_arr[0] + "-" + split_arr[1] + "-01";
      }
      let temp = {
        start: ExpirationDateManage(ExpirationDate),
        end: ExpirationDate
      };
      console.log(temp);
      var formData = new FormData();
      formData.append("start", temp.start);
      formData.append("end", temp.end);
      errorReport(formData)
        .then(function(response) {
          console.log(response);

          // 传入 2019-10-11  返回11日
          function dateManage(str) {
            let split_arr = str.split("-");
            return split_arr[2] + "日";
          }
          let nameArray = [
            "贵阳",
            "遵义",
            "安顺",
            "黔南",
            "黔东南",
            "铜仁",
            "毕节",
            "六盘水",
            "黔西南"
          ];
          // //////////// 开机数量 open_num
          let buckets_1 = response.data.responses[1].aggregations.ac.buckets;
          let length_1 = buckets_1.length;
          let i_1;

          let temp_1_1 = []; // dataTime
          let temp_1_3 = []; // stringArray

          // 处理地区
          let temp_1_2 = nameArray; // nameArray
          // let temp_3_2 = nameArray; // nameArray // 心跳

          // 处理时间  -- ▲临时数据问题记录： 传入范围天，没有最后一天
          let buckets_1_child = buckets_1[0].statistical_granularity.buckets; // 天
          let length_1_child = buckets_1_child.length;
          let i_1_child;

          // 处理无值字符串-没有数据的地区 - 置0 (根据天数处理长短)
          let NoExist_ManageStr = "";
          let str1 = "0\t";
          let str2 = "0";

          for (i_1_child = 0; i_1_child < length_1_child; i_1_child++) {
            temp_1_1.push(dateManage(buckets_1_child[i_1_child].key));

            // 处理值 （地区=》时间） 1
            temp_1_3.push(""); //  \t字符串 x ac个数 - 去除others
            // 处理无值字符串
            if (i_1_child != length_1_child - 1) {
              NoExist_ManageStr += str1;
            } else {
              NoExist_ManageStr += str2;
            }
          }
          // 处理值 （地区=》时间） 2
          // 参数1：ac固定顺序 参数2：当前ac的位置
          function DateManage_AcToTime_1(index_ac, index_current) {
            let buckets_cc =
              buckets_1[index_current].statistical_granularity.buckets; // 天
            let length_cc = buckets_cc.length;
            let i_cc;
            let temp_ManageStr = "";
            for (i_cc = 0; i_cc < length_cc; i_cc++) {
              try {
                // 异常处理：由于有 853 9天  854 10天的 不同length情况
                if (i_cc != length_cc - 1) {
                  temp_ManageStr +=
                    String(buckets_cc[i_cc].open_num.value) + "\t";
                } else {
                  temp_ManageStr += String(buckets_cc[i_cc].open_num.value);
                }
              } catch (error) {
                console.log(error);
              }
            }
            Vue.set(temp_1_3, index_ac, temp_ManageStr);
          }
          for (i_1 = 0; i_1 < length_1; i_1++) {
            if (buckets_1[i_1].key == "851") {
              DateManage_AcToTime_1(0, i_1);
            }
            if (buckets_1[i_1].key == "852") {
              DateManage_AcToTime_1(1, i_1);
            }
            if (buckets_1[i_1].key == "853") {
              DateManage_AcToTime_1(2, i_1);
            }
            if (buckets_1[i_1].key == "854") {
              DateManage_AcToTime_1(3, i_1);
            }
            if (buckets_1[i_1].key == "855") {
              DateManage_AcToTime_1(4, i_1);
            }
            if (buckets_1[i_1].key == "856") {
              DateManage_AcToTime_1(5, i_1);
            }
            if (buckets_1[i_1].key == "857") {
              DateManage_AcToTime_1(6, i_1);
            }
            if (buckets_1[i_1].key == "858") {
              DateManage_AcToTime_1(7, i_1);
            }
            if (buckets_1[i_1].key == "859") {
              DateManage_AcToTime_1(8, i_1);
            }
          }

          console.log(temp_1_1);
          console.log(temp_1_2);
          console.log(temp_1_3);

          vm.powerUserNumber.dataTime = temp_1_1;
          vm.powerUserNumber.nameArray = temp_1_2;
          vm.powerUserNumber.stringArray = temp_1_3;

          // //////////// active_num 激活用户

          let buckets_2 = response.data.responses[2].aggregations.ac.buckets;
          let length_2 = buckets_2.length;
          let i_2;

          let temp_2_1 = []; // dataTime
          let temp_2_3 = []; // stringArray

          // 处理地区
          let temp_2_2 = nameArray; // nameArray
          // let temp_3_2 = nameArray; // nameArray // 心跳

          // 处理时间  -- ▲临时数据问题记录： 传入范围天，没有最后一天
          let buckets_2_child = buckets_2[0].statistical_granularity.buckets; // 天
          let length_2_child = buckets_2_child.length;
          let i_2_child;

          // 处理无值字符串-没有数据的地区 - 置0 (根据天数处理长短)
          NoExist_ManageStr = ""; //初始化
          str1 = "0\t";
          str2 = "0";

          for (i_2_child = 0; i_2_child < length_2_child; i_2_child++) {
            temp_2_1.push(dateManage(buckets_2_child[i_2_child].key));

            // 处理值 （地区=》时间） 1
            temp_2_3.push(""); //  \t字符串 x ac个数 - 去除others
            // 处理无值字符串
            if (i_2_child != length_2_child - 1) {
              NoExist_ManageStr += str1;
            } else {
              NoExist_ManageStr += str2;
            }
          }
          // 处理值 （地区=》时间） 2
          // 参数1：ac固定顺序 参数2：当前ac的位置
          function DateManage_AcToTime_2(index_ac, index_current) {
            let buckets_cc =
              buckets_2[index_current].statistical_granularity.buckets; // 天
            let length_cc = buckets_cc.length;
            let i_cc;
            let temp_ManageStr = "";
            for (i_cc = 0; i_cc < length_cc; i_cc++) {
              try {
                // 异常处理：由于有 853 9天  854 10天的 不同length情况
                if (i_cc != length_cc - 1) {
                  temp_ManageStr +=
                    String(buckets_cc[i_cc].active_num.value) + "\t";
                } else {
                  temp_ManageStr += String(buckets_cc[i_cc].active_num.value);
                }
              } catch (error) {
                console.log(error);
              }
            }
            Vue.set(temp_2_3, index_ac, temp_ManageStr);
          }
          for (i_2 = 0; i_2 < length_2; i_2++) {
            if (buckets_2[i_2].key == "851") {
              DateManage_AcToTime_2(0, i_2);
            }
            if (buckets_2[i_2].key == "852") {
              DateManage_AcToTime_2(1, i_2);
            }
            if (buckets_2[i_2].key == "853") {
              DateManage_AcToTime_2(2, i_2);
            }
            if (buckets_2[i_2].key == "854") {
              DateManage_AcToTime_2(3, i_2);
            }
            if (buckets_2[i_2].key == "855") {
              DateManage_AcToTime_2(4, i_2);
            }
            if (buckets_2[i_2].key == "856") {
              DateManage_AcToTime_2(5, i_2);
            }
            if (buckets_2[i_2].key == "857") {
              DateManage_AcToTime_2(6, i_2);
            }
            if (buckets_2[i_2].key == "858") {
              DateManage_AcToTime_2(7, i_2);
            }
            if (buckets_2[i_2].key == "859") {
              DateManage_AcToTime_2(8, i_2);
            }
          }

          // console.log(temp_2_1);
          // console.log(temp_2_2);
          // console.log(temp_2_3);

          vm.onlineUserNumber.dataTime = temp_2_1;
          vm.onlineUserNumber.nameArray = temp_2_2;
          vm.onlineUserNumber.stringArray = temp_2_3;

          // //////////// 心跳 heart_beat_freq

          let buckets_3 = response.data.responses[3].aggregations.ac.buckets;
          let length_3 = buckets_3.length;
          let i_3;

          let temp_3_1 = []; // dataTime
          let temp_3_3 = []; // stringArray

          // 处理地区
          let temp_3_2 = nameArray; // nameArray
          // let temp_3_2 = nameArray; // nameArray // 心跳

          // 处理时间  -- ▲临时数据问题记录： 传入范围天，没有最后一天
          let buckets_3_child = buckets_3[0].statistical_granularity.buckets; // 天
          let length_3_child = buckets_3_child.length;
          let i_3_child;

          // 处理无值字符串-没有数据的地区 - 置0 (根据天数处理长短)
          NoExist_ManageStr = ""; //初始化
          str1 = "0\t";
          str2 = "0";

          for (i_3_child = 0; i_3_child < length_3_child; i_3_child++) {
            temp_3_1.push(dateManage(buckets_3_child[i_3_child].key));

            // 处理值 （地区=》时间） 1
            temp_3_3.push(""); //  \t字符串 x ac个数 - 去除others
            // 处理无值字符串
            if (i_3_child != length_3_child - 1) {
              NoExist_ManageStr += str1;
            } else {
              NoExist_ManageStr += str2;
            }
          }
          // 处理值 （地区=》时间） 2
          // 参数1：ac固定顺序 参数2：当前ac的位置
          function DateManage_AcToTime_3(index_ac, index_current) {
            let buckets_cc =
              buckets_3[index_current].statistical_granularity.buckets; // 天
            let length_cc = buckets_cc.length;
            let i_cc;
            let temp_ManageStr = "";
            for (i_cc = 0; i_cc < length_cc; i_cc++) {
              try {
                // 异常处理：由于有 853 9天  854 10天的 不同length情况
                if (i_cc != length_cc - 1) {
                  temp_ManageStr +=
                    String(buckets_cc[i_cc].heart_beat_freq.value) + "\t";
                } else {
                  temp_ManageStr += String(buckets_cc[i_cc].heart_beat_freq.value);
                }
              } catch (error) {
                console.log(error);
              }
            }
            Vue.set(temp_3_3, index_ac, temp_ManageStr);
          }
          for (i_3 = 0; i_3 < length_3; i_3++) {
            if (buckets_3[i_3].key == "851") {
              DateManage_AcToTime_3(0, i_3);
            }
            if (buckets_3[i_3].key == "852") {
              DateManage_AcToTime_3(1, i_3);
            }
            if (buckets_3[i_3].key == "853") {
              DateManage_AcToTime_3(2, i_3);
            }
            if (buckets_3[i_3].key == "854") {
              DateManage_AcToTime_3(3, i_3);
            }
            if (buckets_3[i_3].key == "855") {
              DateManage_AcToTime_3(4, i_3);
            }
            if (buckets_3[i_3].key == "856") {
              DateManage_AcToTime_3(5, i_3);
            }
            if (buckets_3[i_3].key == "857") {
              DateManage_AcToTime_3(6, i_3);
            }
            if (buckets_3[i_3].key == "858") {
              DateManage_AcToTime_3(7, i_3);
            }
            if (buckets_3[i_3].key == "859") {
              DateManage_AcToTime_3(8, i_3);
            }
          }

          vm.heartbeatFrequency.dataTime = temp_3_1;  // 心跳
          vm.heartbeatFrequency.nameArray = temp_3_2;  // 心跳
          vm.heartbeatFrequency.stringArray = temp_3_3;  // 心跳
        })
        .catch(function(error) {
          console.info(error);
        });
    },
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let data_trend = document.querySelector(".data_trend"); //外层滚动容器元素
      var anchor = document.querySelector(selector); // 参数为要跳转到的元素id
      data_trend.scrollTop = anchor.offsetTop - 80;
      $(".anchor_hyperlinks a").on("click", function() {
        $(this)
          .addClass("avtive_link")
          .parent()
          .siblings()
          .children()
          .removeClass("avtive_link");
      });
    }
  }
};
</script>
<style scoped>
/*webkit内核*/
.data_trend::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
/*o内核*/
.data_trend .-o-scrollbar {
  -moz-appearance: none !important;
  background: rgba(0, 255, 0, 0) !important;
}
/*IE10,IE11,IE12*/
.data_trend {
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
.data_trend {
  height: 100%;
  /* overflow: auto; */
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.data_trend_chart {
  height: 750px;
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
#heartbeat_frequency {
  margin-bottom: 50px;
}
</style>