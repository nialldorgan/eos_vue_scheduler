<template>
    <table border >
      <calendar-header
      :days="days"
      :mode="mode"></calendar-header>
      <tbody>
        <tr v-for="(hour, index) in hours" :key="index">
          <calendar-hours :hour="hour"></calendar-hours>
          <template v-for="(day, index) in days">
            <template v-for="user in users()">
              <calendar-day 
              @eventClick="emitEventClick"
              @cellClick="emitCellClick"
              :key="`${index}${user.id}`" 
              :day="day"   
              :user="user"
              :hour="hour"></calendar-day>
            </template>
          </template>
        </tr>
      </tbody>
    </table>
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
    },

    currentDay: function () {
      this.getDays()
    }
  },

  computed: {
    mode: function () {
      return this.calendarOptions().mode
    },

    currentDay: function () {
      return dayjs(this.calendarOptions().focus_date)
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
    },

    emitEventClick (event) {
      this.$emit('eventClick', event)
    },

    emitCellClick (event) {
      this.$emit('cellClick', event)
    }
  }
}

</script>