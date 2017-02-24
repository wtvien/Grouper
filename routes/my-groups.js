var data = require('../data.json');

exports.view = function(req, res) {
  var user = data.students[0];

  var groups = {};
  for (let groupId in user.groups) {
    groups[groupId] = [];
    for (let studentId of user.groups[groupId]) {
      let student = data.students.find(function(s) { return s.id === studentId; });
      groups[groupId].push(student);
    }
  }

  res.render('my-groups', {
    title : 'My Groups',
    name : user.name,
    groups : groups
   });
};

exports.leaveGroup = function(req, res) {

};
