<template>
  <div class="CustomerSegmentation">
    <el-row>
      <el-col class="C_left" :span="12">
        <div class="m_table">
          <div class="mt_title">
            <div class="mt_h">
              <div></div>
              <div>VIP包</div>
              <div>用户数(万)</div>
              <div>户均收看时长(小时)</div>
              <div>完播率</div>
            </div>
          </div>
          <div class="mt_row">
            <div class="mt_h">
              <div>订购-Firsttime</div>
              <div class="data_num">
                <p>家庭包</p>
                <p>少儿包</p>
                <p>影视包</p>
              </div>
              <div class="data_num">
                <p>12</p>
                <p>13</p>
                <p>23</p>
              </div>
              <div class="data_num">
                <p>123</p>
                <p>13</p>
                <p>234</p>
              </div>
              <div class="data_num">
                <p>59%</p>
                <p>82%</p>
                <p>70%</p>
              </div>
            </div>
          </div>
          <div class="mt_row">
            <div class="mt_h">
              <div>订购-Onetime</div>
              <div class="data_num">
                <p>家庭包</p>
                <p>少儿包</p>
                <p>影视包</p>
              </div>
              <div class="data_num">
                <p>12</p>
                <p>13</p>
                <p>23</p>
              </div>
              <div class="data_num">
                <p>123</p>
                <p>13</p>
                <p>234</p>
              </div>
              <div class="data_num">
                <p>59%</p>
                <p>82%</p>
                <p>70%</p>
              </div>
            </div>
          </div>
          <div class="mt_row">
            <div class="mt_h">
              <div>订购-周期性购买</div>
              <div class="data_num">
                <p>家庭包</p>
                <p>少儿包</p>
                <p>影视包</p>
              </div>
              <div class="data_num">
                <p>12</p>
                <p>13</p>
                <p>23</p>
              </div>
              <div class="data_num">
                <p>123</p>
                <p>13</p>
                <p>234</p>
              </div>
              <div class="data_num">
                <p>59%</p>
                <p>82%</p>
                <p>70%</p>
              </div>
            </div>
          </div>
          <div class="mt_row">
            <div class="mt_h">
              <div>订购-忠诚用户</div>
              <div class="data_num">
                <p>家庭包</p>
                <p>少儿包</p>
                <p>影视包</p>
              </div>
              <div class="data_num">
                <p>12</p>
                <p>13</p>
                <p>23</p>
              </div>
              <div class="data_num">
                <p>123</p>
                <p>13</p>
                <p>234</p>
              </div>
              <div class="data_num">
                <p>59%</p>
                <p>82%</p>
                <p>70%</p>
              </div>
            </div>
          </div>
          <div class="mt_row">
            <div class="mt_h">
              <div>订购-疑似流失</div>
              <div class="data_num">
                <p>家庭包</p>
                <p>少儿包</p>
                <p>影视包</p>
              </div>
              <div class="data_num">
                <p>12</p>
                <p>13</p>
                <p>23</p>
              </div>
              <div class="data_num">
                <p>123</p>
                <p>13</p>
                <p>234</p>
              </div>
              <div class="data_num">
                <p>59%</p>
                <p>82%</p>
                <p>70%</p>
              </div>
            </div>
          </div>
          <div class="mt_row">
            <div class="mt_h mt_h">
              <div>未订购用户</div>
              <div class="data_num"></div>
              <div class="data_num">123</div>
              <div class="data_num"></div>
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
import UserViewingBehaviorTOP from "@/views/backcoms/userviewingbehavior/UserViewingBehaviorTOP"  //收视TOP组件
export default {
  name: "CustomerSegmentation",
  components: {
    "user-viewing-behavior-top": UserViewingBehaviorTOP
  },
  data() {
    return {
      targetOption: '', //存放选择的指标
      //选择指标数据
      target: ["firsttime", "onetime", "周期性购买", "忠诚用户", "疑似流失"],
      //收视时长TOP
      viewingTopList: {
        id: 'viewingTimeTOP',
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
        id: 'NumberOfViewersTop',
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
    }
  },
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
.CustomerSegmentation .mt_title .mt_h {
  margin-bottom: 3%;
}
.CustomerSegmentation .mt_row .mt_h {
  margin-bottom: 3%;
}

.CustomerSegmentation .mt_title .mt_h > div,
.CustomerSegmentation .mt_row .mt_h > div {
  width: 20%;
  display: inline-block;
  vertical-align: middle;
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
