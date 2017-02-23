var data = require('../data.json');
var index = require('./index');

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

	index.view(req, res);
 }
