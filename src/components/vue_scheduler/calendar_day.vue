<template>
  <td>
    <ul>
      <calendar-cell
      @eventClick="emitEventClick"
      @cellClick="emitCellClick"
      :cellData="hourCell"
      :user="user"
      v-for="hourCell in getHourCells(day, hour.value)" :key="hourCell.index"></calendar-cell>
    </ul>
  </td>
</template>

<script>
/*  global  */
import dayjs from 'dayjs'
import CalenderCell from './calendar_cell.vue'
export default {
  name: 'CalendarDay',

  props: {
    hour: Object,
    day: Object,
    user: Object
  },

  data: function () {
    return {      
    }
  },

  components: {
    CalenderCell
  },

  mounted () {

  },

  computed: {
    
  },

  methods: {
    getHourCells (day, start) {      
      let index = 0
      let startHour = dayjs(`${dayjs(day.value).format('YYYY-MM-DD')} ${dayjs(start).format('HH:mm')}`)
      let end = startHour.add(1, 'hour')
      let hourCells = []
      while(startHour < end) {
        hourCells.push({
          value: startHour.format('YYYY-MM-DD HH:mm'),
          index: index
        })
        // five minute intervals
        startHour = startHour.add(5, 'minutes')
        index++
      }
      return hourCells
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