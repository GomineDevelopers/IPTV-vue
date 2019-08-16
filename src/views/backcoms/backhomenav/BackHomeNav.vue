<template>
  <div class="back_home_nav">
    <div class="back_home_logo">
      <img src="@/assets/logo.png" />
    </div>
    <div>
      <el-row>
        <el-col :span="24">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
            <el-menu-item index="/backhome/datatotal">
              <i class="iconfont">&#xe639;</i>
              <span slot="title">数据总览</span>
            </el-menu-item>
            <el-menu-item index="/backhome/userlifecycle">
              <i class="iconfont">&#xe6d5;</i>
              <span slot="title">用户生命周期</span>
            </el-menu-item>
            <el-menu-item index="/backhome/userviewingbehavior">
              <i class="iconfont">&#xe63a;</i>
              <span slot="title">用户收视行为</span>
            </el-menu-item>
            <el-menu-item index="/backhome/periodicreport/" :class="activeClass ? 'is-active':''">
              <i class="iconfont">&#xe648;</i>
              <span slot="title">定期报告</span>
            </el-menu-item>
            <el-menu-item index="/backhome/epg">
              <i class="iconfont">&#xe604;</i>
              <span slot="title">EPG</span>
            </el-menu-item>
            <el-submenu index="7">
              <template slot="title">
                <i class="iconfont">&#xe624;</i>
                <span>增值业务</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/backhome/valueaddedtotal">总览</el-menu-item>
                <el-menu-item index="/backhome/vip">VIP</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/backhome/hottopicscontrol">
              <i class="iconfont">&#xe633;</i>
              <span slot="title">热点监控</span>
            </el-menu-item>
            <el-submenu index="8">
              <template slot="title">
                <i class="iconfont">&#xe634;</i>
                <span>数据审计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/backhome/dataintegrity">完整性</el-menu-item>
                <el-menu-item index="/backhome/abnormalvalue">异常值</el-menu-item>
                <el-menu-item index="/backhome/datatrend">趋势</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/backhome/programsearching">
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
export default {
  name: "BackHomeNav", //左侧导航栏
  data() {
    return {
      activeClass: false,
    }
  },
  mounted() {
    this.handlerClass()
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function (val, oldVal) {
        // console.log(val.path)
        let pathLink = val.path
        let isTrue = pathLink.includes('backhome/periodicreport')  //判断路由是否是定期报告子路由
        if (isTrue) {  //若当前路由是定期报告子路由，则绑定定期报告路由值 使其显示为选中状态
          // console.log(isTrue)
          this.activeClass = true
        } else {
          this.activeClass = false
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    handlerClass() {
      // console.log(this.$route.path)
      let pathLink = this.$route.path
      let isTrue = pathLink.includes('backhome/periodicreport')  //判断路由是否是定期报告子路由
      if (isTrue) {  //若当前路由是定期报告子路由，则绑定定期报class为is-active 使其显示为选中状态
        // console.log(isTrue)
        this.activeClass = true
      } else {
        this.activeClass = false
      }
    }
  }
}
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
  height: 58px;
  line-height: 58px;
}
.back_home_logo img {
  width: 90%;
  vertical-align: middle;
}
.back_home_nav .iconfont {
  margin-right: 14px;
}
.acticv_class {
  background: ;
}
</style>


