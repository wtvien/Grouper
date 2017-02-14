var data = require('../data.json');
var _ = require('lodash');

exports.view = function(req, res) {
  var user = data.students[0];
  var courseId = req.params.courseId;
  var course = _.find(data.courses, {'id': courseId});
  var peers = [];
  for (let studentName of course.students) {
    if (studentName === user.name)
      continue;
    let student = _.find(data.students, {'name' : studentName});
    let peer = { peerName : student.name,
      description : '',
      peerUrl : '/course/' + courseId + '/peer/' + student.name
    };
    peers.push(peer);
  }
  res.render('course', {
    title : courseId,
    peers : peers
   });
};
