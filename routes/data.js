var data = require('../data.json');
var fs = require('fs');

exports.loadData = function(req, res) {
  res.json(data);
}

exports.saveData = function(req, res) {
  var data = req.body;
  fs.writeFile('data.json', JSON.stringify(data), function(err) {
    if (err) console.log(err);
  });
}
