var data = require('../data.json');
var index = require('./index');
var fs = require('fs');

exports.addCourse = function(req, res) { 
	var newCourse = {
      "id" : "CSE 190",
      "title" : "Entrepreneurship",
      "groupSize" : 2,
      "students" : [data.students[0].id]
    };

	console.log(newCourse);

	// Professor/TA action
	data.courses.push(newCourse);
	// Student action
	data.students[0].groups[newCourse.id] = [];
	fs.writeFile('data.json', JSON.stringify(data), function(err) {
		if (err) console.log(err);
	});

	index.view(req, res);
 }
