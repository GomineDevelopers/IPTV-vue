<template>
  <div class="epg_page_Two epg_page_container">
    <div class="epg_page_row" v-for="(item,index) in programesList" :key="index + 'a'">
      <div class="epg_page_col" v-for="(list,index2) in item" :key="index2 + 'b'">
        <ul>
          <li>
            <span>搜索</span>
            <span>{{list.title}}</span>
          </li>
          <li>
            <span>上周</span>
            <span>{{list.lastWeek}}</span>
          </li>
          <li>
            <span>本周</span>
            <span>{{list.thisWeek}}</span>
          </li>
          <li>
            <span>环比</span>
            <span>{{list.chainIndex}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EpgPageTwo', //EPG一级页面
  data() {
    return {
      programesList: [
        [
          { title: 'box0_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box0_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_2', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' },
          { title: 'box2_3', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
        [
          { title: 'box2_1', lastWeek: '361018', thisWeek: '336859', chainIndex: '-6.09%' }
        ],
      ]
    }
  }
}
</script>
<style scoped>
.epg_page_container .epg_page_row {
  height: 130px;
  margin: 14px 0px;
  font-size: 12px;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}
.epg_page_col {
  text-align: left;
  padding: 10px 0px;
  background: #f0f0f0;
  flex: 1;
  -webkit-flex: 1;
  margin-left: 14px;
  background: #ffffff;
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.epg_page_col:nth-child(1) {
  margin-left: 0px;
}
.epg_page_col ul {
  margin: 0;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.epg_page_col ul li {
  height: 27px;
  line-height: 27px;
}
.epg_page_col ul li:nth-child(1) {
  list-style: none;
}
.epg_page_col ul li span:nth-child(1) {
  margin-right: 40px;
  color: #333;
}
.epg_page_col ul li span:nth-child(2) {
  color: #999;
}
</style>