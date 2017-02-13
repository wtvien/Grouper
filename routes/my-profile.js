exports.view = function(req, res) {
  var daysOfWeek = [
    { day: "Mon", from: "inputMonFrom", to: "inputMonTo" },
    { day: "Tues", from: "inputTuesFrom", to: "inputTuesTo" },
    { day: "Wed", from: "inputWedFrom", to: "inputWedTo" },
    { day: "Thurs", from: "inputThursFrom", to: "inputThursTo" },
    { day: "Fri", from: "inputFriFrom", to: "inputFriTo" },
    { day: "Sat", from: "inputSatFrom", to: "inputSatTo" },
    { day: "Sun", from: "inputSunFrom", to: "inputSunTo" }
  ];
  res.render('my-profile', {
    title: 'My Profile',
    daysOfWeek: daysOfWeek
   });
};
