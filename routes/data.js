var data = require('../data.json');

exports.loadData = function(req, res) {
  // Allow client to access data.json
  res.json(data);
}
