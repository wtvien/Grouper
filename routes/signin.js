var data = require('../data.json');
var fs = require('fs');
var shortid = require('shortid');

exports.view = function(req, res) {
  res.render('signin', { title: 'signin' });
};

exports.registerUser = function(req, res) {
  // TODO: ensure req.body.email does not already exist
  var user = {
    id : shortid.generate(),
    name : req.body.name,
    email : req.body.email,
    groups : {},
    invites : {},
    avatar : 'default.png',
    major : '',
    year : '',
    location : '',
    availability : {
      Mon : [],
      Tues : [],
      Wed : [],
      Thurs : [],
      Fri : [],
      Sat : [],
      Sun : []
    },
    bio : '',
    roles : ''
  }
  data.students.splice(0, 0, user);
  fs.writeFile('data.json', JSON.stringify(data), function(err) {
    if (err) console.log(err);
  });

  res.redirect('/index');
};
