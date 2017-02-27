$(document).ready(initializePage());

function initializePage() {
  $.get('/data', removeCourseHandlers);
 }

function removeCourseHandlers(result) {
  var courses = result.courses;
  for (let c of courses) {
    $('#removeBtn' + c.id).click(function() {
      $.post('/instructor-index/remove-course', { id : c.id }, function() { location.reload(); });
    });
  }
}
