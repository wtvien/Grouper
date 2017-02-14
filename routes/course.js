var data = require('../data.json');
var _ = require('lodash');

exports.view = function(req, res) {
  // Temporarily using first student as logged in user
  var user = data.students[0];
  // Load data for course
  var courseId = req.params.courseId;
  var course = _.find(data.courses, {'id' : courseId});
  // Load data for each student in the course
  var peers = [];
  for (let studentId of course.students) {
    if (studentId === user.id)
      continue;
    let student = _.find(data.students, {'id' : studentId});
    let peer = {
      name : student.name,
      description : 'description',
      url : encodeURI('/course/' + courseId + '/peer/' + studentId),
      groupStatus : (student.groups[courseId].length + 1) + '/' + course.groupSize
    };
    peers.push(peer);
  }
  res.render('course', {
    title : courseId,
    peers : peers
   });
};
