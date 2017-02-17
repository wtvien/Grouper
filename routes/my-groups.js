var data = require('../data.json');

exports.view = function(req, res) {
  var user = data.students[0];

  res.render('my-groups', {
    title : 'My Groups',
    name : user.name,
   });
};
