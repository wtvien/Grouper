var data = require('../data.json');

/* GET home page. */
exports.view = function(req, res) {
  // Temporarily using first student as logged in user
  var user = data.students[0];
  // Load data for each enrolled course
  var courses = [];
  for (let courseData of user.courses) {
    let course = data.courses.find(function(c) { return c.id === courseData.id; });
    course.url = encodeURI('/course/' + courseData.id);
    courses.push(course);
  }
  res.render('index', {
    title : 'Grouper',
    courses : courses
   });
};
