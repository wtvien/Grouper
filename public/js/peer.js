$(document).ready(function() {
  updateJoinButton();
  $('#joinGroupBtn').click(updateJoinButton);
});

function updateJoinButton() {
  $.get('/data', function(result) {
    var peer = result.students.find(function(s) { return s.id === peerId; });
    var course = result.courses.find(function(c) { return c.id === courseId; });
    if (peer.groups[courseId].length + 1 === course.groupSize)
      $('#joinGroupBtn').attr('disabled', true);
  });
}

function joinGroup() {
  $.post('/course/' + courseId + '/peer/' + peerId);
}
