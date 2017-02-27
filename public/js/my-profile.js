$(document).ready(initializePage);

function initializePage() {
  $("input[type='image']").click(function(e) {
    e.preventDefault();
    $("input[type='file']").click();
  });

  $.get('/data', addSelectOptions);
}

function addSelectOptions(result) {
  var user = result.students[0];
  var years = ['', '1st', '2nd', '3rd', '4th', '5th+'];
  for (let year of years) {
    $('#inputYear').append('<option>' + year + '</option>');
    if (user.year === year)
      $('#inputYear option').last().attr('selected', 'selected');
  }
  var locations = ['', 'On-campus', 'Off-campus'];
  for (let loc of locations) {
    $('#inputLocation').append('<option>' + loc + '</option>');
    if (user.location === loc)
      $('#inputLocation option').last().attr('selected', 'selected');
  }
  var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  var times = ['', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', 
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', 
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
    '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM'];
  for (let day of days) {
    for (let fromTime of times) {
      $('#'+day+'inputFrom').append('<option>' + fromTime + '</option>');
      if (user.availability[day][0] === fromTime) 
        $('#'+day+'inputFrom option').last().attr('selected', 'selected');
    }
    for (let toTime of times) {
      $('#'+day+'inputTo').append('<option>' + toTime + '</option>');
      if (user.availability[day][1] === toTime)
        $('#'+day+'inputTo option').last().attr('selected', 'selected');
    }
  }
}
