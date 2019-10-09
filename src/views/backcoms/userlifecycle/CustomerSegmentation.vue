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
              <div class="first_userCategory">{{customerCategory.userCategoryName}}</div>
              <div
                class="flex flex-direction userCategory_data"
                v-if="customerCategory.userCategoryName !='未订购用户'"
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
              <div
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
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="C_right" :span="12">
        <el-row class="C_r_top">
          <span class="C_r_top_user">用户群体：</span>
          <el-select v-model="targetOption" placeholder="请选择">
            <el-option v-for="(item,index) in target" :key="index+'c'" :label="item" :value="item"></el-option>
          </el-select>
        </el-row>
        <el-row class="C_r_bottom">
          <el-col :span="12">
            <el-row>
              <span class="C_r_top_user">收视时长TOP</span>
              <i class="iconfont ascending_order">&#xe606;</i>
            </el-row>
            <el-row class="viewingTopList">
              <user-viewing-behavior-top :viewingTopList="viewingTopList"></user-viewing-behavior-top>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <span>收视次数TOP</span>
              <i class="iconfont ascending_order">&#xe606;</i>
            </el-row>
            <el-row class="viewingTopList">
              <user-viewing-behavior-top :viewingTopList="NumberOfViewersTopList"></user-viewing-behavior-top>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserViewingBehaviorTOP from "@/views/backcoms/userviewingbehavior/UserViewingBehaviorTOP"; //收视TOP组件
export default {
  name: "CustomerSegmentation",
  components: {
    "user-viewing-behavior-top": UserViewingBehaviorTOP
  },
  props: ["api_data5"],
  watch: {
    api_data5(newValue, oldValue) {
      console.log("ULC - api_data5:");
      console.log(newValue);
    }
  },
  data() {
    return {
      targetOption: "", //存放选择的指标
      //选择指标数据
      target: ["firsttime", "onetime", "周期性购买", "忠诚用户", "疑似流失"],
      //收视时长TOP
      viewingTopList: {
        id: "viewingTimeTOP",
        data: [
          {
            topNum: 1,
            programName: "疯狂的外星人",
            programSource: "电影",
            hot: "90%",
            playNum: "12.3"
          },
          {
            topNum: 2,
            programName: "熊出没.原始",
            programSource: "少儿",
            hot: "85%",
            playNum: "11.2"
          },
          {
            topNum: 3,
            programName: "流浪地球",
            programSource: "电影",
            hot: "83%",
            playNum: "10.3"
          },
          {
            topNum: 4,
            programName: "人间.喜剧",
            programSource: "电影",
            hot: "80%",
            playNum: "10.1"
          },
          {
            topNum: 5,
            programName: "白发",
            programSource: "电视剧",
            hot: "78%",
            playNum: "9.5"
          },
          {
            topNum: 6,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "73%",
            playNum: "9.2"
          },
          {
            topNum: 7,
            programName: "一出好戏",
            programSource: "电影",
            hot: "70%",
            playNum: "9.0"
          },
          {
            topNum: 8,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "68%",
            playNum: "8.7"
          },
          {
            topNum: 9,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "64%",
            playNum: "8.5"
          },
          {
            topNum: 10,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "60%",
            playNum: "8.0"
          },
          {
            topNum: 11,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "56%",
            playNum: "7.5"
          },
          {
            topNum: 12,
            programName: "一出好戏",
            programSource: "电影",
            hot: "53%",
            playNum: "7.0"
          },
          {
            topNum: 13,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "50%",
            playNum: "6.8"
          },
          {
            topNum: 14,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "45%",
            playNum: "6.3"
          },
          {
            topNum: 15,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "40%",
            playNum: "6.0"
          }
        ]
      },
      //收视次数数据
      NumberOfViewersTopList: {
        id: "NumberOfViewersTop",
        data: [
          {
            topNum: 1,
            programName: "疯狂的外星人",
            programSource: "电影",
            hot: "90%",
            playNum: "12.3"
          },
          {
            topNum: 2,
            programName: "熊出没.原始",
            programSource: "少儿",
            hot: "85%",
            playNum: "11.2"
          },
          {
            topNum: 3,
            programName: "流浪地球",
            programSource: "电影",
            hot: "83%",
            playNum: "10.3"
          },
          {
            topNum: 4,
            programName: "人间.喜剧",
            programSource: "电影",
            hot: "80%",
            playNum: "10.1"
          },
          {
            topNum: 5,
            programName: "白发",
            programSource: "电视剧",
            hot: "78%",
            playNum: "9.5"
          },
          {
            topNum: 6,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "73%",
            playNum: "9.2"
          },
          {
            topNum: 7,
            programName: "一出好戏",
            programSource: "电影",
            hot: "70%",
            playNum: "9.0"
          },
          {
            topNum: 8,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "68%",
            playNum: "8.7"
          },
          {
            topNum: 9,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "64%",
            playNum: "8.5"
          },
          {
            topNum: 10,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "60%",
            playNum: "8.0"
          },
          {
            topNum: 11,
            programName: "反贪风暴",
            programSource: "电影",
            hot: "56%",
            playNum: "7.5"
          },
          {
            topNum: 12,
            programName: "一出好戏",
            programSource: "电影",
            hot: "53%",
            playNum: "7.0"
          },
          {
            topNum: 13,
            programName: "拜托了冰箱",
            programSource: "综艺",
            hot: "50%",
            playNum: "6.8"
          },
          {
            topNum: 14,
            programName: "极限挑战",
            programSource: "真人秀",
            hot: "45%",
            playNum: "6.3"
          },
          {
            topNum: 15,
            programName: "陈情令",
            programSource: "电视剧",
            hot: "40%",
            playNum: "6.0"
          }
        ]
      },
      customerSegmentation: {
        // 用户细分数据
        title: ["VIP包", "用户数（万）", "户均观看时长", "完播率", "观看行为"],
        viewingBehaviorCategory: ["少儿", "影视", "非少儿非影视"],
        categoryData: [
          {
            userCategoryName: "订购-Firsttime",
            data: [
              {
                title: "家庭包",
                userNum: "12",
                familyWatchTime: "123",
                theSeedingRate: "59%",
                viewingBehaviorData: ["30", "58", "12"]
              },
              {
                title: "少儿包",
                userNum: "13",
                familyWatchTime: "13",
                theSeedingRate: "19%",
                viewingBehaviorData: ["54", "20", "26"]
              },
              {
                title: "影视包",
                userNum: "22",
                familyWatchTime: "103",
                theSeedingRate: "40%",
                viewingBehaviorData: ["13", "30", "57"]
              }
            ]
          },
          {
            userCategoryName: "订购-Onetime",
            data: [
              {
                title: "家庭包",
                userNum: "121",
                familyWatchTime: "13",
                theSeedingRate: "29%",
                viewingBehaviorData: ["50", "20", "30"]
              },
              {
                title: "少儿包",
                userNum: "134",
                familyWatchTime: "134",
                theSeedingRate: "89%",
                viewingBehaviorData: ["54", "40", "6"]
              },
              {
                title: "影视包",
                userNum: "22",
                familyWatchTime: "103",
                theSeedingRate: "40%",
                viewingBehaviorData: ["10", "30", "60"]
              }
            ]
          },
          {
            userCategoryName: "订购-忠诚用户",
            data: [
              {
                title: "家庭包",
                userNum: "436",
                familyWatchTime: "123",
                theSeedingRate: "80%",
                viewingBehaviorData: ["20", "60", "20"]
              },
              {
                title: "少儿包",
                userNum: "13",
                familyWatchTime: "13",
                theSeedingRate: "19%",
                viewingBehaviorData: ["54", "20", "26"]
              },
              {
                title: "影视包",
                userNum: "22",
                familyWatchTime: "103",
                theSeedingRate: "40%",
                viewingBehaviorData: ["10", "30", "60"]
              }
            ]
          },
          {
            userCategoryName: "未订购用户",
            data: [
              {
                title: "",
                userNum: "12",
                familyWatchTime: "",
                theSeedingRate: "",
                viewingBehaviorData: []
              }
            ]
          }
        ]
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
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
  justify-content: flex-start;
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
  height: 500px;
}
</style>
