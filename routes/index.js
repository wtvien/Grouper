var data = require('../data.json');
var _ = require('lodash');

/* GET home page. */
exports.view = function(req, res) {
  // Temporarily using first student as logged in student
  var student = data.students[0];
  // Load data for each enrolled course
  var courses = [];
  for (let courseId of student.courses) {
    let course = _.find(data.courses, {'id': courseId});
    course.url = encodeURI('/course/' + courseId);
    courses.push(course);
  }
  res.render('index', {
    title: 'Grouper',
    courses: courses
   });
};
