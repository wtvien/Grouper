var data = require('../data.json');

exports.view = function(req, res) {
  var user = data.students[0];
  var years = [
    { year : "1st", selected : user.year === "1st" },
    { year : "2nd", selected : user.year === "2nd" },
    { year : "3rd", selected : user.year === "3rd" },
    { year : "4th", selected : user.year === "4th" },
    { year : "5th+", selected : user.year === "5th+" }
  ];
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
    years : years,
    locations : locations,
    days : days,
    bio : user.bio,
    roles : user.roles
   });
};
