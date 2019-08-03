<template>
  <!-- <div id="eMap_guizhou" :style="{width: '32vw',height: '54vh'}"></div> -->
  <div class="height_auto">
    <div id="eMap_guizhou"></div>
  </div>
</template>


<script>
import myJson from "@/assets/json/guizhou_chinaChange";

export default {
  name: "ThermodynamicChart",
  data() {
    return {
      myNums: [],
      royalty: [],
      daylive: [],
      activation: [],
      retention: [],
      value: 0
    };
  },
  mounted() {
    setInterval(this.get, 1000);
  },
  methods: {
    get() {
      if (this.value == 0) {
        this.myNums = [
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000)
        ];
        this.drawLine();
      }
      if (this.value == 5) {
        this.myNums = [
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000)
        ];
        this.drawLine();
      }
      if (this.value == 10) {
        this.myNums = [
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000)
        ];
        this.drawLine();
      }
      if (this.value == 15) {
        this.myNums = [
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000),
          Math.round(Math.random() * 1000)
        ];
        this.drawLine();
      }

      if (this.value >= 19) {
        this.value = 0;
      } else {
        this.value++;
      }
    },
    drawLine() {
      var selectProe = "贵州";
      this.$echarts.registerMap(selectProe, myJson);
      var myChartProe = this.$echarts.init(
        document.getElementById("eMap_guizhou")
      );

      var option2 = {
        title: {
          x: "center",
          y: "top",
          textAlign: "left"
        },
        tooltip: {
          trigger: "item",
          formatter: function loadData(result) {
            return result.name + "<br />数据:" + result.value;
          }
        },
        visualMap: {
          show: false,
          x: "left",
          y: "center",
          splitList: [
            // { start: 875, end: 1000 },
            // { start: 750, end: 875 },
            // { start: 625, end: 750 },
            // { start: 500, end: 625 },
            // { start: 375, end: 500 },
            // { start: 250, end: 375 },
            // { start: 125, end: 250 },
            // { start: 0, end: 125 }
            { start: 800, end: 1000 },
            { start: 600, end: 800 },
            { start: 400, end: 600 },
            { start: 200, end: 400 },
            { start: 0, end: 200 }
          ],
          color: [
            "#DD4C13",
            "#DF581A",
            "#E46D25",
            "#E87D2E",
            "#EE9A3E"

            // "#DD4C13",
            // "#DF581A",
            // "#E57227",
            // "#E46D25",
            // "#E87D2E",
            // "#F0A23B",
            // "#EE9A3E",
            // "#DBC976"
          ]
        },
        series: [
          {
            name: "map",
            type: "map",
            // left: "15%",
            left: "center",
            top: "center",
            mapType: selectProe,
            roam: false,
            zoom: 1.0, //这里是关键，一定要放在 series中
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10,
                  // fontWeight: "bold",
                  color: "#ffffff"
                }
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                // borderColor: "#B7D6ED", //地图边界线颜色
                borderColor: "rgba(255,255,255,0.4)", //地图边界线颜色
                borderWidth: 1, //边界线宽度
                areaStyle: {
                  color: "white"
                },
                // 阴影 - 有点发虚
                // shadowColor: "#ccc",
                // shadowBlur: 15,
                // opacity: 0.8,
                label: {
                  show: true
                }
              }
            },
            data: [
              { name: "贵阳市", value: this.myNums[0] },
              { name: "遵义市", value: this.myNums[1] },
              { name: "六盘水市", value: this.myNums[2] },
              { name: "安顺市", value: this.myNums[3] },
              { name: "毕节市", value: this.myNums[4] },
              { name: "铜仁市", value: this.myNums[5] },
              {
                name: "黔东南",
                value: this.myNums[6]
              },
              {
                name: "黔南",
                value: this.myNums[7]
              },
              {
                name: "黔西南",
                value: this.myNums[8]
              }
            ]
          }
        ]
      };

      myChartProe.setOption(option2);
      window.addEventListener("resize", () => {
        myChartProe.resize();
      });
    }
  }
};
</script>

<style scoped>
#eMap_guizhou {
  height: 100%;
  width: 100%;
}
</style>

<style>
</style>
