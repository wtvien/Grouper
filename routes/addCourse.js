var data = require('../data.json');

exports.addCourse = function(req, res) {    
	var newCourse = {
      "id" : "CSE 190",
      "title" : "Enterprenurship",
      "groupSize" : 2,
      "students" : ["123", "456", "789"] 
    };
    
	console.log(newCourse);

	res.render('index', data);

	data.courses.push(newCourse);
 }