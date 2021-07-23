<template>
    <div class="calendar-wrap">  
      <calendar-header
      :days="days"
      :mode="mode"></calendar-header>
      <div class="blocks">
        <calendar-hours
        :hours="hours"></calendar-hours>
        <div v-for="(day, index) in days" class="building-blocks">
          <calendar-day  
          v-for="user in users()"      
          :key="user.id"       
          :hours="hours"></calendar-day>
        </div>
      </div>
      
    </div>
</template>

<script>
/*  global  */
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)
import { getHours } from '../../utils.js'
import CalendarDay from './calendar_day.vue'
import CalendarHours from './calendar_hours.vue'
import CalendarHeader from './calendar_header.vue'
export default {
  name: 'CalendarWeekView',

  props: {

  },

  data: function () {
    return {
      days: []
    }
  },
  inject: ['calendarOptions', 'users'],

  components: {
    CalendarDay,
    CalendarHours,
    CalendarHeader
  },

  mounted () {
    this.getDays()
  },

  watch: {
    mode: function () {
      this.getDays()
    }
  },

  computed: {
    mode: function () {
      return this.calendarOptions().mode
    },

    currentDay: function () {
      return dayjs()
    },

    startOfWeek: function () {
      return this.currentDay.startOf('isoWeek')
    },

    endOfWeek: function () {
      return this.currentDay.endOf('isoWeek')
    },

    hours: function () {
      return getHours(this.calendarOptions())
    },
  },

  methods: {
    getDays () {
      this.days = []
      if (this.mode === 'day') {
        this.days.push({
          value: this.currentDay.toISOString(),
          index: 0
        })
      } else {
        let dateIterator = this.startOfWeek
        let index = 0
        while (dateIterator <= this.endOfWeek) {
          //need to do this to avoid problems with UTC and Summertime being not the same time and the day being altered as a result
          let jsNativeDate = new Date(`${dateIterator.format('YYYY-MM-DD')}T00:00:00.000Z`)
          this.days.push({
            value: jsNativeDate.toISOString(),
            index: index
          })
          dateIterator = dateIterator.add(1, 'day')
          index++
        }
      }
    }
  }
}

</script>