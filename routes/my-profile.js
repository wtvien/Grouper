var data = require('../data.json');
var fs = require('fs');

exports.view = function(req, res) {
  var user = data.students[0];

  var days = [];
  for (let day in user.availability)
    days.push({ day : day, from : user.availability[day][0], to : user.availability[day][1] });

  res.render('my-profile', {
    title : 'My Profile',
    name : user.name,
    major : user.major,
    days : days,
    bio : user.bio,
    roles : user.roles
   });
};

exports.updateProfile = function(req, res) {
  var user = data.students[0];
  user.major = req.body.major;
  user.year = req.body.year;
  user.location = req.body.location;
  for (let day in user.availability)
    user.availability[day] = [req.body[day + "From"], req.body[day + "To"]];
  user.bio = req.body.bio;
  user.roles = req.body.roles;
  data.students[0] = user;
  fs.writeFile('data.json', JSON.stringify(data), function(err) {
    if (err) console.log(err);
  });
  res.redirect('my-profile');
};
