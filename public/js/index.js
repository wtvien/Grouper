$(document).ready(initializePage());

function initializePage() {
  $.get('/data', removeCourse);
 }

function removeCourse(result) {
  var courses = result.courses;
  for (let c of courses) {
    $('#removeBtn'+c.modalID).click(function() {
  	  console.log("clicked");
      $('#panel'+c.modalID).remove();
      console.log("removed");
    });
  }

}
