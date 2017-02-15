var data = require('../data.json');

/* GET home page. */
exports.view = function(req, res) {
  // Temporarily using first student as logged in user
  var user = data.students[0];
  // Load data for each enrolled course
  var courses = [];
  for (let courseId of user.courses) {
    let course = data.courses.find(function(c) { return c.id === courseId });
    course.url = encodeURI('/course/' + courseId);
    courses.push(course);
  }
  res.render('index', {
    title : 'Grouper',
    courses : courses
   });
};
