<template>
  <div class="calendar-event"
  @click="$emit('eventClick', event)" 
  :style="eventStyle"> 
    <div class="calendar-event-text">
      <span class="calendar-event-title">{{event.title}}</span>
      <span>{{event.description}}</span>
      <span>{{ `${eventStartTime.format('h:mm A')} - ${eventEndTime.format('h:mm A')} ` }}</span>
    </div>    
   </div>
</template>

<script>
/*  global  */
import big from 'big.js'
export default {
  name: 'CalendarEvent',

  props: {
    event: Object,
    cellData: Object
  },

  data: function () {
    return {
    }
  },

  inject: ['calendarOptions'],

  components: {

  },

  mounted () {

  },

  computed: {
    eventDuration: function () {
      return dayjs.duration(this.eventEndTime.diff(this.eventStartTime)).asMinutes()
    },

    eventHeight: function () {
      // (event duration / five minutes) * fiveMinuteHeight
      return 'height: ' + big(this.eventDuration).div(5).times(this.calendarOptions().fiveMinuteHeight).toNumber() + 'px;'
    },

    eventStartTime: function () {
      return dayjs(this.event.start_time)
    },

    eventEndTime: function () {
      return dayjs(this.event.end_time)
    },

    eventBackgroundColor: function () {
      return `background-color: ${this.event.color}; `
    },

    eventStyle: function () {      
      return `${this.eventBackgroundColor} ${this.eventHeight}`
    }
  },

  methods: {

  }
}

</script>