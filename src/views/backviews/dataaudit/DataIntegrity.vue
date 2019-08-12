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
            <data-integrity-model :tableData="tableData"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 开机日志结束 -->

        <!-- 心跳日志开始 -->
        <el-row class="data_integrity_body" id="heartbeat_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>心跳日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeatLog"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 心跳日志结束 -->

        <!-- 页面访问日志开始 -->
        <el-row class="data_integrity_body" id="page_access_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>页面访问日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeatLog"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 页面访问日志结束 -->

        <!-- 热力图日志开始 -->
        <el-row class="data_integrity_body" id="thermodynamic_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>热力图日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeatLog"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 热力图日志结束 -->

        <!-- 点播播放日志开始 -->
        <el-row class="data_integrity_body" id="bunch_planting_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>点播播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeatLog"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 点播播放日志结束 -->

        <!-- 回看播放日志开始 -->
        <el-row class="data_integrity_body" id="look_back_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>回看播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeatLog"></data-integrity-model>
          </el-row>
        </el-row>
        <!-- 回看播放日志结束 -->

        <!-- 直播播放日志开始 -->
        <el-row class="data_integrity_body" id="live_log">
          <el-row class="model_title">
            <span class="title_border_left"></span>直播播放日志
          </el-row>
          <el-row class="chart_body back_white">
            <data-integrity-model :tableData="heartbeatLog"></data-integrity-model>
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
          <a href="javascript:void(0)" @click="goAnchor('#look_back_log')">直播播放日志</a>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import DataIntegrityModel from '@/views/backcoms/dataaudit/DataIntegrityModel';
export default {
  name: 'DataIntegrity', //数据完整性
  components: {
    "data-integrity-model": DataIntegrityModel
  },
  data() {
    return {
      //开机日志
      tableData: [
        {
          title: 'uid',
          introduce: '用户IPTV账号',
          total: '3967472',
          missingData: '18503',
          LackOfProportion: '0.52%'
        }, {
          title: 'sid',
          introduce: '机顶盒型号',
          total: '721737',
          missingData: '12337',
          LackOfProportion: '0.23%'
        }, {
          title: 'ac',
          introduce: '地市代码',
          total: '632474',
          missingData: '982',
          LackOfProportion: '0.04%'
        }, {
          title: 'uip',
          introduce: '用户IP',
          total: '637467',
          missingData: '6374',
          LackOfProportion: '0.98%'
        }, {
          title: 'en',
          introduce: '模块名称',
          total: '732786',
          missingData: '5361',
          LackOfProportion: '0.23%'
        }, {
          title: 'gid',
          introduce: '用户所属分组',
          total: '276372',
          missingData: '2367',
          LackOfProportion: '0.45%'
        }, {
          title: 'epf',
          introduce: '用户所属能力平台',
          total: '863747',
          missingData: '3232',
          LackOfProportion: '0.32%'
        }, {
          title: 'operators',
          introduce: '用户所属运营商',
          total: '364372',
          missingData: '1232',
          LackOfProportion: '0.74%'
        },
      ],

      //心跳日志
      heartbeatLog: [
        {
          title: 'uid',
          introduce: '用户IPTV账号',
          total: '3967472',
          missingData: '18503',
          LackOfProportion: '0.52%'
        }, {
          title: 'sid',
          introduce: '机顶盒型号',
          total: '721737',
          missingData: '12337',
          LackOfProportion: '0.23%'
        }, {
          title: 'ac',
          introduce: '地市代码',
          total: '632474',
          missingData: '982',
          LackOfProportion: '0.04%'
        }, {
          title: 'uip',
          introduce: '用户IP',
          total: '637467',
          missingData: '6374',
          LackOfProportion: '0.98%'
        }, {
          title: 'en',
          introduce: '模块名称',
          total: '732786',
          missingData: '5361',
          LackOfProportion: '0.23%'
        }, {
          title: 'gid',
          introduce: '用户所属分组',
          total: '276372',
          missingData: '2367',
          LackOfProportion: '0.45%'
        }, {
          title: 'epf',
          introduce: '用户所属能力平台',
          total: '863747',
          missingData: '3232',
          LackOfProportion: '0.32%'
        }, {
          title: 'operators',
          introduce: '用户所属运营商',
          total: '364372',
          missingData: '1232',
          LackOfProportion: '0.74%'
        },
      ],
    }
  },
  mounted() {
    $('.backHome_body_main').scroll(function (event) {
      //console.log($('.backHome_body_main').scrollTop())
      let scrollTopHeight = $('.backHome_body_main').scrollTop()
      let boot_log = document.querySelector('#boot_log').offsetTop
      let heartbeat_log = document.querySelector('#heartbeat_log').offsetTop
      let page_access_log = document.querySelector('#page_access_log').offsetTop
      let thermodynamic_log = document.querySelector('#thermodynamic_log').offsetTop
      let bunch_planting_log = document.querySelector('#bunch_planting_log').offsetTop
      let look_back_log = document.querySelector('#look_back_log').offsetTop
      let live_log = document.querySelector('#live_log').offsetTop
      // console.log('scrollTopHeight', scrollTopHeight)
      // console.log('boot_log 0', boot_log)
      // console.log('heartbeat_log 442', heartbeat_log)
      // console.log('page_access_log 884', page_access_log)
      // console.log('thermodynamic_log 1326', thermodynamic_log)
      // console.log('bunch_planting_log 1768', bunch_planting_log)
      // console.log('look_back_log 2210', look_back_log)
      // console.log('live_log 2652', live_log)
      if (0 <= scrollTopHeight < 200) {
        console.log("当前是开机日志")
        $(".anchor_link1").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      }
      if (400 <= scrollTopHeight) {
        $(".anchor_link2").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("当前是心跳日志")
      }
      if (800 <= scrollTopHeight) {
        $(".anchor_link3").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("当前是页面访问日志")
      }
      if (1300 <= scrollTopHeight) {
        $(".anchor_link4").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("当前是热力图日志")
      }
      if (1700 <= scrollTopHeight) {
        $(".anchor_link5").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("当前是点播播放日志")
      }
      if (1900 <= scrollTopHeight) {
        $(".anchor_link6").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("当前是回看播放日志")
      }
      if (2000 < scrollTopHeight) {
        $(".anchor_link6").addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
        console.log("当前是直播播放日志")
      }
    })
  },
  methods: {
    //点击锚点实现左侧滚动
    goAnchor(selector) {
      let backHome_body_main = document.querySelector('.backHome_body_main')  //外层滚动容器元素
      //console.log("backHome_body_main", backHome_body_main)
      var anchor = document.querySelector(selector)   // 参数为要跳转到的元素id
      //console.log("anchor", anchor)
      backHome_body_main.scrollTop = anchor.offsetTop

      $('.anchor_hyperlinks a').on('click', function () {
        $(this).addClass("avtive_link").parent().siblings().children().removeClass("avtive_link")
      })
    }
  }
}
</script>
<style scoped>
.data_integrity_body {
  height: 418px;
  margin-bottom: 24px;
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
</style>