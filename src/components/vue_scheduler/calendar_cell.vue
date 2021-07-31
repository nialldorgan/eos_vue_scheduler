<template>
  <li 
  @click.stop="cellClickEvent"  
  class="calendar-cell"  
  :style="`height: ${cellHeight}px`">
    <!-- to view all the times uncomment this line below -->
    <!-- <span style="font-size: 7px">{{cellData.value}}</span> -->
    <template>
      <calendar-event 
      @eventClick="emitEventClick"
      :style="`width: calc(${eventWidth}% + 0px);` + 'left: calc('+ calcLeftInset(eventWidth, index) +'% + 0px)'"
      v-for="(event, index) in cellEvents" 
      :key="event.id" 
      :event="event" 
      :cellData="cellData"></calendar-event>
    </template>
  </li>
</template>

<script>
/*  global  */
import CalendarEvent from './calendar_event.vue'
import big from 'big.js'
export default {
  name: 'CalendarCell',

  props: {
    cellData: Object,
    user: Object,
  },

  inject: ['calendarOptions', 'events'],

  data: function () {
    return {

    }
  },

  components: {
    CalendarEvent
  },

  mounted () {

  },

  computed: {
    cellHeight: function () {
      // remove one for the border
        return this.calendarOptions().fiveMinuteHeight - 1
    },

    eventWidth: function () {
      // percentage width of each cell event
      return big(1).div(big(this.cellEvents.length)).times(100).toNumber()
    },

    cellEvents: function () {
      return this.events().filter(event => {
        return (event.start_time === this.cellData.value && event.user_id === this.user.id)
      })
    }

  },

  methods: {
    calcLeftInset (width, index) {
      return big(width).times(index).toNumber()
    },
    
    cellClickEvent () {
      if (this.cellEvents.length) {
        return
      } else {
        this.$emit('cellClick', {
          cellData: this.cellData,
          user: this.user
        })
      }
    },

    emitEventClick (event) {
      this.$emit('eventClick', event)
    }
  }
}

</script>