
/* Route for the main login page. Displays messages depending on the query value */ 
var getMain = function(req, res) {
  var msgParam = req.query.msg;
  var message;
  // Checks if the user is already logged in. If so, redirects to the restaurant page right away.
  if ((typeof req.session.username !== "undefined") && (req.session.username !== null)) {
	res.redirect('/restaurants');
  } else {
	res.render('main.ejs', {message: message});
  }
};

/* Route for /weatherpage */
var getWeatherPage = function(req, res) {
    res.render('../views/weatherpage.ejs');
};

var routes = { 
    get_main: getMain,
    get_weather: getWeatherPage,
};

module.exports = routes;
