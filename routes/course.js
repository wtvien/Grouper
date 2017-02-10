exports.view = function(req, res) {
  var courseId = req.params.courseId;
  res.render('course', {
    title: 'Course ' + courseId,
    peers : [
      { peerId: 'A', peerUrl: '/course/' + courseId + '/peer/A' },
      { peerId: 'B', peerUrl: '/course/' + courseId + '/peer/B' },
      { peerId: 'C', peerUrl: '/course/' + courseId + '/peer/C' }
    ]
   });
};
