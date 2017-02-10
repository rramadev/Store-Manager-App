var _ = require('lodash'),
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path');
  // compression = require('compression');

var app = express();

app.set('port', (process.env.PORT || 8080));
// app.use(compression());
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, '')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/' , 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Express-Server: Store-Manager app is running on port', app.get('port'));
});
