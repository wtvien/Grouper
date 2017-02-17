var data;
$(document).ready(function() {
  $.get('/data', getData);
});

function getData(result) {
  data = result;
}

function joinGroup(courseId, peerId) {
  data.students[0].groups[courseId].push(peerId);
  data.students.find(function(s) { return s.id === peerId }).groups[courseId].push(data.students[0].id);
  $.post({
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: '/data'
  });
}
