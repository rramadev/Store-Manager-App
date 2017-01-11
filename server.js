var _ = require('lodash'),
  express = require('express'),
  bodyParser = require('body-parser');
  // compression = require('compression');

var app = express();

app.set('port', (process.env.PORT || 8080));
// app.use(compression());
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
