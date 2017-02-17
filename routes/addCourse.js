var data = require('../data.json');
var index = require('./index');

exports.addCourse = function(req, res) { 
	var newCourse = {
      "id" : "CSE 190",
      "title" : "Entrepreneurship",
      "groupSize" : 2,
      "students" : ["123", "456", "789"]
    };

	console.log(newCourse);

	// Professor/TA action
	data.courses.push(newCourse);
	// Student action
	data.students[0].groups[newCourse.id] = [];

	index.view(req, res);
 }
