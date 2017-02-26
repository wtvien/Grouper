var data = require('../data.json');

/* GET home page. */
exports.view = function(req, res) {
  var user = data.instructors[0];
  // Load data for each enrolled course
  var courses = [];
  for (let courseId in user.myCourses) {
    let course = data.courses.find(function(c) { return c.id === courseId; });
    course.url = '/course/' + courseId;
    courses.push(course);
  }
  res.render('instructor-index', {
    title : 'Grouper',
    name : user.name,
    courses : courses
   });
};

exports.addCourse = function(req, res) { 
	var user = data.instructors[0];
  //TO-DO: add new course using user input
	var newCourse = {
      "id" : "jkl",
      "name" : "CSE 190",
      "title" : "Entrepreneurship",
      "groupSize" : 2,
      "students" : ["000", "123", "456", "789", "111", "222", "333", "444", "555", "666"]
    };

	user.myCourses[newCourse.id] = [];

	res.redirect('/instructor-index');
 };

exports.removeCourse = function(req, res) {
  var courseId = req.body.id;
  var user = data.instructors[0];
  delete user.myCourses[courseId];
  res.redirect('/instructor-index');
};
