/* Route for the main login page. Displays messages depending on the query value */ 
var getMain = function(req, res) {
  res.render('main.ejs');
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