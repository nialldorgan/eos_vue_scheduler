<template>
  <div>
    <calendar-week-view></calendar-week-view>
  </div>
</template>

<script>
/*  global  */
import CalendarWeekView from './calendar_week_view.vue'
export default {
  name: 'CalendarContainer',

  props: {
    users: Array,
    calendarOptions: Object
  },

  data: function () {
    return {
      
    }
  },

  provide: function () {
    return {
      calendarOptions: () => this.calendarOptions,
      users: () => this.users
    }
  },

  components: {
    CalendarWeekView
  },

  mounted () {

  },

  computed: {

  },

  methods: {

  }
}

</script>