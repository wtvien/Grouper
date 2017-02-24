function leaveGroup(courseId) {
  console.log('leaveGroup');
  $.post('/my-groups/', { courseId : courseId }, function() { location.reload(); });
}
