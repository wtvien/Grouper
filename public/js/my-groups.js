function leaveGroup(courseId) {
  $.post('/my-groups/', { courseId : courseId }, function() { location.reload(); });
}
