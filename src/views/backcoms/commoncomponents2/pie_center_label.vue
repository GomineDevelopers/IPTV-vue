<template>
  <div class="m_height_300px m_width_100">
    <el-row class="m_height_300px m_width_100" :id="chartData.id"></el-row>
  </div>
</template>
<script>
export default {
  name: "BarGraph",
  props: {
    chartData: {
      type: Object
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var myEcharts = this.$echarts.init(
        document.getElementById(this.chartData.id)
      );
      var m_data = this.chartData.m_data;
      var m_data2 = this.chartData.m_data2;
      var m_color = this.chartData.m_color;
      var legend_show = this.chartData.legend_show;
      var label_formatter = this.chartData.label_formatter;

      var option = {
        tooltip: {
          trigger: "item",
          extraCssText: "width:120px;height:60px",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
          {
            show: legend_show,
            top: "40%",
            left: "45%",
            data: m_data,
            itemWidth: 12,
            itemHeight: 6,
            width: 40,
            itemGap: 5,
            textStyle: {
              color: "rgba(0,0,0,0.45)"
            }
          }
        ],
        series: [
          // 外环
          {
            name: "用户画像",
            type: "pie",
            radius: ["40%", "80%"], // 大小
            color: m_color,
            // label: {
            //   normal: {
            //     show: false
            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              //饼图图形上的文本标签
              normal: {
                show: true,
                position: "inner", //标签的位置
                textStyle: {
                //   fontWeight: 200,
                  color:"#000000",
                  fontSize: 12 //文字的字体大小
                },
                formatter: label_formatter
              }
            },
            hoverAnimation: false, //鼠标移入变大false
            data: m_data2
          }
        ]
      };

      myEcharts.setOption(option);
      window.addEventListener("resize", () => {
        myEcharts.resize();
      });
    }
  }
};
</script>