var express = require('express');
var routes = require('./routes/routes.js');
var app = express();
var session = require('express-session');
// app.use(express.urlencoded());
app.use(session({
  secret: 'thisIsMySecret'
}));
app.use(express.static(__dirname));

/* Seven routes */
app.get('/', routes.get_main);
app.get('/weatherpage', routes.get_weather);
app.post('/weatherdata')


/* Run the server */

console.log('Author: Hyeon Jeong Choi (choihye)');
app.listen(8080);
console.log('Server running on port 80. Now open http://localhost:8080/ in your browser!');
