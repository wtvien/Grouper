var data = require('../data.json');

/* GET home page. */
exports.view = function(req, res) {
  // Temporarily using first student as logged in user
  var user = data.students[0];
  // Load data for each enrolled course
  var courses = [];
  for (let courseId in user.groups) {
    let course = data.courses.find(function(c) { return c.id === courseId; });
    course.url = encodeURI('/course/' + courseId);
    courses.push(course);
  }
  res.render('index', {
    title : 'Grouper',
    name : user.name,
    courses : courses
   });
};

exports.addCourse = function(req, res) { 
	var user = data.students[0];

	var newCourse = {
      "id" : "CSE 190",
      "title" : "Entrepreneurship",
      "groupSize" : 2,
      "students" : [user.id],
	     "modalID" : "4"
    };

	// Professor/TA action
	data.courses.push(newCourse);
	// Student action
	user.groups[newCourse.id] = [];
	user.invites[newCourse.id] = [];

	res.redirect('/index');
 };

exports.removeCourse = function(req, res) {
  var courseId = req.body.id;
  var user = data.students[0];
  delete user.groups[courseId];
  delete user.invites[courseId];
  res.redirect('/index');
};
