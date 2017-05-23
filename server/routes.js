var users = [];
for (var i = 1; i < 5; i++) {
  var uName = './user' + i + '.js';
  users[i-1] = require(uName);
}

module.exports = (app) => {

  var sendFile = (req, res) => {
    res.sendFile(__dirname + '/../build/index.html');
  };

  app.get('/users/all', (req, res) => {
    res.send(users);
  })
};
