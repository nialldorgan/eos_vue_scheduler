<template>
  <div class="calendar-wrapper">
    <calendar-week-view
    @eventClick="emitEventClick"
    @cellClick="emitCellClick"
    ></calendar-week-view>
  </div>
</template>

<script>
/*  global  */
import CalendarWeekView from './calendar_week_view.vue'
export default {
  name: 'CalendarContainer',

  props: {
    users: Array,
    calendarOptions: Object,
    events: Array
  },

  data: function () {
    return {
      
    }
  },

  provide: function () {
    return {
      calendarOptions: () => this.calendarOptions,
      users: () => this.users,
      events: () => this.events
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
    emitEventClick (event) {
      this.$emit('eventClick', event)
    },

    emitCellClick (event) {
      this.$emit('cellClick', event)
    }
  }
}

</script>