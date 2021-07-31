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
import big from 'big.js'
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
      // 12 five minutes in an hour - 1 for the border
      return big(12).times(big(this.calendarOptions().five_minute_height)).toNumber() - 1
    }
  },

  methods: {
    _formatLeftHours (val) {
      return formatLeftHours(val)
    }
  }
}

</script>