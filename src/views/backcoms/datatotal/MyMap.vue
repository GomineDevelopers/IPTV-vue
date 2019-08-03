<template>
  <div class="MyMap">
    <div id="eMap_guizhou2"></div>
  </div>
</template>

<script>
import myJson from "@/assets/json/guizhou_chinaChange2";

export default {
  name: "MyMap",
  data() {
    return {
      myNums: [],
      selectedStatus: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
    };
  },
  mounted() {
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
  },
  methods: {
    drawLine() {
      let vm = this;
      var selectProe = "贵州";
      this.$echarts.registerMap(selectProe, myJson);
      var myChartProe = this.$echarts.init(
        document.getElementById("eMap_guizhou2")
      );
      myChartProe.off("click");

      var optionE = {
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
            { start: 800, end: 1000 },
            { start: 600, end: 800 },
            { start: 400, end: 600 },
            { start: 200, end: 400 },
            { start: 0, end: 200 }
          ],
          color: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]
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
                  color: "#333333"
                }
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                // borderColor: "#B7D6ED", //地图边界线颜色
                borderColor: "rgba(0,0,0,0.4)", //地图边界线颜色
                borderWidth: 1, //边界线宽度
                areaStyle: {
                  color: "white"
                },
                label: {
                  show: true
                }
              },
              emphasis: {
                // 选中样式
                borderWidth: 1,
                // borderColor:'#fff',
                areaColor: "#F97E6F",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  }
                }
              }
            },
            data: [
              {
                name: "● 贵阳市",
                value: this.myNums[0],
                selected: this.selectedStatus[0]
              },
              {
                name: "● 遵义市",
                value: this.myNums[1],
                selected: this.selectedStatus[1]
              },
              {
                name: "● 六盘水市",
                value: this.myNums[2],
                selected: this.selectedStatus[2]
              },
              {
                name: "● 安顺市",
                value: this.myNums[3],
                selected: this.selectedStatus[3]
              },
              {
                name: "● 毕节市",
                value: this.myNums[4],
                selected: this.selectedStatus[4]
              },
              {
                name: "● 铜仁市",
                value: this.myNums[5],
                selected: this.selectedStatus[5]
              },
              {
                name: "● 黔东南",
                value: this.myNums[6],
                selected: this.selectedStatus[6]
              },
              {
                name: "● 黔南",
                value: this.myNums[7],
                selected: this.selectedStatus[7]
              },
              {
                name: "● 黔西南",
                value: this.myNums[8],
                selected: this.selectedStatus[8]
              }
            ]
          }
        ]
      };

      myChartProe.on("click", function(t) {
        // 通过t判断点击的省份，做不同的响应操作
        // console.log(t.seriesIndex);
        // @PS：echarts触发bug,从第二次存在第n次,触发(n-1) * 2,
        console.log("~~~1");
        console.log("~~~2");
        let name = t.data.name;
        let province = vm.provinceManage(name);
        let datashow = vm.datashowManage();
        switch (name) {
          case "● 贵阳市":
            vm.dataManage(province, datashow);
            vm.selectedManage(0);
            break;
          case "● 遵义市":
            vm.dataManage(province, datashow);
            vm.selectedManage(1);
            break;
          case "● 六盘水市":
            vm.dataManage(province, datashow);
            vm.selectedManage(2);
            break;
          case "● 安顺市":
            vm.dataManage(province, datashow);
            vm.selectedManage(3);
            break;
          case "● 毕节市":
            vm.dataManage(province, datashow);
            vm.selectedManage(4);
            break;
          case "● 铜仁市":
            vm.dataManage(province, datashow);
            vm.selectedManage(5);
            break;
          case "● 黔东南":
            vm.dataManage(province, datashow);
            vm.selectedManage(6);
            break;
          case "● 黔南":
            vm.dataManage(province, datashow);
            vm.selectedManage(7);
            break;
          case "● 黔西南":
            vm.dataManage(province, datashow);
            vm.selectedManage(8);
            break;
          default:
            console.log("none!");
        }
      });

      myChartProe.setOption(optionE);
      window.addEventListener("resize", () => {
        myChartProe.resize();
      });
    },
    // 选中处理
    selectedManage(selectedNum) {
      // 0~8
      let temp_num = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ];
      temp_num[selectedNum] = true;
      this.selectedStatus = temp_num;
      this.drawLine();
    },
    // 数据处理(设置父级数据)
    dataManage(province, datashow) {
      this.$emit("setProvince", province);
      this.$emit("setDatashow", datashow);
    },
    // 省名称处理
    provinceManage(province) {
      let provinceC = province.replace(/● /g, "");
      return provinceC;
    },
    // 数据处理
    datashowManage() {
      let datashow = [
        {
          icon: "&#xe600;",
          title: "在册用户",
          numT: (Math.random() * 300 + 100).toFixed(1).toString(),
          content: "每日新增在册用户",
          numC: Math.round(Math.random() * 30000).toString()
        },
        {
          icon: "&#xe620;",
          title: "激活用户",
          numT: (Math.random() * 80 + 20).toFixed(1).toString(),
          content: "激活率",
          numC: Math.round(Math.random() * 100 - 10).toString() + "%"
        },

        {
          icon: "&#xe60c;",
          title: "开机用户",
          numT: (Math.random() * 25 + 15).toFixed(1).toString(),
          content: "开机率",
          numC: Math.round(Math.random() * 80 + 20).toString() + "%"
        },
        {
          icon: "&#xe641;",
          title: "收视用户",
          numT: (Math.random() * 25 + 15).toFixed(1).toString(),
          content: "户均收视次数",
          numC: Math.round(Math.random() * 30000).toString()
        },
        {
          icon: "&#xe64f;",
          title: "付费用户",
          numT: (Math.random() * 25 + 15).toFixed(1).toString(),
          content: "付费转化率",
          numC: Math.round(Math.random() * 30000).toString()
        },
        {
          icon: "&#xe612;",
          title: "停机",
          numT: (Math.random() * 1).toFixed(1).toString(),
          content: "每日停机户",
          numC: Math.round(Math.random() * 100).toString()
        },
        {
          icon: "&#xe601;",
          title: "销户",
          numT: (Math.random() * 5).toFixed(1).toString(),
          content: "每日销户数",
          numC: Math.round(Math.random() * 100).toString()
        }
      ];
      return datashow;
    }
  }
};
</script>

<style>
.MyMap {
  /* background-color: #ffffff; */
  /* width: 66%;
  height: 36%; */
  /* width: 1090px; */
  /* height: 598px; */
  width: 100%;
  height: 100%;
}
#eMap_guizhou2 {
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
</style>


