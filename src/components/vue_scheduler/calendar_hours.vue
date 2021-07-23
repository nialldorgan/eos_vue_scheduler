<template>
  <div>   
    <ul class="hours">
      <li
        :key="index"
        v-for="(hour, index) in hours" 
        :style='`height:${hourHeight}px`'       
      >
        <span>{{ _formatLeftHours(hour.value) }}</span>
      </li>
    </ul> 
  </div>
</template>

<script>
/*  global  */
import { formatLeftHours } from '../../utils.js'
export default {
  name: 'CalendarHours',

  props: {
    hours: Array
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
      return 6 * this.calendarOptions().tenMinuteHeight
    }
  },

  methods: {
    _formatLeftHours (val) {
      return formatLeftHours(val)
    }
  }
}

</script>