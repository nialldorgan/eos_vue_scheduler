# eos_vue_scheduler

## A Vue component to display an event scheduling diary

Main component is the CalendarContainer
This takes 3 props 
1. A user array consisting of a user object containing a user ID and a user name
2. An events array
3. A calendar options object

### User Object
| id | String (user id) |
| name | String |

### Event Object
| id | String (event id) |
| user_id | String |
| title | String (event title) |
| description | String (a description for the event) |
| color | String (a hex color for the event) |
| start_time | String (a start time and date for the event in the format YYY-MM-DD HH:mm:ss) |
| end_time | String (an end time and date for the event in the same format as start time) |

### Calendar Options Object
| mode | String (either of 'week' or 'day') |
| fiveMinuteHeight | Number (the number of pixels to represent 5 minutes on the calendar) |
| start_hour | Number (the hour to start the day) |
| end_hour | Number (the hour to end the day) |