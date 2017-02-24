$(document).ready(initializePage());

function initializePage() {
  $.get('/data', removeCourse);
 }

function removeCourse(result) {
  var courses = result.courses;
  for (let c of courses) {
    $('#removeBtn'+c.modalID).click(function() {
      $('#panel'+c.modalID).remove();
      $.post('/index/remove-course', { id : c.id }, function() { location.reload(); });
    });
  }

}
