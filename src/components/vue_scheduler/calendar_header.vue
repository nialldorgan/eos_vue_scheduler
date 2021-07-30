<template>  
  <thead>
    <tr>
      <td rowspan="2"></td>
      <th :class="[{today: _isToday(day.value)}, 'day-indicator']"
      v-for="(day, index) in days" :colspan="users().length">
        <div class="calendar-header">
          <span class="letters-date">{{_formatDayTitle(day)[0]}}</span>
          <span class="number-date">{{_formatDayTitle(day)[1]}}</span>
        </div>        
      </th>
    </tr>
    <tr>
      <template v-for="(day, index) in days" >
        <th v-for="user in users()" :key="`${index}${user.id}`">{{user.name}}</th>
      </template>
    </tr>
  </thead>
</template>

<script>
/*  global  */
import {
  isToday,
  formatDayTitle
} from '../../utils.js'

export default {
  name: 'CalendarHeader',

  props: {
    mode: String,
    days: Array,
  },

  data: function () {
    return {      
    }
  },

  inject: ['users'],

  components: {

  },

  mounted () {

  },  

  computed: {
    
  },

  methods: {    
    _formatDayTitle (date) {
      return formatDayTitle(date)
    },

    _isToday (date) {
      return isToday(date)
    }
  }
}

</script>