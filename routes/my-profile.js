var data = require('../data.json');

exports.view = function(req, res) {
  var user = data.students[0];
  var years = [
    { year : "1st", selected : user.year === "1st" },
    { year : "2nd", selected : user.year === "2nd" },
    { year : "3rd", selected : user.year === "3rd" },
    { year : "4th", selected : user.year === "4th" },
    { year : "5th+", selected : user.year === "5th+" }
  ]
  var daysOfWeek = [
    { day : "Mon", from: "inputMonFrom", to : "inputMonTo" },
    { day : "Tues", from: "inputTuesFrom", to : "inputTuesTo" },
    { day : "Wed", from: "inputWedFrom", to : "inputWedTo" },
    { day : "Thurs", from: "inputThursFrom", to : "inputThursTo" },
    { day : "Fri", from: "inputFriFrom", to : "inputFriTo" },
    { day : "Sat", from: "inputSatFrom", to : "inputSatTo" },
    { day : "Sun", from: "inputSunFrom", to : "inputSunTo" }
  ];
  res.render('my-profile', {
    title : 'My Profile',
    daysOfWeek : daysOfWeek
   });
};
