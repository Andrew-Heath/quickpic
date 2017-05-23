var users = [];
for (var i = 1; i < 5; i++) {
  var uName = './user' + i + '.js';
  users[i-1] = require(uName);
}

module.exports = (app) => {

  var sendFile = (req, res) => {
    res.sendFile(__dirname + '/../build/index.html');
  };

  app.get('/users/*', (req, res) => {
    var endPoint = req.url.slice(7);
    if(Number(endPoint)) {
      res.send(users[endPoint])
    } else {
      sendFile(req,res);
    }
  })
};
