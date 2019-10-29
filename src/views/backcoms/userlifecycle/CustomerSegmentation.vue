<template>
  <div class="CustomerSegmentation">
    <el-row>
      <el-col class="C_left" :span="12">
        <div class="m_table">
          <div class="mt_title">
            <div class="mt_h flex">
              <div class="first_userCategory"></div>
              <div class="title_category flex">
                <div
                  class="flex flex_width"
                  v-for="(item,index) in customerSegmentation.title"
                  :key="index+'customer'"
                >
                  <div class="title_category_name">{{item}}</div>
                  <div class="flex-direction view_behavior_category" v-if="item == '观看行为'">
                    <div
                      class="flex"
                      v-for="(viewBehaviorCategoryItem,index4) in customerSegmentation.viewingBehaviorCategory"
                      :key="index4+'VBC'"
                    >
                      <span v-if="viewBehaviorCategoryItem =='少儿'" class="children_span"></span>
                      <span v-if="viewBehaviorCategoryItem =='影视'" class="film_span"></span>
                      <span v-if="viewBehaviorCategoryItem =='非少儿非影视'" class="none_span"></span>
                      {{viewBehaviorCategoryItem}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt_row">
            <div
              class="mt_h flex"
              v-for="(customerCategory,index3) in customerSegmentation.categoryData"
              :key="index3+'customerCategory'"
            >
              <div class="first_userCategory">{{title[index3]}}</div>
              <!-- <div
                class="flex flex-direction userCategory_data"
                v-if="customerCategory.userCategoryName !='未订购用户'"
              >-->
              <div class="flex flex-direction userCategory_data">
                <div
                  v-for="(customerItem,index3) in customerCategory.data"
                  :key="index3+'customerItem'"
                  style="width:100%"
                >
                  <div class="flex">
                    <div class="data_num">
                      <p>{{customerItem.title}}</p>
                    </div>
                    <div class="data_num">
                      <p>{{customerItem.userNum}}</p>
                    </div>
                    <div class="data_num">
                      <p>{{customerItem.familyWatchTime}}</p>
                    </div>
                    <div class="data_num">
                      <p>{{customerItem.theSeedingRate}}</p>
                    </div>
                    <div class="data_num customer_bar">
                      <p class="flex">
                        <span
                          class="children_span"
                          :style="'width:'+((customerItem.viewingBehaviorData[0]*2)/200)*100+'%'"
                        >
                          <i
                            v-if="customerItem.viewingBehaviorData[0] > 12"
                          >{{customerItem.viewingBehaviorData[0]}}%</i>
                        </span>
                        <span
                          class="film_span"
                          :style="'width:'+((customerItem.viewingBehaviorData[1]*2)/200)*100+'%'"
                        >
                          <i
                            v-if="customerItem.viewingBehaviorData[1] > 12"
                          >{{customerItem.viewingBehaviorData[1]}}%</i>
                        </span>
                        <span
                          :style="'width:'+((customerItem.viewingBehaviorData[2]*2)/200)*100+'%'"
                        >
                          <i
                            v-if="customerItem.viewingBehaviorData[2] > 12"
                          >{{customerItem.viewingBehaviorData[2]}}%</i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div
                class="flex flex-direction userCategory_data"
                v-if="customerCategory.userCategoryName =='未订购用户'"
              >
                <div
                  v-for="(customerItem,index3) in customerCategory.data"
                  :key="index3+'customerItem'"
                  style="width:100%"
                >
                  <div class="flex">
                    <div class="data_num">
                      <p>{{customerItem.title}}</p>
                    </div>
                    <div class="data_num">
                      <p>{{customerItem.userNum}}</p>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="C_right" :span="12">
        <el-row class="C_r_top">
          <span class="C_r_top_user">用户群体：</span>
          <el-select v-model="targetOption" placeholder="请选择" @change="handleViewingTop">
            <el-option v-for="(item,index) in target" :key="index+'c'" :label="item" :value="item"></el-option>
          </el-select>
        </el-row>
        <el-row class="C_r_bottom">
          <el-col :span="12">
            <el-row>
              <span>收视时长排名</span>
              <i class="iconfont ascending_order" @click="changeTimeTop">&#xe606;</i>
            </el-row>
            <el-row class="viewingTopList">
              <user-viewing-TOP :viewingTopList="viewingTopList"></user-viewing-TOP>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <span>收视次数排名</span>
              <i class="iconfont ascending_order" @click="changeNumTop">&#xe606;</i>
            </el-row>
            <el-row class="viewingTopList">
              <user-viewing-TOP :viewingTopList="NumberOfViewersTopList"></user-viewing-TOP>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import UserViewingTOP from "@/views/backcoms/userlifecycle/UserViewingTOP"; //收视TOP组件
export default {
  name: "CustomerSegmentation",
  components: {
    "user-viewing-TOP": UserViewingTOP
  },
  props: ["api_data5", "api_data6", "api_data7"],
  watch: {
    //用户细分
    api_data5(newValue, oldValue) {
      console.log("用户细分ULC - api_data5:");
      console.log(newValue);
      let customerSegmentation = newValue.aggregations.statistical_granularity.buckets[0].flag_user.buckets
      let vm = this
      let customerFirsttime_temp = []  //第一次购买
      let customerOnectime_temp = []  //一次性购买
      let customerLoyer_temp = []  //忠诚用户
      let customerRepurchase_temp = []  //重新激活用户
      let customerLapsed_temp = []  //睡眠用户
      let customerNone_temp = []  //未订购用户

      try {
        customerSegmentation.forEach((value, index) => {
          // console.log(value.key)
          value.productname.buckets.forEach((value2, index2) => {
            // console.log(value2.key)
            if (value.key == 'firsttime') {
              // console.log(value2)
              let play_full_rate
              //将少儿，影视，非少儿非影视总和作为分母，求每一个的百分比
              let watch_dur_total = value2.watch_dur_children.value + value2.watch_dur_film.value + value2.watch_dur_oth.value
              let watch_dur_children_rate = ((value2.watch_dur_children.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_film_rate = ((value2.watch_dur_film.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_oth_rate = ((value2.watch_dur_oth.value / watch_dur_total) * 100).toFixed(1)
              let demand_dur_family = (value2.demand_dur.value / 60 / value2.demand_user_num.value).toFixed(2)  //用户细分的户均观看时长
              if (value2.demand_dur.value > value2.programTime_t.value) {
                play_full_rate = 100
              } else {
                play_full_rate = ((value2.demand_dur.value / value2.programTime_t.value) * 100).toFixed(2)
              }
              customerFirsttime_temp.push({
                title: value2.key,
                userNum: (value2.demand_user_num.value / 10000).toFixed(2),
                familyWatchTime: demand_dur_family,
                theSeedingRate: play_full_rate + '%',
                viewingBehaviorData: [watch_dur_children_rate, watch_dur_film_rate, watch_dur_oth_rate]
              })
            } else if (value.key == 'loyer') {
              let play_full_rate
              //将少儿，影视，非少儿非影视总和作为分母，求每一个的百分比
              let watch_dur_total = value2.watch_dur_children.value + value2.watch_dur_film.value + value2.watch_dur_oth.value
              let watch_dur_children_rate = ((value2.watch_dur_children.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_film_rate = ((value2.watch_dur_film.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_oth_rate = ((value2.watch_dur_oth.value / watch_dur_total) * 100).toFixed(1)
              let demand_dur_family = (value2.demand_dur.value / 60 / value2.demand_user_num.value).toFixed(2) //用户细分的户均观看时长
              if (value2.demand_dur.value > value2.programTime_t.value) {
                play_full_rate = 100
              } else {
                play_full_rate = ((value2.demand_dur.value / value2.programTime_t.value) * 100).toFixed(2)
              }
              customerLoyer_temp.push({
                title: value2.key,
                userNum: (value2.demand_user_num.value / 10000).toFixed(2),
                familyWatchTime: demand_dur_family,
                theSeedingRate: play_full_rate + '%',
                viewingBehaviorData: [watch_dur_children_rate, watch_dur_film_rate, watch_dur_oth_rate]
              })
            } else if (value.key == 'onetime') {
              let play_full_rate
              //将少儿，影视，非少儿非影视总和作为分母，求每一个的百分比
              let watch_dur_total = value2.watch_dur_children.value + value2.watch_dur_film.value + value2.watch_dur_oth.value
              let watch_dur_children_rate = ((value2.watch_dur_children.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_film_rate = ((value2.watch_dur_film.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_oth_rate = ((value2.watch_dur_oth.value / watch_dur_total) * 100).toFixed(1)
              let demand_dur_family = (value2.demand_dur.value / 60 / value2.demand_user_num.value).toFixed(2) //用户细分的户均观看时长
              if (value2.demand_dur.value > value2.programTime_t.value) {
                play_full_rate = 100
              } else {
                play_full_rate = ((value2.demand_dur.value / value2.programTime_t.value) * 100).toFixed(2)
              }
              customerOnectime_temp.push({
                title: value2.key,
                userNum: (value2.demand_user_num.value / 10000).toFixed(2),
                familyWatchTime: demand_dur_family,
                theSeedingRate: play_full_rate + '%',
                viewingBehaviorData: [watch_dur_children_rate, watch_dur_film_rate, watch_dur_oth_rate]
              })
            } else if (value.key == 'repurchase') {
              let play_full_rate
              //将少儿，影视，非少儿非影视总和作为分母，求每一个的百分比
              let watch_dur_total = value2.watch_dur_children.value + value2.watch_dur_film.value + value2.watch_dur_oth.value
              let watch_dur_children_rate = ((value2.watch_dur_children.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_film_rate = ((value2.watch_dur_film.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_oth_rate = ((value2.watch_dur_oth.value / watch_dur_total) * 100).toFixed(1)
              let demand_dur_family = (value2.demand_dur.value / 60 / value2.demand_user_num.value).toFixed(2) //用户细分的户均观看时长
              if (value2.demand_dur.value > value2.programTime_t.value) {
                play_full_rate = 100
              } else {
                play_full_rate = ((value2.demand_dur.value / value2.programTime_t.value) * 100).toFixed(2)
              }
              customerRepurchase_temp.push({
                title: value2.key,
                userNum: (value2.demand_user_num.value / 10000).toFixed(2),
                familyWatchTime: demand_dur_family,
                theSeedingRate: play_full_rate + '%',
                viewingBehaviorData: [watch_dur_children_rate, watch_dur_film_rate, watch_dur_oth_rate]
              })
            } else if (value.key == 'lapsed') {
              // console.log("睡眠用户------", value2)
              let play_full_rate
              //将少儿，影视，非少儿非影视总和作为分母，求每一个的百分比
              let watch_dur_total = value2.watch_dur_children.value + value2.watch_dur_film.value + value2.watch_dur_oth.value
              let watch_dur_children_rate = ((value2.watch_dur_children.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_film_rate = ((value2.watch_dur_film.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_oth_rate = ((value2.watch_dur_oth.value / watch_dur_total) * 100).toFixed(1)
              let demand_dur_family = (value2.demand_dur.value / 60 / value2.demand_user_num.value).toFixed(2) //用户细分的户均观看时长
              if (value2.demand_dur.value > value2.programTime_t.value) {
                play_full_rate = 100
              } else {
                play_full_rate = ((value2.demand_dur.value / value2.programTime_t.value) * 100).toFixed(2)
              }
              customerLapsed_temp.push({
                title: value2.key,
                userNum: (value2.demand_user_num.value / 10000).toFixed(2),
                familyWatchTime: demand_dur_family,
                theSeedingRate: play_full_rate + '%',
                viewingBehaviorData: [watch_dur_children_rate, watch_dur_film_rate, watch_dur_oth_rate]
              })
            } else if (value.key == 'none') {
              let play_full_rate
              //将少儿，影视，非少儿非影视总和作为分母，求每一个的百分比
              let watch_dur_total = value2.watch_dur_children.value + value2.watch_dur_film.value + value2.watch_dur_oth.value
              let watch_dur_children_rate = ((value2.watch_dur_children.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_film_rate = ((value2.watch_dur_film.value / watch_dur_total) * 100).toFixed(1)
              let watch_dur_oth_rate = ((value2.watch_dur_oth.value / watch_dur_total) * 100).toFixed(1)
              let demand_dur_family = (value2.demand_dur.value / 60 / value2.demand_user_num.value).toFixed(2) //用户细分的户均观看时长
              if (value2.demand_dur.value > value2.programTime_t.value) {
                play_full_rate = 100
              } else {
                play_full_rate = ((value2.demand_dur.value / value2.programTime_t.value) * 100).toFixed(2)
              }
              customerNone_temp.push({
                title: value2.key,
                userNum: (value2.demand_user_num.value / 10000).toFixed(2),
                familyWatchTime: demand_dur_family,
                theSeedingRate: play_full_rate + '%',
                viewingBehaviorData: [watch_dur_children_rate, watch_dur_film_rate, watch_dur_oth_rate]
              })
            }
          })
        })

        //此处要处理观看行为的viewingBehaviorData占比
        //["尝试购买", "一次性购买", "忠诚用户", "重新激活", "从未订购", "睡眠用户"],
        vm.customerSegmentation.categoryData[0].data = customerFirsttime_temp
        vm.customerSegmentation.categoryData[1].data = customerOnectime_temp
        vm.customerSegmentation.categoryData[2].data = customerLoyer_temp
        vm.customerSegmentation.categoryData[3].data = customerRepurchase_temp
        vm.customerSegmentation.categoryData[4].data = customerNone_temp
        vm.customerSegmentation.categoryData[5].data = customerLapsed_temp
      } catch (error) {
        console.log(error);
      }
      // Vue.set(vm.customerSegmentation.categoryData, 0, customerFirsttime_temp)
      // Vue.set(vm.customerSegmentation.categoryData, 1, customerOnectime_temp)
      // Vue.set(vm.customerSegmentation.categoryData, 2, customerLoyer_temp)
      // Vue.set(vm.customerSegmentation.categoryData, 3, customerNone_temp)
      // console.log("customerFirsttime_temp------", customerFirsttime_temp)
      // console.log("customerLoyer_temp------", customerLoyer_temp)
      // console.log("customerOnectime_temp------", customerOnectime_temp)
      // console.log("customerNone_temp------", customerNone_temp)
      // console.log("vm.customerSegmentation.categoryData", vm.customerSegmentation.categoryData)
    },
    //收视次数
    api_data6(newValue, oldValue) {
      console.log("用户生命周期收视次数TOP", newValue)
      console.log("用户生命周期收视次数------", newValue)
      let vm = this
      let user_viewing_num_data = newValue.aggregations.statistical_granularity.buckets[0].flag_user.buckets
      let viewing_num_firsttime_temp = []
      let viewing_num_oncetime_temp = []
      let viewing_num_loyal_temp = []
      let viewing_num_other_temp = []
      let viewing_num_repurchase_temp = []
      let viewing_num_lapsed_temp = []

      let viewing_num_firsttime_bottom_temp = []    //收视bottom
      let viewing_num_oncetime_bottom_temp = []   //收视bottom
      let viewing_num_loyal_bottom_temp = []   //收视bottom
      let viewing_num_other_bottom_temp = []   //收视bottom
      let viewing_num_repurchase_bottom_temp = []   //收视bottom
      let viewing_num_lapsed_bottom_temp = []   //收视bottom

      try {
        user_viewing_num_data.forEach((value, index) => {
          if (value.key == 'firsttime') {
            // console.log(value.key)
            // console.log(value)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_freq.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_freq.value / 10000   //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_freq.value / 10000  //分子
                viewing_num_firsttime_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(2)
                })
              }
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_freq.value)
                bottom_num_fm = value2.demand_freq.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                // console.log("收视bottom第15名", bottom_num_fm)
                let bottom_num_fz = value2.demand_freq.value //分子
                // console.log("bottom_num_fz----", bottom_num_fz)
                // console.log("bottom_num_fm----", bottom_num_fm)
                // console.log("百分比：", bottom_num_fz / bottom_num_fm)
                viewing_num_firsttime_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(3)
                })
              }
            })

          } else if (value.key == 'onetime') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_freq.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_freq.value / 10000  //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_freq.value / 10000 //分子
                viewing_num_oncetime_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(2)
                })
              }

              //收视bottom
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_freq.value)
                bottom_num_fm = value2.demand_freq.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_freq.value //分子
                viewing_num_oncetime_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(3)
                })
              }
            })
            // console.log("-----------------------------------")

          } else if (value.key == 'loyer') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_freq.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_freq.value / 10000  //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_freq.value / 10000  //分子
                viewing_num_loyal_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(2)
                })
              }
              //收视bottom
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_freq.value)
                bottom_num_fm = value2.demand_freq.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_freq.value //分子
                viewing_num_loyal_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(3)
                })
              }
            })
            // console.log("-----------------------------------")

          } else if (value.key == 'none') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_freq.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_freq.value / 10000  //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_freq.value / 10000 //分子
                viewing_num_other_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(2)
                })
              }
              //收视bottom
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_freq.value)
                bottom_num_fm = value2.demand_freq.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_freq.value //分子
                viewing_num_other_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(3)
                })
              }
            })
            // console.log("-----------------------------------")
          } else if (value.key == 'repurchase') {
            // console.log(value.key)
            // console.log(value)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_freq.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_freq.value / 10000  //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_freq.value / 10000 //分子
                viewing_num_repurchase_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(2)
                })
              }
              //收视bottom
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_freq.value)
                bottom_num_fm = value2.demand_freq.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_freq.value //分子
                viewing_num_repurchase_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(3)
                })
              }
            })
          } else if (value.key == 'lapsed') {
            // console.log(value.key)
            // console.log(value)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_freq.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_freq.value / 10000  //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_freq.value / 10000 //分子
                viewing_num_lapsed_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(2)
                })
              }
              //收视bottom
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_freq.value)
                bottom_num_fm = value2.demand_freq.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_freq.value //分子
                viewing_num_lapsed_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_freq.value / 10000).toFixed(3)
                })
              }
            })
          }
        })
        vm.NumberOfViewersTopList.data = []
        vm.targetOption = "尝试购买"
        vm.NumberOfViewersTopList.data = viewing_num_firsttime_temp
        vm.viewing_num_firsttime_temp = viewing_num_firsttime_temp
        vm.viewing_num_oncetime_temp = viewing_num_oncetime_temp
        vm.viewing_num_loyal_temp = viewing_num_loyal_temp
        vm.viewing_num_other_temp = viewing_num_other_temp
        vm.viewing_num_repurchase_temp = viewing_num_repurchase_temp
        vm.viewing_num_lapsed_temp = viewing_num_lapsed_temp

        vm.viewing_num_firsttime_bottom_temp = viewing_num_firsttime_bottom_temp
        vm.viewing_num_oncetime_bottom_temp = viewing_num_oncetime_bottom_temp
        vm.viewing_num_loyal_bottom_temp = viewing_num_loyal_bottom_temp
        vm.viewing_num_other_bottom_temp = viewing_num_other_bottom_temp
        vm.viewing_num_repurchase_bottom_temp = viewing_num_repurchase_bottom_temp
        vm.viewing_num_lapsed_bottom_temp = viewing_num_lapsed_bottom_temp
      } catch (error) {
        console.log(error);
      }

      // console.log("viewing_num_firsttime_temp", viewing_num_firsttime_temp)
      // console.log("viewing_num_oncetime_temp", viewing_num_oncetime_temp)
      // console.log("viewing_num_loyal_temp", viewing_num_loyal_temp)
      // console.log("viewing_num_other_temp", viewing_num_other_temp)
      // console.log("viewing_time_repurchase_temp", viewing_num_repurchase_temp)
      // console.log("viewing_time_lapsed_temp", viewing_num_lapsed_temp)
      // console.log("----------NumberOfViewersTopList.data", vm.NumberOfViewersTopList.data)
    },
    //收视时长
    api_data7(newValue, oldValue) {
      // console.log("用户生命周期收视时长------", newValue)
      let vm = this
      let user_viewing_time_data = newValue.aggregations.flag_user.buckets
      let viewing_time_firsttime_temp = []    //收视top
      let viewing_time_oncetime_temp = []   //收视top
      let viewing_time_loyal_temp = []   //收视top
      let viewing_time_other_temp = []   //收视top
      let viewing_time_repurchase_temp = []   //重新激活
      let viewing_time_lapsed_temp = []   //重新激活

      let viewing_time_firsttime_bottom_temp = []    //收视bottom
      let viewing_time_oncetime_bottom_temp = []   //收视bottom
      let viewing_time_loyal_bottom_temp = []   //收视bottom
      let viewing_time_other_bottom_temp = []   //收视bottom
      let viewing_time_repurchase_bottom_temp = []   //重新激活
      let viewing_time_lapsed_bottom_temp = []   //重新激活

      try {
        user_viewing_time_data.forEach((value, index) => {
          if (value.key == 'firsttime') {
            // console.log(value.key)
            let hot_num_fm  ////将top1的节目观看时长作为百分比分母(万小时)
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_dur.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_dur.value  //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_dur.value//分子
                viewing_time_firsttime_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(2)
                })
              }
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_dur.value)
                bottom_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                // console.log("收视bottom第15名", bottom_num_fm)
                let bottom_num_fz = value2.demand_dur.value //分子
                // console.log("bottom_num_fz----", bottom_num_fz)
                // console.log("bottom_num_fm----", bottom_num_fm)
                // console.log("百分比：", bottom_num_fz / bottom_num_fm)
                viewing_time_firsttime_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(3)
                })
              }
            })
            // console.log("-----------------------------------")
          } else if (value.key == 'onetime') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_dur.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_dur.value //分子
                viewing_time_oncetime_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(2)
                })
              }

              //收视时长bottom 15
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_dur.value)
                bottom_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_dur.value //分子
                viewing_time_oncetime_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(3)
                })
              }
            })
            // console.log("viewing_time_oncetime_bottom_temp", viewing_time_oncetime_bottom_temp)

          } else if (value.key == 'loyer') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_dur.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_dur.value  //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_dur.value //分子
                viewing_time_loyal_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(2)
                })
              }

              //收视时长bottom 15
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_dur.value)
                bottom_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_dur.value //分子
                viewing_time_loyal_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(3)
                })
              }
            })

          } else if (value.key == 'none') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_dur.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_dur.value //分子
                viewing_time_other_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(2)
                })
              }

              //收视时长bottom 15
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_dur.value)
                bottom_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_dur.value //分子
                viewing_time_other_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(3)
                })
              }
            })
          } else if (value.key == 'repurchase') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_dur.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_dur.value //分子
                viewing_time_repurchase_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(2)
                })
              }

              //收视时长bottom 15
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_dur.value)
                bottom_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_dur.value //分子
                viewing_time_repurchase_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(3)
                })
              }
            })
          } else if (value.key == 'lapsed') {
            // console.log(value.key)
            let hot_num_fm
            let bottom_num_fm;   //将bottom15的节目观看时长作为百分比分母(万小时)
            value.programname.buckets.forEach((value2, index2) => {
              if (index2 < 15) {
                // console.log(index2, value2.key, value2.demand_dur.value)
                if (index2 == 0) {
                  hot_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
                }
                let hot_num_fz = value2.demand_dur.value //分子
                viewing_time_lapsed_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((hot_num_fz / hot_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(2)
                })
              }

              //收视时长bottom 15
              if (index2 == value.programname.buckets.length - 15) {
                // console.log("收视第倒数15名", index2, value2.demand_dur.value)
                bottom_num_fm = value2.demand_dur.value //将top1的节目观看时长作为百分比分母(万小时)
              }
              if (index2 >= value.programname.buckets.length - 15) {
                // console.log("收视bottom 15名", index2, value2)
                let bottom_num_fz = value2.demand_dur.value //分子
                viewing_time_lapsed_bottom_temp.push({
                  topNum: index2 + 1,
                  programName: value2.key,
                  programSource: value2.program_type.buckets[0].key,
                  hot: parseInt((bottom_num_fz / bottom_num_fm) * 100) + '%',
                  playNum: (value2.demand_dur.value / 60 / 1000).toFixed(3)
                })
              }
            })
          }
        })
        vm.viewingTopList.data = []
        // vm.targetOption = "订购-Firsttime"
        vm.targetOption = "尝试购买"
        vm.viewingTopList.data = viewing_time_firsttime_temp
        vm.viewing_time_firsttime_temp = viewing_time_firsttime_temp
        vm.viewing_time_oncetime_temp = viewing_time_oncetime_temp
        vm.viewing_time_loyal_temp = viewing_time_loyal_temp
        vm.viewing_time_other_temp = viewing_time_other_temp
        vm.viewing_time_repurchase_temp = viewing_time_repurchase_temp
        vm.viewing_time_lapsed_temp = viewing_time_lapsed_temp

        vm.viewing_time_firsttime_bottom_temp = viewing_time_firsttime_bottom_temp
        vm.viewing_time_oncetime_bottom_temp = viewing_time_oncetime_bottom_temp
        vm.viewing_time_loyal_bottom_temp = viewing_time_loyal_bottom_temp
        vm.viewing_time_other_bottom_temp = viewing_time_other_bottom_temp
        vm.viewing_time_repurchase_bottom_temp = viewing_time_repurchase_bottom_temp
        vm.viewing_time_lapsed_bottom_temp = viewing_time_lapsed_bottom_temp
      } catch (error) {
        console.log(error);
      }
      // console.log("viewing_time_firsttime_temp", viewing_time_firsttime_temp)
      // console.log("viewing_time_oncetime_temp", viewing_time_oncetime_temp)
      // console.log("viewing_time_loyal_temp", viewing_time_loyal_temp)
      // console.log("viewing_time_other_temp", viewing_time_other_temp)
      // console.log("viewing_time_repurchase_temp", viewing_time_repurchase_temp)
      // console.log("viewing_time_lapsed_temp", viewing_time_lapsed_temp)
      // console.log("----------viewingTopList.data", vm.viewingTopList.data)

      // console.log("viewing_time_firsttime_bottom_temp", viewing_time_firsttime_bottom_temp)
      // console.log("viewing_time_oncetime_bottom_temp", viewing_time_oncetime_bottom_temp)
      // console.log("viewing_time_loyal_bottom_temp", viewing_time_loyal_bottom_temp)
      // console.log("viewing_time_other_bottom_temp", viewing_time_other_bottom_temp)
    },
  },
  data() {
    return {
      targetOption: "尝试购买", //默认存放选择的指标
      //选择指标数据
      // target: ["订购-Firsttime", "订购-Oncetime", "订购-忠诚用户", "未订购用户"],
      target: ["尝试购买", "一次性购买", "忠诚用户", "重新激活", "从未订购", "睡眠用户"],

      viewing_time_positive: true, //收视时长 默认正序
      //收视时长TOP数据
      viewing_time_firsttime_temp: [],
      viewing_time_oncetime_temp: [],
      viewing_time_loyal_temp: [],
      viewing_time_other_temp: [],
      viewing_time_repurchase_temp: [],
      viewing_time_lapsed_temp: [],

      //收视时长bottom数据
      viewing_time_firsttime_bottom_temp: [],    //收视bottom
      viewing_time_oncetime_bottom_temp: [],   //收视bottom
      viewing_time_loyal_bottom_temp: [],   //收视bottom
      viewing_time_other_bottom_temp: [],   //收视bottom
      viewing_time_repurchase_bottom_temp: [],
      viewing_time_lapsed_bottom_temp: [],

      viewing_num_positive: true,  //收视次数 默认正序
      //收视次数TOP数据
      viewing_num_firsttime_temp: [],
      viewing_num_oncetime_temp: [],
      viewing_num_loyal_temp: [],
      viewing_num_other_temp: [],
      viewing_num_repurchase_temp: [],
      viewing_num_lapsed_temp: [],

      //收视次数bottom数据
      viewing_num_firsttime_bottom_temp: [],    //收视bottom
      viewing_num_oncetime_bottom_temp: [],   //收视bottom
      viewing_num_loyal_bottom_temp: [],   //收视bottom
      viewing_num_other_bottom_temp: [],   //收视bottom
      viewing_num_repurchase_bottom_temp: [],
      viewing_num_lapsed_bottom_temp: [],

      //收视时长TOP
      viewingTopList: {
        id: "viewingTimeTOP",
        data: [
          // {
          //   topNum: 1,
          //   programName: "疯狂的外星人",
          //   programSource: "电影",
          //   hot: "90%",
          //   playNum: "12.3"
          // },
          // {
          //   topNum: 2,
          //   programName: "熊出没.原始",
          //   programSource: "少儿",
          //   hot: "85%",
          //   playNum: "11.2"
          // },
          // {
          //   topNum: 3,
          //   programName: "流浪地球",
          //   programSource: "电影",
          //   hot: "83%",
          //   playNum: "10.3"
          // },
          // {
          //   topNum: 4,
          //   programName: "人间.喜剧",
          //   programSource: "电影",
          //   hot: "80%",
          //   playNum: "10.1"
          // },
          // {
          //   topNum: 5,
          //   programName: "白发",
          //   programSource: "电视剧",
          //   hot: "78%",
          //   playNum: "9.5"
          // },
          // {
          //   topNum: 6,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "73%",
          //   playNum: "9.2"
          // },
          // {
          //   topNum: 7,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "70%",
          //   playNum: "9.0"
          // },
          // {
          //   topNum: 8,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "68%",
          //   playNum: "8.7"
          // },
          // {
          //   topNum: 9,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "64%",
          //   playNum: "8.5"
          // },
          // {
          //   topNum: 10,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "60%",
          //   playNum: "8.0"
          // },
          // {
          //   topNum: 11,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "56%",
          //   playNum: "7.5"
          // },
          // {
          //   topNum: 12,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "53%",
          //   playNum: "7.0"
          // },
          // {
          //   topNum: 13,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "50%",
          //   playNum: "6.8"
          // },
          // {
          //   topNum: 14,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "45%",
          //   playNum: "6.3"
          // },
          // {
          //   topNum: 15,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "40%",
          //   playNum: "6.0"
          // }
        ]
      },
      //收视次数数据
      NumberOfViewersTopList: {
        id: "NumberOfViewersTop",
        data: [
          // {
          //   topNum: 1,
          //   programName: "疯狂的外星人",
          //   programSource: "电影",
          //   hot: "90%",
          //   playNum: "12.3"
          // },
          // {
          //   topNum: 2,
          //   programName: "熊出没.原始",
          //   programSource: "少儿",
          //   hot: "85%",
          //   playNum: "11.2"
          // },
          // {
          //   topNum: 3,
          //   programName: "流浪地球",
          //   programSource: "电影",
          //   hot: "83%",
          //   playNum: "10.3"
          // },
          // {
          //   topNum: 4,
          //   programName: "人间.喜剧",
          //   programSource: "电影",
          //   hot: "80%",
          //   playNum: "10.1"
          // },
          // {
          //   topNum: 5,
          //   programName: "白发",
          //   programSource: "电视剧",
          //   hot: "78%",
          //   playNum: "9.5"
          // },
          // {
          //   topNum: 6,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "73%",
          //   playNum: "9.2"
          // },
          // {
          //   topNum: 7,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "70%",
          //   playNum: "9.0"
          // },
          // {
          //   topNum: 8,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "68%",
          //   playNum: "8.7"
          // },
          // {
          //   topNum: 9,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "64%",
          //   playNum: "8.5"
          // },
          // {
          //   topNum: 10,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "60%",
          //   playNum: "8.0"
          // },
          // {
          //   topNum: 11,
          //   programName: "反贪风暴",
          //   programSource: "电影",
          //   hot: "56%",
          //   playNum: "7.5"
          // },
          // {
          //   topNum: 12,
          //   programName: "一出好戏",
          //   programSource: "电影",
          //   hot: "53%",
          //   playNum: "7.0"
          // },
          // {
          //   topNum: 13,
          //   programName: "拜托了冰箱",
          //   programSource: "综艺",
          //   hot: "50%",
          //   playNum: "6.8"
          // },
          // {
          //   topNum: 14,
          //   programName: "极限挑战",
          //   programSource: "真人秀",
          //   hot: "45%",
          //   playNum: "6.3"
          // },
          // {
          //   topNum: 15,
          //   programName: "陈情令",
          //   programSource: "电视剧",
          //   hot: "40%",
          //   playNum: "6.0"
          // }
        ]
      },

      //用户细分数据
      // title: ["订购-Firsttime", "订购-Oncetime", "订购-忠诚用户", "未订购用户"],
      title: ["尝试购买", "一次性购买", "忠诚用户", "重新激活", "从未订购", "睡眠用户"],
      customerSegmentation: {
        // 用户细分数据
        title: ["VIP包", "用户数（万户）", "户均观看时长（小时）", "完播率", "观看行为"],
        viewingBehaviorCategory: ["少儿", "影视", "非少儿非影视"],
        categoryData: [
          {
            // userCategoryName: "尝试购买",
            data: [
              // {
              //   title: "家庭包",
              //   userNum: "12",
              //   familyWatchTime: "123",
              //   theSeedingRate: "59%",
              //   viewingBehaviorData: ["30", "58", "12"]
              // },
              // {
              //   title: "少儿包",
              //   userNum: "13",
              //   familyWatchTime: "13",
              //   theSeedingRate: "19%",
              //   viewingBehaviorData: ["54", "20", "26"]
              // },
              // {
              //   title: "影视包",
              //   userNum: "22",
              //   familyWatchTime: "103",
              //   theSeedingRate: "40%",
              //   viewingBehaviorData: ["13", "30", "57"]
              // }
            ]
          },
          {
            // userCategoryName: "一次性购买",
            data: []
          },
          {
            // userCategoryName: "诚用户",
            data: []
          },
          {
            // userCategoryName: "重新激活",
            data: []
          },
          {
            // userCategoryName: "从未订购",
            data: []
          },
          {
            // userCategoryName: "睡眠用户",
            data: [
              // {
              //   title: "",
              //   userNum: "12",
              //   familyWatchTime: "",
              //   theSeedingRate: "",
              //   viewingBehaviorData: []
              // }
            ]
          }
        ]
      }
    };
  },
  created() { },
  methods: {
    //点击用户群体下拉框切换收视TOP
    handleViewingTop(val) {
      console.log(val)
      let vm = this
      vm.viewingTopList.data = []
      vm.NumberOfViewersTopList.data = []
      if (val === '尝试购买') {
        vm.viewing_time_positive = true
        vm.viewing_num_positive = true
        vm.viewingTopList.data = vm.viewing_time_firsttime_temp  //收视时长
        vm.NumberOfViewersTopList.data = vm.viewing_num_firsttime_temp  //收视次数
      }
      if (val === '一次性购买') {
        vm.viewing_time_positive = true
        vm.viewing_num_positive = true
        vm.viewingTopList.data = vm.viewing_time_oncetime_temp
        vm.NumberOfViewersTopList.data = vm.viewing_num_oncetime_temp
      }
      if (val === '忠诚用户') {
        vm.viewing_time_positive = true
        vm.viewing_num_positive = true
        vm.viewingTopList.data = vm.viewing_time_loyal_temp
        vm.NumberOfViewersTopList.data = vm.viewing_num_loyal_temp
      }
      if (val === '从未订购') {
        vm.viewing_time_positive = true
        vm.viewing_num_positive = true
        vm.viewingTopList.data = vm.viewing_time_other_temp
        vm.NumberOfViewersTopList.data = vm.viewing_num_other_temp
      }
      if (val === '重新激活') {
        vm.viewing_time_positive = true
        vm.viewing_num_positive = true
        vm.viewingTopList.data = vm.viewing_time_repurchase_temp
        vm.NumberOfViewersTopList.data = vm.viewing_num_repurchase_temp
      }
      if (val === '睡眠用户') {
        vm.viewing_time_positive = true
        vm.viewing_num_positive = true
        vm.viewingTopList.data = vm.viewing_time_lapsed_temp
        vm.NumberOfViewersTopList.data = vm.viewing_num_lapsed_temp
      }
      console.log("select更新时长viewingTopList------", vm.viewingTopList.data)
      console.log("select更新次数NumberOfViewersTopList------", vm.NumberOfViewersTopList.data)
    },

    //收视时长 正序反序排列
    changeTimeTop() {
      // title: ["尝试购买", "一次性购买", "忠诚用户", "重新激活", "从未订购", "睡眠用户"],
      let vm = this
      vm.viewing_time_positive = !vm.viewing_time_positive
      if (vm.targetOption == '尝试购买') {
        vm.viewingTopList.data = vm.viewing_time_positive ? vm.viewing_time_firsttime_temp : vm.viewing_time_firsttime_bottom_temp
      }

      if (vm.targetOption == '一次性购买') {
        vm.viewingTopList.data = vm.viewing_time_positive ? vm.viewing_time_oncetime_temp : vm.viewing_time_oncetime_bottom_temp
      }
      if (vm.targetOption == '忠诚用户') {
        vm.viewingTopList.data = vm.viewing_time_positive ? vm.viewing_time_loyal_temp : vm.viewing_time_loyal_bottom_temp
      }

      if (vm.targetOption == '从未订购') {
        vm.viewingTopList.data = vm.viewing_time_positive ? vm.viewing_time_other_temp : vm.viewing_time_other_bottom_temp
      }
      if (vm.targetOption == '重新激活') {
        vm.viewingTopList.data = vm.viewing_time_positive ? vm.viewing_time_repurchase_temp : vm.viewing_time_repurchase_bottom_temp
      }
      if (vm.targetOption == '睡眠用户') {
        vm.viewingTopList.data = vm.viewing_time_positive ? vm.viewing_time_lapsed_temp : vm.viewing_time_lapsed_bottom_temp
      }
      // console.log("当前用户群体：", vm.targetOption)
      // console.log("正序排序", vm.viewing_time_positive)
    },

    //收视次数 正序反序排列
    changeNumTop() {
      let vm = this
      vm.viewing_num_positive = !vm.viewing_num_positive
      if (vm.targetOption == '尝试购买') {
        vm.NumberOfViewersTopList.data = vm.viewing_num_positive ? vm.viewing_num_firsttime_temp : vm.viewing_num_firsttime_bottom_temp
      }

      if (vm.targetOption == '一次性购买') {
        vm.NumberOfViewersTopList.data = vm.viewing_num_positive ? vm.viewing_num_oncetime_temp : vm.viewing_num_oncetime_bottom_temp
      }
      if (vm.targetOption == '忠诚用户') {
        vm.NumberOfViewersTopList.data = vm.viewing_num_positive ? vm.viewing_num_loyal_temp : vm.viewing_num_loyal_bottom_temp
      }

      if (vm.targetOption == '从未订购') {
        vm.NumberOfViewersTopList.data = vm.viewing_num_positive ? vm.viewing_num_other_temp : vm.viewing_num_other_bottom_temp
      }
      if (vm.targetOption == '重新激活') {
        vm.NumberOfViewersTopList.data = vm.viewing_num_positive ? vm.viewing_num_repurchase_temp : vm.viewing_num_repurchase_bottom_temp
      }
      if (vm.targetOption == '睡眠用户') {
        vm.NumberOfViewersTopList.data = vm.viewing_num_positive ? vm.viewing_num_lapsed_temp : vm.viewing_num_lapsed_bottom_temp
      }
      // console.log("当前用户群体：", vm.targetOption)
      // console.log("正序排序", vm.viewing_time_positive)
    },

  }
};
</script>

<style scoped>
.CustomerSegmentation {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  text-align: left;
}
.CustomerSegmentation .C_left,
.CustomerSegmentation .C_right {
  height: 100%;
}
.CustomerSegmentation .C_r_top {
  margin-bottom: 10px;
}
.CustomerSegmentation .C_r_top_user {
  color: #333;
  font-size: 14px;
  margin-right: 5px;
}
.CustomerSegmentation .C_r_top span {
  font-weight: bold;
}
.CustomerSegmentation .C_r_top .el-select {
  width: 150px;
}
.flex {
  display: -webkit-flex;
  display: flex;
  justify-content: flex-start !important;
}
.flex-direction {
  flex-direction: column;
}
.CustomerSegmentation .title_category {
  width: 85%;
}
.CustomerSegmentation .m_table .view_behavior_category {
  margin-left: 15px;
  color: #999;
}
.CustomerSegmentation .m_table .view_behavior_category span {
  width: 12px;
  height: 7px;
  margin-right: 4px;
}
.CustomerSegmentation .m_table .view_behavior_category span.children_span {
  background: #f97e6f;
}
.CustomerSegmentation .m_table .view_behavior_category span.film_span {
  background: #fcb84f;
}
.CustomerSegmentation .m_table .view_behavior_category span.none_span {
  background: #dadeea;
}
.CustomerSegmentation .title_category div.flex_width,
.CustomerSegmentation .userCategory_data .data_num {
  width: 15%;
}
.CustomerSegmentation .title_category div.flex_width:last-child,
.CustomerSegmentation .userCategory_data .data_num:last-child {
  width: 40%;
}
.CustomerSegmentation .first_userCategory {
  width: 15%;
}
.CustomerSegmentation .userCategory_data {
  width: 85%;
}
.CustomerSegmentation .userCategory_data div.flex {
  width: 100%;
}
.CustomerSegmentation .mt_row .mt_h {
  margin: 25px 0px;
}
.CustomerSegmentation .userCategory_data div.flex {
  margin: 7px 0px;
}
.CustomerSegmentation .userCategory_data .customer_bar p {
  width: 200px;
  background: #dadeea;
}
.CustomerSegmentation .userCategory_data .customer_bar p span {
  display: inline-block;
  text-align: center;
  font-size: 8px !important;
  color: #fff;
  height: 24px;
  line-height: 24px;
}
.CustomerSegmentation .userCategory_data .customer_bar p span i {
  font-style: normal;
}
.CustomerSegmentation .userCategory_data .customer_bar .children_span {
  background: #f97e6f;
}
.CustomerSegmentation .userCategory_data .customer_bar .film_span {
  background: #fcb84f;
}
.CustomerSegmentation .mt_row .data_num {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  line-height: 24px;
}
.CustomerSegmentation .mt_row .data_num p {
  margin: 2px 0;
}
.CustomerSegmentation .ascending_order {
  color: #ff6123;
  cursor: pointer;
}
.CustomerSegmentation .viewingTopList {
  height: 720px;
}
</style>
