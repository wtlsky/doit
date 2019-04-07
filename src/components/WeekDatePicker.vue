<template>
  <div class='date-picker'>
    <div class="days-row">
      <div class="day">日</div>
      <div class="day">一</div>
      <div class="day">二</div>
      <div class="day">三</div>
      <div class="day">四</div>
      <div class="day">五</div>
      <div class="day">六</div>
    </div>
    <div class="week-container">
      <div class="date"
           :class="{disable: date.disable}"
           v-for="(date,idx) in days"
           :key="idx">
        {{date.date | padZero}}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      year: 2019,
      month: 2,
      date: 5,
      current: ''
    };
  },
  filters: {
    padZero (val) {
      return val < 10 ? `0${val}` : val
    }
  },
  computed: {
    days () {
      let res = []
      let current = moment().year(this.year).month(this.month || 0).date(1)
      let _day = current.day()// 选中月的第一天的星期数
      let daysOfMonth = moment(current).endOf('month').date() // 选中月的天数
      let preMonthEnd = moment(current).month(current.month() - 1).endOf('month').date() // 下个月最后一天
      let rows = Math.ceil((_day + daysOfMonth) / 7)
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < 7; j++) {
          let idx = i * 7 + j // 单元格序号
          let date = idx - _day + 1 // 日期
          if (date <= 0) { // 上个月剩余日期
            res.unshift({
              date: preMonthEnd - idx,
              disable: true
            })
          } else if (date > daysOfMonth) { // 下个月开始日期
            res.push({
              date: idx - _day - daysOfMonth + 1,
              disable: true
            })
          } else {
            res.push({
              date: date,
              disable: false
            })
          }
        }
      }
      return res
    }
  }
}
</script>
<style lang='scss' scoped>
.date-picker {
  overflow: hidden;
}
.days-row {
  display: grid;
  font-size: 0.12rem;
  text-align: center;
  background: #ccc;
  grid-gap: 1px;
  grid-template-columns: repeat(7, auto);
  border: 1px solid #ccc;
  & > .day {
    background: #fff;
    cursor: default;
    padding: 0.03rem 0;
  }
}
.date {
  font-size: 12px;
}
.week-container {
  background: #ccc;
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-gap: 1px;
  border: 1px solid #ccc;
  border-top: 0;
  .date {
    height: 0.3rem;
    line-height: 0.3rem;
    background: #fff;
    text-align: center;
    &:hover {
      background: #026aee;
      color: #fff;
      cursor: pointer;
    }
    &.disable {
      color: #ccc;
      cursor: not-allowed;
      &:hover {
        color: #ccc;
        cursor: not-allowed;
        background: #fff;
      }
    }
  }
}
</style>