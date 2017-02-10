exports.view = function(req, res) {
  res.render('peer', {
    title: 'Student ' + req.params.peerId,
    courseUrl: '/course/' + req.params.courseId
  });
};
