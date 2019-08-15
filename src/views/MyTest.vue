<template>
  <div class="MyTest">
    <div id="echartsUA" :style="{width: '14vw',height: '14vw'}"></div>
  </div>
</template>

<script>
// import "@/vendor/Blob";
// import "@/vendor/Export2Excel";
// import Vue from "vue";

export default {
  name: "MyTest",
  data() {
    return {
      list: [
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        },
        {
          name: "韩版设计时尚风衣大",
          number: "MPM00112",
          salePrice: "￥999.00",
          stocknums: 3423,
          salesnums: 3423,
          sharenums: 3423
        }
      ],
      goodsItems: ["商品名称", "商品货号", "售价", "库存", "销量", "分享"]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    formatJson(filterVal, jsonData) {
      //   let temp1 = [55, 66];
      //   let k ;
      //   let temp2 = temp1.map(v => k);
      //   console.log(temp2);
      return jsonData.map(v => filterVal.map(j => v[j]));
      // return "";
    },
    export2Excel() {
      console.log("~~export2Excel");
      require.ensure([], () => {
        const { export_json_to_excel } = require("../vendor/Export2Excel");
        const tHeader = [
          "商品名称",
          "商品货号",
          "售价",
          "库存",
          "销量",
          "分享"
        ];
        const filterVal = [
          "name",
          "number",
          "salePrice",
          "stocknums",
          "salesnums",
          "sharenums"
        ];
        // const list = this.goodsItems;
        const list = this.list;
        console.log(list);
        console.log(filterVal);
        const data = this.formatJson(filterVal, list);
        console.log(tHeader);
        console.log(data);
        export_json_to_excel(tHeader, data, "商品管理列表");
      });
    },
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("echartsUA"));
      let vm = this;
      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
            myTool1: {
              show: true,
              title: "自定义扩展方法1",
              icon: "image://http://echarts.baidu.com/images/favicon.png",
              onclick: function() {
                // alert("myToolHandler1");
                vm.export2Excel();
              }
            }
          }
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["45%", "50%"],
            selectedMode: "single",
            color: ["#FCB84F", "#F97E6F"],

            label: {
              normal: {
                formatter: "{b}:\n {d}%" // 只显示百分比
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 1
              }
            },
            data: [{ value: 23, name: "订购" }, { value: 77, name: "未订购" }],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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

<style >
</style>