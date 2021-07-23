<template>
  <li 
  class="calendar-cell"
  :class="{'is-an-hour': (index + 1) % (60 / 10) === 0}"   
  :style="`height: ${cellHeight}px`">
    <!-- to view all the times uncomment this line below -->
    <!-- <span style="font-size: 7px">{{cellData.value}}</span> -->
  </li>
</template>

<script>
/*  global  */
export default {
  name: 'CalendarCell',

  props: {
    cellData: Object,
    user: Object,
    index: Number
  },

  inject: ['calendarOptions'],

  data: function () {
    return {

    }
  },

  components: {

  },

  mounted () {

  },

  computed: {
    cellHeight: function () {
        return this.calendarOptions().cellHeight
    }
  },

  methods: {

  }
}

</script>