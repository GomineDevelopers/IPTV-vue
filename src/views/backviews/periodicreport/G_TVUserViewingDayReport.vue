<template>
  <div class="height_auto">
    <!-- 移动专项开始 -->
    <el-row class="viewing_behavior_report new_add_user_percent back_white marginbottom_14">
      <el-row class="chart_body back_white">
        <el-col class="height_auto periodic_report_title" :span="24">G+TV用户活跃发展日报表</el-col>
      </el-row>
      <el-row class="model_title">
        <span class="title_border_left"></span>移动专项
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBar :fillinData="yidongTypeLooktime"></dayREportBar>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingleLv :fillinData="yidongLiveBroadcast"></dayREportBarSingleLv>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="yidongtypedayusernumber"></dayREportBarSingleVertical>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="yidongtypedayclicknumber"></dayREportBarSingleVertical>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingle :fillinData="yidongAsideClickUser"></dayREportBarSingle>
        </el-col>
      </el-row>
    </el-row>
    <!-- 移动专项结束 -->

    <!-- 联通专项开始 -->
    <el-row class="new_add_user_percent back_white marginbottom_14">
      <el-row class="model_title">
        <span class="title_border_left"></span>联通专项
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBar :fillinData="liantongTypeLooktime"></dayREportBar>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingleLv :fillinData="liantongLiveBroadcast"></dayREportBarSingleLv>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="liantongtypedayusernumber"></dayREportBarSingleVertical>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="liantongtypedayclicknumber"></dayREportBarSingleVertical>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingle :fillinData="liantongAsideClickUser"></dayREportBarSingle>
        </el-col>
      </el-row>
    </el-row>
    <!-- 联通专项结束 -->

    <!-- 电信专项开始 -->
    <el-row class="new_add_user_percent back_white marginbottom_14">
      <el-row class="model_title">
        <span class="title_border_left"></span>电信专项
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBar :fillinData="dianxingTypeLooktime"></dayREportBar>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingleLv :fillinData="dianxingLiveBroadcast"></dayREportBarSingleLv>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody bottomborder">
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="dianxingtypedayusernumber"></dayREportBarSingleVertical>
        </el-col>
        <el-col class="height_auto" :span="12">
          <dayREportBarSingleVertical :fillinData="dianxingtypedayclicknumber"></dayREportBarSingleVertical>
        </el-col>
      </el-row>
      <el-row class="rigesteduserBody">
        <el-col class="height_auto" :span="24">
          <dayREportBarSingle :fillinData="dianxingAsideClickUser"></dayREportBarSingle>
        </el-col>
      </el-row>
    </el-row>
    <!-- 电信专项结束 -->
  </div>
</template>
<script>
import dayREportBar from "@/views/backcoms/G_TVUserActiveDayReport/dayREport_bar"  //用户数统计柱状组件
import dayREportBarSingleLv from "@/views/backcoms/G_TVUserViewingDayReport/dayREport_bar_single_lv"  //用户数统计柱状组件（字斜体 %）
import dayREportBarSingleVertical from "@/views/backcoms/G_TVUserViewingDayReport/dayREport_bar_vertical"  //用户数统计柱状组件（垂直）
import dayREportBarSingle from "@/views/backcoms/G_TVUserViewingDayReport/dayREport_bar_single"  //用户数统计柱状组件（字斜体）
export default {
  name: 'G_TVUserViewingDayReport',  //G+TV用户收视日报表
  data() {
    return {
      //移动侧各类型节目单日点播时长（千小时）
      yidongTypeLooktime: {
        title: '移动侧各类型节目单日点播时长（千小时）',
        id: 'yidongTypeLooktime',
        color: ['#82b65f', '#70a7d8'],
        data: [
          [
            ['运营商', '热剧', '少儿', '电影', '动漫', '综艺', '游戏', '纪实', '体育', '音乐', '资讯'],
            ['平均', 361.1, 282.3, 174.6, 39.8, 32.3, 27.4, 5.0, 1.9, 2.2, 1.1],
          ],
          [
            ['运营商', '热剧', '少儿', '电影', '动漫', '综艺', '游戏', '纪实', '体育', '音乐', '资讯'],
            ['今日', 304.7, 221.4, 140.7, 23.2, 22.6, 15.8, 5.1, 1.5, 1.5, 1.3],
          ]
        ]
      },

      //移动侧直播频道单日收视率排行-TOP12
      yidongLiveBroadcast: {
        title: '移动侧直播频道单日收视率排行-TOP12',
        id: 'yidongLiveBroadcast',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', 'CCTY-13 新闻', '贵州卫视', '贵州3 影视文艺频道', 'CCTV-1 综合', '贵州-2 公共频道', '贵州-4 大众生活频道', '湖南卫视', 'CCTY-12 社会与法', '贵州-7 经济频道', 'CCTY-15 音乐', 'CCTY-4 中文国际', '浙江卫视'],
            ['平均', 5.7, 3.0, 1.8, 1.8, 1.5, 1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.8],
          ]
        ]
      },

      //各栏目单日点击用户数(移动)
      yidongtypedayusernumber: {
        title: '移动侧直播频道单日收视率排行-TOP12',
        id: 'yidongtypedayusernumber',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '推荐', '热剧', '少儿', '电影', '电视', '搜索', '动漫', '分类', '游戏', '综艺', '体育', '纪实'],
            ['平均', 12.5, 8.9, 7.7, 7.1, 6.8, 3.6, 2.1, 1.6, 1.6, 1.3, 0.6, 0.4],
          ]
        ]
      },

      //各栏目单日点击次数(移动)
      yidongtypedayclicknumber: {
        title: '移动侧直播频道单日收视率排行-TOP12',
        id: 'yidongtypedayclicknumber',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '推荐', '热剧', '少儿', '电影', '电视', '搜索', '动漫', '分类', '游戏', '综艺', '体育', '纪实'],
            ['平均', 30.5, 24.9, 22.0, 17.7, 14.5, 8.3, 5.6, 3.2, 3.7, 2.2, 1.2, 0.8],
          ]
        ]
      },

      //移动侧首页各推荐位/按钮单日点击次数（次）
      yidongAsideClickUser: {
        title: '移动侧首页各推荐位/按钮单日点击次数（次）',
        id: 'yidongAsideClickUser',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '导视框', '历史记录', '搜索', '看电视', '三屏', '二屏', '竖图三', '点我换一换', 'VIP专区', '竖图二', '百姓关注', '竖图一', '横图'],
            ['平均', 116394, 63192, 30301, 22787, 10611, 9206, 6353, 6115, 5501, 4338, 4114, 3740, 2557],
          ]
        ]
      },

      // ------------------------------------------------------------------------
      //联通侧各类型节目单日点播时长（千小时）
      liantongTypeLooktime: {
        title: '移动侧各类型节目单日点播时长（千小时）',
        id: 'liantongTypeLooktime',
        color: ['#82b65f', '#70a7d8'],
        data: [
          [
            ['运营商', '热剧', '少儿', '电影', '动漫', '综艺', '游戏', '纪实', '体育', '音乐', '资讯'],
            ['平均', 122.7, 84.6, 50.2, 12.0, 14.4, 8.7, 1.8, 0.4, 0.5, 0.4],
          ],
          [
            ['运营商', '热剧', '少儿', '电影', '动漫', '综艺', '游戏', '纪实', '体育', '音乐', '资讯'],
            ['今日', 104.1, 66.7, 40.4, 8.5, 8.5, 5.1, 1.8, 0.4, 0.4, 0.4],
          ]
        ]
      },

      //联通侧直播频道单日收视率排行-TOP12
      liantongLiveBroadcast: {
        title: '移动侧直播频道单日收视率排行-TOP12',
        id: 'liantongLiveBroadcast',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', 'CCTY-13 新闻', '贵州卫视', '贵州3 影视文艺频道', 'CCTV-1 综合', '贵州-2 公共频道', '贵州-4 大众生活频道', '湖南卫视', 'CCTY-12 社会与法', '贵州-7 经济频道', 'CCTY-15 音乐', 'CCTY-4 中文国际', '浙江卫视'],
            ['平均', 4.4, 3.5, 2.7, 2.0, 1.9, 1.8, 1.7, 1.2, 1.0, 0.9, 0.9, 0.7],
          ]
        ]
      },

      //各栏目单日点击用户数(联通)
      liantongtypedayusernumber: {
        title: '移动侧直播频道单日收视率排行-TOP12',
        id: 'liantongtypedayusernumber',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '推荐', '热剧', '少儿', '电影', '电视', '搜索', '动漫', '分类', '游戏', '综艺', '体育', '纪实'],
            ['平均', 6.2, 3.2, 3.1, 2.7, 2.6, 1.3, 0.7, 0.7, 0.6, 0.5, 0.3, 0.2],
          ]
        ]
      },

      //各栏目单日点击次数(联通)
      liantongtypedayclicknumber: {
        title: '移动侧直播频道单日收视率排行-TOP12',
        id: 'liantongtypedayclicknumber',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '推荐', '热剧', '少儿', '电影', '电视', '搜索', '动漫', '分类', '游戏', '综艺', '体育', '纪实'],
            ['平均', 14.9, 9.0, 7.1, 5.8, 5.4, 2.9, 2.2, 1.5, 1.5, 0.9, 0.4, 0.3],
          ]
        ]
      },

      //联通侧首页各推荐位/按钮单日点击次数（次）
      liantongAsideClickUser: {
        title: '移动侧首页各推荐位/按钮单日点击次数（次）',
        id: 'liantongAsideClickUser',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '直播频道', '最近观看', '收藏', '二屏', '三屏', '沃家应用', '专题', '沃家影视', '横图二', '横图一', 'VIP限时免费', '竖图', '百家关注'],
            ['平均', 58914, 36553, 14192, 12137, 4657, 3532, 2595, 2539, 2137, 1821, 1741, 1448, 989],
          ]
        ]
      },

      // ------------------------------------------------------------------------
      //电信侧各类型节目单日点播时长（千小时）
      dianxingTypeLooktime: {
        title: '电信侧各类型节目单日点播时长（千小时）',
        id: 'dianxingTypeLooktime',
        color: ['#82b65f', '#70a7d8'],
        data: [
          [
            ['运营商', '热剧', '少儿', '电影', '动漫', '综艺', '游戏', '纪实', '体育', '音乐', '资讯'],
            ['平均', 92.7, 56.5, 38.5, 11.3, 7.5, 6.3, 1.3, 0.7, 0.6, 0.2],
          ],
          [
            ['运营商', '热剧', '少儿', '电影', '动漫', '综艺', '游戏', '纪实', '体育', '音乐', '资讯'],
            ['今日', 79.7, 41.0, 32.7, 8.2, 5.6, 3.8, 1.6, 0.8, 0.6, 0.3],
          ]
        ]
      },

      //联通侧直播频道单日收视率排行-TOP12
      dianxingLiveBroadcast: {
        title: '电信侧直播频道单日收视率排行-TOP12',
        id: 'dianxingLiveBroadcast',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', 'CCTY-13 新闻', '贵州卫视', '贵州3 影视文艺频道', 'CCTV-1 综合', '贵州-2 公共频道', '贵州-4 大众生活频道', '湖南卫视', 'CCTY-12 社会与法', '贵州-7 经济频道', 'CCTY-15 音乐', 'CCTY-4 中文国际', '浙江卫视'],
            ['平均', 5.0, 4.5, 2.5, 1.8, 1.7, 1.5, 1.4, 1.3, 1.3, 1.3, 1.2, 1.0],
          ]
        ]
      },

      //各栏目单日点击用户数(联通)
      dianxingtypedayusernumber: {
        title: '电信侧直播频道单日收视率排行-TOP12',
        id: 'dianxingtypedayusernumber',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '推荐', '热剧', '少儿', '电影', '电视', '搜索', '动漫', '分类', '游戏', '综艺', '体育'],
            ['平均', 30480, 18786, 18380, 16558, 15172, 9547, 5892, 5373, 3556, 2735, 2396],
          ]
        ]
      },

      //各栏目单日点击次数(联通)
      dianxingtypedayclicknumber: {
        title: '电信侧直播频道单日收视率排行-TOP12',
        id: 'dianxingtypedayclicknumber',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '推荐', '热剧', '少儿', '电影', '电视', '搜索', '动漫', '分类', '游戏', '综艺', '体育'],
            ['平均', 75451, 61027, 44943, 41436, 37445, 24323, 14882, 13053, 12272, 4569, 4225],
          ]
        ]
      },

      //联通侧首页各推荐位/按钮单日点击次数（次）
      dianxingAsideClickUser: {
        title: '电信侧首页各推荐位/按钮单日点击次数（次）',
        id: 'dianxingAsideClickUser',
        color: ['#5b82c8'],
        data: [
          [
            ['运营商', '最近观看', '播放小窗口', '文字一', '搜索', '看电视', '三屏', '文字二', '二屏竖图', '文字五', '文字三', '百姓关注', '天翼优品', 'VIP限时免费', '文字四', '二屏横图', '天翼', '家庭云'],
            ['平均', 16738, 13216, 12203, 8603, 7118, 3142, 2217, 1557, 1221, 1184, 966, 929, 916, 886, 609, 188, 160],
          ]
        ]
      },


    }

  },
  components: {
    dayREportBar,
    dayREportBarSingleLv,
    dayREportBarSingleVertical,
    dayREportBarSingle
  }
}
</script>
<style scoped>
.viewing_behavior_report {
  /* height: 500px; */
  margin: 24px 0px;
}
.rigesteduserBody {
  height: 400px;
}
.bottomborder {
  border-bottom: 1px dashed #f0f0f0;
}
</style>