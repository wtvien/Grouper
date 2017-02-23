function joinGroup(courseId, peerId) {
  $.post('/course/' + courseId + '/peer/' + peerId);
}
