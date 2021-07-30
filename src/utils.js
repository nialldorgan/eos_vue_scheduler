import dayjs from 'dayjs'
import hourUtils from './components/vue_scheduler/hours.js'

const formatDayTitle = (date) => {
  let dayObj = dayjs(date.value)
  return [dayObj.format('ddd'), dayObj.format('D')]
}

const formatLeftHours = (date) => {
    return dayjs(date).format('h A')
}

const isToday = (date) => {
  if (!date) return
  let today = new Date(`${dayjs().format('YYYY-MM-DD')}T00:00:00.000Z`)
  return date === today.toISOString()
}

const getHours = (hour_options = null) => {
  // let date = new Date()
  // date.setUTCHours(0, 0, 0, 0)
  // let iso_date = getYearMonthDay(date)

  let day_hours = hourUtils.getFullHours()
  if (hour_options) {
    let { start_hour, end_hour } = hour_options
    day_hours = day_hours.slice(start_hour, end_hour)
  }
  let hours = []
  for (let idx = 0; idx < day_hours.length; idx++) {
    let value = dayjs(`${dayjs().format('YYYY-MM-DD')} ${day_hours[idx]}`).format('YYYY-MM-DD HH:mm:ss')
    hours.push({
      value,
      index: idx,
      visible: true
    })
  }
  return hours
}

const getHourlessDate = (date_string) => {
  let today = date_string ? new Date(date_string) : new Date()
  let year = today.getFullYear() + "",
    month = (today.getMonth() + 1 + "").padStart(2, "0"),
    day = (today.getDate() + "").padStart(2, "0")

  return `${year}-${month}-${day}T00:00:00.000Z`
}

const getYearMonthDay = (date_string) => {
  return getHourlessDate(date_string).slice(0, 10)
}

export { 
  isToday,
  getHours,
  formatDayTitle,
  formatLeftHours
}
export default {
  isToday,
  getHours,
  formatDayTitle,
  formatLeftHours
}