<template>
  <div class='date-picker'>
    {{current.format('YYYY-MM-DD')}}
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
           v-for="date in smallDays"
           :key="date">{{date}}</div>
    </div>
    <div class="week-container">
      <div class="date"
           :class="{disable: day.disable, active: day.date === date && !day.disable}"
           v-for="(day,idx) in days"
           :key="idx"
           @click="setDate(day)">
        {{day.date | padZero}}
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
    };
  },
  filters: {
    padZero (val) {
      return val < 10 ? `0${val}` : val
    }
  },
  methods: {
    setDate (date) {
      if (!date.disable) {
        this.date = date.date
      }
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
    },
    smallDays () {
      let current = this.current
      let date = current.date()
      let day = current.day()
      let res = []
      for (let i = day; i > 0; i--) {
        res.unshift(date -= 1)
      }
      console.log({ date, day })
      return res
    },
    current () {
      return moment().year(this.year).month(this.month).date(this.date)
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
    &.active {
      background: #d33332;
      color: #fff;
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