var data = require('../data.json');
var _ = require('lodash');

exports.view = function(req, res) {
  var courseId = req.params.courseId;
  var course = _.find(data.courses, {'id': courseId});
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
