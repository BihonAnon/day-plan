/*
## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
*/
var button = $('.saveBtn')

$(document).ready(function () { //Moment current date 
  var date = moment().format('dddd MMMM Do');
  $('#currentDay').text(date);
//colums n hour stuff
  function currentTime() {
    var currentTimeEl = moment().hours()
    var eventCardEl = $('.event-card');
//im losing my minddddd

    eventCardEl.each(function () {
      var hour = parseInt($(this).attr('id'))
      console.log(hour);

      if (hour === current) {
        $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
        console.log(('present' + hour + current))
      } else if (current > hour) {
        $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
        console.log(('past' + hour + current))
      } else {
        $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
        console.log(('future' + hour + current))
      }
    })
  }
  currentTime()
  //Use styling to change the cursor style
  button.on('click', function (event) {
    $('selector').css('cursor', 'i')
  })
  


});