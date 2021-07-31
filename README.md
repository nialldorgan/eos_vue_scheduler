# eos_vue_scheduler

## A Vue component to display an event scheduling diary

Main component is the CalendarContainer
This takes 3 props 
1. A user array consisting of a user object containing a user ID and a user name
2. An events array
3. A calendar options object

### User Object
| Property | Type (description) |
| -------- | ------------------ |
| id | String (user id) |
| name | String |

### Event Object
| Property | Type (description) |
| -------- | ------------------ |
| id | String (event id) |
| user_id | String |
| title | String (event title) |
| description | String (a description for the event) |
| color | String (a hex color for the event) |
| start_time | String (a start time and date for the event in the format YYY-MM-DD HH:mm:ss) |
| end_time | String (an end time and date for the event in the same format as start time) |

### Calendar Options Object
| Property | Type (description) |
| -------- | ------------------ |
| mode | String (either of 'week' or 'day') |
| five_minute_height | Number (the number of pixels to represent 5 minutes on the calendar) |
| start_hour | Number (the hour to start the day) |
| end_hour | Number (the hour to end the day) |
| focus_date | String (date the calendar will set as the current date) |

### Events
| Event | Description |
| ----- | ----------- |
| cellClick | emitted when an empty cell is clicked, use to book an event |
| eventClick | emitted when an event is clicked, use to update or delete an event |

| Event | Payload |
| ----- | ------- |
| cellClick | cellData { index (Number), value ( String 'YYYY-MM-DD HH:mm:ss')} |
| evnetClick | event (an event object) |