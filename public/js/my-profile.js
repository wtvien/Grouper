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
}
