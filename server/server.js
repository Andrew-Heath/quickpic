var express = require('express');
var routes = require('./routes.js');

var app = express();

app.use(express.static(__dirname + '/../build/'));

routes(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
