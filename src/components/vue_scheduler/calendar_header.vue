<template>
  <div class="sticky-top">
    <ul class="days">
      <li 
      :class="[{today: _isToday(value)}, 'day-indicator']"
      :key="index"
      v-for="({ value }, index) in days">
        <div>
          <span class="letters-date">{{_formatDayTitle(value)[0]}}</span>     
          <span class="number-date">{{_formatDayTitle(value)[1]}}</span>
        </div>
        <div class="users">
          <span v-for="user in users()" :key="user.id" class="usernames">{{user.name}}</span>
        </div>
      </li>
    </ul>
  </div>
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