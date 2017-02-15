var data = require('../data.json');

exports.view = function(req, res) {
  var peerId = req.params.peerId;
  var peer = data.students.find(function(s) { return s.id === peerId});

  var days = [];
  for (let day in peer.availability) {
    if (peer.availability[day].length > 0)
      days.push({ day : day, from : peer.availability[day][0], to : peer.availability[day][1] });
  }

  res.render('peer', {
    title : peer.name,
    name : peer.name,
    major : peer.major,
    year : peer.year,
    location : peer.location,
    days : days,
    bio : peer.bio,
    roles : peer.roles,
    mailto : 'mailto:' + peer.email,
    courseUrl : encodeURI('/course/' + req.params.courseId)
  });
};
