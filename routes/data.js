var data = require('../data.json');

exports.getData = function(req, res) {
  res.json(data);
}
