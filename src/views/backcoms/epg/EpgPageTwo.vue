<template>
  <div class="epg_page_one epg_page_container" v-show="programesListTwo.length !=0">
    <div
      class="epg_page_row"
      v-for="(item,index) in programesListTwo"
      :key="index + 'a'"
      v-show="item"
    >
      <div class="epg_page_col" v-for="(list,index2) in item" :key="index2 + 'b'">
        <ul>
          <li>
            <span class="classify">{{list.classify}}</span>
            <span class="list_title">{{list.title}}</span>
          </li>
          <li>
            <span class="classify">上期</span>
            <span>{{list.lastWeek}}</span>
          </li>
          <li>
            <span class="classify">本期</span>
            <span>{{list.thisWeek}}</span>
          </li>
          <li>
            <span class="classify">环比</span>
            <span>{{list.chainIndex}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EpgPageTwo", //EPG一级页面
  props: ["programesListTwo"],
  data() {
    return {};
  },
  mounted() {
    // console.log("二级页面", this.programesListTwo)
  }
};
</script>
<style scoped>
.epg_page_container .epg_page_row {
  font-size: 12px;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  /* height: 130px; */
  /* margin: 14px 0px; */
}
.epg_page_col {
  text-align: left;
  padding: 10px 0px;
  background: #f0f0f0;
  flex: 1;
  -webkit-flex: 1;
  margin: 0px 0px 14px 14px;
  background: #ffffff;
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  min-width: 120px;
}
.epg_page_col:nth-child(1) {
  margin-left: 0px;
}
.epg_page_col ul {
  margin: 0;
  padding-left: 30px;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.epg_page_col ul li {
  height: 27px;
  line-height: 27px;
  list-style: disc;
  font-size: 14px;
}
.epg_page_col ul li:nth-child(1) {
  display: -webkit-flex;
  display: flex;
  /* justify-content: center; */
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
  margin-right: 5px;
  text-align: left;
  font-size: 12px;
  color: #333;
}
.epg_page_col ul li .list_title {
  color: #333 !important;
}
.epg_page_col ul li span:nth-child(2) {
  color: #999;
  font-size: 12px;
}
</style>