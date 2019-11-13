<template>
  <div class="height_auto">
    <div class="day_rank_title">每日TOP5排名走势</div>
    <div class="day_rank_content">
      <div class="day_rank_order">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div class="day_rank_list" v-for="(item,index) in dayRankTop5Data" :key="index+'i'">
        <div class="day_rank_item">
          <i class="day_rank_icon"></i>
          <div class="item_name classfiy1">{{item.data.top1.name}}</div>
        </div>
        <div class="day_rank_item">
          <i class="day_rank_icon"></i>
          <div class="item_name classfiy1">{{item.data.top1.name}}</div>
        </div>
        <div class="day_rank_item">
          <i class="day_rank_icon"></i>
          <div class="item_name classfiy1">{{item.data.top1.name}}</div>
        </div>
        <div class="day_rank_item">
          <i class="day_rank_icon"></i>
          <div class="item_name classfiy1">{{item.data.top1.name}}</div>
        </div>
        <div class="day_rank_item">
          <i class="day_rank_icon"></i>
          <div class="item_name classfiy1">{{item.data.top1.name}}</div>
        </div>
        <div class="day_rank_item">
          <div>{{item.date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DayRankTop5',
  props: {
    dayRankTop5Data: Array
  },
  data() {
    return {}
  },
  mounted() {
  }
}
</script>
<style scoped>
.day_rank_content {
  display: -webkit-flex;
  display: flex;
  font-size: 14px;
  justify-content: space-around;
}
.day_rank_title {
  margin: 0px 0px 24px 0px;
  font-size: 18px;
  font-weight: bold;
}
.day_rank_content .day_rank_order div {
  display: -webkit-flex;
  display: flex;
  align-items: center;
  width: 10px;
  height: 90px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: bold;
}
.day_rank_list .day_rank_item {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  height: 90px;
  margin-bottom: 30px;
}
.day_rank_icon {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: green;
  margin-bottom: 15px;
}
.day_rank_item div {
  border: 1px solid green;
  height: 70px;
  text-align: center;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.day_rank_item:nth-child(6) div {
  border: none;
  padding-top: 10px;
  font-size: 18px;
}
</style>