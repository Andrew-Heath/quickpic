var users = [];
for (var i = 1; i < 5; i++) {
  var uName = './user' + i + '.js';
  users[i-1] = require(uName);
}

module.exports = (app) => {

  app.get('/users/*', (req, res) => {
    // get the given endpoint
    var endPoint = req.url.slice(7);

    // check to see if the endpoint is valid
    if(endPoint === 'all') {
      res.send(users);
    } else if(endPoint.length > 0 && Number(endPoint) > -1) {
      // if so, send back the user image information
      res.send(users[endPoint])
    } else {
      // if not, redirect to the all users page
      res.redirect('/');
    }
  })

  // redirect all unhandled page access to the front page
  app.get('*', (req, res) => {
    console.log('in catchall');
    res.redirect('/');
  });
};
