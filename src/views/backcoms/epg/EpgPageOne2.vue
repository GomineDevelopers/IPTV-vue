<template>
  <div class="epg_page_one epg_page_container">
    <div class="main_body">
      <div class="epg_page_row">
        <div
          class="epg_page_col"
          v-for="(item,index) in programesListOne2"
          :key="index + 'a'"
          :style="item.style"
        >
          <ul>
            <li>
              <!-- <span class="classify">{{list.classify}}</span> -->
              <span class="list_title">{{item.title}}</span>
            </li>
            <!-- <li>
              <span class="classify">上周</span>
              <span>{{list.lastWeek}}</span>
            </li>
            <li>
              <span class="classify">本周</span>
              <span>{{list.thisWeek}}</span>
            </li>
            <li>
              <span class="classify">环比</span>
              <span>{{list.chainIndex}}</span>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EpgPageTwo', //EPG一级页面
  props: ['programesListOne2'],
  data() {
    return {

    }
  },
  mounted() {
    // console.log("二级页面", this.programesListTwo)
  }
}
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.epg_page_col {
  /* text-align: left; */
  text-align: center;
  /* padding: 10px 0px; */
  background: #f0f0f0;
  /* flex: 1;
  -webkit-flex: 1; */
  /* margin-left: 14px; */
  /* background: #ffffff; */
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  /* opacity: 0.6; */
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #ccc;
}
.main_body {
  /* width: 1920px; */
  width: 100%;
  height: 1000px;
  position: relative;
}
.epg_page_col:nth-child(1) {
  margin-left: 0px;
}
.epg_page_col ul {
  margin: 0;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
  /* align-content: space-around; */
}
.epg_page_col ul li {
  /* height: 27px;
  line-height: 27px; */
  list-style: disc;
  font-size: 10px;
}
.epg_page_col ul li:nth-child(2) {
  color: #5e70f1;
}
.epg_page_col ul li:nth-child(3) {
  color: #f97e6f;
}
.epg_page_col ul li:nth-child(4) {
  color: #4adbc7;
}
.epg_page_col ul li:nth-child(1) {
  list-style: none;
  color: #333;
}
.epg_page_col ul li span.classify {
  display: inline-block;
  width: 70px;
  text-align: left;
  font-size: 12px;
  color: #333;
}
.epg_page_col ul li .list_title {
  color: #333 !important;
}
.epg_page_col ul li span:nth-child(2) {
  color: #999;
}
</style>