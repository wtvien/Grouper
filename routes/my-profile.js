var data = require('../data.json');

exports.view = function(req, res) {
  var user = data.students[0];

  var locations = [
    { loc : "On-campus", selected : user.location === "On-campus" },
    { loc : "Off-campus", selected : user.location === "Off-campus" }
  ];
  var days = [];
  for (let day in user.availability) {
    days.push({ day : day, from : user.availability[day][0], to : user.availability[day][1] });
  }

  res.render('my-profile', {
    title : 'My Profile',
    name : user.name,
    major : user.major,
    days : days,
    bio : user.bio,
    roles : user.roles
   });
};
