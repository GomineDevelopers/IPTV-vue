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
          <span class="content_num">123.7万</span>
        </div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="content_percent">
          环比3.2%
          <img src="@/assets/up.gif" />
        </span>
      </div>
      <p class="content_title">总收视时长</p>
      <div class="content_con">
        <div class="content_numP">
          <span class="content_num">4325.7万</span>
        </div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="content_percent">
          环比1.2
          <img src="@/assets/up.gif" />
        </span>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "MediaAssetsData",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },

  methods: {
    drawLine() {
      var myChart = this.$echarts.init(
        document.getElementById("media_assets_data")
      );

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
            data: ["少儿", "电影", "热剧", "游戏", "纪实", "体育"],
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
            data: ["电视剧", "动漫", "综艺", "推荐"],
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
              "#50C380",
              "#CDDC39"
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
            data: [
              { value: 1035, name: "少儿" },
              { value: 979, name: "电影" },
              { value: 848, name: "热剧" },
              { value: 748, name: "游戏" },
              { value: 659, name: "纪实" },
              { value: 548, name: "体育" },
              { value: 448, name: "电视剧" },
              { value: 348, name: "动漫" },
              { value: 248, name: "综艺" },
              { value: 148, name: "推荐" }
            ]
          }
        ]
      };
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
