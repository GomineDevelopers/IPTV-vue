<template>
  <div class="CustomerSegmentation">
    <div class="C_left">
      <div class="m_table">
        <div class="mt_title">
          <div class="mt_h">
            <div></div>
            <div>VIP包</div>
            <div>用户数(万)</div>
            <div>户均收看时长(小时)</div>
            <div>完播率</div>
          </div>
        </div>
        <div class="mt_row">
          <div class="mt_h">
            <div>订购-Firsttime</div>
            <div class="data_num">
              <p>家庭包</p>
              <p>少儿包</p>
              <p>影视包</p>
            </div>
            <div class="data_num">
              <p>12</p>
              <p>13</p>
              <p>23</p>
            </div>
            <div class="data_num">
              <p>123</p>
              <p>13</p>
              <p>234</p>
            </div>
            <div class="data_num">
              <p>59%</p>
              <p>82%</p>
              <p>70%</p>
            </div>
          </div>
        </div>
        <div class="mt_row">
          <div class="mt_h">
            <div>订购-Onetime</div>
            <div class="data_num">
              <p>家庭包</p>
              <p>少儿包</p>
              <p>影视包</p>
            </div>
            <div class="data_num">
              <p>12</p>
              <p>13</p>
              <p>23</p>
            </div>
            <div class="data_num">
              <p>123</p>
              <p>13</p>
              <p>234</p>
            </div>
            <div class="data_num">
              <p>59%</p>
              <p>82%</p>
              <p>70%</p>
            </div>
          </div>
        </div>
        <div class="mt_row">
          <div class="mt_h">
            <div>订购-周期性购买</div>
            <div class="data_num">
              <p>家庭包</p>
              <p>少儿包</p>
              <p>影视包</p>
            </div>
            <div class="data_num">
              <p>12</p>
              <p>13</p>
              <p>23</p>
            </div>
            <div class="data_num">
              <p>123</p>
              <p>13</p>
              <p>234</p>
            </div>
            <div class="data_num">
              <p>59%</p>
              <p>82%</p>
              <p>70%</p>
            </div>
          </div>
        </div>
        <div class="mt_row">
          <div class="mt_h">
            <div>订购-忠诚用户</div>
            <div class="data_num">
              <p>家庭包</p>
              <p>少儿包</p>
              <p>影视包</p>
            </div>
            <div class="data_num">
              <p>12</p>
              <p>13</p>
              <p>23</p>
            </div>
            <div class="data_num">
              <p>123</p>
              <p>13</p>
              <p>234</p>
            </div>
            <div class="data_num">
              <p>59%</p>
              <p>82%</p>
              <p>70%</p>
            </div>
          </div>
        </div>
        <div class="mt_row">
          <div class="mt_h">
            <div>订购-疑似流失</div>
            <div class="data_num">
              <p>家庭包</p>
              <p>少儿包</p>
              <p>影视包</p>
            </div>
            <div class="data_num">
              <p>12</p>
              <p>13</p>
              <p>23</p>
            </div>
            <div class="data_num">
              <p>123</p>
              <p>13</p>
              <p>234</p>
            </div>
            <div class="data_num">
              <p>59%</p>
              <p>82%</p>
              <p>70%</p>
            </div>
          </div>
        </div>
        <div class="mt_row">
          <div class="mt_h mt_h">
            <div>未订购用户</div>
            <div class="data_num"></div>
            <div class="data_num">123</div>
            <div class="data_num"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="C_right">
      <div class="C_r_top">

      </div>
      <div class="C_r_bottom">

      </div>

      <div class="C_r_left"></div>
      <div class="C_r_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerSegmentation",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.CustomerSegmentation {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  text-align: left;
}
.CustomerSegmentation .C_left,
.CustomerSegmentation .C_right {
  display: inline-block;
  width: 50%;
  height: 100%;
}

.CustomerSegmentation .mt_title .mt_h{
  /* height: 4vh; */
  margin-bottom: 3%;
}
.CustomerSegmentation .mt_row .mt_h {
  /* height: 10vh; */
  margin-bottom: 3%;
}
.CustomerSegmentation .mt_row .mt_h2 {
  /* height: 10vh; */
}

.CustomerSegmentation .mt_title .mt_h>div,
.CustomerSegmentation .mt_row .mt_h>div {
  width: 20%;
  display: inline-block;
  vertical-align: middle;
}
/* .CustomerSegmentation .mt_title .mt_h:nth-child(n),
.CustomerSegmentation .mt_row .mt_h:nth-child(n) {
  width: 20%;
  display: inline-block;
} */

.CustomerSegmentation .mt_row .data_num {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  line-height: 24px;
}
.CustomerSegmentation .mt_row .data_num p {
  margin: 2px 0;
}
</style>


<style scoped>
</style>
