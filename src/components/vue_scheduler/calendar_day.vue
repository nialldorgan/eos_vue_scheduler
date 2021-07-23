<template>
  <ul class="calendar-day">
    <calendar-cell
    :cellData="value"
    :user="user"
    :index="index"
    v-for="(value, index) in dayCells" :key="index"></calendar-cell>
  </ul>
</template>

<script>
/*  global  */
import dayjs from 'dayjs'
import CalenderCell from './calendar_cell.vue'
export default {
  name: 'CalendarDay',

  props: {
    hours: Array,
    user: Object
  },

  data: function () {
    return {
      dayCells: []
    }
  },

  components: {
    CalenderCell
  },

  mounted () {
    this.getDayCells()
  },

  computed: {
    startOfDay: function () {
      return dayjs(this.hours[0].value)
    },

    endOfDay: function () {
      return dayjs(this.hours[this.hours.length - 1].value).add(1, 'hour')
    }
  },

  methods: {
    getDayCells () {
      let hourIterator = this.startOfDay
      let index = 0
      while(hourIterator < this.endOfDay) {
        this.dayCells.push({
          value: hourIterator.format('YYYY-MM-DD HH:mm'),
          index: index
        })
        hourIterator = hourIterator.add(10, 'minutes')
        index++
      }
    }
  }
}

</script>