<template>
  <div class="back_home_nav">
    <div class="back_home_logo">
      <img src="@/assets/logo.png" />
    </div>
    <div class="back_home_nav_list">
      <el-row>
        <el-col :span="24">
          <!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router> -->
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened>
            <el-menu-item
              v-show="ifShowMenu(1)"
              @click="router_to('/backhome/datatotal')"
              index="/backhome/datatotal"
            >
              <i class="iconfont">&#xe639;</i>
              <span slot="title">数据总览</span>
            </el-menu-item>
            <el-menu-item
              v-show="ifShowMenu(2)"
              @click="router_to('/backhome/userlifecycle')"
              index="/backhome/userlifecycle"
            >
              <i class="iconfont">&#xe6d5;</i>
              <span slot="title">用户生命周期</span>
            </el-menu-item>
            <el-menu-item
              v-show="ifShowMenu(3)"
              @click="router_to('/backhome/userviewingbehavior')"
              index="/backhome/userviewingbehavior"
            >
              <i class="iconfont">&#xe63a;</i>
              <span slot="title">用户收视行为</span>
            </el-menu-item>
            <el-menu-item
              v-show="ifShowMenu(4)"
              @click="router_to('/backhome/periodicreport/')"
              index="/backhome/periodicreport/"
              :class="activeClass ? 'is-active':''"
            >
              <i class="iconfont">&#xe648;</i>
              <span slot="title">定期报告</span>
            </el-menu-item>
            <el-menu-item
              v-show="ifShowMenu(5)"
              @click="router_to('/backhome/epg')"
              index="/backhome/epg"
            >
              <i class="iconfont">&#xe604;</i>
              <span slot="title">EPG</span>
            </el-menu-item>
            <el-submenu v-show="ifShowMenu(6)" index="7">
              <template slot="title">
                <i class="iconfont">&#xe624;</i>
                <span>增值业务</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  @click="router_to('/backhome/valueaddedtotal')"
                  index="/backhome/valueaddedtotal"
                >总览</el-menu-item>
                <el-menu-item @click="router_to('/backhome/vip')" index="/backhome/vip">VIP</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item
              v-show="ifShowMenu(7)"
              @click="router_to('/backhome/hottopicscontrol')"
              index="/backhome/hottopicscontrol"
            >
              <i class="iconfont">&#xe633;</i>
              <span slot="title">热点监控</span>
            </el-menu-item>
            <el-submenu v-show="ifShowMenu(8)" index="8">
              <template slot="title">
                <i class="iconfont">&#xe634;</i>
                <span>数据审计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  @click="router_to('/backhome/dataintegrity')"
                  index="/backhome/dataintegrity"
                >完整性</el-menu-item>
                <el-menu-item
                  @click="router_to('/backhome/abnormalvalue')"
                  index="/backhome/abnormalvalue"
                >异常值</el-menu-item>
                <el-menu-item
                  @click="router_to('/backhome/datatrend')"
                  index="/backhome/datatrend"
                >趋势</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item
              v-show="ifShowMenu(9)"
              @click="router_to('/backhome/programsearching')"
              index="/backhome/programsearching"
            >
              <i class="iconfont">&#xe632;</i>
              <span slot="title">节目搜索</span>
            </el-menu-item>

            <!-- 权限管理页面先关了 v-show="false" -->
            <!-- <el-submenu index="9" v-show="false"> -->
            <el-submenu index="9" v-show="ifShowMenu(10) && ifShowMenu(11)">
              <!-- <el-submenu index="9"> -->
              <template slot="title">
                <i class="iconfont">&#xe60a;</i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <!-- <el-menu-item  @click="router_to('')" index="/backhome/usermanagement">用户管理</el-menu-item> -->
                <el-menu-item
                  v-show="ifShowMenu(10)"
                  @click="router_to('/backhome/authoritymanagement')"
                  index="/backhome/authoritymanagement"
                >权限管理</el-menu-item>
                <el-menu-item
                  v-show="ifShowMenu(11)"
                  @click="router_to('/backhome/bigscreenmanagement')"
                  index="/backhome/bigscreenmanagement"
                >大屏管理</el-menu-item>
                <!-- <el-menu-item  @click="router_to('')" index="/backhome/authoritymanagement">权限管理</el-menu-item> -->
                <!-- <el-menu-item  @click="router_to('')" index="/backhome/bigscreenmanagement">大屏管理</el-menu-item> -->
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item @click="router_to('/backhome/uploadfiles')" index="/backhome/uploadfiles">
              <i class="iconfont">&#xe632;</i>
              <span slot="title">节目搜索</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { get_user_permissions } from "@/api/api_main";
import { mapGetters } from "vuex";

export default {
  name: "BackHomeNav", //左侧导航栏
  computed: {
    ...mapGetters(["current_authority"])
  },
  data() {
    return {
      activeClass: false,
      authorityData: []
    };
  },
  mounted() {
    this.handlerClass();
    // // 获取当前用户权限
    let vm = this;
    vm.$store
      .dispatch("get_ifTest")
      .then(function (response) {
        if (response) {
          // 测试情况
          vm.authorityData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          vm.$store
            .dispatch("set_current_authority", vm.authorityData)
            .then(function (response) { })
            .catch(function (error) {
              console.info(error);
            });
        } else {
          vm.get_user_permissions(); //防止刷新归零
          // this.authorityData = this.current_authority; // 刷新会归零
        }
      })
      .catch(function (error) {
        console.info(error);
      });
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    current_authority(newValue, oldValue) {
      // console.log("watch - current_authority: ");
      // console.log(this.authorityData);
      this.authorityData = newValue;
      // console.log(this.authorityData);
    },
    $route: {
      handler: function (val, oldVal) {
        let vm = this;
        setTimeout(function () {
          // console.log("~~~~~~~val.path:");
          console.log(val.path);
          let pathLink = val.path;
          let isTrue = pathLink.includes("backhome/periodicreport"); //判断路由是否是定期报告子路由
          if (isTrue) {
            //若当前路由是定期报告子路由，则绑定定期报告路由值 使其显示为选中状态
            // console.log(isTrue)
            vm.activeClass = true;
          } else {
            vm.activeClass = false;
          }
        }, 300);
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    router_to(str) {
      let vm = this;
      vm.$router.push({ path: str });

      // 添加历史报告选中 - 这里加会出现 导航栏选中样式遗留不更新问题 - Pass
      // PR_Report_index - 有默认值
      // vm.$store
      //   .dispatch("get_PR_Report_index")
      //   .then(function(response) {
      //     switch (response) {
      //       case 1:
      //         str = "/backhome/periodicreport/G_TVUserActiveDayReport";
      //         break;
      //       case 2:
      //         str = "/backhome/periodicreport/G_TVUserViewingDayReport";
      //         break;
      //       case 3:
      //         str = "/backhome/periodicreport/MarketOperationalWeekReport";
      //         break;
      //       case 4:
      //         str = "/backhome/periodicreport/OperationalWeekReport";
      //         break;
      //       case 5:
      //         str = "/backhome/periodicreport/G_TVUserViewingWeekReport";
      //         break;
      //       case 6:
      //         str = "/backhome/periodicreport/VIPAddMonthReport";
      //         break;
      //       case 7:
      //         str = "/backhome/periodicreport/G_TVUserViewingMonthReport";
      //         break;
      //       case 8:
      //         str = "/backhome/periodicreport/SpecialZoneReport";
      //         break;
      //       default:
      //         break;
      //     }
      //     vm.$router.push({ path: str });
      //   })
      //   .catch(function(error) {
      //     console.info(error);
      //   });

    },
    ifShowMenu(item) {
      // console.log(this.authorityData);
      if (this.authorityData.indexOf(item) > -1) {
        return true;
      } else {
        false;
      }
    },
    get_user_permissions() {
      console.log("get_user_permissions");
      let vm = this;
      let token = vm.$commonTools.getCookie("user_token");
      let newToken = token.replace('"', "").replace('"', "");
      vm.authorityData = [];
      get_user_permissions(newToken)
        .then(function (response) {
          console.log(response);
          let m_data = response.data.data;
          let length = m_data.length;
          let i;
          let temp = [];
          for (i = 0; i < length; i++) {
            temp.push(m_data[i].id);
          }
          vm.authorityData = temp;
          let temp_authorizationChoose = [];
          temp_authorizationChoose = temp;
          vm.$store
            .dispatch("set_current_authority", temp_authorizationChoose)
            .then(function (response) {
              console.log("~~~~set_current_authority");
              // console.log(response);
              // console.log(temp_authorizationChoose);
            })
            .catch(function (error) {
              console.info(error);
            });
        })
        .catch(function (error) {
          console.info(error);
        });
    },
    handlerClass() {
      let vm = this;
      setTimeout(function () {
        console.log(vm.$route.path);
        let pathLink = vm.$route.path;
        let isTrue = pathLink.includes("backhome/periodicreport"); //判断路由是否是定期报告子路由
        if (isTrue) {
          //若当前路由是定期报告子路由，则绑定定期报class为is-active 使其显示为选中状态
          // console.log(isTrue)
          vm.activeClass = true;
        } else {
          vm.activeClass = false;
        }
      }, 300);
    }
  }
};
</script>
<style>
.back_home_nav .el-menu {
  background: #001529;
  text-align: left;
}
.el-menu-item-group__title {
  display: none;
}
.el-menu-item-group {
  background: #000c17;
}
.el-submenu__title i {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
}
.back_home_nav .el-menu-item-group .el-menu-item {
  padding-left: 50px !important;
}
.back_home_nav .el-menu .el-menu-item,
.back_home_nav .el-submenu__title {
  color: rgba(255, 255, 255, 0.7);
}
.back_home_nav .el-menu-item.is-active {
  background: #ff6123;
}
.back_home_nav .el-menu-item.is-active:hover {
  background: #ff6123;
}
.back_home_nav .el-menu-item:hover {
  background: #001529;
  color: #fff;
}
.el-menu .el-menu-item:hover .iconfont {
  color: #fff;
}
.back_home_nav .el-submenu__title:hover {
  background: #001529;
  color: #fff;
}
.back_home_nav .el-submenu__title:hover .iconfont,
.back_home_nav .el-submenu__title:hover .el-submenu__icon-arrow {
  color: #fff;
}
</style>
<style scoped>
.back_home_nav {
  width: 231px;
  height: 100%;
  background: #001529;
}
.back_home_logo {
  background: #002140;
  height: 68px;
  line-height: 68px;
}
.back_home_nav_list {
  height: calc(100% - 68px);
  overflow-y: auto;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.back_home_nav_list::-webkit-scrollbar {
  width: 3px;
  background-color: rgba(0, 0, 0, 0);
}
/*定义滑块 内阴影+圆角*/
.back_home_nav_list::-webkit-scrollbar-thumb {
  border-radius: 5px;
  /* -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.3); */
  background-color: #fff;
}
.back_home_logo img {
  width: 90%;
  vertical-align: middle;
}
.back_home_nav .iconfont {
  margin-right: 14px;
}
/* .acticv_class {
  
} */
</style>


