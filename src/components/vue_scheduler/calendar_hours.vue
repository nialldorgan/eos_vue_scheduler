<template>
  <td 
  :style='`height:${hourHeight}px`'>
    <div class="hours">
      {{_formatLeftHours(hour.value)}}
    </div>
  </td>
</template>

<script>
/*  global  */
import { formatLeftHours } from '../../utils.js'
export default {
  name: 'CalendarHours',

  props: {
    hour: Object
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
    hourHeight: function () {
      // 12 five minutes in an hour
      return 12 * this.calendarOptions().fiveMinuteHeight
    }
  },

  methods: {
    _formatLeftHours (val) {
      return formatLeftHours(val)
    }
  }
}

</script>