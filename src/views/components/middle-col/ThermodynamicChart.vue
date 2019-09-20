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
  props: ["value_p"],
  data() {
    return {
      myNums: [],
      royalty: [],
      daylive: [],
      activation: [],
      retention: [],
      perValue: 10000
      // value: 0
    };
  },
  computed: {
    // value:function(){
    //   return this.value_p;
    // }
    value: {
      get: function() {
        return this.value_p;
      },
      set: function(newValue) {
        //
      }
    }
  },
  mounted() {
    setInterval(this.get, 1000);
  },
  methods: {
    get() {
      if (this.value == 0) {
        // this.myNums = [7041, 6053, 7047, 5655, 7238, 4858, 3818, 6251, 6980];
        this.myNums = [
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue)
        ];
        this.drawLine();
      }
      if (this.value == 5) {
        this.myNums = [
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue)
        ];
        this.drawLine();
      }
      if (this.value == 10) {
        this.myNums = [
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue)
        ];
        this.drawLine();
      }
      if (this.value == 15) {
        this.myNums = [
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue),
          Math.round(Math.random() * this.perValue)
        ];
        this.drawLine();
      }

      if (this.value >= 19) {
        this.value = 0;
      } else {
        this.value++;
      }
    },
    // 返回数组中最大值
    returnArrMax(arr) {
      let max;
      let length = arr.length;
      let i;
      for (i = 0; i < length; i++) {
        if (i == 0) {
          max = arr[i];
        } else {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
      }
      return max;
    },
    // 返回数组中最小值
    returnArrMin(arr) {
      let min;
      let length = arr.length;
      let i;
      for (i = 0; i < length; i++) {
        if (i == 0) {
          min = arr[i];
        } else {
          if (arr[i] < min) {
            min = arr[i];
          }
        }
      }
      return min;
    },
    // 根据两个值平分（max,min,份数） -- 返回数组长度等于需要分割的长度
    MaxAndMinManage(max, min, splitNum) {
      console.log(max);
      console.log(min);
      let splitArr = [];
      let maxDis = max - min;
      let perDis = maxDis / splitNum;
      let i;
      for (i = 0; i < splitNum; i++) {
        splitArr.push(min + i * perDis);
      }
      return splitArr;
    },
    // 进一法 (不做负数处理)
    ceil_math(dividend, divisor) {
      // console.log("~~~~~~~~xxxxx");
      // console.log(this.ceil_math(1.5, 1));
      // console.log(this.ceil_math(0.8, 1));
      // console.log(this.ceil_math(2, 1));
      // console.log(this.ceil_math(2.1, 1));
      // console.log(this.ceil_math(0, 1));
      // 被除数 除数
      if (dividend / divisor == 0) {
        return 0;
      }
      if (dividend / divisor > parseInt(dividend / divisor)) {
        return parseInt(dividend / divisor) + 1;
      }
      return parseInt(dividend / divisor); // 除了以上情况，则为1
    },
    // 返回数值整十整百...

    // 范围处理
    MaxAndMinManageUp(max, min, splitNum) {
      console.log(max);
      console.log(min);
      let splitArr = [];
      let maxDis = max - min;
      let perDis = maxDis / splitNum; // 差值间距
      let temp_max;
      let temp_min;
      let temp_maxDis;
      let temp_perDis;

      // 10~980   0 200
      // 100~980  0 200
      // 500~980  500 600

      //perDis取值： 1.判断大小 2.判断范围
      //            3.判断min值在范围的百分之多少。

      let percentage_Min_Max = min / max; // 0% ~ 100%
      let perDisRange_divide = 1; // min百分比为 0.5以下则 除以1，大于0.5则除以2
      if (percentage_Min_Max > 0.5) {
        //百分之50
        // perDisRange_divide = 2;
        perDisRange_divide = 1; // 暂未用到
      }

      let perDisRange;
      // 返回整数
      // 数字  粗略判断数字最大为10的n次幂
      function ReturnIntegerNum(num, nth_power) {
        let length = nth_power;
        let i;
        let compare_value;
        let IntegerNum;
        // Math.pow(2,3)   表示2的三次方 结果为8
        for (i = 0; i < length; i++) {
          compare_value = Math.pow(10, i + 1);
          console.log("compare_value:" + compare_value);
          if (num / compare_value < 1) {
            console.log("over:" + compare_value);
            IntegerNum = compare_value / 10;
            break;
          }
        }
        return IntegerNum;
      }

      let IntegerNum = ReturnIntegerNum(perDis, 13);
      // if (perDis / 10 >= 1) {
      //   perDisRange = 10 / perDisRange_divide;
      // }
      // if (perDis / 100 >= 1) {
      //   perDisRange = 100 / perDisRange_divide;
      // }
      // if (perDis / 1000 >= 1) {
      //   perDisRange = 1000 / perDisRange_divide;
      // }
      // if (perDis / 10000 >= 1) {
      //   perDisRange = 10000 / perDisRange_divide;
      // }
      // if (perDis / 100000 >= 1) {
      //   perDisRange = 100000 / perDisRange_divide;
      // }

      perDisRange = parseInt(perDis / IntegerNum) * IntegerNum;

      let perDis_managed = this.ceil_math(perDis, perDisRange);

      // console.log("~~~~perDisRange");
      // console.log(perDis / perDisRange);
      // console.log(parseInt(perDis / perDisRange));
      // console.log(perDisRange);

      // 重置min
      // if (min < perDis || percentage_Min_Max < 1 / splitNum) {
      if (percentage_Min_Max < 1 / splitNum) {
        // 最小值 < 平分差值 =》 最小值归零
        // minmax百分 小于 20%（当前） =》 最小值归零
        temp_min = 0;
      }
      if (
        percentage_Min_Max > 1 / splitNum &&
        percentage_Min_Max < 2 / splitNum
      ) {
        temp_min = perDisRange;
      }
      if (
        percentage_Min_Max > 2 / splitNum &&
        percentage_Min_Max < 3 / splitNum
      ) {
        temp_min = perDisRange * 2;
      }
      if (
        percentage_Min_Max > 3 / splitNum &&
        percentage_Min_Max < 4 / splitNum
      ) {
        temp_min = perDisRange * 3;
      }
      if (
        percentage_Min_Max > 4 / splitNum &&
        percentage_Min_Max < 5 / splitNum
      ) {
        temp_min = perDisRange * 4;
      }
      // 重置max
      temp_max = temp_min + perDisRange * 5 * perDis_managed;
      // *** 如果重置的max 小于 max 则加 1/2的IntegerNum，否则加IntegerNum
      if (temp_max < max) {
        let temp_a1_perDisRange = perDisRange + IntegerNum / 2;
        let temp_a1_temp_max =
          temp_min + temp_a1_perDisRange * 5 * perDis_managed;
        if (temp_a1_temp_max < max) {
          perDisRange = perDisRange + IntegerNum;
          temp_max = temp_min + perDisRange * 5 * perDis_managed;
        } else {
          perDisRange = temp_a1_perDisRange;
          temp_max = temp_a1_temp_max;
        }
      }

      // 重置 maxDis perDis
      temp_maxDis = temp_max - temp_min;
      temp_perDis = temp_maxDis / splitNum;

      let i;
      for (i = 0; i < splitNum; i++) {
        splitArr.push(temp_min + i * temp_perDis * perDisRange_divide);
      }
      return splitArr;
    },
    drawLine() {
      var selectProe = "贵州";
      this.$echarts.registerMap(selectProe, myJson);
      var myChartProe = this.$echarts.init(
        document.getElementById("eMap_guizhou")
      );
      console.log("~~~~~~~~~主地图~！this.myNums");
      console.log(this.myNums);
      let value_max = this.returnArrMax(this.myNums);
      let value_min = this.returnArrMin(this.myNums);
      let split_length = 5;
      // let splitArr = this.MaxAndMinManage(value_max, value_min, split_length);
      let splitArr = this.MaxAndMinManageUp(value_max, value_min, split_length);
      let i;
      let splitList = [];
      let dis;
      for (i = 0; i < split_length; i++) {
        if (i < split_length - 1) {
          splitList.push({ start: splitArr[i], end: splitArr[i + 1] });
          dis = splitArr[i + 1] - splitArr[i];
        }
        if (i == split_length - 1) {
          splitList.push({ start: splitArr[i], end: splitArr[i] + dis });
        }
      }
      console.log(splitList);

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
          show: true,
          x: "right",
          y: "bottom",
          inverse: false, //是否反转(排序) visualMap 组件
          textStyle: {
            fontSize: 10,
            color: "rgba(255, 255, 255, 0.65)"
          },
          // splitList: [
          //   // { start: 875, end: 1000 },
          //   // { start: 750, end: 875 },
          //   // { start: 625, end: 750 },
          //   // { start: 500, end: 625 },
          //   // { start: 375, end: 500 },
          //   // { start: 250, end: 375 },
          //   // { start: 125, end: 250 },
          //   // { start: 0, end: 125 }
          //   { start: 800, end: 1000 },
          //   { start: 600, end: 800 },
          //   { start: 400, end: 600 },
          //   { start: 200, end: 400 },
          //   { start: 0, end: 200 }
          // ],
          splitList: splitList,
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
      myChartProe.clear();
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
