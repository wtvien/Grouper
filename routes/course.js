exports.view = function(req, res) {
  var courseId = req.params.courseId;
  res.render('course', {
    title: courseId,
    peers : [
      { peerId: 'A', description: 'description A',
      		peerUrl: '/course/' + courseId + '/peer/A' },
      { peerId: 'B', description: 'description B',
      		peerUrl: '/course/' + courseId + '/peer/B' },
      { peerId: 'C', description: 'description C',
      		peerUrl: '/course/' + courseId + '/peer/C' }
    ]
   });
};
