$(document).ready(initializePage);

function initializePage() {
  $("input[type='image']").click(function(e) {
    e.preventDefault();
    $("input[type='file']").click();
  });

  $.get('/data', addYearOptions);
  $.get('/data', addLocationOptions);
}

function addYearOptions(result) {
  var user = result.students[0];
  var years = ['1st', '2nd', '3rd', '4th', '5th+'];
  for (let year of years) {
    $('#inputYear').append('<option>' + year + '</option>');
    if (user.year === year)
      $('#inputYear option').last().attr('selected', 'selected');
  }
}

function addLocationOptions(result) {
  var user = result.students[0];
  var locations = ['On-campus', 'Off-campus'];
  for (let loc of locations) {
    $('#inputLocation').append('<option>' + loc + '</option>');
    if (user.location === loc)
      $('#inputLocation option').last().attr('selected', 'selected');
  }
}
