/*
## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
DONE
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
DONE
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WILL NOT WORK /:
WHEN I click into a timeblock
THEN I can enter an event
DONE
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
DONE
WHEN I refresh the page
THEN the saved events persist
DONE
```
*/

var button = $('.saveBtn')
var refreshButton = $('.refreshBtn')

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');
  $('#todaydate').text(date);
})

function currentTime() {
    var current = moment().hours()
    var time = $('#todaydate');
    console.log(current);

    time.each(function () {
      var hour = parseInt($(this).attr('id'))
      console.log(hour);
      //PSUDO CODE,
      /* 
      IF  Time before, style hour div "past"
      IF  Time now, style hour div "current"
      IF  Time future, style hour div "future"
      */
      //THIS DIDNT WORK UGHHHHH      
    })
  }
  currentTime()


  //local storage button + assignment based on id (also known as military time hour)
  button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })
  $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
  $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
  $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
  $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
  $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
  $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
  $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
  $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
  $('#17 textarea').val(localStorage.getItem('17').replace(/['"]+/g, ''));
