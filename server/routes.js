var users = [];
for (var i = 1; i < 5; i++) {
  var uName = './user' + i + '.js';
  users[i-1] = require(uName);
}

module.exports = (app) => {

  app.get('/users/*', (req, res) => {
    console.log(req.url);
    var endPoint = req.url.slice(7);
    console.log('endpoint = ' + endPoint);
    if(endPoint.length > 0 && Number(endPoint) > -1) {
      console.log('in number');
      res.send(users[endPoint])
    } else {
      res.redirect('/');
    }
  })

  app.get('*', (req, res) => {
    console.log('in catchall');
    res.redirect('/');
  });
};
